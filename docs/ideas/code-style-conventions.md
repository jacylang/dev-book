# Code Style Conventions

__[WIP and thoughts]__

As far as *Jacy* is VERY WIP, I won't describe serious conventions, thus it's gonna be here -- in ideas.

## Namings

Okay, I respect Rust, but snake_case is not kind of what most of the people like I think, even not considering things like "Most people like..." do not matter, I can describe everything from my view.

### To be (snake) or not to be

It does not matter that much to me. The only thing I won't accept is the usage of the so-called PascalCase for functions,
variables, etc. except types, names. By the way, I need a style guide, thus things like naming rules must be described with `MUST`s 😄.

### Intro and common rules

List of all writing styles referenced in the convention:

- __camelCase__ - starts with a lowercase letter, each next word starts with uppercase.
- __PascalCase__ - starts with an uppercase letter, each next word starts with uppercase.
- __snake_case__ - each word starts with a lowercase letter, words separated with `_`.
- __SCREAMING_SNAKE_CASE__ - all letters in uppercase, words separated with `_`.

All other variations MUST NOT be used in code.

Further, in this text I will use "MUST" and "SHOULD", "MAY" (mostly for alternatives to things that "SHOULD BE..."), so
that gonna be clean what is my view.

"__Different code-styles MUST not be mixed__" is the most important rule here, I think. It means, that if somewhere here
is written that something "SHOULD BE ..." but "MIGHT BE ..." and you've chosen a described alternative -- use it
everywhere in your code.

### Variables and functions

Variables and functions SHOULD be named in __camelCase__: `somethingSomewhere`, `myFunction`, `foo`, `barBazFuzz`

Variables and functions MAY be named in __snake_case__: `something_somewhere`, `my_function`, `foo`, `bar_baz_fuzz`

If one of the styles is chosen it MUST be followed in the whole code.

### Constants

Talking about constants, I mean constants declared with `const`. Actually `let` without `mut` is a constant, but `let`
is under the rule above

`const` SHOULD BE named in __SCREAMING_SNAKE_CASE__: `UNCHANGEABLE_VALUE`

Scientific constants like PI number MUST BE named in __SCREAMING_SNAKE_CASE__: `PI`, `G`

`const` MAY BE named in __camelCase__: `myImportantValue`

### Type names

Type names include names for:

- `struct`
- `trait`
- `enum`
- `type`
- type parameters (read further)

All types MUST be in __PascalCase__: `MyType`, `SomeStructure`, `EnumWithEverythingINeed`

__Exception__ is built-in primitive types: `i8`, `i16`, `i32`, `int`, `i64`, `i128`, `u8`, `u16`, `u32`, `uint`, `u64`,
`u128`, `isize`, `usize`, `f32`, `f64`, `double`, `bool`, `char`, `str`

Nothing else CAN NOT BE named in __PascalCase__ except user-defined types!

### Type parameters

Type parameters are under the rule above ("Type names"), anyway, they are styled a little bit differently.

Type parameters MUST BE named in __PascalCase__: `T`, `U`, `V` and SHOULD BE 1 character long.

As you can see, 1 uppercase character is used for type parameters, but which to use when there's more than one or usage
is specific? Here's the table of common cases:

|   Case   |   Names   |
| :------: | :-------- |
| Single "any" type | `T` |
| Key-value types | `K` for key and `V` for value. Often used in mapping structures |
| Multiple types | First - `T`, Second - `S`, Third - `U`, Fourth - `V` |
| Meaningful types | `TSize`, `TInput`, `TOutput` |
| A lot of "any" types | `T0`, `T1`, `T2`, ..., `TN`. Rarely needed, but can occur in, for example, tuple type implementations |

> "any" type implies cases when it is not important to refer to this type, and it just needed to be annotated.

### Modules (`mod`)

`mod` MUST BE named in __snake_case__: `std`, `my_lib`, `some_module`

### Resulting table of naming styles

| Entity | Preferred naming style |
| ------ | ---------------------- |
| Type aliases | __PascalCase__ |
| Type parameters | Single upper case letter `T` or meaningful __PascalCase__ name rarely |
| Lifetimes | 1-8 letter long lowercase word, e.g. `'a` or `'tree` |
| Traits (`trait`) | __PascalCase__ |
| Enums and variants (`enum` and its members) | __PascalCase__ |
| Implementations (`impl`) | __PascalCase__ |
| Functions and methods | __camelCase__ |
| Local variables | __camelCase__ |
| Constant and static variables | __SCREAMING_SNAKE_CASE__ |
| Modules | __snake_case__ |
| Parties | __snake_case__ |
| File names | __kebab-case__ (preferred) or __snake_case__ (alternative) |

**Only built-in primitive types can use __snake_case__**
