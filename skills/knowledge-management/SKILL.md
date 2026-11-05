---
name: knowledge-management
description: Records, shares and reuses the project's knowledge - lessons learned, decision rationale, guides - and its reusable assets. Use when a lesson, a rationale, a guide or a template is written down or shared; when a library, a component or an agent skill is made reusable inside the organization, changed or retired; when knowledge or assets are classified or their use tracked. Not for training people.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Knowledge management

This skill refines `software-life-cycle` for the knowledge management process: the organization
gains the capabilities and assets by which it reuses the knowledge it has. The agent shall carry
out its tasks under the organization's policy and procedures, where set.

Knowledge is what the people of the project know about the product, its area and the work on it.
A knowledge asset is recorded knowledge or a reusable element kept to be applied again: a system
element or its representation (a reusable software element, a reference architecture), a design element (a pattern),
a process, a criterion, or other technical information (a guide, a recorded decision with its
rationale, a lesson learned, a template, a training material, a skill or instructions for an
agent).

| Term | For knowledge met in the work |
|---|---|
| organization | whoever disposes of the project's knowledge: the owner, the maintainers; in a single-owner project, the project itself, whose owner is also the sponsor, the steering function and the administrator of the reuse program |
| knowledge item | one piece of knowledge recorded: a lesson learned, a decision with its rationale, a guide |
| knowledge repository | the place the project names for its records of knowledge |
| knowledge management strategy, asset management strategy, reuse strategy | what the project has recorded - its rules on which knowledge it keeps, where, and who may read it, the reuse policy in force, the business goals |
| classification scheme | the classification of knowledge and skills and the asset classification scheme, as recorded |
| a role of the reuse processes: the reuse sponsor, the steering function, a domain engineer, an asset manager, a program administrator | whoever the project assigns to it; where no one is assigned, the organization |

The agent shall hold each review that a rule of this skill requires of an organizational asset or
plan with the participants that rule names, in the way the project holds its reviews. The agent
shall record each such review.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| publishing knowledge or an asset outside the organization, or opening access to it | the knowledge is classified or important information with restricted access; the rights to the asset do not allow distributing it; a condition that can be checked before the act but is not confirmed counts as unmet, and the act waits | Record |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the record of a knowledge item.
Where a rule of the project names who decides an act of the table - a maintainer, a licence
review -, the agent shall take an explicit request as that decision only where the user is that
party. The agent may record knowledge in the knowledge repository under the project's rules without
a decision, unless the record publishes it outside the organization or changes a project rule on how
work is done.

Setting, changing or cancelling a rule on how work is done is an act of the life cycle model
management process. Delivering or publishing a product to whoever obtains it is an act of the supply
process.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| a strategy, a classification, the asset criteria, the expert network, the means of organizational learning or the asset repository and its retrieval mechanism is defined, changed or set up | `references/strategy.md` | Identification; Record |
| an element is made reusable, submitted to or accepted into the asset repository, or proposed for a product | `references/assets.md` | Reusable assets |
| an asset others use is changed, reported on or retired, or the use of knowledge or assets is tracked | `references/assets-in-use.md` | Maintenance |
| the reuse program is started or run | `references/reuse-program.md` | Identification |
| a domain is engineered: its model, vocabulary, architecture and asset specifications | `references/domain-engineering.md` | Identification |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition
to those of this file.

## Knowledge met in the work

Outcomes served: strategy defined, knowledge developed, knowledge available.

The common situation is a piece of knowledge met in the work recorded or shared - "write down what
we learned from this outage".

| Step | What the agent does |
|---|---|
| Identification | shall identify the knowledge, skills and knowledge assets to be managed; an explicit request states its own |
| What is missing | should propose the knowledge management strategy, or what the recorded one lacks, and present it with the output of the work for a decision |
| Reusable assets | shall identify the assets to be made available for reuse |
| Benefit | shall identify the projects that can benefit from applying them |
| Obtaining | shall obtain or acquire knowledge and skills as records; a person's skills are developed by the human resource management process |
| Record | shall define and record each knowledge item by the classification scheme and the asset criteria, the lessons that other processes record - on risks, on the project's work, on incidents and problems found by quality assurance - included |
| Configuration | shall place the knowledge assets under configuration management, which identifies them and controls their changes |
| A system disposed of | should record and keep the knowledge and skills of the operators of a system disposed of, so that they are not lost with it |
| Distribution | shall distribute knowledge and skills across the organization, for immediate and shared use, accumulation and reuse |
| Trends | should communicate the trends in incidents, problems and maintenance actions to the other projects that create or use similar system elements |
| Maintenance | shall maintain knowledge, skills and knowledge assets: check and supplement them so that they stay suitable, current and valuable for future projects |
