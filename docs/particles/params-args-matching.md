# Arguments placement rules

_Jacy_ supports named arguments, also default parameters values, thus we need some rules to establish the process of placement arguments at the needed positions.

Let's begin with an example:

```jc
func foo(first: i32, label second: i32, third: i32 = 123);
```

(`label` is not required, it's just an example, and without it, we could use `labeled` name as argument name)

We can call this function in some different ways:

```jc
foo(123, 123, 123); // just in order parameters placed
foo(first: 123, second: 123, third: 123); // all named
foo(first: 123, 123, 123); // some named
```

All of these calls are equivalent and intuitive. But what if we violate the order of parameters placed in signature, e.g.:

```jc
foo(123, 123, first: 123);
```

Here, we come up with a first rule: labeled parameters are just ignored in the process of placing arguments by order. Pretty simple, we just see that `first` is already used as a labeled argument thus we start from the `second`.


