# Planning configuration management

The coordination of the strategy along the supply chain stands in `references/supply-chain.md`.

## Acts of this situation

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| setting or changing the configuration management strategy: the strategy for parallel lines of development, the versioning rules, the set of items | - | Strategy, Plan record |

## Planning configuration management

Outcomes served: items managed.

| Subject | What the agent does |
|---|---|
| Strategy | shall define the configuration management strategy and the plan: the activities, the procedures and the schedule for performing them, a strategy for parallel lines of development where needed, and the organization responsible and its relations with the others, such as those that develop or maintain the software |
| Plan record | shall record the strategy and the plan in the configuration management plan once the decision that sets them is taken |
| Carrying out | shall carry out the plan once it is recorded |

The agent should cover in the strategy the subjects of the table.

| The strategy covers |
|---|
| the roles, the responsibility, the accountability and the authority, those for denying and granting access and for the release and the change of items included |
| the location of the items, the access to them, their releases and their change control |
| the baselines to be established |
| the place and the conditions of storage, and the media, by the levels of integrity, security and safety |
| the criteria or the events that start configuration control and the maintenance of baselines |
| the audit strategy, and the responsibility for the continuous integrity and security of the configuration information |
| change management: a board or meetings, the requests for regular and for urgent changes, the procedures |

Where development runs in parallel, the agent should cover in the strategy for the parallel lines of
development their management, the ways of combining them, the management of the versions of files in
each line, the parent lines and the identifiers of versions.

## Archiving, backup and storage

Outcomes served: items managed, status maintained, releases approved.

The agent shall define the approach to archiving and retrieving the configuration items, the
artifacts and the configuration management data. The agent should include in that approach the
procedures for deleting data.

The agent shall ensure the integrity and the consistency of the items by planning and carrying out
their backup, storage and archiving. The agent shall control the handling and the delivery of the
items. The infrastructure management process maintains the backups. The agent should define what is
copied and how it is recovered in the handling and storage guide.

## Configuration evaluation

Outcomes served: audits performed.

The agent shall define the need for configuration management audits or supervision, such as one
before each release, and plan them.
