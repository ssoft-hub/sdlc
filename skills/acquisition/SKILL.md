---
name: acquisition
description: Obtains what the project needs - an off-the-shelf library, tool or service, or work under contract - with its licence, terms and acceptance. Use when a dependency, a tool or a service is added, upgraded or removed; when a licence or terms are accepted; when work is ordered or an agreement is drafted, changed or monitored; when a delivery arrives for acceptance or payment.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Acquisition

This skill refines `software-life-cycle` for the acquisition process: the project, the acquirer,
obtains a product or a service - software, a system element, an infrastructure element, a
knowledge asset, personnel or training - from a supplier, an organization or an individual that
enters into an agreement with it. The agent shall follow the organization's policy and procedures
for acquisition, where set.

An agreement ranges from a written contract to an oral understanding. The agent shall treat
consent to a supplier's terms in correspondence or a recorded request, and the acceptance of a licence
or of terms of service, as an agreement that binds the project.

An off-the-shelf product is one its supplier offers to anyone, paid or free: a software
component, a tool, a service used under terms of service. The agent shall acquire it by this skill, with the terms
mapped as follows.

| Term | For an off-the-shelf product |
|---|---|
| acquisition strategy | what the project has recorded - the acquisition plan, the organization's policy |
| supplier selection criteria | the requirements and the acceptance criteria the project records |
| agreement | its licence and terms of service |
| acceptance strategy, acceptance checks | the step "Off-the-shelf check" below |
| acceptance record | the record of the change that takes the product in, in the place the project keeps it |

The agent shall treat a user's request to add an off-the-shelf product - "add library X" -
as the explicit request for choosing that option, accepting its licence and terms of service, and accepting it
into the project.

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| the agreement and each change to it, a licence or terms of service accepted included | a requirement the product does not meet; an acceptance criterion not passed; a licence or terms that do not allow the project's use; missing support; an open item - a duty of either party that has fallen due and is not met | Off-the-shelf check, Unconfirmed condition, Unchecked condition, Unshown condition, Licence obligations, Meeting them; for a new version, New version and Changed terms of `references/versions.md`; for a negotiated agreement, Content and Further terms of `references/procurement.md`; for a change, its Own need, Supplier's change, Impact, Made, Record and Affected documents |
| accepting the product into the project | a requirement the product does not meet; an acceptance criterion not passed; a licence or terms that do not allow the project's use; missing support; an open item | Integrity, Off-the-shelf check, Unconfirmed condition, Unshown condition, Unmet criterion, Presenting it, Acceptance record, Configuration; under a negotiated agreement, Checks, Nonconformity and Notice of `references/acceptance.md` |
| payment the terms of an off-the-shelf product require | an open item | Payment of `references/procurement.md` |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the acceptance record. Where
the agreement or a rule of the project names who decides an act of this skill - a licence
review, the acquirer's representative -, the agent shall take an explicit request as that decision
only where the user is that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the option is not yet chosen, candidates compete, or a supplier is selected for a negotiated agreement | `references/choosing.md` | "Named option" |
| the project procures under an agreement it negotiates - a contract, an order, a subcontract, personnel or training -, or such an agreement changes | `references/procurement.md` | after "Named option"; a change, at any step |
| a delivery under such an agreement arrives for acceptance | `references/acceptance.md` | instead of "Off-the-shelf check" |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| an accepted product gets a new version or new terms, or leaves the project | `references/versions.md` | "Off-the-shelf check"; a removal, after "Meeting them" |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition
to those of this file.

## Taking a product into the project

Outcomes served: all five (`references/process.md`).

The common situation is an off-the-shelf product added to the project - "add library X".

| Step | What the agent does |
|---|---|
| Need | shall name what is needed and why: the need to acquire, develop or enhance a system, a software product or a service; an explicit request states its own |
| Requirements | shall obtain and record, before candidates are sought or compared, the requirements on the product or the service: business, organizational and user requirements, those on safety, security and other critical properties where they exist, and the related design, testing, standards and conformity assessment procedures; an explicit request states its own |
| Acceptance criteria | shall record the acceptance criteria with the requirements |
| Check | shall check the requirements against the need |
| What is missing | should propose the acquisition strategy, or what the recorded one lacks, and present it with the output of the work for a decision |
| Named option | shall name the risks, the cost and the benefit of the option a request names, instead of comparing options |
| Unconfirmed condition | shall count a condition it can check before an act, but has not confirmed, as unmet |
| Unchecked condition | shall name a condition it can check only at acceptance, and leave it to the acceptance checks |
| Off-the-shelf check | shall ensure, before an off-the-shelf product is taken in, that it meets the requirements and the acceptance criteria, that its documentation is available, that its licence, warranty, usage and ownership rights admit the project's use, and that its support is provided for |
| Unshown condition | shall count a condition it cannot show met at the acceptance checks as unmet |
| Unmet criterion | shall not accept a delivery with an unmet criterion without a decision naming that criterion: an exception under the agreement's procedure or a change to the agreement |
| Presenting it | shall not present a delivery with an unmet criterion as acceptable without a decision naming that criterion |
| Integrity | should keep a delivery apart from the product until its integrity and its source are confirmed, to the extent the project decides |
| Acceptance record | shall record what was accepted - the product and its version -, its source, when, and by what decision |
| Configuration | should place what was accepted under configuration management, for which the project is responsible from acceptance |
| Licence obligations | shall name the conditions of the licence or the terms of service that oblige the project - payment, keeping notices, attribution, disclosure of source code |
| Meeting them | shall meet the conditions of the licence or the terms of service that oblige the project while the product is used or distributed |
