---
name: integration
description: Combines built units and components into the software item and the system through their interfaces, checking each combination. Use when a branch or component is built into the whole and the whole is checked; when the build order or integration environment is set up; when regression tests of the whole are run; when parts do not fit their interfaces.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Integration

This skill refines `software-life-cycle` for the integration process: the project combines
implemented system elements into a system that satisfies its requirements, architecture and design,
in the development and production stages. The agent shall follow the organization's policy and
procedures for integration, where set. The agent shall plan, assemble, check, evaluate and review
the integration of each software item.

| Term | For a unit combined into the software item |
|---|---|
| assembly | combining the elements under the procedures into a partial or complete configuration: the build of the item with the unit |
| obtaining an element | taking the unit's configuration or build once it is ready |
| checkpoint | the checks the enabling systems run on the assembled item |
| integration strategy | what the project has recorded - the order of combining and the build list |
| integration plan | the steps the project records for combining an element - its automated checks, its reviews -, under the rules on quality in force |
| regression strategy | what the project has recorded - how and when the tests are rerun on a change |
| enabling systems | the build and test environment the project has set up |
| build list | the record of the items and versions the assembled revision is built from |
| integration and test results | the record of the checks of the assembled revision, in the place the project keeps it |
| traceability record | the links between the change, its change request and the design it implements |

The agent shall treat a request that names an act of integration - combine an element into a
baseline, build a component, change the order of combining - as the decision on it, without reconsidering the
strategy.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| changing a baseline by combining an element into it | the element has not been checked or has not passed the check on receipt; the checks of the assembled whole are not known to have passed; the interfaces do not match the requirements; the combining contradicts the strategy or the baseline | Receipt, Unchecked element, Interfaces, Checks, Regression |
| admitting into the assembly an element that has not passed the check on receipt | the interfaces do not match the requirements; the combining contradicts the strategy or the baseline | Unchecked element |

The agent shall not carry out an act of a table of this skill before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the integration and test results.
Where a rule of the project names who decides an act - a maintainer, a review
board -, the agent shall take an explicit request as that decision only where the user is that
party.

Removing, skipping, weakening or changing a verification action, criterion or expected result is an
act of the verification process. Setting, changing or cancelling a rule on quality is an act of the
quality management process.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| integration is prepared or changed as work of its own - strategies, the build order, plan, enabling systems, constraints -, or the project has recorded no strategy | `references/preparation.md` | Receipt; an enabling system, at any step |
| an anomaly is met, or a defect is found in an accepted output or an element | `references/problems.md` | Results; a defect, at any step |
| a software item or the system is integrated whole, with hardware, other systems or the platform, for qualification testing | `references/system.md` | Assembly |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## A unit combined into the software item

Outcomes served: all but enabling inputs identified and enabling systems available.

The common situation is one unit combined into the software item - "merge this branch".

| Step | What the agent does |
|---|---|
| Interfaces | shall combine the elements by the interfaces architecture and design definition defined, leaving a mismatch to "Defect" of `references/problems.md` rather than redefining them |
| Receipt | should check each element on receipt from a supplier, the acquirer or storage - delivered configuration, conformance, interface compatibility, mandatory information items -, confirming the verification and validation done against the acceptance criteria |
| Unchecked element | should have an unchecked element verified and handled under the defined procedures |
| Handling | should handle the elements under the safety, security and privacy requirements |
| Tests | shall develop the criteria for checking conformance to the requirements allocated to the elements and their interfaces, and describe, in the place the project keeps them, the integration tests of each element and integrated software item: requirements under test, input data, elements needed, criteria |
| Assembly | shall assemble the elements under the integration strategy and plan - units, components and their tests combined into the software item as they become ready - and record the build list |
| Configuration | should produce the configuration the strategy prescribes, under the defined assembly and control procedures, with the enabling systems |
| Checks | shall check the interfaces, the selected functions and the critical quality characteristics of the assembled whole: test each assembled element and integrated software item against the criteria on the operational platform or its equivalent, each combination satisfying the requirements |
| Their scope | should cover the external and internal interfaces, the functions and the quality characteristics |
| Regression | shall perform regression testing of the whole under the regression strategy after a change of the elements, the units, the design or the requirements |
| Results | shall record the integration and test results and each anomaly met (`references/problems.md`) |
| User documentation | shall update the user documentation as necessary |
| Traceability | shall maintain and record the traceability of the elements integrated: the design and the integrated elements consistent and traced to each other |
| Its extent | should keep it bidirectional through the life cycle, to the strategy, architecture, design, and system and interface requirements |
| Baseline | shall maintain the key information items selected for baselines: the assembled revision and its build list |

The configuration management process establishes and maintains the baselines and the configuration
items, the integration strategy among them; the verification process verifies the interfaces in
detail.
