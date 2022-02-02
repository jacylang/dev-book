# Output

This chapter is about CLI output, mostly about dev-mode as with it we produce the most of the output.
Something about the output syntax might be described in specific chapters but I'll try to collect everything here.

## Colorizing

> Disclaimer: Some colors used here (with CSS) might differ from what you have in your terminal.

_Jacy_ CLI uses colorized output as I assume that you are using modern terminal for development.
Some colors are hard-coded for specific identifiers:

- NodeId: <span style="color: gray">#_</span>
- DefId: <span style="color: green">#0</span>
- FOSId: <span style="color: purple">#fos(0)</span>
- HirId: <span style="color: green">#0</span><span style="color:blue">@0</span> (#DefId@Counter)
- EID (aka Explanation Id, no color): EID(0)
