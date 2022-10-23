/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/sass/main.scss":
/*!***********************************!*\
  !*** ./src/assets/sass/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./src/assets/sass/main.scss?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./src/assets/js/map.js\");\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _swiper_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swiper__header.js */ \"./src/assets/js/swiper__header.js\");\n/* harmony import */ var _swiper_header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swiper_header_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _swiper_news_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swiper__news.js */ \"./src/assets/js/swiper__news.js\");\n/* harmony import */ var _swiper_news_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_swiper_news_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n//scroll element//\r\nlet btn = document.querySelector('.hero__btn').onclick = () => {\r\n    window.scrollTo(0, 1000);\r\n}\r\n// modal-img//\r\nlet img = document.querySelectorAll('.gallery__content-item');\r\nlet popup = document.querySelector('.credits__popup')\r\nlet out = document.querySelector('.credits__popup-contain')\r\nlet wrap = document.querySelector('.wrapper')\r\ndocument.querySelector('.gallery__content').addEventListener('click', (e) => {\r\n    // if(e.target.src){\r\n        console.log(e.target.src);\r\n        let img = document.createElement('img')\r\n        img.setAttribute('src', e.target.src)\r\n        img.classList.add('credits__popup-item')\r\n        out.appendChild(img)\r\n        popup.classList.add('credits__popup--visible')\r\n        wrap.style.overflow = \"hidden\"\r\n    // }\r\n    document.querySelector('.credits__popup-close').addEventListener('click', () => {\r\n        out.removeChild(img)\r\n        document.querySelector('.credits__popup').classList.remove('credits__popup--visible')\r\n        document.querySelector('.wrapper').style.overflow = \"visible\"\r\n    })\r\n    \r\n})\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/map.js":
/*!******************************!*\
  !*** ./src/assets/js/map.js ***!
  \******************************/
/***/ (() => {

eval("// Initialize and add the map\r\nfunction initMap() {\r\n    // The location of Uluru\r\n    const uluru = { lat: -25.344, lng: 131.031 };\r\n    // The map, centered at Uluru\r\n    const map = new google.maps.Map(document.getElementById(\"map\"), {\r\n      zoom: 4,\r\n      center: uluru,\r\n    });\r\n    // The marker, positioned at Uluru\r\n    const marker = new google.maps.Marker({\r\n      position: uluru,\r\n      map: map,\r\n    });\r\n  }\r\n  \r\n  window.initMap = initMap;\n\n//# sourceURL=webpack://webpack/./src/assets/js/map.js?");

/***/ }),

/***/ "./src/assets/js/swiper__header.js":
/*!*****************************************!*\
  !*** ./src/assets/js/swiper__header.js ***!
  \*****************************************/
/***/ (() => {

eval("\r\n  var swiper = new Swiper(\".news__swiper\", {\r\n    slidesPerView: 3,\r\n    spaceBetween: 20,\r\n    slidesPerGroup: 3,\r\n    pagination: {\r\n      el: \".swiper-pagination\",\r\n      clickable: true,\r\n    },\r\n    autoplay: {\r\n      delay: 2000,\r\n      disableOnInteraction: false,\r\n    },\r\n    navigation: {\r\n      nextEl: \".swiper-button-next\",\r\n      prevEl: \".swiper-button-prev\",\r\n    },\r\n  });\n\n//# sourceURL=webpack://webpack/./src/assets/js/swiper__header.js?");

/***/ }),

/***/ "./src/assets/js/swiper__news.js":
/*!***************************************!*\
  !*** ./src/assets/js/swiper__news.js ***!
  \***************************************/
/***/ (() => {

eval("var swiper = new Swiper(\".hero__swiper\", {\r\n    direction: \"vertical\",\r\n    pagination: {\r\n      el: \".swiper-pagination\",\r\n      clickable: true,\r\n    },\r\n  });0\n\n//# sourceURL=webpack://webpack/./src/assets/js/swiper__news.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sass/main.scss */ \"./src/assets/sass/main.scss\");\n/* harmony import */ var _assets_js_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/index.js */ \"./src/assets/js/index.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;