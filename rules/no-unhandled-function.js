// const rule = createRule({
//   name:"no-unhandled-function",
//   meta: {
//     docs: {
//       description:
//         "Warns about function calls that might throw exceptions and are not handled at all further up the stack.",
//     },
//     type: "suggestion",
//     messages: {
//       noUnhandled: "'{{name}}' might throw an exception and is not handled.",
//     },
//     schema: [],
//   },
//   defaultOptions: [],
//   create: (context) => {
//     canFuncThrowClear();

//     return {
//       CallExpression(called) {
//         const id = getCallExprId(called);
//         if (!id) return;
//         const throws = canFuncThrow(id, context);

//         if (throws) {
//           const parentFunction = findInParent(called, isFunctionDeclaration);
//           const parentMethod = findInParent(called, isMethodDefinition);
//           const id = findInChildren(called, isIdentifier);
//           if (!parentFunction?.id && !parentMethod?.key) {
//             context.report({
//               node: called,
//               messageId: "noUnhandled",
//               data: {
//                 name: id?.name,
//               },
//             });
//           }
//         }
//       },
//     };
//   },
// });

// export default { name, rule };