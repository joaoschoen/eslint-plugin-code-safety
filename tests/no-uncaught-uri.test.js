var rule = require("../rules/no-uncaught-uri")
var RuleTester = require("eslint").RuleTester

var ruleTester = new RuleTester()
ruleTester.run("no-uncaught-uri", rule, {
  invalid: [
    {
      name:"Unsafe decodeURI() call",
      code: `
        async function f(){
          return decodeURI("someURI")
        }`,
      languageOptions: {
        ecmaVersion: "latest", sourceType: "module"
      },
      errors: [{ message: `URI methods decodeURI(), decodeURIComponent(), encodeURI(), encodeURIComponent() can throw and should be used inside a try-catch block.`}]
    },
    {
      name:"Unsafe encodeURI() call",
      code: `
        async function f(){
          return encodeURI("someURI")
        }`,
      languageOptions: {
        ecmaVersion: "latest", sourceType: "module"
      },
      errors: [{ message: `URI methods decodeURI(), decodeURIComponent(), encodeURI(), encodeURIComponent() can throw and should be used inside a try-catch block.`}]
    },
    {
      name:"Unsafe decodeURIComponent() call",
      code: `
        async function f(){
          return decodeURIComponent("someURI")
        }`,
      languageOptions: {
        ecmaVersion: "latest", sourceType: "module"
      },
      errors: [{ message: `URI methods decodeURI(), decodeURIComponent(), encodeURI(), encodeURIComponent() can throw and should be used inside a try-catch block.`}]
    },
    {
      name:"Unsafe encodeURIComponent() call",
      code: `
        async function f(){
          return encodeURIComponent("someURI")
        }`,
      languageOptions: {
        ecmaVersion: "latest", sourceType: "module"
      },
      errors: [{ message: `URI methods decodeURI(), decodeURIComponent(), encodeURI(), encodeURIComponent() can throw and should be used inside a try-catch block.`}]
    },
  ], 
  valid:[
    {
      name:"Safe decodeURI() call",
      code: `
        async function f(){
          let y
          try {
            y = decodeURI("someURI")
          } catch (error) {
            console.log(error);
          }
          return y
        }`,
      languageOptions: {
        ecmaVersion: "latest", sourceType: "module"
      }
    },
    {
      name:"Safe decodeURIComponent() call",
      code: `
        async function f(){
          let y
          try {
            y = decodeURIComponent("someURI")
          } catch (error) {
            console.log(error);
          }
          return y
        }`,
      languageOptions: {
        ecmaVersion: "latest", sourceType: "module"
      }
    },
    {
      name:"Safe encodeURI() call",
      code: `
        async function f(){
          let y
          try {
            y = encodeURI("someURI")
          } catch (error) {
            console.log(error);
          }
          return y
        }`,
      languageOptions: {
        ecmaVersion: "latest", sourceType: "module"
      }
    },
    {
      name:"Safe encodeURIComponent() call",
      code: `
        async function f(){
          let y
          try {
            y = encodeURIComponent("someURI")
          } catch (error) {
            console.log(error);
          }
          return y
        }`,
      languageOptions: {
        ecmaVersion: "latest", sourceType: "module"
      }
    },
  ]
})