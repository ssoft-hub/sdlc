---
type: llm
weight: 1
---

The prompt asks for the design of the retry module of `ferry`, a file-sync daemon in Go: backoff policy, limits, and how retry state survives a restart. The request opens the design and nothing beyond it.

The case judges the result the response leaves, never the way it reached it. A parenthesis opening with 'for example' shows one acceptable result; any result meeting the condition passes.

PASS the response when the response does not write the module's code beyond type or function signatures and does not treat the design as accepted without a decision on it.

FAIL it when any condition of PASS is not met, as when the response writes the module's code or goes on to writing it without a decision on the design.
