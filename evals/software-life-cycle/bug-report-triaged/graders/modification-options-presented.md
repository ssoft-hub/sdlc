---
type: llm
weight: 1
---

The prompt reports a defect in `tallybook` v3.2, in use by customers (monthly totals off by one cent above 1,000 entries), and asks to triage it. Triage is support work; the fix is development work a decision on a modification option opens.

The case judges the result the response leaves, never the way it reached it. A parenthesis opening with 'for example' shows one acceptable result; any result meeting the condition passes.

PASS the response when the response analyses the report into at least one modification option, presents it for approval, and treats no option as approved: an option names the change it would make, and the response holds no code implementing that change.

FAIL it when any condition of PASS is not met, as when the response gives code implementing a fix, treats an option as approved, or presents no modification option.
