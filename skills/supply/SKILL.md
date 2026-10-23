---
name: supply
description: Provides an acquirer with a product or a service that meets agreed requirements - work for a customer under contract, a release to another team, a package published to anyone - by reviewing the request, responding to it, establishing and carrying out the agreement, delivering and supporting the product, and transferring responsibility for it. Use when a request, an order or a feature request from those the project serves is to be answered, when an agreement or a promise to them is drafted or changed, and when a release is delivered or published to them.
metadata:
  sdlc-refines: software-life-cycle
---

# Supply

This skill refines `software-life-cycle` for the supply process, an agreement process a stage
draws on whenever the project provides a product or a service to an acquirer: an organization
or an individual that enters into an agreement with the project - a contract, a licence or the
terms of a service. An agreement ranges from a signed contract to an oral understanding, so a
promise made in a conversation or in an issue binds the project.

The project is the supplier. The agent shall carry out the tasks of the process and shall
present each act that binds the project - the decision to respond to a request, sending a
response, a promise of a price or a date, the agreement and a change to it, a release and its
delivery, the transfer of responsibility, closure - as a decision, which is taken and recorded
as `software-life-cycle` states.

A product published to anyone - a package, an open release - is supplied the same way: the
acquirer's role is played inside the project by whoever speaks for the users, and a request is
the users' request (an issue, a feature request). The review of such a request covers the
information the project publishes on the product. The agent shall tell the decision to take the
request on or not to the one who raised it; the strategy and the estimate apply only to a
request the project takes on, and the agent shall give a date only where the project commits to
one. The agreement of a published product is its licence and its published terms of support,
carrying only those terms and the licences of the third-party components the product includes.
Price, payment, acceptance by the acquirer and transfer of responsibility do not apply to it.

An explicit request for an act that binds the project stands for the decision on that act, as
`software-life-cycle` states, unless a condition is known to be unmet - a failed criterion, a
date that cannot be met, an act the agreement forbids, an open item. The agent shall check what
it can check, shall present an unmet condition as a decision naming it before the act, and shall
name a condition it cannot check and go ahead with the act; for a release, such a condition is
left to the checks of Release and delivery.

## Purpose

The supply process provides an acquirer with a product or a service that meets agreed
requirements.

## Outcomes

| Name | Outcome | Observable as |
|---|---|---|
| response produced | a response to the acquirer's request is produced | the response sent, or the refusal told to the acquirer |
| agreement established | an agreement is established between the acquirer and the supplier | the agreement approved and confirmed by both parties: a contract, the terms of a licence or a record of what was agreed |
| product provided | a product or a service is provided | the record of delivery of the approved release, with the confirmation of receipt or of publication |
| obligations satisfied | the supplier's obligations under the agreement are satisfied | the record of closure: deliveries accepted, support given as agreed, payment confirmed, no open item left |
| responsibility transferred | responsibility for the product or the service is transferred as the agreement directs | the record of what was transferred, to whom and when |

## Activities and tasks

| Activity | Task | Outcomes |
|---|---|---|
| Prepare for the supply | identify the acquirer and its need | response produced |
| | define the supply strategy, comparing the options for doing the work - in-house, under contract, buying an off-the-shelf product, a combination - by risk | response produced |
| Respond to a request | keep a channel for the acquirer's requests | response produced, obligations satisfied |
| | review the request: its source, the kind of product, each requirement and its feasibility, the one who handles it, the need for a feasibility study | response produced |
| | evaluate the request against the criteria for responding, and decide whether to respond | response produced |
| | estimate the cost, the resources and the delivery date, and name those who will do the work | response produced |
| | prepare a response that meets the request | response produced |
| Establish and maintain the agreement | negotiate an agreement with its acceptance criteria, and have it approved and confirmed | agreement established |
| | identify a change the agreement needs, evaluate its impact, negotiate it and update the agreement | agreement established |
| Carry out the agreement | carry out the work by the requirements and criteria of the agreement | product provided |
| | assess how the agreement is carried out: the progress and quality of each deliverable and the obligations of both parties | product provided, obligations satisfied |
| | make reports available, and deal with other parties, as the agreement defines | obligations satisfied |
| Deliver and support the product or the service | define the content of a release, build it from the baseline, and approve it against its criteria before delivery | product provided |
| | provide the user documentation and the release notes, and state the type, level and duration of support | product provided |
| | set the way of delivery and the packaging by the receiver's needs | product provided |
| | deliver the product with confirmation of receipt | product provided |
| | where the agreement requires it, install the product in the acquirer's environment and support the start of its use | product provided |
| | support the acquirer during acceptance, and resolve the problems found in it | product provided |
| | support the acquirer after delivery as the agreement directs | obligations satisfied |
| | accept and confirm payment or the other agreed action | obligations satisfied |
| | transfer responsibility for the product or the service as the agreement directs | responsibility transferred |
| | close the agreement | obligations satisfied |

## Inputs

| Work product | Outcomes it serves | Source |
|---|---|---|
| the request for supply: a request for proposal, an order, an issue or a feature request | response produced | the acquirer |
| the requirements on the product or the service | response produced, agreement established, product provided | the acquirer, or the stakeholder needs and requirements definition process |
| the organization's policy on responses, agreements and licences, where one is set | response produced, agreement established | the life cycle model management process |
| a request to change the agreement | agreement established | the acquirer, or the project assessment and control process |
| the data, tools and software the acquirer provides | product provided | the acquirer |
| the product built and verified | product provided | the technical processes |
| the baseline a release is built from | product provided | the configuration management process |
| the acceptance criteria | product provided | the acquirer, through the agreement |
| the release criteria | product provided | the quality assurance process |
| the acquirer's acceptance results and problem reports | product provided | the acquirer |
| payment or the other agreed action | obligations satisfied | the acquirer |

