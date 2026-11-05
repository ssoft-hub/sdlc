---
name: requirements-definition
description: Produces measurable requirements for the software and its parts, with rationale and acceptance criteria. Use when a stated need - a feature request, "the system must ..." - becomes a spec, a technical or interface requirement, or acceptance criteria; when a spec is checked, changed or traced; when a requirement names an implementation.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Requirements definition

This skill refines `software-life-cycle` for the system/software requirements definition process:
from the stakeholders' view of a capability to measurable requirements for the system and its
software elements. The agent shall carry out its tasks under the organization's policy and
procedures, where set.

| Term | For one requirement of a feature |
|---|---|
| system | the software product; its requirements are the system requirements |
| requirements specification | the record of the requirements - a document, a set of recorded requests, a file -, the system requirements basis |
| system requirements definition strategy | what the project has recorded - the form and the place of requirements |

The agent shall treat an explicit request that names a requirement or a change to it as the
explicit request for that requirement or that change. Such a request first states a stakeholder
need, which the stakeholder needs and requirements definition process records with the user as its
source and transforms into the stakeholder requirement the new requirement traces to.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| baselining requirements, their agreement included, and approving or rejecting a change or a new requirement | the requirement contradicts an accepted stakeholder requirement, a system requirement, a constraint or the accepted architecture; is not traceable to any stakeholder requirement; is unrealizable or unverifiable | Change, Change record, Agreement, Not on their behalf, Baseline, Communication |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the change record. Where a rule
of the project names who accepts requirements or approves a change - a change board, a product
owner -, the agent shall take an explicit request as that decision only where the user is that
party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the project has recorded no strategy, or a needed tool or service is lacking, costs money or binds the project | `references/preparation.md` | Change |
| a constraint applies, or a requirement names an implementation or yields derived requirements | `references/constraints.md` | Requirement; No implementation |
| a boundary or an interface changes, a requirement touches the users' tasks or other systems, or functions are modelled | `references/boundary.md` | Function; Analysis |
| a requirement bears on a risk, criticality or a critical quality, such as security | `references/critical-qualities.md` | Function; Requirement |
| the software product is part of a larger system, or requirements go to its elements | `references/software-elements.md` | Requirement; Analysis |
| a requirement breaks a characteristic, or a conflict, a deficiency or a bottleneck is found | `references/problems.md` | Analysis; Feedback; Agreement |
| feasibility, affordability or balance is in question, or alternative solutions are weighed | `references/solutions.md` | Analysis |
| requirements carry measures of effectiveness, or technical achievement is assessed | `references/measures.md` | Analysis |
| a whole set of requirements is specified, baselined, configured, traced or distributed, or under an agreement | `references/whole-set.md` | Requirement; Baseline; Traceability |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## One requirement of a feature

Outcomes served: system described, requirements defined, requirements analysed, traceability
established.

The common situation is one requirement of a feature written or changed with its acceptance
criteria - "the export also offers CSV".

| Step | What the agent does |
|---|---|
| Change | shall evaluate first the impact of the change or new requirement on cost, dates, risks and technical consequences; for software requirements, jointly with the user or the acquirer |
| Its decision | shall have it approved or rejected before it enters the specification |
| Change record | shall record it with its evaluation and decision |
| Function | shall define from the stakeholder requirements each function the system is to perform - for one requirement, those it concerns |
| How well | should define for each function how well the system with its operators performs it, the conditions under which it can perform it, performs it nominally and stops, and the enabling functions it needs |
| Basis | shall record the functions and capabilities in the system requirements basis |
| Requirement | shall define the requirements with their rationale and record them in the specification |
| No implementation | shall keep a requirement from dictating a specific implementation, as far as the constraints allow |
| Acceptance criteria | shall define from the requirements the acceptance criteria for testing the software product, whose tests show them met, refining those the stakeholder needs and requirements definition process derived |
| Analysis | shall analyse the complete set: prioritize, check correctness, completeness, consistency, feasibility and testability, and identify the system elements needed |
| Evaluation | shall evaluate the requirements for traceability to and consistency with the acquisition needs, testability, feasibility of architectural design, operation and maintenance, and record the results |
| Characteristics | should check each requirement and the set as necessary, implementation-independent, unambiguous, consistent, complete, singular, feasible, traceable, verifiable, affordable and bounded |
| Verification and validation | should apply verification and validation in the analysis |
| Feedback | shall feed back the analysed requirements to the stakeholders concerned for examination |
| Its purpose | should confirm by it that they are captured and expressed correctly, a necessary and sufficient response to the stakeholder requirements and input to architecture and design |
| Agreement | shall obtain the detailed agreement of the stakeholders concerned on the system requirements |
| Its content | should confirm in it that they are expressed correctly and feasible for their builders, and that resolving conflicts has not distorted the stakeholders' intentions |
| Not on their behalf | shall not declare agreement on a stakeholder's behalf |
| Baseline | shall prioritize, accept and baseline the requirements that passed evaluation and review |
| Communication | shall communicate the baselined requirements to all parties involved |
| Communication record | shall record each feedback and communication with the answers, with the requirement, in the place the project keeps it |
| Traceability | shall keep the system requirements consistent with and traced to the stakeholder requirements baseline, and software requirements traced to system requirements |
