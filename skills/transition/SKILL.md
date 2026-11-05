---
name: transition
description: Brings a verified release into operational status in its environment. Use when a release is deployed, installed or rolled out to production, a customer's site, staging or an app store; when users are switched to a new release or a replacing system; when operational data is migrated with a release installed; when a rollback is done; when a release is handed over for acceptance - not for running it.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Transition

This skill refines `software-life-cycle` for the transition process: moving a verified system with
its enabling systems into operational status in its operational environment, as the agreements
define, at each level and stage. Installing a release into an environment for validation or
acceptance is also transition. The agent shall follow the organization's policy and procedures for
transition, where it has set them.

| Term | For a release installed over an earlier one |
|---|---|
| operational environment | where the software is used: servers or cloud, the users' machines, an app store |
| site | the target environment prepared in it: accounts, network, configuration, data stores |
| transition strategy | what the project has recorded - the installation procedure, its steps, checks, way back and dates |
| enabling systems | the automated installation, the place the releases are kept and the monitoring |
| activation | connecting the installed release to its resources and checking it out |
| commissioning | putting the release into operation for use as intended, the users moved onto it, once the readiness conclusion is decided |
| installation record, delivery record, test procedure | the record of the installation run and the change request of the release, or the reply, where the project names no other place |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| installing a release into the operational environment | the product has not passed verification or its result is unknown; an installation criterion is not met; there is no backup or way of reverting; the site is not prepared; the data migration is irreversible; an acceptance test from the agreement has not been conducted; a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Way back; Installation criteria of `references/site.md`; Installation; Installed |
| activating the installed release | the product has not passed verification or its result is unknown; an installation criterion is not met; there is no backup or way of reverting; the site is not prepared; the data migration is irreversible; an acceptance test from the agreement has not been conducted; a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Activation |
| commissioning the release | the product has not passed verification or its result is unknown; an installation criterion is not met; there is no backup or way of reverting; the site is not prepared; the data migration is irreversible; an acceptance test from the agreement has not been conducted; a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Readiness; Commissioning |
| installing a release without the possibility of reverting to the last working version | the product has not passed verification or its result is unknown; an installation criterion is not met; there is no backup or way of reverting; the site is not prepared; the data migration is irreversible; an acceptance test from the agreement has not been conducted; a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Way back |
| the conclusion on operational readiness | the product has not passed verification or its result is unknown; an installation criterion is not met; there is no backup or way of reverting; the site is not prepared; the data migration is irreversible; an acceptance test from the agreement has not been conducted; a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Readiness |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the installation events and
results. Where the agreement or a rule of the project names who decides an act - the
acquirer, the operating organization -, the agent shall take an explicit request as that decision
only where the user is that party. The agent shall not start installation into the operational
environment before a decision taken to put the software into use. Where that decision is missing,
the agent shall name it.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the transition strategy is defined or revised; constraints on the system; an enabling system to obtain; shipping; staged or stored delivery | `references/preparation.md` | Resources; an enabling system, at any step |
| a first installation, a new site or customer, a changed environment, or no exact environment for a demonstration | `references/site.md` | Resources |
| operational data migrated or converted, or a replaced system run in parallel until acceptance | `references/migration.md` | Installation |
| delivery to an acquirer under an agreement, installation by or with the acquirer, installation for validation or acceptance | `references/acceptance.md` | Product; Installed; Capability |
| an anomaly, an incident, a problem or a defect in another process's output | `references/results.md` | Results; a problem, the step where it is met |
| training or support of operators, users or other parties | `references/training.md` | Activation |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## A release installed over an earlier one

Outcomes served: installed and capable, ready for operation, traceability established.

The common situation is a release installed where an earlier release runs -
"deploy 2.4 to production".

| Step | What the agent does |
|---|---|
| Resources | shall identify, and have available before installation, the resources and information it needs: the release, enabling-system access, environment parameters, operational data |
| Product | shall pack and deliver for installation, where and when defined, the qualified product with its detailed configuration and technical and operational documentation |
| Way back | should have the strategy define the way back to the last working version, proposing a missing one by `references/preparation.md`, and fully back up the system before installation so that version can be reinstalled |
| Disruption | should keep the service disruption minimal, agreeing the interruption and its time with the users beforehand |
| Installation | shall install the release in its operational location under the strategy, interfaced with its environment, recording the installation events and results |
| Operational data | shall configure it with the operational data and the changes of the environment or business process |
| Adaptation | shall adapt it to the operational requirements |
| Initialization | shall ensure its databases and code initialize, execute and terminate as the agreement or the project's requirements set |
| Installed | shall demonstrate, by a test procedure it records, that the installation criteria are met |
| Activation | shall activate and check out the release under the operational procedures and the organization's policy and instructions |
| Its steps | should include connecting the resources, checking the tools, and evaluating the environmental conditions and readiness |
| Capability | shall demonstrate that the installed release is capable of the required operation |
| Its focus | should focus it on the main functions and the logical interfaces |
| Sustained | shall demonstrate with the enabling systems that the functions are performed sustainably, their operational readiness checked |
| Readiness | shall review operational readiness, confirm the release ready for use, and present the conclusion for decision |
| Its basis | should base the review on the demonstrations, the validation results, and the criteria for operational use the operation process set and the result of its operational testing, where it tested the release |
| Commissioning | shall commission it once that conclusion is decided, for use as intended in the customer's environment |
| Results | shall record the transition results - the delivery, the demonstrations, the readiness conclusion - and each anomaly met |
| Traceability | shall maintain which version of which element is installed in which environment, and when |
| Over the life cycle | should keep the traceability of the transitioned elements bidirectional throughout the life cycle, between them and the transition strategy, the architecture, the design and the system requirements |
| Baselines | shall maintain the key information items selected for baselines |
| Configuration | should have configuration management establish and maintain the baselines and the configuration items, the transition strategy being the typical baseline item of this process |

Whether the operational environment meets the stakeholder requirements, and the system the
stakeholders' needs, is left to the validation process.
