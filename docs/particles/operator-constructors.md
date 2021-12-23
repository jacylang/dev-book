# Operator-Constructors

This feature is mostly syntactic sugar rather than something really helpful, anyway, I want to save it here.
It also requires variadic arguments, thus it cannot be implemented in the first versions.

## The syntax

Operator-constructor is a syntactic feature, i.e. we only affect the parsing stage (but the name resolution stage requires some changes too).

What operator-constructors could solve is to avoid usage of macros to simply create some collection.
In Rust, to easily make a vector you use `vec!` macro, which is expanded to `std::Vec` construction and sequence of `push` calls.
Maybe I've already said it somewhere here -- I like macros but I want to get rid of them as much as possible to not require the user to use them everywhere. Then, how does the user make a vector easily without macros?
Many languages have special syntaxes for sequences, e.g. `@` in Nim, but this `@` is an operator, and as I know it's just overloaded for strings and arrays in Nim. This is not actually what I want as it is array/string to sequence conversion instead of {some collection} constructor.

The syntax is following:

```jc
let a = Vec[1, 2, 3];
```

Which is lowered to something like that

```jc
let a = std::ops::InitList(1, 2, 3);
```
