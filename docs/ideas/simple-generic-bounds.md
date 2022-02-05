# Simple Generic Bounds syntax

The idea is to allow:

```jc
func foo(bar: FirstTrait + SecondTrait) {}
```

instead of

```jc
func foo<T: FirstTrait + SecondTrait>(bar: T) {}
```
