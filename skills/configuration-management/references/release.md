# Release control

The agent shall apply to a release the rules of `references/audit.md` for the configuration
evaluation the strategy or the need of `references/planning.md` sets for that release, which may be
none. The agent shall apply to a release the rules of
`references/status-accounting.md` for the status report that compares it with the earlier releases.

## Acts of this situation

| Act | An explicit request does not decide it while | Tasks still due on an explicit request |
|---|---|---|
| releasing a configuration item - a release, a published version, the identifier that names it, a modification released into use - and delivering it | a release criterion is not met; an audit has found a discrepancy; an identifier that names a release takes the conditions of the release; a condition that can be checked before the act but is not confirmed counts as unmet; a condition that can be checked only at acceptance is named and left to the acceptance checks | Approval; Approval record; Delivery record; Master copies |

Publishing a product to the public is also an act of the supply process, whose publisher is
the supplier.

## Release control

Outcomes served: releases approved.

| Subject | What the agent does |
|---|---|
| Approval | shall have each release and delivery approved and formally managed: the release content defined from the baseline and the release criteria checked; a release whose criteria are not checked is named, not approved |
| Approval record | shall record the approval of each release, with the release criteria checked, in the product release approval record |
| Changes in a release | should handle the changes that go into a release as the step "Closing a change" of `SKILL.md` sets |
| Tracking | shall track and manage the releases and the deliveries |
| Delivery record | shall record each delivery - what was delivered, to whom and when - in the delivery record |
| Master copies | shall keep master copies of the code and the documentation for the whole life of the product |
| Critical functions | shall handle, store, pack and deliver the code and the documentation of the functions critical to safety or security according to the policy of the organizations taking part |
| Every element | should maintain master copies of all system elements for the whole life of the system, and handle, store, pack and deliver the elements according to the policy of the organizations involved |

## Configuration change management

Outcomes served: changes managed.

The agent shall manage and audit all access to the controlled software items that perform functions
critical to safety or security.
