---
name: configuration-management
description: Keeps project files, dependencies and baselines under control - each change decided and recorded, the history kept, releases approved. Use when a change is committed or merged into a baseline - its approval and record, not the build of the whole; when a branch, tag or version is created, rewritten or deleted; when branching or release rules are set; when a release is approved, not deployed.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Configuration management

This skill refines `software-life-cycle` for the configuration management process: the project
manages and controls its system elements and configurations over the life cycle and keeps the
integrity of its identified outputs. The agent shall follow the organization's policy and procedures
for configuration management, where the organization has set them.

| Term | For a change under version control |
|---|---|
| configuration item | what the project placed under configuration management: source code, build and configuration files, documents, the versions of the off-the-shelf products it uses, test data |
| baseline | an agreed, recorded state of the items the next change rests on: the approved line of development, an identified version, a release |
| configuration management strategy and plan | what the project has recorded - the rules for the lines of development, versioning, change control and release, in its rules for contributors or the conventions of its version control system |
| change request | a recorded proposal of a change; a request for variance is a deviation, a waiver or a departure |
| approval of a change | the decision of the authority the configuration management strategy names - the reviewer the project's rules require, the maintainers -; else the user |
| change history, change control record | the version control history, with each change's reason and authority |

For a small change, the agent may leave out the step "Impact", scaling the process to the change
(`software-life-cycle`).

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| establishing or changing a baseline - a change entering the approved line of development, an identifier that marks a baseline | the verification of the change is not known to have passed; an audit has found a discrepancy; an identifier that marks a baseline takes the conditions of the baseline; a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Approval; Tracking; History; Baselines of `references/identification.md` |
| approving or rejecting a change request or a request for variance | - | Request; Evaluation; Impact; Approval |
| deleting or rewriting the recorded history of an item - rewriting a published line of development, deleting the identifier of a version | the act destroys history needed to restore a baseline; the history falls under a retention period the organization's policy, an agreement or the legislation sets | Reason and authority; History |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as a change's reason and authority.
Where a rule of the project's life cycle model or the configuration management strategy reserves the decision
on an act of this skill to a party the user is not - a configuration control board, the reviewer the
project's rules require -, the request does not carry that decision. The agent shall not ignore
the request there. The agent shall not bypass the rule. The agent should agree the order of actions
with the user. Where nothing names a party, the user's explicit request decides. The agent may
change the working copy, and a line of work that is no baseline, as part of the requested work.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the strategy or plan is set or changed - the strategy for parallel lines of development | `references/planning.md` | Change control; Approval |
| items, their structure, identifiers or baselines are defined - a new component | `references/identification.md` | Items only; Description |
| the project works under an agreement with an acquirer, or with suppliers whose elements are part of the system | `references/supply-chain.md` | Third-party components; Request |
| a changelog, release notes or a status summary is produced, or item history is looked up | `references/status-accounting.md` | History |
| a configuration audit or another configuration check is due | `references/audit.md` | Tracking |
| a release or a delivery is prepared, approved or tracked | `references/release.md` | Tracking |
| an item performs a function critical to safety or security | `references/release.md` | Request |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## Changing an item under configuration management

Outcomes served: items managed, changes managed, status maintained.

The common situation is a change to the project's files under version control, from the request to
the changed baseline - "fix the parser".

| Step | What the agent does |
|---|---|
| Request | shall define and record each change request and request for variance, including a corrective action's correction, a diagnosed error's fix, and a change to an infrastructure element, a knowledge asset or a controlled document |
| Change control | should change an agreed baseline only by the change control method the project adopted |
| Evaluation | shall coordinate, analyse and evaluate each request, and have it decided: accepted and implemented, or rejected and closed |
| Impact | should name the impact of the change on the plans, costs, benefits, risks, quality and dates, stating "none" where it has none |
| Need against impact | should compare in the evaluation the need for the change with its impact |
| Items only | should baseline only configuration items: no build output, local setting or credentials |
| Third-party components | should treat a third-party component of the product as a configuration item with its version and source recorded - an off-the-shelf product of a fixed version |
| Description | shall keep the description of each configuration item current |
| Reason and authority | shall record each change with its reason and authority in the change history, referring to the change request |
| Concurrent changes | should control concurrent changes of one item by independent performers, other agents included: overwriting none, resolving a conflict between them keeping both changes or presenting it as a decision |
| Approval | shall submit the request for analysis and approval to the parties the strategy names, never approving its own request |
| Tracking | shall track and manage each approved change of a baseline and each request for variance until closure: the item implemented, verified and released |
| Closing a change | should prioritize, trace, plan and close the changes, which the technical processes make and verification and validation confirm |
| History | shall keep the history of each item by a mechanism registering the items, their submission and their release, so that a baseline can be restored |
