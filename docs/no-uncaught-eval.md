# no-uncaught-eval

[<- back to main readme page](/readme.md#currently-implemented-rules)

Rule that enforces any eval used to be inside a try...catch block

## eval(code)

- Throws SyntaxError if code is invalid.
- Throws ReferenceError if using an undeclared variable.