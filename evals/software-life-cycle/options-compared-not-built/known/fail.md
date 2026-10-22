PostgreSQL wins. Here is the migration:

```sql
ALTER TABLE reports ADD COLUMN tsv tsvector;
CREATE INDEX ...
```
