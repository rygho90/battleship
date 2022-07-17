/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n    box-sizing: border-box;\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    font-family: Arial, Helvetica, sans-serif;\\n    position: relative;\\n}\\n\\n.game-title {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100vw;\\n    font-size: 3rem;\\n    margin-top: 5%;\\n}\\n\\n.game-text {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100vw;\\n    font-size: 1.25rem;\\n    margin-top: 40px;\\n    height: 20px;\\n}\\n\\n.main {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    margin-top: 5%;\\n}\\n\\n.player-area {\\n    position: relative;\\n}\\n\\n.human-area {\\n    margin-left: 125px;\\n}\\n\\n.area-title,\\n.letter-list,\\n.number-list,\\n.ship-list {\\n    position: absolute;\\n}\\n\\n.area-title {\\n    top: -50px;\\n    width: 100%;\\n    text-align: center;\\n}\\n\\n.board {\\n    height: 400px;\\n    width: 400px;\\n    display: flex;\\n    flex-wrap: wrap;\\n}\\n\\n.board div {\\n    height: 40px;\\n    width: 40px;\\n    border: solid 1px black;\\n}\\n\\n.letter,\\n.number {\\n    height: 40px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    font-weight: bold;\\n    font-size: 1.5rem;\\n}\\n\\n.letter-list {\\n    left: -30px;\\n}\\n\\n.number-list {\\n    display: flex;\\n}\\n\\n.number {\\n    width: 40px;\\n}\\n\\n.ship-list {\\n    font-size: 1.25rem;\\n}\\n\\n.computer-area .ship-list {\\n    left: -220px;\\n    top: 10px;\\n}\\n\\n.human-area .ship-list {\\n    right: -200px;\\n    top: 10px;\\n}\\n\\n.ship-box {\\n    margin-bottom: 10px;\\n    border: solid 1px black;\\n    border-radius: 3px;\\n    padding: 10px;\\n}\\n\\n.ship-selected {\\n    border: solid 3px black;\\n    box-shadow: 2px 2px;\\n}\\n\\n.ship-alive {\\n    border: solid 2px green;\\n    background-color: lightgreen;\\n}\\n\\n.ship-sunk {\\n    border: solid 2px black;\\n    background-color: lightcoral;\\n}\\n\\n.start-btn {\\n    position: absolute;\\n    z-index: 10;\\n    padding: 25px 50px;\\n    font-size: 2rem;\\n    left: 40%;\\n    top: 50%;\\n    box-shadow: 5px 5px 5px;\\n    cursor: pointer;\\n}\\n\\n.hovering {\\n    background-color: goldenrod;\\n}\\n\\n.end-game {\\n    width: 300px;\\n    height: 150px;\\n    background-color: rgb(218, 218, 218);\\n    position: absolute;\\n    z-index: 10;\\n    font-size: 2rem;\\n    left: 50%;\\n    top: 50%;\\n    margin-left: -150px;\\n    margin-top: -75px;\\n    box-shadow: 5px 5px 5px;\\n\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.end-game button {\\n    padding: 10px;\\n    cursor: pointer;\\n    margin-top: 20px;\\n}\\n\\n.hide {\\n    display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\nconst startBtn = document.querySelector('[data-start-btn]')\nconst computerGrid = document.querySelector('[data-computer-grid]')\nconst humanGrid = document.querySelector('[data-human-grid]')\nlet computerSquares = []\nlet humanSquares = []\n\nconst displayController = (() => {\n    const createBoard = (grid, squares) => {\n        for (let i = 0; i < 100; i++) {\n            const square = document.createElement('div')\n            square.setAttribute('data-num', i)\n            squares.push(square)\n            grid.append(square)\n        }\n    }\n\n    const hideElement = (element) => {\n        element.classList.add('hide')\n    }\n\n    const renderHumanBoard = (board, squares) => {\n        board.filledCoords.forEach(coord => {\n            squares[coord].style.backgroundColor = 'black'\n            squares[coord].style.borderColor = 'white'\n        })\n        board.missedAttacks.forEach(coord => {\n            squares[coord].style.backgroundColor = 'blue'\n            squares[coord].style.borderColor = 'black'\n        })\n        board.hitAttacks.forEach(coord => {\n            squares[coord].style.backgroundColor = 'red'\n            squares[coord].style.borderColor = 'black'\n        })\n    }\n\n    const renderComputerBoard = (board, squares) => {\n        board.missedAttacks.forEach(coord => {\n            squares[coord].style.backgroundColor = 'blue'\n            squares[coord].style.borderColor = 'black'\n        })\n        board.hitAttacks.forEach(coord => {\n            squares[coord].style.backgroundColor = 'red'\n            squares[coord].style.borderColor = 'black'\n        })\n    }\n\n    const updateShipBoxes = (player) => {\n        player.shipList.forEach(ship => {\n            const box = document.querySelector(`[data-${player.type}-${ship.name}]`)\n            box.classList.remove('ship-sunk')\n            box.classList.remove('ship-alive')\n            box.classList.remove('ship-selected')\n\n            if (ship.isSunk()) {\n                box.classList.add('ship-sunk')\n                return\n            }\n            if (ship.placed) {\n                box.classList.add('ship-alive')\n                return\n            }\n            if (ship.selected) {\n                box.classList.add('ship-selected')\n            }\n        })\n    }\n\n    const showEndGameBox = (outcome) => {\n        const endGameBox = document.querySelector('[data-end-game]')\n        const endGameText = document.querySelector('[data-end-text]')\n        \n        endGameBox.classList.remove(\"hide\")\n        endGameText.textContent = `You ${outcome}!`\n    }\n   \n    return {\n        createBoard,\n        hideElement,\n        renderHumanBoard,\n        renderComputerBoard,\n        updateShipBoxes,\n        showEndGameBox\n    }\n})();\n\nconst gameController = (() => {\n    const computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    const humanBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n    const computer = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(computerBoard, 'computer')\n    const human = (0,_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(humanBoard, 'human')\n\n    const initializeGame = () => {\n        computer.populateShips()\n        human.populateShips()\n\n        computer.randomPlacement(computerBoard)\n        \n        //human.randomPlacement(humanBoard)\n\n        displayController.renderComputerBoard(computerBoard, computerSquares)\n        displayController.updateShipBoxes(computer)\n        displayController.renderHumanBoard(humanBoard, humanSquares)\n        displayController.updateShipBoxes(human)\n\n        placementRound()\n    }\n\n    const checkForWinner = () => {\n        let computerSunk = 0;\n        let humanSunk = 0;\n        computer.shipList.forEach(ship => {\n            if (ship.isSunk()) computerSunk++\n        })\n        if (computerSunk === 5) displayController.showEndGameBox('won')\n        human.shipList.forEach(ship => {\n            if (ship.isSunk()) humanSunk++\n        })\n        if (humanSunk === 5) displayController.showEndGameBox('lost')\n    }\n\n    const placementRound = () => {\n        console.log(human.shipList)\n        let placedNum = 0\n        let selectedShip = 0\n        let direction = 1\n        human.shipList[selectedShip].selected = true\n        displayController.updateShipBoxes(human)\n\n        const hoverEffect = (e) => {\n            const coord = parseInt(e.target.dataset.num)\n            const placementLength = human.shipList[selectedShip].shipLength\n            humanSquares.forEach(square => square.classList.remove('hovering'))\n\n            if (direction === 1) {\n                for (let i = coord; i < coord + placementLength; i++) {\n                    humanSquares[i].classList.add('hovering')\n                }\n            } else {\n                for (let i = coord; i < coord + (placementLength * 10); i+=10) {\n                    humanSquares[i].classList.add('hovering')\n                } \n            }\n            \n        }\n\n        const placeShip = (e) => {\n            const coord = parseInt(e.target.dataset.num)\n            let shipPlaced = humanBoard.placeShip(direction, human.shipList[selectedShip], coord)\n            if (shipPlaced != 'fail') {\n                displayController.renderHumanBoard(humanBoard, humanSquares)\n                selectedShip++\n                placedNum++\n                if (placedNum != human.shipList.length) human.shipList[selectedShip].selected = true\n                displayController.updateShipBoxes(human)\n                if (placedNum === human.shipList.length) {\n                    humanSquares.forEach(square => {\n                        square.removeEventListener('mouseover', hoverEffect)\n                    })\n            \n                    humanSquares.forEach(square => {\n                        square.removeEventListener('click', placeShip)\n                    })\n                    humanRound()\n                }\n                \n            }\n            \n        }\n\n        humanSquares.forEach(square => {\n            square.addEventListener('mouseover', hoverEffect)\n        })\n\n        humanSquares.forEach(square => {\n            square.addEventListener('click', placeShip)\n        })\n\n        document.addEventListener('keypress', (e) => {\n            if (e.key === 'r' || e.key === 'R') direction *= -1\n        })       \n    }\n\n    const humanRound = () => {\n\n        const hoverEffect = (e) => {\n            computerSquares.forEach(square => square.classList.remove('hovering'))\n            e.target.classList.add('hovering')\n        }\n\n        const shoot = (e) => {\n            const coord = parseInt(e.target.dataset.num)\n\n            if (!computerBoard.missedAttacks.includes(coord) && \n            !computerBoard.hitAttacks.includes(coord)) {\n                computerBoard.receiveAttack(parseInt(coord))\n                computer.shipList.forEach(ship => {\n                    ship.checkHit(parseInt(coord))\n                })\n                displayController.renderComputerBoard(computerBoard, computerSquares)\n                displayController.updateShipBoxes(computer)\n                checkForWinner()\n                computerSquares.forEach(square => {\n                    square.removeEventListener('mouseover', hoverEffect)\n                })\n        \n                computerSquares.forEach(square => {\n                    square.removeEventListener('click', shoot)\n                })\n                setTimeout(computerRound, 500)\n            }\n            \n        }\n\n        computerSquares.forEach(square => {\n            square.addEventListener('mouseover', hoverEffect)\n        })\n\n        computerSquares.forEach(square => {\n            square.addEventListener('click', shoot)\n        })\n\n    }\n\n    const computerRound = () => {\n        let shotFired = false;\n\n        const shoot = () => {\n            const coord = Math.floor(Math.random() * (99 - 0) + 0)\n\n            if (!humanBoard.missedAttacks.includes(coord) && \n            !humanBoard.hitAttacks.includes(coord)) {\n                humanBoard.receiveAttack(parseInt(coord))\n                human.shipList.forEach(ship => {\n                    ship.checkHit(parseInt(coord))\n                })\n                displayController.renderHumanBoard(humanBoard, humanSquares)\n                displayController.updateShipBoxes(human)\n                checkForWinner()\n                shotFired = true;\n                humanRound()\n            }\n        }\n\n        while(!shotFired) {\n            shoot()\n        }\n    }\n\n    return {\n        initializeGame,\n        placementRound,\n        humanRound,\n        computerRound\n    }\n})();\n\nfunction handleStart() {\n    displayController.hideElement(startBtn)\n    gameController.initializeGame()\n}\n\n\ndisplayController.createBoard(computerGrid, computerSquares)\ndisplayController.createBoard(humanGrid, humanSquares)\nstartBtn.addEventListener('click', handleStart)\n\n//# sourceURL=webpack://battleship/./src/battleship.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import ship from './ship'\n\nconst gameboard = () => {\n\n    const filledCoords = []\n    const missedAttacks = []\n    const hitAttacks = []\n\n    const placeShip = (direction, ship, startPos) => {\n        const coordinateArr = []\n\n        //Horizontal placement\n        if (direction === 1) {\n            let row = Math.floor(startPos / 10)\n            let endPos = startPos + ship.shipLength\n\n            if (row === Math.floor(endPos / 10)) {\n                for (let i = 0; i < ship.shipLength; i++) {\n                    coordinateArr.push(i + startPos)\n                    if (filledCoords.includes(i + startPos)) {\n                        //console.log(\"Failed to place ship: other ship in way.\")\n                        return 'fail'\n                    } \n                }\n                ship.placed = true\n                coordinateArr.forEach(coord => ship.location.push(coord))\n                coordinateArr.forEach(coord => filledCoords.push(coord))\n            } else {\n                //console.log(\"Failed to place ship: off edge.\")\n                return 'fail'\n            }\n        } \n\n        // Vertical placement\n        else {\n            let endPos = startPos + (ship.shipLength * 10)\n\n            if (endPos <= 99) {\n                for(let i = 0; i < (ship.shipLength * 10); i+=10) {\n                    coordinateArr.push(i + startPos)\n                    if (filledCoords.includes(i + startPos)) {\n                        //console.log(\"Failed to place ship: other ship in way.\")\n                        return 'fail'\n                    } \n                }\n                ship.placed = true\n                coordinateArr.forEach(coord => ship.location.push(coord))\n                coordinateArr.forEach(coord => filledCoords.push(coord))\n            } else {\n                //console.log(\"Failed to place ship: off edge.\")\n                return 'fail'\n            }\n        }\n    }\n\n    const receiveAttack = (coordinate) => {\n        if (filledCoords.includes(coordinate)) {\n            //console.log(\"Received attack. It's a hit!\")\n            hitAttacks.push(coordinate)\n        } else {\n            //console.log(\"Received attack. It's a miss!\")\n            missedAttacks.push(coordinate)\n        }\n        \n    }\n\n    return {filledCoords, missedAttacks, hitAttacks, placeShip, receiveAttack}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\nconst player = (board, type) => {\n    const shipList = [];\n\n    const populateShips = () => {\n        const destroyer = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('destroyer')\n        const submarine = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('submarine')\n        const cruiser = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('cruiser')\n        const battleship = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('battleship')\n        const carrier = (0,_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('carrier')\n\n        \n        shipList.push(carrier)\n        shipList.push(battleship)\n        shipList.push(cruiser)\n        shipList.push(submarine)\n        shipList.push(destroyer)\n        \n    }\n\n    const logShipList = () => {\n        console.log(shipList)\n    }\n\n    const randomPlacement = (board) => {\n        let placedNum = 0;\n\n        while (placedNum < shipList.length) {\n            shipList.forEach(ship => {\n                let randomPos = Math.floor(Math.random() * (99 - 0) + 0)\n                let randomDirection = Math.floor(Math.random() * (2 - 1 + 1) + 1)\n\n                if (!ship.placed) {\n                    board.placeShip(randomDirection, ship, randomPos)\n                    if (ship.placed) placedNum++\n                }\n            })\n        }\n    }\n\n    return {\n        board,\n        type,\n        shipList,\n        populateShips,\n        randomPlacement,\n        logShipList\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ship = (name) => {\n    const shipIndex = {\n        'carrier': 5,\n        'battleship': 4,\n        'cruiser': 3,\n        'submarine': 3,\n        'destroyer': 2\n    }\n\n    const shipLength = shipIndex[name]\n    const selected = false\n    const placed = false\n    const beenHit = []\n    const location = []\n\n\n    const checkHit = (coordinate) => {\n        if (location.includes(coordinate)) {\n            beenHit.push(coordinate)\n        }\n    }\n\n    const isSunk = () => {\n        return (beenHit.length === shipLength) ? true : false\n    }\n\n    return {name, placed, shipLength, selected, beenHit, location, checkHit, isSunk}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/battleship.js");
/******/ 	
/******/ })()
;