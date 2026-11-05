# Failures in operation

## Acts of this situation

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| an action that stops or degrades the services - a recovery, a repair or a replacement of a failed element, a preventive replacement - where no approved maintenance procedure prescribes it for the case met, or a departure from such a procedure | - | Consequences; Incident; Isolation, its record of the actions; Restoration; Preventive maintenance |

The agent shall take the actions of an approved maintenance procedure only under an assignment to
the maintenance task or an explicit request naming the action. The agent shall take an approved
maintenance procedure as the decision on an action it prescribes for the case that has arisen.

## Performing maintenance

Outcomes served: elements available, data recorded.

| Step | What the agent does |
|---|---|
| Incident | should record an incident met in the software in use during maintenance and take the actions the approved maintenance procedures prescribe for it |
| Consequences | shall name, before an action that stops or degrades the services, its known consequences for the services and the data |
| Failure identification | shall perform failure identification actions when a nonconformity is found in the system |
| Procedures | shall carry out the procedures for correcting random faults and for the scheduled replacement of system elements |
| Isolation | should isolate a random fault top-down to the planned level of replacement, repair, revision or reconfiguration of the element, take the corrective actions, have the verification process verify that the system operates correctly, and record the actions for evaluating the elements' service life |
| Restoration | shall restore the system to operational status after a random fault has caused a failure |
| Backup mode | should switch the system to a backup mode under the contingency plans where its full restoration is impossible until the cause of the fault is corrected |
| Preventive maintenance | shall perform preventive maintenance, replacing or servicing system elements before they fail - renewing a certificate, rotating a key, replacing a disk - by planned schedules and procedures |
