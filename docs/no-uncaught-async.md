# no-uncaught-async

[<- back to main readme page](/readme.md#currently-implemented-rules)

This rule that enforces the proper treatment of any asynchronous call to be inside a try...catch block

Any time a call to an async function like fetch is made, an exception can occur, this rule is

# Invalid
```javascript
    async function f(){
        const x = await fetch("url");
        return x
    }
```

# Valid
```javascript
    async function f(){
        let x
        try {
          x = await fetch("url");
        } catch (error) {
          console.log(error)
        }
    }
```