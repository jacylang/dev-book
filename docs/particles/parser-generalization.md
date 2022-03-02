# Generalize Parser DEV-RFC

Now, as for 25.02.2022 and as for a long time, the parser is full of copy-paste logic, where even nothing like `printDelimited` does not exist. That's bad, but that was a conscious decision, as syntax was at WIP stage, I didn't want to clean up logic that may change immediately.
In `idea/parser-combinator` I've started a DEV-RFC about adding simple parser-combinator framework.
