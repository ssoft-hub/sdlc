# Qualification testing and readiness for delivery

Qualification testing is testing of an integrated software item or system against its qualification
requirements: the criteria by which the product is recognized as conforming to its specifications
and ready for use or integration. The agent shall carry out the qualification testing of software
for each software item, or configuration item where one is defined.

## Acts of this situation

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| the conclusion on the readiness of the system for delivery | an action that has not been performed or completed, or whose result cannot be observed, is called not performed, with the reason, and not passed; a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Readiness; Communication |

## Preparing for verification

Outcomes served: element verified.

The agent shall develop for qualification testing the criteria of conformance to the system
requirements and the software requirements.

## Performing verification

Outcomes served: element verified, evidence provided.

| Subject | What the agent does |
|---|---|
| Tests | shall describe the tests of the whole system and of the integrated software product - the requirements under test, the input data, the criteria -, so that the set of tests shows conformance to the requirements |
| Earlier tests | may develop the tests and the test data earlier: during requirements analysis, detailed design or construction |
| System | shall perform system qualification testing against the qualification requirements for the system - test the implementation of each system requirement for compliance and the integrated system against the criteria - and record the results |
| Its requirements | should include in the qualification requirements for the system the criteria for evaluating conformance to the system requirements |
| Software item | shall perform qualification testing of the software item against its qualification requirements - test the implementation of each software requirement for compliance - and record the results |
| Evaluation of the system | shall evaluate the system for the extent to which the tests cover the system requirements, conformance to the expected results, and feasibility of operation and maintenance, and record the results |
| Its criteria | should orient the criteria for evaluating the system to its readiness for delivery |
| Evaluation of the item | shall evaluate the design, the code, the tests, the results and the user documentation of the software item for the extent to which the tests cover its requirements, conformance to the expected results, feasibility of system integration and testing where they are performed, and feasibility of operation and maintenance, and record the results |
| Regression | shall perform regression testing of the integrated software after a change of its software items, under the regression strategy of `references/preparation.md` |
| User documentation | shall update the user documentation as necessary |
| Audits | shall support the conduct of audits - present the product and the results to the audit - and record the audit results |
| Postponed audits | may postpone the software audits until system qualification testing, where both hardware and software are developed or integrated |
| No repeated audit | should not audit again an item already audited |
| Deliverable product | shall update and prepare the deliverable product, after the audits where they were conducted have succeeded, for system integration, system qualification testing, installation or acceptance support |
| Readiness | shall confirm the readiness of the system for delivery |
| Communication | shall communicate the test results to all the stakeholders |
| Validation | may use the qualification testing results for validation as well |
