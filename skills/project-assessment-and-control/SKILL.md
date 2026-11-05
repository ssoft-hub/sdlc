---
name: project-assessment-and-control
description: Determines a project's status against its plans and steers the work back to them. Use when asked where a project, a release or a milestone stands, or for a status or progress report; when work is behind schedule, over budget or off plan; when a management review, a go/no-go to the next milestone or closing the project is due. Not for drawing up the plan.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Project assessment and control

This skill refines `software-life-cycle` for the project assessment and control process: the
plans are kept balanced and feasible, the status of the project is determined against them, and
its work is directed to them. The agent shall carry out its tasks, the reviews included, under the
organization's policy and procedures, where set.

| Term | For work assessed against its plan |
|---|---|
| management | whoever manages the project: the owner, a maintainer |
| milestone | a planned event with achievement criteria: a milestone, a release, the decision gate of a stage (`software-life-cycle`) |
| analysis | a management or technical examination of progress or the product, formal - a review, a meeting - or informal |
| strategy for assessment and control | what the project has recorded - the project plan, the review plan, the reporting requirements of the agreement and the procedures |
| agreement | the contract or the order the project delivers under; for a self-run project, the goals and expected outputs recorded at its definition |
| progress status record, project status report, communication record, analysis report | the status note or report the project keeps - a note at a milestone, a status page, the reply; one may serve as all four |
| problem record, corrective action register | the problem reports and the records of their actions, where the project keeps them |
| change request | the information item proposing the change, kept where the project keeps change requests |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| a corrective or preventive action that changes the plan, the scope, the schedule, the budget, the resources or the assignments | the action requires a change of the agreement | Investigation, Impact, Problem record |
| replanning | the action requires a change of the agreement | Replanning |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the problem record. Where the project plan
or a rule of the project names who decides an act of the table - whoever manages the project, a
steering board -, the agent shall take an explicit request as that decision only where the user is
that party. The agent shall keep to the plan in force until the decision that changes it.

Where the work needs a change to an accepted output of another process, the agent shall name the
defect and the outputs it affects. The agent shall pass a change request to the process that owns
that output, which decides it. The agent shall not change that output before that decision.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the strategy for assessment and control is set or changed, or the project has recorded none; a review, an analysis, an audit or an inspection is planned, held or followed up | `references/reviews.md` | Progress; Action |
| the project is assessed whole, periodically or at a major event: plans, roles, resources, technologies, measurements, processes | `references/whole-project.md` | Status |
| the work runs under an agreement with an acquirer or a supplier, or a change in cost, time or quality affects one | `references/agreement.md` | Status; Action |
| progress to the next milestone or event, a stage's decision gate included, is to be decided | `references/milestone.md` | Progress |
| all products, activities and tasks are done, the project is to be closed, or lessons learned are recorded | `references/completion.md` | Progress |
| another process passes a problem, a deviation, a corrective action or a risk response | `references/passed-problems.md` | Action |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## Work assessed against its plan

Outcomes served: assessment results available, progress analysed, deviations analysed, status
communicated, actions defined.

The common situation is the status of work assessed against its plan, a slip or a deviation
included - "are we on track for the release?".

| Step | What the agent does |
|---|---|
| Context | shall reconcile the project's goals and plans with its context |
| Data | should collect at planned points the actual or estimated effort, materials, services, costs and technical data on the goals, compare them with the achievement measures, and assess how well management keeps development adequate to the requirements, and whether the enabling systems are ready when needed |
| Status | shall assess the project and technical status: the actual and projected cost and dates, and the variances in performance against the plans |
| Baseline | shall compare the scope, budget, costs, resources and other attributes with the project's baseline |
| Deviations | shall record, investigate and analyse each significant deviation in the analysis report |
| Progress | shall assess progress by the achievements analysed and milestones passed, and determine the results of evaluating the completed products, activities and tasks for achieving the goals and completing the plans |
| Their content | should set the content and the order of the records and reports by the agreement, policy and procedures |
| Record | shall record the status and the assessment results in the progress status record and keep them available |
| Status communicated | shall communicate the status to the stakeholders, recording the communication |
| Action | shall define, for each problem of the assessment, the action it needs, and direct it |
| Other triggers | should define such an action, corrective, preventive or other, also when tasks or constraints change or planning assumptions prove wrong |
| Reassignment | should consider replanning or reassigning personnel, tools and infrastructure where a nonconformity or unreadiness is found |
| Impact | should determine, regulate and control each change's impact on cost, schedule, technical scope and process definitions |
| Process change | should consider whether an action changes how the life cycle processes are implemented and performed |
| Investigation | shall investigate and analyse each problem found and have its solution decided |
| Correction | shall, when the goals are not achieved, correct the deviations from the plan and prevent the problems from recurring |
| Problem record | shall record the problems and their solutions in the problem record and the corrective action register |
| Replanning | shall include replanning in the solution of a problem or in a redirection that needs a change of the plans |
| Recurrence | should use the assessment results and the plan's update to prevent recurrence, and record and analyse each action for adequacy and timeliness |
