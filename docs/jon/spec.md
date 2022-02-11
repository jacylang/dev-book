---
sidebar_position: 1
title: Specification
---

# _JON_ Specificiation

_JON_ (Jacy Object Notation, ext.: `.jon`) is an alternative for JSON used by _Jacy_ programming language.
Its goals are:

- Simpler and less noisy syntax
- Data referencing

Though this page is called "Specification", better think of it as of grammar description.

## Basic properties

- _JON_ is case-sensitive, it this rule is applied to keywords too

### Root type

_JON_ does not support root type specification as JSON does, there's no root `{}` or `[]`, and a _JON_ file is always an object.

## Data types

- `null` (non-value)
- Boolean - `true`/`false`
- Integer
  - Decimal - `123`
  - Hexadecimal - `0xB16B00B5`
  - Octal - `0o774`
  - Binary - `0b110011001`
- Floating-point numbers
  - Raw - `0.1523`
  - With exponential notation - `0.123213e-123`
- Strings
  - One line - `'Hello, world!'` and `"Hello, world!"` are same
  - Multi-line - `'''My multiline string'''` and `"""My multiline string"""` are same
- Arrays
  - Collection of values enclosed into `[]` and delimited with `,` (optionally, read further)
  - Arrays are heterogeneous
  - `[1, 'Some text here', null, true]`
- Objects
  - Collection of key-value pairs enclosed into `{}` and delimited by `,` (optionally, read further)
  - Each pair is `key: value` where
    - `key` is any text and does not require being enclosed into quotes (`'` or `"`) until it does not contain `:` character

### Numeric data types

There's no limit to Integer ("int" further) and Floating-point ("float" further) numbers, and is only specified by implementation.

## Why _JON_?

Spoiler: No clear reasons, I just like creating "my" things.

JSON is a very popular format used almost everywhere, so why do we need a different format?

- It is more liberal than JSON but still obvious and simple
- It is more human friendly but not that hard as YAML
- It is more complex than JSON, in a good way 😇

_JON_ was also made as an alternative to TOML, as _Jacy_ is similar to **Rust** that uses TOML.
I really don't like TOML 😐.

## Grammar

Here, I'll use ANTLR4 grammar as it is more readable than EBNF.


```g4
grammar: JON;

opt_nls: '\n'*;
sep: '\n'+ | opt_nls ',' opt_nls;

root: object_body | value;

key: literal;

value: literal | object | array;

literal
    : STRING
    | 'null'
    | int
    | float
    | bool;

key_value: key opt_nls ':' opt_nls value;

object_body: key_value (sep key_value)* sep?;
object: '{' opt_nls object_body? opt_nls '}';

array: '[' (value (sep? value)*)? sep? ']';

fragment STRING
    : '\'' (~['\\\u0000-\u001F] | STR_ESC | ('\\\'')) '\''
    | '\'' (~["\\\u0000-\u001F] | STR_ESC | ('\\\'')) '\'';

fragment STR_ESC: '\\' ([\\/bnfrt]);

fragment INT: [0-9]+;

WS: [ \t\r]+ -> skip;
```

