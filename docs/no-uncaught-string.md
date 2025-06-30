# no-uncaught-string

Rule that enforces any string manipulations that could throw an error to be inside a try...catch block


- "string".normalize(form)
Throws RangeError for invalid Unicode normalization form.

- "string".replace(pattern, replacementFunction)
If replacementFunction throws, the whole method throws.

- "string".match(regex)
Throws if regex is not a valid regular expression.