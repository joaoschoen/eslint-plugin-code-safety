# no-uncaught-bigint

Rule that enforces any bigint used to be inside a try...catch block

- BigInt(value)

- Throws SyntaxError for invalid BigInt literals.
- Throws RangeError for values outside BigInt range.