---
name: information-management
description: Keeps a project's information - documents, records, wiki pages, issues, changelogs - approved, current, available to its readers and disposed of when unneeded. Use when a document, README, changelog or wiki page is written, changed, approved, published or deleted; when a change makes a document out of date; when credentials or personal data could enter a document; when records are archived.
metadata:
  sdlc-refines: software-life-cycle
  sdlc-level: process
---

# Information management

This skill refines `software-life-cycle` for the information management process: the project
generates, obtains, transforms, keeps, distributes and disposes of information so that the
designated stakeholders receive it valid, complete and current, during the life cycle and after it.
The agent shall follow the organization's policy and procedures for information management, where
the organization has set them.

An information item is a separately identifiable body of information kept for people: a document,
a record, a wiki page, a problem report, a changelog. What the agent tells the user
becomes one only once placed where the project keeps information.

| Term | For an item written or changed in the work |
|---|---|
| information management strategy | what the project has recorded - which items it keeps, where, in what form, who approves and reads them, and for how long, such as in its rules for contributors |
| documentation standards | the project's templates, style guide and file formats |
| designated stakeholders | the receivers the strategy names, such as the readers of the place keeping the item |
| release of a document | the point from which its designated stakeholders read it as in force: its entry into the baseline they read, or its publication |

## Acts that bind the project

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| releasing a document whose approval the strategy reserves for a role | the document has not passed the review or approval that the strategy requires; the source of the source data or the right to use them is not confirmed; a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Source data; Examination; Approval; Own document; Approval record; Distribution record of `references/distribution.md` |

The agent shall not carry out an act of the table before the decision that opens it
(`software-life-cycle`). The agent shall treat that decision as missing where a condition of the
second column is known to hold and the request does not name it. The agent shall not omit, on an
explicit request, a record a task of this skill requires, such as the approval record. Where the
strategy names who approves a document - a maintainer, a reviewer, an owner -, the agent shall take
an explicit request as that approval only where the user is that party.

## Where the other situations stand

| Situation | File | Enters at |
|---|---|---|
| the strategy or the documentation plan is set or revised, or a new kind of item is introduced | `references/planning.md` | Development |
| information leaves the place or the circle of access the project keeps it in - a publication beyond the designated receivers, official documentation, restricted information disclosed, changed access rights | `references/distribution.md` | Development; Availability |
| stored information is reviewed, backed up, migrated, archived, made obsolete or disposed of - a document superseded or deleted, a record rewritten | `references/storage.md` | Out-of-date items; Storage |
| the process is assessed or reported on | `references/process.md` | none: the file is consulted |
| the source of an input or the receiver of an output is named | `references/work-products.md` | any step |

The agent shall apply the rules and the acts of a file wherever its situation holds, in addition to
those of this file.

## Writing or changing an information item

Outcomes served: information handled, status recorded, information available.

The common situation is one information item written or changed in the work - "update the README".

| Step | What the agent does |
|---|---|
| Out-of-date items | shall name each item its work makes out of date, such as a document describing changed code |
| Their update | shall update such an item in the same work where the project's rules assign the update to the change, and present it for a decision otherwise |
| Development | shall obtain, develop or transform and use the items the strategy and any documentation plan define |
| Documents | shall develop each document when a process needs it, by the documentation standards: form, format, content, numbering, figures and tables, markings of rights and secrecy |
| Preparation | should gather data from their sources, prepare, illustrate or transform them for the stakeholders, and agree them |
| Means | may generate or gather information in any form, on any medium, with automated documentation tools |
| Source data | shall confirm the source of a document's source data and the right to use them, such as the licence of a borrowed text or image |
| Facts | should rest a statement entered as a fact on a named source or the project's artifacts |
| Unchecked statements | should mark a statement it has not checked as unchecked |
| Marking | should mark information with a restriction or an assumption as such |
| Restricted information | should not carry information with a restriction - credentials, personal data, information proprietary under an agreement - into an item with a wider circle of access |
| Controlled change | shall change a document under configuration management only through that process |
| Product in maintenance | shall change the documentation of a product in maintenance by the tasks of maintenance |
| Baseline documents | should change and distribute through configuration management a document of the product's baseline or one whose control matters |
| Examination | shall examine and edit a prepared document for format, technical content and style by the documentation standards |
| Verification and validation | should take into account the results of verifying and validating a document with the stakeholders |
| Approval | shall have the adequacy of a document confirmed before its release by the role the strategy names |
| Own document | shall not approve its own document |
| Approval record | shall record the approval with the version approved and the role that gave it |
| Status | shall record the status of each item it writes or changes |
| Status content | should name in it the version, the date of release or validity, the distribution records and the security classification, as the version history or a document's header records them |
| Revisions | should identify the changes and the revision status of a document |
| Storage | shall maintain the items and the records of their storage by the requirements of integrity, security and privacy |
| Keeping | shall keep documents as the strategy sets |
| Availability | shall make the item available to the designated and authorized stakeholders in the way the strategy sets |
