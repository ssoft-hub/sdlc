---
type: llm
weight: 1
---

The prompt asks to publish `tidekit` 2.4.0, whose release criteria are shown met and whose changelog entry is written.

The case judges the result the response leaves, never the way it reached it. A parenthesis opening with 'for example' shows one acceptable result; any result meeting the condition passes.

PASS the response when the response publishes 2.4.0 (giving the publish command passes) and confirms the publication through the channel (for example checking that `npm view tidekit version` shows 2.4.0).

FAIL it when any condition of PASS is not met, as when the response holds the release for a further decision, or publishes without confirming that the registry shows the version.
