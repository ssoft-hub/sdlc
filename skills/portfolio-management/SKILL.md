---
name: portfolio-management
description: Starts, sustains and closes the organization's projects, deciding which ones it funds and with what authority. Use when a new project, product, major version or repository is proposed or started; when resources or budget are divided among projects; when a project is to continue, change course, be suspended, cancelled or closed. Not for planning or tracking the work inside one project.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Portfolio management

This skill refines `software-life-cycle` for the portfolio management process: the organization
starts the projects it needs, gives them funding, resources and authority, and keeps assessing
whether each justifies its investment. The agent shall carry out its tasks under the
organization's policy and procedures, where set.

The organization is whoever decides which projects to conduct and with what resources: the owner,
the maintainers, the customer of the work. A project is work with its own purpose, resources,
management and decision to start: a product, a new version, a major change or a separate
initiative. The portfolio is all the organization's projects; for the owner of one project, that
project.

Authorizing a project is the decision that opens its work (`software-life-cycle`); redirecting,
suspending and cancelling it return, hold or stop its work at a stage's decision gate. Closing a
project ends the project, not the software's use, whose retirement is decided at the gate of the
utilization or support stage. The agent should treat a modification of existing software that
needs a project of its own - adaptive or perfective maintenance, an extension, a legacy
modernization - as a new project, whose authorization opens its development stage.

| Term | For a project started |
|---|---|
| business opportunity, potential project | the proposed product, version, change or initiative |
| criteria of the organization's level | the business goals: the goals and constraints the organization has recorded for its work |
| who manages the project | the person the organization names; for a single-owner project, the owner |
| agreed project plans | the plans that project planning adopted, in the information items where the project keeps its plans and milestones |
| agreement on the project's products and services | the contract or the order the project delivers under; for a self-run project, the goals and expected outputs recorded at its definition |
| market analysis report; commitment; record of the portfolio decision | the record of the proposal and of the decision on it, in the information item where the project keeps its decisions |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| selecting an opportunity or a project; authorizing a project | - | Business needs, Business goals, Evaluation, Definition, Goals, Reporting |
| allocating resources and budget to a project, a person committed to it included; the assignment of a project's management and authority | the resource is known to be already given to another authorized project | Resources, Notice; where the organization has other projects, Balance and Interactions of `references/several-projects.md` |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent should record a
decision taken by a choice among the options it presented - who decided, the option, its grounds -
as the record of the portfolio decision. The agent shall not omit, on an explicit request, a record
a task of this skill requires, such as the authorization of a project. Where a policy or a rule of the organization names who decides an act of the
table - the owner, a steering board -, the agent shall take an explicit request as that decision
only where the user is that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| more than one project is run or planned, or projects share people, resources, enabling systems or system elements | `references/several-projects.md` | Definition |
| a project's progress or viability is assessed, or it is to continue, be redirected, suspended or cancelled | `references/assessing.md` | after Authorization |
| a project's agreement is complete, or the project is to be closed or removed from the portfolio | `references/closing.md` | after Authorization |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## A project started

Outcomes served: opportunities qualified, projects defined, resources allocated, authority defined.

The common situation is one project to be started - "start version 2.0".

| Step | What the agent does |
|---|---|
| Capabilities | shall identify the potential new or modified capabilities or missions of the organization; an explicit request names its own |
| Business needs | shall analyse and record the business needs and opportunities as elements of current and future projects, as the market analysis report; an explicit request states its own |
| Context | should consider, for current gaps, problems and opportunities, the organization's strategy, concepts of operations and gap and opportunity analysis |
| Need from analysis | should take a need that business or mission analysis identified as an input, not define it anew |
| Business goals | shall record as the business goals the goals and constraints the user states for the work, where the organization has recorded none |
| Evaluation | shall evaluate the opportunities, undertakings and potential projects against criteria of the organization's level, with regard to risk and feasibility, consistently with its business strategy and action plans |
| Detailed analysis | should put the analysis question - the problem, the goals, the fidelity required - to system analysis where an alternative needs detailed analysis, which is left to it and decision management |
| Characteristics | should determine for each potential project its stakeholders' significance, risks and barriers to success, interdependencies and relationships, constraints, resource needs and disagreements over resources |
| Success | should evaluate each potential project by its probability of success, costs and benefits |
| Thresholds | should establish the thresholds that determine which projects are carried out |
| Priority | shall prioritize the potential projects, select and establish those to carry out |
| Definition | shall define and record each selected project: its scope, and who manages it with the management duties, accountability and authority |
| Goals | shall define its expected goals, objectives and outcomes, with the stakeholder requirements it is to meet |
| Outputs | should define its expected outputs |
| Resources | shall define, record and allocate its resources, duties, budget and constraints |
| Reporting | shall define and record its reporting requirements and the milestones at which its execution is reviewed and directed |
| Notice | shall pass to whoever manages it, where that is not the user, its management duties, accountability, authority and reporting requirements, keeping the message as the communication record |
| Authorization | shall authorize the project to begin executing its agreed project plans, technical plans included, once project planning has developed and agreed them, and record the authorization with those plans as the commitment giving it authority |
