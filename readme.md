# ESLINT Code Safety plugin

This plugin's creation came to be due to many frustrations I have with the JavaScript language and the many hours I've lost due to bugs caused by the looseness of the language and the lack of safeguards and warnings by the LSP.

I have migrated my study efforts in 2024 to working with Golang where any code in the standard library that can throw errors will return an error object and force me to handle my errors.

Coming back to JavaScript and inspired by the Golang philosophy of always being explicit about error handling I looked up a list (that is currently not wholistic but a work in progress) of all the standard JavaScript APIs that can throw errors and am working my way to create rules that catch any malpractices from rising from the depths of old code

## Warning

While I did program the rule [no-uncaught-eval](/docs/no-uncaught-eval), it is a failsafe in case you must use evals in your code, however I strongly recommend that you use the [no-eval](https://eslint.org/docs/latest/rules/no-eval) rule from ESLint's standard rules because there are vulnerabilities that can be exploited with it, check [this owasp article about it](https://ckarande.gitbooks.io/owasp-nodegoat-tutorial/content/tutorial/a1_-_server_side_js_injection.html)

## Currently implemented rules

- [no-uncaught-async](/docs/no-uncaught-async)
- [no-uncaught-eval](/docs/no-uncaught-eval)
- [no-uncaught-json](/docs/no-uncaught-json)
- [no-uncaught-string](/docs/no-uncaught-string)
- [no-uncaught-uri](/docs/no-uncaught-uri)

## Planed features

All the planed features can be found in the [docs folder](/docs/), if there's a rule document there and no rule implemented, that's a planned feature

## Testing

I'm writing test cases for all the rules to verify that they work properly using the ESLint RuleTester API, all tests can be found in the [tests folder](/tests/)  

## Contact and feedback

Feel free to create an issue on the github repo or contact me via email at joaoschoen@gmail.com