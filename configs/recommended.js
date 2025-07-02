import code_safety from "../lib"

module.exports = {
      plugins: {
        "code-safety": code_safety
      },
      rules: {
        'code-safety/"no-uncaught-async': 'error',
        'code-safety/"no-uncaught-eval': 'error',
        'code-safety/"no-uncaught-json': 'error',
        'code-safety/"no-uncaught-string': 'error',
        'code-safety/"no-uncaught-uri': 'error',
      },
    };