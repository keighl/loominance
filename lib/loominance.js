(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("loominance", [], factory);
	else if(typeof exports === 'object')
		exports["loominance"] = factory();
	else
		root["loominance"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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


Object.defineProperty(exports, "__esModule", {
	value: true
});
var getLuminance = function getLuminance(color) {
	return calculateLuminance(convertHexToRGB(color));
};

var getContrastRatio = function getContrastRatio(color1, color2) {
	// https://www.w3.org/TR/WCAG20/#contrast-ratiodef

	var L1 = calculateLuminance(convertHexToRGB(color1));
	var L2 = calculateLuminance(convertHexToRGB(color2));

	// Divide brighter/darker
	if (L1 > L2) {
		return (L1 + 0.05) / (L2 + 0.05);
	}

	return (L2 + 0.05) / (L1 + 0.05);
};

var convertHexToRGB = function convertHexToRGB(hex) {
	var HEX_REGEX = /^#{0,1}([a-fA-F0-9]{6})$/;
	var HEX_BASE = 16;

	var hexString = void 0;

	var regMatch = hex.match(HEX_REGEX);
	if (regMatch) {
		hexString = regMatch[1];
	}

	if (!hexString) {
		throw new Error("Invalid hex value: " + hex);
	}

	return {
		r: parseInt(hexString.slice(0, 2), HEX_BASE),
		g: parseInt(hexString.slice(2, 4), HEX_BASE),
		b: parseInt(hexString.slice(4, 6), HEX_BASE)
	};
};

var adjustedLRGBValue = function adjustedLRGBValue(val) {
	// https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	if (val <= 0.03928) {
		return val / 12.92;
	}

	return Math.pow((val + 0.055) / 1.055, 2.4);
};

var calculateLuminance = function calculateLuminance(rgb) {
	// https://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef

	var R = adjustedLRGBValue(rgb.r / 255.0);
	var G = adjustedLRGBValue(rgb.g / 255.0);
	var B = adjustedLRGBValue(rgb.b / 255.0);

	return 0.2126 * R + 0.7152 * G + 0.0722 * B;
};

exports.getLuminance = getLuminance;
exports.getContrastRatio = getContrastRatio;

/***/ })
/******/ ]);
});
//# sourceMappingURL=loominance.js.map