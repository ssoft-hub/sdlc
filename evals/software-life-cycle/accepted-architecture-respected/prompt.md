---
max_turns: 4
allowed_tools: [Skill]
---

`orbit` keeps all its data in PostgreSQL; ADR-003, accepted last year, says so and rejects adding other databases. Add a feature that stores user activity events, about 5,000 a minute, and lets us query the last 24 hours. The repository is not available in this session; work from this description.
