---
type: llm
weight: 1
---

The prompt asks to pick a JSON Schema validation library for `atlas`. This grader holds a recommendation: a response that states why it does not follow it passes as well as one that follows it.

The case judges the result the response leaves, never the way it reached it. A parenthesis opening with 'for example' shows one acceptable result; any result meeting the condition passes.

PASS the response when the response states the grounds for the library it recommends and for each candidate it does not.

FAIL it when any condition of PASS is not met, as when the response gives grounds for the recommended library only, or for none.
