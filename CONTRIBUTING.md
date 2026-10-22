# Contributing to SDLC

## Taking part

A person should report a defect or suggest an enhancement in an
[issue of the project](https://github.com/ssoft-hub/sdlc/issues): a defect in an issue of type
`Fix`, an enhancement in an issue of the type the table of the Issues section gives it. A pull
request should implement an enhancement only once the maintainers have agreed to it in the
issue.

## Conduct

Every participant of the project shall follow the
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) in
issues, pull requests and every other space of the project. A participant should report a
violation in a private message on Telegram to [@te_ssoft](https://t.me/te_ssoft). The maintainers
shall enforce the Covenant as its Enforcement Guidelines state.

## Issues

A reporter should open an issue for one problem or one goal, where no open issue carries it
already.

| Part | Force | Rule |
|---|---|---|
| Title | shall | `Type(scope): Subject`, the scope optional; the subject imperative, capitalised, with no final period; the whole title at most 80 characters |
| Type | should | one of the table below |
| Body of a `Fix` | shall | the sections `Problem`, `Steps to reproduce`, `Expected behaviour`, `Actual behaviour`, `Acceptance criteria` and `Environment` |
| Body of any other type | shall | the sections `Goal` and `Acceptance criteria` |
| `Goal`, `Problem` | shall | the symptom or the missing capability, its cost and what triggers it; no history of the discovery, no alternative weighed |
| `Steps to reproduce` | shall | one action per step |
| Acceptance criterion | shall | one condition, `Given ..., when ..., then ...`, ticked by one observation of what the work delivers by the time the issue closes |
| Criteria of a `Fix` | shall | one criterion for an eval case or a test reproducing the defect that fails before the change, and one for it passing against the change |
| Plan of checks | shall | none in the body |
| Table of situations | shall | in the issue of a skill, agreed before the text is written: each row gives the result a rule asks for, the clause of a standard it rests on or the reason it rests on none, its force, and the reason for a force other than its clause gives; the text and the cases of the skill are built from its rows |

```
Feat(verification): Add the verification process skill
```

| Type | What the issue covers |
|---|---|
| `Feat` | a skill, an agent, a command or a hook a user does not have yet |
| `Fix` | behaviour that departs from what the catalog states it does |
| `Refactor` | the shape of a skill or of the code, with nothing a user sees changed |
| `Perf` | a measured cost - tokens, time, size - that the work brings down |
| `Docs` | what a reader is told, in the documentation or the wiki |
| `Test` | an eval case or a test where none reaches the behaviour yet |
| `Chore` | the plugin manifest, the tooling or a dependency |
| `Ci` | the pipeline running the checks |
| `Style` | formatting alone, with no rule and no wording changed |

## Branches

| Branch | Holds | Reached by |
|---|---|---|
| `main` | released versions; the default branch, from which the catalog is installed | a pull request from `dev` at a release |
| `dev` | everything done and not yet released | a pull request from a working branch |
| working branch | one issue | branched from `dev` |

No commit shall land on `main` or `dev` directly.

## Agents

The catalog serves any agent reading the open
[Agent Skills](https://agentskills.io/specification) format: Claude Code, Codex, Cursor and
others. Each part of the repository is read by every such agent or by one alone:

| Part | Read by | Holds |
|---|---|---|
| `skills/` | every agent reading the Agent Skills format | the skills of the catalog |
| `AGENTS.md` | every agent reading that file | the instructions for an agent working in this repository |
| `.claude-plugin/` | Claude Code | the plugin manifest and the marketplace catalog |
| `evals/` | an evaluation tool, such as `claude plugin eval` of Claude Code | the eval cases of the skills |

| Subject | Force | Rule |
|---|---|---|
| A skill | shall | holds its rules whole in `skills/<name>/`, so that every agent applies it alike |
| A part of one agent | shall | holds nothing a skill needs: a manifest, a hook or a setting of one agent adds to the skills and changes none of their rules |
| A new agent | shall | a part one more agent alone reads stands in its own directory, named after that agent's convention, and enters the table above |

## Workflow

| Step | Force | Rule |
|---|---|---|
| Issue | should | a change starts from an issue |
| Branch | shall | from `dev`, named as the Commits and branches section states |
| Changelog | shall | a key change has an entry in `CHANGELOG.md`, new or corrected, as the Changelog section states |
| Pull request | shall | targets `dev`; titled `SDLC-<n>: Subject`, where `<n>` is the number of the issue, or in the form of a commit subject where the request has no issue; the description carries the sections `Problem`, `Summary`, `Implementation` and `Test plan` |
| Merge | shall | the request is merged into `dev` once its checks have passed, its review is given and every acceptance criterion of its issue is checked |
| Close | shall | the issue is closed once its request merges into `dev`: GitHub closes an issue by itself only on a merge into the default branch, `main` |

A pull request adding a skill or changing a rule of a skill shall carry what the subsection
What a pull request with a skill carries lists.

### From a clone to a pull request

| Step | Force | Rule |
|---|---|---|
| Clone | shall | a member clones the project: `git clone https://github.com/ssoft-hub/sdlc.git`; a person who is not a member forks it on GitHub, clones the fork and adds the project as the remote `upstream`: `git remote add upstream https://github.com/ssoft-hub/sdlc.git` |
| Branch | shall | from the current branch `dev` of the project: `git fetch origin` and `git switch -c <branch> --no-track origin/dev` in a clone of the project, `git fetch upstream` and `git switch -c <branch> --no-track upstream/dev` in a clone of a fork |
| Check | shall | the checks of the Checks section pass |
| Commits | shall | as the Commits and branches section states |
| Push | shall | `git push -u origin HEAD` |
| Pull request | shall | into `dev` of [ssoft-hub/sdlc](https://github.com/ssoft-hub/sdlc), also from a fork |

### Pull requests from a fork

The author of a pull request from a fork should allow edits by maintainers, so a maintainer
can rebase the branch onto `dev`.

## Licence

By opening a pull request, a contributor affirms the right to contribute the content of the
request and contributes it under the terms of `LICENSE.md`.

## Writing

| Subject | Force | Rule |
|---|---|---|
| Language | shall | English: skills, agents, commands, code, comments, commits, issues, pull requests |
| Terms | shall | a term of ISO/IEC/IEEE 12207:2017 or ISO/IEC/IEEE 24765:2017; where both lack one, a term of the standard refining the process, such as ISO/IEC/IEEE 29119 for testing; where no standard has one, the term of the documentation of the language or the tool; where none has one, the term agreed in the issue |
| Punctuation | shall | keyboard characters in text for human readers: `-` for a dash, `"` and `'` for quotes, `...` for an ellipsis |

## Checks

```sh
node --test
```

- The eval cases in `evals/` run under an evaluation tool of the contributor's choice, such as
  `claude plugin eval .` for Claude Code; the results of a run shall not be committed. A comparison
  with the whole catalog and without it is not the measurement of one skill the Writing a
  skill section describes.
- A test holds the behaviour of code or a relation between two artifacts; a test comparing
  one text with another shall not be written.

## Writing a skill

### Level and name

| Level | Covers | Refines | Name | Example |
|---|---|---|---|---|
| Life cycle | the life cycle model, its stages and their decision gates | - | `software-life-cycle` | - |
| Process | one life cycle process of ISO/IEC/IEEE 12207:2017 | the life cycle | the name of the process in 12207, without the word "process" and the qualifier "System/Software" | `verification`, `requirements-definition` |
| Practice | one way of carrying out one process, after the standard refining it where one exists | one process | the name of the practice in ISO/IEC/IEEE 24765, or where it has none, in the standard refining the process, or where neither has one, the name agreed in the issue of the skill | `testing` |
| Language or tool | what a language or a tool adds to a practice | a practice | the name of the language or the tool in `a-z` and `0-9`, then the name of the practice | `cpp-testing` for C++ |

| Subject | Force | Rule |
|---|---|---|
| Place | shall | a skill lives in `skills/<name>/SKILL.md` |
| Name | shall | `a-z` and `0-9` in words joined by single hyphens, at most 64 characters; the `name` key of `SKILL.md` equals the name of its directory |
| Description | shall | the `description` key of `SKILL.md` says what the skill does and when an agent applies it, in at most 1024 characters |
| Files | may | the directory of a skill holds, beside `SKILL.md`, the files the skill uses: documentation such as a vocabulary in `references/`, scripts in `scripts/`, templates and data in `assets/` |
| File references | shall | `SKILL.md` refers to each file of its directory by its path inside the directory, one level deep |
| Size | should | `SKILL.md` stays under 500 lines |
| Parent | shall | `SKILL.md` of a skill of the Life cycle level, a root, carries no metadata key `sdlc-refines`; `SKILL.md` of a skill of any other level carries `sdlc-refines` holding the name of the one skill it refines |
| Chain | shall | following `sdlc-refines` from any skill reaches a root |

```
---
name: testing
description: ...
metadata:
  sdlc-refines: verification
---
```

### What a skill holds

| Level | Force | Holds |
|---|---|---|
| Life cycle | shall | the stages of the life cycle, the processes each stage draws on, and the decision gates that open and close the work of each stage |
| Process | shall | at least the parts of the table below; of ISO/IEC/IEEE 12207 the purpose, the outcomes, the activities and the tasks of the process, of ISO/IEC 33061 its base practices, each as a task, and its work products, and of any other standard only what changes a task of it |
| Practice | shall | a reference by name to the outcomes of the process it refines that the practice achieves, and how it achieves them |
| Language or tool | shall | what the language or the tool changes in how the practice achieves its outcomes: a command, a construct, a limit |

| Part of a process skill | Holds | After |
|---|---|---|
| Purpose | the goal of performing the process, in one statement | ISO/IEC 33004, 5.4 |
| Outcomes | the results that show the purpose achieved, together necessary and sufficient for it; each one named and observable as an artifact produced, a change of state or a constraint met | ISO/IEC 33004, 5.4 |
| Activities and tasks | how the outcomes are reached, each task tied to the outcomes it contributes to | ISO/IEC/IEEE 24774 |
| Inputs | the work products the process uses, each with the outcomes it serves and its source: the process or the party outside the life cycle it comes from | ISO/IEC 15504-5, now ISO/IEC 33061, for the work products and their outcomes; the source is this catalog's addition |
| Outputs | the work products the process produces, each with the outcomes it serves and its receiver: the process or the party outside the life cycle it passes to | ISO/IEC 15504-5, now ISO/IEC 33061, for the work products and their outcomes; the receiver is this catalog's addition |

| Subject | Force | Rule |
|---|---|---|
| Any project | shall | the text holds in any project of a user, since an agent reads it there: it names no file, branch or path of this repository outside the skill's own directory, and cites no clause of a standard |
| Force | shall | every rule states its force with a verbal form of ISO/IEC Directives, Part 2: shall or shall not for a requirement, should or should not for a recommendation, may or need not for a permission; can or cannot state a possibility and must an external constraint, and neither states the force of a rule; a section of a skill carries no force marker |
| Force of a source | shall | a rule resting on a clause of a standard takes the force of that clause's verbal form; the purpose, an outcome, an activity, a task or a base practice of a process gives shall, a statement with no verbal form in a normative clause gives should, and an informative clause - a note, a technical report, a recommended practice - gives should; a different force, or a rule resting on no clause, is given with its reason in the table of situations |
| A narrower skill | shall | it refers to the skill it refines by its name in backticks, takes that skill's purpose, outcomes, activities, tasks, inputs, outputs and names as given, contradicts none of them and refers to them by name rather than restating them |
| References | shall | a skill refers in backticks to no skill of the catalog outside its chain of `sdlc-refines`, so a root refers in backticks to no other skill |
| Standards | shall | a skill contradicts none of the standards this file names, nor the standard refining its process |
| Beyond the standards | may | a skill holds what no standard states, such as a convention, a practice of the field or the command of a tool |
| One concern | should | a concern an existing skill covers becomes a rule of that skill, not a new skill |
| Hooks | shall | a skill names no hook, and no rule of a skill relies on a hook being present |

### What a pull request with a skill carries

| Subject | Force | Rule |
|---|---|---|
| Eval cases | shall | cases in `evals/<name>/` that together reach every outcome of a process skill, every stage of the life cycle skill and every rule of every skill, each judged by the result a response leaves, never by the way it reached that result |
| Known responses | shall | beside every case, a response known to pass and one known to fail |
| Indicator | may | a case may carry an indicator that the skill was loaded; the indicator reports and is no part of the verdict |
| Kept cases | shall | a case stays in the suite even where a response without the skill passes it |

A skill may be measured by running its own cases with the skill and without it, or, for a
change, before the change and after it. Each run shall load the ancestors of the measured skill
along `sdlc-refines` up to its root and, in every run but the one without the skill, the skill
itself, and no other skill, so that no other narrower skill shows in the score. A
measurement depends on the model and ages, so a request need not carry one.

## Hooks

A hook shall check only a rule a skill states, and shall carry no rule of its own.

## Commits and branches

Commit messages shall follow
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). What the
specification leaves to the project:

| Part | Force | Rule |
|---|---|---|
| `<type>` | shall | `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, or one more lowercase word for a recurring kind of work none of these names |
| `(scope)` | should | the skill or the part of the catalog the change touches |
| `!` | shall | marks a change that removes or renames a skill, an agent, a command or a hook, or changes a rule of a skill so that a response its cases passed before now fails; the body says what changes for a user |
| First line | shall | at most 72 characters |
| Body | shall | wrapped at 72: why the change was made and what it solves |
| Issue | should | named by the branch and the pull request title; a footer names it where the issue was opened after the branch, whose name therefore carries no issue number |

```
feat(verification): add the verification process skill
```

A contributor shall name a branch `<user>/<type>/SDLC-<n>/<subject>`, without `SDLC-<n>` where no
issue is linked. Every commit of the branch shall pass the checks of the Checks section.

## Changelog

`CHANGELOG.md` shall follow Keep a Changelog; `[Unreleased]` collects the release in progress. The
rules below bind every entry a change adds or corrects.

| Rule | Force |
|---|---|
| An entry records a key change a user notices: a new skill, agent, command or hook, a change of behaviour, a break, a fix of a visible defect | should |
| A refactoring, a test, a tooling or a pipeline change takes no entry | should |
| Subsections appear once each, in the order `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed` | shall |
| An entry is one sentence of at most 100 characters saying what changed, with no detail or retelling | shall |
| No two entries of a release cover the same change: the entry already covering it is extended to the change, and no new one is added | shall |
| An entry of the release in progress that a change makes untrue is corrected in place | shall |
| No entry contradicts the catalog | shall |

```
- [verification] Added `verification`, the process skill after ISO/IEC/IEEE 12207 6.4.9
- [testing] Added `cpp-testing`, the C++ refinement of `testing`
```

## Release

| Step | Force | Rule |
|---|---|---|
| `[Unreleased]` | shall | its entries meet the rules of the Changelog section, and its heading is renamed to the version and date |
| Version | shall | `version` of `.claude-plugin/plugin.json` carries the new version |
| Merge | shall | a pull request from `dev` into `main`; the merge commit on `main` is tagged `v<version>` |
| Released heading | shall | a released heading of `CHANGELOG.md` stays as it is |
