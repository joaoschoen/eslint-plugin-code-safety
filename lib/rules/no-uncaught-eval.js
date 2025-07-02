module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallow usage of async calls without error handling",
            recommended: true,
            url: "/docs/no-uncaught-async.md"
        },
        messages: {
            missingTryCatch: "Await expressions should be executed in a try-catch block.",
        }
    },
    create(context) {
        return {
            CallExpression(node) {
                if (node.callee.type === "Identifier" && node.callee.name === "eval") {
                    debugger;
                    if (!context.sourceCode.getAncestors(node).some(ancestor => ancestor.type === 'TryStatement')) {
                        context.report({
                            node: node,
                            messageId: "missingTryCatch",
                        })
                    }
                }
            },
        }
    }
}
