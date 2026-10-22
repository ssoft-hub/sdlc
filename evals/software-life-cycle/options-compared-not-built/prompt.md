---
max_turns: 4
allowed_tools: [Skill]
---

For `atlas`, our internal analytics service, we need full-text search over reports. Compare the options - PostgreSQL full-text search, OpenSearch, an embedded Tantivy index - for our case: about 2 million reports, 30 queries a minute, a team of three. The repository is not available in this session; work from this description.
