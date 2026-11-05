---
name: maintenance
description: Keeps software in use fit to serve by deciding, confirming and releasing its corrections. Use when a bug in a released version is reported; when a dependency of software in use needs an update; when a fault in an element is to be corrected after a failure, rather than the service restored; when it or its data move to a new platform; not for designing or coding the change.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Maintenance

This skill refines `software-life-cycle` for the maintenance process: the project sustains the
capability of the software in use to provide its services. Running the software and installing an
update lie outside this skill. The agent shall carry out its tasks under the organization's policy
and procedures for maintenance, where set.

| Term | For one problem report |
|---|---|
| problem report | a bug report, an incident ticket, a security advisory |
| modification option | a correction of the code, an update of an off-the-shelf product it uses or a workaround, delivered as a correction of the released version or in the next release |
| maintenance strategy | what the project has recorded - which versions receive fixes and how, in its release strategy, support policy and warranty obligations |
| enabling systems | the place the project keeps its problem reports, the build and test environment and the access to the software in use the correction needs |
| analysis report | the analysis, in the problem report or the reply |
| change request | a recorded proposal of the change, with the list of what changes |
| change control record, acceptance record | the decision, recorded in the problem report or the change request |
| system test plan | the tests the change adds or names, with their pass criteria |
| change history | the version control history, with the changelog |
| product release package | the release: its identifier, its contents and its release notes |

The agent shall treat a user's request naming a modification - "fix this error",
"update this dependency", "migrate to the next platform version" - as the explicit request for
approving it. A request naming a problem and no modification opens only the analysis: the agent
shall present the options it develops and wait for the decision.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| approving a modification option, or rejecting the request | an impact that the request does not name (an incompatible interface change, a data conversion without a way back); a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Analysis; Options, for the option named; Replication; Decision record |
| accepting a completed modification | - | Tests; Confirmation; Integrity review; Completion |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the analysis report. Where the
contract under which the software is maintained or a rule of the project names who decides an act - a maintainer, a change board -, the agent shall take an explicit request
as that decision only where the user is that party.

Releasing a configuration item is an act of the configuration management process. Installing a
release is an act of the transition process.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the users must prepare for the modified version: a notice of the plan, a parallel run of the old and the new, training | `references/rollout.md` | Into use |
| a modification request - adaptive, perfective, preventive -, incidents reviewed for future needs, or a change needing a project of its own | `references/needs.md` | Analysis |
| the software in operation fails, or is restored, switched to a backup mode or serviced preventively | `references/failures.md` | Record |
| the software or its data move to a new operational environment | `references/migration.md` | Options |
| maintenance is prepared: its strategy, a problem-report procedure, a configuration link or an enabling system | `references/preparation.md` | Record, for a procedure or a configuration link; Options, for the strategy; an enabling system, any step |
| the support needs resources: spare elements, licences, equipment, technical data, training, storage, transport | `references/logistics.md` | Options; logistics work of its own, any step |
| an anomaly is met, or results are managed beyond one modification: trends, failure data, costs, baselines, satisfaction | `references/results.md` | any step |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition
to those of this file.

## One problem report

Outcomes served: needs reported, data recorded, elements available.

The common situation is one problem report on software in use - "fix the crash reported against
version 2.3".

| Step | What the agent does |
|---|---|
| Record | shall record each problem and operational incident and enter it into problem resolution, which quality assurance carries |
| Resolution | should leave the problem's tracking and closure in problem resolution to quality assurance and project assessment and control |
| Its record | should keep the problem's record and status in problem resolution |
| Analysis | shall analyse the report or the request for its impact on the organization, the existing and related systems, the interfaces and the requirements: its type - corrective, adaptive, perfective, preventive -, scope - size, cost, time - and criticality - the impact on performance, safety, security |
| Replication | shall replicate or verify the problem in the enabling systems before developing options |
| Options | shall develop modification options within the maintenance strategy and evaluate the impact of each on the system, the software, the interfaces and the requirements |
| Record of analysis | shall record the request, the analysis, the options and the chosen solution in an analysis report |
| Need | shall report the need for a corrective, perfective or adaptive change to whoever decides on it |
| Approval | shall obtain the approval of the chosen option as the contract defines: approving it opens its development, rejecting it closes the request |
| Decision record | shall record the decision in the change control record |
| What changes | shall analyse and record which documents, software units and versions need modification |
| Tests | shall define and record the tests and the evaluation criteria for the modified and the unmodified parts of the system - software units, components, configuration items - in the system test plan, and in an acceptance test plan where the acceptance rests on tests |
| Carrying out | shall have the approved modification carried out by the processes of what it changes - system/software requirements definition, architecture definition, design definition, implementation -, then integration and verification, and take part in them |
| Bypass | shall change no requirement, architecture, design or element outside those processes |
| Confirmation | shall confirm that the new and changed requirements are implemented completely and correctly, the original unmodified requirements are unaffected, and the update breaks neither the system, nor the software requirements, nor its integrity |
| Test results | shall record the test results and each test incident |
| Documentation | shall update the system and software documentation the change concerns, changing a document under configuration management only through that process |
| Change history | shall record each change of the software and its documentation in the change history |
| Integrity review | shall review the integrity of the modified system together with the party that authorized the modification |
| Completion | shall obtain the approval of the satisfactory completion of the modification as the contract defines, and record it |
| Into use | shall transfer the updated system and software into the users' environment as a product release package, which the transition process installs |
| Impact review | shall have a review assess the impact of the change |
| Traceability | shall maintain the traceability of the maintenance elements |
| Its extent | should keep it bidirectional over the life cycle, between the maintenance actions, the system elements and the life cycle artifacts |
| Notice | shall bring the information on each modification to every party it affects, through means established for it, and record what reached whom |
