# Optional Chaining and Try operator

I want to have them all: optional-chaining, unwrap and try operators.
**Rust** includes try operator `?` which is transformed into construction with `return` on "fail" case, though it is possible to use `and_then` as alternative to JS/C# `?.` operator (optional chaining).
The other thing is that _Jacy_ does not have same syntax for macros as **Rust** because `!` is reserved as postfix "unwrap" operator, thus expression like `foo!(...)` is `std::ops::Unwrap(foo)(...)` but not `foo!(...)` macro call.
By the way, it is possible to both use macros syntax with `!` and have `!` as postfix operator -- store macros in the values namespace (i.e. name `foo!` will collide with e.g. function `foo`), but I don't like this solution.

The other problem is that if we have `?` as optional chaining, how do we use "try" operator? (`?` in **Rust**).

## Initials

I'd like to describe all the possible operators/ways to implement I see.

| Operator | Possible usage |
| -------- | -------------- |
| `?` operator | Optional chaining / Try operator |
| `?.` distinct operator (`.` is included in `?.`) |  |
| `!` operator |  |
| `&.` operator from Ruby (optional chaining, aka safe navigation) |  |
| `??` | I 
