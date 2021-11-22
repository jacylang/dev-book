# Type Ascriptions

This is a far-from-v1 proposal. Don't even think to add it in first alpha-beta versions.
It, as many of other particles, exists as I want to keep all ideas in one place, by looking at all of them we can see the whole picture, thus not having any confusions like "the operator OP is used by feature#1 but also has different meaning in feature#2".

Type ascription is a kind of a hint for type inference algorithm which allows us to write qualification for generically-typed expression inlined.

For example, we have an expression `a.get()` where `get` is `func<T> get()`, the compiler cannot infer the type as it is definitely user-specific, thus we need to qualify it someway. One can think that it is possible by using a variable:

```jc
let x: Type = a.get()

// The type of `x` is qualified
x
```

And this is the right solution, anyway, it looks not pretty.
How would it look like with type ascriptions:

```jc
let x = a.get(): Type
```

To finally sign of on type ascriptions, let's consider a more useful case:

```jc
someMethod({
    let x: Type = a.get()
    x
})
```

Here, in block expression, we need to introduce a variable to qualify the type of result given by `a.get()`. Being straightforward, this syntax looks overloaded.
With type ascriptions it will be:

```jc
someMethod(a.get(): Type)
```

## The operator

Rust has an RFC for this, where symbol `:` is used for type ascriptions.
This solution is not bad, even solid as we use `:` for type annotations.
Anyway, I need to check out if it collides with other purposes, and, as I remember, I've already thought to use `of` as keyword for type ascriptions because `:` had different meaning in expressions.

### References

[Rust proposal](https://rust-lang.github.io/rfcs/0803-type-ascription.html)
