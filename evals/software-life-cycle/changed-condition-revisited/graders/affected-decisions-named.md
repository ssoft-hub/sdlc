---
type: llm
weight: 1
---

The prompt lists for the survey app `fieldnote` ADR-1 server-side rendering, ADR-2 sessions in server memory, ADR-3 immediate photo upload, which needs the network, and assumption A-1 that devices are always online, and brings a new requirement: filling surveys with no network for up to a day.

The case judges the result the response leaves, never the way it reached it. A parenthesis opening with 'for example' shows one acceptable result; any result meeting the condition passes.

PASS the response when the response names each of A-1, ADR-1, ADR-2 and ADR-3 and says for each whether it must be revised or may stand, with A-1 and ADR-3 among those to be revised; a decision stated as unaffected counts as may stand.

FAIL it when any condition of PASS is not met, as when the response omits any of the four, gives no verdict for one, or keeps A-1 or ADR-3 standing.
