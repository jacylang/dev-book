# HIR

Same as Rust (again...), yes, you really just can read about HIR in [Rust docs](https://rustc-dev-guide.rust-lang.org/hir.html) as _Jacy_'s HIR is almost the same, but I'll try to write a much more comprehensive description of HIR.
_Jacy_ has HIR - High-level Intermediate Representation. It is an IR that contains a flattened version of AST, i.e. not in the structure of a tree but a collection of mappings from some identifiers to objects.
For example, you cannot access a child node from the parent node directly, every node that has children only contains a list of identifiers pointing to the children nodes. This is a convenient representation for type checking, etc. because we can walk through all specific items (e.g. all function bodies) to emit some logic on them.

The structure of HIR might seem to be confusing at first sight view, but it is not.
The AST produced by the parser is flattened into the collection of maps, e.g. there's a map of all function bodies, and that's all the executable code we have. If we need to walk through all function bodies, now we don't need to descend into the AST nodes ignoring nodes that not are function bodies.
The thing that differs HIR from AST is that HIR is made for ✨programmers✨ but not just to represent user code, and the main point is that HIR is geared for type check.

## About HIR structure

Being more flattened than AST, HIR is still mostly a tree. By the way, the main point of HIR is "Owners" and items they own, why do we need them? One thing to remember is that HIR should be suitable for type-check and other high-level checks, we likely to avoid going down by some tree instead of actually getting what we want for a specific check, e.g. to type-check all bodies

## Identifiers



## Lowering

Lowering is a process of converting some syntactically different structures to common structures.

E.g. all kinds of loops are converted to a `loop` structure because every loop is considered to "do something while
something". That is, the `for` loop iterates over data until there're some data, same for while and `while let`.

By doing so, we reduce a large amount of AST nodes to some more common structures.

More on lowering in the next chapter...
