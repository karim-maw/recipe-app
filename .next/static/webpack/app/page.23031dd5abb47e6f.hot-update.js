"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/components/Post.tsx":
/*!*********************************!*\
  !*** ./src/components/Post.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! phosphor-react */ \"(app-client)/./node_modules/phosphor-react/dist/icons/Heart.esm.js\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! phosphor-react */ \"(app-client)/./node_modules/phosphor-react/dist/icons/ChatCircle.esm.js\");\n/* harmony import */ var phosphor_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! phosphor-react */ \"(app-client)/./node_modules/phosphor-react/dist/icons/BookmarkSimple.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_pocketbase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/pocketbase */ \"(app-client)/./src/lib/pocketbase.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Post(param) {\n    let { post, engages } = param;\n    _s();\n    console.log(post);\n    const [hearted, setHearted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [saved, setSaved] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [postInfo, setPostInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(post);\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    console.log(engages);\n    const sth = \"http://127.0.0.1:8090/api/files/posts/\".concat(post.id, \"/\").concat(post.food);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    //subscribes to changes\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const subscribeCallback = (e)=>{\n            console.log(e.record);\n            setLikes(e.record.nb_likes);\n        };\n        _lib_pocketbase__WEBPACK_IMPORTED_MODULE_3__.pb.collection(\"likes\").subscribe(engages.id, subscribeCallback);\n        return ()=>{\n            _lib_pocketbase__WEBPACK_IMPORTED_MODULE_3__.pb.collection(\"likes\").unsubscribe(\"*\");\n        };\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        async function getLikes() {\n            engages.map((like)=>setLikes(...likes, like));\n        }\n        getLikes();\n    }, [\n        engages\n    ]);\n    //\n    async function handleLike() {\n        const data = {\n        };\n        const record = await _lib_pocketbase__WEBPACK_IMPORTED_MODULE_3__.pb.collection(\"likes\").update(engages.id, data);\n        setHearted(!hearted);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-stone-700 rounded-2xl my-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center gap-2 p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 rounded-full\"\n                        }, void 0, false, {\n                            fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: postInfo.username\n                        }, void 0, false, {\n                            fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"\".concat(sth),\n                            alt: \"food\",\n                            width: 500,\n                            height: 500\n                        }, void 0, false, {\n                            fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bg-black opacity-0 hover:opacity-70 p-4 top-0 left-0 h-full w-full\",\n                            children: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, laboriosam!\"\n                        }, void 0, false, {\n                            fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between items-center px-2 py-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-2 items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    size: 30,\n                                    className: \"cursor-pointer \".concat(hearted ? \"text-red-400\" : \"\"),\n                                    onClick: handleLike\n                                }, void 0, false, {\n                                    fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    size: 30\n                                }, void 0, false, {\n                                    fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(phosphor_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            size: 30,\n                            className: \"cursor-pointer \".concat(saved ? \"text-yellow-400\" : \"\"),\n                            onClick: ()=>setSaved(!saved)\n                        }, void 0, false, {\n                            fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"font-semibold pl-3 pb-2\",\n                    children: [\n                        likes,\n                        \" likes\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/thaleous/Documents/recipe/src/components/Post.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(Post, \"MnurMGIwy//XGvGfDZMLfqm6JIg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3JjL2NvbXBvbmVudHMvUG9zdC50c3g/ZDdjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQm9va21hcmtTaW1wbGUsIENoYXRDaXJjbGUsIEhlYXJ0IH0gZnJvbSBcInBob3NwaG9yLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBwYiB9IGZyb20gXCJAL2xpYi9wb2NrZXRiYXNlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbnR5cGUgUG9zdFByb3BzID0ge1xuICBwb3N0OiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIGZvb2Q6IHN0cmluZztcbiAgICBjb21tZW50czogc3RyaW5nXG4gIH07XG4gIGVuZ2FnZXM6IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5iX2xpa2VzOiBudW1iZXI7XG4gICAgdXNlcnM6IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0LCBlbmdhZ2VzIH06IGFueSkge1xuXG4gIGNvbnNvbGUubG9nKHBvc3QpXG4gIGNvbnN0IFtoZWFydGVkLCBzZXRIZWFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NhdmVkLCBzZXRTYXZlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwb3N0SW5mbywgc2V0UG9zdEluZm9dID0gdXNlU3RhdGUocG9zdCk7XG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zb2xlLmxvZyhlbmdhZ2VzKVxuXG4gIGNvbnN0IHN0aCA9IGBodHRwOi8vMTI3LjAuMC4xOjgwOTAvYXBpL2ZpbGVzL3Bvc3RzLyR7cG9zdC5pZH0vJHtwb3N0LmZvb2R9YDtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgLy9zdWJzY3JpYmVzIHRvIGNoYW5nZXNcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN1YnNjcmliZUNhbGxiYWNrID0gKGU6IGFueSApID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGUucmVjb3JkKVxuICAgICAgXG4gICAgICAgIHNldExpa2VzKGUucmVjb3JkLm5iX2xpa2VzKTtcbiAgXG4gICAgfTtcblxuICAgIHBiLmNvbGxlY3Rpb24oXCJsaWtlc1wiKS5zdWJzY3JpYmUoZW5nYWdlcy5pZCwgc3Vic2NyaWJlQ2FsbGJhY2spO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHBiLmNvbGxlY3Rpb24oXCJsaWtlc1wiKS51bnN1YnNjcmliZShcIipcIik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TGlrZXMoKSB7XG4gICAgICBlbmdhZ2VzLm1hcCgobGlrZTogbnVtYmVyKSA9PiAoXG4gICAgICAgIHNldExpa2VzKC4uLmxpa2VzLCBsaWtlKVxuICAgICAgKSlcbiAgICB9XG4gICAgZ2V0TGlrZXMoKVxuICB9LFtlbmdhZ2VzXSlcblxuICAvL1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUxpa2UoKSB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIC8vIHVzZXJzOiBcIkpTT05cIixcbiAgICAgIC8vIG5iX2xpa2VzOiBsaWtlcyArIDEsXG4gICAgfTtcblxuICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IHBiLmNvbGxlY3Rpb24oXCJsaWtlc1wiKS51cGRhdGUoZW5nYWdlcy5pZCwgZGF0YSk7XG4gICAgc2V0SGVhcnRlZCghaGVhcnRlZCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctc3RvbmUtNzAwIHJvdW5kZWQtMnhsIG15LTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHAtNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxuICAgICAgICAgIDxoMz57cG9zdEluZm8udXNlcm5hbWV9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17YCR7c3RofWB9XG4gICAgICAgICAgICBhbHQ9XCJmb29kXCJcbiAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cInJvdW5kZWQtdC14bFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJnLWJsYWNrIG9wYWNpdHktMCBob3ZlcjpvcGFjaXR5LTcwIHAtNCB0b3AtMCBsZWZ0LTAgaC1mdWxsIHctZnVsbFwiPlxuICAgICAgICAgICAgTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEN1bSxcbiAgICAgICAgICAgIGxhYm9yaW9zYW0hXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBweC0yIHB5LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8SGVhcnRcbiAgICAgICAgICAgICAgc2l6ZT17MzB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGN1cnNvci1wb2ludGVyICR7aGVhcnRlZCA/IFwidGV4dC1yZWQtNDAwXCIgOiBcIlwifWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpa2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+MTAwPC9oMz4gKi99XG4gICAgICAgICAgICA8Q2hhdENpcmNsZSBzaXplPXszMH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Qm9va21hcmtTaW1wbGVcbiAgICAgICAgICAgIHNpemU9ezMwfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgJHtzYXZlZCA/IFwidGV4dC15ZWxsb3ctNDAwXCIgOiBcIlwifWB9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTYXZlZCghc2F2ZWQpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBwbC0zIHBiLTJcIj57bGlrZXN9IGxpa2VzPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiQm9va21hcmtTaW1wbGUiLCJDaGF0Q2lyY2xlIiwiSGVhcnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInBiIiwidXNlUm91dGVyIiwiUG9zdCIsInBvc3QiLCJlbmdhZ2VzIiwiY29uc29sZSIsImxvZyIsImhlYXJ0ZWQiLCJzZXRIZWFydGVkIiwic2F2ZWQiLCJzZXRTYXZlZCIsInBvc3RJbmZvIiwic2V0UG9zdEluZm8iLCJsaWtlcyIsInNldExpa2VzIiwic3RoIiwiaWQiLCJmb29kIiwicm91dGVyIiwic3Vic2NyaWJlQ2FsbGJhY2siLCJlIiwicmVjb3JkIiwibmJfbGlrZXMiLCJjb2xsZWN0aW9uIiwic3Vic2NyaWJlIiwidW5zdWJzY3JpYmUiLCJnZXRMaWtlcyIsIm1hcCIsImxpa2UiLCJoYW5kbGVMaWtlIiwiZGF0YSIsInVwZGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwidXNlcm5hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Post.tsx\n"));

/***/ })

});