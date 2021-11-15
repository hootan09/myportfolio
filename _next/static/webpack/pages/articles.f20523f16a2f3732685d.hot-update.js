webpackHotUpdate_N_E("pages/articles",{

/***/ "./components/ArticleCard.jsx":
/*!************************************!*\
  !*** ./components/ArticleCard.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_PencilIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/icons/PencilIcon */ "./components/icons/PencilIcon.jsx");
/* harmony import */ var _components_icons_HeartIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/icons/HeartIcon */ "./components/icons/HeartIcon.jsx");
/* harmony import */ var _components_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/icons/CommentIcon */ "./components/icons/CommentIcon.jsx");
/* harmony import */ var _styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/ArticleCard.module.css */ "./styles/ArticleCard.module.css");
/* harmony import */ var _styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\niki\\Desktop\\vscode-portfolio-main\\components\\ArticleCard.jsx",
    _this = undefined;

// import Image from 'next/image';





var ArticleCard = function ArticleCard(_ref) {
  var article = _ref.article;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    href: article.links.href,
    target: "_blank",
    rel: "noopener",
    className: _styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: article.image,
      alt: article.title,
      width: 300,
      height: 150
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: _styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title,
        children: article.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: article.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.stats,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.stat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_icons_PencilIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: _styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          style: {
            direction: 'rtl'
          },
          children: article.created_at
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 50
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.stat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_icons_HeartIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: _styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this), " ", article.likes_count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.stat,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: _styles_ArticleCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.icon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this), " ", article.comments_count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, _this);
};

_c = ArticleCard;
/* harmony default export */ __webpack_exports__["default"] = (ArticleCard);

var _c;

$RefreshReg$(_c, "ArticleCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRpY2xlQ2FyZC5qc3giXSwibmFtZXMiOlsiQXJ0aWNsZUNhcmQiLCJhcnRpY2xlIiwibGlua3MiLCJocmVmIiwic3R5bGVzIiwiY29udGFpbmVyIiwiaW1hZ2UiLCJ0aXRsZSIsImNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsInN0YXRzIiwic3RhdCIsImljb24iLCJkaXJlY3Rpb24iLCJjcmVhdGVkX2F0IiwibGlrZXNfY291bnQiLCJjb21tZW50c19jb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWlCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ25DLHNCQUNFO0FBQ0UsUUFBSSxFQUFFQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsSUFEdEI7QUFFRSxVQUFNLEVBQUMsUUFGVDtBQUdFLE9BQUcsRUFBQyxVQUhOO0FBSUUsYUFBUyxFQUFFQyxxRUFBTSxDQUFDQyxTQUpwQjtBQUFBLDRCQU1FO0FBQ0UsU0FBRyxFQUFFSixPQUFPLENBQUNLLEtBRGY7QUFFRSxTQUFHLEVBQUVMLE9BQU8sQ0FBQ00sS0FGZjtBQUdFLFdBQUssRUFBRSxHQUhUO0FBSUUsWUFBTSxFQUFFO0FBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBWUU7QUFBSyxlQUFTLEVBQUVILHFFQUFNLENBQUNJLE9BQXZCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFSixxRUFBTSxDQUFDRyxLQUF0QjtBQUFBLGtCQUE4Qk4sT0FBTyxDQUFDTTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFBLGtCQUFJTixPQUFPLENBQUNRO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGLGVBZ0JFO0FBQUssZUFBUyxFQUFFTCxxRUFBTSxDQUFDTSxLQUF2QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRU4scUVBQU0sQ0FBQ08sSUFBdkI7QUFBQSxnQ0FDRSxxRUFBQyxvRUFBRDtBQUFZLG1CQUFTLEVBQUVQLHFFQUFNLENBQUNRO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsb0JBQ3lDO0FBQUcsZUFBSyxFQUFFO0FBQUNDLHFCQUFTLEVBQUU7QUFBWixXQUFWO0FBQUEsb0JBQStCWixPQUFPLENBQUNhO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFVixxRUFBTSxDQUFDTyxJQUF2QjtBQUFBLGdDQUNFLHFFQUFDLG1FQUFEO0FBQVcsbUJBQVMsRUFBRVAscUVBQU0sQ0FBQ1E7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixPQUN5Q1gsT0FBTyxDQUFDYyxXQURqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRixlQU9FO0FBQUssaUJBQVMsRUFBRVgscUVBQU0sQ0FBQ08sSUFBdkI7QUFBQSxnQ0FDRSxxRUFBQyxxRUFBRDtBQUFhLG1CQUFTLEVBQUVQLHFFQUFNLENBQUNRO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsT0FDMkNYLE9BQU8sQ0FBQ2UsY0FEbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBL0JEOztLQUFNaEIsVztBQWlDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXJ0aWNsZXMuZjIwNTIzZjE2YTJmMzczMjY4NWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBQZW5jaWxJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbnMvUGVuY2lsSWNvbic7XG5pbXBvcnQgSGVhcnRJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvaWNvbnMvSGVhcnRJY29uJztcbmltcG9ydCBDb21tZW50SWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2ljb25zL0NvbW1lbnRJY29uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FydGljbGVDYXJkLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBBcnRpY2xlQ2FyZCA9ICh7IGFydGljbGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhXG4gICAgICBocmVmPXthcnRpY2xlLmxpbmtzLmhyZWZ9XG4gICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfVxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXthcnRpY2xlLmltYWdlfVxuICAgICAgICBhbHQ9e2FydGljbGUudGl0bGV9XG4gICAgICAgIHdpZHRoPXszMDB9XG4gICAgICAgIGhlaWdodD17MTUwfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2FydGljbGUudGl0bGV9PC9oMz5cbiAgICAgICAgPHA+e2FydGljbGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0YXRzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdGF0fT5cbiAgICAgICAgICA8UGVuY2lsSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPiA8cCBzdHlsZT17e2RpcmVjdGlvbjogJ3J0bCd9fT57YXJ0aWNsZS5jcmVhdGVkX2F0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdH0+XG4gICAgICAgICAgPEhlYXJ0SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPiB7YXJ0aWNsZS5saWtlc19jb3VudH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3RhdH0+XG4gICAgICAgICAgPENvbW1lbnRJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+IHthcnRpY2xlLmNvbW1lbnRzX2NvdW50fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==