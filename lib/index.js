const fs = require("fs");

const pkg = JSON.parse(
	fs.readFileSync(new URL("./package.json", require(meta.url)), "utf8"),
);

const code_safety = {
    meta: {
        name: pkg.name,
        version: pkg.version,
        namespace: "code-safety"
    },
    configs: {
        recommended: require("../configs/recommended")
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