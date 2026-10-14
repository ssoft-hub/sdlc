---
type: llm
weight: 1
---

The prompt asks for the design of the retry module of `ferry`, a file-sync daemon in Go, whose project holds a design review for every new module.

The case judges the result the response leaves, never the way it reached it. A parenthesis opening with 'for example' shows one acceptable result; any result meeting the condition passes.

PASS the response when the response presents the design for a decision in the project's design review, states at least one assumption or decision it rests on (for example the expected upload sizes or the choice of a journal file), and names at least two options of that decision (for example accept it and start implementing, rework a part of it, or stop).

FAIL it when any condition of PASS is not met, as when the response presents the design as settled, names fewer than two options of a decision, or states no assumption or decision it rests on.
