---
name: risk-management
description: Keeps a project's risks - threats and opportunities - in a risk profile and treats them. Use when work meets a risk - a known vulnerability, a change without rollback, a dependency that may fail, a date at stake; when a request carries a risk above its acceptable level; when the risks of a release, a change or an option are analysed; when the risk strategy or profile is set, reviewed or reported.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Risk management

This skill refines `software-life-cycle` for the risk management process: the project identifies,
analyses, treats and monitors its risks continuously over the life cycle of a product or a service.
The agent shall follow the organization's policy and procedures for risk management, where the
organization has set them.

A risk is the effect of uncertainty on objectives: negative, a threat, or positive, an opportunity.

| Term | For a risk met in the work |
|---|---|
| risk profile | the record of the project's risks and their state: a risk register or another information item the project keeps |
| acceptable level | the threshold above which a risk requires a response |
| risk management strategy, its context | what the project has recorded - a risk management plan, a security policy; the project's goals and constraints as the context |
| stakeholders who decide on risks | those the risk management strategy names to decide on risks; the user, where it names none |
| risk action request | naming, before the action, the risk, its likelihood and consequences, the options and the one recommended, with grounds |
| risk mitigation plan | the actions of a response, in its problem report or the profile entry |
| managing a response as a problem | a problem report, tracked to closure by the means the project handles problems with |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| selecting a response to a risk | - | Estimate; Response options, for the response named only |
| accepting a risk above its acceptable level, carrying out a request that carries one included | the risk, known to the agent, is not named to the user with its likelihood, consequences and the response options | Estimate; Accepted risk |
| setting or changing the acceptable levels and the conditions for accepting a risk | - | Level record |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the risk in the profile. The
agent shall treat a request the user confirms after the risk is named as the acceptance of that
risk, where the user is among the stakeholders who decide on risks.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the risk management strategy or context is set or changed, or the project has recorded none | `references/planning.md` | Identification |
| the risks of a project, a release, a change or an option are analysed on purpose | `references/identification.md` | Identification |
| an opportunity is pursued or met | `references/opportunities.md` | Identification; Response options |
| work touches a recorded risk, a response falls short, or the profile is due to the stakeholders | `references/monitoring.md` | after Effectiveness; Estimate, for a recorded risk |
| the risk management process itself is reviewed, or its lessons collected | `references/process-evaluation.md` | after Tracking |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## A risk met in the work

Outcomes served: risks identified, risks analysed, responses selected, responses implemented, risk
state measured.

The common situation is a risk the work meets - "the library we use has a known vulnerability".

| Step | What the agent does |
|---|---|
| Identification | shall identify a risk it notices in any work, not only when asked, in the categories of the risk management context |
| Profile | shall establish and maintain the risk profile |
| Record | shall record the risk in the profile or, until the project names a place for one, name it to the user |
| Estimate | shall estimate the likelihood and the consequences of each risk identified |
| Basis | should present an estimate resting on no data as an expert evaluation with its basis, on a qualitative scale for instance, never as a bare number |
| Acceptable levels | shall define, where the project has recorded none, the acceptable levels and the conditions for accepting a risk, and present them with the risk for a decision |
| Level record | shall record them once they are decided |
| Comparison | shall compare each risk with its acceptable level - until a level is decided, with the one proposed |
| Priority | shall rank the risks by a risk measure of likelihood and consequences, setting the priority in which they receive resources |
| Profile entry | should record in the profile its context and, per risk, the likelihood, consequences, acceptable level, priority by the stakeholders' criteria, actions required and response status |
| Response options | shall define and record, for each risk above its acceptable level, the recommended response strategies and measures, each alternative with a measurable effectiveness measure |
| Options covered | should cover at least eliminating the risk, reducing its likelihood or mitigating its consequences, and accepting it, with information on the effectiveness of each |
| Risk action request | shall present the recommended alternatives, preventive measures included, to the stakeholders who decide on risks in a risk action request |
| Implementation | shall implement the response the stakeholders who decide on risks selected, bringing the risk to its acceptable level by actions per risk or set of risks, ordered by priority, likelihood and consequences and recorded in the risk mitigation plan |
| Accepted risk | shall handle a risk the stakeholders who decide on risks accepted above its acceptable level as high priority, and monitor it continuously for whether further actions are needed |
| Tracking | shall manage the response selected, preventive measures included, as a problem; its problem reports form the corrective action register |
| Effectiveness | shall analyse and monitor, for each response implemented, the effectiveness measure set at Response options |
| Assessment and control | should manage the response through the project assessment and control process |
