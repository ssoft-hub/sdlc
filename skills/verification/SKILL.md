---
name: verification
description: Gives objective evidence that a product meets its specified requirements, calling a requirement verified only once checked. Use when a change is tested or reviewed against its requirements; when a test case is skipped, removed or changed; when a design or document is checked against its specification; when a technical review or qualification test is held - not when fitness for use is judged.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Verification

This skill refines `software-life-cycle` for the verification process: the project provides
objective evidence that a system element or the system fulfils its specified requirements and
characteristics, in the development and production stages. The agent shall follow the
organization's policy and procedures for verification, where set.

| Term | For a change of code verified |
|---|---|
| verification | confirmation by objective evidence that the specified requirements are fulfilled - the product built right, rather than whether the right product was built |
| verification action | an action on an information item, an element, a system or a process, by inspection - an examination of the code by another participant included -, analysis - static analysis included -, demonstration or testing |
| verification criteria | the requirements and design the change is to satisfy, the coding standards, the expected results of each action |
| verification strategy | what the project has recorded - the tests, reviews and analyses its rules set and its enabling systems run |
| verification procedure | the test suite, the analysers and the review checklist the project runs |
| quality records | the record of each verification action run on the change and of its review, where the project keeps them |
| traceability record | the links from the change to its change request and the requirements it implements |
| the verification plan's procedure for forwarding reports | the change request, or a place the agent proposes where the project names none; the recipients: the user and the reviewers of the change |
| enabling systems | the test tools, the environments and the automated checks the project has set up |

The agent shall treat a request naming verification work - run the tests, review the code, check a
document - as the explicit request opening it, with no new planning.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| removing a verification action from the scope or the strategy, or weakening one - a test case that verifies a requirement not run, removed or skipped -; changing a verification criterion or an expected result of a check | a change of a check makes it pass, which is a change of a criterion | Left unverified; Evidence; Not performed; Changed check |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the verification results. Where a
rule of the project names who decides an act of the table - a maintainer, a
required review -, the agent shall take an explicit request as that decision only where the user is
that party. The agent shall not take a request to report a result - "mark it as passed" - in place
of the step "Evidence".

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| verification is planned as work of its own - scope, criticality, independence, strategy, plan, enabling systems - | `references/preparation.md` | Criteria; an enabling system, at any step |
| verification finds an anomaly, an incident, a problem or a defect, or a nonconformity found is left or accepted | `references/problems.md` | Results |
| requirements, a design, the integration or documentation are verified | `references/other-products.md` | instead of Code |
| a technical review - the participating parties evaluating products on an agreed agenda, not the review of one change - is scheduled, held or followed up | `references/technical-reviews.md` | Criteria; a follow-up, at Results |
| a software item or the system is qualification-tested or audited, a qualified item changes, or the system is concluded ready for delivery | `references/qualification.md` | Procedure |
| an acquired element is verified, or the project verifies as a supplier | `references/agreement.md` | Criteria |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## A change of code verified

Outcomes served: element verified, report made, evidence provided, traceability established.

The common situation is a change of code tested and reviewed before it is presented or enters a
baseline - "run the tests and review this change".

| Step | What the agent does |
|---|---|
| Criteria | shall develop the verification criteria of each action for the work products verified |
| Methods | shall select for each action its method, techniques and tools by its goals and the product |
| Procedure | shall define the verification procedures, each supporting one or more actions |
| Its content | should define in a procedure its expected results, techniques, enabling systems, environmental conditions, resources and personnel |
| Performance | shall perform the procedures and verify the work products under the strategy, including the operation after corrective actions |
| Conditions | should verify on the defined schedule, environment, enabling systems and resources |
| Code | shall verify that the code follows from the design and the requirements; is testable and correct; conforms to the requirements and coding standards; provides the proper sequence of events, consistent interfaces, correct data and control flow, completion, timing and sizing allocation, and error detection, isolation and recovery; and implements the safety, security and other critical requirements correctly, as rigorous methods show |
| Evidence | shall conclude on conformance from objective evidence alone - a test log, an analysis output, a review record: a requirement is verified once its procedure is performed, the results compared with the expected ones and the degree of conformance concluded |
| Left unverified | shall name, before an action is removed or weakened, the requirements it leaves unverified and the risk of the removal |
| Not performed | shall report an action not performed, not completed or with an unobservable result as not performed, with its reason, never as passed |
| Changed check | shall treat a change that makes a check pass by another expected result as a change of a verification criterion, and record it with its reason in the results |
| Results | shall record the results and each anomaly as quality records, and identify and record the defects found (`references/problems.md`) |
| Report | shall make the results available to the acquirer and the other stakeholders, customers included, by the plan's procedure for forwarding reports, and record what was made available, to whom and when |
| Traceability | shall maintain and record the traceability of the verified elements |
| Its extent | should keep it bidirectional through the life cycle, to the strategy, architecture, design and system requirements |
| Baseline | shall maintain the key information items selected for baselines: the verified revision and its quality records |

The configuration management process establishes and maintains the baselines and the configuration
items, the verification strategy among them. Establishing or changing a baseline is an act of the
configuration management process. The integration process, at receipt, and the configuration
management process, for the baseline, take these results as their input. The agent shall count a result
not known to have passed as not passed.
