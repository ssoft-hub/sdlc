---
name: business-or-mission-analysis
description: Finds the problem or opportunity behind a request and the kind of solution fitting it - a change in operation or to the product, an off-the-shelf product, new development. Use when a request names a problem or a goal, not a solution - "reports are slow - what should we do?"; when kinds of solution to a problem are compared; when a requested solution may not fit the problem or the strategy.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Business or mission analysis

This skill refines `software-life-cycle` for the business or mission analysis process: a problem or
an opportunity defined, the solution space characterized and the potential solutions determined. The
agent shall carry out its tasks under the organization's policy and procedures for business or
mission analysis, where set.

| Term | For a problem a request names |
|---|---|
| problem or opportunity | what the users or the organization cannot do or do poorly, or could gain: a complaint, a bottleneck, a new market, a change in regulation |
| trade-space factors | for the product: user dissatisfaction, cost and effectiveness, the needs of the existing product, safety and security improvements, changes in regulation |
| solution class | a kind of solution, not its implementation: a change in the way of operation, a change to an existing product or service, an off-the-shelf product, a new development |
| life cycle concepts | the operational concept - modes or states, scenarios, use cases - and the concepts of acquisition, support and withdrawal from operation |
| organization's strategy | the goals, the vision, the roadmap and the product description the organization and the project have recorded |
| business or mission analysis strategy | what the project has recorded - a proposal template, a roadmap review |
| enabling systems | the product's usage data, the users' recorded requests, the organization's stores of information, market information, open to the agent |

The agent shall treat a request that names a solution or its class - "make feature X" - as the
explicit request for the selection of that class.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| the selection of the preferred solution class or classes, or the rejection of all of them | the solution does not resolve the named problem; contradicts the organization's strategy or a decision taken | Problem; Evaluation of the class named, with no other class identified or compared; Traceability |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the traceability of the selected
class. Where a rule of the project names who selects the class - a
product owner, a board -, the agent shall take an explicit request as that decision only where the
user is that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the project has recorded no analysis strategy, or a needed source, tool or service is lacking, costs money or binds the project | `references/preparation.md` | Goals |
| the problem lies in the business, the mission or the organization's capabilities, the organization is itself the system, or the results leave the project | `references/organization.md` | Goals; Factors; Criteria; Selection |
| a new system is conceived, the concepts pass on, or security threats or a critical mission bear on it | `references/concepts.md` | Concepts |
| the user's architecture viewpoint matters, criteria values come from system analysis, models or experts, or decision management conducts the selection | `references/evaluation.md` | Classes; Evaluation; Selection |
| a selected class is kept over the life cycle: traced both ways, passed to configuration management, or the conditions it rests on change | `references/after-the-selection.md` | Traceability |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## A problem a request names

Outcomes served: problem space defined, solution space characterized, concepts defined, classes
analysed, class selected, traceability established.

The common situation is a request that names a problem, a goal or an opportunity of the product
rather than a solution - "users complain about slow reports: what should be done?".

| Step | What the agent does |
|---|---|
| Goals | shall analyse the problem or the opportunity the request names, and those the organization's strategy identifies, against the goals and objectives that strategy sets |
| Gaps | shall name what the organization's strategy lacks for analysing the problem or the opportunity |
| Factors | shall analyse the problem or the opportunity in the context of the trade-space factors |
| Problem | shall define the problem or the opportunity and record it as the problem or opportunity space |
| No solution in it | should define the problem or the opportunity with its context and key parameters, tied to no given solution while the solution can still be a change in operation, a change to an existing product or service, or a new system |
| Concepts | shall define and record the preliminary life cycle concepts, the operational concept included |
| Classes | shall identify and record the alternative solution classes that cover the possible solutions |
| Services | should determine for each class the expected services that can be in demand |
| Existing products | may count among the classes the existing systems, products and services that respond to the need |
| Criteria | should compare the classes against the criteria the organization's strategy establishes, feasibility among the main ones |
| Evaluation | shall evaluate each class and record its evaluation |
| Selection | shall recommend the preferred class or classes for the selection at the decision gate of the concept stage |
| Traceability | shall trace each preferred class to the problem or the opportunity it resolves |
| Baseline | shall maintain the information items of the analysis selected for baselines: the problem and opportunity space, the concepts, the selected class |
