---
name: acquisition
description: Obtains a product or a service from a supplier in accordance with the acquirer's requirements - an off-the-shelf library or tool, free or paid, a hosted service, work done under contract - by preparing the request, selecting the supplier, establishing and monitoring the agreement and accepting what is delivered. Use when a library, a tool or a service is to be added to the project or chosen among candidates, when an agreement with a supplier is drafted or changed, and when a delivery arrives for acceptance.
metadata:
  sdlc-refines: software-life-cycle
---

# Acquisition

This skill refines `software-life-cycle` for the acquisition process, an agreement process a
stage draws on whenever a product or a service comes from a supplier: an organization or an
individual outside the project that enters into an agreement with it - a contract, a licence
or the terms of a service. An off-the-shelf product, paid or free, is acquired the same way: its
request for supply is the requirements and criteria written down, and its agreement is its
licence.

The project is the acquirer. The agent shall carry out the tasks of the process and shall
present each act that binds the project - sending a request for supply, the choice of an option
or a supplier, approving requirements a supplier developed, the agreement and a change to it,
acceptance, payment, closure - as a decision, which is taken and recorded as
`software-life-cycle` states.

## Purpose

The acquisition process obtains a product or a service in accordance with the acquirer's
requirements.

## Outcomes

| Name | Outcome | Observable as |
|---|---|---|
| request prepared | a request for supply is prepared | the request, carrying the requirements and the criteria for selection and acceptance |
| suppliers selected | one or more suppliers are selected | the evaluation of the candidates and the decision naming the supplier |
| agreement established | an agreement is established between the acquirer and the supplier | the agreement accepted by both parties: a contract, the terms of a licence or a record of what was agreed |
| product accepted | a product or a service complying with the agreement is accepted | the record of acceptance, naming the version and the source accepted |
| obligations satisfied | the acquirer's obligations under the agreement are satisfied | the record of closure: payment or the other agreed action done, licence conditions met, open items settled |

## Activities and tasks

| Activity | Task | Outcomes |
|---|---|---|
| Prepare for the acquisition | obtain the requirements on the product or the service and define their acceptance criteria | request prepared |
| | review the requirements against the needs | request prepared |
| | compare the options for meeting them: an off-the-shelf product, development within the project, development under contract, a combination, an extension of a product already in use | request prepared |
| | define the acquisition strategy and the criteria for selecting a supplier, with the way each is measured | request prepared, suppliers selected |
| | prepare the request for supply | request prepared |
| Advertise the acquisition and select the supplier | communicate the request to the potential suppliers | suppliers selected |
| | evaluate each candidate against the selection criteria and select one or more | suppliers selected |
| Establish and maintain the agreement | develop the agreement, with its acceptance criteria | agreement established |
| | identify a change the agreement needs, evaluate its impact, negotiate it and update the agreement | agreement established |
| Monitor the agreement | keep communication with the supplier and exchange information on progress and risks | product accepted, obligations satisfied |
| | assess how the agreement is carried out | product accepted, obligations satisfied |
| | provide the supplier with the data it needs and resolve issues in time | obligations satisfied |
| Accept the product or the service | confirm that what is delivered complies with the agreement before it is used | product accepted |
| | resolve each nonconformity by the procedure the agreement sets | product accepted |
| | accept it from the supplier, as the agreement directs | product accepted |
| | provide payment or the other agreed action, meet the licence conditions, and close the agreement | obligations satisfied |

## Inputs

| Work product | Outcomes it serves | Source |
|---|---|---|
| the stakeholders' needs and requirements | request prepared | the stakeholder needs and requirements definition process |
| the requirements on the product or the service | request prepared, product accepted | the requirements definition process |
| the policy on suppliers and licences, where one is set | suppliers selected, agreement established | the life cycle model management process |
| the decision on the acquisition option, and on the supplier | request prepared, suppliers selected | the decision management process |
| a supplier's response to the request: a proposal, or the documentation, the licence and the support terms of an off-the-shelf product | suppliers selected | the supplier |
| a record of the supplier's progress | product accepted, obligations satisfied | the supplier |
| a request to change the agreement | agreement established | the supplier, or the project assessment and control process |
| the product or the service delivered | product accepted | the supplier |

