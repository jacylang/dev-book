# Code testing tool

This is mostly not just an idea but a task description, I want a tool that allows checking for errors with annotations in comments.

Example:
```jc
enum Enumeration // message:error 'Expected `enum` body'
```

This tool would be really helpful for parser testing, by the way, it might be suitable for type check, etc.
But let's focus on parsing first.

## What features do I want

### About message comment structure

At first, I need to decide what properties of messages (error, warn, etc.) must be required in test comments.
For now (and `Message` structure might be extended in the future) `Message` and `Label` are structured as:
```c++
struct Label {
    Kind kind; // Primary/Help/Aux
    Span span; // Span of the label
    std::string text; // Label text
}

struct Message {
    Kind kind; // Error/Warn/None
    std::string text; // Text of the message
    EID eid; // Explanation identifier
    Option<Label> primaryLabel; // Primary label of the message
    Label::List labels; // Additional labels
}
```

- I think that checking the only text of a message would be enough, so we can through away label checks, as we want to check if an error appears but not how we described it.
- The `Message::Kind` already defined in the syntax `message:{{kind}}`, is required.
- The `Message::EID` should be optional as I think, like "more specific check". So we can add a kind of annotation for it, e.g. `` message:error 'Expected `enum` body' @EID:123 ``.

As we already have a syntax for `EID` annotation then we can use it for all annotations, e.g. for spans. This will give are concise and extensible syntax for message properties.

That's all we can get from messages for now.

### CLI args in comments

`CodeTest` must be a separate CLI command for `jc`, i.e. like default one - `compile`, this will give us more control, but there's a big downside - we'll need to support different kinds of interfaces - one for raw compilation and one for code testing.

By the way, it would be inextensible not to tune the code-test process for each file separately, thus, we need kind of "flags" right inside the code-test file comments.

Getting ahead of myself, I would say that we need to set compilation target for each file, but let's focus on more simple things. Let's say "Stage" - the important flag we need to say the compiler only to run stages before and including specified one. We already have this feature in `compile` command, so... copy-paste 😺.




### Spanned error

In the example above I just wrote an error with some text, but it would be nice to be able to check the position of the error too.
Span syntax, as for `EID`, is written as an annotation `@at{16}` meaning "at 16 symbol place" or `@at{16-17}` meaning "from 16 to 17 symbol place".

#### Implementation problem

Span in _Jacy_ compiler stored as a position and length (meaning "from char C with length L"), and it might be tricky to convert all the spans to the "line:number" form.



## Implementation specification

### Collecting messages

1. We parse the code with in a special `ParserMode = CodeTest` which collects all comments placed after items.
2. We go through all the comments we collected and leave only the ones starting with `message:` and save them.
3. If some of the comments have the `@at` attribute, we set a specific span for them.
4. If the `@at` attribute only specifies the by-char position, we set the current line (line where at the end of which comment is placed) number for it.
5. If `@at` has at least a line number specified, we do nothing with it and then, at the check stage, look at it as "an error at line N"
6. 