'use strict';
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { readCatalog, checkCatalog } = require('../scripts/ci/lint/refinement-chain');

const skill = (name, refines = null, text = '') => ({ name, refines, text });
const root = skill('software-life-cycle');

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
      skill('verification', 'software-life-cycle', 'Refines `software-life-cycle`.'),
      skill('implementation', 'software-life-cycle', 'Refines `software-life-cycle`.'),
      skill('testing', 'verification', '`testing` refines `verification` of `software-life-cycle`; units come from `implementation`.'),
    ]),
    ['testing: refers to `implementation`, a skill outside its chain of sdlc-refines'],
  );
});

test('reports a skill whose text does not refer to the skill it refines', () => {
  assert.deepStrictEqual(checkCatalog([root, skill('verification', 'software-life-cycle', 'No name.')]), [
    'verification: does not refer to `software-life-cycle`, the skill it refines',
  ]);
});

test('reads each skill by its directory, with sdlc-refines from the frontmatter alone', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'refinement-chain-'));
  try {
    const sources = {
      'software-life-cycle': '---\nname: software-life-cycle\n---\n\nA child writes:\n\n    metadata:\n      sdlc-refines: verification\n',
      verification: '---\r\nname: verification\r\nmetadata:\r\n  sdlc-refines: software-life-cycle\r\n---\r\n',
    };
    for (const [name, source] of Object.entries(sources)) {
      fs.mkdirSync(path.join(dir, name));
      fs.writeFileSync(path.join(dir, name, 'SKILL.md'), source);
    }
    fs.mkdirSync(path.join(dir, 'assets'));
    assert.deepStrictEqual(readCatalog(dir), [
      { name: 'software-life-cycle', refines: null, text: sources['software-life-cycle'] },
      { name: 'verification', refines: 'software-life-cycle', text: sources.verification },
    ]);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

test('finds no breach in the catalog of this repository', () => {
  assert.deepStrictEqual(checkCatalog(readCatalog(path.join(__dirname, '..', 'skills'))), []);
});
