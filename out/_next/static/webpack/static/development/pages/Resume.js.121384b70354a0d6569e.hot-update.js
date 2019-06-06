webpackHotUpdate("static/development/pages/Resume.js",{

/***/ "./pages/Resume.js":
/*!*************************!*\
  !*** ./pages/Resume.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _assets_resume_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/resume.png */ "./assets/resume.png");
/* harmony import */ var _assets_resume_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_resume_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_Paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Paragraph */ "./styles/Paragraph.js");
/* harmony import */ var _styles_MainHeading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/MainHeading */ "./styles/MainHeading.js");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/theme */ "./styles/theme.js");
/* harmony import */ var _styles_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Link */ "./styles/Link.js");
var _jsxFileName = "/Users/Roodey/Documents/Projects/Portfolio/web/pages/Resume.js";








var FlexView = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Resume__FlexView",
  componentId: "sc-1w5veqv-0"
})(["display:flex;flex-direction:row;flex-wrap:wrap;"]);
var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Resume__TextWrapper",
  componentId: "sc-1w5veqv-1"
})(["min-width:330px;max-width:40%;padding-left:10px;"]);
var ResumeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Resume__ResumeWrapper",
  componentId: "sc-1w5veqv-2"
})(["margin-top:20px;padding-right:40px;display:inline-block;max-width:600px;min-width:330px;"]);
var ResumeLanding = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "Resume__ResumeLanding",
  componentId: "sc-1w5veqv-3"
})(["width:100%;height:auto;border:1px solid ", ";"], _styles_theme__WEBPACK_IMPORTED_MODULE_6__["default"].black);

var Resume = function Resume() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexView, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResumeWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ResumeLanding, {
    src: _assets_resume_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_MainHeading__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "The Over-Architected Resume"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Every now and then, limitations can lead you down a new path. I am no expert at Word or any other application for formatting text, and previously I had tried my best to make a presentable resume only to come up short. This lead me down a path to try something new by leaning on more familiar languages: HTML, and CSS via", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "https://sass-lang.com/",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, " Sass")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "The resume is divided into 4 distinct sections: Contact, Employment, Education, and Skills. The entire page is laid with CSS grid. All sub sections are laid out with CSS grid as well, with exception to the Skills section."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "The Skills section has 3 categories that are spaced via flexbox. Each category contains child nodes with are spaced by yet another display:flex. I went this route over CSS grid because it made adding skills MUCH simpler."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "By this time I had all of my sections laid out, had all of their respective CSS divided into SCSS files and imported into a main file, and had spent more time than I care to admit refactoring reused SCSS into mixins. I decided to go one step further - why not add external libraries into the mix? Big thanks to ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "https://fontawesome.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "FontAwesome "), "and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "https://tachyons.io",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Tachyons CSS "), "to take care of all the icons and styling."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "While in hindsight I recognize I in fact did not choose the best tool for the job, it ended up being great experiment with HTML/CSS without the requirement of responsive design.. for now. It definitely wasn't the fast route, but it was a nice opportunity to take the road less traveled."))));
};

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ })

})
//# sourceMappingURL=Resume.js.121384b70354a0d6569e.hot-update.js.map