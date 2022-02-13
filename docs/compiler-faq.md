# Compiler FAQ

When I'm reading about different programming languages internals one problem comes up to me -- I cannot easily find an explanation for a tricky question (sometimes even for a really simple question), thus I thought it would be could to write a large list of a bunch of answers to anything about everything. This one is all about the compiler internals, I'll make one more about language itself when (or likely "if") it will be released.

> ## Some kind of rules for this FAQ
>
> 1. When someone anywhere comes up with a question about _Jacy_, this information should be used to either add a new question-answer or to supplement the existing one.
> 2. Use hashtags, concise and meaningful.
> 3. Split FAQs into sections: large and specific
> 4. Enumerate FAQs independently, i.e. each FAQ has its number without relation to a section.

## HIR

### HIR Structure

#### 1. Why HIR does not have `ParenExpr`?

#hir

The reason is simple -- HIR tree already defines the precedence: `(1 + 2) * 3` becomes `Infix(Infix(1 + 2), '*', Literal(3))` and we don't need `ParenExpr` to know that `(1 + 2)` has higher precedence.
