'use strict';
const fs = require('node:fs');
const path = require('node:path');

function readCatalog(skillsDir) {
  return fs
    .readdirSync(skillsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(skillsDir, entry.name, 'SKILL.md')))
    .map((entry) => entry.name)
    .sort()
    .map((name) => {
      const text = fs.readFileSync(path.join(skillsDir, name, 'SKILL.md'), 'utf8');
      const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text)?.[1] ?? '';
      const refines = /^[ \t]+sdlc-refines:[ \t]*(\S+)/m.exec(frontmatter);
      return { name, refines: refines ? refines[1] : null, text };
    });
}

function checkCatalog(skills) {
  const byName = new Map(skills.map((skill) => [skill.name, skill]));
  const problems = [];
  for (const skill of skills) {
    if (skill.refines && !byName.has(skill.refines)) {
      problems.push(`${skill.name}: sdlc-refines names "${skill.refines}", which is no skill of the catalog`);
      continue;
    }
    const { chain, cycle } = chainOf(skill, byName);
    if (cycle) {
      problems.push(`${skill.name}: the chain of sdlc-refines ${chain.join(' -> ')} reaches no root`);
      continue;
    }
    const referenced = referencedSkills(skill.text, byName);
    if (skill.refines && !referenced.has(skill.refines)) {
      problems.push(`${skill.name}: does not refer to \`${skill.refines}\`, the skill it refines`);
    }
    for (const name of referenced) {
      if (!chain.includes(name)) {
        problems.push(`${skill.name}: refers to \`${name}\`, a skill outside its chain of sdlc-refines`);
      }
    }
  }
  return problems;
}

function referencedSkills(text, byName) {
  const names = new Set();
  for (const [, span] of text.matchAll(/`([^`\n]+)`/g)) {
    if (byName.has(span)) names.add(span);
  }
  return names;
}

function chainOf(skill, byName) {
  const chain = [skill.name];
  let next = skill.refines;
  while (next && byName.has(next)) {
    const cycle = chain.includes(next);
    // The name met twice is kept, so the chain shows where it closes.
    chain.push(next);
    if (cycle) return { chain, cycle: true };
    next = byName.get(next).refines;
  }
  return { chain, cycle: false };
}

module.exports = { readCatalog, checkCatalog };
