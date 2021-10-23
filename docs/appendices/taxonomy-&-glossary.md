---
sidebar_position: 40
---

# Taxonomy and glossary

## Permissions

### Mutability

**Mutable** - Allows read + write
**Immutable** - Allows only read, disallows write
**Opaque** - Disallows both read and write

> Don't confuse Opaque permission with Rust's opaque types (aka `impl Trait`)

### Aliasing

**Linear** - Disallows aliases
**Locally sharable** - Allows aliases in single-thread
**Globally sharable** - Allows aliases shared between threads

### Combinations

> Some combinations are merged and some deleted

| Mutability | Aliasing | Description |
|:----------:|:--------:|:-----------:|
| Mutable/Immutable | Linear | [#1](#mut-imm-lin) |
| Mutable | Locally sharable | [#2](#mut-loc) |
| Mutable | Globally sharable | [#3](#mut-glob) |
| Immutable | Locally/Globally sharable | [#4](#mut-loc-glob) |
| Opaque | N/A | [#5](#opaque) |

### Mutable/Immutable + Linear

This is the foundation of Rust -- move semantics.
Example:

```jc
let mut a = MyStruct {field: 123};
let b = a; // `a` is moved to `b`
let mut c = b; // `b` is moved to `c`
```

Linear type is orthogonal to aliasing as it cannot be aliased at all -- it is always moved.
Linear types allow moving from immutable context to mutable one.

> Actually, it is important to note, that these are not the actual "Linear" types, more likely to say that these are "Affine" types as we don't require user to use value (except linter warnings)
> Conclusion: **APPLIED**

### Mutable + Locally sharable

Example (pseudo Pony-like code):

```jc
let mut a = 123;
let mut b = mut ref a;
let mut c = b; // `b` is not moved to `c`, `c` re-borrows `a`

// `b` cannot be sent to another thread and can only be used in single one
```

The problem of multiple mutable aliases is that they bring possibility to make a mistake if some code is running concurrently, also, it would be hard (and maybe impossible) to manage such aliases without GC, thus we refuse this concept.

> Conclusion: **DENIED**

### Mutable + Globally sharable

Raw usage is **UNSAFE** as it needs lock functionality.

The safe implementation is commonly known as Mutex.

> Conclusion: **DENIED** (as first class item without a wrapper)

### Immutable + Locally/Globally sharable

Immutable aliases are safe to share globally, obviously, checking that there're no mutable aliases to them.
These are under the Rust borrowing rules.

> Conclusion: **APPLIED**

### Opaque

Neither able to read or write to alias. Used for function pointers and other "externally-created" data.

Dividing opaque permission by aliasing is a nonsense as far as it just cannot be read or written to.

- Pony calls this `iso`
- Cone calls this `opaq`
- Rust does not have this ([here is an issue](https://github.com/rust-lang/rfcs/blob/master/text/1861-extern-types.md))

> Conclusion: **?**

### Borrowed references

Borrowed references obey Rust borrow checker rules:

- There can only exist one mutable or any count of immutable borrows
