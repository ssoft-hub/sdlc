---
name: software-life-cycle
description: Follows the software life cycle - its stages, the processes they draw on and their decision gates - and holds work at decision gates. Use when software work is requested, when the output of a stage is ready for a decision, and when a finding or a changed condition puts an earlier decision or output in question.
---

# Software life cycle

The life cycle of software runs through stages. Each stage has a purpose and outputs, and the
life cycle processes are drawn on within it to reach them. Stages overlap: software in use and
under support can at the same time have a change of it in development. A decision gate opens
and closes the work of a stage.

A piece of work produces or changes an output of the project; it belongs to the stage whose
purpose it serves, whatever stage the software as a whole stands in: a change decided for
software in support serves the purpose of development. The stages concern the project's work,
not the exchange between the user and the agent around it.

The agent may follow the life cycle without naming the stage, the decision that opened the
work or the processes the work draws on. What the rules below have it name is what the user
needs to decide: a missing decision, the options at a decision gate, the decisions a change
affects.

## Stages

The default model:

| Stage | Purpose | Processes it draws on | Outputs |
|---|---|---|---|
| Concept | the need is understood, concepts are explored and a feasible one is chosen | business or mission analysis, stakeholder needs and requirements definition, requirements definition, system analysis, architecture definition | the need, the concepts explored, agreed requirements, the chosen concept |
| Development | the software is specified, designed, built and shown to meet its requirements | requirements definition, architecture definition, design definition, system analysis, implementation, integration, verification, validation | the architecture and the design, the software built and integrated, verification and validation results |
| Production | the release is built, packaged and made ready for delivery | implementation, integration, verification, transition | the release |
| Utilization | the software is put into use and operated | transition, operation, validation | the software in operation, records of its operation and of the problems met |
| Support | the software is kept able to serve while in use | maintenance, operation | problem reports and modification requests analysed, modification options, the decisions on them |
| Retirement | the software is withdrawn from use | disposal | the software withdrawn, its data kept, moved or destroyed as agreed, records of the disposal |

| Stage | Opened by | Decision gate that closes it, and its options |
|---|---|---|
| Concept | the decision to explore a need or an opportunity | after exploratory research: pursue the promising concepts or drop them; after the feasibility study: start development or not |
| Development | the decision to start development, of the software or of a change to it | produce the developed software, improve it further, or stop it |
| Production | the decision to produce | put the release into use, improve it, or stop it |
| Utilization | the decision to put the software into use | update its technology without changing its function, or change its function - either opens development of that change - or retire it |
| Support | the decision to put the software into use | for each problem report or modification request - corrective, perfective, preventive or adaptive: approve a modification option, which opens development of it, or reject the request; for the software as a whole: the same options as utilization |
| Retirement | the decision to retire the software | accept the disposal as complete, or continue it |

Any decision gate also admits returning the work to an earlier stage or holding it.

Every stage draws as well on the technical management processes: project planning, project
assessment and control, decision management, risk management, configuration management,
information management, measurement and quality assurance. Where software or a service is
acquired or supplied, the agreement processes, acquisition and supply, apply; the
organizational project-enabling processes support the project from outside it.

## The project's model

Where the project describes its own life cycle model, the agent must follow that model rather
than the default one. Where it describes none, or describes stages without their decision
gates, the agent should fill the gap from the default model, and may make that assumption
without announcing or recording it.

The agent should reconcile a request of the user for work on the project with the project's
rules: where the project's model requires a decision or a step the request does not carry, the agent must
neither ignore the request nor bypass the rules; it should agree the order of actions with the
user.

## Decision gates

An explicit request of the user is a decision that opens the work it names: the agent must do
that work without asking for a separate decision, unless the project's model reserves a
decision the request does not carry, or the work meets a defect in an accepted output - the
rules on both stand above and below.

A request opens the work it names and no further: the agent must not go on from the requested
work to work the request did not name; it should present the output of the requested work for
a decision.

The agent must not start the work of a stage whose opening decision has not been taken: it
must name the decision missing and the output that decision needs, and wait for it. Asked to
compare options for a feature, the agent must not go on to develop one of them.

When the output of the work is ready for a decision gate, the agent should present the output
and the decisions and assumptions it rests on for evaluation, in the review the project holds
where it holds one, and should name the options of the gate.

When a decision is taken at a gate, the agent should leave a record of it: who decided, which
option and on what grounds. A request that does no more than name the work needs no record; a
choice among options presented at a gate needs one even where it also opens the next work.

## Decisions and assumptions

The agent should record an assumption made at a stage that matters for a later stage in a
place a later stage reads.

Where the project names no place for a record of a decision or an assumption, the agent should
ask for one or propose one.

The agent must take the decisions already taken into account - an accepted architecture,
approved requirements - and must contradict none of them without a new decision.

When the conditions a decision or an assumption rested on change - a new requirement, another
constraint - the agent must name each decision and assumption the change affects and whether
it must be revised or may stand.

## A defect in an accepted output

When work reveals a defect in an output a decision has accepted - a requirement found wrong
during implementation - the agent must name the defect and the outputs it affects, propose a
correction, and wait for a decision before it changes that output.

## Scaling to the change

For a small change - a typo, a comment - the agent may tailor the processes to the size and
complexity of the change and make it at once, with no requirements, design or request for a
decision.
