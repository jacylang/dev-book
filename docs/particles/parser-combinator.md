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


__This idea is closed because of some reasons, the last commit with changes on it was 4cbdd26d09dc1344aff90eae889d16704ded1045__
