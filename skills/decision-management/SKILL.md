---
name: decision-management
description: Prepares and records a project's decisions - criteria, alternatives evaluated, a recommendation, the decision with its rationale. Use when work meets a choice that binds the project beyond the task - two designs, libraries, tools or ways to meet a requirement; when options are compared or a recommendation asked for; when the user picks one option; when a decision taken is checked or changed.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Decision management

This skill refines `software-life-cycle` for the decision management process: the alternatives of
a decision met at any point of the life cycle are identified, characterized and evaluated, and the
most beneficial course of action is selected. The agent shall carry out its tasks under the
organization's policy and procedures for decision management, where set.

| Term | For a choice met in the work |
|---|---|
| decision management strategy | what the project has recorded - who decides which category of decision, and with what rigor, in the information item where the project keeps its rules |
| decision maker | the party the strategy gives authority for decisions of that category; where none is named, for an act that binds the project, the user (`software-life-cycle`) |
| strategy of a decision | who decides it, how, and with what rigor of analysis |
| decision record | the record of the step Record - an information item, a comment on the change request -, kept where the project keeps decisions or, where it names none, where the agent proposes |
| record of problems and opportunities | the circumstances and the outcome in the decision record |

The agent shall not select in the decision maker's place, except as the next sentence permits. The
agent may select, with no analysis of alternatives, within the work a request opened, where the
selection binds the project to nothing beyond that work, contradicts no decision taken and is
reversible within that work: a name, the order of steps, the internal structure of a change.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| the selection of an alternative in a decision that does not belong to the agent, and the start of the work the selection opens | the alternative named is known to exceed the acceptable level of risk; the selection is known to go beyond the authority that the decision management strategy gives the requester | Criteria; Evaluation of the alternative named, instead of comparing the alternatives; Record, where the agent analysed alternatives |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the decision record. Where the
decision management strategy reserves the decisions of a category to a party the user is not - an
architect, a review board -, the agent shall not take an explicit request as that decision. The
agent shall neither ignore such a request nor bypass the strategy. The agent should agree the order
of actions with the user.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the project's decision management strategy is set or changed, or the project has recorded none | `references/strategy.md` | Strategy of the decision |
| a decision calls for a formal analysis: many alternatives, weighted criteria, a quantitative comparison, an analysis or an expert evaluation from others | `references/trade-study.md` | Rigor |
| a decision taken changes the plan, answers a supplier's proposal, selects a solution class, is implemented, checked or reported on, misses its result, or is changed | `references/after-the-decision.md` | Record |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## A choice met in the work

Outcomes served: decisions identified, alternatives evaluated, course selected, rationale recorded.

The common situation is a choice the work meets that binds the project beyond the work at hand -
"should we use library A or B?".

| Step | What the agent does |
|---|---|
| Naming | shall name a decision that needs analysis of alternatives - one outside the selections the agent makes itself - as soon as the work meets it, before the work selects an alternative |
| Circumstances | shall name the problem or the opportunity that requires the decision, and its category where the strategy sets categories |
| Problems and opportunities | should record, classify and communicate, in time and objectively, the problems, opportunities and alternative courses of action that predetermine the outcome |
| Other work | may go on, until the decision, with the work it does not affect |
| Stakeholders | shall name the stakeholders whose experience and knowledge the decision needs - the owner of the affected part, a domain expert - and involve them |
| Strategy of the decision | shall select and announce for each decision who decides, how and with what rigor |
| Rigor | should make the rigor of the analysis proportionate to the decision's significance - its cost, reversibility and risks - where the organization's or project's guidelines do not set it |
| Criteria | shall define the desired outcomes and the objective, measurable selection criteria by which each alternative is analysed |
| Alternatives | shall identify, classify and define the alternatives and the trade space of the decision |
| More than one | should consider more than one alternative, or name with its reason that only one is real |
| Evaluation | shall evaluate, under the strategy of the decision, each alternative against the criteria and the balance of consequences of the alternative actions |
| Estimates | should present a criterion value no check has established as an estimate or an assumption with its basis, never as a fact |
| Recommendation | shall determine the preferred alternative by the criteria and recommend it |
| Benefit | should recommend an alternative that optimizes or improves the situation the decision is made for |
| Presentation | shall present a decision not its own to the decision maker with the alternatives, criteria, evaluation of each, the recommended one with its grounds, and the assumptions the evaluation rests on |
| Record | shall record each decision of this process - a selection among the alternatives it analysed - in a decision record with the criteria, the alternatives considered and their evaluation, the rationale and assumptions; a request only naming work is no such decision |
| Communication | shall communicate the decision record to the stakeholders |
| Keeping | shall keep the records of problems and opportunities and of how each was resolved where the agreements or the organization's procedures place them, for audit and learning |
