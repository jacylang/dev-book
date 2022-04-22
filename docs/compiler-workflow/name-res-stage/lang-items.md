# Language Items

Language item is a kind of item that isn't declared as user-defined but defined inside the compiler.
Language items have these strict properties:
- Language item must be defined only ones, i.e. if user tries to define its own language item there will be an error
- All language items are known and aren't dynamically addable without compiler updates.


Lang items collecting process is pretty simple -- we visit the whole syntax tree looking for items with attribute `@lang("X")` where `X` is a unique name of the item, create `DefId`s for all of them and storing it in the `LangItems` map.

Let's imagine we are in absolutely clean context: no `std` and nothing is predefined:
```jc
@lang("i32")
impl i32 {
    
}

func main {
    let a = 123;
}
```

Here, `@lang("i32")` **defines** the language item `i32`, i.e. `DefId` for `i32` is created and further we associate it with all uses of `i32` type such as in `let a = 123;`.


### Self-FAQ

#### Why defining lang-items only when we see them?

It might be confusing that we need some code to use lang-item, but I have an explanation 😸.
Some language items are defined in `std`, some in `core`. The `std` or the STandarD library is a collection of items (`impl`s, `trait`s, etc.) so useful so we add it to prelude (code prepended by default). But `core` is much more basic thing, you cannot write anything without `core` or without rewriting `core` by yourself -- primitive types, operators, etc. are the things `core` is the best place for.

By the way, some users may need to go without `std` or even `core` 😨, e.g. for embedded systems.
So, somehow, e.g. with a global attribute `@!no_std` user tells the compiler not to add `std` in prelude, or even with `@!no_core` to remove `core`, i.e. items from `std` or `core` must not be defined.
User defines pers own language items, using `@lang`, which we will bind with intrinsic language items.
