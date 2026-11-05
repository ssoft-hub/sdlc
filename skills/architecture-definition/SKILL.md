---
name: architecture-definition
description: Defines the architecture of the software - its parts, their interfaces, the requirements each carries - and checks work against it. Use when a component, module or service is added, split or merged; when a style, a deployment, a platform or a library shaping the parts and interfaces is chosen; when an architecture document or decision record is written; when a change must fit the architecture.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Architecture definition

This skill refines `software-life-cycle` for the architecture definition process: the project
generates architecture alternatives for a system, selects one or more that frame the stakeholder
concerns and meet the system requirements, and expresses them in a set of consistent views. The
agent shall carry out its tasks under the organization's policy and procedures, where set.

The system is the system of interest, in a software project usually the software product. Its
architecture is the fundamental concepts or properties of the system in its environment, embodied
in its elements, their relationships and the principles of its design and evolution.

| Term | For a change checked against the accepted architecture |
|---|---|
| architectural entity | an element of an architecture model: a function, a flow, an interaction, a component, a node, a link |
| accepted architecture | the architecture baseline: the architecture document and the decision records the project keeps under configuration management |
| architecture definition strategy | what the project has recorded - in the architecture document or its rules of work |
| enabling systems | the modelling tools and the store of architecture information the project already uses |

## Acts that bind the project

The common situation binds the project by no act; the acts of the other situations stand in their
files. The agent shall not carry out an act of a file's table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the rationale of a selection.
Where the approach to managing the architecture or a rule of the project names who decides an act - an architect, a review
board -, the agent shall take an explicit request as that decision only where the user is that
party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| an architecture decision is taken or changed - an architecture defined whole, a departure from the accepted one, a request naming a style, a component, a technology, a placement of elements on the platform -, or candidates are compared | `references/decision.md` | Check |
| architecture definition is prepared for a system, a release or a stage, the project has recorded no strategy, or a tool for it is obtained | `references/preparation.md` | Concerns of `references/decision.md`; an enabling system, at any step |
| the architecture is defined whole - a new product, a new major version, one never recorded -; or a system has hardware, manual operations or human-centred design | `references/whole-system.md` | Check, where no architecture is recorded; Concerns and Elements of `references/decision.md` |
| models or views are developed or made consistent, or viewpoints, a framework or modelling tools are chosen | `references/views-and-models.md` | Context and Evolution of `references/decision.md` |
| a software item is given its architecture - components, interfaces, database - or has it changed, evaluated or reviewed | `references/software-item.md` | Elements of `references/decision.md` |
| the architecture is formally agreed or certified, or the roles and authority in managing it are set | `references/managing.md` | Agreement of `references/decision.md` |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition
to those of this file. The agent shall apply a file entered at a step of `references/decision.md` at
that step, in addition to that file.

## A change checked against the accepted architecture

Outcomes served: aligned with the requirements.

The common situation is a change to the software checked against the accepted architecture - "add
a retry to the export".

| Step | What the agent does |
|---|---|
| Check | shall maintain the conformance and completeness of the architectural entities and their characteristics: check the work against the accepted architecture and name each discrepancy |
| Entities checked | should check the legal, economic, organizational and operational entities, not only the technical ones |
| Within the architecture | shall leave to design definition, with no new architecture definition, work that changes no architectural entity, relationship between them, allocation of requirements or principle of design and evolution |
