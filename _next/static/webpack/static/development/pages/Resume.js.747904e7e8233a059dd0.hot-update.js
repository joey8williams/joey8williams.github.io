webpackHotUpdate("static/development/pages/Resume.js",{

/***/ "./node_modules/react-pdf/dist/entry.js":
false,

/***/ "./node_modules/react-pdf/dist/entry.webpack.js":
/*!******************************************************!*\
  !*** ./node_modules/react-pdf/dist/entry.webpack.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "pdfjs", {
  enumerable: true,
  get: function get() {
    return _pdfjsDist.default;
  }
});
Object.defineProperty(exports, "Document", {
  enumerable: true,
  get: function get() {
    return _Document.default;
  }
});
Object.defineProperty(exports, "Outline", {
  enumerable: true,
  get: function get() {
    return _Outline.default;
  }
});
Object.defineProperty(exports, "Page", {
  enumerable: true,
  get: function get() {
    return _Page.default;
  }
});

var _pdfjsDist = _interopRequireDefault(__webpack_require__(/*! pdfjs-dist */ "./node_modules/pdfjs-dist/build/pdf.js"));

var _Document = _interopRequireDefault(__webpack_require__(/*! ./Document */ "./node_modules/react-pdf/dist/Document.js"));

var _Outline = _interopRequireDefault(__webpack_require__(/*! ./Outline */ "./node_modules/react-pdf/dist/Outline.js"));

var _Page = _interopRequireDefault(__webpack_require__(/*! ./Page */ "./node_modules/react-pdf/dist/Page.js"));

var _pdfWorkerEntry = _interopRequireDefault(__webpack_require__(/*! worker-loader!./pdf.worker.entry.js */ "./node_modules/worker-loader/dist/cjs.js!./node_modules/react-pdf/dist/pdf.worker.entry.js"));

var _utils = __webpack_require__(/*! ./shared/utils */ "./node_modules/react-pdf/dist/shared/utils.js");

// eslint-disable-next-line
if (_utils.isLocalFileSystem) {
  (0, _utils.warnOnDev)('You are running React-PDF from your local file system. PDF.js Worker may fail to load due to browser\'s security policies. If you\'re on Google Chrome, you can use --allow-file-access-from-files flag for debugging purposes.');
}

if (typeof window !== 'undefined' && 'Worker' in window) {
  _pdfjsDist.default.GlobalWorkerOptions.workerPort = new _pdfWorkerEntry.default();
}

/***/ }),

/***/ "./node_modules/worker-loader/dist/cjs.js!./node_modules/react-pdf/dist/pdf.worker.entry.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/worker-loader/dist/cjs.js!./node_modules/react-pdf/dist/pdf.worker.entry.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  return new Worker(__webpack_require__.p + "ce61632337b28cf640fe.worker.js");
};

/***/ }),

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
/* harmony import */ var react_pdf_dist_entry_webpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-pdf/dist/entry.webpack */ "./node_modules/react-pdf/dist/entry.webpack.js");
/* harmony import */ var react_pdf_dist_entry_webpack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_pdf_dist_entry_webpack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_Resume_pdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Resume.pdf */ "./assets/Resume.pdf");
/* harmony import */ var _assets_Resume_pdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_Resume_pdf__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/Roodey/Documents/Projects/Portfolio/web/pages/Resume.js";


 //import {Document} from 'react-pdf';



var Resume = function Resume() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pdf_dist_entry_webpack__WEBPACK_IMPORTED_MODULE_2__["Document"], {
    file: _assets_Resume_pdf__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Resume);

/***/ })

})
//# sourceMappingURL=Resume.js.747904e7e8233a059dd0.hot-update.js.map