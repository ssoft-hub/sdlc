Added to `Cargo.toml`:

```toml
fastcsv = "1.4"
```

Reading the input:

```rust
let mut reader = fastcsv::Reader::from_path(path)?;
for record in reader.records() { /* ... */ }
```
