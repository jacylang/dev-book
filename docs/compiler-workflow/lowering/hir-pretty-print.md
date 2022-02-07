# HIR Pretty printing

As we have the `AstPrinter` which prints AST structure (mostly) in the same way user wrote it, we need to be able to print the HIR structure.

Whereas AST is a straightforward representation of the user's code, HIR is much more simplified and does not include full information about the user's code directly inside. For example, we don't have kind of `ParenExpr` (parenthesized expression) as HIR is a tree structure (not really, but in the case of expressions is always a tree of expressions) which gives us enough information about precedence, i.e. `(1 + 2) * 3` becomes `Infix(Infix(1 + 2), '*', Literal(3))` and we know that `Infix` will be computed first -- no need for parentheses.

And here we come up with a problem, how do we print `(1 + 2) * 3` if we don't have `ParenExpr`?

## Printing implicit syntax

I have an example above where we don't have precise information about user code but need to get it someway.
To solve the problem with the absence of `ParenExpr` we do:
1. See an `InfixExpr` node
2. And if either its LHS or RHS is an `InfixExpr` with a lower precedence
3. We put parenthesis around it.

Pretty simple: in `(1 + 2) * 3` that has AST `Infix(Infix(1 + 2), '*', Literal(3))`, `Infix(1 + 2)` is deeper in the tree but `+` has lower precedence than `*`, thus we know that user wrote `(1 + 2) * 3`, no other case can result this AST.

But often, when we lower AST, we don't need to get what the user wrote in the code, but what the result is. We don't print "AST from HIR", we print HIR as it is to see what the heck have we made 😸.
And for cases when we lower a syntax unit but have to know that some lowering was applied we can store a flag (boolean or an enum, for example).
