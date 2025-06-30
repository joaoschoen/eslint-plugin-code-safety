module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Disallow usage of decodeURI(), decodeURIComponent(), encodeURI() and encodeURIComponent() without error handling.",
            recommended: true,
            url: "/docs/no-uncaught-uri.md"
        },
        schema: [],
        messages: {
            missingTryCatch: "URI methods decodeURI(), decodeURIComponent(), encodeURI(), encodeURIComponent() can throw and should be used inside a try-catch block.",
        },
    },
    create(context) {
        return {
            CallExpression(node) {
                if (
                    node.callee.type === "Identifier" &&
                    (
                        node.callee.name === "decodeURI" ||
                        node.callee.name === "decodeURIComponent" ||
                        node.callee.name === "encodeURI" ||
                        node.callee.name === "encodeURIComponent"
                    )
                ) {
                    if (!context.sourceCode.getAncestors(node).some(ancestor => ancestor.type == 'TryStatement')) {
                        context.report({
                            node: node,
                            messageId: "missingTryCatch",
                        })
                    }
                }
            },
        };
    },
};
