---
name: validation
description: Shows by objective evidence that a product, in use, serves the intended use of those who need it - the right product built, not its conformance to a specification. Use when a feature, a release or a prototype is tried with its users or in their scenario; when acceptance or beta testing is planned or run; when such a check is skipped; when a product is declared fit for use.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Validation

This skill refines `software-life-cycle` for the validation process: the project provides objective
evidence that the system in use fulfils the stakeholder requirements for its intended use in its
operational environment, in the development and utilization stages. The agent shall follow the
organization's policy and procedures for validation, where set.

| Term | For a feature validated by its users' scenario |
|---|---|
| validation | confirmation by objective evidence that an intended use is fulfilled; conformance to the specification is verification |
| validation criteria | the stakeholder requirements and acceptance criteria the feature serves, with each action's expected results |
| validation strategy | what the project has recorded - acceptance tests, a beta programme, reviews with users |
| validation plan | the request of the validation: what, by whom, by when, results to whom |
| validation procedure | the scenario the users follow, with what counts as success |
| enabling systems | the environment, data and accounts the scenario runs in, as the project or the users provide them |
| validation results | a record in the request of the validation; each problem, a problem report of its own |
| traceability record | the links from that request to the needs and requirements it confirms |

The agent shall treat a request naming validation work - run the acceptance tests, check a scenario
with users - as the explicit request opening it, with no new planning.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| removing or narrowing a validation action - a scenario not run, a check with users skipped -; changing a validation criterion or an expected result, a check changed until it passes included | a change of a check makes it pass, which is a change of a criterion | Left unconfirmed; Evidence; Not performed; Changed criterion |
| recognizing the degree of conformance as acceptable with uncertainty remaining | a need is called confirmed only when the procedure has been performed and the results obtained and compared with the expected ones; an action not performed or not observable is called not performed, with the reason; the agent's judgement that the product suits is not evidence: validation is accepted by the stakeholders, and the agent presents the results to them rather than accepting them on their behalf; a request to name a result does not replace performing the procedure and the acceptance by the stakeholders | Conditions; Results; Conclusion |
| the conclusion on the readiness of the system with respect to the needs: the product suits its intended use | a need is called confirmed only when the procedure has been performed and the results obtained and compared with the expected ones; an action not performed or not observable is called not performed, with the reason; the agent's judgement that the product suits is not evidence: validation is accepted by the stakeholders, and the agent presents the results to them rather than accepting them on their behalf; a request to name a result does not replace performing the procedure and the acceptance by the stakeholders; a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Conclusion |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the validation results. The agent
shall take an explicit request as the acceptance of the validation only where the user is the sole
stakeholder whose needs the product serves. The agent shall not take a request to report a
result - "mark that it suits the users" - in place of the step "Evidence".

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| validation is planned as work of its own; an enabling system costs money, binds the project by its conditions or is confirmed fit for use | `references/preparation.md` | Scope; an enabling system, at Access |
| validation under an agreement or with independence, or of a product acquired or supplied | `references/agreement.md` | Scope |
| a software product or the system is validated whole | `references/system.md` | Criteria; Performance; Conclusion |
| problems or nonconformities need correction, or are to be left or accepted | `references/results.md` | Results |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition
to those of this file.

## A feature validated by its users' scenario

Outcomes served: criteria defined, validation performed, suitability confirmed, enabling systems
available, results recorded, evidence provided, traceability established.

The common situation is a feature validated by its users' scenario - "check with the support team
that the export does what they need".

| Step | What the agent does |
|---|---|
| Scope | shall define the scope and the actions of validation and select its tasks with their techniques and tools |
| Its content | should name for each action the needs it validates, its object - early on, a concept, a document, a model, a mock-up or a prototype - and its expected results, covering the operational environment and a check that misuse does not harm normal operation |
| Criteria | shall select and record a method and criteria per action, for the stakeholder requirements and each required work product |
| Method | should choose, by the type of system, the project's goals and the acceptable risks, among inspection (independent examination included), analysis (modelling, simulation, analogy included), demonstration and testing |
| Changed criterion | shall record a changed criterion or expected result with the reason for the change |
| Procedure | shall define and record procedures, each supporting one or more actions, with test requirements, test cases and result-analysis specifications for the intended use |
| Procedure content | should state in each the expected results, techniques, enabling systems, environmental conditions, resources and personnel |
| Access | shall obtain access to the enabling systems the procedures name |
| Performance | shall perform the procedures in the defined environment, by the defined methods and test cases, against the requirements and quality standards |
| Conditions | should validate on schedule, in an environment as close to the operational one as possible, concluding on the degree of conformance |
| Users' tasks | shall have representative users perform their intended tasks with the product and observe whether they achieve them |
| Evidence | shall conclude on suitability from objective evidence alone - a procedure performed and its results compared with the expected -, never from its own judgement |
| Left unconfirmed | shall name, before an action is removed or narrowed, the needs and requirements it leaves unconfirmed and the risk of the removal |
| Not performed | shall report an action not performed, or with an unobservable result, as not performed, with the reason |
| Results | shall record the results, each anomaly and the uncertainty that remains, and identify and record the problems found |
| Conclusion | shall examine the results, resolve the questions they raise, confirm the product suitable for its intended use, functionally ready for the stakeholder needs and requirements and its services suitable, provide the validation data, and present the conclusion to the stakeholders for acceptance |
| Report | shall make the results available to the customer, the acquirer and other stakeholders as the plan sets, recording to whom and when |
| Traceability | shall maintain and record the traceability of the validated elements |
| Its extent | should keep it bidirectional over the life cycle, to the validation strategy, the architecture, the design and the system requirements |
| Baseline | shall maintain the key information items selected for baselines: the validated revision and its validation results |

The configuration management process establishes and maintains the baselines and the configuration
items, the validation strategy among them.