## Outputs

| Work product | Outcomes it serves | Receiver |
|---|---|---|
| the comparison of acquisition options | request prepared | the decision management process |
| the acquisition strategy, with the selection criteria | request prepared, suppliers selected | the project planning process |
| the request for supply | request prepared | the potential suppliers |
| the evaluation of the candidates | suppliers selected | the decision management process |
| the agreement, and each update of it | agreement established | the supplier, and the project assessment and control process |
| the assessment of the supplier's progress, with the deviations and risks found | product accepted, obligations satisfied | the project assessment and control process, and the risk management process |
| the data and the open issues sent to the supplier | obligations satisfied | the supplier |
| the nonconformities found, each by the term it breaks | product accepted | the supplier |
| the record of acceptance, with the version and the source | product accepted | the configuration management process, which takes the accepted product under control |
| the record of closure | obligations satisfied | the supplier, and the portfolio management process |

## Before a supplier is sought

Before the agent seeks or compares candidates, it shall write down the requirements on the
product or the service, their acceptance criteria and the criteria the candidates will be
evaluated against, with the way each is measured. It shall check the requirements against the
needs, and for a reading a supplier could take otherwise.

The agent shall compare the acquisition options by their risk, cost and benefit, unless the
option is named in an explicit request.

## Request and selection

A request for supply the agent prepares shall carry the requirements and the criteria for
selection and acceptance, and should carry the scope, the instructions to those responding, the
terms and conditions, and the technical constraints such as the target environment.

The agent shall evaluate each candidate against the selection criteria, and should state the
grounds for the one it recommends and for each one it does not.

Before an off-the-shelf product is taken into the project, the agent shall ensure that it meets
the requirements, that its documentation is available, that its licence, warranty and rights of
use and ownership allow the project's use of it, and that its support is provided for. The
requirements of an explicit request are those it states. An explicit request naming the product
stands for the decision to add it, as `software-life-cycle` states, unless a condition is known
to be unmet: the agent shall present such a condition as a decision naming it and shall not add
the product before that decision, and shall name a condition it cannot check from what it has
and leave it to the checks of Acceptance and closure.

## The agreement

An agreement the agent drafts shall carry the requirements on the product or the service, the
cost and the dates, the acceptance criteria and the licences of the off-the-shelf products the
delivery reuses, and should carry the conditions of verification and validation, the procedure
for changes and for nonconformities, and the rights to the data and the intellectual property it
concerns.

Before a change to the agreement is made, the agent shall evaluate its impact on the cost, the
dates, the quality and the plans of the project, and shall not treat the change as made until
both parties have agreed it and the agreement records it.

## Monitoring

The agent shall keep communication with the supplier, exchanging information on progress and
risks, shall assess the supplier's progress against the agreed requirements, the quality, the
cost and the dates, and shall name each deviation and risk it finds.

The agent shall name what the acquirer owes the supplier and each open issue, to whom and by
when.

## Acceptance and closure

The agent should keep what is delivered apart from the product until its integrity and its
source are confirmed; the project may set the extent of that check.

The agent shall check what is delivered against each acceptance criterion - of the agreement,
or for an off-the-shelf product of its request - before it is used or built into the product.
It shall name each nonconformity by the term it breaks, and shall resolve it by the
procedure the agreement sets.

The agent shall not accept a delivery with an unmet acceptance criterion, nor present it as
acceptable, without a decision naming that criterion. Once a delivery is accepted, the agent
should record its version and its source, and shall tell the supplier of the acceptance where
the supplier expects it. A new version of an accepted product is a delivery, checked the same
way; where its licence or its terms of service change, the agent shall check them as for a
product first taken in.

Where a licence of an acquired product places conditions on the project - notices to keep,
attribution, disclosure of source - the agent shall name them and meet them for as long as the
product is used or distributed.

The agent shall close the agreement once payment or the other agreed action is done and no open
item remains, and shall name any item that keeps it open; it shall not close an agreement that
is a licence before the product leaves the project.
