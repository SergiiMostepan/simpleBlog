module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./normalize.css":
/*!***********************!*\
  !*** ./normalize.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vcm1hbGl6ZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./normalize.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store.tsx\");\n/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../normalize.css */ \"./normalize.css\");\n/* harmony import */ var _normalize_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_normalize_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/applestock/Desktop/IT/\\u0421\\u043E\\u0431\\u0435\\u0441\\u044B/Blog/newRepo/simpleBlog/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nfunction App({\n  Component,\n  pageProps\n}) {\n  const store = Object(_store__WEBPACK_IMPORTED_MODULE_2__[\"useStore\"])(pageProps.initialReduxState);\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: store,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJ1c2VTdG9yZSIsImluaXRpYWxSZWR1eFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWIsRUFBdUM7QUFDcEQsUUFBTUMsS0FBSyxHQUFHQyx1REFBUSxDQUFDRixTQUFTLENBQUNHLGlCQUFYLENBQXRCO0FBRUEsU0FDRSxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFRixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREY7QUFLRCIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcbmltcG9ydCBcIi4uL25vcm1hbGl6ZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCBzdG9yZSA9IHVzZVN0b3JlKHBhZ2VQcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers.tsx":
/*!**********************!*\
  !*** ./reducers.tsx ***!
  \**********************/
/*! exports provided: postsReducer, combineReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postsReducer\", function() { return postsReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"combineReducer\", function() { return combineReducer; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./types.tsx\");\n\n\nconst postsReducer = (state = [], {\n  type,\n  payload\n}) => {\n  switch (type) {\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"GETCONTACTSSTART\"]:\n      return [...state];\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"GETCONTACTSSUCSESS\"]:\n      return [...payload];\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"POSTCONTACTSSTART\"]:\n      return [...state];\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"POSTCONTACTSSUCSESS\"]:\n      return [...state, payload];\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"DELETECONTACTSSTART\"]:\n      return [...state];\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"DELETECONTACTSSUCSESS\"]:\n      return state.filter(post => post.id !== payload);\n\n    default:\n      return state;\n  }\n}; // COMBINED REDUCERS\n\nconst reducers = {\n  posts: postsReducer\n};\nconst combineReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])(reducers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy50c3g/NDYxYyJdLCJuYW1lcyI6WyJwb3N0c1JlZHVjZXIiLCJzdGF0ZSIsInR5cGUiLCJwYXlsb2FkIiwidHlwZXMiLCJmaWx0ZXIiLCJwb3N0IiwiaWQiLCJyZWR1Y2VycyIsInBvc3RzIiwiY29tYmluZVJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxNQUFNQSxZQUFZLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLEVBQVQsRUFBYTtBQUFFQyxNQUFGO0FBQVFDO0FBQVIsQ0FBYixLQUF3QztBQUNsRSxVQUFRRCxJQUFSO0FBQ0UsU0FBS0UsdURBQUw7QUFDRSxhQUFPLENBQUMsR0FBR0gsS0FBSixDQUFQOztBQUNGLFNBQUtHLHlEQUFMO0FBQ0UsYUFBTyxDQUFDLEdBQUdELE9BQUosQ0FBUDs7QUFFRixTQUFLQyx3REFBTDtBQUNFLGFBQU8sQ0FBQyxHQUFHSCxLQUFKLENBQVA7O0FBRUYsU0FBS0csMERBQUw7QUFDRSxhQUFPLENBQUMsR0FBR0gsS0FBSixFQUFXRSxPQUFYLENBQVA7O0FBRUYsU0FBS0MsMERBQUw7QUFDRSxhQUFPLENBQUMsR0FBR0gsS0FBSixDQUFQOztBQUVGLFNBQUtHLDREQUFMO0FBQ0UsYUFBT0gsS0FBSyxDQUFDSSxNQUFOLENBQWNDLElBQUQsSUFBZUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlKLE9BQXhDLENBQVA7O0FBRUY7QUFDRSxhQUFPRixLQUFQO0FBbkJKO0FBcUJELENBdEJNLEMsQ0F3QlA7O0FBQ0EsTUFBTU8sUUFBUSxHQUFHO0FBQ2ZDLE9BQUssRUFBRVQ7QUFEUSxDQUFqQjtBQUdPLE1BQU1VLGNBQWMsR0FBR0MsNkRBQWUsQ0FBQ0gsUUFBRCxDQUF0QyIsImZpbGUiOiIuL3JlZHVjZXJzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHBvc3RzUmVkdWNlciA9IChzdGF0ZSA9IFtdLCB7IHR5cGUsIHBheWxvYWQgfTogYW55KSA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgdHlwZXMuR0VUQ09OVEFDVFNTVEFSVDpcbiAgICAgIHJldHVybiBbLi4uc3RhdGVdO1xuICAgIGNhc2UgdHlwZXMuR0VUQ09OVEFDVFNTVUNTRVNTOlxuICAgICAgcmV0dXJuIFsuLi5wYXlsb2FkXTtcblxuICAgIGNhc2UgdHlwZXMuUE9TVENPTlRBQ1RTU1RBUlQ6XG4gICAgICByZXR1cm4gWy4uLnN0YXRlXTtcblxuICAgIGNhc2UgdHlwZXMuUE9TVENPTlRBQ1RTU1VDU0VTUzpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIHBheWxvYWRdO1xuXG4gICAgY2FzZSB0eXBlcy5ERUxFVEVDT05UQUNUU1NUQVJUOlxuICAgICAgcmV0dXJuIFsuLi5zdGF0ZV07XG5cbiAgICBjYXNlIHR5cGVzLkRFTEVURUNPTlRBQ1RTU1VDU0VTUzpcbiAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoKHBvc3Q6IGFueSkgPT4gcG9zdC5pZCAhPT0gcGF5bG9hZCk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG4vLyBDT01CSU5FRCBSRURVQ0VSU1xuY29uc3QgcmVkdWNlcnMgPSB7XG4gIHBvc3RzOiBwb3N0c1JlZHVjZXIsXG59O1xuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers.tsx\n");

/***/ }),

