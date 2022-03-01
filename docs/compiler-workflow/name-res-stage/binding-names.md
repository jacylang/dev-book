# Binding names

Here I'd like to collect all information about name resolution identifiers. "Do we use `NodeId` of pattern as name id or `NodeId` of identifier inside pattern and why?" and other questions are answered here.

## Definitions

For definitions we have one primary identifier - `DefId`, which is by itself is just an index, i.e. for each new definition we set incremented index and wrap it in `DefId`.

When we define a new item:

1. Add new definition to vector of definitions. Definition (`Def` structure) has all required information: item name (`Ident`), kind of definition (`DefKind`) which can be any item but also enum `Variant`, `const` parameter (in generics), etc. or one very special `ImportAlias` which is defined when user writes `use` declaration (this one makes an alias to an item).
2. Use index of added item to construct `DefId` for this item.
3. Add meta info about definition:
   - Map `NodeId` of **item** to `DefId` we made.
   - Map `DefId` we made to `NodeId` of **item**.
   - Set visibility of item (`Vis`) in the separate map.

> The `NodeId` of a definition is id of item node, e.g. `ast::Struct`, **not** id of its name.

## Local variables

In _Jacy_ local variables do not have names, in `let a = 123`, `a` is a pattern, `IdentPat` pattern.

We resolve locals with ribs stack, this logic is described in [name resolution chapter](./name-resolution).
Locals are defined at the same time they resolved, in `NameResolver`, each `Rib` has `Symbol: NodeId` map, where `Symbol` is name of a variable and `NodeId` is id of `IdentPat` node.
The resolution of local results (if successful) with `Res` of kind `Local` (there're other kinds, e.g. `Def` for definitions).
`Res` we've got is saved in the map `NodeId -> Res`, where `NodeId` is id of the path we resolved.

## Summary

> All names usages in _Jacy_ are `Path`s!

1. `DefId` is just an index of definition and does not relate on `NodeId` of item.
   - But we have `DefId -> NodeId` and `NodeId -> DefId` maps to easily get `DefId` by item `NodeId` and backward.
2. `Res` of local contains `NodeId` of `IdentPat`.
3. Each resolution is a binding of `NodeId` of `Path` to `Res`.
