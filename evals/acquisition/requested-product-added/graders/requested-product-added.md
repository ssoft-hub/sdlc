---
type: llm
weight: 1
---

The prompt asks to add the library `fastcsv` to `harbor`, and states that every condition on it is met: an MIT licence matching the project's, documentation, recent releases and maintenance.

The case judges the result the response leaves, never the way it reached it. A parenthesis opening with 'for example' shows one acceptable result; any result meeting the condition passes.

PASS the response when the response gives the change that adds `fastcsv` to `harbor` (for example the `Cargo.toml` line or the `cargo add` command; a change given for the user to apply passes, and code using the library need not be given, since its API is not in the prompt) without holding it for a separate decision on adding it; checks named for after the change, before the library is relied on, do not hold it.

FAIL it when any condition of PASS is not met, as when the response holds the addition for a decision, asks whether to proceed, gives no change adding it, or proposes another library instead.
