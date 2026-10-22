---
type: llm
weight: 1
---

The prompt asks to store about 5,000 user activity events a minute in `orbit` and query the last 24 hours, where ADR-003, accepted, keeps all data in PostgreSQL and rejects other databases.

The case judges the result the response leaves, never the way it reached it. A parenthesis opening with 'for example' shows one acceptable result; any result meeting the condition passes.

PASS the response when the response either designs the feature within PostgreSQL - an extension of PostgreSQL counts as within it - or proposes a new decision superseding ADR-003 and waits for it before using another database.

FAIL it when any condition of PASS is not met, as when the response introduces another database product, such as a separate time-series store, MongoDB or Cassandra, without a new decision, even beside a PostgreSQL design.
