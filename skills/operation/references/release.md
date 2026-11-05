# A release taken into operational use

## Acts of this situation

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| releasing a version for operational use | a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Operational testing; Admission; Initialization; Activation |
| ending the parallel operation of the system being replaced | the release has not passed the acceptance test the agreement requires | Replacement; Consequences of `SKILL.md` |

## Preparing for operation

Outcomes served: performance monitored.

| Subject | What the agent does |
|---|---|
| Criteria | shall develop and record the criteria for operational use, by which conformance to the agreed requirements can be shown and each release evaluated in its operational testing, and pass them to the transition process as an input of its commissioning |

## Performing operation

Outcomes served: services delivered.

| Subject | What the agent does |
|---|---|
| Operational testing | shall test each release, configured in the operational environment, operationally, by an acceptance test plan it records, for conformance to the functional requirements, evaluating it by the criteria for operational use |
| Admission | shall admit the release to operational use only when the criteria for operational use are met, recording the result in the acceptance record |
| Release record | shall record the acceptance, the delivery and the installation of the release, where the transition process has not recorded them for this release |
| Initialization | shall ensure that the code and the database initialize, execute and terminate as the plan specifies |
| Activation | shall activate the system in its environment to present samples of its services or to show the continuity of their delivery |
| Replacement | should, where the system replaces an existing one being retired and this is agreed, maintain the quality and the continuity of the services, managing the changeover or the parallel operation during the agreed period so that the continuing needs of the stakeholders are satisfied |
