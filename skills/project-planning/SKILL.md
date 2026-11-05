---
name: project-planning
description: Produces and keeps the project's plans. Use when a project, release or stage is scoped or planned; when work is broken down, estimated or scheduled with milestones; when the roles a plan needs are defined or resources requested; when the project's own life cycle model, stages or gate criteria are chosen; when a plan is adopted, changed or reviewed. Not for tracking progress against the plan.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Project planning

This skill refines `software-life-cycle` for the project planning process: effective and workable
plans for the project are produced, coordinated and kept current. The agent shall carry out its
tasks under the organization's policy and procedures, where set.

| Term | For work planned |
|---|---|
| project | work with its own purpose, resources, management and decision to start: a product, a new version, a major change |
| plan, its parts included | the record of goals, scope, work, schedule, resources and duties, in the information items where the project keeps its plans; the interdependencies of the work items serve as the project network diagram, the milestones as the product release strategy and release plan |
| life cycle model, project strategy | what the project has recorded - a process description, the information item where the project keeps its rules; where it has recorded none, the default model of `software-life-cycle` |
| change request | the information item proposing the change, kept where the project keeps change requests |
| agreement | the contract or the order the project delivers under; for a self-run project, the goals and expected outputs recorded at its definition |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| adopting a plan or changing it - its scope, schedule, budget or deliveries, the criteria of a stage's decision gate -; activating a plan | the plan exceeds the project's authority or resources or the scope of the agreement; the feasibility evaluation found a goal or a date unachievable; a stakeholder has not consented to a change of the project's requirements; authority for the project has not been obtained | Feasibility, Plans; Stage opened, for an activation |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the record of a plan. Where the project
plan or a rule of the project names who decides an act of the table - whoever manages the project,
a steering board -, the agent shall take an explicit request as that decision only where the user
is that party. The agent shall keep to the plan in force until the decision that changes it.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| a project or a stage is planned whole, not within a plan in force; or the gate criteria, the budget or the interfaces are set or changed in the plan in force | `references/project-plan.md` | Breakdown; Feasibility; Plans; Activation |
| the project's life cycle model, strategy or processes are set or changed, or the project has recorded none - "move to two-week sprints" | `references/life-cycle-model.md` | Activities and tasks |
| the roles, authority or duties a plan needs are defined, or its tasks allocated - "who does what in 2.0" | `references/roles.md` | Plans |
| resources, infrastructure or services are requested or set up beyond what the project has, or come from outside it | `references/resources.md` | Size and effort |
| the project supplies under an agreement with an acquirer | `references/project-under-agreement.md` | Plans |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## Work planned

Outcomes served: plans defined, plans activated.

The common situation is a release or a piece of work planned within the plan in force - "plan the
next release".

For a piece of work that changes no part of the plan in force, the agent may run the steps from
Breakdown to Its content and take the rest from the plan in force. A piece of work that changes the
plan in force is an act of the table.

| Step | What the agent does |
|---|---|
| Breakdown | shall establish the work breakdown structure on the basis of the evolution of the system architecture |
| Detail | should describe each architecture element, its processes and activities in detail consistent with its risks, group related tasks into project tasks by duties, and name in each the objects of work it develops or produces and its related tasks |
| Activities and tasks | shall define the activities and tasks according to the project's life cycle, with their interdependencies in the project network diagram |
| Size and effort | shall define the size of the tasks and estimate the effort and resources they need |
| Schedule | shall define and maintain the schedule - sequence and dates of the activities - from the management and technical goals and effort estimates |
| Its content | should name in it the activities' duration, relationships, interdependencies and sequence, the milestones, resources used, analyses, and reserves for risk management and timely completion |
| Feasibility | shall evaluate that the resources for performing and managing the project - personnel, materials, technologies, environment - are available, sufficient and allocated, and the dates and goals achievable with them and the constraints |
| Requirements changed | may change the project's requirements at that evaluation, as needed and with the consent of all stakeholders, to meet the completion criteria |
| Bases of the attributes | shall define and maintain the estimates of size, effort, resources and cost as the bases of the project's attributes |
| Plans | shall develop and record the project plan and other plans of project and technical management and execution, analyses included, and communicate them to those responsible, recording the communication |
| Activation | shall implement the plans: direct their execution to meet the project management goals and criteria, and distribute the planning data in the project |
| Stage opened | shall direct, on activating a plan, only the work of the stage its decision has opened |
| Next stage planned | may plan the work of the next stage |
| Review | shall review the plans regularly throughout the project and keep them current, recording each review and raising each change as a change request |
