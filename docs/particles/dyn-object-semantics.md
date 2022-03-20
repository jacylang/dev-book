# Dynamic object semantics

I just came up with an idea which needs much generalization and research, possibly it is about models in type system or even dependent types.

Example:
```rust
struct Struct {
    field: i32,
}

func main {
    let mut s = Struct {field: 123};
    freeze s;
    s = Struct {field: 456}; // Error
}
```

The kind of generalization we need is not to add a new keyword for each case like that but create common logic to express things like that.
