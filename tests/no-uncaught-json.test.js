var rule = require("../rules/no-uncaught-json")
var RuleTester = require("eslint").RuleTester

var ruleTester = new RuleTester()
ruleTester.run("no-uncaught-json", rule, {
  invalid: [{
    name:"Unsafe JSON.parse() call",
    code: `
      async function f(){
        const x = JSON.parse("{'key':'value'}");
        return x
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
    errors: [{ message: "JSON.parse() and JSON.stringify() should be used inside a try-catch block." }]
  },{
    name:"Unsafe JSON.stringify() call",
    code: `
      async function f(){
        const x = "someString"
        return JSON.stringify(x);
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
    errors: [{ message: "JSON.parse() and JSON.stringify() should be used inside a try-catch block." }]
  }],
  valid: [{
    name:"Safe JSON.parse() call",
    code: `
      async function f(){
        let x
        try {
          x = JSON.parse("{'key':'value'}");
        } catch (error) {
          console.log(error);
        }
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
  },{
    name:"Safe JSON.stringify() call",
    code: `
      async function f(){
        const x = "someString"
        let y
        try {
          y = JSON.stringify(x);
        } catch (error) {
          console.log(error);
        }
        return y
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
  }]
})