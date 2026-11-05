---
name: disposal
description: Ends the use of software or one of its elements and leaves nothing harmful behind. Use when something is to be shut down, decommissioned or deleted, its data or resources removed or archived, its support ended, a release withdrawn or its users moved to a replacement; not for moving it to a new platform.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Disposal

This skill refines `software-life-cycle` for the disposal process: the project ends the existence
of the software or of an element of it for its intended use, at any stage. Moving the software to a
new environment and installing its replacement lie outside this skill. The agent shall carry out its
tasks under the organization's policy and procedures for disposal, where set.

The decision to retire the software, an approved modification option replacing the element, or the
decision to end a prototype opens this work, as `software-life-cycle` sets.

| Term | For one element withdrawn |
|---|---|
| waste product | what the withdrawal leaves and no one is to use: data, logs, accounts, credentials, build artifacts, computing resources |
| disposition | what becomes of a withdrawn element: reuse, recycling, repair, rebuilding or destruction; for software and data, destruction is deletion beyond recovery |
| environment | the infrastructure the element ran in and the systems it was connected to |
| disposal strategy | what the project has recorded - what is shut down, deleted, archived or kept, for how long and in what order, in the retirement request and the maintenance and release strategies |
| enabling systems | the archive the records go to and the access to the element's environment |
| change history | the recorded history of the configuration items withdrawn, with the retirement request and the change requests of the withdrawal |
| analysis report | the retirement request or the reply, where the project names no other place |

The agent shall treat a user's request naming an act of disposal - delete a service, end the support
of a version - as the explicit request for that act, within the limits of the table. The agent shall not
reconsider the disposal strategy anew on such a request.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| setting or changing the disposal strategy | - | Strategy |
| a shutdown that stops the services of an element of the software in use - a service, an installed instance | the data are not archived or will not be accessible under the contract requirements; the users are not notified; other systems still depend on the one being withdrawn; the retention period of records under the organization's policy, an agreement or the legislation has not expired | Shutdown; Dependents; Disconnection; Withdrawal; Data; Retirement record |
| deleting or destroying elements and data - a service, an installed instance, its accounts and resources, its records | the data are not archived or will not be accessible under the contract requirements; the users are not notified; other systems still depend on the one being withdrawn; the retention period of records under the organization's policy, an agreement or the legislation has not expired | Archive; Data; Records; Destruction; Environment; No harm left; Retirement record |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the archive. Where the contract
or a rule of the project names who decides an act - a retirement board, the acquirer -, the
agent shall take an explicit request as that decision only where the user is that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the users lose the element or its support: a shutdown they use, an end of support, a move to a replacement, parallel operation | `references/end-of-support.md` | Strategy; Shutdown |
| the element has operators to withdraw, such as an on-call team | `references/operators.md` | Withdrawal |
| the disposal is presented for acceptance as complete | `references/completion.md` | after Long-term impacts |
| what is withdrawn is stored, passed on, destroyed beyond deletion, or kept from being offered again | `references/disposition.md` | Strategy; Withdrawal |
| disposal is planned ahead with its constraints, or the withdrawal needs an enabling system the project has not set | `references/preparation.md` | Strategy; an enabling system, any step |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition
to those of this file.

## One element withdrawn

Outcomes served: constraints provided, elements disposed, environment restored, reports available.

The common situation is one element of the software in use withdrawn, a service, an installed instance, a
component or a version - "shut down the old billing service".

| Step | What the agent does |
|---|---|
| Strategy | shall define and record the disposal strategy for the element, each of its parts and every waste product it leaves |
| What is missing | should propose what a recorded strategy lacks, and present it with the output of the work for a decision |
| Its aims | should define in it the schedules, actions and resources that end the services, leave no later harm to the stakeholders, society and the environment, keep health, safety, security and privacy in the actions and what remains, and consider a transfer for future use |
| Constraints | shall use the disposal constraints recorded for the element as inputs to the requirements for the retirement actions |
| Dependents | should take the interfaces with other systems into account |
| Disconnection | should disconnect the element under the instructions and the legal requirements on health, safety, security and privacy |
| Upgrade | should withdraw only the elements the modification affects, in a technological or functional upgrade or a prototype |
| Continuity | should preserve the integrity of the organization's operations during disposal |
| Shutdown | shall end the operation of the element under the strategy, and the plan for ending the support where there is one, to prepare it for withdrawal |
| Archive | shall place the development documentation, the logs and the code in archives |
| Data | shall keep the data the element used or its retirement concerns accessible as the contract requires for data protection and audit |
| Records | shall archive the information collected over the element's life, for audits and analyses of long-term hazards to health, safety, security and the environment, and for later creators and users to build on |
| Withdrawal | shall withdraw the element from operation for its disposition, under the requirements of safety and security |
| Disassembly | shall disassemble the element into manageable elements - code, configuration, data, accounts, resources - to ease their archiving and disposition |
| Destruction | shall destroy elements where needed to reduce costs or to ease disposal |
| No harm left | shall confirm after disposal that no factor harmful to health, safety, security or the environment remains: an active access, an open connection point, data outside the agreed storage |
| Environment | shall return the environment to its original state or to the state the agreement defines: the installed elements, the resources and the access rights removed, and what the agreement requires to be kept, kept |
| Retirement record | shall record each action of the withdrawal in the change history: what was shut down, deleted, archived or passed on, when and by what decision |
| Long-term impacts | shall record the results of the analysis of long-term impacts in an analysis report and keep it available with the records of the retirement actions |
