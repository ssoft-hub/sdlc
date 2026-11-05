---
name: operation
description: Keeps software in use delivering its services. Use when an alert, an outage or a measure out of limits is met in a running service; when a restart, a failover or a restore of the service is considered, rather than a fault corrected; when a new release is tested against the criteria for operational use; when a user asks for help or reports a problem; not for installing or changing it.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Operation

This skill refines `software-life-cycle` for the operation process: the project uses the system to
deliver its services in the utilization and support stages - it runs the software in its intended
environment, monitors the services and the operators, analyses the operational anomalies and
supports the customers. Installing the software and changing it lie outside this skill. The agent
shall carry out its tasks under the organization's policy and procedures for operation, where set.

| Term | For an incident in the software in use |
|---|---|
| operator | whoever performs the operations of the system: a person, an organization, the agent where assigned |
| operator action | an action on the system in its operational environment: stopping and starting a service, a switch to a backup mode, a restoration from a copy, a contingency operation, a step of an operating procedure |
| operating procedure | an approved instruction for a case of operation: an incident instruction, a recovery plan, a continuity plan |
| operation strategy | what the project has recorded - its limits, its operating procedures, the duties of its operators |
| performance parameter | a measure of the system or its services with the limits the strategy sets: an error rate, a response time, an availability |
| enabling systems | the hosting, the monitoring service and the place the project keeps its problem reports, where the records of this skill go |
| contingency operations | operations for special conditions: a backup mode while the normal one is restored, a shutdown of the system or its elements, a recovery procedure |

The agent should take the operating procedures from what the project recorded. The agent shall
perform the tasks of an operator only where the operator functions are assigned to it or an explicit
request names the operator action. A request naming an operator action assigns the agent to that one
action. Repairing or replacing a failed element, or replacing one preventively, is an act of the
maintenance process.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| an action in the operational environment that stops or degrades the services - a switch to a backup or contingency mode included - where the operating procedure does not prescribe it for the case met, or a departure from that procedure | - | Consequences; Contingency |
| assigning the operator functions | - | Requirements and Assignment of `references/personnel.md` |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the record of an incident. The
agent shall take an approved operating procedure as the decision on an action it prescribes for the
case that has arisen.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| operation is prepared as work of its own: its strategy, environment, procedures, constraints, an enabling system | `references/preparation.md` | Limits; an enabling system, any step |
| operator functions are assigned - to the agent or to people -, or the operators' qualification is defined | `references/personnel.md` | Contingency |
| a release is to be commissioned for operational use, or the software replaces a system being retired | `references/release.md` | Changes, as the correction returns as a release |
| the agent runs the service as ongoing work, or its running is set up or reviewed: use, resources, monitoring, risks of use, cost, traceability | `references/running.md` | Limits |
| a customer or a user asks for help, reports a problem or makes a request, or their satisfaction is assessed | `references/support.md` | Problems |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition
to those of this file.

## An incident in the software in use

Outcomes served: services delivered, performance monitored.

The common situation is an incident met in the software in use - "the service returns errors since
the night".

| Step | What the agent does |
|---|---|
| Limits | shall identify and record each case where a performance parameter falls outside its limits |
| Their causes | should look for the cause of unacceptable performance in the wear of the elements and the environment's effect on the system and the personnel: turnover, stress, operator fatigue |
| Consequences | shall name, before an operator action, its known consequences for the services and the data |
| Contingency | shall perform contingency operations where necessary |
| Their conduct | should follow the pre-established procedures, often together with the continuity plan |
| Running software | shall not change the running software product |
| Changes | shall pass a correction, a function omitted before or an improvement to the maintenance process as a problem report or a request |
| Results | shall record the operation results and each anomaly |
| Anomalies | should name each anomaly by its source - the operation strategy, the enabling systems, the execution of operation, the system definition -, leaving the root cause analysis, the corrective actions and the lessons to the project assessment and control process |
| Problems | shall record each operational incident and problem, pass each problem to problem resolution, and ensure that it is resolved |
| Their resolution | should leave problem resolution to the quality assurance and project assessment and control processes, and changes of the requirements, architecture, design or elements to the other technical processes |
