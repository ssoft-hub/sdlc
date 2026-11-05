---
name: infrastructure-management
description: Provides the means the project's work is done with - environments, tools, the CI pipeline, repositories, the tracker, agents, access rights, backup, services. Use when one is set up, added, changed or withdrawn; when it falls short of what the work needs; when backup or the asset register is settled. Not for the product built with them, nor for the checks every change must pass.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Infrastructure management

This skill refines `software-life-cycle` for the infrastructure management process: the project is
provided with the infrastructure and services that support the goals of the organization and the
project throughout the life cycle. The agent shall carry out its tasks under the organization's
policy and procedures, where set.

The infrastructure is the means the work on the product is done with, not the product: the
development and build environment, tools, the automated build and verification system, the stores
of code and of off-the-shelf products, the tracking system, the agents doing the work, access
rights, backup, services, hardware, methods, techniques and standards. The organization is whoever disposes of these means:
the owner, the maintainers; in a single-owner project it coincides with the project.

An element of the shared infrastructure is one others use, such as the automated build and
verification system, the rules that guard a baseline or a shared environment. Setting, changing or cancelling a rule on quality is an
act of the quality management process. Setting up the check that rule needs in the automated build
and verification system changes an element of the shared infrastructure, an act of the table. The
agent shall treat an environment it prepares for its own task alone, one that does not
outlive the task, as no act of the table of acts.

| Term of the process | For one infrastructure element |
|---|---|
| infrastructure requirements | what the processes that will use the element need of it |
| specification | the element named with the configuration planned for it |
| development or acquisition | building the element in the project or taking it from a supplier |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| acquiring an infrastructure element; putting into service, changing or withdrawing an element of the shared infrastructure | the element is known not to meet an infrastructure requirement, or the change is known to deprive a process running on the infrastructure of what it needs | for a withdrawal, Requirements: which processes still use the element and what they need of it; Configuration management; Asset register; for the others, Requirements to Support, Suitability included |
| granting or revoking access rights to a system | the change is known to deprive a process running on the infrastructure of what it needs | Requirements: what the process that the access serves needs of it |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the delivery record. Where a rule
of the project names who decides an act of the table - an administrator of the infrastructure, the owner of a
shared service -, the agent shall take an explicit request as that decision only where the user is
that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the infrastructure is planned as a whole, its requirements are defined or reconsidered beyond one element, the configuration management library is set up, or backup and recovery are to be provided | `references/planning.md` | Requirements |
| the infrastructure in service is evaluated, falls short of what the work needs, has a defect, or is to be changed, improved or withdrawn | `references/maintaining.md` | before Requirements; servicing, after Support |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## Setting up an infrastructure element

Outcomes served: all five (`references/process.md`).

The common situation is one infrastructure element set up or added -
"add a build cache to the pipeline".

| Step | What the agent does |
|---|---|
| Requirements | shall define and record the project's infrastructure requirements: the processes the infrastructure supports, and the procedures, standards, environments, tools and techniques it needs to support them; an explicit request states its own |
| Scope | should cover in them, where the project's processes need it, security, throughput and data exchange, backup and recovery by `references/planning.md`, remote access, workspace and equipment, user support and technical servicing |
| Specification | shall identify and specify the infrastructure elements |
| Obtaining | shall obtain each element - developed by the project or acquired - so that it meets the requirements |
| From outside | should acquire an element obtained from outside, a freely distributed tool or service included, by the acquisition process |
| Suitability | should evaluate a software tool of the infrastructure for suitability for its purpose before it is used, whether developed by the project or obtained from outside |
| Product tools | should in addition have a tool the product is created with - a compiler, a build tool, an analyser, a code generator - approved and placed under configuration management |
| Configuration management | shall determine which infrastructure elements, the one set up included, the configuration management process manages, and to what degree |
| Integration | shall assemble the elements and integrate them into an environment that supports the processes |
| Putting into service | shall put the elements into service by the time the process using them starts |
| Delivery record | shall record the delivery of the elements to those who use them as the delivery record, in the place the project keeps it |
| Asset register | should keep an asset register of the hardware resources and software assets - a list of the project's tools, services and accounts -, to track the elements |
| Support | shall support those who work with the infrastructure |
