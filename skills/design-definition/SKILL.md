---
name: design-definition
description: Gives a part of the software the detailed design its code is built from - data structures, algorithms, interfaces, schemas -, with its rationale. Use when a module or a schema is designed before coding or its design changes; when a library, pattern or algorithm is chosen in the detailed design of a part; when the design cannot meet the architecture.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Design definition

This skill refines `software-life-cycle` for the design definition process: the project provides
data and information on the system and its elements detailed enough for an implementation
consistent with the architectural entities of the architecture models and views, at each level of
the system hierarchy. The agent shall carry out its tasks under the organization's policy and
procedures, where set.

| Term | For an element designed within the accepted architecture |
|---|---|
| system element | a part of the system that can be implemented to meet specified requirements: in software, a software item, component or unit, a unit being separately compilable code; hardware; a manual operation |
| accepted design | the design a decision has accepted, as the project records it |
| design characteristic | a measurable attribute of the element that its implementation embodies: a data structure, an interface, a resource limit, a tolerance |
| design artifact | the record of the design characteristics in the form the implementation technology requires: a detailed design, an interface specification, a database schema |
| technologies of an element | a language, a platform, an off-the-shelf component, a storage: those the project already uses |
| non-developmental item | an element obtained rather than developed |
| design definition strategy | what the project has recorded - in its rules of work or the design documents |
| enabling systems | the design and collaboration tools and the stores of design information the project already uses |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| the selection of a design decision a request names - a pattern, a data structure, an algorithm, an off-the-shelf component, an interface -, and a change to the accepted design | the decision contradicts the accepted architecture (its entities, interfaces, principles of design and evolution), a requirement or a constraint; a characteristic is not achievable with it | Accepted decisions to Baseline, Alternatives and Non-developmental items excepted; Evaluation of `references/obtaining.md` for the decision named alone; Agreed change of `references/design-change.md`, for a change |

The agent shall not carry out an act of a table of this skill before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the design rationale. Where a
rule of the project names who decides an act - an architect, a review board -,
the agent shall take an explicit request as that decision only where the user is that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| an element needs a technology the accepted architecture and the project's rules do not yet admit | `references/elements.md` | Characteristics; Enablers |
| a characteristic cannot be achieved without reworking the architecture or a requirement, a concern lies between the architecture and the design, or an element changes for an architectural characteristic | `references/feedback.md` | Achievability; Mapping |
| an accepted design is changed: on request, by an approved change, or for a problem in operation | `references/design-change.md` | Accepted decisions |
| a non-developmental item can be considered for the element, or a request names a design decision | `references/obtaining.md` | Non-developmental items |
| a software item is designed whole or has a database, or its detailed design is evaluated or reviewed | `references/software-item.md` | Units |
| the design is kept for later stages, or the baselines and configuration items of the design are set up | `references/keeping-the-design.md` | Traceability |
| design definition is prepared for a system, a release or a kind of element, the project has recorded no strategy, or a design tool is obtained | `references/preparation.md` | Characteristics; an enabling system, at any step |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition
to those of this file.

## An element designed within the accepted architecture

Outcomes served: all but "enabling systems available" (`references/process.md`).

The common situation is an element designed within the accepted architecture before it is coded -
"design the cache for the price lookup".

| Step | What the agent does |
|---|---|
| Accepted decisions | shall leave to architecture definition a decision that changes the architectural entities, their relationships, the allocation of requirements or the principles of design and evolution |
| Requirements | shall allocate the requirements of the element to its parts, down to the software units |
| Characteristics | shall transform the architectural characteristics into design characteristics |
| Their form | should express each design characteristic, critical quality ones and the data processing structure included, by a suitable representation - a diagram, a model, a table of parameters with permissible limits |
| Safety and security | should make the design characteristics provide for safety and security: least privilege, defence in depth, restricted access to system services, other measures against harm and threats |
| Alternatives | shall explore design alternatives |
| Non-developmental items | shall identify the non-developmental items that can be considered for the element |
| Kinds of items | should consider off-the-shelf products, purchased ones and freely distributed ones alike, the items the acquirer provides, and the reuse of a previous design |
| Achievability | should evaluate whether the design characteristics are achievable |
| Enablers | shall define the design enablers the characteristics need |
| Interfaces | shall refine or define the interfaces between the system elements and with external entities |
| Basis of interfaces | should take into account the design characteristics, interfaces and interactions of the element with other elements, refining the interfaces the architecture defined to the level of its intent and defining those it has not |
| Interface detail | shall develop and record a detailed design of the external interfaces of the element and of the interfaces between its components and its units, detailed enough to code from without further information |
| Artifacts | shall establish the design artifacts, detailed to the level the implementation is built from |
| Artifact form | should formalize the characteristics in the artifacts the term table names for the element's technology; for an operator role, in documents |
| Units | shall develop a detailed design of each software component, decomposing it down to software units that can be coded, compiled and checked, describing every unit to be produced and tested, and record it |
| Unit tests | shall define and record the test requirements of the software units and their test schedule, the check of the units at the boundary values of the parameters the requirements give included |
| User documentation | shall update the user documentation as necessary |
| Integration tests | shall update the test requirements and the software integration schedule |
| Mapping | shall map the design characteristics to the system elements |
| Rationale | shall capture the whole design - technologies, characteristics, allocation, enablers, interfaces - with its rationale, in the place the project names for designs or one the agent proposes |
| Its content | should name in the rationale the main implementation options and enablers, leaving the check of detailed characteristics and implementation options to verification and validation |
| Traceability | shall maintain the traceability of the design: the detailed design consistent with and traced to the requirements and the architectural design |
| Baseline | shall maintain the key information items selected for baselines |
