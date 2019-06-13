webpackHotUpdate("static/development/pages/About.js",{

/***/ "./components/MobileNav.js":
/*!*********************************!*\
  !*** ./components/MobileNav.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileNav; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Link */ "./styles/Link.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");





var _jsxFileName = "/Users/Roodey/Documents/Projects/Portfolio/web/components/MobileNav.js";







var displayBlock = {
  display: 'block',
  color: _styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].white
};
var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '36px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: _styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].white
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    display: 'block',
    color: _styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].white,
    padding: '0.8em'
  },
  bmItem: {
    display: 'block',
    color: _styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"].white
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

var MobileNav =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MobileNav, _Component);

  function MobileNav() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MobileNav);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MobileNav).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MobileNav, [{
    key: "showSettings",
    value: function showSettings(e) {
      e.preventDefault();
    }
  }, {
    key: "render",
    value: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__["slide"], {
        pageWrapId: 'page-wrap',
        outerContainerId: 'outer-container',
        styles: styles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        id: "home",
        className: "menu-item",
        style: displayBlock,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/Resume",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        id: "resume",
        className: "menu-item",
        style: displayBlock,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Resume")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_Link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/About",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        id: "about",
        className: "menu-item",
        style: displayBlock,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "About")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: "menu-item",
        href: "https://github.com/joey8williams",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faGithub"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), " Github"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/joey-williams-5a279187/",
        target: "blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faLinkedin"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), " LinkedIn"));
    }
  }]);

  return MobileNav;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ })

})
//# sourceMappingURL=About.js.2c3563da826a7a4f6f1c.hot-update.js.map