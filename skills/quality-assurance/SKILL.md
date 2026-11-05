---
name: quality-assurance
description: Evaluates a project's products and processes against their criteria, keeping independent, recorded evidence, and resolves the problems found. Use when work is checked against the project's rules, with the independence they require, before a merge or delivery; when a defect or nonconformity is recorded and tracked to resolution, not fixed; when a known defect is accepted or deferred; when audited.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Quality assurance

This skill refines `software-life-cycle` for the quality assurance process: the project gains
confidence that its quality requirements will be met - its products, services and processes are
evaluated for conformance, and each problem found is resolved. The agent shall follow the
organization's policy and procedures for quality assurance, where the organization has set them.

| Term | For a product evaluated in the work |
|---|---|
| quality assurance evaluation | a check of a product, a service or a process of the project against criteria that leaves evidence |
| criteria | the requirements, the agreement, the standards, the project's rules and plans: tests, readiness criteria, review requirements, automated checks |
| quality record | the evidence an evaluation leaves, in the form the project defines: the results of the checks run, a review record, an entry in a problem report |
| quality assurance strategy | what the project has recorded - how its evaluations run: which checks run on which product, by whom, the record they leave, such as in its rules for contributors |
| nonconformity | a criterion not met: a failing check, an unmet review requirement |
| incident | a deviation or an unexpected event, condition or situation in the life cycle: a failed run of the automated checks, a user's report, an error in operation |
| problem | a difficulty, an uncertainty, or an undesired event or condition requiring investigation and corrective action: a defect, a recurring failure, a nonconformity |
| problem resolution process | the place the project keeps its problem reports, or another means the project handles problems with |
| quality management, as a receiver | whoever sets the project's rules on quality: the owner, the maintainers |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| accepting a product, a service or a process with a known nonconformity - a departure, a deviation permit | the problem resolution has not been checked; an evaluation has found a nonconformity to a criterion; an evaluation that the strategy requires has not been performed or has been performed without the required independence | Problems found; Problem recorded, Response and Closure of `references/problems.md` |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the quality record of an
evaluation. Where the strategy or a rule of the project names who decides an act of this skill - a
maintainer, a release manager -, the agent shall take an explicit request as that decision only
where the user is that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the strategy, the plan, the record form or the independence of quality assurance is set or revised | `references/planning.md` | Criteria and methods |
| an incident or a problem is met or answered - a defect report, a problem outside the assigned work, a problem deferred or closed without resolution | `references/problems.md` | Problems found |
| an audit is planned, conducted or answered | `references/audit.md` | Evaluation |
| the project's processes, their tools and environment, or the personnel's skills are evaluated | `references/process-evaluation.md` | Evaluation |
| the work runs under an agreement with an acquirer, a supplier or a subcontractor | `references/agreement.md` | Evaluation; Results |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## Evaluating a product

Outcomes served: criteria defined, evaluations performed, results provided.

The common situation is one product of the work evaluated before it is presented, enters a
baseline or is delivered - "check this change before it goes into the main branch".

| Step | What the agent does |
|---|---|
| Planned activities | shall carry out the quality assurance activities the strategy or the plan sets for the product |
| Criteria and methods | shall define, before an evaluation, its criteria and methods: the criteria from the organization's quality criteria, the agreement's acceptance criteria and the project's rules; the methods among review, inspection, testing, audit and analysis |
| Evaluation | shall evaluate the products and services and their documentation for conformance to the criteria, the agreement, the standards and the instructions, and for having been carried out under the plans, to the confidence the quality requirements need |
| Verification and validation | shall check that the verification and the validation of the life cycle processes' outputs are performed and determine conformance to the specified requirements |
| Own work | shall call its evaluation of a product it created or changed its own, never an independent one |
| Independent evaluation | shall leave the independent evaluation the strategy requires - another participant's review, an audit - to the party the strategy names |
| Quality record | shall create and maintain the evidence of each evaluation as a quality record in the form the project defines |
| Records and reports | shall create and maintain records and reports on the quality assurance activities, their performance, the problems and their resolutions, as the organization, the regulatory bodies and the project require |
| Information management | should keep those records and reports through the information management process |
| Results | shall store and distribute the records and reports, and provide the evaluation results to the relevant stakeholders, the owners of what was evaluated and quality management included |
| Problems found | shall identify, record and report to the stakeholders, for information and action, the incidents and problems an evaluation meets, and pass the problems and the nonconformities with the agreement to problem resolution |
