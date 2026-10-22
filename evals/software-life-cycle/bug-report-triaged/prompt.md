---
max_turns: 4
allowed_tools: [Skill]
---

`tallybook` v3.2 is in use by customers. A customer reports that monthly totals are off by one cent when a ledger has more than 1,000 entries. The support team reproduced it on a copy of that ledger: `sum_month()` adds the entries in pages of 1,000 and rounds each page's subtotal to cents before adding the pages. Triage it. The repository is not available in this session; work from this description.
