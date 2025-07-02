import fs from "fs";

import { no_uncaught_async } from "./rules/no-uncaught-async"
import { no_uncaught_eval } from "./rules/no-uncaught-eval"
import { no_uncaught_json } from "./rules/no-uncaught-json"
import { no_uncaught_string } from "./rules/no-uncaught-string"
import { no_uncaught_uri } from "./rules/no-uncaught-uri"

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
        "no-uncaught-json": no_uncaught_json,
        "no_uncaught_string": no_uncaught_string,
        "no_uncaught_uri": no_uncaught_uri,
    },
    processors: {}
};

export default plugin;