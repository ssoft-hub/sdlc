---
name: supply
description: Provides what the project makes to whoever obtains it - contract work, a subcontracted part, a package or library it publishes. Use when a release is prepared, checked, delivered or published; when a customer's request, a tender or a feature request is answered; when the project promises a price or a date, or changes its contract, licence or support terms; when payment, handover or closure is due.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Supply

This skill refines `software-life-cycle` for the supply process: the project, the supplier,
provides a product or a service to an acquirer - an organization or an individual that enters into
an agreement with the project to obtain it. The agent shall carry out its tasks under the
organization's policy and procedures for supply, where set.

An agreement ranges from a written contract to an oral understanding. The agent shall treat a
promise the project makes in correspondence or in a recorded request as an agreement that binds the project.

A published product is one the project publishes for anyone: a software component, an open
release. The agent shall supply it by this skill as well, with the terms mapped as follows.

| Term of the process | For a published product |
|---|---|
| acquirer | whoever speaks for the users of the product |
| request | their request, as the project records it: a feature request, a problem report |
| response | the decision on the request, told to the one who raised it |
| supply strategy | what the project has recorded - the organization's policy, the business goals, the project's plans |
| agreement | its licence and its published terms of support |
| delivery by the agreed delivery terms | its publication through its channel: a public distribution place, a release page |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| a release and its delivery to its acquirer, publication included | a criterion not passed; a date that cannot be met; an action the agreement forbids; an open item - a duty of either party that has fallen due and is not met; the right to use a third-party component the release includes is not confirmed; what can be checked is checked; a release criterion whose fulfilment cannot be shown counts as unmet; a condition that can be checked before the act but is not confirmed counts as unmet, and the act waits; a condition that can be checked only at acceptance is named and left to the acceptance checks | Baseline, Documentation, Channel, Check, Unshown criterion, Delivery, Delivery record, Publication, Integrity |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the delivery record. Where the
agreement or a rule of the project names who decides an act of this skill - a maintainer
who releases, a person authorized to sign -, the agent shall take an explicit request as that
decision only where the user is that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| a request, such as a tender, is to be answered, a price or a date promised, or the supply strategy set or changed | `references/responding.md` | before "Content" |
| an agreement is established or changed, a request goes beyond a negotiated agreement, or a published product's licence or support terms change | `references/agreement.md` | before "Content"; a change, at any step |
| work under a negotiated agreement is under way, or a release goes to such an acquirer for installation and acceptance | `references/carrying-out.md` | before "Content"; installation and acceptance, after "Delivery" |
| the delivered product is supported, payment or transfer is due, the agreement closes, or a published product's distribution or support ends | `references/support-and-closure.md` | after "Resolution" |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition
to those of this file.

## Delivering a release

Outcomes served: product provided (`references/process.md`).

The common situation is a new release of the product delivered to its acquirer or published -
"release 2.4".

| Step | What the agent does |
|---|---|
| Content | shall define the release content by the agreement or by the product release strategy |
| Composition | should compose the release of what the agreement covers: the software and hardware products of a system, a software product alone, or a service, and programming tools where the agreement states them |
| Baseline | shall build the release from the baseline |
| Documentation | shall include in the release the user documentation, the release notes and the configuration status report: the items and versions it is built from |
| Support terms | shall define the type, the level and the duration of support for the release and communicate them |
| Channel | shall define the delivery mechanism and channel - a public distribution place, a medium, a server - by the needs of the receiver and of the end user |
| Packaging | shall prepare the packaging of the release for its delivery channel and write the delivery instructions for the receiver |
| Parts | should assemble each part complete, where the product is delivered in parts |
| Unconfirmed condition | shall count a condition of a table of acts it can check before the act, but has not confirmed, as unmet |
| Unchecked condition | shall name a condition it can check only at acceptance, such as a contribution of the acquirer not yet assigned, and leave it to the acceptance checks |
| Check | shall check the release, its documentation and packaging included, against the acceptance and release criteria, and the licences of the third-party components it includes against the record of meeting the licence conditions, before delivery |
| Approval record | shall record the result, with the criteria checked, in the product release approval record, in the place the project keeps it, as the input of the release the configuration management process approves |
| Unshown criterion | shall count a criterion whose fulfilment it cannot show at "Check" as unmet |
| Unmet criterion | shall not deliver a release with an unmet criterion without a decision naming the criterion |
| Delivery | shall deliver by the agreed delivery terms |
| Delivery record | shall record the delivery, with the confirmation of receipt, in the delivery record, such as the release page |
| Publication | shall confirm a publication by the version visible in its channel, in place of a confirmation of receipt |
| Integrity | should keep the product unchanged on its way to the acquirer: protected against unauthorized change, such as by a checksum or a signature, and checked for malicious code |
| Problems | shall record each problem found during delivery, publication or acceptance and communicate it to those responsible for resolving it |
| Resolution | shall resolve each problem found during delivery, publication or acceptance by the procedure the agreement sets |
