var rule = require("../rules/no-uncaught-string")
var RuleTester = require("eslint").RuleTester

var ruleTester = new RuleTester()
ruleTester.run("no-uncaught-string", rule, {
  invalid: [{
    name:"Unsafe string.match() call",
    code: `
      async function f(){
        const x = "some string"
        const y = x.match(/someRegExp/)
        return y
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
    errors: [{ message: "String methods match(), normalize() and replace() can throw and should be used inside a try-catch block."}]
  },{
    name:"Unsafe string.replace() call",
    code: `
      async function f(){
        const x = "some string"
        function g(){
          throw new Error()
        }
        return x.replace("s", g)
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
    errors: [{ message: "String methods match(), normalize() and replace() can throw and should be used inside a try-catch block."}]
  },{
    name:"Unsafe string.normalize() call",
    code: `
      async function f(){
        const x = "some string"        
        return x.normalize("wrong value")
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
    errors: [{ message: "String methods match(), normalize() and replace() can throw and should be used inside a try-catch block."}]
  }],
  valid: [{
    name:"Safe string.match() call",
    code: `
      async function f(){
        const x = "some string"
        let y
        try {
          y = x.match(/someRegExp/)
        } catch (error) {
          console.log(error);
        }
        return y
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
    
  },{
    name:"Safe string.replace() call",
    code: `
      async function f(){
        const x = "some string"
        let y
        function g(){
          throw new Error()
        }
        try {
          y = x.replace("s", g)
        } catch (error) {
          console.log(error);
        }
        return y
      }`,
    languageOptions: {
      ecmaVersion: "latest", sourceType: "module"
    },
  },{
    name:"Safe string.normalize() call",
    code: `
      async function f(){
        const x = "some string"
        let y
        try {
          y = x.normalize("wrong value")
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