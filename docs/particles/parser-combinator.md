# Parser-Combinator DEV-RFC

Parser-combinator signature:
```jc
(ctx: ParseContext) -> ParseResult 
```

Each parser-combinator is free to be constructed with some additional data to, for example, apply multiple parsers and different logic.

We need pretty small list of parser-combinators:
- `TokenParser` - Parses a single token
- `KeywordParser` - Parses a token which is a certain keyword
- `Optional<P>` - Applies the parser `P` and if it succeeded, returns `Some()`