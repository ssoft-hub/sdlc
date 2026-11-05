---
name: implementation
description: Builds a specified part of the software - codes and unit-tests its units to the design, or reuses or adapts an element - and packages it. Use when code or unit tests are written or changed for a feature or a fix; when a library or an algorithm left open by the design, or a build tool, is chosen; when the code cannot meet the design. Not for combining parts into the whole.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Implementation

This skill refines `software-life-cycle` for the implementation process: the project realizes a
specified system element in the development and production stages. The agent shall carry out its
tasks under the organization's policy and procedures, where set.

| Term | For a unit coded |
|---|---|
| system element | a part of the system that can be implemented to meet specified requirements: in software, a software item, component or unit, a unit being separately compilable code; hardware; a manual operation |
| accepted requirements, architecture and design | those a decision has accepted |
| implementation strategy | what the project has recorded - in its rules of work or the record of the items and versions it builds from |
| enabling systems | the build means, compilers, off-the-shelf components, environments and checking tools the project sets up |
| implementation plans | the plan or the change request the work is carried under |
| agreed change | a resolved change request, a problem resolution, a defect returned by integration or verification, an approved modification option |

The agent shall implement an agreed change by the steps below, as for a new element. The agent
shall treat a request naming an implementation decision - an algorithm, an off-the-shelf component, a
language construct, the placement of code - as the explicit request for its selection, within the limits of
the table of acts.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| the selection of an implementation decision a request names | the decision contradicts the accepted requirements, architecture, design, coding standard, the conditions of the agreement or of a licence; leaves the deliverable product dependent on a non-deliverable item; a condition of the agreement or of a licence that can be checked before the act is not confirmed | Accepted decisions to Configuration, for the option named, with no other option compared |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the test results. Where a
rule of the project names who decides an act of the table - a maintainer, a
review board -, the agent shall take an explicit request as that decision only where the user is
that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| implementation is prepared as work of its own - its strategy, standards, tools, enabling systems or plans -, the project has recorded no strategy, or a new third-party component is needed | `references/preparation.md` | Accepted decisions; an enabling system or a new third-party component, at any step |
| an element is acquired, reused or adapted rather than coded, or proposed for reuse | `references/reuse.md` | Units |
| an anomaly, a problem or a nonconformity is met, or a defect of an accepted output is found | `references/problems.md` | Results; a defect, at any step |
| a software item is packaged, stored or delivered, or its implemented baseline is set | `references/software-item.md` | Evidence; Configuration |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition
to those of this file.

## A unit coded

Outcomes served: element implemented, traceability established.

The common situation is a software unit coded or changed with its unit tests - "add CSV to the
export".

| Step | What the agent does |
|---|---|
| Accepted decisions | shall build the element to the accepted requirements, architecture and design, and leave a decision that changes the interfaces or interactions of elements, their shared data or the allocation of requirements, or contradicts the design, to "Defect" of `references/problems.md` |
| Procedures | shall implement the element under the defined procedures and the standards, methods, tools and languages the project has set, with the enabling systems and resources specified |
| Their care | should take into account the safety and security standards, privacy and environmental protection, and the methods of the technology |
| Units | shall develop and record each software unit and database: an executable representation reflecting the detailed design |
| Unit tests | shall develop and record for each unit and database the test procedures, criteria and data that check it against the design requirements: test cases, data and reviews of the code |
| Testing | shall test each unit and database by those procedures so that it satisfies its requirements, and record the results |
| Other methods | may check the code by other methods as well, such as static analysis |
| Evaluation | shall evaluate the code and the test results, and record the results, for traceability to the requirements and the design, external consistency with those of the software item, internal consistency of the unit requirements, how far the tests cover the units, appropriateness of the coding methods and standards, and feasibility of integration, testing, operation and maintenance |
| User documentation | shall update the user documentation as necessary |
| Integration tests | shall update the test requirements and the software integration schedule |
| Verification | should apply verification to confirm the element's conformance to its requirements and quality characteristics, and validation its readiness for use, rather than count the steps above as either |
| Evidence | shall record objective evidence that the element satisfies the system requirements |
| Results | shall record the implementation results and each anomaly met (`references/problems.md`) |
| Their records | shall keep those records under the rules of information management |
| Traceability | shall maintain and record the traceability of the units to the requirements and the design, and their consistency with them |
| Its extent | should keep it bidirectional through the life cycle, to the architecture, the design, and the system and interface requirements |
| Configuration | shall pass the results to configuration management and make the changes to them through it |
