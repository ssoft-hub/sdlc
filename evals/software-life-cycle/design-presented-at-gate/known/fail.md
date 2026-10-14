Here is `retry.go`:

```go
func (r *Retrier) Next(err error) time.Duration {
    r.attempt++
    return r.base << r.attempt
}
```
