# Goal

This is a list of features and examples I wish would be possible in *Jacy*.

## Main features

### *Jacy* is safe

- *Jacy* follows Rust' borrowing rules

### References

```jc
let a = 123;
let b = &a; // Borrow `a`

let mut value = 0;
let bor = &mut value;
*bor = 1000;
print(value); // Prints `1000`
```

### Non-Copy types are passed by reference

### *Jacy* supports structural sub-typing with tuples

```jc
let t = ("abcdef", 2.0, 123);

func foo(tup: (str, float, int));
```

## *Jacy* is functional

### Pattern matching

```jc
let a = (1, 2, 3);
let (f, s, t) = a;

match a {
    (f, s, t) => // Do something with `f`, `s` and `t`
}
```

#### It is possible to ignore non-important fields

```jc
match a {
    (f, ...) => // Do something with `f` only
}
```

#### Matched expression can be borrowed

```jc
match a {
    (ref f, ...) => // Do something with `f` as reference to `a.0`
}
```

### Lambdas (closures)

```jc
let l = x -> x * 2;
print(l(2)); // 4
```

### Pipeline operator

```jc
2 |> l |> print; // 4
```

### *Jacy* is Object-Oriented

Claiming that OOP means that PL has structures containing data and methods -- *Jacy* is OOP language.

```jc
struct A {
    field: i32,
}

impl A {
    func foo {
        print(self.field);
    }
}
```

#### *Jacy* respects composition over inheritance

#### Struct implementations can be extended

```jc
struct A {
    field: i32,
}

func A::foo {
    print(self.field);
}
```

### No GC

Jacy doesn't have Garbage Collector, as far as it is statically sets `free` points.

### *Jacy* respects Compile-Time Evaluation

```jc
const a = 123;

const func fib(n: i32): u64 = match n {
    i32::MIN..=0 => panic("`n` is negative or zero"),
    1 | 2 => 1,
    3 => 2,
    _ => fib(n - 1) + fib(n - 2),
}

func main {
    const fib100 = fib(100); // 100 fibonacci number computed at compile-time
    print(fib100);
}
```
