'use strict';
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { readCatalog, checkCatalog } = require('../scripts/ci/lint/refinement-chain');

const skill = (name, refines = null, text = '', level = null) => ({ name, refines, text, level });
const root = skill('software-life-cycle', null, '', 'life-cycle');

test('reports a skill refining a skill the catalog does not hold', () => {
  assert.deepStrictEqual(checkCatalog([root, skill('verification', 'verificaton')]), [
    'verification: sdlc-refines names "verificaton", which is no skill of the catalog',
  ]);
});

test('reports a chain of refinement that returns to a skill it has passed', () => {
  assert.deepStrictEqual(
    checkCatalog([skill('review', 'testing', 'Refines `testing`.'), skill('testing', 'review', 'Refines `review`.')]),
    [
      'review: the chain of sdlc-refines review -> testing -> review reaches no root',
      'testing: the chain of sdlc-refines testing -> review -> testing reaches no root',
    ],
  );
});

test('reports a reference in backticks to a skill outside the chain of refinement', () => {
  assert.deepStrictEqual(
    checkCatalog([
      root,
      skill('verification', 'software-life-cycle', 'Refines `software-life-cycle`.', 'process'),
      skill('implementation', 'software-life-cycle', 'Refines `software-life-cycle`.', 'process'),
      skill('testing', 'verification', '`testing` refines `verification` of `software-life-cycle`; units come from `implementation`.', 'practice'),
    ]),
    ['testing: refers to `implementation`, a skill outside its chain of sdlc-refines'],
  );
});

test('reports a skill whose text does not refer to the skill it refines', () => {
  assert.deepStrictEqual(checkCatalog([root, skill('verification', 'software-life-cycle', 'No name.', 'process')]), [
    'verification: does not refer to `software-life-cycle`, the skill it refines',
  ]);
});

test('reports a skill that carries no sdlc-level', () => {
  assert.deepStrictEqual(checkCatalog([root, skill('verification', 'software-life-cycle', 'Refines `software-life-cycle`.')]), [
    'verification: carries no metadata key sdlc-level',
  ]);
});

test('reports an sdlc-level its chain of refinement contradicts', () => {
  assert.deepStrictEqual(
    checkCatalog([
      root,
      skill('verification', 'software-life-cycle', 'Refines `software-life-cycle`.', 'process'),
      skill('testing', 'verification', 'Refines `verification`.', 'process'),
    ]),
    ['testing: sdlc-level is "process", but its chain of sdlc-refines places it at "practice"'],
  );
});

test('reads each skill by its directory, with sdlc-refines and sdlc-level from the frontmatter alone', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'refinement-chain-'));
  try {
    const sources = {
      'software-life-cycle': '---\nname: software-life-cycle\nmetadata:\n  sdlc-level: life-cycle\n---\n\nA child writes:\n\n    metadata:\n      sdlc-refines: verification\n      sdlc-level: process\n',
      verification: '---\r\nname: verification\r\nmetadata:\r\n  sdlc-refines: software-life-cycle\r\n  sdlc-level: process\r\n---\r\n',
    };
    for (const [name, source] of Object.entries(sources)) {
      fs.mkdirSync(path.join(dir, name));
      fs.writeFileSync(path.join(dir, name, 'SKILL.md'), source);
    }
    fs.mkdirSync(path.join(dir, 'assets'));
    assert.deepStrictEqual(readCatalog(dir), [
      { name: 'software-life-cycle', refines: null, level: 'life-cycle', text: sources['software-life-cycle'] },
      { name: 'verification', refines: 'software-life-cycle', level: 'process', text: sources.verification },
    ]);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('finds no breach in the catalog of this repository', () => {
  assert.deepStrictEqual(checkCatalog(readCatalog(path.join(__dirname, '..', 'skills'))), []);
});
