---
name: quality-management
description: Sets and improves the project's rules on quality - quality goals, readiness criteria, review requirements, pipeline checks - and acts when a goal is missed. Use when such a rule is established, changed or cancelled, rather than work checked against it; when duties for quality are defined; when quality assurance results or customer feedback are analysed; when a quality goal is missed or at risk.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Quality management

This skill refines `software-life-cycle` for the quality management process: products, services
and the implementation of quality management meet the quality goals of the organization and of the
project and satisfy the customer. The agent shall follow the organization's policy and procedures,
where the organization has set them.

The organization is whoever sets the project's rules on quality: the owner, the maintainers; in a
single-owner project it is the project. Quality assurance, part of quality management, checks the
project's work against these rules; the measurement process defines the measures a criterion
applies and how their data are collected; the infrastructure management process sets up the
check a rule of this process needs in the automated build and verification system.

| Term | For a rule on quality set or changed |
|---|---|
| the rules on quality | the quality policy, goals and procedures and the quality evaluation criteria and methods, wherever the project records them: readiness criteria, the checks every change must pass, review requirements |
| quality goal | what the rule is to achieve, stated so that its achievement can be checked |
| quality evaluation criterion and method | the check measuring the achievement of the goal, with its threshold: a check every change must pass - a check at a decision gate, a static analysis check, a threshold of a measure, a review requirement |
| customer | the acquirer; for a product published to everyone, its users |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| establishing, changing or cancelling a quality policy, goal, procedure, evaluation criterion or evaluation method | the new rule is known to contradict the quality requirements of the agreement with the acquirer | Goal; Criteria; Consistency; Information |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the record of a rule's criterion
and method. Where a rule of the project names who establishes or changes the rules on quality - the
owner, a maintainer -, the agent shall take an explicit request as that decision only where the
user is that party. Until that decision, the agent shall apply the rule on quality in force.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the quality policy, procedures, duties or resources for quality are set or reviewed as a whole, or the work needs a recorded quality policy the project lacks | `references/planning.md` | Goal |
| quality assurance results, customer feedback or the state of quality improvements are analysed, or the quality policy is reviewed | `references/assessing.md` | instead of Customer's requirements to Information |
| a quality goal is not achieved or is at risk | `references/corrective-actions.md` | instead of Customer's requirements to Information |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## A rule on quality set or changed

Outcomes served: quality policy implemented, evaluation criteria established, resources provided.

The common situation is one rule on quality established, changed or cancelled - "require two
approving reviews for every change".

| Step | What the agent does |
|---|---|
| Customer's requirements | shall base the rules on quality on the quality requirements the customer states and on the implicit ones of the customer's environment; an explicit request states its own |
| Customer's environment | should count all stakeholders, society as a whole, and the applicable legislation and regulations as part of the customer's environment |
| Business strategy | should base the rules on quality on the business strategy for customer satisfaction |
| Customer satisfaction | shall base the quality goals on the strategy for customer satisfaction |
| Goal | shall establish, on the basis of the business goals, quality goals for the processes and the projects whose achievement can be checked |
| Project goals | should establish quality goals for each project from the requirements of its stakeholders |
| Criteria | shall establish and record the quality evaluation criteria and methods - the standards, references and measures by which the achievement of the quality goals is measured and checked -, an agreement's acceptance criteria included |
| Consistency | shall check the new rule against the other rules of the project, the decisions taken and the agreement with the acquirer, and name each contradiction found for a decision |
| Into effect | shall put the rules on quality into effect, so that the project's processes are performed under them |
| Information | shall make the rules on quality available where they are applied, as the project's quality manual |
