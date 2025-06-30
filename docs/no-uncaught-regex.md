# no-uncaught-regex

Rule that enforces any regex used to be inside a try...catch block

new RegExp(pattern, flags)

Throws SyntaxError if the pattern is invalid.

regexp.test(string)

Can throw if regexp is invalid.
