---
name: system-analysis
description: Answers with data a technical question a decision depends on - a model, a simulation, a load experiment -, recording assumptions and recommendations, not deciding. Use when performance, capacity, feasibility, cost or a technical risk must be known before deciding, rather than a check passed or failed; when an alternative needs data a criterion depends on; when analysis results are reused.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# System analysis

This skill refines `software-life-cycle` for the system analysis process: a rigorous basis of data
and information for the technical understanding of the system, on which the decisions of its life
cycle rest. The agent shall carry out its tasks under the organization's policy and procedures,
where set.

| Term | For a technical question met in the work |
|---|---|
| system analysis | obtaining the data that answer a technical question of a decision: an evaluation of performance, behaviour, feasibility, affordability, a critical quality characteristic, a technical risk, life cycle costs, the sensitivity to the range of parameter values |
| method | a back-of-the-envelope or spreadsheet calculation, historical data and trends, a model, a simulation, a measurement on a prototype, a load experiment, an expert evaluation |
| assumption | a condition the analysis takes as true without checking it: a load, a volume of data, an environment |
| stakeholders of the analysis | who poses the question, who decides on the results, who provides the data |
| system analysis strategy | what the project has recorded - in its plans or its rules of work |
| enabling systems | the tools, models and data stores the project already uses for analysis |

An analysis answers a question another process or the user poses and takes no decision. The agent
shall pass its results, conclusions and recommendations to whoever decides on them, usually through
the decision management process. The agent shall not carry out a recommendation as a choice of its
own.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| the method or the depth of an analysis a request names | the method is known not to give the fidelity the question or the criticality of the decision requires, or the data it needs are known to be lacking | Question to Baseline, Methods and Their choice excepted |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the record of the results. Where a
rule of the project names who decides an act of this skill - the owner of a
system in operation, a change board -, the agent shall take an explicit request as that decision
only where the user is that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| analysis is planned for a project or a stage, the project has recorded no strategy, or the work needs a tool, a model or data the project does not have, or an experiment on a system in operation or on shared resources | `references/planning.md` | Methods; Analysis |
| the results are kept over the life cycle or reused, or earlier studies exist | `references/keeping-results.md` | Examination; Traceability |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## A technical question answered by analysis

Outcomes served: studies identified, assumptions agreed, results provided.

The common situation is a technical question a decision needs answered - "can the server take twice
the load?".

| Step | What the agent does |
|---|---|
| Question | shall identify the problem or the question that requires system analysis |
| Its goals | should define the technical, functional and non-functional goals of the analysis: critical quality characteristics, properties, technology and manufacturing maturity, technical risks |
| Wording | should word the question so that the goals, the expectations and the benefit of the results follow from it |
| Stakeholders | shall identify the stakeholders of the analysis |
| Scope and fidelity | shall define the scope, the goals and the required level of fidelity of the analysis |
| Rigor | should make the formality and the rigor follow from the fidelity required, commensurate with the criticality of the information need or the work product supported, the data available, the project's scale and the date the results are due |
| Methods | shall select the analysis methods |
| Their choice | should select them by time, cost, fidelity, technical maturity and criticality, analysing only the critical characteristics where cost and dates require it |
| Data | shall collect the data and form the inputs the analysis needs |
| Assumptions | shall identify the assumptions and agree them with the stakeholders of the analysis |
| Not on their behalf | shall not declare that agreement on their behalf |
| Analysis | shall apply the selected methods and perform the analysis |
| Its subjects | should develop by it the evaluations the term table names, as inputs of technical assessment for operational concepts, requirement values and conflicts, alternative architectures and elements, and technical strategies - integration, verification, validation, maintenance |
| Examination | shall examine the results against the requirements for their quality and validity |
| Conclusions | shall draw conclusions and form recommendations |
| Experts | should involve subject-matter experts and the stakeholders in drawing them |
| Record | shall record the question with its stakeholders, scope, goals and fidelity, the assumptions with who agreed them, the methods, the data, the results, the conclusions and the recommendations, in the place the project names, or in one the agent proposes where none is named |
| Traceability | shall maintain the traceability of the results |
| Baseline | shall maintain the key information items selected for baselines |
