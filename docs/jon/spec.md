---
sidebar_position: 1
title: Specification
---

# _JON_ Specificiation

_JON_ is an alternative to JSON I've made for _Jacy_.
Though this page is called "Specification", better think of it as of grammar description.

## Why _JON_?

Spoiler: No clear reasons, I just like create "my" things.

JSON is a very popular format used mostly everywhere, so why do we need a different format?

- It is more liberal than JSON but still obvious and simple
- It is more human friendly but not that hard as YAML
- It is more complex than JSON, in a good way 😇

_JON_ was also made as an alternative to TOML, as _Jacy_ is similar to **Rust** that uses TOML.
I really don't like TOML 😐.

## Grammar

Here, I'll use ANTLR4-like grammar as it is more readable than EBNF.


```g4
grammar: JON;

sep: '\n'+ | '\n'* ',' '\n'*;

root: object_body | value;

key: literal;

value: ;

literal
    : STRING
    | 'null'
    | int
    | float
    | bool;

key_value: key ':' value;

object_body: value (sep key_value)* sep?;
object: '{' object_body? '}';

fragment STRING
    : '\'' (~['\\\u0000-\u001F] | STR_ESC | ('\\\'')) '\''
    | '\'' (~["\\\u0000-\u001F] | STR_ESC | ('\\\'')) '\'';

fragment STR_ESC: '\\' ([\\/bnfrt]);

fragment INT: [0-9]+;

WS: [ \t\r]+ -> skip;
```

