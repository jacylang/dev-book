# Compile-Time Evaluation

One thing I appreciate much is the ability of compile-time evaluation (CTE - compile-time evaluated(-ion) further)
Unlike Zig, there's no hardly separate syntax like `comptime`, etc., as far as we don't base something else (like type
parameters in Zig) on CTE, we only use it for computations.

There are some terms we need to establish:

* `const` keyword in the context of CTE
* CTE contexts
* CTE functions
* CTE expressions
