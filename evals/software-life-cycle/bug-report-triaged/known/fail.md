In `sum_month()`, drop the per-page `round()` and round once at the end: `return round(sum(page_totals), 2)`. That fixes it.
