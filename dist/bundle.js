/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(1);
var init = function () {
    // Create a new board
    var boardDetails = {
        height: 18,
        weather: models_1.WeatherType.Clear,
        width: 18,
    };
    var board = new models_1.Board(boardDetails);
    console.log(board);
    // Assign tiles to the board
    // Create a list of units
    // Create a turn queue
    // Set up keybindings
    // Start listening and main loop
};
init();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Board = /** @class */ (function () {
    function Board(boardDetails) {
        var width = boardDetails.width, height = boardDetails.height, weather = boardDetails.weather;
        this.weather = weather;
    }
    return Board;
}());
exports.Board = Board;
var WeatherType;
(function (WeatherType) {
    WeatherType["Clear"] = "CLEAR";
    WeatherType["Rain"] = "RAIN";
    WeatherType["Snow"] = "SNOW";
})(WeatherType = exports.WeatherType || (exports.WeatherType = {}));


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWU0OWY0NzQ5MDJkZjQzYTc1YTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBLHNDQUEyRTtBQUUzRSxJQUFNLElBQUksR0FBRztJQUNYLHFCQUFxQjtJQUNyQixJQUFNLFlBQVksR0FBa0I7UUFDbEMsTUFBTSxFQUFFLEVBQUU7UUFDVixPQUFPLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQzFCLEtBQUssRUFBRSxFQUFFO0tBQ1YsQ0FBQztJQUVGLElBQU0sS0FBSyxHQUFHLElBQUksY0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkIsNEJBQTRCO0lBRTVCLHlCQUF5QjtJQUV6QixzQkFBc0I7SUFFdEIscUJBQXFCO0lBRXJCLGdDQUFnQztBQUNsQyxDQUFDLENBQUM7QUFFRixJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7OztBQ3pCUDtJQUtFLGVBQVksWUFBMkI7UUFDN0IsOEJBQUssRUFBRSw0QkFBTSxFQUFFLDhCQUFPLENBQWtCO1FBRWhELElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQztBQVZZLHNCQUFLO0FBbUNsQixJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDckIsOEJBQWU7SUFDZiw0QkFBYTtJQUNiLDRCQUFhO0FBQ2YsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDFlNDlmNDc0OTAyZGY0M2E3NWE1IiwiaW1wb3J0IHsgQm9hcmQsIElCb2FyZERldGFpbHMsIElUaWxlLCBJVW5pdCwgV2VhdGhlclR5cGUgfSBmcm9tICcuL21vZGVscyc7XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIC8vIENyZWF0ZSBhIG5ldyBib2FyZFxuICBjb25zdCBib2FyZERldGFpbHM6IElCb2FyZERldGFpbHMgPSB7XG4gICAgaGVpZ2h0OiAxOCxcbiAgICB3ZWF0aGVyOiBXZWF0aGVyVHlwZS5DbGVhcixcbiAgICB3aWR0aDogMTgsXG4gIH07XG5cbiAgY29uc3QgYm9hcmQgPSBuZXcgQm9hcmQoYm9hcmREZXRhaWxzKTtcblxuICBjb25zb2xlLmxvZyhib2FyZCk7XG5cbiAgLy8gQXNzaWduIHRpbGVzIHRvIHRoZSBib2FyZFxuXG4gIC8vIENyZWF0ZSBhIGxpc3Qgb2YgdW5pdHNcblxuICAvLyBDcmVhdGUgYSB0dXJuIHF1ZXVlXG5cbiAgLy8gU2V0IHVwIGtleWJpbmRpbmdzXG5cbiAgLy8gU3RhcnQgbGlzdGVuaW5nIGFuZCBtYWluIGxvb3Bcbn07XG5cbmluaXQoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC50cyIsImV4cG9ydCBjbGFzcyBCb2FyZCBpbXBsZW1lbnRzIElCb2FyZCB7XG4gIHB1YmxpYyB1bml0czogSVVuaXRbXTtcbiAgcHVibGljIHRpbGVzOiBJVGlsZVtdW107XG4gIHB1YmxpYyB3ZWF0aGVyOiBXZWF0aGVyVHlwZTtcblxuICBjb25zdHJ1Y3Rvcihib2FyZERldGFpbHM6IElCb2FyZERldGFpbHMpIHtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIHdlYXRoZXIgfSA9IGJvYXJkRGV0YWlscztcblxuICAgIHRoaXMud2VhdGhlciA9IHdlYXRoZXI7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQm9hcmQge1xuICB1bml0czogSVVuaXRbXTtcbiAgdGlsZXM6IElUaWxlW11bXTtcbiAgd2VhdGhlcjogV2VhdGhlclR5cGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJvYXJkRGV0YWlscyB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICB3ZWF0aGVyOiBXZWF0aGVyVHlwZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGlsZSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB1bml0OiBJVW5pdDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVW5pdCB7XG4gIGlkOiBudW1iZXI7XG4gIHRpbGU6IElUaWxlO1xufVxuXG5leHBvcnQgZW51bSBXZWF0aGVyVHlwZSB7XG4gIENsZWFyID0gXCJDTEVBUlwiLFxuICBSYWluID0gXCJSQUlOXCIsXG4gIFNub3cgPSBcIlNOT1dcIixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tb2RlbHMudHMiXSwic291cmNlUm9vdCI6IiJ9