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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/ts/wizard.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/ts/elements.ts":
/*!***********************************!*\
  !*** ./src/script/ts/elements.ts ***!
  \***********************************/
/*! exports provided: ElementType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ElementType\", function() { return ElementType; });\nvar ElementType;\n(function (ElementType) {\n    ElementType[ElementType[\"FIRE\"] = 0] = \"FIRE\";\n    ElementType[ElementType[\"WATER\"] = 1] = \"WATER\";\n    ElementType[ElementType[\"AIR\"] = 2] = \"AIR\";\n    ElementType[ElementType[\"EARTH\"] = 3] = \"EARTH\";\n    ElementType[ElementType[\"SPIRIT\"] = 4] = \"SPIRIT\";\n    ElementType[ElementType[\"ARCANE\"] = 5] = \"ARCANE\";\n    ElementType[ElementType[\"VOID\"] = 6] = \"VOID\";\n})(ElementType || (ElementType = {}));\n\n\n//# sourceURL=webpack:///./src/script/ts/elements.ts?");

/***/ }),

/***/ "./src/script/ts/knapsack.ts":
/*!***********************************!*\
  !*** ./src/script/ts/knapsack.ts ***!
  \***********************************/
/*! exports provided: Knapsack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Knapsack\", function() { return Knapsack; });\nvar Knapsack = /** @class */ (function () {\n    function Knapsack(capacity, inv) {\n        this.capacity = capacity;\n        this.inventory = inv;\n        this.weight = this.inventory.reduce(function (weight, itemB) { return weight + itemB.weight; }, 0);\n    }\n    Knapsack.prototype.addItem = function (item) {\n        var tempWeight = this.weight + item.weight;\n        if (tempWeight > this.capacity) {\n            throw new Error(\"Backpack is too heavy!\");\n        }\n        else {\n            this.inventory.push(item);\n            return true;\n        }\n    };\n    Knapsack.prototype.removeItem = function (item) {\n        var index = this.inventory.indexOf(item);\n        if (index === -1)\n            return null;\n        else {\n            var trash = this.inventory.splice(index)[0];\n            this.weight -= trash.weight;\n            return trash;\n        }\n    };\n    return Knapsack;\n}());\n\n\n\n//# sourceURL=webpack:///./src/script/ts/knapsack.ts?");

/***/ }),

/***/ "./src/script/ts/wizard.ts":
/*!*********************************!*\
  !*** ./src/script/ts/wizard.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/script/ts/elements.ts\");\n/* harmony import */ var _knapsack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knapsack */ \"./src/script/ts/knapsack.ts\");\n\n\nvar Wizard = /** @class */ (function () {\n    function Wizard(name, health, mana) {\n        if (health === void 0) { health = 100; }\n        if (mana === void 0) { mana = 100; }\n        this.name = name;\n        this.health = health;\n        this.mana = mana;\n        this.inventory = new _knapsack__WEBPACK_IMPORTED_MODULE_1__[\"Knapsack\"](20, []);\n        this.spellbook.push({\n            name: 'fireball',\n            element: _elements__WEBPACK_IMPORTED_MODULE_0__[\"ElementType\"].FIRE,\n            spell: function () { return console.log('casting fireball!'); }\n        });\n    }\n    Wizard.prototype.cast = function (spellname) {\n        this.spellbook.filter(function (spell) { return spell.name == spellname; })[0].spell();\n    };\n    return Wizard;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Wizard);\n\n\n//# sourceURL=webpack:///./src/script/ts/wizard.ts?");

/***/ })

/******/ });