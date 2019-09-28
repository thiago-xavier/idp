(window["webpackJsonpfrontend"] = window["webpackJsonpfrontend"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n*{\n  font-family: 'Muli', sans-serif;\n\tpadding: 0 ;\n\tmargin: 0 ;\n\tborder: 0;\n  text-decoration: none !important;\n}\n\nhtml, body, #root {\n  margin: 0;\n  height: 100%;\n}\n\nhtml{overflow-x: hidden;}\n\n\nbody {\n\tfont-size:20px;\n\tfont-weight: 400;\n\tbackground: #fff;\n    color: #606060;\n}\n\n\nh1{\n\tfont-weight:800;\n\tfont-size: 50px;\n    color: #007aa0;\n    text-transform: lowercase;\n}\n\nh5{\n    font-size: 40px;\n    font-weight:700;\n}\n\n\n\n.det-titulo::after {\n    content: \"\";\n    display: block;\n    width: 350px;\n    height: 3px;\n    left: 0px;\n    background-position: 0 0;\n    background-repeat: no-repeat;\n    margin: 10px auto 0 0;\n    background-color: #007aa0;\n    color: #007aa0;\n}\n\n\n\np{\n    line-height: 26px;\n}\n\n\n\nhr{\n\twidth: 100%;\n\tbackground: #c177b2;\n\ttext-align: center;\n\tmargin: 0 auto 30px auto;\n}\n\n\nstrong{font-weight: 800 !important;}\n\n.py-5{padding: 50px 0;}\n\n\n/*  HEADER ------------------------------------ */\n\n\nheader {\n\twidth: 100%;\n    margin: 0 auto;\n\tposition: relative;\n\tz-index: 10;\n}\n            \nheader img {\n\twidth:  100%;\n\theight: 100%;\n\tobject-fit: cover;\n\tobject-position: top center;\n\n}\n\n\n\n\n/*  CONTEÚDO  ------------------------------------ */\n\n.bg-sobre{\n    background: linear-gradient(to right, #18aac3, #017da2);\n    color: #fff;\n}\n\n.titulo-sobre{\n    transform: rotate(-90deg);\n    color: #fff;\n    position: absolute;\n    bottom: 150px;\n    left: -150px;\n}\n\n\n.det-sobre::after {\n    content: \"\";\n    display: block;\n    width: 140px;\n    height: 4px;\n    left: 0px;\n    background-position: 0 0;\n    background-repeat: no-repeat;\n    margin: -20px 0px 0 -160px;\n    background-color: #fff;\n    color: #fff;\n}\n\n.bg-img-alunos{\n    background: url(https://paulajunior.com/dev/opportunities/wp-content/uploads/2019/09/img-bg-alunos2.jpg) no-repeat left center;\n    background-size: cover;\n}\n\n\n.bg-empresas{\n    background: #e6e6e6;\n}\n\n\n.borda-inscricao{\n    border: solid 5px #007aa0; \n    border-radius: 0;\n    width: 400px;\n    height: 400px;\n}\n\n.titulo-inscricao{\n    color: inherit;\n}\n\n\n\n\n/*  BOTÕES ------------------------------------ */\n\n\n.bt {\n    border: solid 2px #007aa0;\n    padding: 5px 50px;\n    color: #fff !important;\n    text-align: center;\n    font-weight: 300;\n    text-transform: lowercase;\n    transition: background-color 0.5s, transform 0.5s;\n    border-radius: 100px;\n    background: #007aa0;\n    font-size: 28px;\n}\n\n.bt:hover {\n    border: solid 2px #007aa0;\n    color: #007aa0 !important;\n    background: none;\n}\n\n\n\n\n/*  FOOTER ------------------------------------ */\n\n\n.bg-mapa{\n    background: #263449;\n    color: #fff;\n    padding-top: 100px !important;\n    letter-spacing: 3px;\n}\n\n\nfooter{\n\tbackground: #808080;\n\t\tcolor: #fff;\n}\n\n\nfooter p{\n\tfont-size: 12px;\n\tline-height: 20px;\n\tmargin-top: 10px;\n\ttext-transform: uppercase;\n\tletter-spacing: 3px;\n\n\n}\n\n.wrap_redes_sociais{\n\tmargin-top: 10px;\n\twidth: max-content;\n}\n\n.redes_sociais{\n\tfloat: right;\n    margin: 0 10px;\n}\n\n.id_idp{\n\tfloat:left;\n\tpadding-right: 20px;\n}\n\n.redes_sociais:last-child{margin-left: 0;}\n\n\n\n/* RESPONSIVIDADE ------------------------------------------------------------- */\n\n\n@media only screen and (min-width:1366px) and (max-width:1919px) {\n}\n\n\n@media only screen and (min-width:961px) and (max-width:1365px) {\n}\n\n\n/* Estilo para tablet */\n@media only screen and (min-width:481px) and (max-width:960px) {\n    .bg-img-alunos { background-size: contain;}\n    .borda-inscricao, .det-titulo::after{width:auto;}\n}\n\n\n/* Estilo para smartphone */\n@media only screen and (max-width:480px) {\n    *{text-align: center;}\n    .titulo-sobre {transform: none; position: initial; bottom: auto; left: auto;}\n    .bg-img-alunos{background: url(https://paulajunior.com/dev/opportunities/wp-content/uploads/2019/09/img-bg-alunos2-responsivo.jpg) no-repeat top center;}\n    .borda-inscricao, .det-titulo::after{width:auto;}\n\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./fonts/hurmegeometricsans1_hairline-webfont.woff2 */ "./src/fonts/hurmegeometricsans1_hairline-webfont.woff2"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ./fonts/hurmegeometricsans1_hairline-webfont.woff */ "./src/fonts/hurmegeometricsans1_hairline-webfont.woff"));

// Module
exports.push([module.i, "@font-face {\n  font-family: 'hurme_geometric_sans_hairline';\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format('woff2'),\n       url(" + ___CSS_LOADER_URL___1___ + ") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  font-family: 'hurme_geometric_sans_hairline';\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/CadastroAluno.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/CadastroAluno.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".container {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.container form, h1 {\r\n    width: 100%;\r\n    max-width: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.container form input {\r\n    margin-top: 20px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    height: 48px;\r\n    padding: 0 20px;\r\n    font-size: 16px;\r\n    color: #666;\r\n}\r\n\r\n.identificaForm section {\r\n    height: 100vh;\r\n    padding: 2vw;\r\n    font-size: 4vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/LandingPage.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\r\n    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n    font-weight: 700;\r\n}\r\n\r\n.divisao-conteudo section  {\r\n    height: 100vh;\r\n    padding: 2vw;\r\n    font-size: 4vw;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\nheader.masthead {\r\n    position: relative;\r\n    background-color: #343a40;\r\n    background-size: cover;\r\n    padding-top: 8rem;\r\n    padding-bottom: 8rem;\r\n}\r\n\r\nheader.masthead .overlay {\r\n    position: absolute;\r\n    background-color: #212529;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0.3;\r\n}\r\n\r\nheader.masthead h1 {\r\n    font-size: 2rem;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    header.masthead {\r\n        padding-top: 12rem;\r\n        padding-bottom: 12rem;\r\n    }\r\n    header.masthead h1 {\r\n        font-size: 3rem;\r\n    }\r\n}\r\n\r\n.showcase .showcase-text {\r\n    padding: 3rem;\r\n}\r\n\r\n.showcase .showcase-img {\r\n    min-height: 30rem;\r\n    background-size: cover;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .showcase .showcase-text {\r\n        padding: 7rem;\r\n    }\r\n}\r\n\r\n.features-icons {\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem;\r\n}\r\n\r\n.features-icons .features-icons-item {\r\n    max-width: 20rem;\r\n}\r\n\r\n.features-icons .features-icons-item .features-icons-icon {\r\n    height: 7rem;\r\n}\r\n\r\n.features-icons .features-icons-item .features-icons-icon i {\r\n    font-size: 4.5rem;\r\n}\r\n\r\n.features-icons .features-icons-item:hover .features-icons-icon i {\r\n    font-size: 5rem;\r\n}\r\n\r\n.testimonials {\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem;\r\n}\r\n\r\n.testimonials .testimonial-item {\r\n    max-width: 18rem;\r\n}\r\n\r\n.testimonials .testimonial-item img {\r\n    max-width: 12rem;\r\n    box-shadow: 0px 5px 5px 0px #adb5bd;\r\n}\r\n\r\n.call-to-action {\r\n    position: relative;\r\n    background-color: #343a40;\r\n    background-size: cover;\r\n    padding-top: 7rem;\r\n    padding-bottom: 7rem;\r\n}\r\n\r\n.call-to-action .overlay {\r\n    position: absolute;\r\n    background-color: #212529;\r\n    height: 100%;\r\n    width: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0.3;\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Login.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/pages/Login.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".login-container {\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.login-container form, h1 {\r\n    width: 100%;\r\n    max-width: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.login-container form input{\r\n    margin-top: 20px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 4px;\r\n    height: 48px;\r\n    padding: 0 20px;\r\n    font-size: 16px;\r\n    color: #666;\r\n}\r\n\r\n.login-container form input::placeholder {\r\n    color: #999;\r\n}\r\n\r\n.login-container form button {\r\n    margin-top: 10px;\r\n}\r\n\r\n.login-container form img {\r\n    align-items: flex-start;\r\n    height: 100px;\r\n}\r\n\r\n.login-container form button {\r\n    margin-top: 20px;\r\n    border: 0px;\r\n    border-radius: 4px;\r\n    height: 48px;\r\n    font-size: 16px;\r\n    background: #DF4723;\r\n    font-weight: bold;\r\n    color: #FFF;\r\n    cursor: pointer;\r\n}", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/routes.js");
var _jsxFileName = "C:\\Users\\thiago.xavier\\Desktop\\idp\\frontend\\src\\App.js";




function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/IDP Opportunities - Branco.svg":
/*!***************************************************!*\
  !*** ./src/assets/IDP Opportunities - Branco.svg ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/IDP Opportunities - Branco.e67cb112.svg";

/***/ }),

/***/ "./src/fonts/hurmegeometricsans1_hairline-webfont.woff":
/*!*************************************************************!*\
  !*** ./src/fonts/hurmegeometricsans1_hairline-webfont.woff ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/hurmegeometricsans1_hairline-webfont.161324e8.woff";

/***/ }),

/***/ "./src/fonts/hurmegeometricsans1_hairline-webfont.woff2":
/*!**************************************************************!*\
  !*** ./src/fonts/hurmegeometricsans1_hairline-webfont.woff2 ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/hurmegeometricsans1_hairline-webfont.251ad328.woff2";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "C:\\Users\\thiago.xavier\\Desktop\\idp\\frontend\\src\\index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/CadastroAluno.css":
/*!*************************************!*\
  !*** ./src/pages/CadastroAluno.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./CadastroAluno.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/CadastroAluno.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./CadastroAluno.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/CadastroAluno.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./CadastroAluno.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/CadastroAluno.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/CadastroAluno.js":
/*!************************************!*\
  !*** ./src/pages/CadastroAluno.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CadastroAluno; });
/* harmony import */ var C_Users_thiago_xavier_Desktop_idp_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CadastroAluno_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CadastroAluno.css */ "./src/pages/CadastroAluno.css");
/* harmony import */ var _CadastroAluno_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CadastroAluno_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ "./src/services/api.js");

var _jsxFileName = "C:\\Users\\thiago.xavier\\Desktop\\idp\\frontend\\src\\pages\\CadastroAluno.js";



function CadastroAluno({
  history
}) {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState2 = Object(C_Users_thiago_xavier_Desktop_idp_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        user = _useState2[0],
        setUser = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState4 = Object(C_Users_thiago_xavier_Desktop_idp_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        name = _useState4[0],
        setName = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState6 = Object(C_Users_thiago_xavier_Desktop_idp_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        password = _useState6[0],
        setPassword = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState8 = Object(C_Users_thiago_xavier_Desktop_idp_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        email = _useState8[0],
        setEmail = _useState8[1];

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__["default"].post('/alunos', {
      name,
      user,
      password,
      email
    });
    const _id = response.data._id;
    console.log(response);
    console.log("Nome do usuario: ".concat(user));
    history.push("/alunos/".concat(_id));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    class: "navbar navbar-expand-sm bg-white navbar-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    class: "navbar-brand",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Logo"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    class: "navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    class: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    class: "nav-link",
    href: "/cadastro-aluno",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Candidato")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    class: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    class: "nav-link",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Empresa")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    class: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    class: "nav-link",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Banco de Vagas")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    class: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    class: "nav-link",
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Login"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "form-group float-label-control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "Name",
    class: "form-control",
    value: name,
    onChange: e => setName(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "Username",
    class: "form-control",
    value: user,
    onChange: e => setUser(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "Password",
    class: "form-control",
    value: password,
    onChange: e => setPassword(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "email",
    type: "email",
    class: "form-control",
    value: email,
    onChange: e => setEmail(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    class: "btn btn-primary",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Enviar")))));
}

/***/ }),

/***/ "./src/pages/LandingPage.css":
/*!***********************************!*\
  !*** ./src/pages/LandingPage.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./LandingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./LandingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./LandingPage.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/LandingPage.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/LandingPage.js":
/*!**********************************!*\
  !*** ./src/pages/LandingPage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LandingPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LandingPage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingPage.css */ "./src/pages/LandingPage.css");
/* harmony import */ var _LandingPage_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_LandingPage_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\thiago.xavier\\Desktop\\idp\\frontend\\src\\pages\\LandingPage.js";


function LandingPage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "divisao-conteudo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://paulajunior.com/dev/opportunities/wp-content/uploads/2019/09/bg-header.jpg",
    alt: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "py-5 bg-sobre",
    id: "sobre",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-md-9 ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    class: "titulo-sobre det-sobre mb-5 mb-md-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Sobre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "O IDP Opportunities \xE9 uma plataforma feita especialmente para os alunos IDP e nossas empresas parceiras. Nela disponibilizamos oportunidades em diferentes segmentos do meio jur\xEDdico para nossos alunos irem al\xE9m no mercado de trabalho. As empresas, por sua vez, t\xEAm a possibilidade de encontrar profissionais com a qualidade IDP, perfil e compet\xEAncias espec\xEDficas. A proposta da plataforma \xE9 fortalecer as rela\xE7\xF5es com empresas, p\xFAblicas ou privadas, para apoiar o desenvolvimento profissional de alunos e tamb\xE9m do mercado de trabalho. Na pr\xE1tica, todos ganham. Por meio da plataforma, fortalecemos o relacionamento com os escrit\xF3rios e empresas parceiras, facilitando a capta\xE7\xE3o direcionada de estagi\xE1rios e profissionais qualificados e apresentamos oportunidades reais para os nossos alunos, em um trabalho constante de melhoria de performance e desempenho profissional, que come\xE7a nas salas de aula, passa pelas oficinas e pelo Career Center e se consolida na JobFair e no IDP Opportunities. Cadastre-se e conhe\xE7a!"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "py-5 bg-mapa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "m-0 text-md-right text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "SEJA IDP")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "m-0 text-md-right text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.idp.edu.br/cursos/graduacao/",
    class: "text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "GRADUA\xC7\xC3O")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "m-0 text-md-right text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://posgraduacao.idp.edu.br",
    class: "text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "P\xD3S-GRADUA\xC7\xC3O")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "m-0 text-md-right text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.idp.edu.br/cursos/mestrado/",
    class: "text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "MESTRADO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "m-0 text-md-right text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://doutoradodireito.idp.edu.br/",
    class: "text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "DOUTORADO"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-md-5 mt-5 mt-md-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-md-4 mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Tel: (61) 3535-6565")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.instagram.com/sejaidp/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "<?php bloginfo('template_directory'); ?>/images/icone-instagram.png",
    class: "redes_sociais pl-2",
    alt: "instagram-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.facebook.com/sejaidp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "<?php bloginfo('template_directory'); ?>/images/icone-facebook.png",
    class: "redes_sociais",
    alt: "facebook-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "float-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "/sejaidp"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "SGAS Quadra 607, M\xF3dulo 49", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "Via L2 Sul, Bras\xEDlia-DF", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "CEP: 70200-670")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    id: "contato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-md-6 py-4 py-sm-4 py-md-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://www.idp.edu.br",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "<?php bloginfo('template_directory'); ?>/images/id-idp.png",
    class: "id_idp",
    alt: "idp-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    class: "float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "IDP \xA9 2019. TODOS OS DIREITOS RESERVADOS."))))));
}
;

