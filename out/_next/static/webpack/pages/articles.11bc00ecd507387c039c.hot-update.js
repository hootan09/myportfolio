webpackHotUpdate_N_E("pages/articles",{

/***/ "./pages/articles.jsx":
/*!****************************!*\
  !*** ./pages/articles.jsx ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ArticleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ArticleCard */ "./components/ArticleCard.jsx");
/* harmony import */ var _styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/ArticlesPage.module.css */ "./styles/ArticlesPage.module.css");
/* harmony import */ var _styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\niki\\Desktop\\vscode-portfolio-main\\pages\\articles.jsx",
    _this = undefined;




var ArticlesPage = function ArticlesPage(_ref) {
  var articles = _ref.articles;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: ["Recent Posts from", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://virgool.io/@hootan09",
        target: "_blank",
        rel: "noopener",
        className: _styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.underline,
        children: "virgool.io"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_ArticlesPage_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
      children: articles.map(function (article) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ArticleCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          article: article.post
        }, article.post.id, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
}; // export async function getStaticProps() {
//   const res = await fetch(
//     'https://virgool.io/api/v1.1/feeds?type=profile&username=hootan09&page=1',
//     {
//       headers: {
//         // 'api-key': process.env.DEV_TO_API_KEY,
//       },
//     }
//   );
//   const data = await res.json();
//   return {
//     props: { title: 'Articles', articles: data },
//     revalidate: 60,
//   };
// }


_c = ArticlesPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (ArticlesPage);

var _c;

$RefreshReg$(_c, "ArticlesPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXJ0aWNsZXMuanN4Il0sIm5hbWVzIjpbIkFydGljbGVzUGFnZSIsImFydGljbGVzIiwic3R5bGVzIiwidW5kZXJsaW5lIiwiY29udGFpbmVyIiwibWFwIiwiYXJ0aWNsZSIsInBvc3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3JDLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxzQ0FDb0IsR0FEcEIsZUFFRTtBQUNFLFlBQUksRUFBQyw4QkFEUDtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBR0UsV0FBRyxFQUFDLFVBSE47QUFJRSxpQkFBUyxFQUFFQyxzRUFBTSxDQUFDQyxTQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBWUU7QUFBSyxlQUFTLEVBQUVELHNFQUFNLENBQUNFLFNBQXZCO0FBQUEsZ0JBQ0dILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLE9BQUQ7QUFBQSw0QkFDWixxRUFBQywrREFBRDtBQUFtQyxpQkFBTyxFQUFFQSxPQUFPLENBQUNDO0FBQXBELFdBQWtCRCxPQUFPLENBQUNDLElBQVIsQ0FBYUMsRUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEWTtBQUFBLE9BQWI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkY7QUFBQSxrQkFERjtBQW9CRCxDQXJCRCxDLENBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBdENNUixZOztBQStDU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJ0aWNsZXMuMTFiYzAwZWNkNTA3Mzg3YzAzOWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcnRpY2xlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0FydGljbGVDYXJkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FydGljbGVzUGFnZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IGdldEFydGljbGVzIH0gZnJvbSAnLi9hcGkvYXJ0aWNsZXMnO1xuXG5jb25zdCBBcnRpY2xlc1BhZ2UgPSAoeyBhcnRpY2xlcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMz5cbiAgICAgICAgUmVjZW50IFBvc3RzIGZyb217JyAnfVxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3Zpcmdvb2wuaW8vQGhvb3RhbjA5XCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51bmRlcmxpbmV9XG4gICAgICAgID5cbiAgICAgICAgICB2aXJnb29sLmlvXG4gICAgICAgIDwvYT5cbiAgICAgIDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHthcnRpY2xlcy5tYXAoKGFydGljbGUpID0+IChcbiAgICAgICAgICA8QXJ0aWNsZUNhcmQga2V5PXthcnRpY2xlLnBvc3QuaWR9IGFydGljbGU9e2FydGljbGUucG9zdH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4vLyAgICAgJ2h0dHBzOi8vdmlyZ29vbC5pby9hcGkvdjEuMS9mZWVkcz90eXBlPXByb2ZpbGUmdXNlcm5hbWU9aG9vdGFuMDkmcGFnZT0xJyxcbi8vICAgICB7XG4vLyAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgIC8vICdhcGkta2V5JzogcHJvY2Vzcy5lbnYuREVWX1RPX0FQSV9LRVksXG4vLyAgICAgICB9LFxuLy8gICAgIH1cbi8vICAgKTtcblxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczogeyB0aXRsZTogJ0FydGljbGVzJywgYXJ0aWNsZXM6IGRhdGEgfSxcbi8vICAgICByZXZhbGlkYXRlOiA2MCxcbi8vICAgfTtcbi8vIH1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBhcnRpY2xlcyA9IGdldEFydGljbGVzKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgdGl0bGU6ICdBcnRpY2xlcycsIGFydGljbGVzOiBhcnRpY2xlcy5wb3N0cyB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9