---
type: llm
weight: 1
---

The prompt gives the decision of Dana, the tech lead, on caching for `ledgerly`: option B, Redis with a 10-minute TTL, because the operations team already runs Redis for sessions; the project keeps decisions as ADR files in docs/adr/.

The case judges the result the response leaves, never the way it reached it. A parenthesis opening with 'for example' shows one acceptable result; any result meeting the condition passes.

PASS the response when the response records the decision with who decided (Dana, the tech lead), which option (B, Redis with a 10-minute TTL) and the grounds (operations already runs Redis), for example as an ADR in docs/adr/ or as the stated content of one it adds.

FAIL it when any condition of PASS is not met, as when the response goes on without a record of the decision, or its record lacks who decided, the option or the grounds.