## Outputs

| Work product | Outcomes it serves | Receiver |
|---|---|---|
| the supply strategy, with the options compared | response produced | the project planning process |
| the review of the request, with the evaluation for responding | response produced | the decision management process |
| the estimate of cost, resources and delivery date | response produced | the project planning process |
| the response: a proposal, a bid or an answer to an issue | response produced | the acquirer |
| the agreement, and each update of it | agreement established | the acquirer, and the project assessment and control process |
| the assessment of how the agreement is carried out, with the deviations and problems found | product provided, obligations satisfied | the project assessment and control process, and the risk management process |
| the record of a loss of or damage to what the acquirer provided | obligations satisfied | the acquirer |
| the reports the agreement names: reviews, tests, resolved problems | obligations satisfied | the acquirer |
| the release: the product, the user documentation, the release notes and the support terms | product provided | the acquirer |
| the record of approval of a release | product provided | the configuration management process |
| the record of delivery, with the confirmation of receipt or of publication | product provided | the acquirer, and the configuration management process |
| the record of installation, where the agreement requires it | product provided | the acquirer, and the configuration management process |
| the problems found in acceptance and their resolution | product provided | the acquirer |
| the confirmation of payment | obligations satisfied | the acquirer |
| the record of transfer | responsibility transferred | the acquirer or the party the agreement names |
| the record of closure | obligations satisfied | the acquirer, and the portfolio management process |

## Before a response

The agent shall keep a channel for the acquirer's requests, and shall name the acquirer and its
need.

Before the project commits to anything, the agent shall review the request - that its source
is genuine and the kind of product is clear, that each requirement is defined and feasible -
and shall name who handles it; it shall name the need for a feasibility study where a firm
price or date cannot be given. The agent should resolve a requirement that differs from an
earlier one, should confirm an unwritten or unclear requirement with the acquirer, and should
record the results of the review.

The agent shall evaluate the request against named criteria for responding or not, and shall
leave the decision to the user.

For a request the project takes on, the agent shall define the supply strategy, comparing the
options for doing the work by risk; where the user's explicit request names the option, the
agent shall name the risks of that option instead of comparing.

## The response

Before the response, the agent shall estimate the cost, the resources and the delivery date,
and shall name those who will do the work; it may name them by their role.

A response the agent prepares shall answer each requirement of the request, shall give a price
and a date with the assumptions they rest on, and shall name a requirement that cannot be met.
It should cover the regulatory and legal requirements that apply.

## The agreement

An agreement the agent drafts shall carry the requirements, the deliverables and the dates, the
acceptance criteria, the price and the payment terms, the terms of support and operation, the
obligations of both parties, the measures for the identified risks and the licences of the
third-party components the delivery includes; it holds once it is approved and confirmed.

Before the project agrees, the agent should check that the requirements, the delivery
milestones and the acceptance conditions are achievable, that the control procedures are
workable and that the payment terms are acceptable, should settle the warranty, the rights to
intellectual property, and when closure may be started and by whom, and should write down an
oral understanding.

A request beyond the agreement is a request to change the agreement. Before a change is agreed,
the agent shall evaluate its impact on the cost, the dates, the quality, the obligations and the
plans, and shall not treat the change as made until both parties have agreed it and the
agreement records it. For a published product, the agent shall name a change of the licence or
of the published terms of support with its impact on the users, and shall present it as a
decision. The agent should consider a change the agreement needs as the market around the
product changes, and after a change should correct the documents and plans it affects and
should tell the change to those it concerns.

## Carrying out the agreement

The agent shall carry out the work by the requirements and criteria of the agreement, shall
check the progress and quality of each deliverable against it, and shall record each deviation
or problem with the action named for it. It shall check that both parties meet their
obligations, naming what the acquirer owes.

The agent shall deal with other parties as the agreement defines, and shall make the reports
the agreement names - reviews, tests, resolved problems - available to the acquirer. It should
tell the acquirer of a deviation or a risk and its impact, and should receive and consider
feedback and complaints.

The agent should identify the data, tools and software the acquirer provides, check them as
suitable, protect them and use them only as the agreement allows; it should tell the acquirer
of a loss or damage and record it.

## Release and delivery

The agent shall define the content of a release, build it from the baseline and check it
against the acceptance and release criteria before delivery. It shall not deliver a release
with an unmet criterion without a decision naming that criterion; a criterion the agent cannot
show met counts as unmet.

A release shall carry the user documentation and the release notes, and shall name the type,
level and duration of support. The agent shall set the way and channel of delivery - a
registry, a medium, a server - and the packaging by the receiver's needs.

The agent shall deliver with confirmation of receipt; for a published product, the
confirmation is the channel showing the version published. It should ensure the product arrives
unchanged, for example by a checksum or a signature, protected against unauthorised change and
checked for malicious code.

Where the agreement requires it, the agent shall have the product installed and evaluated in
the acquirer's environment and the acquirer supported and trained at the start of use, through
the transition process.

The agent shall support the acquirer during acceptance, and shall record each problem found in
it and resolve it by the procedure the agreement sets.

## Support, transfer and closure

The agent shall give support within the agreed type, level and duration. A request beyond them
is a request to change the agreement; for a published product, it is a request the project
accepts or rejects as a decision, without changing the published terms.

The agent shall confirm to the acquirer the receipt of payment or of the other agreed action.

The agent shall record what is transferred - source code, access, operation - to whom and when,
as the agreement directs, and should name the obligations left with the supplier after the
transfer, such as a warranty period.

The agent shall close the agreement once the deliveries are accepted, the payment is confirmed,
the transfer is done and no open item remains, and shall name any item that keeps it open; it
shall not close an agreement that is a licence while the product is distributed or supported.
