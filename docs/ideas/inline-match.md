---
---

# Inline match

This is an idea of extending `match` expression with the most tiny syntax.
The syntax is following:

```jc
let subject = Some(123);
let a =
    | Some(val) => /* ... */,
    | None => /* ... */;
```

This idea has many problems, two main are:

1. Does not fit with Ruby-like closures (if we'll have this syntax as Rust does)
2. The comma separator is required, otherwise there's an ambiguity with `|` "logic or operator", otherwise syntax is line-feed dependent, I don't like it. So if some would like to write the whole inline-match literally inlined, it would look like

   ```jc
   let a = | Some(val) => /* ... */, | None => /* ... */;
   ```

   UGLY!
