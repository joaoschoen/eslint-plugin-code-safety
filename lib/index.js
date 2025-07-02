const { name, version } = require('../package.json')
const recommended = require("../configs/recommended")

const code_safety = {
    meta: {
        name: name,
        version: version,
    },
    configs: {
        recommended
    },
    rules: {
        "no-uncaught-async": require("./rules/no-uncaught-async"),
        "no-uncaught-eval": require("./rules/no-uncaught-eval"),
        "no-uncaught-json": require("./rules/no-uncaught-json"),
        "no-uncaught-string": require("./rules/no-uncaught-string"),
        "no-uncaught-uri": require("./rules/no-uncaught-uri"),
    },
    processors: {}
};

module.exports = code_safety;