var rule = require("../rules/no-uncaught-eval")
var RuleTester = require("eslint").RuleTester

var ruleTester = new RuleTester()
ruleTester.run("no-uncaught-eval", rule, {
  invalid: [{
    name:"Unsafe eval() call",
    code: `
      function f(){
        const x = eval("console.log('This is unsafe!')");
        return x
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
    errors: [{ message: "Await expressions should be executed in a try-catch block." }]
  }],
  valid: [{
    name:"Safe eval() call",
    code: `
      function f(){
        let x
        try {
          x = eval("console.log('This is safe!')");
        } catch (error) {
          console.log(error)
        }
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
  }]
})