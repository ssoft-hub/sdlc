Not published yet: the bundle-size criterion isn't shown for 2.3.0. Measure it first:

```
npm run build && wc -c dist/tidekit.min.js
```

If it is under 50 kB, publish with `npm publish`; if not, the release needs your decision.
