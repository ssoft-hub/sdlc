---
name: human-resource-management
description: Provides the projects with the people they need and keeps their competence up. Use when a person or outside performer joins the project, takes or leaves a role or task; when a skill the work needs is missing; when training, onboarding or mentoring is needed; when a team or its authority is set; when a person's work is evaluated; when projects compete for the same people. Not for agents or tools.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Human resource management

This skill refines `software-life-cycle` for the human resource management process: the
organization is provided with the people its projects need, and their competence is kept at the
level of its business needs. The agent shall carry out its tasks under the organization's policy
and procedures, where set.

The organization is whoever disposes of the project's people: the owner, the maintainers.
Personnel are the people who do the project's work: maintainers, developers, reviewers, regular
contributors. The agent and other agents are not personnel but means of work, which the
infrastructure management process provides. Accumulating and sharing the organization's knowledge
is left to the knowledge management process.

| Term | For a role staffed |
|---|---|
| recruitment, hiring | bringing a person into the project: a new maintainer, a contributor given a role |
| assignment | giving a person a role: maintainer, reviewer, code owner |
| the plans by which personnel are obtained | the human resource management plan, where kept; otherwise the decision that opens the staffing of the role |
| human resource needs analysis | the needs recorded in the information item where the staffing is decided, or in the plan |
| skills development strategy | what the project has recorded - the human resource policy, the training strategy, the human resource management plan in force |
| access rights | the permissions a role carries: write access, approving a review |
| personnel records | the records of the project's people with their skills, roles, training and evaluations of work, wherever the organization's policy keeps them |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| bringing a person or an external performer into the project, assigning a person to a project or a role, removing them from it or dismissing them | the person is known to be committed to another project beyond what they can give; the act contradicts the organization's human resource policy | Criteria, for candidates; Records; Assignment |
| the place of the personnel records and the circle of those who may access them, where the organization's policy sets none | the act contradicts the organization's human resource policy | Place of records |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the record of an assignment. Where
a rule of the project names who decides an act of the table - the maintainers, the owner of a code
area -, the agent shall take an explicit request as that decision only where the user is that party.

Granting or revoking access rights is an act of the information management process and of the
infrastructure management process.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| staffing is planned beyond one role: recruitment, retention, staff composition, the pool of qualified personnel | `references/recruitment.md` | Need; Obtaining |
| a skill is to be developed: training, onboarding, education or mentoring is planned, obtained, given or evaluated | `references/training.md` | Means |
| a team is formed or changed - its structure, operating rules, authority -, or teams are to work together | `references/teams.md` | Assignment |
| a person's work is evaluated, or a person is rewarded, motivated or offered career development | `references/evaluating-work.md` | Criteria; Records |
| projects need the same people, or a person's commitment to another project limits an assignment | `references/several-projects.md` | Assignment |
| the software has operators the project provides, for its operation, maintenance or disposal | `references/operators.md` | Obtaining; Assignment |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## A role staffed

Outcomes served: skills identified, people provided, skills developed.

The common situation is one role or task to be staffed - "make the new contributor a maintainer".

| Step | What the agent does |
|---|---|
| Need | shall identify, collect, analyse and record the needs for human resources and skills - of management and technical personnel - from the current and expected projects and the organization's requirements, as the human resource needs analysis; an explicit request states its own |
| Skills of personnel | shall identify and record the skills of the personnel |
| Skill register | shall pass the skills recorded to the knowledge management process for its knowledge repository, within the limits of Place of records |
| Means | may meet a new need by training, hiring or another mechanism of personnel development |
| Criteria | shall define and record objective criteria for evaluating candidates and the work of personnel before either is evaluated |
| Obtaining | shall obtain qualified personnel by the plans once a skill shortfall is identified: by hiring, by reassignment or from outside the organization |
| Assignment | shall meet the projects' needs for people by assignments based on the needs of the project and of personnel development, and record each where the project keeps its roles and tasks, as the person's commitment to the project |
| Access rights | should provide the combination of access rights and categories of trained personnel that the planned activities and tasks need, so that they are performed in time |
| Records | shall keep personnel records with each person's skills, training completed and evaluations of work |
| Place of records | shall keep these records, which are personal data, only in the place and open only to the people that the organization's policy allows |
| Public artifacts | shall not put personnel records or evaluations of work into an information item of the project open to the public |

Obtaining personnel from outside the organization is an acquisition. Entering into, changing or
closing an agreement under which the project acquires is an act of the acquisition process.