/***/ "./store.tsx":
/*!*******************!*\
  !*** ./store.tsx ***!
  \*******************/
/*! exports provided: initializeStore, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeStore\", function() { return initializeStore; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useStore\", function() { return useStore; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers */ \"./reducers.tsx\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nlet store;\n\nfunction initStore(initialState) {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_4__[\"combineReducer\"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a)));\n}\n\nconst initializeStore = preloadedState => {\n  var _store2;\n\n  let _store = (_store2 = store) !== null && _store2 !== void 0 ? _store2 : initStore(preloadedState);\n\n  if (preloadedState && store) {\n    _store = initStore(_objectSpread(_objectSpread({}, store.getState()), preloadedState));\n    store = undefined;\n  }\n\n  if (true) return _store;\n  if (!store) store = _store;\n  return _store;\n};\nfunction useStore(initialState) {\n  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(() => initializeStore(initialState), [initialState]);\n  return store;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS50c3g/NmNjNSJdLCJuYW1lcyI6WyJzdG9yZSIsImluaXRTdG9yZSIsImluaXRpYWxTdGF0ZSIsImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXIiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIiwiaW5pdGlhbGl6ZVN0b3JlIiwicHJlbG9hZGVkU3RhdGUiLCJfc3RvcmUiLCJnZXRTdGF0ZSIsInVuZGVmaW5lZCIsInVzZVN0b3JlIiwidXNlTWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQUlBLEtBQUo7O0FBRUEsU0FBU0MsU0FBVCxDQUFtQkMsWUFBbkIsRUFBc0M7QUFDcEMsU0FBT0MseURBQVcsQ0FDaEJDLHdEQURnQixFQUVoQkYsWUFGZ0IsRUFHaEJHLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDQyxrREFBRCxDQUFoQixDQUhILENBQWxCO0FBS0Q7O0FBRU0sTUFBTUMsZUFBZSxHQUFJQyxjQUFELElBQXlCO0FBQUE7O0FBQ3RELE1BQUlDLE1BQU0sY0FBR1YsS0FBSCw2Q0FBWUMsU0FBUyxDQUFDUSxjQUFELENBQS9COztBQUVBLE1BQUlBLGNBQWMsSUFBSVQsS0FBdEIsRUFBNkI7QUFDM0JVLFVBQU0sR0FBR1QsU0FBUyxpQ0FDYkQsS0FBSyxDQUFDVyxRQUFOLEVBRGEsR0FFYkYsY0FGYSxFQUFsQjtBQUtBVCxTQUFLLEdBQUdZLFNBQVI7QUFDRDs7QUFFRCxZQUFtQyxPQUFPRixNQUFQO0FBRW5DLE1BQUksQ0FBQ1YsS0FBTCxFQUFZQSxLQUFLLEdBQUdVLE1BQVI7QUFFWixTQUFPQSxNQUFQO0FBQ0QsQ0FqQk07QUFtQkEsU0FBU0csUUFBVCxDQUFrQlgsWUFBbEIsRUFBcUM7QUFDMUMsUUFBTUYsS0FBSyxHQUFHYyxxREFBTyxDQUFDLE1BQU1OLGVBQWUsQ0FBQ04sWUFBRCxDQUF0QixFQUFzQyxDQUFDQSxZQUFELENBQXRDLENBQXJCO0FBQ0EsU0FBT0YsS0FBUDtBQUNEIiwiZmlsZSI6Ii4vc3RvcmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXRodW5rXCI7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlciB9IGZyb20gXCIuL3JlZHVjZXJzXCI7XG5cbmxldCBzdG9yZTogW10gfCB1bmRlZmluZWQgfCB7fSB8IGFueTtcblxuZnVuY3Rpb24gaW5pdFN0b3JlKGluaXRpYWxTdGF0ZTogYW55KSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICBjb21iaW5lUmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSlcbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVTdG9yZSA9IChwcmVsb2FkZWRTdGF0ZTogYW55KSA9PiB7XG4gIGxldCBfc3RvcmUgPSBzdG9yZSA/PyBpbml0U3RvcmUocHJlbG9hZGVkU3RhdGUpO1xuXG4gIGlmIChwcmVsb2FkZWRTdGF0ZSAmJiBzdG9yZSkge1xuICAgIF9zdG9yZSA9IGluaXRTdG9yZSh7XG4gICAgICAuLi5zdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgLi4ucHJlbG9hZGVkU3RhdGUsXG4gICAgfSk7XG5cbiAgICBzdG9yZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX3N0b3JlO1xuXG4gIGlmICghc3RvcmUpIHN0b3JlID0gX3N0b3JlO1xuXG4gIHJldHVybiBfc3RvcmU7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RvcmUoaW5pdGlhbFN0YXRlOiBhbnkpIHtcbiAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpLCBbaW5pdGlhbFN0YXRlXSk7XG4gIHJldHVybiBzdG9yZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.tsx\n");

