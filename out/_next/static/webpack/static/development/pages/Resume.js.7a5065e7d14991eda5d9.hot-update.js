webpackHotUpdate("static/development/pages/Resume.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _styles_css_site_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/css/site.css */ "./styles/css/site.css");
/* harmony import */ var _styles_css_site_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css_site_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _assets_background_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/background.png */ "./assets/background.png");
/* harmony import */ var _assets_background_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_background_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _MobileNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MobileNav */ "./components/MobileNav.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/home/banjoe/Documents/Projects/jowi-dev.github.io/components/Layout.js";






var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Layout__Wrapper",
  componentId: "sc-1vk1l3g-0"
})(["display:grid;grid-template-columns:1fr;grid-template-rows:10vh auto 10vh;min-height:100vh;width:100%;margin:0;background-image:url(", ");z-index:0;"], _assets_background_png__WEBPACK_IMPORTED_MODULE_9___default.a);
var Body = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Layout__Body",
  componentId: "sc-1vk1l3g-1"
})(["grid-row:2/4;background:", ";"], _styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"].transparent);


var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_7__["ThemeProvider"], {
        theme: _styles_theme__WEBPACK_IMPORTED_MODULE_8__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        id: "outer-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_styles_theme__WEBPACK_IMPORTED_MODULE_8__["GlobalStyle"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_MobileNav__WEBPACK_IMPORTED_MODULE_10__["default"], {
        pageWrapId: "page-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Wrapper, {
        id: "page-wrap",
        onScroll: this.handleScroll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.props.children))));
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(e) {
      console.log('scrolling');
      console.log(e);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);



/***/ })

})
//# sourceMappingURL=Resume.js.7a5065e7d14991eda5d9.hot-update.js.map