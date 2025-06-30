# no-uncaught-json

[<- back to main readme page](/readme.md#currently-implemented-rules)

Rule that enforces any JSON used to be inside a try...catch block

- JSON.parse(text)
Throws SyntaxError if text is not valid JSON.

- JSON.stringify(value)
Throws TypeError for circular references.