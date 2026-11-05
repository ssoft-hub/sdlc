---
name: stakeholder-needs-and-requirements-definition
description: Turns what users and other stakeholders need into agreed stakeholder requirements, traced to whose need each is. Use when a need, a wish or a complaint arrives - "users want ..." - and its stakeholders, priority or agreement are to be settled; when needs conflict or are rejected; when users, scenarios or the context of use are described.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Stakeholder needs and requirements definition

This skill refines `software-life-cycle` for the stakeholder needs and requirements definition
process: the stakeholders of a system and their needs identified, and the needs transformed into
stakeholder requirements. The agent shall carry out its tasks under the organization's policy and
procedures, where set.

| Term | For a need arriving in a request |
|---|---|
| stakeholder requirement | a recorded request, a user story or a section of a specification stating what the system is to provide |
| stakeholder needs and requirements definition strategy | what the project has recorded - the rules of its requirement records, a template |
| enabling systems | the tools and the places holding the requirements, open to the agent |

The agent shall treat an explicit request of the user that names a requirement - "the system
must ..." - as a need. The agent shall record that need with the user as its source. The agent
shall treat such a request as the explicit request for the change to an accepted requirement it
names.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| accepting stakeholder requirements into a baseline, and changing an accepted one | the requirement contradicts an accepted requirement, a constraint or a need of another stakeholder; is unrealizable or unverifiable | Agreement, Basis, Change, Source of a need, Traceability, Baseline; Review of `references/whole-set.md` |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as a requirement's record with its
source. Where a rule of the project names who accepts requirements or changes an accepted one -
a product owner, a change board -, the agent shall take an explicit request as that decision only
where the user is that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the project has recorded no strategy, or a needed tool or service is lacking, costs money or binds the project | `references/preparation.md` | Stakeholders |
| the agent adds or derives what the stakeholder did not state, or writes requirements in a model | `references/elicitation.md` | Elicitation; Requirement |
| the context of use or the life cycle concepts need defining or change, or scenarios or user interaction are defined | `references/concepts.md` | Elicitation |
| a need bears on safety, security, privacy, health or the environment | `references/critical-qualities.md` | Elicitation; Requirement |
| requirements conflict with each other or a constraint, are impractical, unrealizable or break a characteristic, or a party acts against the system | `references/conflicts.md` | Analysis |
| requirements are defined or reviewed whole, or worked to under a contract or a supply agreement | `references/whole-set.md` | Stakeholders; Analysis; Agreement; Basis; Traceability |
| needs carry measures of effectiveness, such as a response time, or technical achievement is assessed | `references/measures.md` | Elicitation; Analysis |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## A need arriving in a request

Outcomes served: stakeholders identified, constraints identified, needs defined, requirements
defined, agreement achieved, traceability established.

The common situation is one need arriving in a request - "I need the export in CSV".

| Step | What the agent does |
|---|---|
| Stakeholders | shall identify and record, with its interest, each individual and class with a legitimate interest in the system - for one need, those it concerns |
| Elicitation | shall elicit the stakeholders' needs, wants, expectations and perceived constraints |
| Interpretations | shall confirm with its owner, before transforming it into a requirement, a need open to interpretations differing in cost, dates or acceptance |
| Source of a need | should name each need's source - a request, the agreement -, the stakeholder's assumptions and the importance given it |
| Justification | shall define, justify and record the needs |
| Basis of a need | should derive the needs from the system's goals and behaviour, in the context of its operational environment and conditions |
| Constraints | shall identify and record the constraints on the system solution, including those inevitably following from existing agreements and management and technical decisions |
| Their sources | should name each one's source: a stakeholder's solution, a decision higher in the system hierarchy such as the platform, mandatory enabling, legacy or interacting systems, resources or personnel, a cost target |
| Requirement | shall define the stakeholder requirements, each leading to a need, consistent with the life cycle concepts, scenarios, interactions, constraints and critical quality characteristics |
| Inferred requirement | shall mark one it inferred - from an implicit need, the domain, a scenario or earlier records - as inferred, with its source |
| Until agreed | shall not present an inferred requirement as a stakeholder requirement before Agreement |
| Record | shall record the requirements in a form fit for their management throughout the life cycle and beyond |
| Validation basis | shall record with them the acceptance criteria derived from them, the basis of validation criteria for the system and its elements, which the system/software requirements definition process refines |
| Analysis | shall analyse the complete set of elicited requirements, identify and prioritize those conflicting, missing, incomplete, ambiguous, inconsistent, incongruous or unverifiable, and record the results |
| Characteristics | should check each requirement and the set as necessary, implementation-independent, unambiguous, consistent, complete, singular, feasible, traceable, verifiable, affordable and bounded |
| Confirmation | shall communicate the analysed requirements to the stakeholders concerned, to confirm that their needs and expectations are captured and expressed correctly |
| Agreement | shall obtain the full agreement of the stakeholders concerned |
| Its content | should confirm in the agreement that the requirements are expressed correctly and comprehensively and understood by their authors |
| Not on their behalf | shall not declare agreement on a stakeholder's behalf |
| Communication record | shall record the communication and the confirmations, agreements and approvals with the requirement, in the place the project keeps it |
| Basis | shall establish the agreed requirements as the project's basis and check them against the needs |
| Change | shall record each change to an accepted requirement with its decision |
| Traceability | shall trace each requirement to its stakeholder, its need and that need's source |
| Baseline | shall maintain the key information items selected for baselines |