/***/ }),

/***/ "./types.tsx":
/*!*******************!*\
  !*** ./types.tsx ***!
  \*******************/
/*! exports provided: GETCONTACTSSTART, GETCONTACTSSUCSESS, GETCONTACTSERROR, POSTCONTACTSSTART, POSTCONTACTSSUCSESS, POSTCONTACTSERROR, DELETECONTACTSSTART, DELETECONTACTSSUCSESS, DELETECONTACTSERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GETCONTACTSSTART\", function() { return GETCONTACTSSTART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GETCONTACTSSUCSESS\", function() { return GETCONTACTSSUCSESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GETCONTACTSERROR\", function() { return GETCONTACTSERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POSTCONTACTSSTART\", function() { return POSTCONTACTSSTART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POSTCONTACTSSUCSESS\", function() { return POSTCONTACTSSUCSESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"POSTCONTACTSERROR\", function() { return POSTCONTACTSERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETECONTACTSSTART\", function() { return DELETECONTACTSSTART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETECONTACTSSUCSESS\", function() { return DELETECONTACTSSUCSESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETECONTACTSERROR\", function() { return DELETECONTACTSERROR; });\n// REDUX ACTION TYPES\nconst GETCONTACTSSTART = \"GETCONTACTSSTART\";\nconst GETCONTACTSSUCSESS = \"GETCONTACTSSUCSESS\";\nconst GETCONTACTSERROR = \"GETCONTACTSERROR\";\nconst POSTCONTACTSSTART = \"POSTCONTACTSSTART\";\nconst POSTCONTACTSSUCSESS = \"POSTCONTACTSSUCSESS\";\nconst POSTCONTACTSERROR = \"POSTCONTACTSERROR\";\nconst DELETECONTACTSSTART = \"DELETECONTACTSSTART\";\nconst DELETECONTACTSSUCSESS = \"DELETECONTACTSSUCSESS\";\nconst DELETECONTACTSERROR = \"DELETECONTACTSERROR\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90eXBlcy50c3g/MjBiNyJdLCJuYW1lcyI6WyJHRVRDT05UQUNUU1NUQVJUIiwiR0VUQ09OVEFDVFNTVUNTRVNTIiwiR0VUQ09OVEFDVFNFUlJPUiIsIlBPU1RDT05UQUNUU1NUQVJUIiwiUE9TVENPTlRBQ1RTU1VDU0VTUyIsIlBPU1RDT05UQUNUU0VSUk9SIiwiREVMRVRFQ09OVEFDVFNTVEFSVCIsIkRFTEVURUNPTlRBQ1RTU1VDU0VTUyIsIkRFTEVURUNPTlRBQ1RTRVJST1IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNQSxnQkFBd0IsR0FBRyxrQkFBakM7QUFDQSxNQUFNQyxrQkFBMEIsR0FBRyxvQkFBbkM7QUFDQSxNQUFNQyxnQkFBd0IsR0FBRyxrQkFBakM7QUFFQSxNQUFNQyxpQkFBeUIsR0FBRyxtQkFBbEM7QUFDQSxNQUFNQyxtQkFBMkIsR0FBRyxxQkFBcEM7QUFDQSxNQUFNQyxpQkFBeUIsR0FBRyxtQkFBbEM7QUFFQSxNQUFNQyxtQkFBMkIsR0FBRyxxQkFBcEM7QUFDQSxNQUFNQyxxQkFBNkIsR0FBRyx1QkFBdEM7QUFDQSxNQUFNQyxtQkFBMkIsR0FBRyxxQkFBcEMiLCJmaWxlIjoiLi90eXBlcy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSRURVWCBBQ1RJT04gVFlQRVNcblxuZXhwb3J0IGNvbnN0IEdFVENPTlRBQ1RTU1RBUlQ6IHN0cmluZyA9IFwiR0VUQ09OVEFDVFNTVEFSVFwiO1xuZXhwb3J0IGNvbnN0IEdFVENPTlRBQ1RTU1VDU0VTUzogc3RyaW5nID0gXCJHRVRDT05UQUNUU1NVQ1NFU1NcIjtcbmV4cG9ydCBjb25zdCBHRVRDT05UQUNUU0VSUk9SOiBzdHJpbmcgPSBcIkdFVENPTlRBQ1RTRVJST1JcIjtcblxuZXhwb3J0IGNvbnN0IFBPU1RDT05UQUNUU1NUQVJUOiBzdHJpbmcgPSBcIlBPU1RDT05UQUNUU1NUQVJUXCI7XG5leHBvcnQgY29uc3QgUE9TVENPTlRBQ1RTU1VDU0VTUzogc3RyaW5nID0gXCJQT1NUQ09OVEFDVFNTVUNTRVNTXCI7XG5leHBvcnQgY29uc3QgUE9TVENPTlRBQ1RTRVJST1I6IHN0cmluZyA9IFwiUE9TVENPTlRBQ1RTRVJST1JcIjtcblxuZXhwb3J0IGNvbnN0IERFTEVURUNPTlRBQ1RTU1RBUlQ6IHN0cmluZyA9IFwiREVMRVRFQ09OVEFDVFNTVEFSVFwiO1xuZXhwb3J0IGNvbnN0IERFTEVURUNPTlRBQ1RTU1VDU0VTUzogc3RyaW5nID0gXCJERUxFVEVDT05UQUNUU1NVQ1NFU1NcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVDT05UQUNUU0VSUk9SOiBzdHJpbmcgPSBcIkRFTEVURUNPTlRBQ1RTRVJST1JcIjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./types.tsx\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ })

/******/ });