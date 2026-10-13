# Contributing to SDLC

## Taking part

A person should report a defect or suggest an enhancement in an
[issue of the project](https://github.com/ssoft-hub/sdlc/issues): a defect in an issue of type
`Fix`, an enhancement in an issue of the type the table of the Issues section gives it. A pull
request should implement an enhancement only once the maintainers have agreed to it in the
issue.

## Conduct

Every participant of the project must follow the
[Contributor Covenant 2.1](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) in
issues, pull requests and every other space of the project. A participant should report a
violation in a private message on Telegram to [@te_ssoft](https://t.me/te_ssoft). The maintainers
must enforce the Covenant as its Enforcement Guidelines state.

## Issues

A reporter should open an issue for one concern, where no open issue carries that concern
already.

| Part | Force | Rule |
|---|---|---|
| Title | must | `Type(scope): Subject`, the scope optional; the subject imperative, capitalised, with no final period; the whole title at most 80 characters |
| Type | should | one of the table below |
| Body of a `Fix` | must | the sections `Problem`, `Steps to reproduce`, `Expected behaviour`, `Actual behaviour`, `Acceptance criteria` and `Environment` |
| Body of any other type | must | the sections `Goal` and `Acceptance criteria` |
| `Goal`, `Problem` | must | the symptom or the missing capability, its cost and what triggers it; no history of the discovery, no alternative weighed |
| `Steps to reproduce` | must | one action per step |
| Acceptance criterion | must | one condition, `Given ..., when ..., then ...`, ticked by one observation of what the work delivers by the time the issue closes |
| Criteria of a `Fix` | must | one criterion for an eval case or a test reproducing the defect that fails before the change, and one for it passing against the change |
| Plan of checks | must | none in the body |

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

No commit lands on `main` or `dev` directly.

## Workflow

| Step | Force | Rule |
|---|---|---|
| Issue | should | a change starts from an issue |
| Branch | must | from `dev`, named as the Commits and branches section states |
| Changelog | must | a key change has an entry in `CHANGELOG.md`, new or corrected, as the Changelog section states |
| Pull request | must | targets `dev`; titled `SDLC-<n>: Subject`, where `<n>` is the number of the issue, or in the form of a commit subject where the request has no issue; the description carries the sections `Problem`, `Summary`, `Implementation` and `Test plan` |
| Merge | must | the request is merged into `dev` once its checks have passed, its review is given and every acceptance criterion of its issue is checked |
| Close | must | the issue is closed once its request merges into `dev`: GitHub closes an issue by itself only on a merge into the default branch, `main` |

A change to a skill goes through a case table, the text, a review of the skill alone, eval
cases judged by outcome, a judge check and a measurement with and without the skill.

### From a clone to a pull request

| Step | Force | Rule |
|---|---|---|
| Clone | must | a member clones the project: `git clone https://github.com/ssoft-hub/sdlc.git`; a person who is not a member forks it on GitHub, clones the fork and adds the project as the remote `upstream`: `git remote add upstream https://github.com/ssoft-hub/sdlc.git` |
| Branch | must | from the current branch `dev` of the project: `git fetch origin` and `git switch -c <branch> --no-track origin/dev` in a clone of the project, `git fetch upstream` and `git switch -c <branch> --no-track upstream/dev` in a clone of a fork |
| Check | must | the checks of the Checks section pass |
| Commits | must | as the Commits and branches section states |
| Push | must | `git push -u origin HEAD` |
| Pull request | must | into `dev` of [ssoft-hub/sdlc](https://github.com/ssoft-hub/sdlc), also from a fork |

### Pull requests from a fork

The author of a pull request from a fork should allow edits by maintainers, so a maintainer
can rebase the branch onto `dev`.

## Licence

By opening a pull request, a contributor affirms the right to contribute the content of the
request and contributes it under the terms of `LICENSE.md`.

## Writing

| Subject | Force | Rule |
|---|---|---|
| Language | must | English: skills, agents, commands, code, comments, commits, issues, pull requests |
| Terms | must | the terms of the standards a skill rests on, ISO/IEC/IEEE 12207 and 24765 first; no coined jargon |
| Punctuation | must | keyboard characters in text for human readers: `-` for a dash, `"` and `'` for quotes, `...` for an ellipsis |
| Comments | should | only a lint suppression, a formatter hint, a section marker or a fact the code cannot show |

## Checks

```sh
node --test
```

- An eval suite runs with `claude plugin eval .` from the root of the repository; a run
  writes to `evals/results/`, which is not committed.
- A test holds the behaviour of code or a relation between two artifacts; a test comparing
  one text with another is not written.

## Commits and branches

Commit messages must follow
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). What the
specification leaves to the project:

| Part | Force | Rule |
|---|---|---|
| `<type>` | must | `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, or one more lowercase word for a recurring kind of work none of these names |
| `(scope)` | should | the skill or the part of the catalog the change touches |
| `!` | must | marks a change that breaks a user; the body says what breaks |
| First line | must | at most 72 characters |
| Body | must | wrapped at 72: why the change was made and what it solves |
| Issue | should | named by the branch and the pull request title; a footer only where neither makes the link plain |

```
feat(verification): add the verification process skill
```

A contributor must name a branch `<user>/<type>/SDLC-<n>/<subject>`, without `SDLC-<n>` where no
issue is linked. Every commit of the branch must pass the checks of the Checks section.

## Changelog

`CHANGELOG.md` follows Keep a Changelog; `[Unreleased]` collects the release in progress. The
rules below bind every entry a change adds or corrects.

| Rule | Force |
|---|---|
| An entry records a key change a user notices: a new skill, agent, command or hook, a change of behaviour, a break, a fix of a visible defect | should |
| A refactoring, a test, a tooling or a pipeline change takes no entry | should |
| Subsections appear once each, in the order `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed` | must |
| An entry is one sentence of at most 100 characters saying what changed, with no detail or retelling | must |
| No two entries of a release cover the same change: the entry already covering it is extended to the change, and no new one is added | must |
| An entry of the release in progress that a change makes untrue is corrected in place | must |
| No entry contradicts the catalog | must |

```
- [verification] Added `verification`, the process skill after ISO/IEC/IEEE 12207 6.4.9
- [testing] Added `cpp-testing`, the C++ refinement of `testing`
```

## Release

| Step | Force | Rule |
|---|---|---|
| `[Unreleased]` | must | its entries meet the rules of the Changelog section, and its heading is renamed to the version and date |
| Version | must | `version` of `.claude-plugin/plugin.json` carries the new version |
| Merge | must | a pull request from `dev` into `main`; the merge commit on `main` is tagged `v<version>` |
| Released heading | must | a released heading of `CHANGELOG.md` stays as it is |
