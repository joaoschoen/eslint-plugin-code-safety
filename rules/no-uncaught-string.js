module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallow usage of match(), normalize() and replace() string methods without error handling.",
            recommended: true,
            url: "/docs/no-uncaught-string.md"
        },
        schema: [],
        messages: {
            missingTryCatch: "String methods match(), normalize() and replace() can throw and should be used inside a try-catch block.",
        },
    },
    create(context) {
        return {
            CallExpression(node) {
                if (
                    node.callee.type === "MemberExpression" &&
                    (
                        node.callee.property.name === "match" ||
                        node.callee.property.name === "normalize" ||
                        node.callee.property.name === "replace"
                    )
                ) {
                    if (!context.sourceCode.getAncestors(node).some(ancestor => ancestor.type == 'TryStatement')) {
                        context.report({
                            node: node,
                            messageId: "missingTryCatch",
                            data: { method: node.callee.property.name },
                        })
                    }
                }
            },
        };
    },
};