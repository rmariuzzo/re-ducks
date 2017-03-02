(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!******************************!*\
  !*** ./lib/actions/index.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction actionsGenerator(types, actions) {\n  if (Array.isArray(types)) {\n    actions = types;\n  }\n\n  // Generate actions.\n  var generated = {};\n  actions.forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 3),\n        name = _ref2[0],\n        key = _ref2[1],\n        type = _ref2[2];\n\n    type = type || types[name] || name;\n    if (key) {\n      generated[name] = function (value) {\n        return { type: type,\n          payload: _defineProperty({}, key, value)\n        };\n      };\n    } else {\n      generated[name] = function () {\n        return { type: type };\n      };\n    }\n  });\n  return generated;\n}\n\nexports.default = actionsGenerator;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvYWN0aW9ucy9pbmRleC5qcz9mMjI3Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFjdGlvbnNHZW5lcmF0b3IodHlwZXMsIGFjdGlvbnMpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodHlwZXMpKSB7XG4gICAgYWN0aW9ucyA9IHR5cGVzXG4gIH1cblxuICAvLyBHZW5lcmF0ZSBhY3Rpb25zLlxuICBjb25zdCBnZW5lcmF0ZWQgPSB7fVxuICBhY3Rpb25zLmZvckVhY2goKFtuYW1lLCBrZXksIHR5cGVdKSA9PiB7XG4gICAgdHlwZSA9IHR5cGUgfHwgdHlwZXNbbmFtZV0gfHwgbmFtZVxuICAgIGlmIChrZXkpIHtcbiAgICAgIGdlbmVyYXRlZFtuYW1lXSA9ICh2YWx1ZSkgPT4gKHsgdHlwZSxcbiAgICAgICAgcGF5bG9hZDogeyBba2V5XTogdmFsdWUgfSxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbmVyYXRlZFtuYW1lXSA9ICgpID0+ICh7IHR5cGUgfSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiBnZW5lcmF0ZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uc0dlbmVyYXRvclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9hY3Rpb25zL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./lib/types/index.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _utils = __webpack_require__(/*! ../utils */ 2);\n\nvar _utils2 = _interopRequireDefault(_utils);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar defaults = {\n  namespace: '',\n  separator: '/',\n  transformers: {\n    name: function name(type, options) {\n      return '' + type;\n    },\n    value: function value(type, options) {\n      if (!options.namespace || options.namespace.length === 0) {\n        return '' + type;\n      }\n      return '' + options.namespace + options.separator + type;\n    }\n  }\n};\n\nvar typesGenerator = function typesGenerator() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;\n  var types = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n\n  // Check for no options given.\n  if (Array.isArray(options)) {\n    types = options;\n  }\n\n  // Check for namespace options shorthand.\n  if (typeof options === 'string') {\n    options = { namespace: options };\n  }\n\n  // Merge options with defaults.\n  options = _utils2.default.merge({}, defaults, options);\n\n  // Generate types.\n  var generated = {};\n  types.forEach(function (type) {\n    var name = options.transformers.name(type, options);\n    var value = options.transformers.value(type, options);\n    generated[name] = value;\n  });\n  return generated;\n};\n\nexports.default = typesGenerator;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvdHlwZXMvaW5kZXguanM/ZmYyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMnXG5cbmNvbnN0IGRlZmF1bHRzID0ge1xuICBuYW1lc3BhY2U6ICcnLFxuICBzZXBhcmF0b3I6ICcvJyxcbiAgdHJhbnNmb3JtZXJzOiB7XG4gICAgbmFtZTogKHR5cGUsIG9wdGlvbnMpID0+IHtcbiAgICAgIHJldHVybiBgJHt0eXBlfWBcbiAgICB9LFxuICAgIHZhbHVlOiAodHlwZSwgb3B0aW9ucykgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLm5hbWVzcGFjZSB8fCBvcHRpb25zLm5hbWVzcGFjZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGAke3R5cGV9YFxuICAgICAgfVxuICAgICAgcmV0dXJuIGAke29wdGlvbnMubmFtZXNwYWNlfSR7b3B0aW9ucy5zZXBhcmF0b3J9JHt0eXBlfWBcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgdHlwZXNHZW5lcmF0b3IgPSBmdW5jdGlvbihvcHRpb25zID0gZGVmYXVsdHMsIHR5cGVzID0gW10pIHtcbiAgLy8gQ2hlY2sgZm9yIG5vIG9wdGlvbnMgZ2l2ZW4uXG4gIGlmIChBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgdHlwZXMgPSBvcHRpb25zXG4gIH1cblxuICAvLyBDaGVjayBmb3IgbmFtZXNwYWNlIG9wdGlvbnMgc2hvcnRoYW5kLlxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgb3B0aW9ucyA9IHsgbmFtZXNwYWNlOiBvcHRpb25zIH1cbiAgfVxuXG4gIC8vIE1lcmdlIG9wdGlvbnMgd2l0aCBkZWZhdWx0cy5cbiAgb3B0aW9ucyA9IHV0aWxzLm1lcmdlKHt9LCBkZWZhdWx0cywgb3B0aW9ucylcblxuICAvLyBHZW5lcmF0ZSB0eXBlcy5cbiAgY29uc3QgZ2VuZXJhdGVkID0ge31cbiAgdHlwZXMuZm9yRWFjaCh0eXBlID0+IHtcbiAgICBjb25zdCBuYW1lID0gb3B0aW9ucy50cmFuc2Zvcm1lcnMubmFtZSh0eXBlLCBvcHRpb25zKVxuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9ucy50cmFuc2Zvcm1lcnMudmFsdWUodHlwZSwgb3B0aW9ucylcbiAgICBnZW5lcmF0ZWRbbmFtZV0gPSB2YWx1ZVxuICB9KVxuICByZXR1cm4gZ2VuZXJhdGVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IHR5cGVzR2VuZXJhdG9yXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3R5cGVzL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFIQTtBQUNBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./lib/utils/index.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar utils = {\n  /**\n   * Simple is object check.\n   * @param item\n   * @returns {boolean}\n   */\n  isObject: function isObject(item) {\n    return item && (typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && !Array.isArray(item);\n  },\n\n\n  /**\n   * Deep merge two objects.\n   * @param target\n   * @param ...sources\n   */\n  merge: function merge(target) {\n    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      sources[_key - 1] = arguments[_key];\n    }\n\n    if (!sources.length) return target;\n    var source = sources.shift();\n\n    if (this.isObject(target) && this.isObject(source)) {\n      for (var key in source) {\n        if (this.isObject(source[key])) {\n          if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));\n          this.merge(target[key], source[key]);\n        } else {\n          Object.assign(target, _defineProperty({}, key, source[key]));\n        }\n      }\n    }\n\n    return this.merge.apply(this, [target].concat(sources));\n  }\n};\n\nexports.default = utils;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvdXRpbHMvaW5kZXguanM/ZWFlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB1dGlscyA9IHtcbiAgLyoqXG4gICAqIFNpbXBsZSBpcyBvYmplY3QgY2hlY2suXG4gICAqIEBwYXJhbSBpdGVtXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgaXNPYmplY3QoaXRlbSkge1xuICAgIHJldHVybiAoaXRlbSAmJiB0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkpXG4gIH0sXG5cbiAgLyoqXG4gICAqIERlZXAgbWVyZ2UgdHdvIG9iamVjdHMuXG4gICAqIEBwYXJhbSB0YXJnZXRcbiAgICogQHBhcmFtIC4uLnNvdXJjZXNcbiAgICovXG4gIG1lcmdlKHRhcmdldCwgLi4uc291cmNlcykge1xuICAgIGlmICghc291cmNlcy5sZW5ndGgpIHJldHVybiB0YXJnZXRcbiAgICBjb25zdCBzb3VyY2UgPSBzb3VyY2VzLnNoaWZ0KClcblxuICAgIGlmICh0aGlzLmlzT2JqZWN0KHRhcmdldCkgJiYgdGhpcy5pc09iamVjdChzb3VyY2UpKSB7XG4gICAgICBmb3IgKGNvbnN0IGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHt9IH0pXG4gICAgICAgICAgdGhpcy5tZXJnZSh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHsgW2tleV06IHNvdXJjZVtrZXldIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5tZXJnZSh0YXJnZXQsIC4uLnNvdXJjZXMpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXRpbHNcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvdXRpbHMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvQkE7QUFDQTtBQWlDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _types = __webpack_require__(/*! ./types */ 1);\n\nObject.defineProperty(exports, 'types', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_types).default;\n  }\n});\n\nvar _actions = __webpack_require__(/*! ./actions */ 0);\n\nObject.defineProperty(exports, 'actions', {\n  enumerable: true,\n  get: function get() {\n    return _interopRequireDefault(_actions).default;\n  }\n});\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvaW5kZXguanM/NmQxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIHR5cGVzIH0gZnJvbSAnLi90eXBlcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYWN0aW9ucyB9IGZyb20gJy4vYWN0aW9ucydcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);
});