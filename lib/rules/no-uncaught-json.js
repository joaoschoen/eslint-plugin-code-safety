module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of JSON.parse() and JSON.stringify() without error handling.",
      recommended: true,
      url: "/docs/no-uncaught-json.md"
    },
    messages: {
      missingTryCatch: "JSON.parse() and JSON.stringify() should be used inside a try-catch block.",
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.object.name === "JSON" &&
          (
            node.callee.property.name === "parse"||
            node.callee.property.name === "stringify"
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
