---
name: life-cycle-model-management
description: Establishes, assesses and improves the organization's rules on how work is done - contributor guide, agent instructions, process descriptions, the life cycle models projects select from, templates. Use when such a rule is added, changed, tailored or cancelled, rather than work done under it; when processes are assessed. Not for one project's stages or gate criteria, nor for rules on quality.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Life cycle model management

This skill refines `software-life-cycle` for the life cycle model management process: the
organization's policy, life cycle processes, life cycle models and procedures are defined,
maintained and improved. `software-life-cycle` has the agent follow the life cycle model that the
project describes, or its default one; this process establishes that life cycle model and the processes from
which project planning selects the project's own. The agent shall carry out its tasks under the
organization's policy and procedures, where set.

The organization is whoever sets the project's rules: the owner, the maintainers; in a
single-owner project, the project itself. The policy, the processes, the life cycle model and the
procedures are the project's rules on how work is done, wherever recorded: a guide for
contributors, instructions to the agent, a process description, a development methodology, a coding
standard, templates of information items. An improvement is a change to such a rule, a new rule or a
cancelled one included.

| Term of the process | For a change to a project rule |
|---|---|
| process strategy | what the project has recorded - how its rules are established and changed, in the information item where the project keeps its rules |
| improvement opportunity | the case that calls for the change, a rule that did not work in practice included |
| improvement goal | what the change is to achieve |
| process change | the new wording of the rule |
| implementing an improvement | putting the rule into effect where those who apply it read it |
| commitment of resources | the decision that opens the change |
| confirming the effect | naming how the effect will show, and checking it when the rule next applies |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| establishing, changing or cancelling a policy, a process or a procedure - a project rule on how work is done that no single process's strategy covers | - | Change to Wider use |
| establishing, changing or cancelling a life cycle model of the organization, a criterion of a stage's decision gate or a tailoring guideline | - | Change to Wider use |
| establishing, changing or cancelling a role or an authority | - | Change to Wider use |
| introducing an improvement - putting a change of a rule of this table into effect | - | Change to Wider use |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall apply the rule in force until that decision. The agent
shall not omit, on an explicit request, a record a task of this skill requires, such as the
evaluation under "Wider use". Where a rule of the project names who decides a change to its rules -
the maintainers, a steering group -, the agent shall take an explicit request as that decision only
where the user is that party.

Selecting the life cycle model and the processes of the project is an act of the project planning
process. Setting, changing or cancelling a rule on quality is an act
of the quality management process. Setting or changing the recorded strategy of one process is an
act of that process.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the project's rules are set up as a whole, or a policy, processes, a life cycle model, roles, business criteria or a tailoring guideline is established where the project has none | `references/establishing.md` | "Change" |
| the processes of the standard, or the organization's rules for a project, are tailored | `references/tailoring.md` | "Change" |
| the processes are monitored or reviewed: their execution, their use data, historical data, the cost of quality | `references/monitoring-and-review.md` | before "Opportunity"; "Effect" |
| a process assessment is planned, performed or reported | `references/process-assessment.md` | before "Opportunity" |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition
to those of this file. Where `references/establishing.md` has a row for the subject of a rule being
changed, the agent shall apply that row to the change.

## Changing a project rule

Outcomes served: processes maintained, improvements implemented.

The common situation is one project rule added, changed or cancelled -
"add to the contributor guide that each pull request names its issue".

| Step | What the agent does |
|---|---|
| Opportunity | shall identify an improvement opportunity, with a justified reason for the change, from the assessment results and from matters arising inside or outside the organization - assessment and audit results, customer satisfaction, organizational effectiveness measures, costs, quality; an explicit request states its own |
| Rule that failed | shall name a project rule that did not work in practice - it contradicts another rule or a decision, does not fit the case, or caused rework - as an improvement opportunity with the rule, the case and the consequence, and propose a correction |
| Goals | shall analyse the current state of the processes where an incentive for improvement or a process risk has arisen, such as an assessment finding, and establish improvement goals; an explicit request states its own |
| Priority | shall prioritize the improvement goals and opportunities with a justification |
| Change | shall define and plan the process changes |
| Consistency | shall check the new wording against the other rules of the project and the decisions taken, and name each contradiction found for a decision |
| Resources | shall obtain, before improvement actions, a commitment of resources for them from whoever controls the resources |
| Implementation | shall implement an improvement adopted by a decision and communicate it to those it concerns |
| Documentation | should update the process documentation held apart from the rule to reflect the improvement |
| Availability | shall support the use of the standard processes by the purpose of each: a rule put into effect is available to those who apply it |
| Effect | shall monitor, measure and confirm the effects of the change against the improvement goals, recording the measures used as the process measures |
| Lessons | shall generalize the lessons learned from improvements and communicate them to the parts of the organization they concern |
| Wider use | shall evaluate whether the solution of an improvement can be applied in other processes and parts of the organization, and record the evaluation |