/***/ }),

/***/ "./src/pages/Login.css":
/*!*****************************!*\
  !*** ./src/pages/Login.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Login.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Login.css",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Login.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/Login.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/pages/Login.js":
/*!****************************!*\
  !*** ./src/pages/Login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var C_Users_thiago_xavier_Desktop_idp_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.css */ "./src/pages/Login.css");
/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Login_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ "./src/services/api.js");
/* harmony import */ var _assets_IDP_Opportunities_Branco_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/IDP Opportunities - Branco.svg */ "./src/assets/IDP Opportunities - Branco.svg");
/* harmony import */ var _assets_IDP_Opportunities_Branco_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_IDP_Opportunities_Branco_svg__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\thiago.xavier\\Desktop\\idp\\frontend\\src\\pages\\Login.js";




function Login({
  history
}) {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState2 = Object(C_Users_thiago_xavier_Desktop_idp_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        username = _useState2[0],
        setUsername = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
        _useState4 = Object(C_Users_thiago_xavier_Desktop_idp_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        password = _useState4[0],
        setPassword = _useState4[1];

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__["default"].post('/alunos', {
      username
    });
    const _id = response.data._id;
    console.log(response);
    console.log("Nome do usuario: ".concat(username));
    console.log("A senha do usu\xE1rio: ".concat(password));
    history.push("/alunos/".concat(_id));
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "login-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _assets_IDP_Opportunities_Branco_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Idp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "Login",
    value: username,
    onChange: e => setUsername(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "password",
    placeholder: "Password",
    value: password,
    onChange: e => setPassword(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Enviar")));
}

/***/ }),

/***/ "./src/pages/Main.js":
/*!***************************!*\
  !*** ./src/pages/Main.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\thiago.xavier\\Desktop\\idp\\frontend\\src\\pages\\Main.js";

function Main({
  match
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar-pai",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "navbar-name",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, match.params.id));
}

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Login */ "./src/pages/Login.js");
/* harmony import */ var _pages_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Main */ "./src/pages/Main.js");
/* harmony import */ var _pages_CadastroAluno__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/CadastroAluno */ "./src/pages/CadastroAluno.js");
/* harmony import */ var _pages_LandingPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/LandingPage */ "./src/pages/LandingPage.js");
var _jsxFileName = "C:\\Users\\thiago.xavier\\Desktop\\idp\\frontend\\src\\routes.js";






function Routes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    exact: true,
    component: _pages_LandingPage__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    path: "/alunos/:id",
    component: _pages_Main__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/cadastro-aluno",
    component: _pages_CadastroAluno__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/login",
    component: _pages_Login__WEBPACK_IMPORTED_MODULE_2__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:3000/'
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\thiago.xavier\Desktop\idp\frontend\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\thiago.xavier\Desktop\idp\frontend\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map