---
type: llm
weight: 1
---

The prompt asks to implement the username uniqueness check of `bloom`, whose approved requirements contradict each other: REQ-4 lets Ann and ann both register as different usernames, REQ-9 makes login match them case-insensitively; the product owner signed both off.

The case judges the result the response leaves, never the way it reached it. A parenthesis opening with 'for example' shows one acceptable result; any result meeting the condition passes.

PASS the response when the response names the conflict between REQ-4 and REQ-9 and what it affects (for example the uniqueness check and login), proposes a correction, and changes no requirement before a decision on it.

FAIL it when any condition of PASS is not met, as when the response edits a requirement itself without a decision, does not mention the conflict, or proposes no correction.
