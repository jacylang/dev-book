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

## Why _JON_?

Spoiler: No clear reasons, I just like creating "my" things.

JSON is a very popular format used almost everywhere, so why do we need a different format?

- It is more liberal than JSON but still obvious and simple
- It is more human friendly but not that hard as YAML
- It is more complex than JSON, in a good way 😇

_JON_ was also made as an alternative to TOML, as _Jacy_ is similar to **Rust** that uses TOML.
I don't really like TOML 😐.

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

## Grammar

Here, I'll use ANTLR4 grammar as it is more readable than EBNF.


```g4
grammar: JON;

root: object_body | value;

key: literal | IDENT;

IDENT: IDENTIFIER_START IDENTIFIER_NEXT*;

value: literal | object | array;

literal
    : STRING
    | 'null'
    | number
    | bool;

number: int | float;

int
    : DEC_LIT
    | '0' [xX] (HEX | US)* HEX (HEX | US)*
    | '0' [bB] (BIN | US)* BIN (BIN | US)*
    | '0' [oO] (OCT | US)* OCT (OCT | US)*;

fragment DEC_LIT: '0' | DEC (DEC | US)*;

float
    : DEC_LIT EXP
    | DEC_LIT '.' DEC_LIT EXP?
    | SIGN? 'nan'
    | SIGN? 'inf';

fragment EXP: [eE] SIGN? (DEC | US)* DEC (DEC | US)*;

key_value: key opt_nls ':' opt_nls value;

opt_nls: NLs*;
sep: '\n'+ | opt_nls ',' opt_nls;

object_body: key_value (sep key_value)* sep?;
object: '{' opt_nls object_body? opt_nls '}';

array: '[' (value (sep? value)* sep?)? ']';

fragment US: '_'

fragment DEC: [0-9];
fragment HEX: [0-9a-fA-F];
fragment OCT: [0-7];
fragment BIN: [01];

fragment SIGN: '-' | '+';

fragment STRING
    : '\'' (~['\\\u0000-\u001F] | STR_ESC | ('\\\'')) '\''
    | '"' (~["\\\u0000-\u001F] | STR_ESC | ('\\"')) '"'
    | '\'\'\'' (~['\\\u0000-\u001F] | STR_ESC | ('\\\'')) '\'\'\''
    | '"""' (~["\\\u0000-\u001F] | STR_ESC | ('\\"')) '"""';

fragment STR_ESC
    : '\\'
    ( [\\/bnfrt0]
    | OCT OCT OCT
    | 'x' HEX HEX
    | 'u' HEX HEX
    | 'U' HEX HEX HEX HEX);

fragment IDENTIFIER_START
    : [\p{L}]
    | '_';

fragment IDENTIFIER_NEXT
    : IDENTIFIER_START
    | [\p{M}]
    | [\p{N}]
    | [\p{Pc}]
    | '\u200C'
    | '\u200D';

fragment NL
   : '\r\n'
   | [\r\n\u2028\u2029]

fragment MULTILINE_COMMENT: '/*' .*? '*/' -> skip;

fragment SINGLE_LINE_COMMENT: '//' .*? '*/' -> skip;

WS: [ \t\r\u00A0\uFEFF\u2003]+ -> skip;
```

