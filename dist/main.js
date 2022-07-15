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

/***/ "./src/battleship.js":
/*!***************************!*\
  !*** ./src/battleship.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\n\n\n\nconst computerArea = document.querySelector('[data-computer-area]')\nconst humanArea = document.querySelector('[data-human-area]')\n\nconst computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst humanBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nfunction drawGameBoard(board, area) {\n\n    for (let i = 0; i < 10; i++) {\n        const rowElement = document.createElement('div')\n        rowElement.classList.add('board-row')\n        area.append(rowElement)\n    }\n\n    \n}\n\ndrawGameBoard(computerBoard, computerArea)\n\n\n//# sourceURL=webpack://battleship/./src/battleship.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\nconst gameboard = () => {\n    const allCoords = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10', // 0-9\n                       'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', // 10-19\n                       'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', // 20-29\n                       'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', // 30-39\n                       'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10', // 40-49\n                       'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', // 50-59\n                       'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10', // 60-69\n                       'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', // 70-79\n                       'I1', 'I2', 'I3', 'I4', 'I5', 'I6', 'I7', 'I8', 'I9', 'I10', // 80-89\n                       'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'] // 90-99\n\n    const filledCoords = []\n    const missedAttacks = []\n    const shipList = []\n\n    const placeShip = (direction, shipLength, startPos) => {\n        const coordinateArr = []\n\n        //Horizontal placement\n        if (direction === 'horizontal') {\n            let row = Math.floor(startPos / 10)\n            let endPos = startPos + shipLength\n\n            if (row === Math.floor(endPos / 10)) {\n                for (let i = 0; i < shipLength; i++) {\n                    coordinateArr.push(allCoords[i + startPos])\n                    if (filledCoords.includes(allCoords[i + startPos])) return\n                }\n     \n                coordinateArr.forEach(coord => filledCoords.push(coord))\n                let newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(coordinateArr);\n                shipList.push(newShip)\n                return newShip\n            } else {\n                return\n            }\n        } \n\n        // Vertical placement\n        else {\n            let endPos = startPos + (shipLength * 10)\n\n            if (endPos <= 99) {\n                for(let i = 0; i < (shipLength * 10); i+=10) {\n                    coordinateArr.push(allCoords[i + startPos])\n                    if (filledCoords.includes(allCoords[i + startPos])) return\n                }\n                coordinateArr.forEach(coord => filledCoords.push(coord))\n                let newShip = (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(coordinateArr);\n                shipList.push(newShip)\n                return newShip\n            } else {\n                return\n            }\n        }\n    }\n\n    const receiveAttack = (coordinate) => {\n        if (filledCoords.includes(coordinate)) {\n            shipList.forEach(ship => {\n                ship.hit(coordinate)\n            })\n        } else {\n            missedAttacks.push(coordinate)\n        }\n        \n    }\n\n    const allSunk = () => {\n        const sunkList = []\n        shipList.forEach(ship => {\n            if (ship.isSunk() === true) sunkList.push(ship)\n        })\n        return sunkList.length === shipList.length\n    }\n\n    return {missedAttacks, shipList, placeShip, receiveAttack, allSunk}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n\n\nconst player = (type, turn) => {\n\n    const board = gameboardFactory()\n\n    return {type, turn, board}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n//# sourceURL=webpack://battleship/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ship = (coordinateArr) => {\n    const shipLength = coordinateArr.length\n    const beenHit = []\n    const shipLocation = coordinateArr\n\n    const hit = (coordinate) => {\n        if (coordinateArr.includes(coordinate)) beenHit.push(coordinate)\n    }\n\n    const isSunk = () => {\n        return (beenHit.length === shipLength) ? true : false\n    }\n\n    return {shipLength, beenHit, shipLocation, hit, isSunk}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);\n\n//# sourceURL=webpack://battleship/./src/ship.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/battleship.js");
/******/ 	
/******/ })()
;