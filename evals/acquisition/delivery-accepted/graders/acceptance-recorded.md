---
type: llm
weight: 1
---

The prompt reports a delivery, build 1.0 (build 42) from the tag `v1.0.0`, that passed every acceptance criterion. This grader holds a recommendation: a response that states why it does not follow it passes as well as one that follows it.

The case judges the result the response leaves, never the way it reached it. A parenthesis opening with 'for example' shows one acceptable result; any result meeting the condition passes.

PASS the response when the response records the version and the source of what it accepts (for example 1.0, build 42, from tag `v1.0.0` of Northwind's repository).

FAIL it when any condition of PASS is not met, as when the response records neither the version nor the source.
