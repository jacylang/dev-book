# Code testing tool

This is mostly not just an idea but a task description, I want a tool that allows checking for errors with annotations in comments.

Example:
```jc
enum Enumeration // message:error 'Expected `enum` body'
```

This tool would be really helpful for parser testing, by the way, it might be suitable for type check, etc.
But let's focus on parsing first.

## What features do I want

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

- I think that checking only text of a message would be enough, so we can through away label checks, as we want to check if an error appears but not how we described it.
- The `Message::Kind` already defined in the syntax `message:{{kind}}`, it is required.
- The `Message::EID` should be optional as I think, like "more specific check". So we can add kind of an annotation for it, e.g. `` message:error 'Expected `enum` body' @EID:123 ``.

As we already have a syntax for `EID` annotation then we can use it for all annotations, e.g. for spans. This will give are concise and extensible syntax for message properties.

That's all 🏁


### Spanned error

In the example above I just wrote an error with some text, but it would be nice to be able to check the position of the error too.
Span syntax, as for `EID`, is written as an annotation `@at{16}` meaning "at 16 symbol place" or `@at{16-17}` meaning "from 16 to 17 symbol place".

#### Implementation problem

Span in _Jacy_ compiler stored as a position and length (meaning "from char C with length L"), and it might be tricky to convert all the spans to the "line:number" form.



## Implementation specification

### Collecting ascriptions


