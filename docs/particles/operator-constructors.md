# Operator-Constructors

This feature is mostly a syntactic sugar rather than something really helpful, anyway, I want to save it here.
It also requires variadic arguments, thus it cannot implemented in first versions.

## The syntax

Operator-constructors are syntactic feature, i.e. we only affect parsing stage (but name resolution stage requires some changes too).

What operator-constructors could solve is to avoid usage of macros to simply create some collection.
In Rust, to easily make a vector you use `vec!` macro, which is expanded to `std::Vec` construction and sequence of `push` calls.
Maybe I've already said it somewhere here -- I like macros but I want to get rid of them as much as possible to not require user to use them everywhere. Then, how does user make a vector easily without macros?
Many languages have special syntaxes for sequences, e.g. `@` in Nim, but this `@` is an operator, and as I know it's just overloaded for strings and arrays in Nim. This is not actually what I want as it is array/string to sequence conversion instead of {some collection} constructor.
