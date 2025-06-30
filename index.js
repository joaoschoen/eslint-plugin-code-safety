import fs from "fs";

const no_uncaught_async = require("./rules/no-uncaught-async")
const no_uncaught_eval = require("./rules/no-uncaught-eval")
const no_uncaught_json = require("./rules/no-uncaught-json")

const pkg = JSON.parse(fs.readFileSync(new URL("./package.json", import.meta.url), "utf8"));

const plugin = {
    meta: {
        name: pkg.name,
        version: pkg.version
    },
    configs: {},
    rules: {
        "no-uncaught-async": no_uncaught_async,
        "no-uncaught-eval": no_uncaught_eval,
        "no-uncaught-json": no_uncaught_json
    },
    processors: {}
};

export default plugin;