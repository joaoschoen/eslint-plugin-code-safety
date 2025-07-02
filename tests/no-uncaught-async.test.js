var rule = require("../lib/rules/no-uncaught-async")
var RuleTester = require("eslint").RuleTester

var ruleTester = new RuleTester()
ruleTester.run("no-uncaught-async", rule, {
  invalid: [{
    code: `
      async function f(){
        const x = await fetch("url");
        return x
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
    errors: [{ message: "Await expressions should be executed in a try-catch block." }]
  }],
  valid: [{
    code: `
      async function f(){
        let x
        try {
          x = await fetch("url");
        } catch (error) {
          console.log(error)
        }
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
  }]
})