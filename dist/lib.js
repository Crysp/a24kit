(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Amount/index.jsx":
/*!******************************!*\
  !*** ./src/Amount/index.jsx ***!
  \******************************/
/*! exports provided: format, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Amount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/currency */ "./src/lib/currency.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/Amount/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var AMOUNT_MAJOR_PART_SIZE = 3;
var MINUS_SIGN_HTML_CODE = "\u2212";

function createSplitter(partSize) {
  var parts = function parts(str) {
    var length = str.length;

    if (length <= partSize) {
      return [str];
    }

    var from = length - partSize;
    return [str.slice(from, length)].concat(parts(str.slice(0, from)));
  };

  return parts;
}

function format(value, minority, iso) {
  var meta = Object(_lib_currency__WEBPACK_IMPORTED_MODULE_2__["getCurrencyMeta"])(iso);
  var isNegative = value < 0;
  var valueAbs = Math.abs(value);
  var valueAbsStr = valueAbs.toFixed(minority);
  var numberParts = valueAbsStr.split('.');
  var majorPart = numberParts[0];
  var minorPart = numberParts[1];
  var amountSplitter = createSplitter(AMOUNT_MAJOR_PART_SIZE);
  var majorPartFormatted = amountSplitter(majorPart).reverse().join(meta.majorSplitter);
  var formattedValueStr = meta.template.replace('V', majorPartFormatted + (minorPart ? "".concat(meta.minorSplitter).concat(minorPart) : '')).replace('C', meta.symbol);
  return {
    majorPart: majorPartFormatted,
    minorPart: minorPart,
    amountValue: formattedValueStr,
    isNegative: isNegative,
    currencySymbol: meta.symbol
  };
}
/**
 * Форматирование числа в валюту
 *
 * @develop
 * @version 1.0.0
 */

var Amount =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Amount, _React$PureComponent);

  function Amount() {
    _classCallCheck(this, Amount);

    return _possibleConstructorReturn(this, _getPrototypeOf(Amount).apply(this, arguments));
  }

  _createClass(Amount, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          minority = _this$props.minority,
          iso = _this$props.iso;

      var _format = format(value, minority, iso),
          isNegative = _format.isNegative,
          amountValue = _format.amountValue;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["default"], null, isNegative && MINUS_SIGN_HTML_CODE, amountValue);
    }
  }]);

  return Amount;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Amount.propTypes = {
  /**
   * Сумма
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Количество знаков после запятой
   */
  minority: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * ISO код валюты
   */
  iso: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
Amount.defaultProps = {
  value: 0,
  minority: 0
};


/***/ }),

/***/ "./src/Amount/styled.js":
/*!******************************!*\
  !*** ./src/Amount/styled.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font-family: 'Open Sans', sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject()));

/***/ }),

/***/ "./src/AmountInput/index.jsx":
/*!***********************************!*\
  !*** ./src/AmountInput/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AmountInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/currency */ "./src/lib/currency.js");
/* harmony import */ var _MaskedInput_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MaskedInput/mask */ "./src/MaskedInput/mask.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Input */ "./src/Input/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./src/AmountInput/styled.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var DEFAULT_INTEGER_SIZE = 9;
var INTEGER_PART_SIZE = 3;
/**
 * Сплитит число в группы по 3
 *
 * @param {String} str - число строкой
 * @returns {Array.<String>}
 */

function splitInteger(str) {
  if (str.length <= INTEGER_PART_SIZE) {
    return [str];
  }

  var from = str.length - INTEGER_PART_SIZE;
  return [str.slice(from, str.length)].concat(splitInteger(str.slice(0, from)));
}
/**
 * @develop
 */


var AmountInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AmountInput, _React$Component);

  function AmountInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AmountInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AmountInput)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      value: ''
    };
    _this.maskPattern = null;
    _this.mask = null;

    _this.onRef = function (root) {
      _this.root = root;
    };

    _this.onChange = function (value) {
      var onChange = _this.props.onChange;

      _this.setState({
        value: value
      });

      if (onChange) {
        onChange(value, Number(value.toString().replace(/[^\d,]/g, '')));
      }
    };

    _this.onProcessMaskInputEvent = function (event) {
      _this.updateMaskByValue(event.target.value);
    };

    return _this;
  }

  _createClass(AmountInput, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.updateMaskByValue(this.getValue());
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var value = this.props.value;

      if (value !== nextProps.value) {
        this.updateMaskByValue(nextProps.value || '');
      }
    }
  }, {
    key: "getMaxLength",
    value: function getMaxLength() {
      var numberLength = this.props.numberLength;
      return Math.floor((numberLength - 1) / INTEGER_PART_SIZE) + numberLength;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var value = this.props.value;
      var localValue = this.state.value;
      return typeof value === 'undefined' ? localValue : value;
    }
  }, {
    key: "updateMaskByValue",
    value: function updateMaskByValue(value) {
      var numberLength = this.props.numberLength;
      var cleanValue = value.toString().replace(/[^\d,]/g, '');
      var length = Math.max(Math.min(cleanValue.length || 1, numberLength));
      this.maskPattern = splitInteger(new Array(length + 1).join('1')).reverse().join(' ');
      this.mask = new _MaskedInput_mask__WEBPACK_IMPORTED_MODULE_3__["default"](this.maskPattern);

      if (this.root) {
        this.root.getMaskedInputInstance().setMask(this.maskPattern);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var currencyISO = this.props.currencyISO;
      var currencySymbol = Object(_lib_currency__WEBPACK_IMPORTED_MODULE_2__["getCurrencySymbol"])(currencyISO);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.props, {
        ref: this.onRef,
        maxLength: this.getMaxLength(),
        mask: this.maskPattern,
        value: this.getValue(),
        rightAddons: currencyISO && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["default"], null, currencySymbol),
        onChange: this.onChange,
        onProcessMaskInputEvent: this.onProcessMaskInputEvent
      }));
    }
  }]);

  return AmountInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AmountInput.propTypes = _objectSpread({}, _Input__WEBPACK_IMPORTED_MODULE_4__["default"].propTypes, {
  /**
   * ISO код валюты
   */
  currencyISO: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * Максимальное количество цифр во введенной сумме
   */
  numberLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
});
AmountInput.defaultProps = {
  numberLength: DEFAULT_INTEGER_SIZE
};


/***/ }),

/***/ "./src/AmountInput/styled.js":
/*!***********************************!*\
  !*** ./src/AmountInput/styled.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 12px;\n    font: 400 18px \"Open Sans\", sans-serif;\n    color: ", ";\n    user-select: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray));

/***/ }),

/***/ "./src/Avatar/index.jsx":
/*!******************************!*\
  !*** ./src/Avatar/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Avatar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Avatar/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var placeholder =
/* eslint-disable max-len */
'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTc0cHgiIGhlaWdod' + 'D0iMTc0cHgiIHZpZXdCb3g9IjAgMCAxNzQgMTc0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1s' + 'bnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSB' + 'odHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+OCBTdXBwbGVtZW50czwvdGl0bGU+CiAgICA8ZGVzYz' + '5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoP' + 'SIxNzYiIGhlaWdodD0iMTc2Ij48L3JlY3Q+CiAgICAgICAgPHBhdHRlcm4gaWQ9InBhdHRlcm4tMiIgcGF0dGVyblVuaXRzPSJvYmplY3RCb3Vu' + 'ZGluZ0JveCIgeD0iMCUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZS0zIiB' + '0cmFuc2Zvcm09InNjYWxlKDAuNSwwLjUpIj48L3VzZT4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgICAgPGltYWdlIGlkPSJpbWFnZS0zIiB3aW' + 'R0aD0iMzUyIiBoZWlnaHQ9IjM1MiIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFXQ' + 'UFBQUZnQ0FZQUFBQ0ZZYU5NQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBR3RkSlJFRlVlQUh0M1Z0WDFNcld4dkdvaUNmQTQ3cFkzLytUZWJWdlZN' + 'UURLQWkrYS9aK2UyMUVpRWs2bGN4S2ZobWpCM1FuTld2bS95UlBWeXFWNm50djM3NzkyVmdRUUFBQkJDWW5jSC95R2xXSUFBSUlJTEFoc0xmbDh' + 'QZmZmMi8vOVJjQkJCQkFvQ0NCLy96blA1dm9Xc0FGSVF1TkFBSUl0QkZnd0cxMHJFTUFBUVFLRW1EQUJlRUtqUUFDQ0xRUllNQnRkS3hEQUFFRU' + 'NoSmd3QVhoQ28wQUFnaTBFV0RBYlhTc1F3QUJCQW9TWU1BRjRRcU5BQUlJdEJGZ3dHMTByRU1BQVFRS0VtREFCZUVLalFBQ0NMUVJZTUJ0ZEt4R' + 'EFBRUVDaEpnd0FYaENvMEFBZ2kwRVdEQWJYU3NRd0FCQkFvU1lNQUY0UXFOQUFJSXRCRmd3RzEwckVNQUFRUUtFbURBQmVFS2pRQUNDTFFSWU1C' + 'dGRLeERBQUVFQ2hKZ3dBWGhDbzBBQWdpMEVXREFiWFNzUXdBQkJBb1NZTUFGNFFxTkFBSUl0QkZnd0cxMHJFTUFBUVFLRW1EQUJlRUtqUUFDQ0x' + 'RUllNQnRkS3hEQUFFRUNoSmd3QVhoQ28wQUFnaTBFV0RBYlhTc1F3QUJCQW9TWU1BRjRRcU5BQUlJdEJGZ3dHMTByRU1BQVFRS0VtREFCZUVLal' + 'FBQ0NMUVJZTUJ0ZEt4REFBRUVDaEpnd0FYaENvMEFBZ2kwRVdEQWJYU3NRd0FCQkFvU1lNQUY0UXFOQUFJSXRCRmd3RzEwckVNQUFRUUtFbURBQ' + 'mVFS2pRQUNDTFFSWU1CdGRLeERBQUVFQ2hKZ3dBWGhDbzBBQWdpMEVXREFiWFNzUXdBQkJBb1NZTUFGNFFxTkFBSUl0QkZnd0cxMHJFTUFBUVFL' + 'RW1EQUJlRUtqUUFDQ0xRUllNQnRkS3hEQUFFRUNoSmd3QVhoQ28wQUFnaTBFV0RBYlhTc1F3QUJCQW9TWU1BRjRRcU5BQUlJdEJGZ3dHMTByRU1' + 'BQVFRS0VtREFCZUVLalFBQ0NMUVJZTUJ0ZEt4REFBRUVDaEpnd0FYaENvMEFBZ2kwRVdEQWJYU3NRd0FCQkFvU1lNQUY0UXFOQUFJSXRCRmd3Rz' + 'EwckVNQUFRUUtFbURBQmVFS2pRQUNDTFFSWU1CdGRLeERBQUVFQ2hKZ3dBWGhDbzBBQWdpMEVXREFiWFNzUXdBQkJBb1NZTUFGNFFxTkFBSUl0Q' + 'kZnd0cxMHJFTUFBUVFLRW1EQUJlRUtqUUFDQ0xRUjJHdGJhUjBDQ05SRjROdTNiODMzNzkrYjgvUHo1dXJxcW5uNDhHRnpjSERRN08vdjE3VWpL' + 'OG1XQWE5RWFMdTVUQUpoc2x2VERlUDkrZlBuTHpzYW44WHI5ZXZYVFBnWE1qbmVNT0FjT3NnQ2djNEVMaTR1TnFZYXhodi9kMWxPVGs2YXYvNzZ' + 'xOHVtdHBtUUFBT2VFTGFxRUJoQ0lGcTUwYVd3YmMxZVhsNzJEdlBqeDQ4bXlqMTQ4S0IzV1FYS0VXREE1ZGlLak1BZ0F0R05FSWE3TmQydXJkdy' + '9WUlpHem9EL1JHbmE5UXg0V3Q1cXUwRWdXbVpoRE51LzI5WmRtTkQyRlVYdTNidlgzTC8vMzBFNzhmL04xM2FiMno2L3VlNzYrL2gvaW1XN0wvR' + 'TM5bmY3Ti82UFYrejNsa093S0xGcytaV0lMZVl3QWd4NEdEZWxCaENJbHR6TjE0QXd4WXFFZVcrWHUvNlA5ZGZYaFpGZVg3YnZiLzY5dnMxYy8x' + 'L1BlNjRjMVBzckFRYjhLdy92UmlRUUpoU1gwWEd6S0Y3UndzdThiRTB6Y3J6K2YrYWMrK1NtQmR5SDFqVGJNdUJwT0srcWxyaUUvdnIxYTNOMmR' + 'yWklJNnRSVE9hYlV6VUduRk9YS3JPSzF1NlhMMTgyZCt1cjNJRUZKKzNtVzA1eEdYQk9YYXJLS3JvV1BuMzZ0R254VnBYNGlwTGQyM09xWjVTYk' + 'tobFZxU2luMDlQVDV2UG56K243ZHl0Q1dpUlZCbHdFNjg1QkdmRE9DTmNiSUo2dUNnTzI1Q2NRYzBKWThoRmd3UGswcVNLajQrUGp6Y2lHS3BLV' + 'jVHWlNIaGp5RVdEQStUUkpuOUdIRHgvY2FFdXYwdjhTak80SG95RCt4eVBUZitZRHpxUkdCYmtZNVZDQlNEZFNOQlhsRFNDSjNqTGdSR0prVHlX' + 'ZVlvc2JicGE2Q0REZ3ZIcnBnc2lyemV5WnhkTmcxK2RvaUljckxQVVJlUFRvVVgxSnJ5UmpCcndTb2J2czVuWUdydTE4RGR1SmNicVV0VTFPQWp' + 'INlFmOXZUbTBpS3dhY1Y1dEpNb3ZIaFdPZTJaaXJZWW56SDB3Q01YRWxqeDgvVHB5ZDFCandDbytCNkZhSThidGh2dGtueUZtaFBLUHU4cE1uVD' + 'BhTko5aTRCQmp3dUR4VFI0c3VoYmlKRnNacldUNkI2SDR3QjBSdW5SbHdibjFHeVM2NkZtS3VCayt0allLem1pQlBuejZ0SnRlMUpzcUFGNjU4O' + 'U8vR0k4TnVxQzFjNkJ1N0Y1T3Y2Lys5QVNYaFd3YWNVSlN4VWpKWHcxZ2s2NHNUZmI5R1ArVFhqUUhuMTZoM2huRmpMZVpxaUdGbGxuVVMwUDFR' + 'aCs0TXVBNmRPbWNaSXh4aXJnWmREcDJSTFc3RGVQTE43R2QxeU9wUjVEcDA2cFFsOCsyRWFmRWJIUjBkTFg0Zmw3S0RESGdoU2pMZmhRaTU0Mjd' + 'FWThkYXZ6dENuTEE0QTU0UWRxbXFZcGhaOVBucWRpaEZ1SjY0aDRlSDlTUXIwNFlCTCtBZ0NQT05GckJsM1FUaXhwdldiMTNIQUFPdVM2L2Zzbz' + 'BuMjJLc3IyWGRCR0xJbWRadmZjY0FBNjVQczM4empsbkxZb0owQ3dKeDQ4MjQzL3FPQXdaY24yYi9aaHdQV2xnUUNBTE10ODdqZ0FIWHFkdW01U' + 'nN0WUFzQ1FTQytqRTBuV3QreHdJRHIwMnd6aGFTdWh3cUZLNWp5ZHFhN2dsVUlYWUFBQXk0QXRYVElNRit0bmRLVTY0c2ZQeGxsZnVlNmRHUEFk' + 'ZW0xT2NGTUsxbVphQk9tNjhwb1F0Z2pWTVdBUjRBNFpZaVlURjNyZDByaWRkWGx5N2t1dlJod1hYcVpWTDB5dmFaT043NmM0L2Y5TEhVUVlNQjE' + '2TFRKTWg2NDhNUmJSWUxObEtxZm5Kb0ovSUJxR2ZBQWFITVYwYktaaTN4ZDlYb3lzaDY5R0hBOVdybTByRWlyT1ZPTmJnaGp4T2RVb0h2ZERMZz' + 'dxMW0zakJQS0VLTlpKYWlxY2daY2gxd011QTZkVExoVGlVNVowalExYVJZbDJ2Tmd3TzE4MHF6Vm9ra2pSUldKTU9BcVpESWZjQjB5Tlg1Z3N4Y' + 'WhrdVRKZ0pNSThZYzB0SUQvQUNqRDZqaVo5UDltVUtLZUhCaHdIVm94NEFwMGNqSlZJRkt5RkIwenlRUzVJeDBHZkFlWVRCOTcrQ0tUR3ZYazRw' + 'SDEvRm94NFB3YStiSE5DalRLbUNJRHpxaktyemt4NEY5NXBIeW4vemVsTEpKQ1lHY0NESGhuaE9VRE1PRHlqSmRZZ3had2ZsVVpjSDZOVEQ5Wmd' + 'VWVpVMlRBR1ZYNU5TY0cvQ3VQbE8rY1NDbGxrUlFDT3hOZ3dEc2pMQitBQVpkbnZNUWE3dDI3dDhUZFd0UStNZUFLNVBTVDR4V0lsREJGeDAxQ1' + 'VXNmt4SUJ2QU1uNDlzR0RCeG5Ua2xOeUFsckF5UVg2SnowR25GK2p4b2xVZ1VqSlV2U2xuVXlRTzlKaHdIZUF5ZlN4UzhsTWF0U1JpMk9tRXAzc' + 'VNIUGRXVHFaMXEzL2tMMTN6QXloTm4wWkxlRHBtZmV1MGNuVUc5bnFDemhtNmpnRUdIQUZPam1aS2hBcFdZcU9tV1NDM0pFT0E3NERUS2FQM1lU' + 'THBFWWR1VERnU25TcUk4MTFaK21POXJyMUg3TDNESGdJdGVuTGFBRlB6N3gzalU2bTNzaFdYOEF4VThjaHdJRHIwTWxZNEVwMHlwS21xNllzU3J' + 'UbndZRGIrYVJacTBXVFJvb3FFbkhmb0FxWlBBbFhoMHovUExKNDMzZGxMVnBseUZNTE9JTUtmODdCV2YxblJpbTJZTUFwWktnbUNTM2dPcVJpd0' + 'JYb2RINSs3bmZoS3RBcFU0b25KeWZOeGNWRnBwVGtjZ3VCdlZzKzgxRVNBbWRuWjgzWHIxK2RTRW4wcUNtTjA5UFRKbDc3Ky92TjBkRlI4L0Rod' + 'zVyU1gwMnVERGloMU5GeTBZSkpLRXlGS2NYVjA3dDM3NXFuVDU4Mmg0ZUg3aVVrMDVBQkp4SWtmdm5pMDZkUG01WkxvclNrc2dBQzBScis5dTFi' + 'OCtMRmkrYlJvMGNMMktObDdJSSs0Q1E2eGk4ZnYzLy9udmttMFdPSmFjUXg5dUhEaDAyMzFoTDNyOFo5MGdKT29OcVBIejgySjhibDVXV0NiS1N' + '3ZEFKeGxSVlhXd2NIQjB2ZjFmVDd4NEJubGlqNmU2UGw2NGMzWnhaaVpkVi8vdng1MHg4Y2ZjT1crUWpvZ3BpUGZST1hoTWZIeDh4M1JnM1dYTF' + 'VidmZPcno0Qm4xT0RqeDQvRzk4N0lYOVhOWnJRTkR2TVJZTUF6c1k4eHZ0Ky9mNStwZHRVaThGOEMwUVVXWTgwdDh4Qmd3UE53YjZJUHpvSkFCZ' + '0lNZUQ0VkdQQU03S1AxYThURERPQlZlU3VCT0Jiam1MUk1UNEFCVDgvY1dOOFptS3V5blVBOHBHR1puZ0FEbnBoNUREZUx4ME10Q0dRaTRIN0VQ' + 'R293NEltNU05K0pnYXV1RTRGb0dNUURRWlpwQ1REZ2FYazd5Q2ZtcmJydUJOeVg2TTVxckMwWjhGZ2tPOGJSeXVnSXltYVRFNGdIZ3l6VEVtREE' + 'wL0pXR3dKcENYZ2NmbnBwR1BEMHpOV0lBQUlJYkFndzRJa1BCTC9WTlRGdzFYVW00SWM4TzZNYWJVTUdQQnJLYm9IOHVHWTNUcmFhbm9CamN3Ym' + '0wMWU1N2hyMzlzd0F1dTRqSU8vZSs5MjQ2YlhSQXA2WU9RT2VHTGpxT2hGZ3ZwMHdqYjRSQXg0ZGFYdkFNR0I5YmUyTXJKMmVRUHg2c21WNkFne' + 'DRldVorRkhFRzVxcHNKK0NIT3R2NWxGckxnRXVSYlluNytQSGpsclZXSVRBdGdiajV4b0NuWmI2dGpRRnZTVXo0Tnc1MmQ1d25CSzZxVmdJYUJL' + 'MTRpcTVrd0VYeDNoMzh5Wk1uZDYrMEJvRUpDZmhoemdsaDM2aUtBZDhBTXRYYlo4K2VUVldWZWhDNGswRGNmRE1DNGs0OHhWY3c0T0tJYjY4Z1J' + 'rSm9CZC9PeHFmVEVUZzRPSml1TWpYOVJvQUIvNFprdWcrMGdxZGpyYWJmQ1VUTDE4MjMzN2xNK1FrRG5wTDJqYnJpQkhBRDVBWVVieWNqb1BVN0' + 'dlbzdLMkxBZDZLWlpzWGg0ZUUwRmFrRmdXc0VmUGxmZ3pIanZ3eDRSdmhSZFR3WjV5NzB6Q0tzc1Bxam82TVY3blcrWFdiQUNUU0pWckJwS2hNS' + 'XNaSVU0dWF2UjQ5emlNMkFFK2dRRDJWb2tTUVFZZ1VwT05aeWljeUFrK2dSM1JER1l5WVJZOEZweE5XV3B6RHpDTXlBODJqUlBILytQRkUyVWxr' + 'YWdlaDJjTDhobDZvTU9KRWUwUUxXRlpGSWtBV2xFdmNZZk1IbkU1UUJKOU1rSHM0d09ENlpLQXRJSjh6WGp3SGtFNUlCNTlPa2VmSGloVW5iRSt' + 'wU2EwcnhwZTZ4OTV6cU1lQ0V1c1JOa3Bjdlh4cWFsbENiMmxLS3F5bmRXbmxWWThCSnRZbis0R2dKV3hBWVNpQW1mSElNRGFVM1RUa0dQQTNuUW' + 'JYRVBCRnVuQXhDdC9wQ2NSWDE2dFVyUTg2U0h3a01PTGxBTVd6SUpXUnlrWktsRitiNyt2VnJOOTJTNlhKYk9nejROaXJKUG91YktGckN5VVJKb' + 'XM2MjVXdkVRMUtCYnFURmdHOEF5Zm8yV3NKTU9LczZPZkxhbXE4bktuUG8wU1dMdlM0YjJTWUhnVERoR0ZCL2NuTFMvUHo1TTBkU3NraEJJRXcz' + 'UnM3RWpUZExQUVFZY0QxYWJUS044Wnh4ZVhsOGZOeGNYbDVXbHIxMFN4Q0ltN1V4MnNHTWVpWG9sbzJwQzZJczN5TFJvN1h6NXMwYlV3b1dvVnR' + 'YMEpoY3g1anh1alM3bnEwVzhIVWFGZjIvdmRQOTlldlg1dlBuejdva0t0SnVqRlRqS2loYXZmcDd4NkE1WHd3R1BCLzdVV3JlemgzeDhlUEg1dU' + 'xpWXBTWWd1UW1FSnFieEQrM1JsMnpZOEJkU1NYZUxscEQwU1Z4ZG5hMmFRM3JHMDRzMWc2cHhYU1NNU1pjcTNjSGlNbUtNdUJrZ3V5U1R0eWdpO' + 'WZwNmVuR2lLK3VybllKcDJ3U0FuRnpMWjVxOHpOQ1NRUVpNUTAzNFVhRW1TVlVERmN6KzFVV05YYlBJeWJVWWI2N2M4d1lnUUZuVkdXRW5Nd3BQ' + 'QUxFSkNGb21VU0lBbWt3NEFKUU00VFVZc3Fnd2pnNTBISWNqaG1qTU9DTXFveVFVL1FidWxrekFzaVpROFJ3US9NNnpDeEN3ZW9aY0VHNGM0ZDI' + '2VHEzQXJ2WFQ4UGRHV2FPd0lBenE3TmpiazdlSFFFbUtFN0RCQ0lVVElFQkY0UTdkK2pvTzR4TFdFdWRCS0liS2VaNXNDeVhnTE56dWRwdTlzd0' + 'pYSy9BMGZvMXdVNjkrblhKbkFGM29WVHhOaTVoNnhYUGwyZTkyblhObkFGM0pWWHBkZ3k0VXVIK1Nac0IxNnRkMTh3WmNGZFNsVzRYbDdEeFpKe' + 'WxMZ0xieWZmcnlscTJmUWt3NEw3RUt0eWVBZGNuR3MzcTAyeEl4Z3g0Q0xYS3lzUURHUjdLcUVlMDZEYWlWejE2N1pJcEE5NkZYa1ZsWS81WVN4' + 'MEVEZzRPNmtoVWxqc1RZTUE3STZ3alFMU3EzTlRKcjFWb1pPNkgvRHFObFNFREhvdGtCWEcwZ3ZPTEZCT3VXOVpEZ0FHdlIrdk5wQzVNT0svZzB' + 'mWGdaK1h6NmxNaU13WmNnbXJpbUhHU3U4R1RUNkRReEpkalBsMUtaOFNBU3hOT0dOL1BtT2NUSlg3aDJMSStBZ3g0ZlpwdkxuT2ZQMysrd2ozUH' + 'VjdWhoVGwvYzJwVE9pc0dYSnB3MHZqeG0zR0dPODB2VG94NjhOREYvRHJNbFFFRG5vdDhnbnFqejlHUGQ4NG5SUFQ3Nm5xWWozK0dtaGx3QmhWb' + 'XpDRU13RTI1NlFXSWVacjF4VS9QUFZ1TkREaWJJalBrOCtyVkt5WThJZmVZSUNtWUczSTJJZlNrVlRIZ3BNSk1tVmEweHNJUTNBaWFobnEwZkYx' + 'MVRNTTZleTBNT0x0Q0UrVVhKdno2OVdzbVhKaDNtSzg1bWd0RHJpZzhBNjVJck5LcGFnbVhKUnpEemN6SFVaWnhiZEVaY0cyS0ZjNDMraVdqSmV' + '3U2VWelFjYlBUY0xOeG1TNGhHZ05lZ29vajc4TzJPOEtsOGpoZ285dkJjTDl4V0M0dENnTmVtcUlqN2MvMlRyMVcyM0NnVzRhNkhZWXpYSHBKQn' + 'J4MGhYZmN2K2kzOU5oeWY0amJyaHhYRWYzWnJhbkUzcHAyMXI0T0l4Q3Q0QmlpZG54ODNGeGRYUTBMc3FKU01hRjZkRHRFVjQ0RmdUWUNqcEEyT' + '3RiOVN5Qk01YzJiTjI3Ty9Vdms5bi9peXlwdVlqTGYyL240OUZjQ0RQaFhIdDYxRUlqTDZqQmgvY0szUTlKZGN6c1huOTVOUUJmRTNXeXN1WU5B' + 'R0UwTVV6czVPYmxqaTNWOXZCMC9iZWpldW5RZlkyKzFnTWVndU1JWTBRcCs5dXpaQ3ZmODkxM1dOZk03RTU5MEk4Q0F1M0d5RlFLM0VvaWhaaWJ' + 'WdVJXTkR6c1FZTUFkSU5rRUFRUVFLRUdBQVplZ0tpWUNDQ0RRZ1FBRDdnREpKZ2dnZ0VBSkFneTRCRlV4RVVBQWdRNEVHSEFIU0RaQkFBRUVTaE' + 'Jnd0NXb2lva0FBZ2gwSU1DQU8wQ3lDUUlJSUZDQ0FBTXVRVlZNQkJCQW9BTUJCdHdCa2swUVFBQ0JFZ1FZY0FtcVlpS0FBQUlkQ0REZ0RwQnNnZ' + '0FDQ0pRZ3dJQkxVQlVUQVFRUTZFQ0FBWGVBWkJNRUVFQ2dCQUVHWElLcW1BZ2dnRUFIQWd5NEF5U2JJSUFBQWlVSU1PQVNWTVZFQUFFRU9oQmd3' + 'QjBnMlFRQkJCQW9RWUFCbDZBcUpnSUlJTkNCQUFQdUFNa21DQ0NBUUFrQ0RMZ0VWVEVSUUFDQkRnUVljQWRJTmtFQUFRUktFR0RBSmFpS2lRQUN' + 'DSFFnd0lBN1FMSUpBZ2dnVUlJQUF5NUJWVXdFRUVDZ0F3RUczQUdTVFJCQUFJRVNCQmh3Q2FwaUlvQUFBaDBJTU9BT2tHeUNBQUlJbENEQWdFdF' + 'FGUk1CQkJEb1FJQUJkNEJrRXdRUVFLQUVBUVpjZ3FxWUNDQ0FRQWNDRExnREpKc2dnQUFDSlFndzRCSlV4VVFBQVFRNkVHREFIU0RaQkFFRUVDa' + 'EJnQUdYb0NvbUFnZ2cwSUVBQSs0QXlTWUlJSUJBQ1FJTXVBUlZNUkZBQUlFT0JCaHdCMGcyUVFBQkJFb1FZTUFscUlxSkFBSUlkQ0RBZ0R0QXNn' + 'a0NDQ0JRZ2dBRExrRjFCVEV2THkrYmVGbWE1dUxpQWdZRUJoSFlHMVJLb2RVUkNMTTlQei9mdkw1Ly84NTgvLzhJK1BuelovUHUzYnZtL3YzN3p' + 'mNytmdlBvMGFQTjM3MDlwOWJxVHBJQk8rd29HUUJ0TFVYQ2RMOTkrOWFjbloxcDVmMUI5S3VycXcycjRCWExnd2NQbXNlUEh6ZFBuanhwSGo1OC' + 'tJZlNWcStWQUFOZXEvSjM3SGNZU1JndTA3MERVTWVQNDh2cjY5ZXZteGN6N2dodGhac3g0QldLZnRzdVI3ZkM2ZW5wcGhWMzIzcWZEU2R3M1l5a' + 'k5mejA2ZE5OeS9qZXZYdkRneXE1Q0FJTWVCRXlEdHVKYU8yRzZjWXJUTUpTbmtEY3NEczVPV2srZmZxME1lRm56NTQxK292TGM4OWFBd1BPcWt6' + 'QnZINzgrTEc1Tkk1dWhyaUpaSm1lUUhEZmZ2bEZYM0VZY2R6RXM2eUxBQU5la2Q3Uit2cnk1WXR1aG1TYXg0MjdlRVgzeE1IQndlYm1YYklVcFZ' + 'PSUFBTXVCRFpUMkREZXo1OC9OOUhQYThsTElIUTZQajVteEhrbEdqMHpCanc2MGp3QjQ0U092c1lZdjJ1cGh3QWpya2VyWFRObHdMc1NURmcrVG' + '1CZERRbUY2Wm5TZFNOKy92eTU4Y1E5K2RXd09RT3VRYVdPT2NaSWhqRGV1TGxqV1E2Qk1PSjQyaTV1MWgwZUhobzFzUnhwR3dhOEFESGpqbm9NK' + '2cvek5hcGhBWUxlc1F2Ym0zVXhZaUtNMkRqaU8wQlY5REVEcmtpczIxS05vV1J4ZzgwNDN0dm9MUE96K0xJTjNZK09qalpqaVplNWwrdllLd1pj' + 'a2M1aHNuRTVHdU40NDIrOEdHOUZBbzZZYWp4RTgvSGp4ODJYYnd4ZmkxYzgwQkYvNDlGblN4MEVHSEJpbmNKY1kraFlHSzBaeUJJTE5XTnFjWXp' + 'FYXpzSlVLUVNCaHdQZFd4bloyUElNd3IwaDZvWjhCOEFUYjE2ZXpLWkRHZHE4c3VwTDQ2aE9IN2lGVXUwaW1OV3RyaUp4NHh6NmN5QWsrZ1JMWm' + 'pvMnpObU40a2dDMHBqMjEwVlk4S2pWUnczOGNLTUxmTVRZTUF6YXhCRHhzSjRvMS9YZ2tCcEF0dEo5YU8vT0l3NFptYXp6RWVBQWMvRVBpNFBqV' + 'jZZQ2I1cU4xLzRNU3RiREYyTUlXM1JSV0dabmdBRG5waDVYQTdHZ1I5L0xRak1UU0Q2aTJNMFJWeUZlZHB1ZWpYOEtPZUV6S08xRVU4ME1kOEpv' + 'YXVxRTRFNEp1UFlqR1BVTWgwQkxlQUpXRWNySTJhNVlyd1R3RmJGVGdTaVd5eHVDTDk4K2RLSWlaMUlkaXVzQmR5TjArQ3R3blRmdjMvUGZBY1R' + 'WSEJxQW83WjZZZ3o0SUtzNCtHSk1OOW9BVnNRcUlsQUhMTng3SnBEdXF4cURMZ1Ezemh3UDN6NFlIS2NRbnlGTFU4Z0puYUtZNWdKbDJQTmdBdX' + 'dqVXU0NlBPMUlMQUVBdTVmbEZPUkFZL01OaDZvaUVzMzAwS09ERmE0MlFqRXNSekh0SWVGeHBlQUFZL01OTVpVTXQrUm9RbzNPNEU0cHVQWXRve' + 'ExnQUdQeU5NREZpUENGQ29kZ2VoYWkyUGNNaDRCQmp3U3l4Zzc2YWVBUm9JcFRGb0NjWXhmbi9veWJhS1ZKTWFBUnhJcVpwcXlJTEFHQW83MThW' + 'Um13Q093TktuT0NCQ0ZxSVpBakJHT1k5NnlPd0VHdkNQRCtHa1l6OC92Q0ZIeDZnakVNUi9Idm1VM0FneDROMzdNZDBkK2l0ZExRTU5qZCswWTh' + 'BNE1ZMmlPRzI4N0FGUzBhZ0p4N0J0eXVadUVESGdIZmc3QUhlQXBXajBCRFpEZEpXVEFPekRjL3VqaERpRVVSYUJxQXM2QjNlUmp3QVA1eGFEMG' + 'VGa1FXRE1CNThGdTZqUGdnZng4OHc4RXA5amlDRGdYaGt2S2dBZXlNMFhmUUhDS0xZNkFjMkc0cEF4NEFMc1lpRzVtcUFIZ0ZGa2tnVGdYL09qQ' + 'U1Ha1o4QUJ1dnZFSFFGTmswUVNjRThQa1pjQUR1SjJmbnc4b3BRZ0N5eVhnbkJpbUxRTWV3TTNvaHdIUUZGazBBZWZFTUhrWjhBQnUrbjhIUUZO' + 'azBRU2NFOFBrWmNBOXVmbW03d25NNXFzaDROem9MelVEN3NuTU4zMVBZRFpmRFFIblJuK3BHWEJQWm9iYjlBUm04OVVRY0c3MGw1b0I5MlRtSU9' + 'zSnpPYXJJZURjNkM4MUErN0p6Q1RVUFlIWmZEVUVuQnY5cFdiQVBabjVsdThKek9hckllRGM2QzgxQSs3SnpMZDhUMkEyWHcwQjUwWi9xUmx3VD' + 'JaK0FhQW5NSnV2aG9Cem83L1VETGduTXdkWlQyQTJYdzBCNTBaL3FSbHdmMlpLSUlBQUFxTVFZTUE5TWZxVzd3bk01cXNoNE56b0x6VUQ3czlNQ' + '1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQUVFUmlIQWdFZkJLQWdDQ0NEUW53QUQ3czlNQ1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBK' + 'TU9EK3pKUkFBQUVFUmlIQWdFZkJLQWdDQ0NEUW53QUQ3czlNQ1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQUVFUmlIQWdFZkJLQWd' + 'DQ0NEUW53QUQ3czlNQ1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQUVFUmlIQWdFZkJLQWdDQ0NEUW53QUQ3czlNQ1FRUVFHQVVBZ3' + 'g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQUVFUmlIQWdFZkJLQWdDQ0NEUW53QUQ3czlNQ1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQ' + 'UVFUmlIQWdFZkJLQWdDQ0NEUW53QUQ3czlNQ1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQUVFUmlIQWdFZkJLQWdDQ0NEUW53QUQ3' + 'czlNQ1FRUVFHQVVBZ3g0Rkl5Q0lJQUFBdjBKTU9EK3pKUkFBQUVFUmlIQWdIdGl2SDhmc3A3SWJMNFNBczZOL2tKems1N005dmYzZTVhd09RTHJ' + 'JT0RjNksvenZiZHYzLzdzWDB3SkJCQkFBSUZkQ1dnQjcwcFFlUVFRUUdBZ2dmOERvTEVXWUxUb2Q2c0FBQUFBU1VWT1JLNUNZSUk9Ij48L2ltYW' + 'dlPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlVJLUtpdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtc' + 'nVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IjgtU3VwcGxlbWVudHMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zODcuMDAwMDAwLCAtMTky' + 'MS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9InBhZ2luYXRpb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgMTgwMy4wMDA' + 'wMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJyb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzM2LjAwMDAwMCwgMTE3LjAwMDAwMCkiPg' + 'ogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJNYXNrIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSJ1cmwoI3BhdHRlcm4tM' + 'ikiIGZpbGwtcnVsZT0iZXZlbm9kZCIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IHN0' + 'cm9rZT0iI0UxRTFFMSIgc3Ryb2tlLXdpZHRoPSIxIiB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjE3NSIgaGVpZ2h0PSIxNzUiPjwvcmVjdD4KICA' + 'gICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cj' + 'wvc3ZnPg=='
/* eslint-enable max-len */
;
/**
 * @develop
 */

var Avatar =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Avatar, _React$PureComponent);

  function Avatar() {
    _classCallCheck(this, Avatar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Avatar).apply(this, arguments));
  }

  _createClass(Avatar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          src = _this$props.src,
          other = _objectWithoutProperties(_this$props, ["src"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        src: src.length === 0 ? placeholder : src
      }, other));
    }
  }]);

  return Avatar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Avatar.propTypes = {
  /**
   * Ссылка на картинку
   */
  src: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Размер
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['large', 'medium', 'small']),

  /**
   * Круглая
   */
  round: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Дополнительный CSS класс
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Дополнительные CSS стили
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape()
};
Avatar.defaultProps = {
  src: '',
  size: 'medium',
  round: false,
  className: '',
  style: {}
};


/***/ }),

/***/ "./src/Avatar/styled.js":
/*!******************************!*\
  !*** ./src/Avatar/styled.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    border-radius: ", ";\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        width: 40px;\n        height: 40px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        width: 32px;\n        height: 32px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        width: 176px;\n        height: 176px;\n        background: url(", ");\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* eslint-disable max-len */

var largePlaceholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAACuCAYAAACvDDbuAAALU0lEQVR4Ae2d2XLbSA' + 'xF5/+/Mk5iZ9/3xFUcH03uuE1rISVRBND3gUVqo7qBg0v0wuY/V1dXw4cPH4avX796sw3SMPAP4H779m24vb0d/vz54802CM8ArG7ARW2B9vf' + 'v395sg/AMwKrBNajhQR0LqsE1tOmgBWKDa3AN7ljO/drthaUYsOJaca24S0WXz2vlHjNgxbXiWnHHUeHXVsqlGLDiWnGtuEtFl89r5R4zYMW1' + '4lpxx1Hh11bKpRiw4lpxrbhLRZfPa+UeM2DFteJaccdR4ddWyqUYsOJaca24S0WXz2vlHjNgxbXiWnHHUeHXVsqlGLDiWnGtuEtFl89r5R4zY' + 'MW14lpxx1Hh11bKpRiw4lpxrbhLRZfPe7pyo1Bs2FL7zHa14hZV3BbUnz9/Dp8/fx7evHkz3NzcDO/evRt+/fqVUmkVbAb3jOAKlvFexl5y3/' + '4n//P9+/fh06dPw6tXr4bnz58PLGz45MmT/zdA5jdLlmnJc1N2rx12BLwCBeegaIDCipdsLCCoY95n+/Hjx+Z7fJcNxTtF9fT79r+B8e3btxt' + 'Vffr06f+QAm27AfD79+8N7pKRFencUiggRM2A5MWLFxtFe/bs2QAsbECiY/Z8xobyabu+vh7ajUu4Ns65bdPn+p3Opf9uFbUFdXzM91gPWfWJ' + 'ZOOpZbHiTlBbjITCoWhcegFlKiRjaNrX7TmOOW7PNeeY/yLwDO4E50+NpGjfw7lc+lFAwTUHkqjfzb4eshV3T9BhnI8fP24u+0AbFcK55eKKQ' + 'boTTSTmlMfg7gAXw3A5nQtF9O8TgFw95kAS8bsG9y+4GEIOoqX+5cuXTS4bHcS55QNc+nHb+qremfZdgyvnqc/z9evXm5Y9rXX1DswFI8P3CU' + 'rVPROsbVm7BFdOw4EvX748Wy9BBmjpSjul/7iFZ83j7sClwigswAJapUbXocChrvQ9K3DXBO/U/+4KXCpbsZfgELD6nPSHET2Du6NFfmo0LfV' + '7GiU9KayAZU+9GTxZyraXPm83itsztAI4+6BDGxzlwVV6IOf1uEdtmdLYOj77cXlwaYgxUtQjsKoz9ccO2WFty18eXPK6XvNagUv9s88Ga6Hl' + 'uCy4VIx+Wjmv932F+QktvGXBpZJW2/sJ5NVUtyy4zm3voeVqA7gVJtdIdUuCS6UYaOg9tx2nR6QLTCCS8zPvS4KLQ5gwY3Afqq5HzoKPmDGJh' + 'MkkY8Xx66vN7UeoVWa1pewlFZfZ/b333W4LUq5ApFAGN6Dy4hQmklSeT7sNyinvAW6V/txyikuF3H/7MLcV1AY3oNIqZzO426EFXsDNvhBI6+' + 'dSK9kY3P3gOscNqrqAy/Q957iPAUZxsy8EUlZxqRijZgb3MbikCxVulMTHCFSpVIFKuTtsO7QEc5XJ5CXBZQCCW8zVmvb+P5ABt8q83JLgoro' + 'eOXusup6rcAcGcETdiEYtUme1vQeYqxA+wz5RfTe1XKUUl8ow+4kuH6cK98AqeEkVWFehwi3qpcBl/VpSBLp95CzvHwKMbQA4+3MgyoCLI4DU' + '0D4EdVfgYidW8+EKBQRTL9FRvlcCXG69NrDTgG1BxmZZFwlJDS6F950O84Edw5txxlhqcLnMOac9HVxsmO2WnrTgUnAaY616+Ph4iLMNBacGl' + '64d57bHw6pAx4bZpjumBZfWrddNOB1a4AXcbOvmGtw7x0l5et0b3AsPAztVOE/QAW62noW0ikvB3RV2HnC50rhxdiHVBVzfzXsecJnX4e6wC4' + 'GroUfPAjsNXtIERh4RAtk0wz5tqoBxKTz3UGH8XhtWp9abCTcZZ4ulBhd4udvh5ubG8B7RO0LA06WYTW0lWqnvOZPqnqo8Pf4+q9qWAJdKsDF' + 'FzynD9HwXW2UbdJCvy4CL6rqHYR60GSfWlANXEUgnulV3GsBMUMqY2wpeyp46x1VFtPf8hf3gEtjZJtTIt+2+HLj0Mrhvdzu8QMtK7S0AWY/L' + 'gUuFGAUyvA/hBVquRgR2VljbcpcDV5UDXvc03MPrR6L+7X4SIJH3qAtdPj320VJnNVSzzfyawlRZxW0rz7AwE0nkyB5Apq6MKFZZ5K71J8ddg' + 'EslWcGR1jSjRdXBpY6oLFcc6j52eoXXXYArR1HZ6mswoLT0HFQFtvVlqX5cVWzbHmeSNlRWXMCtslz+Nh/qva4Ul0r3sFo5w99ycNV9d+DiyK' + 'p9vGqQVYW1rVd34FJhGmk4uVrKQJ1Y/I86tk6ueNwduDixarpAb0KVpfIPBVuX4FLpak9XR2176E0Q0N2CW011pbY4VM6tvO8SXBxKxemkr5D' + 'rUocKUxXnBFq34GIkRpayT8QBWupQZdbXVHi7BpfKMxSc9S5hoGUOBnWgLlOdXuF7XYOLAzEA+W7Gp/SQ11adRHMouLoHV/Ay2sQD7DLlvNnv' + 'GzsE577PDe6d6rbwZpj+iNIC7T7HVv/M4P4FV/BGznm5GghaHFcdzn31M7gNuIKX236i3S2shlivOe0YYoM7Arc1kB76t/acBqBlYlCPvQetP' + '9pjg7sHXIzDIMWa4AItQ7m99dO2kG47NrgHwGWl7rXB7WFi+DY4971ncA1uykaewTW4BneftGf8jKh2qvBfP3c0/1lxrbhW3GhReWp5rLgx1R' + 'a/WnGtuFbcUxUu2u+tuFbctFHtxllMeJ0qOFVIKyrdLME0NxVxqhBTbd0426O2Mo5ThZjwOlXYA68VNya0EhWnCjvgNbgGN20DwKlCTHidKux' + 'QW12ODK7BTae6ThViQitRcY67Q3UNrsFNp7aKaqcKMeF1jrtHbW9vb8PMx6UsOIuA8ubZYQ8gAAw2bkzkNnBWQOTu2jXvOeO/r6+vN2VB/bl1' + 'XuXsGWBs0H2OK1gBg8dJAQrAcIct29rgtuVgpR3u+mUlGwKMsvcIcNfgUnnWKuAWdFZsFKxrg3ro/xVMBBhrP7BoX28AdwkulcbZPOdXC90Jh' + 'kPQRPpcSkwduFJQJ9S3B4i7ArcFljW4MsK6K3CoC3USwNXh7QJcKklK0CrsLgCyvy+AqWvlJZtKgkul2Gi84DxWgsmwfOg5gwaASSHI37GBGn' + 'LYpUJjrgy4cgh5Hs/rpeVNV5Zy2HNCkelcAhhbYBOCuEIunB5cKkDfJrDyEA/yPMDCYWyZIFuyrK09sBG2wmbqF86mwmnBpeBc/lCQtt91Sed' + 'XOreCGtthQ6USWQBOCS6F5pkNelqOnFAJrEvVRUqMLbEpts0AbzpwKTCXuGrdWZcCddf/ADA2xbYZ4E0FLoWllbzL+H7/6iy2wcbR4U0DLgVF' + 'DQzneeA8ZMfoypsCXApJF07vXVuHYDvX56QN2BqbY/uIOW8KcDEc/ZBuhF1GbQkAbI3NI0JLmcKDSwG5bBnay0Er5cbmUVOG8ODSv6huLxnU+' + '8tADLjYHh9EU97Q4FK4te/5cpBcbXyALyLBGxpcDMU0PacJl1HYbUGK7fFBJGgpS2hwuURpOHebUf3eZYDGB9HShbDgUjCGIDVpxpBeBtJtds' + 'YH0YaDQ4Pr3oT1YG0Bjti7EBpcbgR0frs+vPgAXwBLlFw3LLgYiInPBjcGuPgiCrThG2ceLVsfWlIGxCPaKFpoxfXAQxxw8YUV9y4NmGIEumG' + 'cKqwPLz7AF1N8dqnvhFZcg7s+tEoVDO5EtSVyDa7B3aXgVty7xkfbZ+njx/ZwqjBDba24jwFaK6gMrsFNqe4G1+Aa3JkMOMd1Lnt00FhxZ0ab' + 'exVi5LkG1+AerXprNcz4X4NrcA3uTAac4zrHPTporLgzo805rnNcK64V14q7KwrO/b4V14q7iynPVbASH1Ti0Dkud3HqebHQHGGz4sZS3AhMq' + 'AywunkkKmui8vzaSJvvgIgDLr6IxAZl+RfEAwzxEaHoKQAAAABJRU5ErkJggg==';
/* eslint-enable max-len */

function largeSize() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), largePlaceholder);
}

function smallSize() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
}

function defaultSize() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
}

function size(props) {
  switch (props.size) {
    case 'large':
      return largeSize();

    case 'small':
      return smallSize();

    default:
      return defaultSize();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img(_templateObject4(), function (props) {
  return props.round ? '50%' : '0';
}, size));

/***/ }),

/***/ "./src/AvatarCard/index.jsx":
/*!**********************************!*\
  !*** ./src/AvatarCard/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AvatarCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Avatar */ "./src/Avatar/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/AvatarCard/styled.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @develop
 */

var AvatarCard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AvatarCard, _React$PureComponent);

  function AvatarCard() {
    _classCallCheck(this, AvatarCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(AvatarCard).apply(this, arguments));
  }

  _createClass(AvatarCard, [{
    key: "render",
    value: function render() {
      var online = this.props.online;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], this.props), online && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Online"], null));
    }
  }]);

  return AvatarCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

AvatarCard.propTypes = _objectSpread({}, _Avatar__WEBPACK_IMPORTED_MODULE_2__["default"].propTypes, {
  /**
   * Индикатор нахождения в сети
   */
  online: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
});
AvatarCard.defaultProps = {
  online: true
};


/***/ }),

/***/ "./src/AvatarCard/styled.js":
/*!**********************************!*\
  !*** ./src/AvatarCard/styled.js ***!
  \**********************************/
/*! exports provided: Wrapper, Online */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Online", function() { return Online; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    top: 0;\n    right: 12px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: max-content;\n    box-sizing: border-box;\n    overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
/**
 * todo доделать для других размеров, когда будет дизайн
 * расположение для medium-size
 */

var Online = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject2(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green);

/***/ }),

/***/ "./src/Badge/index.jsx":
/*!*****************************!*\
  !*** ./src/Badge/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Badge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Badge/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * @develop
 */

var Badge =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Badge, _React$PureComponent);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, _getPrototypeOf(Badge).apply(this, arguments));
  }

  _createClass(Badge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["children"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["default"], other, children);
    }
  }]);

  return Badge;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Badge.propTypes = {
  /**
   * Подпись бейджа
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Цвет фона
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['blue', 'green', 'red', 'gold', 'gray']),

  /**
   * Размер
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['medium', 'small']),

  /**
   * Круглые углы
   */
  round: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Дополнительный CSS класс
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Badge.defaultProps = {
  color: 'gray',
  size: 'medium',
  round: false,
  className: '',
  children: null
};


/***/ }),

/***/ "./src/Badge/styled.js":
/*!*****************************!*\
  !*** ./src/Badge/styled.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    color: ", ";\n    border-radius: 2px;\n    background-color: ", ";\n    \n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        padding: 5px 10px;\n        font: 600 13px \"Open Sans\", sans-serif;\n        line-height: 14px;\n        border-radius: ", "px;\n        &:empty {\n            width: 12px;\n            height: 12px;\n            padding: 0;\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        padding: 3px 5px;\n        font: 700 10px \"Open Sans\", sans-serif;\n        line-height: 10px;\n        border-radius: ", "px;\n        &:empty {\n            width: 8px;\n            height: 8px;\n            padding: 0;\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function mapColor(props) {
  switch (props.color) {
    case 'red':
      return _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Red;

    case 'gold':
      return _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gold;

    case 'green':
      return _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green;

    case 'blue':
      return _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue;

    default:
      return _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray;
  }
}

function smallSize(round) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), round ? 8 : 2);
}

function defaultSize(round) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), round ? 12 : 2);
}

function size(props) {
  switch (props.size) {
    case 'small':
      return smallSize(props.round);

    default:
      return defaultSize(props.round);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject3(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White, mapColor, size));

/***/ }),

/***/ "./src/Button/index.jsx":
/*!******************************!*\
  !*** ./src/Button/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ "./src/index.js");
/* harmony import */ var _Ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Ripple */ "./src/Ripple/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./src/Button/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var RIPPLE_COLOR_FOR_DEFAULT = {
  blue: 'blue',
  green: 'green',
  gold: 'gold',
  red: 'red',
  gray: 'gray'
};
var RIPPLE_COLOR_FOR_CONTRASTED = {
  blue: 'lightBlue',
  green: 'lightGreen',
  gold: 'lightGold',
  red: 'lightRed',
  gray: 'lightGray'
};
var RIPPLE_COLOR_FOR_INFO = 'pale';
var SIDE_GUTTERS = ['12', '16', '20', '24', '28', '32', '36', '40', '44', '48'];
/**
 * @develop
 */

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));

    _this.onRippleFinish = function (_rid) {
      var ripples = _this.state.ripples;

      _this.setState({
        ripples: ripples.filter(function (_ref) {
          var rid = _ref.rid;
          return rid !== _rid;
        })
      });
    };

    _this.onClick = function (e) {
      if (_this.props.disabled) return;

      _this.initRipple(e);

      _this.props.onClick(e);
    };

    _this.state = {
      ripples: []
    };
    _this.rippleCycles = [];
    _this.RID = 0;
    return _this;
  }

  _createClass(Button, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.rippleCycles.forEach(function (cycle) {
        return clearTimeout(cycle);
      });
      this.rippleCycles = [];
    }
  }, {
    key: "getRippleColor",
    value: function getRippleColor() {
      var _this$props = this.props,
          color = _this$props.color,
          contrast = _this$props.contrast,
          info = _this$props.info,
          disabled = _this$props.disabled;

      switch (true) {
        case disabled:
          return 'silver';

        case contrast:
          return RIPPLE_COLOR_FOR_CONTRASTED[color];

        case info:
          return RIPPLE_COLOR_FOR_INFO;

        default:
          return RIPPLE_COLOR_FOR_DEFAULT[color];
      }
    }
  }, {
    key: "useRID",
    value: function useRID() {
      this.RID += 1;
      return this.RID;
    }
  }, {
    key: "initRipple",
    value: function initRipple(e) {
      var _this2 = this;

      var _this$props2 = this.props,
          hollow = _this$props2.hollow,
          disabled = _this$props2.disabled;
      var ripples = this.state.ripples;
      if (hollow || disabled) return;
      var rid = this.useRID();
      var bounding = e.currentTarget.getBoundingClientRect();
      this.setState({
        ripples: [].concat(_toConsumableArray(ripples), [{
          rid: rid,
          top: e.clientY - bounding.top,
          left: e.clientX - bounding.left
        }])
      });
      var rippleCountdown = setTimeout(function () {
        return _this2.onRippleFinish(rid);
      }, _Ripple__WEBPACK_IMPORTED_MODULE_3__["RIPPLE_DURATION"]);
      this.rippleCycles.push(rippleCountdown);
    }
  }, {
    key: "renderRipple",
    value: function renderRipple() {
      var ripples = this.state.ripples;
      var color = this.getRippleColor();
      return ripples.map(function (_ref2) {
        var rid = _ref2.rid,
            top = _ref2.top,
            left = _ref2.left;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Ripple__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: rid,
          top: top,
          left: left,
          color: color
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          tagName = _this$props3.tagName,
          icon = _this$props3.icon,
          iconPosition = _this$props3.iconPosition,
          loading = _this$props3.loading,
          disabled = _this$props3.disabled,
          children = _this$props3.children,
          other = _objectWithoutProperties(_this$props3, ["tagName", "icon", "iconPosition", "loading", "disabled", "children"]);

      var prependIcon = icon && iconPosition === 'before';
      var appendIcon = icon && iconPosition === 'after';
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["StyledButton"], _extends({
        as: tagName,
        disabled: disabled || loading
      }, other, {
        onClick: this.onClick
      }), this.renderRipple(), prependIcon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["IconWrapper"], null, icon), children.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["ButtonText"], {
        prependIcon: prependIcon,
        appendIcon: appendIcon
      }, loading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Spinner"], null) : children), appendIcon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["IconWrapper"], null, icon));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Button.propTypes = {
  /**
   * Тэг
   */
  tagName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Текст кнопки
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * CSS класс для root элемента
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Цвет
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['green', 'blue', 'red', 'gold', 'gray']),

  /**
   * Изменяет отображение кнопки на контрастную
   */
  contrast: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Изменяет отображение кнопки на прозрачную
   */
  hollow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Изменяет отображение кнопки на второстепенную
   */
  secondary: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Изменяет отображение кнопки на информационную
   */
  info: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Изменяет отображение кнопки на неактивную
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Элемент внутри кнопки перед текстом. Обертка для него ограниченна 16х16 пикселей
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Элемент внутри кнопки после текста. Обертка для него ограниченна 16х16 пикселей
   */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['before', 'after']),

  /**
   * Показывает анимацию загрузки
   */
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Отступы слева и справа
   */
  side: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([].concat(SIDE_GUTTERS, _toConsumableArray(SIDE_GUTTERS.map(function (gutter) {
    return parseInt(gutter, 10);
  })))),

  /**
   * Обработчик клика
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Button.defaultProps = {
  tagName: 'button',
  children: '',
  className: '',
  color: 'green',
  contrast: false,
  hollow: false,
  secondary: false,
  info: false,
  disabled: false,
  icon: null,
  iconPosition: 'before',
  side: 12,
  loading: false,
  onClick: function onClick() {}
};


/***/ }),

/***/ "./src/Button/styled.js":
/*!******************************!*\
  !*** ./src/Button/styled.js ***!
  \******************************/
/*! exports provided: StyledButton, ButtonText, IconWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledButton", function() { return StyledButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonText", function() { return ButtonText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    z-index: 200;\n    position: relative;\n    display: inline-block;\n    top: -1px;\n    width: 16px;\n    height: 16px;\n    line-height: 16px;\n    vertical-align: middle;\n    & > * {\n        max-width: 16px;\n        max-height: 16px;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    z-index: 200;\n    position: relative;\n    display: inline-block;\n    padding: 0 2px;\n    margin-left: ", "px;\n    margin-right: ", "px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    overflow: hidden;\n    position: relative;\n    padding: 12px ", "px;\n    font-size: 14px;\n    line-height: 16px;\n    font-weight: 600;\n    text-transform: ", ";\n    color: #fff;\n    background-color: ", ";\n    border: 0;\n    border-radius: 2px;\n    cursor: pointer;\n    outline: none;\n    transition:\n        background-color .12s linear,\n        color .12s linear,\n        box-shadow .2s linear,\n        border-color .12s linear;\n        \n    ", "\n    \n    &[disabled] {\n        color: ", ";\n        background-color: ", ";\n        cursor: not-allowed;\n        pointer-events: none;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        padding-top: 11px;\n        padding-bottom: 11px;\n        color: ", ";\n        border: 1px solid ", ";\n        background-color: ", ";\n        font-weight: 400;\n        &:hover, &:active {\n            color: ", ";\n        }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n        background-color: ", ";\n        &:hover, &:active {\n            color: ", ";\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n        border: 1px solid ", ";\n        background-color: transparent;\n        &:hover, &:active {\n            color: ", ";\n            border-color: ", ";\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n        &:hover, &:active {\n            color: ", ";\n            background-color: ", ";\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function filled(color, activeColor) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), color, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White, activeColor);
}

function hollow(color, activeColor) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), color, color, activeColor, activeColor);
}

function contrast(color, activeColor) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), color, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White, activeColor);
}

function fillInfo() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepBlue);
}

function fillHollow(props) {
  switch (props.color) {
    case 'red':
      return hollow(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Red, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepRed);

    case 'gold':
      return hollow(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gold, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepGold);

    case 'green':
      return hollow(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepGreen);

    case 'blue':
      return hollow(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepBlue);

    default:
      return hollow('#c6c6c6', _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray);
  }
}

function fillContrast(props) {
  switch (props.color) {
    case 'red':
      return contrast(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Red, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepRed);

    case 'gold':
      return contrast(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gold, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepGold);

    case 'green':
      return contrast(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepGreen);

    case 'blue':
      return contrast(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepBlue);

    default:
      return contrast('#c6c6c6', _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray);
  }
}

function fillDefault(props) {
  switch (props.color) {
    case 'red':
      return filled(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Red, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepRed);

    case 'gold':
      return filled(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gold, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepGold);

    case 'green':
      return filled(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepGreen);

    case 'blue':
      return filled(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepBlue);

    default:
      return filled('#c6c6c6', _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray);
  }
}

function fill(props) {
  switch (true) {
    case props.hollow:
      return fillHollow(props);

    case props.contrast:
      return fillContrast(props);

    case props.info:
      return fillInfo();

    default:
      return fillDefault(props);
  }
}

var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject5(), function (props) {
  return props.side;
}, function (props) {
  return props.secondary ? 'none' : 'uppercase';
}, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale, fill, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale);
var ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject6(), function (props) {
  return props.prependIcon ? 10 : 0;
}, function (props) {
  return props.appendIcon ? 10 : 0;
});
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject7());

/***/ }),

/***/ "./src/Calendar/Day/index.jsx":
/*!************************************!*\
  !*** ./src/Calendar/Day/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Day; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Calendar/Day/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Day =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Day, _React$PureComponent);

  function Day() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Day);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Day)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onClick = function () {
      var _this$props = _this.props,
          selectable = _this$props.selectable,
          onClick = _this$props.onClick;
      if (!selectable) return;
      onClick();
    };

    return _this;
  }

  _createClass(Day, [{
    key: "render",
    value: function render() {
      var value = this.props.value;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
        onClick: this.onClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Text"], null, value));
    }
  }]);

  return Day;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Day.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  selectable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Day.defaultProps = {
  selectable: false,
  onClick: function onClick() {}
};


/***/ }),

/***/ "./src/Calendar/Day/styled.js":
/*!************************************!*\
  !*** ./src/Calendar/Day/styled.js ***!
  \************************************/
/*! exports provided: Wrapper, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.js");
function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    z-index: 200;\n    padding: 6px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            cursor: pointer;\n            &::after {\n                position: absolute;\n                z-index: 100;\n                content: '';\n                top: 50%;\n                left: 50%;\n                width: 24px;\n                height: 24px;\n                margin: -12px 0 0 -12px;\n                background-color: transparent;\n                border-radius: 50%;\n                transition: background-color .12s linear;\n            }\n            &:hover {\n                color: #fff;\n                &::after {\n                    background-color: ", ";\n                }\n            }\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    cursor: default;\n    ", "\n    \n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n        &::before {\n            position: absolute;\n            z-index: 0;\n            content: '';\n            top: 50%;\n            left: 50%;\n            width: 24px;\n            height: 24px;\n            margin: -12px 0 0 -12px;\n            background-color: ", ";\n            border-radius: 50%;\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function fillCurrent() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue);
}

function fillPast() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray);
}

function fillWeekEnd() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray);
}

function fill(props) {
  switch (true) {
    case props.current:
      return fillCurrent();

    case props.past:
      return fillPast();

    case props.weekEnd:
      return fillWeekEnd();

    default:
      return '';
  }
}

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject4(), function (props) {
  return props.selectable ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepBlue) : '';
}, fill);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject6());

/***/ }),

/***/ "./src/Calendar/index.jsx":
/*!********************************!*\
  !*** ./src/Calendar/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calendar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/moment */ "./src/lib/moment.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon */ "./src/Icon/index.jsx");
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Day */ "./src/Calendar/Day/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styled */ "./src/Calendar/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var DAYS_IN_WEEK = 7;
var SATURDAY = 6;
var SUNDAY = 0;
/**
 * @version 1.0.0
 */

var Calendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props));

    _this.onSelectPreviousMonth = function () {
      var selected = _this.state.selected;
      var previous = selected.clone().subtract(1, 'month');

      _this.setState({
        selected: previous,
        dates: _this.getDates(previous)
      });
    };

    _this.onSelectNextMonth = function () {
      var selected = _this.state.selected;
      var next = selected.clone().add(1, 'month');

      _this.setState({
        selected: next,
        dates: _this.getDates(next)
      });
    };

    _this.now = Object(_lib_moment__WEBPACK_IMPORTED_MODULE_2__["default"])().startOf('day');
    _this.state = {
      dates: _this.getDates(props.selected),
      selected: props.selected
    };
    return _this;
  }
  /**
   * Формирует список всех дат в выбранном месяце для отрисовки сетки календаря
   * @param selected - выбранная дата
   * @returns {*} - массив дат
   */


  _createClass(Calendar, [{
    key: "getDates",
    value: function getDates(selected) {
      // часть дней из прошлого месяца для заполнения сетки календаря
      var previousDates = this.getPreviousMonthDates(selected); // все дни выбранного месяца

      var selectedDates = this.getSelectedMonthDates(selected); // часть дней из следующего месяца для заполнения сетки календаря

      var nextDates = this.getNextMonthDates(selected);
      return [].concat(_toConsumableArray(previousDates), _toConsumableArray(selectedDates), _toConsumableArray(nextDates));
    }
    /**
     * Возвращает первый день недели
     * @param selected - выбранная дата
     * @returns {number}
     */

  }, {
    key: "getFirstDayOfWeek",
    value: function getFirstDayOfWeek(selected) {
      var weekOffset = this.props.weekOffset;
      var originDay = selected.clone().startOf('month').day();
      var offset = weekOffset % SATURDAY;
      return originDay ? originDay - offset : SATURDAY + 1 - offset;
    }
    /**
     * Формирует список дат из предыдущего месяца для заполнения сетки
     * @param selected - выбранная дата
     * @returns {Array}
     */

  }, {
    key: "getPreviousMonthDates",
    value: function getPreviousMonthDates(selected) {
      // номер первого дня недели в выбранном месяце
      var firstDayOfWeek = this.getFirstDayOfWeek(selected); // предыдущий месяц

      var previousMonth = selected.clone().subtract(1, 'month').startOf('month'); // количество дней в преыдущем месяце

      var daysCount = previousMonth.daysInMonth();
      var dates = [];

      for (var i = 0; i < firstDayOfWeek; i += 1) {
        dates.push(previousMonth.clone().set('date', daysCount -= 1));
      }

      dates.reverse();
      return dates;
    }
    /**
     * Формирует список дат из выбранного месяца для заполнения сетки
     * @param selected - выбранная дата
     * @returns {Array}
     */

    /* eslint class-methods-use-this: 0 */

  }, {
    key: "getSelectedMonthDates",
    value: function getSelectedMonthDates(selected) {
      var selectedMonth = selected.clone().startOf('month'); // количество дней в выбранном месяце

      var daysCount = selectedMonth.daysInMonth();
      var dates = [];

      for (var i = 1; i <= daysCount; i += 1) {
        dates.push(selectedMonth.clone().set('date', i));
      }

      return dates;
    }
    /**
     * Формирует список дат из следующего месяца для заполнения сетки
     * @param selected - выбранная дата
     * @returns {Array}
     */

  }, {
    key: "getNextMonthDates",
    value: function getNextMonthDates(selected) {
      // номер первого дня недели в выбранном месяце
      var firstDayOfWeek = this.getFirstDayOfWeek(selected); // следующий месяц

      var nextMonth = selected.clone().add(1, 'month').startOf('month'); // количество дней в выбранном месяце

      var daysCount = selected.daysInMonth(); // количество полных недель в сетке

      var weeks = Math.ceil((daysCount + firstDayOfWeek) / DAYS_IN_WEEK);
      var dates = [];

      for (var i = 1; i <= weeks * DAYS_IN_WEEK - daysCount - firstDayOfWeek; i += 1) {
        dates.push(nextMonth.clone().set('date', i));
      }

      return dates;
    }
  }, {
    key: "isPreviousMonthDisabled",
    value: function isPreviousMonthDisabled() {
      var min = this.props.min;
      var selected = this.state.selected;
      return selected.clone().subtract(1, 'month').startOf('month').isBefore(min.startOf('month'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          weekOffset = _this$props.weekOffset,
          min = _this$props.min,
          dateComponent = _this$props.dateComponent,
          onSelect = _this$props.onSelect;
      var _this$state = this.state,
          dates = _this$state.dates,
          selected = _this$state.selected;
      var weekDays = [].concat(_toConsumableArray(_lib_moment__WEBPACK_IMPORTED_MODULE_2__["default"].weekdaysMin().slice(weekOffset)), _toConsumableArray(_lib_moment__WEBPACK_IMPORTED_MODULE_2__["default"].weekdaysMin().slice(0, weekOffset)));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["Wrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["Header"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["Nav"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["SwitchButton"], {
        onClick: this.onSelectPreviousMonth,
        disabled: this.isPreviousMonthDisabled()
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__["ArrowLeft"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["Month"], null, _lib_moment__WEBPACK_IMPORTED_MODULE_2__["default"].months()[selected.month()], "\xA0", selected.year()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["SwitchButton"], {
        onClick: this.onSelectNextMonth
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__["ArrowRight"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["WeekDays"], null, weekDays.map(function (weekDay) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["WeekDay"], {
          key: weekDay
        }, weekDay);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["Weeks"], null, dates.map(function (date) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_5__["DayContainer"], {
          key: date.toISOString()
        }, dateComponent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(dateComponent, {
          date: date
        }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Day__WEBPACK_IMPORTED_MODULE_4__["default"], {
          value: date.date(),
          current: date.startOf('day').isSame(_this2.now),
          past: date.startOf('day').isBefore(_this2.now),
          weekEnd: [SATURDAY, SUNDAY].indexOf(date.day()) !== -1,
          selectable: Object(_lib_moment__WEBPACK_IMPORTED_MODULE_2__["default"])(date).startOf('day').isSameOrAfter(Object(_lib_moment__WEBPACK_IMPORTED_MODULE_2__["default"])(min).startOf('day')),
          onClick: function onClick() {
            return onSelect(date);
          }
        }));
      })));
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Calendar.propTypes = {
  /**
   * Смещение первого дня недели
   */
  weekOffset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Минимальная возможная дата для выбора
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(),

  /**
   * Выбранная дата (объект moment.js)
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(),

  /**
   * Рисует кастомную дату
   */
  dateComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик выбора даты
   */
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Calendar.defaultProps = {
  weekOffset: 1,
  min: Object(_lib_moment__WEBPACK_IMPORTED_MODULE_2__["default"])(0),
  selected: Object(_lib_moment__WEBPACK_IMPORTED_MODULE_2__["default"])().startOf('day'),
  onSelect: function onSelect() {},
  dateComponent: undefined
};


/***/ }),

/***/ "./src/Calendar/styled.js":
/*!********************************!*\
  !*** ./src/Calendar/styled.js ***!
  \********************************/
/*! exports provided: Wrapper, Header, Nav, SwitchButton, Month, WeekDays, WeekDay, Weeks, DayContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchButton", function() { return SwitchButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Month", function() { return Month; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekDays", function() { return WeekDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekDay", function() { return WeekDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weeks", function() { return Weeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayContainer", function() { return DayContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    box-sizing: border-box;\n    width: ", "%;\n    text-align: center;\n    line-height: 20px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-flow: row wrap;\n    padding: 0 ", "px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    width: ", "%;\n    padding: 6px;\n    text-align: center;\n    font: 700 10px \"Open Sans\", sans-serif;\n    color: ", ";\n    line-height: 14px;\n    text-transform: capitalize;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-flow: row wrap;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n    text-align: center;\n    text-transform: capitalize;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 40px;\n    height: 40px;\n    padding: 12px;\n    border: 0;\n    border-radius: 2px;\n    background: transparent;\n    outline: none;\n    color: ", ";\n    cursor: pointer;\n    transition: color .12s linear, background-color .12s linear;\n    &:hover {\n        color: ", ";\n    }\n    &:active {\n        background: ", ";\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 ", "px;\n    margin-bottom: 8px;\n    background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font: 400 13px \"Open Sans\", sans-serif;\n    color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Coal);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2(), function (props) {
  return props.sideGutter;
}, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Zircon);
var Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject3());
var SwitchButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject4(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepBlue, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale);
var Month = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject5());
var WeekDays = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject6());
var WeekDay = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject7(), 100 / 7, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray);
var Weeks = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject8(), function (props) {
  return props.sideGutter;
});
var DayContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject9(), 100 / 7);

/***/ }),

/***/ "./src/Catch/index.jsx":
/*!*****************************!*\
  !*** ./src/Catch/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Catch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Typography */ "./src/Typography/index.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/Catch/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @develop
 */

var Catch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Catch, _React$Component);

  function Catch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Catch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Catch)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      hasError: false,
      code: null
    };
    return _this;
  }

  _createClass(Catch, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        hasError: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hasError = _this$state.hasError,
          code = _this$state.code;
      var children = this.props.children;

      if (hasError) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Header"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["FlashIcon"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_2__["H"], {
          size: 4
        }, "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A...")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Text"], null, "\u041C\u044B \u0443\u0436\u0435 \u0437\u043D\u0430\u0435\u043C \u043E\u0431 \u044D\u0442\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0435. \u041E\u0447\u0435\u043D\u044C \u0441\u043A\u043E\u0440\u043E \u043C\u044B \u0435\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u043C."), code !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Text"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ": "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, code)));
      }

      return children;
    }
  }]);

  return Catch;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Catch.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};


/***/ }),

/***/ "./src/Catch/styled.js":
/*!*****************************!*\
  !*** ./src/Catch/styled.js ***!
  \*****************************/
/*! exports provided: Wrapper, Header, FlashIcon, Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashIcon", function() { return FlashIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./src/Icon/index.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 12px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 20px;\n    height: 20px;\n    margin-right: 8px;\n    fill: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px;\n    background: ", ";\n    color: ", ";\n    border-radius: 2px;\n    border: 2px solid ", ";\n    font: 400 14px 'Open Sans', sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].White, _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Coal, _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Pale);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());
var FlashIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Icon__WEBPACK_IMPORTED_MODULE_1__["Flash"])(_templateObject3(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Red);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject4());

/***/ }),

/***/ "./src/Checkbox/components/Mark/index.jsx":
/*!************************************************!*\
  !*** ./src/Checkbox/components/Mark/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Checkbox/components/Mark/styled.js");




var Mark = function Mark(props) {
  var isChecked = props.isChecked,
      disabled = props.disabled,
      color = props.color,
      large = props.large;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    disabled: disabled,
    isChecked: isChecked,
    large: large
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["CheckMarkWrapper"], {
    isChecked: isChecked,
    disabled: disabled,
    color: color
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["CheckMarkIcon"], {
    large: large
  })));
};

Mark.propTypes = {
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  large: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Mark.defaultProps = {
  isChecked: false,
  disabled: false,
  color: '',
  large: false
};
/* harmony default export */ __webpack_exports__["default"] = (Mark);

/***/ }),

/***/ "./src/Checkbox/components/Mark/styled.js":
/*!************************************************!*\
  !*** ./src/Checkbox/components/Mark/styled.js ***!
  \************************************************/
/*! exports provided: Wrapper, CheckMarkWrapper, CheckMarkIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckMarkWrapper", function() { return CheckMarkWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckMarkIcon", function() { return CheckMarkIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Icon */ "./src/Icon/index.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.js");
function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    fill: ", ";\n    \n    ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    border-radius: 2px;\n    opacity: ", ";\n    transform: scale(", ");\n    transition: \n        opacity .6s cubic-bezier(0.23, 1, 0.32, 1),\n        transform .6s cubic-bezier(0.23, 1, 0.32, 1);\n    \n    ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-block;\n    box-sizing: border-box;\n    border: ", ";\n    background-color: ", ";\n    border-radius: 2px;\n    transition: border-color .12s linear, border-width .12s linear;\n    \n    ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        width: 8px;\n        height: 8px;\n        margin: -4px 0 0 -4px;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        width: 10px;\n        height: 10px;\n        margin: -5px 0 0 -5px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        top: 2px;\n        width: 16px;\n        height: 16px;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        top: auto;\n        width: 20px;\n        height: 20px;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["background-color: ", ";"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["background-color: ", ";"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["background-color: ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["background-color: ", ";"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function fill(props) {
  if (props.disabled) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Gray);
  }

  switch (props.color) {
    case 'green':
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Green);

    case 'deepBlue':
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].DeepBlue);

    default:
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Blue);
  }
}

function largeWrapper() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5());
}

function defaultWrapper() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6());
}

function size(props) {
  switch (true) {
    case props.large:
      return largeWrapper();

    default:
      return defaultWrapper();
  }
}

function largeIcon() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7());
}

function defaultIcon() {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8());
}

function iconSize(props) {
  switch (true) {
    case props.large:
      return largeIcon();

    default:
      return defaultIcon();
  }
}

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject9(), function (props) {
  return props.isChecked ? 0 : "1px solid ".concat(_config__WEBPACK_IMPORTED_MODULE_2__["Color"].Pale);
}, function (props) {
  return props.disabled ? _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Zircon : _config__WEBPACK_IMPORTED_MODULE_2__["Color"].White;
}, size);
var CheckMarkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject10(), function (props) {
  return props.isChecked ? 1 : 0;
}, function (props) {
  return props.isChecked ? 1 : 0;
}, fill);
var CheckMarkIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Icon__WEBPACK_IMPORTED_MODULE_1__["CheckMark"])(_templateObject11(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].White, iconSize);

/***/ }),

/***/ "./src/Checkbox/index.jsx":
/*!********************************!*\
  !*** ./src/Checkbox/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Mark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Mark */ "./src/Checkbox/components/Mark/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/Checkbox/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @develop
 */

var Checkbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onCheck = function () {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onCheck = _this$props.onCheck;
      if (disabled) return;
      onCheck();
    };

    return _this;
  }

  _createClass(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          disabled = _this$props2.disabled,
          other = _objectWithoutProperties(_this$props2, ["label", "disabled"]);

      delete other.onCheck;
      delete other.large;
      var hasLabel = typeof label === 'string' && label.length > 0 || label;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], _extends({
        disabled: disabled,
        onClick: this.onCheck
      }, other), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Mark__WEBPACK_IMPORTED_MODULE_2__["default"], this.props), hasLabel && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Label"], {
        disabled: disabled
      }, label));
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Checkbox.propTypes = {
  /**
   * Цвет
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['blue', 'green', 'deepBlue']),

  /**
   * Выбран ли элемент
   */
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Текстовая подпись
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Увеличенный размер
   */
  large: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Неактивный
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Обработчик выбора
   */
  onCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Checkbox.defaultProps = {
  color: 'blue',
  isChecked: false,
  label: '',
  large: false,
  disabled: false,
  onCheck: function onCheck() {}
};


/***/ }),

/***/ "./src/Checkbox/styled.js":
/*!********************************!*\
  !*** ./src/Checkbox/styled.js ***!
  \********************************/
/*! exports provided: Wrapper, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Mark_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Mark/styled */ "./src/Checkbox/components/Mark/styled.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin-left: 12px;\n    font: 400 14px \"Open Sans\", sans-serif;\n    line-height: 20px;\n    vertical-align: top;\n    white-space: normal;\n    color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    line-height: 50%;\n    white-space: nowrap;\n    pointer-events: ", ";\n    \n    &:hover ", " {\n        ", "\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["border-color: ", ";"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["border-color: ", ";"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["border-color: ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["border-color: ", ";"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





function borderColor(props) {
  if (props.disabled) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Pale);
  }

  switch (props.color) {
    case 'green':
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Green);

    case 'deepBlue':
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].DeepBlue);

    default:
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Blue);
  }
}

var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject5(), function (props) {
  return props.disabled ? 'none' : 'inherit';
}, _components_Mark_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], borderColor);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject6(), function (props) {
  return props.disabled ? _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Gray : 'inherit';
});

/***/ }),

/***/ "./src/CheckboxGroup/index.jsx":
/*!*************************************!*\
  !*** ./src/CheckboxGroup/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Checkbox */ "./src/Checkbox/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/CheckboxGroup/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @develop
 */

var CheckboxGroup =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CheckboxGroup, _React$PureComponent);

  function CheckboxGroup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckboxGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckboxGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      selected: _this.props.selected || []
    };

    _this.onCheck = function (value) {
      var selected = _this.state.selected;
      var onCheck = _this.props.onCheck;
      var index = selected.indexOf(value);
      var nextSelected = [];

      if (index >= 0) {
        nextSelected = [].concat(_toConsumableArray(selected.slice(0, index)), _toConsumableArray(selected.slice(index + 1, selected.length)));
      } else {
        nextSelected = [].concat(_toConsumableArray(selected), [value]);
      }

      _this.setState({
        selected: nextSelected
      });

      onCheck(nextSelected);
    };

    return _this;
  }

  _createClass(CheckboxGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          selected = _this$props.selected,
          options = _this$props.options,
          color = _this$props.color,
          large = _this$props.large,
          disabled = _this$props.disabled;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["List"], null, options.map(function (_ref) {
        var value = _ref.value,
            label = _ref.label;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Option"], {
          key: value
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: label,
          isChecked: selected.indexOf(value) >= 0,
          onCheck: function onCheck() {
            return _this2.onCheck(value);
          },
          color: color,
          large: large,
          disabled: disabled
        }));
      }));
    }
  }]);

  return CheckboxGroup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

CheckboxGroup.propTypes = {
  /**
   * Выбранные элементы
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),

  /**
   * Набор данных для построения списка
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })).isRequired,

  /**
   * Цвет чекбоксов
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['blue', 'green', 'deepBlue']),

  /**
   * Большие чекбоксы
   */
  large: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Неактивный список
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Обработчик выбора элемента
   * @param value - выбранный элемент
   */
  onCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
CheckboxGroup.defaultProps = {
  selected: [],
  color: 'blue',
  large: false,
  disabled: false,
  onCheck: function onCheck() {}
};


/***/ }),

/***/ "./src/CheckboxGroup/styled.js":
/*!*************************************!*\
  !*** ./src/CheckboxGroup/styled.js ***!
  \*************************************/
/*! exports provided: List, Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    & + & {\n        margin-top: 12px;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
var Option = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());

/***/ }),

/***/ "./src/Collapse/components/CollapsePanel/index.jsx":
/*!*********************************************************!*\
  !*** ./src/Collapse/components/CollapsePanel/index.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-collapse */ "rc-collapse");
/* harmony import */ var rc_collapse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_collapse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_openAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../lib/openAnimation */ "./src/lib/openAnimation.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./src/Collapse/components/CollapsePanel/styled.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var CollapsePanel = function CollapsePanel(props) {
  var header = props.header,
      showArrow = props.showArrow,
      arrowRightPosition = props.arrowRightPosition,
      other = _objectWithoutProperties(props, ["header", "showArrow", "arrowRightPosition"]);

  var headless = typeof header === 'undefined';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_collapse__WEBPACK_IMPORTED_MODULE_2___default.a.Panel, _extends({
    prefixCls: "ui-collapse",
    openAnimation: _objectSpread({}, _lib_openAnimation__WEBPACK_IMPORTED_MODULE_3__["default"], {
      appear: function appear() {}
    })
  }, other, {
    headerClass: headless ? 'ui-collapse-headless' : '',
    header: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["Header"], null, showArrow && !arrowRightPosition && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["ArrowDownIcon"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["HeaderContent"], null, header), showArrow && arrowRightPosition && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["ArrowDownIcon"], null)),
    showArrow: false
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["GlobalStyles"], null));
};

CollapsePanel.propTypes = {
  key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(),
  showArrow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  arrowRightPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  forceRender: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
CollapsePanel.defaultProps = {
  key: undefined,
  header: undefined,
  disabled: undefined,
  className: undefined,
  style: undefined,
  showArrow: true,
  arrowRightPosition: false,
  forceRender: undefined
};
/* harmony default export */ __webpack_exports__["default"] = (CollapsePanel);

/***/ }),

/***/ "./src/Collapse/components/CollapsePanel/styled.js":
/*!*********************************************************!*\
  !*** ./src/Collapse/components/CollapsePanel/styled.js ***!
  \*********************************************************/
/*! exports provided: Header, HeaderContent, ArrowDownIcon, GlobalStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContent", function() { return HeaderContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDownIcon", function() { return ArrowDownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return GlobalStyles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Icon */ "./src/Icon/index.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.js");
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    .ui-collapse {\n        position: relative;\n    }\n    .ui-collapse-item {\n        position: relative;\n        \n        & + & {\n            border-top: 1px solid ", ";\n        }\n    }\n    .ui-collapse-item-active .arrow {\n        transform: rotate(-180deg);\n    }\n    .ui-collapse-header {\n        padding: 12px 16px;\n        color: ", ";\n        font: 400 13px \"Open Sans\", sans-serif;\n        line-height: 20px;\n        background: transparent;\n        cursor: pointer;\n        outline: none;\n        transition: background-color .2s linear;\n        &:hover {\n            background-color: rgba(71, 134, 200, 0.1);\n        }\n    }\n    .ui-collapse-content-inactive {\n        display: none;\n    }\n    .ui-collapse-wrapper {\n        overflow: hidden;\n    }\n    .ui-collapse-wrapper-active {\n        transition:\n                height .15s cubic-bezier(.645,.045,.355,1),\n                opacity .15s cubic-bezier(.645,.045,.355,1) !important;\n    }\n    .ui-collapse-headless {\n        display: none;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 16px;\n    height: 16px;\n    margin: 2px 12px 0 0;\n    fill: ", ";\n    transition: transform .15s cubic-bezier(.645,.045,.355,1);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-flow: row nowrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
var HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());
var ArrowDownIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Icon__WEBPACK_IMPORTED_MODULE_1__["ArrowDown"])(_templateObject3(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Blue);
var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject4(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Pale, _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Coal);

/***/ }),

/***/ "./src/Collapse/index.jsx":
/*!********************************!*\
  !*** ./src/Collapse/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Collapse; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-collapse */ "rc-collapse");
/* harmony import */ var rc_collapse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_collapse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_openAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/openAnimation */ "./src/lib/openAnimation.js");
/* harmony import */ var _components_CollapsePanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CollapsePanel */ "./src/Collapse/components/CollapsePanel/index.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Collapse =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Collapse, _React$Component);

  function Collapse() {
    _classCallCheck(this, Collapse);

    return _possibleConstructorReturn(this, _getPrototypeOf(Collapse).apply(this, arguments));
  }

  _createClass(Collapse, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_collapse__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
        prefixCls: "ui-collapse",
        openAnimation: _objectSpread({}, _lib_openAnimation__WEBPACK_IMPORTED_MODULE_3__["default"], {
          appear: function appear() {}
        })
      }, this.props));
    }
  }]);

  return Collapse;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Collapse.propTypes = {
  activeKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)]),
  defaultActiveKey: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string),
  accordion: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Collapse.defaultProps = {
  activeKey: undefined,
  defaultActiveKey: undefined,
  accordion: undefined,
  onChange: undefined,
  className: undefined
};
Collapse.Panel = _components_CollapsePanel__WEBPACK_IMPORTED_MODULE_4__["default"];


/***/ }),

/***/ "./src/Icon/index.jsx":
/*!****************************!*\
  !*** ./src/Icon/index.jsx ***!
  \****************************/
/*! exports provided: ArrowDown, ArrowRight, ArrowLeft, ArrowUp, Approved, ATM, Bag, Book, Bookmark, Bubble, BubbleDotted, BubblePerson, BubbleRounded, BubbleSmile, Bucket, Calc, Calendar, Chat, SpeechBubble, ChatArrow, Chain, CheckMark, CheckMarkBig, Clip, ClipAdd, Clock, Cross, CreateNew, Dollar, Download, Enter, Expand, Facebook, FacebookHollow, FileFinal, FileTmp, Flash, GooglePlusHollow, HandPointer, Info, Like, LikeHollow, LikeHollowDetailed, HollowLike, Dislike, List, LongArrowRight, LightArrowRight, Loop, Mail, MailOutline, MailRead, Make, Minimize, Money, MoneyDollar, MobileCall, MobilePhone, NewMessage, NoMessages, Odnoklassniki, OdnoklassnikiHollow, Pencil, PencilDraw, People, Phone, PhoneInCircle, Purse, PurseOpen, QuestionCircle, Star, StarHollow, Success, Settings, Rest, Telegram, TelegramHollow, Twitter, TwitterHollow, Vkontakte, VkontakteHollow, Wallet, WhatsappHollow, Whatsapp, Bell, Papers, Verified, VerifiedStroke, QuestionInCircle, World, Trash, Burger, Warning, Circle, CheckMarkInCircle, Pro, ProPlus, Hammer, Percent, Smile, Pile, Sheets, Blank, Id, File, MessageCloud, Bonus, ArrowLongLeft, Shield, CalendarInput, X2, ManCheck, Deadline, ChessQueen, TipRangeArrow, Point, HandshakeShield */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowDown", function() { return ArrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowRight", function() { return ArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowLeft", function() { return ArrowLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowUp", function() { return ArrowUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Approved", function() { return Approved; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATM", function() { return ATM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bag", function() { return Bag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bookmark", function() { return Bookmark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bubble", function() { return Bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleDotted", function() { return BubbleDotted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubblePerson", function() { return BubblePerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleRounded", function() { return BubbleRounded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BubbleSmile", function() { return BubbleSmile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bucket", function() { return Bucket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calc", function() { return Calc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return Calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechBubble", function() { return SpeechBubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatArrow", function() { return ChatArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chain", function() { return Chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckMark", function() { return CheckMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckMarkBig", function() { return CheckMarkBig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clip", function() { return Clip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipAdd", function() { return ClipAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clock", function() { return Clock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cross", function() { return Cross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNew", function() { return CreateNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dollar", function() { return Dollar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Download", function() { return Download; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enter", function() { return Enter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expand", function() { return Expand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookHollow", function() { return FacebookHollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFinal", function() { return FileFinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTmp", function() { return FileTmp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flash", function() { return Flash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlusHollow", function() { return GooglePlusHollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandPointer", function() { return HandPointer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return Info; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Like", function() { return Like; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeHollow", function() { return LikeHollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeHollowDetailed", function() { return LikeHollowDetailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HollowLike", function() { return HollowLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dislike", function() { return Dislike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LongArrowRight", function() { return LongArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightArrowRight", function() { return LightArrowRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loop", function() { return Loop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mail", function() { return Mail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailOutline", function() { return MailOutline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailRead", function() { return MailRead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Make", function() { return Make; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Minimize", function() { return Minimize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Money", function() { return Money; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoneyDollar", function() { return MoneyDollar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileCall", function() { return MobileCall; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilePhone", function() { return MobilePhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessage", function() { return NewMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoMessages", function() { return NoMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Odnoklassniki", function() { return Odnoklassniki; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OdnoklassnikiHollow", function() { return OdnoklassnikiHollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pencil", function() { return Pencil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PencilDraw", function() { return PencilDraw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "People", function() { return People; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Phone", function() { return Phone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneInCircle", function() { return PhoneInCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Purse", function() { return Purse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurseOpen", function() { return PurseOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionCircle", function() { return QuestionCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Star", function() { return Star; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarHollow", function() { return StarHollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Success", function() { return Success; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rest", function() { return Rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Telegram", function() { return Telegram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelegramHollow", function() { return TelegramHollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Twitter", function() { return Twitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterHollow", function() { return TwitterHollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vkontakte", function() { return Vkontakte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VkontakteHollow", function() { return VkontakteHollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wallet", function() { return Wallet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappHollow", function() { return WhatsappHollow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Whatsapp", function() { return Whatsapp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bell", function() { return Bell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Papers", function() { return Papers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verified", function() { return Verified; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifiedStroke", function() { return VerifiedStroke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionInCircle", function() { return QuestionInCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "World", function() { return World; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trash", function() { return Trash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Burger", function() { return Burger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Warning", function() { return Warning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckMarkInCircle", function() { return CheckMarkInCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pro", function() { return Pro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProPlus", function() { return ProPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hammer", function() { return Hammer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Percent", function() { return Percent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Smile", function() { return Smile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pile", function() { return Pile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sheets", function() { return Sheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blank", function() { return Blank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Id", function() { return Id; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "File", function() { return File; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageCloud", function() { return MessageCloud; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bonus", function() { return Bonus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowLongLeft", function() { return ArrowLongLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shield", function() { return Shield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarInput", function() { return CalendarInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X2", function() { return X2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManCheck", function() { return ManCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Deadline", function() { return Deadline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessQueen", function() { return ChessQueen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipRangeArrow", function() { return TipRangeArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandshakeShield", function() { return HandshakeShield; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SvgIcon */ "./src/SvgIcon/index.jsx");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* eslint-disable max-lines */



var ArrowDown = function ArrowDown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M7.99973913,12 C7.7993913,12 7.59904348,11.9213846 7.44669565,11.7630769 L2.22930435,6.37846154 C1.92356522,6.06292308 1.92356522,5.55246154 2.22930435,5.23692308 C2.53504348,4.92138462 3.02965217,4.92138462 3.3353913,5.23692308 L7.99973913,10.0496923 L12.664087,5.23692308 C12.9698261,4.92138462 13.4644348,4.92138462 13.7701739,5.23692308 C14.075913,5.55246154 14.075913,6.06292308 13.7701739,6.37846154 L8.55278261,11.7630769 C8.40043478,11.9213846 8.20008696,12 7.99973913,12"
  }));
};
var ArrowRight = function ArrowRight(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M11.9997308,7.99973913 C11.9997308,7.7993913 11.9211154,7.59904348 11.7628077,7.44669565 L6.37819231,2.22930435 C6.06265385,1.92356522 5.55219231,1.92356522 5.23665385,2.22930435 C4.92111538,2.53504348 4.92111538,3.02965217 5.23665385,3.3353913 L10.0494231,7.99973913 L5.23665385,12.664087 C4.92111538,12.9698261 4.92111538,13.4644348 5.23665385,13.7701739 C5.55219231,14.075913 6.06265385,14.075913 6.37819231,13.7701739 L11.7628077,8.55278261 C11.9211154,8.40043478 11.9997308,8.20008696 11.9997308,7.99973913 Z"
  }));
};
var ArrowLeft = function ArrowLeft(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M4,7.99973913 C4,7.7993913 4.07861538,7.59904348 4.23692308,7.44669565 L9.62153846,2.22930435 C9.93707692,1.92356522 10.4475385,1.92356522 10.7630769,2.22930435 C11.0786154,2.53504348 11.0786154,3.02965217 10.7630769,3.3353913 L5.95030769,7.99973913 L10.7630769,12.664087 C11.0786154,12.9698261 11.0786154,13.4644348 10.7630769,13.7701739 C10.4475385,14.075913 9.93707692,14.075913 9.62153846,13.7701739 L4.23692308,8.55278261 C4.07861538,8.40043478 4,8.20008696 4,7.99973913 Z"
  }));
};
var ArrowUp = function ArrowUp(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M7.99973913,4 C8.20008696,4 8.40043478,4.07861538 8.55278261,4.23692308 L13.7701739,9.62153846 C14.075913,9.93707692 14.075913,10.4475385 13.7701739,10.7630769 C13.4644348,11.0786154 12.9698261,11.0786154 12.664087,10.7630769 L7.99973913,5.95030769 L3.3353913,10.7630769 C3.02965217,11.0786154 2.53504348,11.0786154 2.22930435,10.7630769 C1.92356522,10.4475385 1.92356522,9.93707692 2.22930435,9.62153846 L7.44669565,4.23692308 C7.59904348,4.07861538 7.7993913,4 7.99973913,4 Z"
  }));
};
var Approved = function Approved(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 32.296 32.296"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M31.923,9.14L13.417,27.642c-0.496,0.494-1.299,0.494-1.793,0L0.37,16.316c-0.494-0.496-0.494-1.302,0-1.795l2.689-2.687c0.496-0.495,1.299-0.495,1.793,0l7.678,7.729L27.438,4.654c0.494-0.494,1.297-0.494,1.795,0l2.689,2.691C32.421,7.84,32.421,8.646,31.923,9.14z"
  }));
};
var ATM = function ATM(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 56 60"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    r: "9",
    cy: "30.441744",
    cx: "28.005051"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m28.005051,21.441744l0,-7"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m28.005051,46.441744l0,-6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m42.005051,46.441744l0,3.5c-2,0 -3,1.166667 -3,3.5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinejoin: "round",
    d: "m14.005051,46.441744l0,3.5c2,0 3,1.166667 3,3.5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m17.013409,53.531258l21.943582,0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m6.005051,8.441744l44,0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    strokeLinejoin: "round",
    points: "4.235679626464844,27.427322387695312 1.0050506591796875,27.427322387695312 1.0050506591796875,1.4417438507080078 54.99494934082031,1.4417438507080078 54.99494934082031,27.462377548217773 51.74308776855469,27.462377548217773"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    strokeLinejoin: "round",
    points: "9.003109455108643,13.660656929016113 9.003109455108643,58.558258056640625 47.00505065917969,58.558258056640625 47.00505065917969,13.775728225708008"
  })));
};
var Bag = function Bag(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 36 35"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    strokeWidth: "3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m9.289837,8.25c-2.81076,0 -5.16926,2.1193 -5.4687,4.91407l-1.5,14c-0.02085,0.19461 -0.0313,0.3902 -0.0313,0.58593c0,3.03757 2.46243,5.5 5.5,5.5l20.41987,0c0.19573,0 0.39132,-0.01045 0.58593,-0.0313c3.02028,-0.3236 5.20637,-3.03435 4.88277,-6.05463l-1.5,-14c-0.29944,-2.79477 -2.65793,-4.91407 -5.4687,-4.91407l-17.41987,0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    d: "m11.789837,13.75c0.66667,-8 2.66667,-12 6,-12c3.33333,0 5.33333,4 6,12"
  })));
};
var Book = function Book(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 14 18"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12 16H2.75c-.69 0-1.25-.56-1.25-1.25V5.2c.38.19.8.3 1.25.3H12zM10.3 1.5a2.78 2.78 0 0 0 0 2.5H2.75a1.25 1.25 0 0 1 0-2.5zm1.2 1.25c0-.69.56-1.25 1.25-1.25.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75h-10A2.75 2.75 0 0 0 0 2.75v12a2.75 2.75 0 0 0 2.75 2.75h10c.41 0 .75-.34.75-.75v-12a.76.76 0 0 0-.75-.75c-.69 0-1.25-.56-1.25-1.25zM9.91 9.88a.75.75 0 1 0 0-1.5H3.59a.75.75 0 1 0 0 1.5zm-1.63 1.5c.42 0 .75.33.75.75 0 .41-.33.75-.75.75H5.22a.75.75 0 0 1-.75-.75c0-.42.33-.75.75-.75z"
  }));
};
var Bookmark = function Bookmark(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 10 13"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M5.45 8.16l3.12 2.59V1.44H1.43v9.31l3.12-2.59c.13-.1.29-.16.45-.16.16 0 .32.06.45.16zm3.38 4.68L5 9.66l-3.83 3.18A.72.72 0 0 1 0 12.28V.72C0 .32.32 0 .71 0h8.58c.39 0 .71.32.71.72v11.56a.72.72 0 0 1-1.17.56zM5.72 5.19a.96.96 0 0 0 0-1.32.9.9 0 0 0-1.29 0 .96.96 0 0 0 0 1.32.9.9 0 0 0 1.29 0z"
  }));
};
var Bubble = function Bubble(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 64 64"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "10",
    y: "14.413",
    width: "44",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "10",
    y: "24.413",
    width: "44",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "10",
    y: "34.413",
    width: "44",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M17,60.587l15.37-13.174H64v-44H0v44h17V60.587z M2,45.413v-40h60v40H31.63L19,56.239V45.413H2z"
  }));
};
var BubbleDotted = function BubbleDotted(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 77 42"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m0,7a7,7 0 0 1 7,-7l56.24,0a7,7 0 0 1 7,7l0,22.32c0,0.48 -0.05,0.94 -0.14,1.39l6.9,11.29l-18.22,-5.68l-51.78,0a7,7 0 0 1 -7,-7l0,-22.32z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "m15,18a4,4 0 1 1 8,0a4,4 0 0 1 -8,0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "m31,18a4,4 0 1 1 8,0a4,4 0 0 1 -8,0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "m47,18a4,4 0 1 1 8,0a4,4 0 0 1 -8,0z"
  }));
};
var BubblePerson = function BubblePerson(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 65 40"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m65,7a7,7 0 0 0 -7,-7l-45.67,0a7,7 0 0 0 -7,7l0,21.79c0,0.57 0.07,1.12 0.2,1.66l-5.53,9.55l12.79,-4.21l45.21,0a7,7 0 0 0 7,-7l0,-21.79z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "m30.24,11.72a4.75,4.75 0 0 1 4.76,-4.72a4.75,4.75 0 0 1 4.77,4.72a4.75,4.75 0 0 1 -4.76,4.73a4.75,4.75 0 0 1 -4.77,-4.73z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "m26,23.8c0,-2.32 4.03,-4.2 9,-4.2s9,1.88 9,4.2c0,2.32 -4.03,4.2 -9,4.2s-9,-1.88 -9,-4.2z"
  }));
};
var BubbleRounded = function BubbleRounded(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 49 36"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m43.568039,10.847801l0,16.8349c0,3.866 -3.13401,7 -7,7l-29.57,0c-3.86599,0 -7,-3.134 -7,-7l0,-17.14c0,-3.866 3.13401,-7 7,-7l29.57,0c1.09,0 2.11,0.25 3.03,0.69l9.40392,-2.9154l-5.43392,9.5305z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "m10.998039,15.042701c0,-0.83 0.67,-1.5 1.5,-1.5l20,0a1.5,1.5 0 1 1 0,3l-20,0a1.5,1.5 0 0 1 -1.5,-1.5z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "m10.998039,24.042701c0,-0.83 0.67,-1.5 1.5,-1.5l11,0a1.5,1.5 0 1 1 0,3l-11,0a1.5,1.5 0 0 1 -1.5,-1.5z"
  }));
};
var BubbleSmile = function BubbleSmile(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 56 35"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m56,7a7,7 0 0 0 -7,-7l-37,0a7,7 0 0 0 -7,7l0,17c0,0.57 0.07,1.13 0.2,1.66l-5.2,9.34l11.71,-4l37.29,0a7,7 0 0 0 7,-7l0,-17z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "m30.29297,6.00391a10,10 0 0 0 -10.29297,9.99609a10,10 0 0 0 20,0a10,10 0 0 0 -9.70703,-9.99609zm-3.25,5.49414a1.50271,1.50271 0 0 1 1.45898,1.50195a1.50271,1.50271 0 0 1 -3.0039,0a1.50271,1.50271 0 0 1 1.54492,-1.50195zm6,0.00195a1.5,1.5 0 0 1 1.45703,1.5a1.5,1.5 0 0 1 -3,0a1.5,1.5 0 0 1 1.54297,-1.5zm-8.61133,4.99219l10.14063,0.00586c-0.19384,2.96264 -2.42211,4.9485 -5.0586,4.99609c-2.71082,-0.05864 -4.93112,-2.13769 -5.08203,-5.00195z"
  }));
};
var Bucket = function Bucket(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 14 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2.69195685,14.4955808 L11.3070296,14.4955808 L11.3070296,6.48805867 L2.69195685,6.48805867 L2.69195685,14.4955808 Z M1.52030696,3.79213941 L12.479693,3.79213941 L12.479693,4.98363944 L12.0671831,4.98363944 L1.93180337,4.98363944 L1.52030696,4.98363944 L1.52030696,3.79213941 Z M5.1943821,1.50441923 L8.8056179,1.50441923 L8.8056179,2.20949038 C8.8056179,2.23757287 8.81778035,2.26064063 8.82082097,2.28772018 L5.1781655,2.28772018 C5.18120611,2.26064063 5.1943821,2.23757287 5.1943821,2.20949038 L5.1943821,1.50441923 Z M10.3097082,2.28772018 L13.2398465,2.28772018 C13.6594512,2.28772018 14,2.62471009 14,3.03992979 L14,5.73584906 C14,6.15106876 13.6594512,6.48805867 13.2398465,6.48805867 L12.8273366,6.48805867 L12.8273366,15.2477904 C12.8273366,15.6630101 12.4867878,16 12.0671831,16 L1.93180337,16 C1.51219865,16 1.1716499,15.6630101 1.1716499,15.2477904 L1.1716499,6.48805867 L0.760153479,6.48805867 C0.340548758,6.48805867 0,6.15106876 0,5.73584906 L0,3.03992979 C0,2.62471009 0.340548758,2.28772018 0.760153479,2.28772018 L3.69029175,2.28772018 C3.68725114,2.26064063 3.67407515,2.23757287 3.67407515,2.20949038 L3.67407515,0.752209616 C3.67407515,0.336989908 4.01462391,0 4.43422863,0 L9.56577137,0 C9.98537609,0 10.3259249,0.336989908 10.3259249,0.752209616 L10.3259249,2.20949038 C10.3259249,2.23757287 10.3127489,2.26064063 10.3097082,2.28772018 Z M9.27823065,12.2654297 L9.27823065,8.16939761 C9.27823065,7.7541779 8.93768189,7.41718799 8.51807717,7.41718799 C8.09847245,7.41718799 7.7579237,7.7541779 7.7579237,8.16939761 L7.7579237,12.2654297 C7.7579237,12.6806494 8.09847245,13.0176393 8.51807717,13.0176393 C8.93768189,13.0176393 9.27823065,12.6806494 9.27823065,12.2654297 Z M6.24156954,12.2654297 L6.24156954,8.16939761 C6.24156954,7.7541779 5.90102078,7.41718799 5.48141606,7.41718799 C5.06181134,7.41718799 4.72126258,7.7541779 4.72126258,8.16939761 L4.72126258,12.2654297 C4.72126258,12.6806494 5.06181134,13.0176393 5.48141606,13.0176393 C5.90102078,13.0176393 6.24156954,12.6806494 6.24156954,12.2654297 Z"
  }));
};
var Calc = function Calc(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 50 55"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    strokeWidth: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "1",
    y: "1",
    width: "48",
    height: "53",
    rx: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "7",
    y: "8",
    width: "36",
    height: "18",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    cx: "25",
    cy: "17",
    rx: "3",
    ry: "5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M36,16.9499909 L36,17 L34,17 L34,12 L36,12 L36,12.0500091 C36.161555,12.0172151 36.3287671,12 36.5,12 C37.8807119,12 39,13.1192881 39,14.5 C39,15.8807119 37.8807119,17 36.5,17 C36.3287671,17 36.161555,16.9827849 36,16.9499909 Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M34,15 L34,23"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M35,17 L31,17"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M38,20 L31,20"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "37",
    y: "32",
    width: "6",
    height: "16",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "27",
    y: "32",
    width: "6",
    height: "6",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "27",
    y: "42",
    width: "6",
    height: "6",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "17",
    y: "32",
    width: "6",
    height: "6",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "17",
    y: "42",
    width: "6",
    height: "6",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "7",
    y: "32",
    width: "6",
    height: "6",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "7",
    y: "42",
    width: "6",
    height: "6",
    rx: "1"
  })));
};
var Calendar = function Calendar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 14"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1.5 12h13V7.81h-13zm0-8.5v2.81h13V3.5h-2.79v1.25a.75.75 0 1 1-1.5 0V3.5h-4.5v1.25a.75.75 0 1 1-1.5 0V3.5zM15.25 2c.41 0 .75.34.75.75v10c0 .41-.34.75-.75.75H.75a.76.76 0 0 1-.75-.75v-10C0 2.34.34 2 .75 2h3.46V.75a.75.75 0 1 1 1.5 0V2h4.5V.75a.75.75 0 1 1 1.5 0V2z"
  }));
};
var Chat = function Chat(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13.47 10.87l.22-.38A6 6 0 0 0 8.5 1.5h-1a6 6 0 0 0 0 12h1a5.8 5.8 0 0 0 2.79-.7l.66-.35.68.32 1.1.51c-.12-.62-.21-1.29-.24-1.96zM16 7.5c0 1.36-.37 2.64-1.01 3.74A18.42 18.42 0 0 0 16 16l-4.01-1.87A7.46 7.46 0 0 1 8.5 15h-1A7.52 7.52 0 0 1 0 7.5C0 3.38 3.38 0 7.5 0h1C12.63 0 16 3.38 16 7.5zm-5.05-2.57a.75.75 0 1 1 0 1.5h-6.2A.76.76 0 0 1 4 5.68c0-.41.34-.75.75-.75zM8.75 8.5c.41 0 .75.34.75.75s-.34.75-.75.75h-4A.76.76 0 0 1 4 9.25c0-.41.34-.75.75-.75z"
  }));
};
var SpeechBubble = function SpeechBubble(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 229.7 229.7"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M116.83,0A112.87,112.87,0,0,0,19.75,170.44L0,229.7l64.32-16.92A112.87,112.87,0,1,0,116.83,0Zm-51,126.43a14,14,0,1,1,14-14A14,14,0,0,1,65.88,126.43Zm51.41,0a14,14,0,1,1,14-14A14,14,0,0,1,117.29,126.43Zm51.41,0a14,14,0,1,1,14-14A14,14,0,0,1,168.71,126.43Z"
  }));
};
var ChatArrow = function ChatArrow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 34.8 34.7"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M25.2,8.7v10c0,1.4-1.2,2.6-2.6,2.6H10.8l3.2-3.2c0.5-0.5,0.5-1.2,0-1.7c-0.5-0.5-1.2-0.5-1.7,0L7,21.7c-0.5,0.5-0.5,1.2,0,1.7l5.2,5.2c0.2,0.2,0.5,0.4,0.9,0.4c0.3,0,0.6-0.1,0.9-0.4c0.5-0.5,0.5-1.2,0-1.7l-3.2-3.2h11.9c2.8,0,5-2.3,5-5v-10"
  }));
};
var Chain = function Chain(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 75 76"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    strokeWidth: "4",
    strokeLinecap: "round",
    fill: "none"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m30.043463,45.630146c2.61581,2.72334 6.263126,4.413331 10.297706,4.413331c4.277016,0 8.118829,-1.899195 10.757941,-4.915315c0.124132,-0.047597 5.585647,-5.606571 16.384543,-16.676921c2.806327,-2.679908 4.55981,-6.49137 4.55981,-10.720264c0,-8.111682 -6.451637,-14.6875 -14.410134,-14.6875c-4.604575,0 -8.704733,2.201237 -11.342789,5.627594l-7.419093,7.561895"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    transform: "rotate(-180 24.04346466064453,49.543487548828125) translate(-21,-46.5)",
    d: "m24.043463,115.130146c2.61581,2.72334 6.263126,4.413331 10.297706,4.413331c4.277016,0 8.118829,-1.899194 10.757941,-4.915315c0.186198,-0.071395 16.244712,-16.534399 16.384543,-16.676921c2.806327,-2.679908 4.55981,-6.49137 4.55981,-10.720264c0,-8.111682 -6.451637,-14.6875 -14.410134,-14.6875c-4.604575,0 -8.704733,2.201237 -11.342789,5.627594l-7.419093,7.561895"
  })));
};
var CheckMark = function CheckMark(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 8 7"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M2.59 7a.74.74 0 0 1-.5-.2L.21 4.95a.68.68 0 0 1 0-.98.7.7 0 0 1 .99 0l1.39 1.36L6.8 1.2a.7.7 0 0 1 .99 0c.28.27.28.71 0 .98L3.09 6.8a.74.74 0 0 1-.5.2"
  }));
};
var CheckMarkBig = function CheckMarkBig(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 62 62"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "3ukla",
    d: "M1609 912.08l5.72-6.02s14.16 15.06 14.57 15.33c.4.26 10.75-16.25 35.38-42.39 24.64-26.14 5.83 5.67 5.83 5.67s-36.69 45.74-41.21 56.33c-3.95-5.63-6.98-11.08-9.98-15.37-3.29-4.68-10.31-13.55-10.31-13.55z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-1609 -879)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#a2c64f",
    xlinkHref: "#3ukla"
  })));
}; // todo попросить дизайнера отредактировать иконку, чтобы убрать fill="none"

var Clip = function Clip(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 18 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "none",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "1.5",
    d: "M15.65 6.9a3.74 3.74 0 0 0 0-5.3 3.74 3.74 0 0 0-5.3 0l-7.5 7.5a3.74 3.74 0 0 0 0 5.3 3.74 3.74 0 0 0 5.3 0l4.55-4.48a1.88 1.88 0 1 0-2.65-2.66l-3.72 3.72"
  }));
};
var ClipAdd = function ClipAdd(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 18 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M6 10.51c-.3.29-.3.77 0 1.06.29.29.76.29 1.06 0l3.47-3.47a1 1 0 0 1 1.41 0 1 1 0 0 1 .3.71c0 .26-.11.51-.29.7L7.7 13.7a2.76 2.76 0 0 1-3.89 0 2.76 2.76 0 0 1 0-3.89l.08-.08a5.65 5.65 0 0 1-1.65-.36 4.25 4.25 0 0 0 6.52 5.39L13 10.57a2.46 2.46 0 0 0 0-3.53 2.49 2.49 0 0 0-3.53 0zm3.75-8.76l-.41.41c.22.54.35 1.12.39 1.73l1.08-1.08a2.76 2.76 0 0 1 3.89 0 2.76 2.76 0 0 1 0 3.89.75.75 0 0 0 0 1.06c.29.29.77.29 1.06 0a4.25 4.25 0 1 0-6.01-6.01zM5 3.5V.75A.76.76 0 0 0 4.25 0a.76.76 0 0 0-.75.75V3.5H.75a.76.76 0 0 0-.75.75c0 .41.34.75.75.75H3.5v2.75c0 .41.34.75.75.75S5 8.16 5 7.75V5h2.75c.41 0 .75-.34.75-.75a.76.76 0 0 0-.75-.75z"
  }));
};
var Clock = function Clock(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1.5 8c0-3.58 2.92-6.5 6.5-6.5s6.5 2.92 6.5 6.5-2.92 6.5-6.5 6.5A6.51 6.51 0 0 1 1.5 8zM0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm8.75-.74h2.49v1.5H7.25V3.24h1.5z"
  }));
};
var Cross = function Cross(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 14 14"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M7.81 6.75l5.47-5.47a.75.75 0 0 0 0-1.06.75.75 0 0 0-1.06 0L6.75 5.69 1.28.22a.75.75 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l5.47 5.47-5.47 5.47a.75.75 0 0 0 0 1.06c.15.15.34.22.53.22s.38-.07.53-.22l5.47-5.47 5.47 5.47c.15.15.34.22.53.22s.38-.07.53-.22a.75.75 0 0 0 0-1.06z"
  }));
};
var CreateNew = function CreateNew(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 17 17"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    strokeWidth: "1.5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m8.809324,1.601782l-7.684324,0c-0.138071,0 -0.25,0.111929 -0.25,0.25l0,14c0,0.138071 0.111929,0.25 0.25,0.25l14,0c0.138071,0 0.25,-0.111929 0.25,-0.25l0,-9.055837"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m5.125,11.854641l0,-3.014472l8.002374,-7.941951c0.864663,0.084452 1.576793,0.362097 2.13639,0.832933c0.66559,0.686259 0.945389,1.399501 0.839395,2.139727l-7.899356,7.983763l-3.078803,0z"
  })));
};
var Dollar = function Dollar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M14.5,11.8133 C10.167,10.2833 5.833,14.9333 1.5,13.4033 L1.5,4.4033 C5.833,5.9333 10.167,1.2833 14.5,2.8133 L14.5,11.8133 Z M0,2.1083 C5.333,5.9483 10.667,-1.7317 16,2.1083 L16,14.1083 C10.667,10.2683 5.333,17.9483 0,14.1083 L0,2.1083 Z M11.6241,9.6957 C11.6241,10.2497 12.0721,10.6237 12.6241,10.6237 C13.1761,10.6217 13.6241,10.2617 13.6241,9.7087 C13.6241,9.1567 13.1761,8.6217 12.6241,8.6237 C12.0721,8.6237 11.6241,9.1457 11.6241,9.6957 Z M3.4304,5.6514 C2.8784,5.6584 2.4304,6.0234 2.4304,6.5764 C2.4304,7.1274 2.8784,7.6584 3.4304,7.6514 C3.9824,7.6474 4.4304,7.1224 4.4304,6.5724 C4.4304,6.0184 3.9824,5.6474 3.4304,5.6514 Z M10.8009564,9.24566647 C10.8009564,9.75254288 10.6176548,10.1597912 10.251046,10.4674238 C9.8844373,10.7750563 9.37119278,10.9591549 8.71129707,11.019725 L8.71129707,12 L8.05618649,12 L8.05618649,11.0388524 C7.27833841,11.0229129 6.59613762,10.8858351 6.00956366,10.6276151 L6.00956366,9.36521219 C6.28691113,9.50229198 6.62083885,9.62343044 7.01135684,9.7286312 C7.40187484,9.83383197 7.7501479,9.89599512 8.05618649,9.91512253 L8.05618649,8.43275553 L7.73580395,8.30842797 C7.10459935,8.05977162 6.65750281,7.78960098 6.3945009,7.49790795 C6.13149898,7.20621492 6,6.84519044 6,6.41482367 C6,5.95257788 6.18091072,5.57242628 6.5427376,5.27435744 C6.90456447,4.97628861 7.40904239,4.79537788 8.05618649,4.73161984 L8.05618649,4 L8.71129707,4 L8.71129707,4.71249253 C9.44132662,4.74437155 10.1012124,4.89101284 10.6909743,5.1524208 L10.2414824,6.2713688 C9.74416966,6.06734307 9.23411299,5.94301676 8.71129707,5.89838613 L8.71129707,7.3090257 C9.33293796,7.54811835 9.77525272,7.75532887 10.0382546,7.93066348 C10.3012565,8.10599809 10.4941217,8.29886326 10.6168559,8.50926479 C10.7395902,8.71966632 10.8009564,8.96513109 10.8009564,9.24566647 Z M9.36162582,9.3173939 C9.36162582,9.18350202 9.3074323,9.0703332 9.19904363,8.97788404 C9.09065497,8.88543488 8.92807441,8.78979926 8.71129707,8.6909743 L8.71129707,9.88164973 C9.14485174,9.80832799 9.36162582,9.62024459 9.36162582,9.3173939 Z M7.43933054,6.41482367 C7.43933054,6.55509136 7.48794532,6.67065107 7.58517633,6.76150628 C7.68240734,6.85236148 7.83940916,6.94560622 8.05618649,7.04124328 L8.05618649,5.91751345 C7.64494714,5.97808359 7.43933054,6.143852 7.43933054,6.41482367 Z"
  }));
};
var Download = function Download(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 29.978 29.978"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M25.462,19.105v6.848H4.515v-6.848H0.489v8.861c0,1.111,0.9,2.012,2.016,2.012h24.967c1.115,0,2.016-0.9,2.016-2.012v-8.861H25.462z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.62,18.426l-5.764-6.965c0,0-0.877-0.828,0.074-0.828s3.248,0,3.248,0s0-0.557,0-1.416c0-2.449,0-6.906,0-8.723c0,0-0.129-0.494,0.615-0.494c0.75,0,4.035,0,4.572,0c0.536,0,0.524,0.416,0.524,0.416c0,1.762,0,6.373,0,8.742c0,0.768,0,1.266,0,1.266s1.842,0,2.998,0c1.154,0,0.285,0.867,0.285,0.867s-4.904,6.51-5.588,7.193C15.092,18.979,14.62,18.426,14.62,18.426z"
  }));
};
var Enter = function Enter(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 13.8 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M 2.2421875 0.24609375 L 2.2460938 3 L 3.75 3 L 3.75 1.7539062 L 12.25 1.75 L 12.25 14.25 L 3.7539062 14.25 L 3.75 13 L 2.25 13 L 2.25 15.753906 L 13.753906 15.753906 L 13.75 0.24609375 L 2.2421875 0.24609375 z M 6.4316406 5.0175781 C 6.2501391 4.9858989 6.0219023 5.0175573 5.796875 5.2304688 C 5.3468204 5.6562917 5.6692244 6.1846285 5.7382812 6.25 L 6.5195312 6.9902344 L 0.69921875 6.9921875 C 0.2964571 6.9923388 -0.01127285 7.3804479 -0.00390625 7.7382812 C 0.00346035 8.0961145 0.28432103 8.4881587 0.69921875 8.4882812 L 6.5195312 8.4902344 L 5.7421875 9.2460938 C 5.6468089 9.3500712 5.376959 9.8317397 5.7851562 10.261719 C 6.1933534 10.691698 6.713344 10.39255 6.8046875 10.304688 L 8.9199219 8.2695312 C 8.9199219 8.2695312 9.1230929 8.1092917 9.1328125 7.75 C 9.142555 7.3898592 8.9101562 7.2109375 8.9101562 7.2109375 L 6.7890625 5.1835938 C 6.7479085 5.144274 6.6131422 5.0492573 6.4316406 5.0175781 z"
  }));
};
var Expand = function Expand(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.25 13.75a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-8c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5zm-10.5 0a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2zm-2.25-7V1.5h5.25c.41 0 .75-.34.75-.75A.76.76 0 0 0 6.75 0h-6A.76.76 0 0 0 0 .75v6c0 .41.34.75.75.75s.75-.34.75-.75z"
  }));
};
var Facebook = function Facebook(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 25 25"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m14.149561,23.499999l0,-11.00129l2.95839,0l0.39205,-3.7911l-3.35044,0l0.00503,-1.89749c0,-0.98878 0.09152,-1.51859 1.475,-1.51859l1.84947,0l0,-3.79153l-2.95881,0c-3.554,0 -4.80492,1.83909 -4.80492,4.93187l0,2.27617l-2.21533,0l0,3.7911l2.21533,0l0,11.00086l4.43423,0z"
  }));
};
var FacebookHollow = function FacebookHollow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 48 48"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m0,0l0,48l48,0l0,-48l-48,0zm25.942836,13.407628l2.843745,0l0,3.64545l-1.777633,0c-1.329754,0 -1.417581,0.509507 -1.417581,1.460209l-0.0051,1.824678l3.220571,0l-0.376839,3.645061l-2.843705,0l0,10.577348l-4.262106,0l0,-10.576959l-2.129104,0l0,-3.64506l2.129104,0l0,-2.188755c0,-2.973676 1.202674,-4.741972 4.618648,-4.741972z"
  }));
};
var FileFinal = function FileFinal(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 32 32"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "none",
    strokeWidth: "1",
    fillRule: "evenodd",
    d: "M21.2917,29.8583 C18.3787,29.8583 15.8047,28.3943 14.2567,26.1663 C13.2937,24.7813 12.7247,23.1023 12.7247,21.2913 C12.7247,16.5823 16.5457,12.7503 21.2497,12.7273 C21.2637,12.7273 21.2777,12.7253 21.2917,12.7253 C26.0157,12.7253 29.8587,16.5683 29.8587,21.2913 C29.8587,26.0153 26.0157,29.8583 21.2917,29.8583 L21.2917,29.8583 Z M4.9997,9.6253 C4.5857,9.6253 4.2497,9.2893 4.2497,8.8753 C4.2497,8.4613 4.5857,8.1253 4.9997,8.1253 L14.9997,8.1253 C15.4137,8.1253 15.7497,8.4613 15.7497,8.8753 C15.7497,9.2893 15.4137,9.6253 14.9997,9.6253 L4.9997,9.6253 Z M10.9997,13.6253 L4.9997,13.6253 C4.5857,13.6253 4.2497,13.2893 4.2497,12.8753 C4.2497,12.4613 4.5857,12.1253 4.9997,12.1253 L10.9997,12.1253 C11.4137,12.1253 11.7497,12.4613 11.7497,12.8753 C11.7497,13.2893 11.4137,13.6253 10.9997,13.6253 L10.9997,13.6253 Z M9.9997,17.6253 L4.9997,17.6253 C4.5857,17.6253 4.2497,17.2893 4.2497,16.8753 C4.2497,16.4613 4.5857,16.1253 4.9997,16.1253 L9.9997,16.1253 C10.4137,16.1253 10.7497,16.4613 10.7497,16.8753 C10.7497,17.2893 10.4137,17.6253 9.9997,17.6253 L9.9997,17.6253 Z M8.9997,21.6253 L4.9997,21.6253 C4.5857,21.6253 4.2497,21.2893 4.2497,20.8753 C4.2497,20.4613 4.5857,20.1253 4.9997,20.1253 L8.9997,20.1253 C9.4137,20.1253 9.7497,20.4613 9.7497,20.8753 C9.7497,21.2893 9.4137,21.6253 8.9997,21.6253 L8.9997,21.6253 Z M4.4697,4.3493 C4.7497,4.0593 5.2397,4.0593 5.5297,4.3403 C5.6697,4.4793 5.7497,4.6703 5.7497,4.8803 C5.7497,5.0693 5.6697,5.2693 5.5297,5.3993 C5.3897,5.5403 5.1997,5.6203 4.9997,5.6203 C4.7997,5.6203 4.6097,5.5403 4.4697,5.3993 C4.3297,5.2593 4.2497,5.0693 4.2497,4.8803 C4.2497,4.6793 4.3297,4.4903 4.4697,4.3493 L4.4697,4.3493 Z M8.9997,4.1253 L14.9997,4.1253 C15.4137,4.1253 15.7497,4.4613 15.7497,4.8753 C15.7497,5.2893 15.4137,5.6253 14.9997,5.6253 L8.9997,5.6253 C8.5857,5.6253 8.2497,5.2893 8.2497,4.8753 C8.2497,4.4613 8.5857,4.1253 8.9997,4.1253 L8.9997,4.1253 Z M21.2917,10.5833 C27.2057,10.5833 31.9997,15.3773 31.9997,21.2913 C31.9997,27.2053 27.2057,32.0003 21.2917,32.0003 C17.1357,32.0003 13.5397,29.6273 11.7657,26.1663 L1.3147,26.1663 C0.5887,26.1663 -0.0003,25.5783 -0.0003,24.8523 L-0.0003,1.3143 C-0.0003,0.5883 0.5887,0.0003 1.3147,0.0003 L19.9357,0.0003 C20.6617,0.0003 21.2497,0.5883 21.2497,1.3143 L21.2497,10.5853 C21.2637,10.5853 21.2777,10.5833 21.2917,10.5833 Z M25.0493,17.4028 L20.3003,22.1518 L17.9873,19.8388 L16.4723,21.3528 L20.3003,25.1808 L26.5633,18.9168 L25.0493,17.4028 Z"
  }));
};
var FileTmp = function FileTmp(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 32 32"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M21.2917,10.5833 C27.2057,10.5833 31.9997,15.3773 31.9997,21.2913 C31.9997,27.2053 27.2057,32.0003 21.2917,32.0003 C17.1357,32.0003 13.5397,29.6273 11.7657,26.1663 L1.3147,26.1663 C0.5887,26.1663 -0.0003,25.5783 -0.0003,24.8523 L-0.0003,1.3143 C-0.0003,0.5883 0.5887,0.0003 1.3147,0.0003 L19.9357,0.0003 C20.6617,0.0003 21.2497,0.5883 21.2497,1.3143 L21.2497,10.5853 C21.2637,10.5853 21.2777,10.5833 21.2917,10.5833 Z M22.3627,14.9259 L22.3627,20.2279 L25.6347,20.2279 L25.6347,22.3699 L20.2207,22.3699 L20.2207,14.9259 L22.3627,14.9259 Z M21.2917,29.8583 C26.0157,29.8583 29.8587,26.0153 29.8587,21.2913 C29.8587,16.5683 26.0157,12.7253 21.2917,12.7253 C21.2777,12.7253 21.2637,12.7273 21.2497,12.7273 C16.5457,12.7503 12.7247,16.5823 12.7247,21.2913 C12.7247,23.1023 13.2937,24.7813 14.2567,26.1663 C15.8047,28.3943 18.3787,29.8583 21.2917,29.8583 Z M4.9997,9.6253 L14.9997,9.6253 C15.4137,9.6253 15.7497,9.2893 15.7497,8.8753 C15.7497,8.4613 15.4137,8.1253 14.9997,8.1253 L4.9997,8.1253 C4.5857,8.1253 4.2497,8.4613 4.2497,8.8753 C4.2497,9.2893 4.5857,9.6253 4.9997,9.6253 Z M10.9997,13.6253 C11.4137,13.6253 11.7497,13.2893 11.7497,12.8753 C11.7497,12.4613 11.4137,12.1253 10.9997,12.1253 L4.9997,12.1253 C4.5857,12.1253 4.2497,12.4613 4.2497,12.8753 C4.2497,13.2893 4.5857,13.6253 4.9997,13.6253 L10.9997,13.6253 Z M9.9997,17.6253 C10.4137,17.6253 10.7497,17.2893 10.7497,16.8753 C10.7497,16.4613 10.4137,16.1253 9.9997,16.1253 L4.9997,16.1253 C4.5857,16.1253 4.2497,16.4613 4.2497,16.8753 C4.2497,17.2893 4.5857,17.6253 4.9997,17.6253 L9.9997,17.6253 Z M8.9997,21.6253 C9.4137,21.6253 9.7497,21.2893 9.7497,20.8753 C9.7497,20.4613 9.4137,20.1253 8.9997,20.1253 L4.9997,20.1253 C4.5857,20.1253 4.2497,20.4613 4.2497,20.8753 C4.2497,21.2893 4.5857,21.6253 4.9997,21.6253 L8.9997,21.6253 Z M4.4697,4.3493 C4.3297,4.4903 4.2497,4.6793 4.2497,4.8803 C4.2497,5.0693 4.3297,5.2593 4.4697,5.3993 C4.6097,5.5403 4.7997,5.6203 4.9997,5.6203 C5.1997,5.6203 5.3897,5.5403 5.5297,5.3993 C5.6697,5.2693 5.7497,5.0693 5.7497,4.8803 C5.7497,4.6703 5.6697,4.4793 5.5297,4.3403 C5.2397,4.0593 4.7497,4.0593 4.4697,4.3493 Z M8.9997,4.1253 C8.5857,4.1253 8.2497,4.4613 8.2497,4.8753 C8.2497,5.2893 8.5857,5.6253 8.9997,5.6253 L14.9997,5.6253 C15.4137,5.6253 15.7497,5.2893 15.7497,4.8753 C15.7497,4.4613 15.4137,4.1253 14.9997,4.1253 L8.9997,4.1253 Z"
  }));
};
var Flash = function Flash(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 6 18"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M3.94 7l-1.49.49 1.43-5.23a1 1 0 0 0-.7-1.23 1 1 0 0 0-1.23.71L.04 8.75c-.1.36 0 .74.27.99s.65.34 1 .23l1.56-.51-.75 3.15a1 1 0 0 0 .97 1.23 1 1 0 0 0 .98-.77l1.15-4.89a.98.98 0 0 0-.29-.96A1 1 0 0 0 3.94 7zm-2.02 9.44c0 .26.11.53.29.72.19.18.44.29.71.29.26 0 .52-.11.71-.29.18-.19.29-.46.29-.72 0-.27-.11-.52-.29-.71a1.05 1.05 0 0 0-1.42 0c-.18.19-.29.45-.29.71z"
  }));
};
var GooglePlusHollow = function GooglePlusHollow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 48 48"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m-0.000003,0l0,48l48,0l0,-48l-48,0zm19.38359,16.18515c2.15306,0 3.95317,0.77028 5.34297,2.04297l-2.16445,2.04297c-0.59237,-0.5582 -1.62923,-1.20547 -3.17852,-1.20547c-2.72264,0 -4.94375,2.21037 -4.94375,4.93438c0,2.72401 2.22111,4.93437 4.94375,4.93437c3.15553,0 4.34039,-2.22159 4.52266,-3.37148l-4.52266,0l0,-2.6793l7.53008,0c0.06835,0.39074 0.12539,0.78138 0.12539,1.29492c0,4.46559 -3.05318,7.63633 -7.65547,7.63633c-4.40863,0 -7.97422,-3.49439 -7.97422,-7.81484c0,-4.32046 3.56559,-7.81485 7.97422,-7.81485zm12.57579,4.3418l2.31562,0l0,2.31524l2.31523,0l0,2.31562l-2.31523,0l0,2.31563l-2.31562,0l0,-2.31563l-2.31563,0l0,-2.31562l2.31562,0l0.00001,-2.31524z"
  }));
};
var HandPointer = function HandPointer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 72 91"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    strokeWidth: "4",
    fill: "none"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinejoin: "round",
    d: "m46.213682,58.867945l10.3665,-9.70192c4.09913,-3.43549 8.64363,-3.07586 11.13856,-1.18697c2.49494,1.88889 3.32659,6.05159 0,10.22222c-13.30633,11.92593 -21.62278,22.14815 -24.94937,30.66667c0,0 -10.81139,0 -32.43418,0c0,-1.7037 0,-4.25926 0,-7.66667c0,-5.11111 -8.12151,-10.22222 -8.12151,-23c0,-8.51852 0,-17.38492 0,-19.08862"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    d: "m32.213682,11.867945l0,23"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    d: "m21.213682,31.867945l0,2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    d: "m11.213682,35.867945l0,2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    d: "m46.213682,18.867945l0,40"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m32.213682,23.867945l0,-15.4386c0,-3.62376 2.9599,-6.5614 6.61111,-6.5614l0.77778,0c3.65121,0 6.61111,2.93764 6.61111,6.5614l0,15.4386"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m11.160392,37.580085c-0.98528,-1.08782 -0.40644,-0.51524 -0.98528,-1.08782c-0.82544,-0.99248 -2.06965,-1.62432 -3.46143,-1.62432c-2.48528,0 -4.5,2.01472 -4.5,4.5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m21.379902,33.455125c-0.97196,-1.55375 -2.6984,-2.58718 -4.66622,-2.58718c-3.03757,0 -5.5,2.46243 -5.5,5.5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m32.213682,33.367945c0,-3.03757 -2.46243,-5.5 -5.5,-5.5c-3.03757,0 -5.5,2.46243 -5.5,5.5"
  })));
};
var Info = function Info(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-244 -1774)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M244 1782a8 8 0 1 1 16 0 8 8 0 0 1-16 0z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-244 -1774)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    d: "M252.35 1777.8a.94.94 0 0 0-.28.69c0 .26.1.5.29.68.19.19.41.28.67.28.27 0 .5-.1.69-.28a.93.93 0 0 0 .28-.68c0-.27-.1-.5-.28-.69a.93.93 0 0 0-.69-.28c-.26 0-.49.1-.68.28zm.7 2.74l-2.23.36-.09.27h.24a.5.5 0 0 1 .34.1c.09.08.13.16.13.26 0 .15-.05.38-.13.68l-.92 3.14c-.07.25-.11.46-.11.62 0 .25.08.45.25.6.17.17.4.25.68.25.75 0 1.45-.58 2.11-1.73l-.22-.13c-.28.42-.51.72-.71.88a.34.34 0 0 1-.22.1c-.05 0-.09-.02-.13-.06a.2.2 0 0 1-.06-.14c0-.08.04-.26.11-.52l1.35-4.68z"
  })));
};
var Like = function Like(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 511.999 511.999"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M83.578,167.256H16.716C7.524,167.256,0,174.742,0,183.971v300.881c0,9.225,7.491,16.713,16.716,16.713h66.862c9.225,0,16.716-7.489,16.716-16.713V183.971C100.294,174.742,92.769,167.256,83.578,167.256z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M470.266,167.256c-2.692-0.456-128.739,0-128.739,0l17.606-48.032c12.148-33.174,4.283-83.827-29.424-101.835c-10.975-5.864-26.309-8.809-38.672-5.697c-7.09,1.784-13.321,6.478-17.035,12.767c-4.271,7.233-3.83,15.676-5.351,23.696c-3.857,20.342-13.469,39.683-28.354,54.2c-25.952,25.311-106.571,98.331-106.571,98.331v267.45h278.593c37.592,0.022,62.228-41.958,43.687-74.749c22.101-14.155,29.66-43.97,16.716-66.862c22.102-14.155,29.66-43.97,16.716-66.862C527.572,235.24,514.823,174.792,470.266,167.256z"
  }));
};
var LikeHollow = function LikeHollow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-584 -1656)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M597.96 1661.08c.98 0 1.79.83 1.79 1.86v.12c0 .54-.23 1.03-.59 1.37.12.25.2.53.2.82v.17c0 .5-.2.97-.53 1.3.13.26.2.55.2.85v.21c0 .61-.3 1.16-.74 1.49.06.18.1.39.1.6v.3c0 .97-.77 1.77-1.71 1.77h-8.25c-.1 0-.2-.03-.3-.06-.12.03-.26.06-.4.06h-2.28c-.8 0-1.45-.65-1.45-1.45v-7.63c0-.8.65-1.44 1.45-1.44H587.8a.69.69 0 0 1 .1-.13l.44-.42a14.8 14.8 0 0 0 3.01-4.18 1.2 1.2 0 0 1 1.7-.52l.24.14c.91.54 1.36 1.65 1.09 2.7l-.11.42a9.27 9.27 0 0 1-.59 1.65zm-10.28 1.78l-2.18.05v7.58l2.18-.05zm10.57.08c0-.2-.13-.36-.3-.36h-5.5a.75.75 0 0 1-.66-1.1l.4-.76c.27-.52.48-1.08.63-1.66l.1-.42a.95.95 0 0 0-.35-1.02 16.3 16.3 0 0 1-3.18 4.33l-.21.2v8.29h7.5c.11 0 .21-.13.21-.28v-.29c0-.15-.1-.27-.21-.27a.75.75 0 0 1 0-1.5h.6c.14 0 .25-.15.25-.32v-.2c0-.18-.11-.32-.25-.32a.75.75 0 0 1 0-1.5h.3c.15 0 .27-.16.27-.34v-.17c0-.18-.12-.33-.27-.33a.75.75 0 0 1 0-1.5h.38c.16 0 .29-.17.29-.36z"
  })));
};
var LikeHollowDetailed = function LikeHollowDetailed(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 62 57"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    strokeWidth: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    rx: "4",
    height: "8",
    width: "19",
    y: "24",
    x: "42"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    rx: "4",
    height: "8",
    width: "19",
    y: "32",
    x: "41"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    rx: "4",
    height: "8",
    width: "19",
    y: "40",
    x: "40"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    rx: "4",
    height: "8",
    width: "17",
    y: "48",
    x: "39"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m45,24.157788l-8,0c1.467245,-3.835511 2.133912,-7.152409 2,-9.950691c-0.200868,-4.197423 -2,-9.950691 -3,-10.94576c-1,-0.995069 -4,-2.985208 -6,-1.990138c-1.333333,0.663379 -2,0.995069 -2,0.995069l1,9.950691l-11,19.901382c-1.333333,2.653518 -2,5.307035 -2,7.960553c0,3.980277 1,8.955622 6,15.921106"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m43,56l-22,0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m23,23l-17,0c-3.333333,4.529412 -5,9.705882 -5,15.529412c0,5.823529 2,11.647059 6,17.470588l15,0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    r: "1",
    cy: "48",
    cx: "11"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    d: "m34,38c-1.333333,3.333333 -4,5 -8,5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    d: "m26,43c2.666667,0 4.333333,1.333333 5,4"
  })));
};
var HollowLike = function HollowLike(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "6v7qa",
    d: "M498.96 943.08c.99 0 1.79.83 1.79 1.86v.12c0 .54-.23 1.03-.59 1.37.12.25.2.53.2.82v.17c0 .5-.2.97-.53 1.3.13.26.2.55.2.85v.21c0 .61-.3 1.16-.74 1.49.06.18.1.39.1.6v.3c0 .97-.77 1.77-1.71 1.77h-8.25c-.1 0-.2-.03-.3-.06-.12.03-.26.06-.4.06h-2.28c-.8 0-1.45-.65-1.45-1.45v-7.63c0-.8.65-1.44 1.45-1.44H488.8a.69.69 0 0 1 .1-.13l.44-.42a14.8 14.8 0 0 0 3.02-4.18c.15-.31.42-.54.74-.64.32-.1.66-.05.95.12l.24.14c.91.54 1.36 1.65 1.09 2.7l-.11.42a9.27 9.27 0 0 1-.59 1.65zm-10.28 1.78l-2.18.05v7.58l2.18-.05zm10.57.08c0-.2-.13-.36-.3-.36h-5.5a.75.75 0 0 1-.66-1.1l.4-.76c.27-.52.48-1.08.63-1.66l.1-.42a.95.95 0 0 0-.36-1.02 16.3 16.3 0 0 1-3.17 4.33l-.21.2v8.29h7.5c.11 0 .21-.13.21-.28v-.29c0-.15-.1-.27-.21-.27a.75.75 0 0 1 0-1.5h.6c.14 0 .25-.15.25-.32v-.2c0-.18-.11-.32-.25-.32a.75.75 0 0 1 0-1.5h.3c.15 0 .27-.16.27-.34v-.17c0-.18-.12-.33-.27-.33a.75.75 0 0 1 0-1.5h.38c.16 0 .29-.17.29-.36z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-485 -938)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "#6v7qa"
  }))));
};
var Dislike = function Dislike(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 511.999 511.999"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    style: {
      transformOrigin: '50% 50%'
    },
    transform: "rotate(180)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M83.578,167.256H16.716C7.524,167.256,0,174.742,0,183.971v300.881c0,9.225,7.491,16.713,16.716,16.713h66.862c9.225,0,16.716-7.489,16.716-16.713V183.971C100.294,174.742,92.769,167.256,83.578,167.256z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M470.266,167.256c-2.692-0.456-128.739,0-128.739,0l17.606-48.032c12.148-33.174,4.283-83.827-29.424-101.835c-10.975-5.864-26.309-8.809-38.672-5.697c-7.09,1.784-13.321,6.478-17.035,12.767c-4.271,7.233-3.83,15.676-5.351,23.696c-3.857,20.342-13.469,39.683-28.354,54.2c-25.952,25.311-106.571,98.331-106.571,98.331v267.45h278.593c37.592,0.022,62.228-41.958,43.687-74.749c22.101-14.155,29.66-43.97,16.716-66.862c22.102-14.155,29.66-43.97,16.716-66.862C527.572,235.24,514.823,174.792,470.266,167.256z"
  })));
};
var List = function List(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 12 10"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 .99A1.01 1.01 0 0 0 1 2 1.01 1.01 0 0 0 2 .99a1 1 0 0 0-.29-.7 1.05 1.05 0 0 0-1.42 0 1 1 0 0 0-.29.7zM11 2a1 1 0 0 0 1-1 1 1 0 0 0-1-1H5a1 1 0 0 0-1 1 1 1 0 0 0 1 1zM0 4.99a.99.99 0 0 0 1 1 .99.99 0 0 0 1-1 1 1 0 0 0-.29-.7 1.05 1.05 0 0 0-1.42 0 1 1 0 0 0-.29.7zM5 4a1 1 0 0 0-1 1 1 1 0 0 0 1 1h6a1 1 0 0 0 1-1 1 1 0 0 0-1-1zM0 8.99c0 .27.11.53.29.71A1 1 0 0 0 2 8.99a1 1 0 0 0-.29-.7 1.05 1.05 0 0 0-1.42 0 1 1 0 0 0-.29.7zM5 8a1 1 0 0 0-1 1 1 1 0 0 0 1 1h6a1 1 0 0 0 1-1 1 1 0 0 0-1-1z"
  }));
};
var LongArrowRight = function LongArrowRight(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 401.948 401.949"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M397,190.734L228.738,73.444c-6.599-5.632-11.996-3.147-11.996,5.528v49.068c0,8.672-7.099,15.77-15.77,15.77l-104.176,0.156H15.69v0.125C7.051,144.139,0.002,151.214,0,159.857l0.002,82.789c0,8.673,7.095,15.771,15.765,15.771l183.426-0.275h1.834c8.647,0.028,15.717,7.107,15.717,15.765v49.067c0,8.675,5.397,11.163,11.993,5.535l168.265-117.294C403.598,205.579,403.598,196.367,397,190.734z"
  }));
};
var LightArrowRight = function LightArrowRight(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 75 14"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    strokeWidth: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m1.977951,7l70,0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "65.97795104980469,1 73.02204895019531,7 65.97795104980469,13 ",
    strokeLinejoin: "round"
  })));
};
var Loop = function Loop(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M-132.14,26.79L-135,24a7.2,7.2,0,0,0,1.67-4.62,7.28,7.28,0,0,0-7.3-7.26,7.28,7.28,0,0,0-7.3,7.26,7.28,7.28,0,0,0,7.3,7.26A7.29,7.29,0,0,0-136.06,25l2.86,2.85a0.75,0.75,0,0,0,.53.22,0.75,0.75,0,0,0,.53-0.22A0.75,0.75,0,0,0-132.14,26.79Zm-14.27-7.45a5.78,5.78,0,0,1,5.8-5.76,5.78,5.78,0,0,1,5.8,5.76,5.78,5.78,0,0,1-5.8,5.76A5.78,5.78,0,0,1-146.41,19.34Z",
    transform: "translate(147.91 -12.08)"
  }));
};
var Mail = function Mail(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 12"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.27 7.09a.51.51 0 0 1-.31.11.51.51 0 0 1-.31-.11l-6.25-5a.5.5 0 0 1-.08-.7.5.5 0 0 1 .7-.08l5.94 4.75 5.94-4.75a.5.5 0 0 1 .7.08.5.5 0 0 1-.08.7zM1 0a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"
  }));
};
var MailOutline = function MailOutline(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 30 24"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    strokeWidth: "2",
    fill: "none"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "1",
    y: "1",
    width: "28",
    height: "22",
    rx: "5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "1 3 15 11.0724133 28 3"
  })));
};
var MailRead = function MailRead(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 19"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.27 13.25a.45.45 0 0 1-.27.1.47.47 0 0 1-.27-.1L2.71 9.21a.43.43 0 0 1 .27-.77h10.05c.4 0 .58.51.26.77zm7.34-6.11L8.36 1.11A.47.47 0 0 0 8 1a.47.47 0 0 0-.36.11L.39 7.14l-.02.03a1 1 0 0 0-.37.77v10.05A1 1 0 0 0 1 19h14a1 1 0 0 0 1-1.01V7.94a1 1 0 0 0-.37-.77l-.02-.03z"
  }));
};
var Make = function Make(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 14 15"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    strokeLinecap: "round"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "#4786C8",
    strokeWidth: "1.5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(1.000000, 1.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "3 4.50022099 6.45134245 7.95156344 12 2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M8.00001155,0 C6.24825045,0 4.91491327,0 4,0 C3.08508673,0 1.7517534,0 0,0 L0,13 L11.0000462,13 L11.0000462,8.64747137",
    strokeLinejoin: "round"
  })))));
};
var Minimize = function Minimize(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1.5 2c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM12 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zm2.5 7.25v5.25H9.25a.76.76 0 0 0-.75.75c0 .41.34.75.75.75h6c.41 0 .75-.34.75-.75v-6a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75z"
  }));
};
var Money = function Money(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 15"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.5 10.81c-4.33-1.53-8.67 3.12-13 1.59v-9c4.33 1.53 8.67-3.12 13-1.59zM0 13.11c5.33 3.84 10.67-3.84 16 0v-12c-5.33-3.84-10.67 3.84-16 0zm7.82-6.12l-.4.15V5.31l.56-.2c.34-.12.59-.14.75-.05.16.09.24.29.24.59 0 .31-.1.57-.29.8-.19.22-.47.4-.86.54zm.23-2.97c-.63.22-1.25.45-1.88.64v4.58l-.4.11v.72l.4-.11v.85l1.25-.42v-.85l1.44-.51v-.72l-1.44.52v-.62l.53-.2a3.77 3.77 0 0 0 1.68-1.1c.4-.48.6-1.04.6-1.7 0-.63-.19-1.06-.56-1.27-.37-.21-.91-.18-1.62.08zm4.57 5.6c.56 0 1-.36 1-.91s-.44-1.09-1-1.09c-.55 0-1 .53-1 1.08s.45.92 1 .92zM3.43 4.65c.55 0 1 .37 1 .92s-.45 1.08-1 1.08c-.55.01-1-.52-1-1.07 0-.56.45-.92 1-.93z"
  }));
};
var MoneyDollar = function MoneyDollar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "none",
    strokeWidth: "1",
    fillRule: "evenodd",
    d: "M14.5,11.8133 C10.167,10.2833 5.833,14.9333 1.5,13.4033 L1.5,4.4033 C5.833,5.9333 10.167,1.2833 14.5,2.8133 L14.5,11.8133 Z M0,2.1083 C5.333,5.9483 10.667,-1.7317 16,2.1083 L16,14.1083 C10.667,10.2683 5.333,17.9483 0,14.1083 L0,2.1083 Z M11.6241,9.6957 C11.6241,10.2497 12.0721,10.6237 12.6241,10.6237 C13.1761,10.6217 13.6241,10.2617 13.6241,9.7087 C13.6241,9.1567 13.1761,8.6217 12.6241,8.6237 C12.0721,8.6237 11.6241,9.1457 11.6241,9.6957 Z M3.4304,5.6514 C2.8784,5.6584 2.4304,6.0234 2.4304,6.5764 C2.4304,7.1274 2.8784,7.6584 3.4304,7.6514 C3.9824,7.6474 4.4304,7.1224 4.4304,6.5724 C4.4304,6.0184 3.9824,5.6474 3.4304,5.6514 Z M10.8009564,9.24566647 C10.8009564,9.75254288 10.6176548,10.1597912 10.251046,10.4674238 C9.8844373,10.7750563 9.37119278,10.9591549 8.71129707,11.019725 L8.71129707,12 L8.05618649,12 L8.05618649,11.0388524 C7.27833841,11.0229129 6.59613762,10.8858351 6.00956366,10.6276151 L6.00956366,9.36521219 C6.28691113,9.50229198 6.62083885,9.62343044 7.01135684,9.7286312 C7.40187484,9.83383197 7.7501479,9.89599512 8.05618649,9.91512253 L8.05618649,8.43275553 L7.73580395,8.30842797 C7.10459935,8.05977162 6.65750281,7.78960098 6.3945009,7.49790795 C6.13149898,7.20621492 6,6.84519044 6,6.41482367 C6,5.95257788 6.18091072,5.57242628 6.5427376,5.27435744 C6.90456447,4.97628861 7.40904239,4.79537788 8.05618649,4.73161984 L8.05618649,4 L8.71129707,4 L8.71129707,4.71249253 C9.44132662,4.74437155 10.1012124,4.89101284 10.6909743,5.1524208 L10.2414824,6.2713688 C9.74416966,6.06734307 9.23411299,5.94301676 8.71129707,5.89838613 L8.71129707,7.3090257 C9.33293796,7.54811835 9.77525272,7.75532887 10.0382546,7.93066348 C10.3012565,8.10599809 10.4941217,8.29886326 10.6168559,8.50926479 C10.7395902,8.71966632 10.8009564,8.96513109 10.8009564,9.24566647 Z M9.36162582,9.3173939 C9.36162582,9.18350202 9.3074323,9.0703332 9.19904363,8.97788404 C9.09065497,8.88543488 8.92807441,8.78979926 8.71129707,8.6909743 L8.71129707,9.88164973 C9.14485174,9.80832799 9.36162582,9.62024459 9.36162582,9.3173939 Z M7.43933054,6.41482367 C7.43933054,6.55509136 7.48794532,6.67065107 7.58517633,6.76150628 C7.68240734,6.85236148 7.83940916,6.94560622 8.05618649,7.04124328 L8.05618649,5.91751345 C7.64494714,5.97808359 7.43933054,6.143852 7.43933054,6.41482367 Z"
  }));
};
var MobileCall = function MobileCall(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 37 32"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    strokeWidth: "2",
    fill: "none"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    rx: "5",
    height: "30",
    width: "19",
    y: "1",
    x: "8.941176"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    d: "m18.941176,27l-1,0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m8.941176,23l19,0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m8.941176,7l19,0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    d: "m3.941176,11c-2,1.33333 -3,3 -3,5c0,2 1,3.66667 3,5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinecap: "round",
    transform: "rotate(180 34.44117736816406,16) translate(-33.5,-16) ",
    d: "m69.441176,27c-2,1.33333 -3,3 -3,5c0,2 1,3.66667 3,5"
  })));
};
var MobilePhone = function MobilePhone(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 27.442 27.442"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M19.494,0H7.948C6.843,0,5.951,0.896,5.951,1.999v23.446c0,1.102,0.892,1.997,1.997,1.997h11.546c1.103,0,1.997-0.895,1.997-1.997V1.999C21.491,0.896,20.597,0,19.494,0z M10.872,1.214h5.7c0.144,0,0.261,0.215,0.261,0.481s-0.117,0.482-0.261,0.482h-5.7c-0.145,0-0.26-0.216-0.26-0.482C10.612,1.429,10.727,1.214,10.872,1.214z M13.722,25.469c-0.703,0-1.275-0.572-1.275-1.276s0.572-1.274,1.275-1.274c0.701,0,1.273,0.57,1.273,1.274S14.423,25.469,13.722,25.469zM19.995,21.1H7.448V3.373h12.547V21.1z"
  }));
};
var NewMessage = function NewMessage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 20 20"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#F5F5F5"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M5.0104,5.9844 L0.6444,9.2654 C0.3784,9.4654 0.0004,9.2754 0.0004,8.9434 L0.0004,3.0264 C0.0004,2.6934 0.3794,2.5034 0.6444,2.7034 L5.0104,5.9844 Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M14.9896,5.9844 L19.3656,9.2724 C19.6266,9.4694 19.9996,9.2824 19.9996,8.9544 L19.9996,3.0094 C19.9996,2.6834 19.6286,2.4974 19.3696,2.6934 L14.9896,5.9844 Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.9143,9.1713 L9.9793,9.9213 L9.0443,9.1713 L6.2863,6.9603 L0.8933,11.2843 C0.5963,11.5213 0.7643,12.0003 1.1433,12.0003 L18.8143,12.0003 C19.1943,12.0003 19.3613,11.5213 19.0653,11.2843 L13.6723,6.9603 L10.9143,9.1713 Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M9.9792,8 L0.8912,0.714 C0.5952,0.477 0.7622,0 1.1402,0 L18.8182,0 C19.1962,0 19.3632,0.477 19.0682,0.714 L9.9792,8 Z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(6.250000, 13.000000)",
    fill: "#8D8D8D"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0.75,1.66533454e-15 L0.75,1.66533454e-15 L0.75,1.66533454e-15 C1.16421356,1.58924387e-15 1.5,0.335786438 1.5,0.75 L1.5,3.25 L1.5,3.25 C1.5,3.66421356 1.16421356,4 0.75,4 L0.75,4 L0.75,4 C0.335786438,4 5.07271091e-17,3.66421356 0,3.25 L0,0.75 L1.11022302e-16,0.75 C6.02951933e-17,0.335786438 0.335786438,1.7414252e-15 0.75,1.66533454e-15 Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M3.75,1.55431223e-15 L3.75,1.55431223e-15 L3.75,1.55431223e-15 C4.16421356,1.47822157e-15 4.5,0.335786438 4.5,0.75 L4.5,4.25 L4.5,4.25 C4.5,4.66421356 4.16421356,5 3.75,5 L3.75,5 L3.75,5 C3.33578644,5 3,4.66421356 3,4.25 L3,0.75 L3,0.75 C3,0.335786438 3.33578644,1.6304029e-15 3.75,1.55431223e-15 Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M6.75,1.77635684e-15 L6.75,1.77635684e-15 L6.75,1.77635684e-15 C7.16421356,1.70026704e-15 7.5,0.335786438 7.5,0.75 L7.5,6.25 L7.5,6.25 C7.5,6.66421356 7.16421356,7 6.75,7 L6.75,7 L6.75,7 C6.33578644,7 6,6.66421356 6,6.25 L6,0.75 L6,0.75 C6,0.335786438 6.33578644,1.85244664e-15 6.75,1.77635684e-15 Z"
  }))));
};
var NoMessages = function NoMessages(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 98 88"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "a",
    d: "M48.772 87.203H0V0h97.544v87.203z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 87.203V24.665h26.664v4H4V78.88l14.916-11.933h25.366c6.67 0 12.095-5.425 12.095-12.094v-10.57h4v10.57c0 8.874-7.22 16.094-16.095 16.094H20.318L0 87.203zM41.578 24.378l8.51 8.51L68.33 14.644l-3.01-3.012-15.334 15.552-5.608-5.608-2.8 2.8zm8.51 12.75L37.336 24.38l7.042-7.043 5.593 5.592L65.305 7.375l7.268 7.27L50.088 37.13z",
    fill: "#A2C679",
    mask: "url(#b)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M30.189 54.353c-3.034 0-5.502-2.468-5.502-5.5 0-1.83.905-3.535 2.424-4.56.686-.463 1.62-.282 2.083.404.463.685.282 1.618-.404 2.082-.69.465-1.1 1.242-1.1 2.073-.002 1.38 1.12 2.5 2.498 2.5 1.38 0 2.5-1.12 2.5-2.5 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 3.032-2.468 5.5-5.5 5.5M46.188 54.353c-3.032 0-5.5-2.468-5.5-5.5 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 3.032-2.468 5.5-5.5 5.5M14.188 46.353c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5m0 8c-3.032 0-5.5-2.468-5.5-5.5s2.468-5.5 5.5-5.5c3.033 0 5.5 2.468 5.5 5.5s-2.467 5.5-5.5 5.5",
    fill: "#4786C8",
    mask: "url(#b)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M28.664 4v26.188c0 6.67 5.426 12.094 12.095 12.094h25.365L81.04 54.216V4H28.665zM85.04 62.538L64.724 46.282H40.76c-8.876 0-16.096-7.22-16.096-16.094V0H85.04v62.538z",
    fill: "#4786C8",
    mask: "url(#b)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13.184 84.26c-.39 0-.77-.16-1.06-.44-.28-.28-.44-.66-.44-1.06 0-.39.16-.78.44-1.06.56-.56 1.57-.56 2.12 0 .28.28.44.67.44 1.06 0 .4-.16.78-.44 1.06s-.66.44-1.06.44M64.903 59.57c-.82-.13-1.38-.89-1.26-1.71.13-.82.89-1.38 1.71-1.26.82.13 1.38.9 1.26 1.72-.12.74-.76 1.27-1.49 1.27-.07 0-.15-.01-.22-.02m-1.63 4.59c-.77-.31-1.14-1.19-.83-1.96.31-.76 1.19-1.13 1.96-.82.76.31 1.13 1.19.82 1.95-.24.58-.8.94-1.39.94-.19 0-.38-.04-.56-.11m-2.64 4.09c-.68-.48-.84-1.42-.36-2.09.48-.68 1.42-.84 2.09-.36.68.48.84 1.42.36 2.09-.29.42-.76.64-1.23.64-.3 0-.6-.09-.86-.28m-3.5 3.38c-.55-.61-.49-1.56.13-2.11.62-.55 1.57-.49 2.11.13.55.61.5 1.56-.12 2.11-.29.26-.64.38-1 .38-.41 0-.82-.17-1.12-.51m-4.18 2.51c-.39-.73-.12-1.64.61-2.03v-.01c.73-.39 1.64-.12 2.03.61.4.73.12 1.64-.6 2.03-.23.13-.48.18-.72.18-.53 0-1.04-.28-1.32-.78m-4.64 1.48c-.21-.81.26-1.63 1.06-1.84.8-.22 1.62.25 1.84 1.05.21.8-.26 1.63-1.06 1.84-.13.04-.26.06-.39.06-.66 0-1.27-.45-1.45-1.11m-3.31 1.81c-.82.03-1.52-.62-1.54-1.45-.03-.82.62-1.52 1.45-1.54.83-.03 1.52.62 1.55 1.45.02.83-.63 1.52-1.46 1.55-.82.02 0 0 0-.01m-21.02-1.48c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m4.87 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m4.87 0c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5s-.68 1.5-1.5 1.5c-.83 0-1.5-.67-1.5-1.5m4.87 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m-18.87 1.8c-.5-.66-.38-1.6.28-2.1.65-.51 1.6-.39 2.1.27s.38 1.6-.28 2.1c-.27.21-.59.31-.91.31-.45 0-.89-.2-1.19-.58m-3.86 2.96c-.51-.66-.38-1.6.28-2.1.65-.51 1.59-.38 2.1.27.5.66.38 1.6-.28 2.11-.27.21-.59.31-.91.31-.45 0-.9-.21-1.19-.59M65.374 54.71c-.39 0-.78-.16-1.06-.44s-.44-.66-.44-1.06.16-.78.44-1.06c.56-.56 1.56-.56 2.12 0 .28.28.44.67.44 1.06s-.16.78-.43 1.06c-.29.28-.68.44-1.07.44M68.554 57.67c-.65-.52-.76-1.46-.24-2.11.52-.65 1.46-.75 2.11-.23.65.51.75 1.46.23 2.1-.29.37-.73.57-1.17.57-.33 0-.66-.11-.93-.33m4.11 3.29c-.65-.52-.76-1.47-.24-2.11.52-.65 1.46-.75 2.11-.23.65.51.75 1.46.24 2.1-.3.37-.74.57-1.18.57-.33 0-.66-.11-.93-.33m4.11 3.29c-.65-.52-.76-1.47-.24-2.11.52-.65 1.46-.75 2.11-.24.65.52.75 1.47.23 2.11-.29.37-.73.57-1.17.57-.33 0-.66-.11-.93-.33m4.11 3.28c-.65-.51-.76-1.46-.24-2.1.52-.65 1.46-.76 2.11-.24.65.52.75 1.47.23 2.11-.29.37-.73.56-1.17.56-.33 0-.66-.11-.93-.33m4.11 3.29c-.65-.51-.75-1.46-.23-2.1.51-.65 1.46-.76 2.1-.24.65.52.76 1.46.24 2.11-.3.37-.74.56-1.18.56-.32 0-.66-.11-.93-.33M90.044 74.44c-.4 0-.78-.16-1.06-.44s-.44-.66-.44-1.06c0-.39.16-.78.43-1.06.57-.56 1.56-.56 2.13 0 .28.28.44.67.44 1.06 0 .4-.16.78-.44 1.06-.29.28-.67.44-1.06.44M88.544 19.83c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m0 4.83c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m0 4.83c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .82-.67 1.5-1.5 1.5s-1.5-.68-1.5-1.5m0 4.82c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m0 4.83c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m0 4.83c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m0 4.83c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m0 4.83c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m0 4.83c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .82-.67 1.49-1.5 1.49s-1.5-.67-1.5-1.49m0 4.82c0-.82.67-1.5 1.5-1.5s1.5.68 1.5 1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m0 4.83c0-.83.67-1.49 1.5-1.49s1.5.66 1.5 1.49-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5M90.044 16.5c-.4 0-.78-.16-1.06-.44s-.44-.67-.44-1.06.16-.78.43-1.06c.57-.56 1.57-.56 2.13 0 .28.28.44.67.44 1.06s-.16.78-.44 1.06-.67.44-1.06.44",
    fill: "#B3B3B3",
    mask: "url(#b)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M24.174 83.45c-.39 0-.78-.16-1.06-.44s-.44-.67-.44-1.06c0-.4.16-.79.44-1.06.56-.56 1.56-.56 2.12-.01.28.29.44.68.44 1.07s-.16.78-.44 1.06-.66.44-1.06.44M66.814 69.96c-.71-.43-.95-1.34-.52-2.06.42-.71 1.34-.94 2.05-.52.72.42.95 1.34.53 2.06-.29.47-.78.73-1.29.73-.27 0-.53-.07-.77-.21m-3.03 3.74c-.63-.54-.7-1.49-.15-2.11v-.01c.54-.62 1.49-.69 2.11-.15.63.55.7 1.49.16 2.12-.3.34-.72.52-1.14.52-.35 0-.7-.12-.98-.37m-3.64 3.16c-.52-.65-.42-1.59.22-2.11.64-.52 1.59-.43 2.11.22.52.64.42 1.59-.22 2.11-.28.22-.61.33-.94.33-.44 0-.87-.19-1.17-.55m-4.14 2.46c-.4-.72-.13-1.64.59-2.04.73-.4 1.64-.13 2.04.59.4.73.14 1.64-.59 2.04-.23.13-.48.19-.72.19-.53 0-1.04-.28-1.32-.78m-4.51 1.7c-.26-.79.16-1.64.95-1.91v.01c.78-.27 1.63.15 1.89.94.27.78-.15 1.63-.94 1.9-.16.05-.32.08-.48.08-.62 0-1.21-.4-1.42-1.02m-4.74.85c-.12-.81.45-1.58 1.27-1.7.82-.12 1.58.45 1.7 1.27.12.82-.45 1.58-1.27 1.7-.07.01-.14.02-.22.02-.73 0-1.37-.54-1.48-1.29m-19.26.08c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m4.81 0c0-.83.68-1.5 1.5-1.5.83 0 1.51.67 1.51 1.5s-.68 1.5-1.51 1.5c-.82 0-1.5-.67-1.5-1.5m4.82 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5m4.82 0c0-.83.67-1.5 1.49-1.5.83 0 1.51.67 1.51 1.5s-.68 1.5-1.51 1.5c-.82 0-1.49-.67-1.49-1.5M69.664 65.83c-.39 0-.78-.17-1.06-.44-.28-.28-.44-.67-.44-1.06 0-.4.16-.78.44-1.07.56-.55 1.56-.55 2.12 0 .28.29.44.67.44 1.07 0 .39-.16.78-.43 1.06-.29.27-.67.44-1.07.44M72.504 68.51c-.65-.52-.76-1.46-.24-2.1.52-.65 1.46-.76 2.11-.24.65.52.75 1.46.23 2.11-.29.37-.73.56-1.17.56-.33 0-.66-.11-.93-.33m3.76 3.02c-.64-.52-.75-1.47-.23-2.11.51-.65 1.46-.75 2.11-.24.64.52.75 1.46.23 2.11-.3.37-.73.56-1.17.56-.33 0-.66-.1-.94-.32m3.77 3.01c-.65-.52-.75-1.46-.24-2.11.52-.64 1.47-.75 2.11-.23.65.51.76 1.46.24 2.11-.3.37-.74.56-1.17.56-.33 0-.66-.11-.94-.33m3.77 3.01c-.65-.51-.75-1.46-.24-2.1.52-.65 1.47-.76 2.11-.24.65.52.75 1.46.23 2.11-.29.37-.73.56-1.17.56-.33 0-.66-.1-.93-.33m3.76 3.02c-.64-.52-.75-1.46-.23-2.11.52-.65 1.46-.75 2.11-.24.65.52.75 1.47.23 2.11-.29.37-.73.57-1.17.57-.33 0-.66-.11-.94-.33m3.77 3.01c-.64-.52-.75-1.46-.23-2.11.51-.64 1.46-.75 2.11-.23.64.52.75 1.46.23 2.11-.3.37-.73.56-1.17.56-.33 0-.66-.11-.94-.33M96.044 86.93c-.4 0-.78-.16-1.06-.44s-.44-.67-.44-1.06c0-.4.16-.79.43-1.06.56-.56 1.57-.56 2.13-.01.28.29.44.67.44 1.07 0 .39-.16.77-.44 1.06-.28.28-.67.44-1.06.44M94.544 34.13c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5s-.68 1.5-1.5 1.5c-.83 0-1.5-.67-1.5-1.5m0 5.13c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5s-.68 1.5-1.5 1.5c-.83 0-1.5-.67-1.5-1.5m0 5.13c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5s-.68 1.5-1.5 1.5c-.83 0-1.5-.67-1.5-1.5m0 5.13c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5s-.68 1.5-1.5 1.5c-.83 0-1.5-.67-1.5-1.5m0 5.13c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5 0 .82-.68 1.5-1.5 1.5-.83 0-1.5-.68-1.5-1.5m0 5.13c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5s-.68 1.5-1.5 1.5c-.83 0-1.5-.67-1.5-1.5m0 5.13c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5 0 .82-.68 1.5-1.5 1.5-.83 0-1.5-.68-1.5-1.5m0 5.13c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5s-.68 1.5-1.5 1.5c-.83 0-1.5-.67-1.5-1.5m0 5.13c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5 0 .82-.68 1.5-1.5 1.5-.83 0-1.5-.68-1.5-1.5m0 5.13c0-.83.67-1.5 1.5-1.5.82 0 1.5.67 1.5 1.5 0 .82-.68 1.5-1.5 1.5-.83 0-1.5-.68-1.5-1.5M96.044 30.5c-.4 0-.78-.16-1.06-.44s-.44-.66-.44-1.06.16-.78.44-1.06c.56-.56 1.55-.56 2.12 0 .28.28.44.66.44 1.06s-.16.78-.44 1.06-.67.44-1.06.44",
    fill: "#CCC",
    mask: "url(#b)"
  })));
};
var Odnoklassniki = function Odnoklassniki(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 27 27"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m12.924747,12.901366c3.440758,0 6.237703,-2.893089 6.237703,-6.449718c0,-3.557786 -2.796945,-6.451648 -6.237703,-6.451648c-3.440012,0 -6.237704,2.893862 -6.237704,6.451648c0,3.556629 2.797692,6.449718 6.237704,6.449718zm2.539699,5.265615l3.487038,3.606809c0.714352,0.737265 0.714352,1.934645 0,2.672682c-0.713606,0.738037 -1.870229,0.738037 -2.583088,0l-3.428441,-3.544276l-3.425456,3.544276c-0.357176,0.368633 -0.8252,0.553142 -1.293223,0.553142c-0.467278,0 -0.934555,-0.184509 -1.291731,-0.553142c-0.713605,-0.738037 -0.713605,-1.934645 -0.000746,-2.672682l3.487411,-3.606809c-1.26971,-0.299152 -2.49426,-0.819484 -3.622145,-1.551344c-0.853565,-0.556616 -1.10997,-1.72273 -0.572154,-2.60629c0.536324,-0.884718 1.664209,-1.15106 2.519267,-0.594444c2.553603,1.661355 5.843205,1.661741 8.3983,0c0.855058,-0.556616 1.98257,-0.290274 2.520013,0.594444c0.537817,0.882788 0.280665,2.049674 -0.5729,2.60629c-1.127884,0.732633 -2.352435,1.252192 -3.622145,1.551344zm-2.539699,-14.386085c1.424225,0 2.582714,1.197766 2.582714,2.670752c0,1.471828 -1.158489,2.670367 -2.582714,2.670367c-1.423106,0 -2.582715,-1.198539 -2.582715,-2.670367c0,-1.472986 1.159609,-2.670752 2.582715,-2.670752z"
  }));
};
var OdnoklassnikiHollow = function OdnoklassnikiHollow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 48 48"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m0,0l0,47.999999l48,0l0,-47.999999l-48,0zm23.419369,12.079846c3.032438,0 5.497454,2.553933 5.497454,5.693592c0,3.138638 -2.465016,5.69164 -5.497454,5.69164c-3.031775,0 -5.497455,-2.553002 -5.497455,-5.69164c0,-3.139659 2.46568,-5.693592 5.497455,-5.693592zm0,3.336426c-1.254222,0 -2.276112,1.057293 -2.276112,2.357166c0,1.298853 1.02189,2.356386 2.276112,2.356386c1.25521,0 2.276119,-1.057533 2.276119,-2.356386c0,-1.299873 -1.020909,-2.357166 -2.276119,-2.357166zm-4.596292,8.245983c0.310047,-0.01053 0.626763,0.07155 0.909358,0.255748c2.250561,1.466106 5.149678,1.466446 7.401561,0c0.753587,-0.4912 1.747074,-0.255972 2.220739,0.524769c0.473996,0.77904 0.24768,1.808571 -0.504588,2.299771c-0.994038,0.64653 -2.073458,1.105325 -3.192487,1.369321l3.073164,3.182974c0.629577,0.650618 0.629577,1.70704 0,2.35834c-0.628922,0.651298 -1.648246,0.651298 -2.276504,0l-3.021694,-3.127533l-3.018961,3.127533c-0.314785,0.325309 -0.726935,0.488065 -1.139418,0.488065c-0.411825,0 -0.823855,-0.162756 -1.138647,-0.488065c-0.628915,-0.6513 -0.629043,-1.70704 -0.000786,-2.35834l3.073556,-3.182974c-1.119028,-0.263996 -2.198064,-0.723473 -3.192094,-1.369321c-0.752275,-0.4912 -0.9782,-1.520052 -0.504203,-2.299771c0.295422,-0.487964 0.794252,-0.762959 1.310996,-0.780517l0.000008,0z"
  }));
};
var Pencil = function Pencil(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0.4 247.3 595.3 594.3"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M562.2 418.8C539.9 442 206.9 770.5 193 784.3c-1.9 1.9-4.6 3.7-8.4 4.6-22.3 7.4-157.7 51-159.5 51.9-13.9 3.7-27.9-9.3-24.1-23.2.9-1.9 40.9-133.6 49.1-163.2.9-3.7 2.8-6.5 4.6-8.4 0 0 356.2-357.1 367.4-367.4 14.9-14.9 34.4-25.1 53.8-29.7 31.6-6.5 61.2 5.6 84.4 27.9 23.2 22.3 35.3 45.5 35.3 70.5.1 23.3-11.1 48.3-33.4 71.5-22.2 23.2 22.3-23.2 0 0zM163.3 756.5c-3.7-11.1-11.1-29.7-27.9-46.4-21.4-22.3-42.7-29.7-52.8-32.5-8.4 28.8-37.1 117.8-37.1 117.8s92.8-30.5 117.8-38.9zm-.9-73.2c15.8 15.8 26 33.4 31.6 47.4 65.8-65.8 233.8-232 307.1-304.3-.9-5.6-7.4-32.5-30.6-55.6-23.2-23.2-45.5-30.6-54.7-32.5l-308 308c15.7 6.3 35.2 17.5 54.6 37 15.8 15.7-19.4-19.5 0 0zm372-379.5c-13.9-13.9-31.6-22.3-51-17.6-13 2.8-25.1 10.2-34.4 19.5 0 0-.9 1.9-2.8 2.8 14.9 6.5 33.4 17.6 51 35.3 17.6 17.6 27.9 37.1 34.4 52.8l3.7-3.7c15.8-15.8 23.2-31.6 23.2-45.5-.9-14.9-8.3-28.8-24.1-43.6-12.9-12.9 15.8 14.8 0 0z"
  }));
};
var PencilDraw = function PencilDraw(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M.22 15.43a.72.72 0 0 1-.2-.68c.84-4 1.25-4.41 1.39-4.55L11.24.38c.6-.6 1.64-.47 2.65.26l.27-.27a.75.75 0 0 1 1.06 0c.29.29.29.77 0 1.06l-.26.26c.78 1.03.92 2.12.31 2.73l-9.73 9.73h9.2c.41 0 .75.34.75.75s-.34.75-.75.75H.75a.75.75 0 0 1-.53-.22zm2.25-4.16c-.12.21-.44 1.39-.73 2.64 1.26-.3 2.45-.62 2.71-.78l6.86-6.86-1.92-1.92zm11.68-7.85c-.01-.17-.18-.66-.72-1.2-.54-.54-1.02-.71-1.2-.72l-1.78 1.78 1.92 1.93z"
  }));
};
var People = function People(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 30 36"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    strokeWidth: "3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m9,8a6,6 0 1 1 12,0a6,6 0 0 1 -12,0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m2,26.5c0,-4.14 5.82,-7.5 13,-7.5s13,3.36 13,7.5c0,4.14 -5.82,7.5 -13,7.5s-13,-3.36 -13,-7.5z"
  })));
};
var Phone = function Phone(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 25.625 25.625"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M22.079,17.835c-1.548-1.324-3.119-2.126-4.648-0.804l-0.913,0.799c-0.668,0.58-1.91,3.29-6.712-2.234C5.005,10.079,7.862,9.22,8.531,8.645l0.918-0.8c1.521-1.325,0.947-2.993-0.15-4.71l-0.662-1.04C7.535,0.382,6.335-0.743,4.81,0.58L3.986,1.3C3.312,1.791,1.428,3.387,0.971,6.419c-0.55,3.638,1.185,7.804,5.16,12.375c3.97,4.573,7.857,6.87,11.539,6.83c3.06-0.033,4.908-1.675,5.486-2.272l0.827-0.721c1.521-1.322,0.576-2.668-0.973-3.995L22.079,17.835z"
  }));
};
var PhoneInCircle = function PhoneInCircle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 144 144"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwra",
    d: "M313 167a8 8 0 0 1 8-8h39a8 8 0 0 1 8 8v77a8 8 0 0 1-8 8h-39a8 8 0 0 1-8-8z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrc",
    d: "M314 188.05s-.99-3.05-3.85-3.05c-2.86 0-4.14 1.29-4.1 4.9.03 3.62-1.28 12.32-4.32 18.87-3.05 6.56-4.73 7.73-4.73 13.19 0 5.46 3.9 12.9 3.9 19.04"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrd",
    d: "M284 254.64L299.94 241 327 272.03l-4.91 4.97"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwre",
    d: "M296 254.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrf",
    d: "M339 241.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrg",
    d: "M363 203.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrh",
    d: "M363 214.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwri",
    d: "M363 225.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrj",
    d: "M331 267s6.37-3.48 10.87-5c4.5-1.52 9.65-4.85 12.13-11"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrk",
    d: "M368 191l8.01-7.3c2.65-3.77 2.65-6.83 0-9.2-2.65-2.36-5.32-1.94-8.01 1.3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrl",
    d: "M320 231h42"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrm",
    d: "M320 175h42"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrn",
    d: "M337 168h8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwro",
    d: "M324 203.5a16.5 16.5 0 1 1 9.3 14.85c-4.04 1.65-8.4 1.65-8.4 1.65s1.76-2.73 2.87-6a16.43 16.43 0 0 1-3.77-10.5z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrp",
    d: "M334 203.13l4.91 4.87L349 198"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrq",
    d: "M269.6 200.98a70.5 70.5 0 1 1 139.94 17.18 70.5 70.5 0 0 1-139.94-17.18z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrr",
    d: "M374 151a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrs",
    d: "M281 204a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrt",
    d: "M389 212.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwru",
    d: "M287 160v6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrv",
    d: "M284 163h6"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrw",
    d: "M403.53 235.04v5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "nuwrx",
    d: "M401.04 237.53h5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "nuwrb"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    xlinkHref: "#nuwra"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeMiterlimit: "50",
    strokeWidth: "4",
    clipPath: "url(\"#nuwrb\")",
    xlinkHref: "#nuwra"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrc"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrd"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    xlinkHref: "#nuwre"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwre"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    xlinkHref: "#nuwrf"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrf"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    xlinkHref: "#nuwrg"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrg"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    xlinkHref: "#nuwrh"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrh"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    xlinkHref: "#nuwri"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwri"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrj"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrk"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrl"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrm"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4887c9",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrn"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#f1f7eb",
    xlinkHref: "#nuwro"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#a2c679",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwro"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#a2c679",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrp"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#dae6f4",
    strokeDasharray: "80 20",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrq"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    opacity: ".25",
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4786c8",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrr"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    opacity: ".25",
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#4786c8",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrs"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#cddded",
    xlinkHref: "#nuwrt"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#f6be4e",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwru"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#f6be4e",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrv"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#f6be4e",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrw"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-268 -138)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#f6be4e",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    xlinkHref: "#nuwrx"
  }))));
};
var Purse = function Purse(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 18 14"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    strokeWidth: "1.5",
    stroke: "#4786C8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.25,12 L16.25,2 C16.25,1.30964406 15.6903559,0.75 15,0.75 L2,0.75 C1.30964406,0.75 0.75,1.30964406 0.75,2 L0.75,12 C0.75,12.6903559 1.30964406,13.25 2,13.25 L15,13.25 C15.6903559,13.25 16.25,12.6903559 16.25,12 Z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "Rectangle-15",
    x: "9.75",
    y: "4.75",
    width: "7.5",
    height: "4.5",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15,7 L13,7"
  }))));
};
var PurseOpen = function PurseOpen(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M 9.8554688 0.001953125 C 9.7329845 -0.0088521937 9.6109785 0.007186555 9.5117188 0.0546875 L 0.546875 4.34375 C 0.40135646 4.4133881 0.24760641 4.489816 0.15039062 4.6210938 C 0.05317486 4.7523716 -0.00399691 4.8672065 -0.00390625 5.1015625 L 0 15.199219 C 7.9100004e-005 15.403693 0.05994797 15.617682 0.20507812 15.761719 C 0.36884134 15.924248 0.54617103 15.995989 0.73828125 15.996094 L 15.011719 16.003906 C 15.336809 16.004084 15.524219 15.997606 15.730469 15.824219 C 15.90928 15.673934 15.996094 15.495296 15.996094 15.175781 L 15.996094 5.0429688 C 15.996093 4.842856 15.88704 4.6408073 15.748047 4.5117188 C 15.609054 4.38263 15.427872 4.3203125 15.25 4.3203125 L 10.550781 4.3203125 L 10.550781 0.73046875 C 10.550833 0.49370431 10.395826 0.23902811 10.199219 0.11328125 C 10.100915 0.05040782 9.9779528 0.012758444 9.8554688 0.001953125 z M 9.0507812 1.9609375 L 9.0507812 4.3203125 L 4.1503906 4.3203125 L 9.0507812 1.9609375 z M 1.5507812 5.8398438 L 14.5 5.8398438 L 14.5 14.480469 L 1.5507812 14.480469 L 1.5507812 5.8398438 z M 11.238281 9.1523438 A 1 1.0097656 0 0 0 10.238281 10.162109 A 1 1.0097656 0 0 0 11.238281 11.171875 A 1 1.0097656 0 0 0 12.238281 10.162109 A 1 1.0097656 0 0 0 11.238281 9.1523438 z"
  }));
};
var QuestionCircle = function QuestionCircle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 98.27 98.27"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M49.135,0C21.998,0,0,21.999,0,49.135S21.998,98.27,49.135,98.27c27.136,0,49.134-21.999,49.134-49.135S76.27,0,49.135,0zM53.234,82.086c-1.539,1.521-3.684,2.293-6.369,2.293c-2.746,0-4.918-0.754-6.456-2.241c-1.545-1.495-2.328-3.604-2.328-6.269c0-2.754,0.769-4.887,2.284-6.336c1.51-1.44,3.696-2.172,6.5-2.172c2.714,0,4.861,0.746,6.386,2.219c1.528,1.479,2.304,3.596,2.304,6.289C55.555,78.472,54.773,80.564,53.234,82.086z M68.424,40.295c-1.572,2.511-4.566,5.354-8.9,8.45c-2.817,2.083-4.627,3.684-5.355,4.74c-0.686,0.995-1.034,2.346-1.034,4.014v1.98c0,0.828-0.672,1.5-1.5,1.5H41.045c-0.828,0-1.5-0.672-1.5-1.5v-2.621c0-3.041,0.663-5.732,1.972-8c1.296-2.244,3.665-4.638,7.043-7.116c3.135-2.239,5.209-4.06,6.183-5.422c0.923-1.297,1.392-2.768,1.392-4.369c0-1.742-0.615-3.024-1.881-3.92c-1.329-0.941-3.246-1.419-5.698-1.419c-4.252,0-9.173,1.366-14.624,4.061c-0.739,0.366-1.639,0.064-2.008-0.676l-4.316-8.67c-0.36-0.725-0.082-1.604,0.63-1.988c6.689-3.614,13.864-5.447,21.325-5.447c6.421,0,11.613,1.578,15.434,4.69c3.864,3.15,5.825,7.402,5.825,12.639C70.82,34.697,70.014,37.749,68.424,40.295z"
  }));
};
var Star = function Star(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 17 17"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M.38 8.07a1.2 1.2 0 0 1 .66-2.06l4.24-.6 1.89-3.75a1.22 1.22 0 0 1 2.17 0l1.89 3.75 4.23.6c1 .14 1.4 1.37.67 2.06l-3.05 2.91.72 4.11c.17.99-.87 1.73-1.76 1.27l-3.79-1.94-3.79 1.94a1.2 1.2 0 0 1-1.75-1.27l.72-4.11z"
  }));
};
var StarHollow = function StarHollow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 17 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.87 5.88c-.39-.06-.73-.3-.91-.66L8.25 1.84l-1.7 3.38c-.18.36-.52.6-.92.66l-3.77.53 2.72 2.6c.29.27.42.67.35 1.07l-.64 3.69 3.4-1.75c.35-.19.77-.19 1.12 0l3.41 1.75-.65-3.69c-.07-.4.07-.8.35-1.07l2.73-2.6zM.38 7.07a1.2 1.2 0 0 1 .66-2.06l4.24-.6L7.17.66a1.22 1.22 0 0 1 2.17 0l1.89 3.75 4.23.6c1 .14 1.4 1.37.67 2.06l-3.05 2.91.72 4.11c.17.99-.87 1.73-1.76 1.27l-3.79-1.94-3.79 1.94a1.2 1.2 0 0 1-1.75-1.27l.72-4.11z"
  }));
};
var Success = function Success(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 13 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M 4 0 L 0 4 L 0 16 L 13 16 L 13 0 L 4 0 z M 5.75 1.5 L 11.5 1.5 L 11.5 14.5 L 1.5039062 14.5 L 1.5 5.75 L 4.9765625 5.75 C 5.2515053 5.75 5.4274895 5.6324709 5.546875 5.5117188 C 5.6662606 5.3909662 5.75 5.1875163 5.75 4.9804688 L 5.75 1.5 z M 4.25 1.8710938 L 4.25 4.25 L 1.8710938 4.25 L 4.25 1.8710938 z M 10.027344 6.2480469 C 9.830397 6.2425301 9.6181028 6.3157053 9.4296875 6.5039062 L 5.9960938 9.9335938 L 4.5078125 8.4414062 C 4.2291313 8.1619944 3.7214136 8.2038045 3.4609375 8.4726562 C 3.2004614 8.7415081 3.1639002 9.2258002 3.453125 9.515625 L 5.3359375 11.402344 C 5.4481653 11.514805 5.6354352 11.758414 5.9941406 11.757812 C 6.3356599 11.757239 6.5321231 11.530377 6.6601562 11.402344 L 10.515625 7.546875 C 10.865818 7.1966821 10.787829 6.718986 10.533203 6.4648438 C 10.40589 6.3377729 10.224291 6.2535637 10.027344 6.2480469 z"
  }));
};
var Settings = function Settings(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m12.604863,11.710118l0.344784,0.399372l-0.489725,0.489726l-0.399373,-0.343843c-0.609255,-0.526118 -1.451608,-0.660079 -2.192941,-0.352942l-0.122667,0.052706l-0.017568,0.014432c-0.670432,0.327529 -1.130981,1.083294 -1.186824,1.839372l-0.039529,0.622432l-0.689883,0l-0.039529,-0.623373c-0.059294,-0.805961 -0.571922,-1.561098 -1.320157,-1.868863c-0.745412,-0.309019 -1.587765,-0.193882 -2.198902,0.333177l-0.4,0.335372l-0.489098,-0.493804l0.345412,-0.40251c0.527372,-0.610509 0.662588,-1.454431 0.347608,-2.213647c-0.307138,-0.74698 -1.07702,-1.248313 -1.882981,-1.307607l-0.604863,-0.039216l0,-0.691765l0.604863,-0.038588c0.806275,-0.05898 1.537255,-0.559686 1.849726,-1.319216c0.309333,-0.745411 0.193882,-1.587764 -0.333177,-2.198588l-0.336314,-0.400941l0.493177,-0.488157l0.403451,0.346667c0.56251,0.485333 1.320784,0.639686 2.021333,0.420078l0.030745,0.001255l0.163451,-0.067137c0.746667,-0.307451 1.247059,-0.916706 1.305412,-1.715765l0.037961,-0.430118l0.693647,0l0.037647,0.428236c0.058353,0.794353 0.559373,1.439372 1.321412,1.75247c0.745725,0.309334 1.588392,0.154353 2.198588,-0.373019l0.399373,-0.35451l0.489098,0.484392l-0.344471,0.396863c-0.527372,0.610823 -0.662275,1.452235 -0.346353,2.212706c0.307137,0.746666 0.920471,1.246431 1.726432,1.305411l0.446745,0.037961l0,0.691765l-0.447373,0.038588c-0.805647,0.059294 -1.457882,0.559686 -1.77098,1.320785c-0.309961,0.746039 -0.13553,1.589019 0.391843,2.199843m1.494588,-1.956393l1.900549,-0.145568l0,-3.606902l-1.900863,-0.145255c-0.209568,-0.015059 -0.350117,-0.144941 -0.437647,-0.357961c-0.080941,-0.19451 -0.026353,-0.413804 0.110745,-0.572549l1.306667,-1.503059l-2.545882,-2.550274l-1.500236,1.297568c-0.158431,0.136785 -0.376784,0.171922 -0.590431,0.083451c-0.19702,-0.080941 -0.323137,-0.170666 -0.337882,-0.372392l-0.146196,-1.880784l-3.60502,0l-0.146196,1.883294c-0.013177,0.179451 -0.115451,0.298353 -0.277647,0.389961l-0.078118,0.012863c-0.193569,0.080627 -0.413176,0.034823 -0.572863,-0.102902l-1.503686,-1.305098l-2.551216,2.547764l1.29851,1.503059c0.137098,0.158745 0.172236,0.377726 0.097255,0.558118l-0.012863,0.030431c-0.079686,0.193569 -0.337568,0.323451 -0.547451,0.338824l-2.05898,0.144941l0,3.606902l2.058353,0.145882c0.209569,0.015373 0.428549,0.145255 0.515451,0.35702c0.080627,0.194196 0.065255,0.413804 -0.071843,0.572549l-1.288471,1.503686l2.555294,2.550588l1.506196,-1.297568c0.158745,-0.137098 0.379295,-0.172236 0.592314,-0.083765c0.186981,0.076863 0.323451,0.351373 0.339137,0.565647l0.144942,2.077804l3.608784,0l0.144941,-2.076549c0.015686,-0.212706 0.148392,-0.439529 0.342275,-0.519216l0.070588,-0.05051c0.181333,-0.054274 0.374588,-0.02447 0.518274,0.099138l1.503059,1.290666l2.549961,-2.553411l-1.296941,-1.503687c-0.137098,-0.159058 -0.211451,-0.379294 -0.122667,-0.593254c0.079686,-0.193569 0.219922,-0.323765 0.429804,-0.339452m-5.942494,-3.822211c-1.054061,0 -1.911718,0.857657 -1.911718,1.911717c0,1.054061 0.857657,1.911718 1.911718,1.911718c1.054061,0 1.911718,-0.857657 1.911718,-1.911718c0,-1.05406 -0.857657,-1.911717 -1.911718,-1.911717"
  }));
};
var Rest = function Rest(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 69 73"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    strokeWidth: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m35.357146,72l-16,0l0.15551,-10.00094l-16.8698,-17.99906c-2,-2 -1.66666,-4 1,-6c2.55197,-1.91397 8.06946,-4.74377 16.55247,-8.48939m-0.18482,7.32114l-8.36765,5.16825l15,15l2.71429,0l0,-5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m33.357149,72l16,0l0.1302,-10.00094l16.8698,-17.99906c2,-2 1.66666,-4 -1,-6c-2.57589,-1.93192 -9.37284,-5.72999 -18.07319,-9.59158m1.43442,8.09418c1.91972,1.22165 4.79931,3.05411 8.63877,5.4974l-15,15l-3,0l0,-5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m22.357146,42c-1.65681,0 -3,-1.56696 -3,-3.49978c0,-1.93326 1.34319,-3.50022 3,-3.50022"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m46.357146,35c1.65681,0 3,1.56696 3,3.49978c0,1.93326 -1.34319,3.50022 -3,3.50022"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m22.402266,33.64212c0,1.35037 0,3.75738 0,6.89823c0,6.69719 5.37436,12.12632 12.00399,12.12632c6.62963,0 12.00399,-5.42913 12.00399,-12.12632c0,-4.47689 0,-8.7845 0,-11.04445"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m20.357146,35.48772l0.00004,-6.93071c0,0 -0.05268,-3.35873 3.68758,-3.35873l2.26523,0c0,0 1.68575,-4.53161 6.53228,-4.53161l15.51487,0c0,3.02107 0,4.53161 0,4.53161c0,0 -0.13637,4.56312 -4,4.56312c-2.57575,0 -8.87148,0 -18.88719,0c0,0 -3.06769,0.37758 -3.06769,4.04211"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m30.357146,38c0,-0.5524 -0.4476,-1 -1,-1c-0.5524,0 -1,0.4476 -1,1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m40.357146,38c0,-0.5524 -0.4476,-1 -1,-1c-0.5524,0 -1,0.4476 -1,1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    strokeLinejoin: "round",
    strokeLinecap: "round",
    d: "m31.605326,44.31955c0.58432,1.24194 1.60689,1.86291 3.06769,1.86291c1.4608,0 2.48336,-0.62097 3.06768,-1.86291"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m29.357146,56c0,2.76142 2.23858,5 5,5c2.76142,0 5,-2.23858 5,-5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m34.357146,61l0,10"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    r: "4",
    cy: "22",
    cx: "10.357146"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    r: "4",
    cy: "22",
    cx: "57.357146"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    r: "4",
    cy: "11",
    cx: "34.357146"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m10.357146,15l0,-4"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m57.357146,15l0,-4"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m34.357146,4l0,-4"
  })));
};
var Telegram = function Telegram(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 25 25"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m9.96722,15.68507l-0.344216,5.310078c0.505775,0 0.729243,-0.238174 1.01155,-0.520788l2.430006,-2.433012l5.055468,3.845909c0.930374,0.528582 1.601858,0.254908 1.833604,-0.889418l3.318729,-16.103276c0.33978,-1.40269 -0.519279,-2.038884 -1.409326,-1.622809l-19.487522,7.737342c-1.330205,0.549379 -1.32245,1.313531 -0.242468,1.654022l5.000937,1.607203l11.577702,-7.521042c0.546558,-0.341273 1.048186,-0.157797 0.636468,0.218453l-9.381221,8.717117l0.000289,0.000221z"
  }));
};
var TelegramHollow = function TelegramHollow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 48 48"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m0,0l0,48l48,0l0,-48l-48,0zm35.018795,13.578008c0.762304,-0.02868 1.339377,0.681056 1.030055,1.957425l-3.71811,18.034744c-0.259656,1.281566 -1.012222,1.588035 -2.054651,0.996062l-5.664333,-4.307428l-2.722767,2.725035c-0.316307,0.316509 -0.566722,0.583213 -1.133413,0.583213l0.385735,-5.946737l-0.000389,-0.000392l10.511176,-9.762565c0.461305,-0.421373 -0.100581,-0.627026 -0.712967,-0.244823l-12.972236,8.423047l-5.6031,-1.799925c-1.210055,-0.381327 -1.218958,-1.236902 0.271459,-1.852167l21.834774,-8.665534c0.186985,-0.08737 0.372849,-0.133337 0.548767,-0.139955z"
  }));
};
var Twitter = function Twitter(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 25 25"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m12.364498,8.044952l0.047689,0.821803l-0.794811,-0.100629c-2.89311,-0.385744 -5.420608,-1.693922 -7.566597,-3.890988l-1.04915,-1.090148l-0.270236,0.805032c-0.572264,1.794551 -0.206651,3.68973 0.985565,4.964365c0.635849,0.704403 0.492783,0.805032 -0.604056,0.385744c-0.381509,-0.134172 -0.715329,-0.234801 -0.747122,-0.184486c-0.111273,0.1174 0.270236,1.643607 0.572264,2.247381c0.413301,0.838575 1.255801,1.660378 2.177781,2.146752l0.778915,0.385745l-0.921981,0.016771c-0.890188,0 -0.92198,0.016772 -0.826603,0.368973c0.317924,1.090148 1.573725,2.247381 2.972592,2.750526l0.985565,0.352202l-0.858395,0.536688c-1.271697,0.771489 -2.765941,1.207548 -4.260185,1.241091c-0.71533,0.016772 -1.30349,0.083858 -1.30349,0.134172c0,0.167715 1.939338,1.106919 3.067969,1.475892c3.385894,1.090148 7.407635,0.620546 10.427916,-1.241091c2.145989,-1.324949 4.291978,-3.958074 5.293439,-6.507343c0.540471,-1.358491 1.080943,-3.840673 1.080943,-5.03145c0,-0.771489 0.047688,-0.872118 0.937876,-1.794551c0.524575,-0.536688 1.017358,-1.12369 1.112735,-1.291405c0.158962,-0.318659 0.143066,-0.318659 -0.667641,-0.033543c-1.351178,0.503145 -1.541932,0.436059 -0.874291,-0.318659c0.492782,-0.536688 1.080942,-1.509435 1.080942,-1.79455c0,-0.050315 -0.238443,0.033543 -0.508679,0.184486c-0.286132,0.167715 -0.92198,0.419288 -1.398867,0.570231l-0.858395,0.285116l-0.778915,-0.55346c-0.429197,-0.301887 -1.033254,-0.637317 -1.351178,-0.737946c-0.810707,-0.234801 -2.050611,-0.201258 -2.781837,0.067086c-1.987027,0.754718 -3.242828,2.700212 -3.099762,4.830193z"
  }));
};
var TwitterHollow = function TwitterHollow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 48 48"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m0,0l0,48l48,0l0,-48l-48,0zm28.435597,15.375798c0.500923,-0.01134 1.011621,0.03402 1.415524,0.140599c0.3168,0.09109 0.918878,0.395036 1.346543,0.66856l0.775967,0.501506l0.855474,-0.25852c0.475185,-0.136819 1.108588,-0.364724 1.393701,-0.516737c0.269253,-0.136819 0.507046,-0.212787 0.507046,-0.167055c0,0.258142 -0.586212,1.139717 -1.077233,1.625953c-0.665262,0.683754 -0.475299,0.744265 0.87106,0.288378c0.80781,-0.258142 0.82368,-0.258142 0.665276,0.03024c-0.09502,0.151937 -0.586091,0.683868 -1.108796,1.170104c-0.887006,0.835691 -0.934197,0.926967 -0.934197,1.625953c0,1.078828 -0.538693,3.327382 -1.077238,4.558148c-0.997886,2.309631 -3.136369,4.695345 -5.274701,5.895723c-3.009498,1.686614 -7.016575,2.112075 -10.390382,1.124409c-1.124606,-0.33411 -3.057101,-1.185184 -3.057101,-1.337121c0,-0.04573 0.585827,-0.106205 1.298608,-0.121323c1.488907,-0.03024 2.977855,-0.425461 4.24501,-1.124409l0.855473,-0.486312l-0.982136,-0.31937c-1.393871,-0.455811 -2.645208,-1.504328 -2.962001,-2.491956c-0.09502,-0.318992 -0.0635,-0.33411 0.823514,-0.33411l0.919,-0.01512l-0.776353,-0.349606c-0.91869,-0.440655 -1.758229,-1.185071 -2.170058,-1.944794c-0.300963,-0.547011 -0.681059,-1.929789 -0.570187,-2.036144c0.03175,-0.04573 0.364233,0.04573 0.744401,0.167433c1.092922,0.37988 1.23572,0.288378 0.602143,-0.349607c-1.187962,-1.154837 -1.552358,-2.871877 -0.982137,-4.497716l0.269292,-0.729449l1.045277,0.987817c2.138328,1.990526 4.657062,3.175635 7.539851,3.52509l0.791944,0.09146l-0.04751,-0.744681c-0.142564,-1.929746 1.108725,-3.69214 3.08866,-4.375932c0.364309,-0.1217 0.855364,-0.19011 1.356288,-0.201449l-0.000022,0.000038z"
  }));
};
var Vkontakte = function Vkontakte(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 27 27"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m13.72604,19.19788c0,0 0.45119,-0.04921 0.68229,-0.29286c0.21154,-0.22324 0.2042,-0.64453 0.2042,-0.64453c0,0 -0.02812,-1.96721 0.90239,-2.25767c0.91707,-0.28566 2.09457,1.9024 3.34423,2.74377c0.94396,0.63613 1.66049,0.4969 1.66049,0.4969l3.33933,-0.04561c0,0 1.74609,-0.10562 0.91829,-1.4535c-0.06847,-0.11042 -0.48299,-0.9974 -2.48218,-2.81938c-2.09458,-1.90719 -1.81334,-1.59873 0.70797,-4.89821c1.53577,-2.00922 2.14959,-3.23587 1.95762,-3.76038c-0.18219,-0.5017 -1.31201,-0.36847 -1.31201,-0.36847l-3.75873,0.0228c0,0 -0.27879,-0.03721 -0.48544,0.08402c-0.20175,0.11882 -0.33259,0.39608 -0.33259,0.39608c0,0 -0.59425,1.55432 -1.38782,2.87699c-1.67394,2.78938 -2.34279,2.93701 -2.61668,2.76418c-0.63706,-0.40449 -0.4781,-1.62274 -0.4781,-2.48812c0,-2.70416 0.41818,-3.83119 -0.81313,-4.12285c-0.4084,-0.09722 -0.7092,-0.16083 -1.75465,-0.17164c-1.34136,-0.0132 -2.47607,0.0048 -3.11923,0.31327c-0.42797,0.20524 -0.75811,0.66374 -0.55636,0.69014c0.24822,0.03241 0.81069,0.14883 1.10904,0.54731c0.38517,0.51491 0.37171,1.66955 0.37171,1.66955c0,0 0.22132,3.18306 -0.51722,3.57794c-0.50622,0.27125 -1.20074,-0.28206 -2.69372,-2.81338c-0.76422,-1.29627 -1.34136,-2.72937 -1.34136,-2.72937c0,0 -0.11127,-0.26765 -0.31058,-0.41168c-0.24088,-0.17404 -0.57713,-0.22805 -0.57713,-0.22805l-3.57166,0.02281c0,0 -0.53679,0.0144 -0.73365,0.24365c-0.17485,0.20284 -0.01345,0.62412 -0.01345,0.62412c0,0 2.79643,6.42253 5.96336,9.6596c2.90403,2.96701 6.20057,2.77257 6.20057,2.77257l1.4942,0z"
  }));
};
var VkontakteHollow = function VkontakteHollow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 48 48"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m0,0l0,48l48,0l0,-48l-48,0zm22.20774,19.94786c0.22452,-0.0038 0.46205,-0.0023 0.70886,0c0.76943,0.0079 0.99052,0.05502 1.29109,0.12654c0.90623,0.21452 0.59866,1.04345 0.59866,3.03246c0,0.63651 -0.11717,1.53251 0.35169,1.83002c0.20158,0.12713 0.6941,0.01859 1.9261,-2.0331c0.58405,-0.97287 1.02107,-2.11628 1.02107,-2.11628c0,0 0.09652,-0.20393 0.24502,-0.29133c0.15208,-0.08917 0.35716,-0.06167 0.35716,-0.06167l2.76625,-0.01678c0,0 0.83189,-0.09799 0.96597,0.27103c0.14129,0.38579 -0.31084,1.28788 -1.44115,2.76573c-1.85564,2.42688 -2.06246,2.20022 -0.52089,3.60302c1.47138,1.34013 1.77644,1.99249 1.82684,2.07372c0.60925,0.99141 -0.67564,1.06887 -0.67564,1.06887l-2.45793,0.03355c0,0 -0.52719,0.10237 -1.22193,-0.36553c-0.91973,-0.61886 -1.78651,-2.22798 -2.46145,-2.01787c-0.68484,0.21365 -0.66392,1.66053 -0.66392,1.66053c0,0 0.0052,0.3099 -0.15044,0.47411c-0.17009,0.17922 -0.50214,0.21518 -0.50214,0.21518l-1.09962,0c0,0 -2.42646,0.143 -4.56378,-2.03934c-2.33081,-2.38099 -4.38872,-7.10491 -4.38872,-7.10491c0,0 -0.11892,-0.30968 0.0098,-0.45887c0.14489,-0.16862 0.54004,-0.17926 0.54004,-0.17926l2.6287,-0.01678c0,0 0.24748,0.03952 0.42476,0.16754c0.14669,0.10594 0.2286,0.30305 0.2286,0.30305c0,0 0.42463,1.05387 0.98708,2.00732c1.09881,1.86188 1.61019,2.26893 1.98276,2.06942c0.54356,-0.29045 0.38061,-2.63178 0.38061,-2.63178c0,0 0.0099,-0.8491 -0.27354,-1.22783c-0.21958,-0.2931 -0.63363,-0.37879 -0.81631,-0.40263c-0.14849,-0.01942 0.09455,-0.35672 0.40952,-0.50769c0.35502,-0.17016 0.91336,-0.22015 1.58691,-0.23042l-0.00003,-0.00002z"
  }));
};
var Wallet = function Wallet(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 36 35"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    fill: "#ffffff",
    strokeWidth: "3",
    x: "1.5",
    y: "1.5",
    width: "27",
    height: "25",
    rx: "5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    fill: "#ffffff",
    strokeWidth: "3",
    x: "1.5",
    y: "8.5",
    width: "33",
    height: "25",
    rx: "7"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "26.5",
    cy: "20.5",
    r: "2.5"
  }));
};
var WhatsappHollow = function WhatsappHollow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 48 48"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m0,0l0,48l48,0l0,-48l-48,0zm24.051172,11.65078c3.273974,0.0014 6.347166,1.275708 8.657812,3.589062c2.310646,2.313238 3.582154,5.388114 3.58086,8.658204c-0.0028,6.746362 -5.490506,12.235918 -12.238282,12.238672l-0.0051,0c-2.048344,-0.000706 -4.060856,-0.514798 -5.848438,-1.489844l-6.48789,1.701954l1.735938,-6.341798c-1.071012,-1.856076 -1.634512,-3.961344 -1.633594,-6.11836c0.0027,-6.747892 5.492862,-12.23789 12.238672,-12.23789l0.000022,0zm0.004278,2.067188c-5.610974,0 -10.174337,4.562568 -10.176563,10.171094c-0.000756,1.922088 0.53721,3.794122 1.55547,5.413672l0.241796,0.384766l-1.027734,3.753906l3.85,-1.010156l0.371484,0.220702c1.561802,0.926802 3.352012,1.417264 5.177344,1.41797l0.0043,0c5.606642,0 10.16964,-4.563318 10.171876,-10.172266c0.0011,-2.718068 -1.05603,-5.274104 -2.976562,-7.196876c-1.920536,-1.922772 -4.474398,-2.98187 -7.191407,-2.982812l-0.000004,0zm-4.337109,4.51875c0.203841,0 0.408158,0.002 0.586328,0.01094c0.187696,0.0094 0.439646,-0.0713 0.68789,0.525c0.254829,0.61231 0.866524,2.117234 0.942968,2.270312c0.07647,0.153078 0.127316,0.331756 0.02539,0.535938c-0.101938,0.203946 -0.152972,0.331644 -0.30586,0.510156c-0.15289,0.178512 -0.321012,0.398484 -0.458594,0.535546c-0.153088,0.15249 -0.312366,0.318064 -0.133984,0.62422c0.178382,0.306154 0.79208,1.30746 1.701172,2.118358c1.168064,1.04187 2.153182,1.36492 2.458984,1.51797c0.305683,0.153128 0.484106,0.127466 0.6625,-0.07656c0.178394,-0.204086 0.764532,-0.893122 0.96836,-1.199218c0.203828,-0.306038 0.40764,-0.255134 0.68789,-0.153124c0.280367,0.102148 1.784042,0.841868 2.089844,0.99492c0.305802,0.153126 0.509514,0.229862 0.585938,0.357422c0.07642,0.127502 0.07657,0.739862 -0.178126,1.454298c-0.254932,0.714294 -1.476872,1.366146 -2.064452,1.453906c-0.526822,0.07878 -1.193246,0.111714 -1.925782,-0.121094c-0.44416,-0.140914 -1.013768,-0.329048 -1.74336,-0.64414c-3.06766,-1.324604 -5.071328,-4.413396 -5.224218,-4.617578c-0.152912,-0.204064 -1.248438,-1.65845 -1.248438,-3.163672c0,-1.505106 0.790016,-2.244626 1.070312,-2.550782c0.280298,-0.306154 0.611384,-0.382812 0.815236,-0.382812l0.000002,-0.000006z"
  }));
};
var Whatsapp = function Whatsapp(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 20 20"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    id: "lifba",
    d: "M780.06 669.28c.06.1.06.6-.15 1.18-.2.58-1.2 1.1-1.68 1.18-.42.06-.97.09-1.56-.1-.36-.11-.83-.27-1.42-.52-2.5-1.07-4.13-3.58-4.25-3.74-.13-.17-1.02-1.35-1.02-2.57 0-1.22.64-1.82.87-2.07.23-.24.5-.3.67-.3h.47c.16.01.36-.06.56.43.21.5.7 1.71.77 1.84.06.12.1.27.02.43-.08.17-.12.27-.25.42-.12.14-.26.32-.37.43-.13.12-.26.26-.11.5.14.25.64 1.07 1.38 1.72.95.85 1.76 1.11 2 1.23.25.13.4.1.54-.06.15-.16.63-.72.8-.97.16-.25.32-.2.55-.12.23.08 1.45.68 1.7.8.25.13.42.19.48.3zm-9.9 6.37a9.98 9.98 0 0 0 14.85-8.72l-.01-.01a9.92 9.92 0 0 0-9.96-9.92h-.02-.02a9.98 9.98 0 0 0-8.62 15l-1.38 5z"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-765 -657)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "#lifba"
  }))));
};
var Bell = function Bell(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 31.502 31.502"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M26.698,20.467v-7.362c0-5.182-3.604-9.511-8.438-10.647C18.23,1.096,17.122,0,15.752,0c-1.368,0-2.479,1.097-2.508,2.458c-4.835,1.135-8.44,5.465-8.44,10.646v7.361c-1.819,0-3.294,1.475-3.294,3.295v2.323h28.48V23.76C29.991,21.939,28.517,20.467,26.698,20.467z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.751,31.502c2.186,0,4.01-1.47,4.589-3.47h-9.179C11.742,30.032,13.565,31.502,15.751,31.502z"
  }))));
};
var Papers = function Papers(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-492 -1656)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M502.75 1656c.41 0 .75.34.75.75v14.5c0 .41-.34.75-.75.75h-10a.75.75 0 0 1-.75-.75v-10.5-.05l.05-.2.02-.07a.74.74 0 0 1 .15-.21l4-4c.06-.06.14-.1.21-.14l.08-.03a.72.72 0 0 1 .2-.04l.04-.01zm-.75 1.5h-4.5v3.25c0 .41-.34.75-.75.75h-3.25v9h8.5zm-7.44 2.5H496v-1.44zm2.19 6.14l3.43-3.42a.75.75 0 1 1 1.06 1.06l-3.96 3.95a.75.75 0 0 1-1.06 0l-1.58-1.58a.75.75 0 1 1 1.06-1.06zm10.19-10.14c.41 0 .75.34.75.75v14.5c0 .41-.34.75-.75.75h-1.75a.75.75 0 0 1 0-1.5h1v-13h-.97a.75.75 0 0 1 0-1.5z"
  })));
};
var Verified = function Verified(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 27 25"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M 13.5 22.5 L 10.21 24.28 C 9.72 24.54 9.13 24.35 8.9 23.86 L 7.31 20.54 L 3.57 20.09 C 3.02 20.02 2.67 19.53 2.77 18.99 L 3.49 15.4 L 0.74 12.89 C 0.33 12.52 0.33 11.92 0.74 11.55 L 3.49 9.04 L 2.77 5.45 C 2.67 4.91 3.01 4.42 3.57 4.35 L 7.31 3.9 L 8.9 0.58 C 9.14 0.09 9.73 -0.1 10.21 0.16 L 13.5 1.94 L 16.79 0.16 C 17.28 -0.1 17.87 0.09 18.1 0.58 L 19.69 3.9 L 23.43 4.35 C 23.98 4.42 24.33 4.91 24.23 5.45 L 23.51 9.04 L 26.26 11.55 C 26.67 11.92 26.67 12.53 26.26 12.89 L 23.51 15.4 L 24.23 18.99 C 24.33 19.53 23.99 20.02 23.43 20.09 L 19.69 20.54 L 18.1 23.86 C 17.86 24.36 17.27 24.54 16.79 24.28 L 13.5 22.5 Z M 13.5 22.5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ffffff",
    fillRule: "evenodd",
    d: "M 16.16 9.28 L 12.39 13.02 L 10.95 11.6 C 10.45 11.11 9.65 11.11 9.15 11.6 C 8.65 12.1 8.65 12.9 9.15 13.39 L 11.49 15.71 C 11.73 15.96 12.06 16.08 12.39 16.08 C 12.71 16.08 13.04 15.95 13.29 15.71 L 17.96 11.07 C 18.46 10.58 18.46 9.78 17.96 9.28 C 17.46 8.79 16.66 8.79 16.16 9.28 L 16.16 9.28 Z M 16.16 9.28"
  }));
};
var VerifiedStroke = function VerifiedStroke(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 38 35"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillOpacity: "0",
    stroke: "#fff",
    strokeMiterlimit: "50",
    strokeWidth: "4",
    d: "M34.66 18.03c.46-.49.45-1.25-.02-1.72l-2.72-2.76c-.26-.27-.4-.65-.34-1.02l.5-3.85a1.23 1.23 0 0 0-1.02-1.37l-3.82-.63c-.38-.06-.7-.3-.88-.63l-1.85-3.4a1.23 1.23 0 0 0-1.64-.52l-3.46 1.74c-.34.17-.74.17-1.08 0l-3.5-1.66a1.24 1.24 0 0 0-1.63.55l-1.78 3.44c-.17.33-.5.57-.87.64l-3.8.71c-.66.12-1.1.74-1 1.4l.58 3.83c.06.37-.06.75-.33 1.03l-2.66 2.81c-.46.48-.45 1.24.01 1.71l2.73 2.76c.26.27.39.65.34 1.03l-.5 3.84c-.09.66.36 1.27 1.02 1.38l3.82.63c.38.06.7.3.88.63l1.85 3.4c.32.59 1.04.81 1.64.52l3.46-1.74c.34-.17.74-.18 1.08-.01l3.5 1.67c.6.28 1.32.04 1.63-.55l1.78-3.44c.17-.34.5-.58.87-.65l3.8-.7c.66-.13 1.1-.74 1-1.4l-.58-3.83c-.06-.38.06-.76.32-1.03zm-10.13-3.4l-6.86 6.85a1.03 1.03 0 0 1-1.45 0l-2.74-2.74a1.03 1.03 0 1 1 1.45-1.46l2.02 2.02 6.13-6.13a1.03 1.03 0 0 1 1.45 1.45z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M34.66 18.03c.46-.49.45-1.25-.02-1.72l-2.72-2.76c-.26-.27-.4-.65-.34-1.02l.5-3.85a1.23 1.23 0 0 0-1.02-1.37l-3.82-.63c-.38-.06-.7-.3-.88-.63l-1.85-3.4a1.23 1.23 0 0 0-1.64-.52l-3.46 1.74c-.34.17-.74.17-1.08 0l-3.5-1.66a1.24 1.24 0 0 0-1.63.55l-1.78 3.44c-.17.33-.5.57-.87.64l-3.8.71c-.66.12-1.1.74-1 1.4l.58 3.83c.06.37-.06.75-.33 1.03l-2.66 2.81c-.46.48-.45 1.24.01 1.71l2.73 2.76c.26.27.39.65.34 1.03l-.5 3.84c-.09.66.36 1.27 1.02 1.38l3.82.63c.38.06.7.3.88.63l1.85 3.4c.32.59 1.04.81 1.64.52l3.46-1.74c.34-.17.74-.18 1.08-.01l3.5 1.67c.6.28 1.32.04 1.63-.55l1.78-3.44c.17-.34.5-.58.87-.65l3.8-.7c.66-.13 1.1-.74 1-1.4l-.58-3.83c-.06-.38.06-.76.32-1.03zm-10.13-3.4l-6.86 6.85a1.03 1.03 0 0 1-1.45 0l-2.74-2.74a1.03 1.03 0 1 1 1.45-1.46l2.02 2.02 6.13-6.13a1.03 1.03 0 0 1 1.45 1.45z"
  }));
};
var QuestionInCircle = function QuestionInCircle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 98.27 98.27"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M49.135,0C21.998,0,0,21.999,0,49.135S21.998,98.27,49.135,98.27c27.136,0,49.134-21.999,49.134-49.135S76.27,0,49.135,0zM53.234,82.086c-1.539,1.521-3.684,2.293-6.369,2.293c-2.746,0-4.918-0.754-6.456-2.241c-1.545-1.495-2.328-3.604-2.328-6.269c0-2.754,0.769-4.887,2.284-6.336c1.51-1.44,3.696-2.172,6.5-2.172c2.714,0,4.861,0.746,6.386,2.219c1.528,1.479,2.304,3.596,2.304,6.289C55.555,78.472,54.773,80.564,53.234,82.086z M68.424,40.295c-1.572,2.511-4.566,5.354-8.9,8.45c-2.817,2.083-4.627,3.684-5.355,4.74c-0.686,0.995-1.034,2.346-1.034,4.014v1.98c0,0.828-0.672,1.5-1.5,1.5H41.045c-0.828,0-1.5-0.672-1.5-1.5v-2.621c0-3.041,0.663-5.732,1.972-8c1.296-2.244,3.665-4.638,7.043-7.116c3.135-2.239,5.209-4.06,6.183-5.422c0.923-1.297,1.392-2.768,1.392-4.369c0-1.742-0.615-3.024-1.881-3.92c-1.329-0.941-3.246-1.419-5.698-1.419c-4.252,0-9.173,1.366-14.624,4.061c-0.739,0.366-1.639,0.064-2.008-0.676l-4.316-8.67c-0.36-0.725-0.082-1.604,0.63-1.988c6.689-3.614,13.864-5.447,21.325-5.447c6.421,0,11.613,1.578,15.434,4.69c3.864,3.15,5.825,7.402,5.825,12.639C70.82,34.697,70.014,37.749,68.424,40.295z"
  }));
};
var World = function World(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 430 430"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M215,0C96.451,0,0,96.451,0,215s96.451,215,215,215s215-96.451,215-215S333.549,0,215,0z M384.91,285.943c-21.135,50.439-64.104,89.547-117.032,105.441c0.949-1.762,1.868-3.543,2.757-5.344c4.547-9.202,9.325-15.69,17.344-22.161c6.137-4.956,18.186-12.632,16.216-22.311c-1.421-6.995-9.407-9.865-15.442-11.575c-9.575-2.713-19.818-3.416-29.699-4.1c-8.557-0.598-17.443-0.293-25.797-2.424c-12.502-3.182-15.32-14.004-16.111-25.412c-0.705-10.141-0.554-20.567-5.541-29.744c-6.422-11.811-21.202-15.17-33.458-16.297c-10.346-0.947-20.679-0.448-30.969-2.172c-9.9-1.658-19.276-5.135-29.442-4.741c-13.175,0.508-19.092,9.438-24.712,19.765c-2.774,5.1-20.296,44.321-30.591,53.115c-17.752-26.207-28.919-57.215-31.143-90.632c1.455-0.392,2.897-0.935,4.361-1.664c5.728-2.844,9.741-7.978,15.974-10.011c5.943-1.936,13.621-0.219,19.693,0.376c6.042,0.591,12.178,1.217,18.225,0.394c12.071-1.649,18.467-9.987,20.395-21.627c1.146-6.953,0.252-13.945,0.459-20.946c0.327-10.909,7.486-14.823,17.351-15.751c18.634-1.75,62.101,3.188,62.981-25.49c0.375-12.267-14.225-18.598-23.734-21.872c-18.516-6.37-38.747-4.146-57.685-8.571c-10.073-2.354-18.569-8.637-25.693-16.063C117.061,52.047,163.598,30.864,215,30.864c10.994,0,21.755,0.97,32.219,2.828c-5.35,0.994-10.631,2.406-15.769,4.481c-27.107,10.929-27.923,41.682-16.075,64.785c7.348,14.328,19.248,26.332,31.678,36.314c12.033,9.659,25.181,15.367,38.523,22.694c17.701,9.733,15.564,35.151,20.042,52.277c3.777,14.443,12.847,26.627,27.143,31.627c8.643,3.02,18.795,0.663,26.363,6.685c6.5,5.157,8.027,15.714,11.742,22.809C374.566,282.443,379.491,285.423,384.91,285.943z"
  }));
};
var Trash = function Trash(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 14 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-5 -3)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M7.66 17.45h8.5V9.47h-8.5zM6.5 7.97h10.81V6.78H6.5zm3.63-2.77l-.02.08h3.6l-.02-.08v-.7h-3.57zm7.93.08c.42 0 .75.34.75.75v2.69c0 .41-.33.75-.75.75h-.4v8.73c0 .42-.34.75-.75.75h-10a.75.75 0 0 1-.75-.75V9.47h-.41A.75.75 0 0 1 5 8.72V6.03c0-.41.34-.75.75-.75h2.9c-.01-.03-.03-.05-.03-.08V3.75c0-.41.34-.75.75-.75h5.07c.41 0 .75.34.75.75V5.2l-.02.08zm-4.66 10.7a.75.75 0 0 1-.75-.75v-4.08a.75.75 0 0 1 1.5 0v4.08c0 .41-.33.75-.75.75zm-3 0a.75.75 0 0 1-.74-.75v-4.08a.75.75 0 0 1 1.5 0v4.08c0 .41-.34.75-.75.75z"
  })));
};
var Burger = function Burger(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 12"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-16 -18)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.75 19.57a.77.77 0 0 1-.75-.79c0-.43.34-.78.75-.78h14.5c.41 0 .75.35.75.78 0 .43-.34.78-.75.78zm14.5 8.86c.41 0 .75.36.75.79 0 .43-.34.78-.75.78h-14.5a.77.77 0 0 1-.75-.78c0-.43.34-.79.75-.79zm0-5.21c.41 0 .75.35.75.78 0 .43-.34.78-.75.78h-14.5A.77.77 0 0 1 16 24c0-.43.34-.78.75-.78z"
  })));
};
var Warning = function Warning(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 485.811 485.811"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M476.099,353.968l-170.2-294.8c-27.8-48.7-98.1-48.7-125.8,0l-170.3,294.8c-27.8,48.7,6.8,109.2,62.9,109.2h339.9C468.699,463.168,503.899,402.068,476.099,353.968z M242.899,397.768c-14.8,0-27.1-12.3-27.1-27.1s12.3-27.1,27.1-27.1c14.8,0,27.1,12.3,26.5,27.8C270.099,385.468,257.099,397.768,242.899,397.768z M267.599,222.568c-1.2,21-2.5,41.9-3.7,62.9c-0.6,6.8-0.6,13-0.6,19.7c-0.6,11.1-9.3,19.7-20.4,19.7s-19.7-8-20.4-19.1c-1.8-32.7-3.7-64.8-5.5-97.5c-0.6-8.6-1.2-17.3-1.9-25.9c0-14.2,8-25.9,21-29.6c13-3.1,25.9,3.1,31.5,15.4c1.9,4.3,2.5,8.6,2.5,13.6C269.499,195.468,268.199,209.068,267.599,222.568z"
  }));
};
var Circle = function Circle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 12 12"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "6"
  }));
};
var CheckMarkInCircle = function CheckMarkInCircle(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 30 30"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15,0C6.7,0,0,6.7,0,15c0,8.3,6.7,15,15,15s15-6.7,15-15C30,6.7,23.3,0,15,0z M12.1,20l-4.7-4.7l1.5-1.5l3.3,3.3L21.2,8l1.5,1.5L12.1,20z"
  }));
};
var Pro = function Pro(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 100 100"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "50.073",
    cy: "49.927",
    r: "49.927"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFFFFF",
    d: "M32.27,44.92c0,2.881-0.901,5.083-2.7,6.609c-1.801,1.527-4.36,2.289-7.68,2.289h-2.435v9.52H13.78V36.572h8.549c3.246,0,5.715,0.699,7.405,2.096C31.424,40.066,32.27,42.15,32.27,44.92z M19.455,49.167h1.868c1.745,0,3.051-0.344,3.917-1.034s1.3-1.694,1.3-3.011c0-1.33-0.363-2.313-1.089-2.947c-0.727-0.635-1.865-0.952-3.415-0.952h-2.582V49.167z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFFFFF",
    d: "M42.998,53.068v10.27h-5.675V36.572h7.799c3.636,0,6.328,0.663,8.074,1.986c1.744,1.325,2.617,3.334,2.617,6.033c0,1.574-0.434,2.975-1.299,4.201c-0.867,1.227-2.096,2.188-3.682,2.884c4.027,6.018,6.652,9.904,7.873,11.662h-6.297l-6.39-10.27H42.998z M42.998,48.453h1.831c1.794,0,3.118-0.299,3.973-0.896c0.854-0.599,1.28-1.539,1.28-2.82c0-1.269-0.436-2.172-1.308-2.71c-0.873-0.536-2.224-0.805-4.055-0.805h-1.721V48.453z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#FFFFFF",
    d: "M86.367,49.917c0,4.432-1.1,7.838-3.297,10.217s-5.346,3.57-9.445,3.57c-4.102,0-7.25-1.191-9.447-3.57c-2.195-2.379-3.295-5.797-3.295-10.254c0-4.454,1.102-7.856,3.305-10.206c2.203-2.349,5.361-3.524,9.475-3.524c4.111,0,7.258,1.184,9.436,3.553C85.277,42.07,86.367,45.476,86.367,49.917z M66.834,49.917c0,2.993,0.566,5.245,1.701,6.756c1.135,1.514,2.832,2.271,5.09,2.271c4.527,0,6.793-3.01,6.793-9.028c0-6.028-2.254-9.043-6.756-9.043c-2.26,0-3.961,0.759-5.109,2.28C67.406,44.673,66.834,46.928,66.834,49.917z"
  })));
};
var ProPlus = function ProPlus(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 99.85 99.85"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "49.93",
    cy: "49.93",
    r: "49.93"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ffffff",
    d: "M25.61,45.23a6.71,6.71,0,0,1-2.21,5.42,9.46,9.46,0,0,1-6.3,1.88h-2v7.8H10.45V38.38h7a9.32,9.32,0,0,1,6.07,1.72A6.27,6.27,0,0,1,25.61,45.23ZM15.1,48.71h1.53a5.09,5.09,0,0,0,3.21-.85,3,3,0,0,0,1.07-2.47A3,3,0,0,0,20,43a4.19,4.19,0,0,0-2.8-.78H15.1v6.51h0Z",
    transform: "translate(-0.07)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ffffff",
    d: "M34.4,51.91v8.42H29.75V38.38h6.39q4.47,0,6.62,1.63A5.81,5.81,0,0,1,44.91,45a5.83,5.83,0,0,1-1.06,3.44,7.06,7.06,0,0,1-3,2.36q5,7.4,6.45,9.56H42.12l-5.24-8.42H34.4Zm0-3.78h1.5a5.75,5.75,0,0,0,3.26-.73,2.63,2.63,0,0,0,1-2.31,2.4,2.4,0,0,0-1.07-2.22,6.52,6.52,0,0,0-3.32-.66H34.4v5.93Z",
    transform: "translate(-0.07)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ffffff",
    d: "M70,49.32q0,5.45-2.7,8.38t-7.74,2.93q-5,0-7.74-2.93t-2.7-8.41q0-5.48,2.71-8.37T59.54,38q5.06,0,7.74,2.91T70,49.32Zm-16,0a9.16,9.16,0,0,0,1.39,5.54,4.88,4.88,0,0,0,4.17,1.86q5.57,0,5.57-7.4t-5.54-7.41a4.91,4.91,0,0,0-4.19,1.87A9.13,9.13,0,0,0,53.95,49.32Z",
    transform: "translate(-0.07)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    fill: "#ffffff",
    points: "89.47 47.61 83.78 47.61 83.78 41.91 79.78 41.91 79.78 47.61 74.09 47.61 74.09 51.6 79.78 51.6 79.78 57.3 83.78 57.3 83.78 51.6 89.47 51.6 89.47 47.61"
  }));
};
var Hammer = function Hammer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 492.508 492.508"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M199.493,402.145c0-10.141-8.221-18.361-18.36-18.361H42.475c-10.139,0-18.36,8.221-18.36,18.361c0,3.195,0.818,6.199,2.255,8.816H0v38.067h223.607v-38.067h-26.369C198.674,408.343,199.493,405.34,199.493,402.145z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M175.898,88.224l117.157,74.396c9.111,4.643,20.43,1.678,26.021-7.129l5.622-8.85c5.938-9.354,3.171-21.75-6.182-27.69L204.592,46.608c-9.352-5.939-21.748-3.172-27.688,6.182l-5.622,8.851C165.692,70.447,167.82,81.952,175.898,88.224z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M492.456,372.433l-0.082-1.771l-0.146-1.672c-0.075-1.143-0.235-2.159-0.375-3.204c-0.562-4.177-1.521-7.731-2.693-10.946c-2.377-6.386-5.738-11.222-9.866-14.845c-1.027-0.913-2.126-1.714-3.218-2.528l-3.271-2.443c-2.172-1.643-4.387-3.218-6.587-4.815c-2.196-1.606-4.419-3.169-6.644-4.729c-2.218-1.571-4.445-3.125-6.691-4.651c-4.468-3.089-8.983-6.101-13.51-9.103l-6.812-4.464l-6.85-4.405c-4.58-2.911-9.167-5.813-13.785-8.667c-4.611-2.865-9.24-5.703-13.896-8.496l-13.979-8.363l-14.072-8.22l-14.149-8.096l-14.219-7.987l-14.287-7.882l-14.354-7.773c-4.802-2.566-9.599-5.137-14.433-7.653c-4.822-2.529-9.641-5.071-14.498-7.548l-4.398,6.928l-22.17-10.449l24.781-39.026l-117.156-74.395l-60.944,95.974l117.157,74.395l24.781-39.026l18.887,15.622l-4.399,6.929c4.309,3.343,8.657,6.619,12.998,9.91c4.331,3.305,8.698,6.553,13.062,9.808l13.14,9.686l13.211,9.577l13.275,9.474l13.346,9.361l13.422,9.242l13.514,9.095c4.51,3.026,9.045,6.009,13.602,8.964c4.547,2.967,9.123,5.882,13.707,8.792l6.898,4.324l6.936,4.266c4.643,2.818,9.289,5.625,13.985,8.357c2.337,1.383,4.689,2.739,7.055,4.078c2.358,1.349,4.719,2.697,7.106,4c2.383,1.312,4.75,2.646,7.159,3.912l3.603,1.922c1.201,0.64,2.394,1.296,3.657,1.837c5.036,2.194,10.841,3.18,17.63,2.614c3.409-0.305,7.034-0.949,11.054-2.216c1.006-0.317,1.992-0.606,3.061-1.023l1.574-0.58l1.639-0.68c2.185-0.91,4.523-2.063,7.059-3.522C492.513,377.405,492.561,374.799,492.456,372.433z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M67.897,261.877l113.922,72.341c9.354,5.938,21.75,3.172,27.689-6.181l5.621-8.852c5.592-8.808,3.462-20.311-4.615-26.583L93.358,218.207c-9.111-4.642-20.43-1.678-26.022,7.13l-5.62,8.85C55.775,243.541,58.543,255.938,67.897,261.877z"
  }));
};
var Percent = function Percent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 394.4 394.4"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M37.4,377.4c-5.223,0-10.438-1.992-14.423-5.977c-7.97-7.963-7.97-20.883,0-28.846l319.6-319.601c7.97-7.97,20.876-7.97,28.846,0c7.97,7.962,7.97,20.882,0,28.845l-319.6,319.601C47.838,375.408,42.623,377.4,37.4,377.4zM394.4,299.199c0-52.496-42.704-95.199-95.2-95.199S204,246.703,204,299.199s42.704,95.201,95.2,95.201S394.4,351.695,394.4,299.199z M353.601,299.199c0,29.996-24.405,54.4-54.4,54.4s-54.4-24.404-54.4-54.4c0-29.994,24.405-54.398,54.4-54.398S353.601,269.205,353.601,299.199z M190.4,95.2C190.4,42.704,147.696,0,95.2,0S0,42.704,0,95.2s42.704,95.2,95.2,95.2S190.4,147.696,190.4,95.2z M149.6,95.2c0,29.995-24.405,54.4-54.4,54.4s-54.4-24.405-54.4-54.4s24.405-54.4,54.4-54.4S149.6,65.206,149.6,95.2z"
  }));
};
var Smile = function Smile(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 32 32"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M 27.27 27.27 C 33.5 21.04 33.5 10.9 27.27 4.67 C 21.04 -1.56 10.9 -1.56 4.67 4.67 C -1.56 10.9 -1.56 21.04 4.67 27.27 C 10.9 33.5 21.04 33.5 27.27 27.27 L 27.27 27.27 Z M 6.42 6.41 C 11.68 1.15 20.26 1.15 25.53 6.42 C 30.8 11.68 30.8 20.26 25.53 25.53 C 20.26 30.8 11.68 30.8 6.42 25.53 C 1.15 20.26 1.15 11.68 6.42 6.41 L 6.42 6.41 Z M 17.73 12.55 C 17.73 11.11 18.9 9.93 20.35 9.93 C 21.79 9.93 22.97 11.11 22.97 12.55 C 22.97 12.97 22.63 13.3 22.21 13.3 C 21.8 13.3 21.46 12.97 21.46 12.55 C 21.46 11.94 20.96 11.43 20.35 11.43 C 19.73 11.43 19.23 11.94 19.23 12.55 C 19.23 12.97 18.9 13.3 18.48 13.3 C 18.06 13.3 17.73 12.97 17.73 12.55 L 17.73 12.55 Z M 9.38 12.54 C 9.38 11.1 10.55 9.92 12 9.92 C 13.44 9.92 14.62 11.1 14.62 12.54 C 14.62 12.96 14.28 13.3 13.87 13.3 C 13.45 13.3 13.11 12.96 13.11 12.54 C 13.11 11.93 12.61 11.43 12 11.43 C 11.38 11.43 10.88 11.93 10.88 12.54 C 10.88 12.96 10.55 13.3 10.13 13.3 C 9.71 13.3 9.38 12.96 9.38 12.54 L 9.38 12.54 Z M 9.04 19.27 C 8.85 18.81 9.07 18.28 9.53 18.09 C 9.64 18.05 9.76 18.02 9.88 18.02 C 10.23 18.02 10.57 18.23 10.71 18.58 C 11.55 20.59 13.62 21.9 15.99 21.9 C 18.31 21.9 20.36 20.59 21.24 18.58 C 21.43 18.12 21.97 17.91 22.42 18.11 C 22.88 18.31 23.09 18.84 22.89 19.3 C 21.74 21.97 19.03 23.7 15.99 23.7 C 12.89 23.7 10.16 21.96 9.04 19.27 L 9.04 19.27 Z M 9.04 19.27"
  }));
};
var Pile = function Pile(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "4 10 22 22"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "6.3",
    y: "10.7",
    width: "3",
    height: "3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "22.3",
    y: "10.7",
    width: "3",
    height: "3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "10.3",
    y: "10.7",
    width: "11",
    height: "3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "4.3",
    y: "14.7",
    width: "18",
    height: "4"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "10.3",
    y: "19.7",
    width: "12",
    height: "5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "6.3",
    y: "19.7",
    width: "3",
    height: "5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "23.3",
    y: "19.7",
    width: "3",
    height: "5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "6.3",
    y: "15.7",
    fill: "#D5D5D5",
    width: "6",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "13.3",
    y: "15.7",
    fill: "#D5D5D5",
    width: "3",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "17.3",
    y: "15.7",
    fill: "#D5D5D5",
    width: "3",
    height: "2"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "12.3",
    y: "20.7",
    fill: "#D5D5D5",
    width: "8",
    height: "3"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "9.3",
    y: "26.7",
    width: "12",
    height: "5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "5.3",
    y: "26.7",
    width: "3",
    height: "5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "22.3",
    y: "26.7",
    width: "3",
    height: "5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    x: "11.3",
    y: "27.7",
    fill: "#D5D5D5",
    width: "8",
    height: "3"
  }));
};
var Sheets = function Sheets(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "4 6 22 22"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M6.2,6.7v1v12v1h1h2h1v-1v-8v-1v1v12v1h1h2h1v-1v-8v-1v1v11v1h1h2.6h-2.6h-1v-1v-1v-1h-1h-2h-1v-1v-2v-1h-1h-2h-1v-1v-12V6.7 M22.8,22.7l-3.6,3.6v-3.6H22.8 M18.2,5.7h-13v1v1v12v2h2h2v2v2h2h2v1v2h2h3l7-7v-6v-1v-1h-1h-2v-2v-1v-1h-4v-2v-1V5.7L18.2,5.7z M7.2,19.7v-12h9v2h-5h-2v2v8H7.2L7.2,19.7z M11.2,23.7v-12h9v2h-5h-2v2v8H11.2L11.2,23.7z M15.2,26.7v-11h8v6h-5v5H15.2L15.2,26.7z"
  }));
};
var Blank = function Blank(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "2 7 18 18"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M3.2,6.9v18h12l3-3v-15H3.2z M13.2,23.9v-4h4L13.2,23.9z"
  }));
};
var Id = function Id(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 15 11"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-1021 -570)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("image", {
    width: "15",
    height: "11",
    transform: "translate(1021 570)",
    xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAYAAACgR9dcAAABEklEQVQoU53RMUvEUAwA4JfmtSjFCloH4XA7/Bnij7Dg6uIgLe2j3R1FaIvg2lncnNykqJuLvUn0BwiCUwdxyEukwq3l7jKFwJeEBMqyPGTmA9d1b9I0fVdKqbIsT5l5d8iHAIBfx3G+tNZdHMczAOD/+hj2PO+RmUFEfBGZMnOAiB+TyeQ2iiI7iouiOJ9Pb9tWd113RET7iPhgjHleGA9NmqbZ6PveWGv7PM/rpfDQoK7rMyLaCYLgchV8QkR7vu9frYJjItoOw/BiKVxV1Za1NkHEb2PM9cK4qqp1ADgeVkbEe2PMyyjWWj8ppRwA2CSiqYiseZ43S5LkDgBkFA/XRUQGgB8R+QSA1yzL3ua//wOw9f+Z3AS1RQAAAABJRU5ErkJggg=="
  })));
};
var File = function File(props) {
  var ext = props.ext,
      other = _objectWithoutProperties(props, ["ext"]);

  var extension = typeof ext === 'undefined' ? 'ext' : ext;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 43.2 43.8"
  }, other), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M43.2,4.1c0-2.2-1.8-4.1-4.1-4.1h-27C9.8,0,8,1.8,8,4.1V8h4V4.1C12,4,12,4,12.1,4h27c0.1,0,0.1,0,0.1,0.1v22.2H25.6v13.5H12.1c-0.1,0-0.1,0-0.1-0.1V26.3H8v13.4c0,2.2,1.8,4.1,4.1,4.1h13.5v0h1.5l16-16.1v0h0.1V4.1z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    transform: "matrix(1 0 0 1 3.0021 22.2085)",
    fontFamily: "'OpenSans-Bold'",
    fontSize: "14"
  }, extension.slice(0, 4)));
};
File.propTypes = {
  ext: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
File.defaultProps = {
  ext: undefined
};
var MessageCloud = function MessageCloud(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 10 10"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-203 -2201)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M203 2203a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-3l-3 3v-3h-2a1 1 0 0 1-1-1z"
  })));
};
var Bonus = function Bonus(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "683 224 64 64"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M683 256a32 32 0 1 1 64 0 32 32 0 0 1-64 0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#fff",
    strokeDasharray: "3 5",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    d: "M688 256a27 27 0 1 1 54 0 27 27 0 0 1-54 0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
    dominantBaseline: "text-before-edge",
    fill: "#fff",
    fontFamily: "'Open Sans','OpenSans-SemiBold'",
    fontSize: "24",
    style: {
      lineHeight: '32px'
    },
    transform: "translate(700 240)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tspan", null, "R$")));
};
var ArrowLongLeft = function ArrowLongLeft(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 18 10"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    strokeWidth: "1.5",
    fill: "none",
    strokeLinecap: "round"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m16.800012,5.065002l-15.6,0"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "m5.200012,1.085002l-4,4l3.83,3.83"
  })));
};
var Shield = function Shield(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 20 23"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#3E7BC2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.0654169,0.267166237 L10.0553593,0.259306834 L10.0654169,0.25 L10.0654169,0.267166237 Z M10.7336262,0.994123074 L10.745161,0.983449343 L10.7422169,0.98027265 L10.729424,0.994121138 L10.7336262,0.994123074 Z M1.61344478,5.632321 C1.75564878,12.4905741 4.55568158,17.8425185 10.0559076,21.7758207 C15.5587995,17.8423457 18.3613201,12.4877219 18.5057202,5.62425026 C14.7491071,4.39727892 11.9354921,3.05492487 10.0545956,1.57211203 C8.17427137,3.05331341 5.36399163,4.39847603 1.61344478,5.632321 Z M10.0606858,22.9968044 L10.0654169,22.9968044 L10.0654169,23 L10.0606858,22.9968044 Z M19.5111202,4.89588498 C19.5564936,12.6685613 16.4079258,18.698926 10.0654169,22.9869791 C3.70835216,18.702097 0.560831082,12.6739044 0.608266666,4.90556705 C5.06116482,3.50028881 8.20162419,1.95942599 10.0296448,0.282978599 C11.8903101,1.95323545 15.0388778,3.49544684 19.5111202,4.89588498 Z",
    id: "Combined-Shape-Copy",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M10.0372443,3.02463179 C10.0425252,3.01786916 10.0478106,3.01110306 10.0531006,3.0043335 C10.0541294,3.00528695 10.0551587,3.00624034 10.0561886,3.00719367 C10.0587836,3.00479615 10.0613749,3.00239826 10.0639626,3 L10.0639626,3.01437847 C11.4269797,4.27215063 13.7786525,5.424032 17.118981,6.47002259 C17.1528705,12.2754531 14.8011977,16.7795469 10.0639626,19.982304 L10.0639626,19.9920294 C10.0615629,19.9904092 10.0591637,19.9887887 10.0567652,19.9871678 C10.0555438,19.9879928 10.0543223,19.9888177 10.0531006,19.9896426 C10.0531006,19.9879896 10.0530896,19.9863316 10.0530676,19.9846685 C5.31585579,16.7819153 2.96496477,12.2794439 3.00039452,6.47725416 C6.32627479,5.42764848 8.6718914,4.27677436 10.0372443,3.02463179 Z",
    id: "Combined-Shape"
  }))));
};
var CalendarInput = function CalendarInput(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 16 16"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1.5,13.494 L14.5,13.494 L14.5,7.701 L1.5,7.701 L1.5,13.494 Z M4.208,3.515 L4.208,4.771 C4.208,5.187 4.544,5.524 4.958,5.524 C5.372,5.524 5.708,5.187 5.708,4.771 L5.708,3.515 L10.208,3.515 L10.208,4.771 C10.208,5.187 10.544,5.524 10.958,5.524 C11.372,5.524 11.708,5.187 11.708,4.771 L11.708,3.515 L14.5,3.515 L14.5,6.194 L1.5,6.194 L1.5,3.515 L4.208,3.515 Z M11.708,2.009 L11.708,0.753 C11.708,0.337 11.372,0 10.958,0 C10.544,0 10.208,0.337 10.208,0.753 L10.208,2.009 L5.708,2.009 L5.708,0.753 C5.708,0.337 5.372,0 4.958,0 C4.544,0 4.208,0.337 4.208,0.753 L4.208,2.009 L0.75,2.009 C0.336,2.009 0,2.346 0,2.762 L0,14.247 C0,14.663 0.336,15 0.75,15 L15.25,15 C15.664,15 16,14.663 16,14.247 L16,2.762 C16,2.346 15.664,2.009 15.25,2.009 L11.708,2.009 Z"
  })));
};
var X2 = function X2(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 39 39"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M38.5670466,17.8886383 L35.2492953,14.441268 C34.9252048,14.1037272 34.7698418,13.6291141 34.8299823,13.1579278 L35.4447519,8.35525425 C35.5499978,7.53281996 35.0003804,6.77035484 34.2001775,6.63499587 L29.5409588,5.84682968 C29.0848933,5.76801306 28.6872977,5.47844765 28.4667825,5.0620903 L26.2115135,0.805992877 C25.8256119,0.0743690443 24.9435512,-0.208342741 24.2185239,0.163466092 L19.9969945,2.33263652 C19.5826932,2.54681211 19.0965574,2.55195233 18.6772445,2.34634376 L14.4139507,0.262843568 C13.6839118,-0.0935446221 12.8068627,0.208014616 12.4343257,0.946492067 L10.2642557,5.24542461 C10.0504228,5.66863558 9.65950953,5.96505461 9.20344402,6.05243825 L4.56093099,6.9365551 C3.76406927,7.08733472 3.22781642,7.86008027 3.349768,8.68251455 L4.05808953,13.4714809 C4.12658289,13.9409538 3.98124333,14.4172803 3.66216453,14.7616746 L0.412906576,18.2758678 C-0.145063684,18.8789863 -0.136710836,19.8264991 0.432953412,20.4176238 L3.75070472,23.8667075 C4.07479523,24.2042483 4.2301582,24.677148 4.1700177,25.1483343 L3.55524807,29.9510078 C3.45000218,30.7751555 4.00129016,31.5359072 4.79982245,31.6712662 L9.45904118,32.4611458 C9.91677726,32.538249 10.3127023,32.8278144 10.534888,33.2458852 L12.7884865,37.5002692 C13.1760586,38.231893 14.0564488,38.5146048 14.7814761,38.142796 L19.0030055,35.9736256 C19.4173068,35.75945 19.9034426,35.7543097 20.3227555,35.9599183 L24.5860493,38.0434185 C25.3177588,38.3998067 26.1931373,38.0982475 26.5656743,37.3614834 L28.7374148,33.0608375 C28.9495772,32.6376265 29.3404905,32.3412075 29.796556,32.2538238 L34.439069,31.369707 C35.2359307,31.2189274 35.7721836,30.4461818 35.650232,29.6237475 L34.9419105,24.8364946 C34.8734171,24.3653083 35.0187567,23.8889818 35.3378355,23.5445874 L38.5870934,20.0303943 C39.1450637,19.4272758 39.1367108,18.479763 38.5670466,17.8886383",
    id: "Fill-1",
    fill: "#F6BE4E"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M21.1537026,29.1113059 L7.75152089,29.1113059 L7.75152089,26.2195712 L12.5642417,21.2296475 C13.9892688,19.7322146 14.9203308,18.6943388 15.3574557,18.115989 C15.7945806,17.5376392 16.1093058,17.001889 16.3016407,16.5087225 C16.4939757,16.015556 16.5901417,15.5044638 16.5901417,14.9754306 C16.5901417,14.1863641 16.3781393,13.5990564 15.9541282,13.2134899 C15.5301171,12.8279233 14.9640488,12.6351429 14.2559065,12.6351429 C13.5127942,12.6351429 12.791549,12.8099903 12.0921492,13.1596902 C11.3927494,13.5093901 10.6627618,14.0070325 9.90216453,14.6526323 L7.69906616,11.9760964 C8.6432559,11.1511633 9.42569769,10.5683389 10.046415,10.2276056 C10.6671323,9.88687241 11.3446657,9.62460142 12.0790355,9.4407848 C12.8134053,9.25696819 13.6351878,9.16506126 14.5444075,9.16506126 C15.7421297,9.16506126 16.799956,9.3892245 17.7179183,9.83755771 C18.6358805,10.2858909 19.3483834,10.913548 19.8554482,11.7205478 C20.3625131,12.5275475 20.6160417,13.4511001 20.6160417,14.4912331 C20.6160417,15.3968662 20.4608647,16.2464449 20.150506,17.0399947 C19.8401474,17.8335445 19.3593172,18.647257 18.7080012,19.4811568 C18.0566851,20.3150565 16.9092495,21.5031217 15.26566,23.045388 L12.800288,25.4260254 L12.800288,25.6143244 L21.1537026,25.6143244 L21.1537026,29.1113059 Z M25.4069064,23.9913663 L22.259623,19.0866255 L25.2845121,19.0866255 L27.1816245,22.278742 L29.0962219,19.0866255 L32.121111,19.0866255 L28.9388578,23.9913663 L32.2697327,29.1113059 L29.2361012,29.1113059 L27.1816245,25.6770907 L25.1184054,29.1113059 L22.0935164,29.1113059 L25.4069064,23.9913663 Z",
    id: "2x",
    fill: "#FFFFFF"
  })));
};
var ManCheck = function ManCheck(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 39 39"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    id: "Polygon-Copy-4",
    fill: "#A2C679",
    points: "19.5 0 33.2885822 5.71141777 39 19.5 33.2885822 33.2885822 19.5 39 5.71141777 33.2885822 0 19.5 5.71141777 5.71141777"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(7.900000, 8.900000)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ellipse", {
    id: "Oval-2-Copy-4",
    stroke: "#FFFFFF",
    strokeWidth: "3",
    cx: "9.29609375",
    cy: "3.5546875",
    rx: "3.57542067",
    ry: "3.5546875"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.731851,18.484375 L12.5836809,18.484375 L9.48113011,18.484375 L5.67195827,18.484375 L2.52378816,18.484375 C0.84126272,18.4018069 0,17.6637338 0,16.2701556 C0,14.2801472 2.87267936,11.6426699 8.67763153,11.3940054 C8.82934209,11.375 8.97949102,11.3765772 9.12781956,11.3796848 C9.2761481,11.3765772 9.42629703,11.375 9.57826727,11.375 C10.3805605,11.4283841 11.1270661,11.5084223 11.817682,11.6260966",
    id: "Combined-Shape-Copy-19",
    stroke: "#FFFFFF",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "Rectangle-30-Copy-3",
    fill: "#FFFFFF",
    transform: "translate(17.662019, 11.375000) rotate(-45.000000) translate(-17.662019, -11.375000) ",
    x: "16.1620192",
    y: "8.53125",
    width: "3",
    height: "5.6875",
    rx: "1.5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "Rectangle-30-Copy-4",
    fill: "#FFFFFF",
    transform: "translate(21.952524, 10.664063) rotate(-135.000000) translate(-21.952524, -10.664063) ",
    x: "20.452524",
    y: "5.6875",
    width: "3",
    height: "9.953125",
    rx: "1.5"
  }))));
};
var Deadline = function Deadline(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 39 40"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-705 -1215)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#ff6f6f",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    d: "M714.17 1249.16a17.03 17.03 0 0 0 11.95 4.84c9.32 0 16.88-7.39 16.88-16.5s-7.56-16.5-16.88-16.5c-4.76 0-9.05 1.92-12.12 5"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-705 -1215)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#ff6f6f",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    d: "M706 1231h9.61"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-705 -1215)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#ff6f6f",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    d: "M706 1245h9.61"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-705 -1215)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#ff6f6f",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    d: "M708 1238h9.61"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-705 -1215)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#ff6f6f",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    d: "M726 1215v5"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-705 -1215)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#ff6f6f",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    d: "M725.67 1227.62v-1.5"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-705 -1215)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#ff6f6f",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    d: "M735.92 1237.87h1.5"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-705 -1215)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#ff6f6f",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    d: "M725.67 1248.62v-1.5"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-705 -1215)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#ff6f6f",
    strokeLinejoin: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    d: "M735 1224.23l3.55-3.23 4.45 4.04-3.26 2.96"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-705 -1215)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#ff6f6f",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    d: "M723 1216h5.96"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-705 -1215)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#ff7070",
    strokeLinecap: "round",
    strokeMiterlimit: "50",
    strokeWidth: "2",
    d: "M721.36 1235.37l4.43 4.44 9.8-9.81"
  }))));
};
var ChessQueen = function ChessQueen(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 36 36"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#77CDDD"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    points: "18 0 36 18 18 36 0 18"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(11.000000, 10.000000)",
    stroke: "#FFFFFF"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polygon", {
    strokeWidth: "3",
    strokeLinejoin: "round",
    points: "2.39505141 10.4615385 0 2.52553074 3.83464939 3.98385932 6.75554998 0 9.42507781 3.98385932 13 2.52553074 10.7426057 10.4615385"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1.81853103,14.8205128 L11.05,14.8205128",
    strokeWidth: "1.5"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1.81853103,15.8205128 L11.05,15.8205128",
    strokeWidth: "3",
    strokeLinecap: "round"
  }))));
};
var TipRangeArrow = function TipRangeArrow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 21 52"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M741.717926,252.294722 L719.958034,227.025738 L745.230337,248.784299 C747.532672,247.862007 750.274468,248.342172 752.151739,250.219444 C754.657494,252.725198 754.67409,256.771232 752.188809,259.256513 C749.703527,261.741795 745.657494,261.725198 743.151739,259.219444 C741.273565,257.34127 740.793842,254.597741 741.717926,252.294722 Z",
    id: "path-1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("filter", {
    x: "-20.5%",
    y: "-14.7%",
    width: "141.1%",
    height: "141.1%",
    filterUnits: "objectBoundingBox",
    id: "filter-2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feOffset", {
    dx: "0",
    dy: "2",
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feGaussianBlur", {
    stdDeviation: "2",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("feColorMatrix", {
    values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.175639719 0",
    type: "matrix",
    in: "shadowBlurOuter1"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "\u0414\u0438\u0430\u043F\u0430\u0437\u043E\u043D-\u0441\u0442\u0430\u0432\u043E\u043A-",
    transform: "translate(-725.000000, -219.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Combined-Shape",
    transform: "translate(737.000000, 244.067704) rotate(-315.000000) translate(-737.000000, -244.067704) "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "black",
    fillOpacity: "1",
    filter: "url(#filter-2)",
    xlinkHref: "#path-1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    fill: "#FFFFFF",
    fillRule: "evenodd",
    xlinkHref: "#path-1"
  })))));
};
var Point = function Point(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 12 12"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-1152 -563)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#f6be4e",
    d: "M1152 569a6 6 0 1 1 12 0 6 6 0 0 1-12 0z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#fff",
    strokeMiterlimit: "50",
    strokeWidth: "1.5",
    d: "M1158 565V569.714"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#fff",
    fillOpacity: "0",
    stroke: "#fff",
    strokeMiterlimit: "50",
    strokeWidth: "1.5",
    d: "M1158 571v1.714"
  }))));
};
var HandshakeShield = function HandshakeShield(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
    viewBox: "0 0 169 87"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Group-16",
    transform: "translate(0.000000, 2.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M85,0.284482759 C91.9075477,3.52714294 97.2600495,5.62886278 101.057506,6.58964229 C104.854962,7.55042179 111.395405,8.45768942 120.678835,9.31144517 L120.678835,39.3281265 C120.738829,55.7339098 110.794668,70.7448041 95.0381012,78.0322537 L85,82.7155172 L74.9618988,78.0322537 C59.2053322,70.7448041 49.2611705,55.7339098 49.3211655,39.3281265 L49.3211655,10.0392789 C58.3036685,8.99704148 64.8148514,7.92366208 68.8547139,6.8191407 C72.8945764,5.71461932 78.2763385,3.53640001 85,0.284482759 Z",
    id: "Combined-Shape",
    stroke: "#FFFFFF",
    strokeWidth: "4",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M99.9127465,28.6224115 L113.999781,19.0019607 L113.999781,38.2185598 C113.961627,38.2406963 113.918944,38.2655086 113.871967,38.2928783 C113.631665,38.4328813 113.364303,38.5902019 113.076687,38.7613905 C112.254359,39.2508378 111.433423,39.7539693 110.667678,40.2436841 C110.373706,40.4316868 110.09295,40.6145252 109.827139,40.7913512 C109.592428,40.947488 109.370832,41.0979128 109.162926,41.2424499 C108.291448,38.707307 107.242402,36.5167997 106.012679,34.6717699 C104.7776,32.8187017 102.745315,30.8085624 99.9127465,28.6224115 Z M97.7312238,29.4815315 C100.915995,31.8340656 103.123154,33.9425878 104.348455,35.7809843 C105.580159,37.6289878 106.628539,39.8837936 107.48958,42.5464896 C106.328995,43.5968287 104.388128,45.5868445 101.646467,48.534428 C96.2720623,43.2217126 92.8332226,39.8057277 91.3330419,38.2895845 C89.2762942,36.2109523 87.8073406,35.8647865 85.823777,36.3700679 C85.440967,36.4675827 85.512543,36.4496117 85.4181458,36.4704691 C84.7275853,36.6230506 84.0093779,37.0870516 82.4544106,38.2393571 C82.3962529,38.2824711 82.3962529,38.2824711 82.3382465,38.3255232 C80.9195954,39.3786661 80.4362729,39.7124035 80.1163365,39.8338052 C80.0502799,39.8588707 79.5801982,40.0420864 79.4349675,40.0964461 C78.948964,40.2783567 78.5708305,40.391611 78.2253757,40.4483782 C77.6400524,40.5445619 77.2768405,40.4634885 77.0282438,40.18664 C76.6740961,39.5708826 76.7820164,38.9815029 77.2985814,38.2988616 C77.7010108,37.7670506 78.2139958,37.3456227 78.7692596,36.9817538 C83.9540491,33.5841187 87.1181393,31.516728 88.2571712,30.7824085 C89.3258826,30.0934239 90.4186103,29.7917671 91.5628007,29.8612346 L91.686069,29.8611071 L97.7312238,29.4815315 Z M113.992761,40.5436827 C113.719121,53.5610991 105.706473,65.3901928 93.1589754,71.1934403 L85,75 L76.8410246,71.1934403 C64.4217847,65.4495122 56.4451596,53.8022978 56.0180527,40.9424878 C58.8607272,42.7670732 60.5597689,43.9900435 61.016695,44.5209193 C61.6207828,45.2227737 63.8237639,48.103303 67.5785126,53.1033992 C67.5762462,53.106237 67.5739922,53.1090904 67.5717507,53.1119594 C66.3816792,54.6351815 66.6517511,56.8347406 68.1749732,58.0248122 C68.9666175,58.6433125 69.9409443,58.8674198 70.8602468,58.7275228 C70.9765965,59.6040761 71.4231356,60.4374123 72.1749732,61.0248122 C72.9666175,61.6433125 73.9409443,61.8674198 74.8602468,61.7275228 C74.9765965,62.6040761 75.4231356,63.4374123 76.1749732,64.0248122 C77.3497933,64.9426822 78.9269406,64.9919684 80.1295149,64.2719906 C80.354837,64.7814023 80.7053405,65.2442631 81.1749592,65.6111695 C82.6981813,66.801241 84.8977404,66.5311691 86.0644408,65.0367437 L86.4411158,64.5898247 L87.2636754,65.4479715 C88.6453209,66.8299339 90.8613983,66.8299339 92.2282333,65.4630989 C92.8206626,64.8706696 93.1563144,64.1124474 93.2351887,63.332152 C94.3383727,63.546697 95.5280443,63.2268635 96.3843777,62.3705301 C97.0297002,61.7252076 97.3703472,60.9172741 97.4063187,60.1002763 C98.3474293,60.1368527 99.3042136,59.7961601 100.0249,59.0754737 C100.826417,58.2739572 101.157921,57.1804126 101.019414,56.1373324 C101.848287,56.0900434 102.666485,55.7500541 103.301424,55.1151151 C104.668259,53.7482801 104.668259,51.5322027 103.301424,50.1653676 C103.280643,50.1445867 103.259175,50.1249115 103.237093,50.1063422 C103.181098,50.0510208 103.125286,49.9958797 103.069659,49.9409188 C106.003957,46.7852348 108.010815,44.7382894 109.06407,43.822901 C109.466648,43.4730185 110.109169,43.0058455 110.934883,42.4565545 C111.190239,42.2866841 111.460992,42.1103599 111.74522,41.9285886 C112.457934,41.4727886 113.223355,41.0028407 113.992761,40.5436827 Z M101.895587,51.5880234 C102.472983,52.1744573 102.470191,53.1179208 101.88721,53.7009015 C101.301424,54.286688 100.351676,54.286688 99.7658896,53.7009015 L93.2569036,47.5981719 C92.8539864,47.2204468 92.2211509,47.2408691 91.8434258,47.6437862 C91.4657008,48.0467034 91.486123,48.6795389 91.8890402,49.057264 L98.361123,55.1246846 C98.4073394,55.2766502 98.4905272,55.4197806 98.6106864,55.5399398 C99.1964729,56.1257262 99.1964729,57.0754737 98.6106864,57.6612601 C98.0465552,58.2253914 97.1448751,58.246246 96.555787,57.7238241 C96.5012623,57.6614098 96.4441259,57.6002677 96.3843777,57.5405194 C96.3349634,57.4911052 96.2816644,57.4479435 96.2254636,57.4110343 L91.5086267,52.9386462 C91.1078359,52.5586656 90.4748957,52.5755356 90.0949152,52.9763264 C89.7149347,53.3771172 89.7318047,54.0100574 90.1325955,54.3900379 L95.0942437,59.0940628 C95.0954362,59.0952557 95.0966293,59.0964476 95.0978231,59.0976384 C95.5523075,59.6699127 95.5097544,60.4167262 94.9701641,60.9563166 C94.3843777,61.542103 93.4346302,61.542103 92.8488438,60.9563166 L91.6983738,59.833646 C91.303085,59.447945 90.6699678,59.4557174 90.2842668,59.8510061 C89.8985658,60.2462948 89.9063382,60.8794121 90.3016269,61.2651131 L90.5862406,61.5428236 C90.6348976,61.6709511 90.710824,61.7910899 90.8140198,61.8942857 C91.3998062,62.4800722 91.3998062,63.4630989 90.8140198,64.0488853 C90.2282333,64.6346717 89.2784859,64.6346717 88.6926994,64.0488853 L87.6872989,62.9996978 L87.9193348,62.680313 C89.1094063,61.1570909 88.8393344,58.9575318 87.3161123,57.7674602 C86.232696,56.9210026 84.8071211,56.8132309 83.6451533,57.3707463 C83.4315651,56.7576889 83.0451064,56.1968651 82.4955006,55.767466 C81.6964086,55.1431469 80.7337406,54.9297044 79.8269215,55.0896434 C79.7016483,54.2005406 79.2472705,53.3546028 78.4955577,52.7673004 C77.4855123,51.9781664 76.1780823,51.8310558 75.0591793,52.2730428 C74.8511945,51.7155957 74.48414,51.2041721 73.9614,50.7957629 C72.4381779,49.6056914 70.2386188,49.8757633 69.104165,51.3337647 L68.9086314,51.544091 C65.7089258,47.2852722 63.690038,44.6382966 62.8220067,43.565585 C63.1247495,41.1327821 63.9917142,38.7156487 65.4304419,36.3089922 C66.8280564,33.9711085 68.8381077,31.7263889 71.4660976,29.5779745 L71.6298407,29.5792478 C76.2424021,29.6151149 79.3015652,29.7743111 80.7490812,30.045879 C81.8271775,30.2481402 82.8151869,30.680417 83.7216267,31.349402 C82.1664167,32.3657765 80.1503819,33.6855185 77.6730481,35.3089357 C77.4071151,35.4832038 77.1639726,35.6565702 76.8741284,35.8946832 C76.4327036,36.2573229 76.034603,36.6547782 75.7037367,37.0920185 C74.7167276,38.3963522 74.4771238,39.8668531 75.3609282,41.2949913 L75.4307125,41.3938439 C76.1968937,42.3505872 77.2879489,42.6292448 78.549678,42.4219101 C79.0486495,42.3399162 79.5385195,42.1931958 80.136063,41.9695358 C80.2969603,41.9093121 80.7727696,41.7238641 80.8258823,41.7037102 C81.4114654,41.4815074 81.8526091,41.1768947 83.5303749,39.9313969 C83.5878311,39.888753 83.5878311,39.888753 83.6451846,39.8462352 C84.8778575,38.9327653 85.5710556,38.4849217 85.8496448,38.4233666 C85.9766137,38.3953124 85.892555,38.4164174 86.317479,38.3081748 C87.6402805,37.971212 88.3759929,38.1445861 89.9113642,39.6962943 C91.5674564,41.3700079 95.5600924,45.3332862 101.893379,51.5902583 L101.895587,51.5880234 Z M113.999781,16.5800666 L98.0742933,27.4560514 L91.6201122,27.8613098 C90.064332,27.7804155 88.5733379,28.1989818 87.1734801,29.1014524 C86.8120159,29.3344838 86.2492389,29.7000445 85.4850121,30.1982235 C84.1919,29.0925537 82.7315848,28.3829227 81.1178663,28.0801736 C79.5490107,27.7858413 76.5102954,27.6231548 71.9471343,27.5818458 L56.0002194,16.8263642 L56.0002194,15.9287048 C63.3012039,15.0815736 68.5934977,14.2091301 71.8771006,13.3113744 C75.1607036,12.4136186 79.5350034,10.6431605 85,8 C90.6144594,10.6356364 94.9649764,12.3439157 98.0515513,13.1248379 C101.138126,13.9057601 106.454203,14.8075072 113.999781,15.8300791 L113.999781,16.5800666 Z M73.1276147,53.9921292 L72.129725,55.3570374 C72.0815937,55.4228712 72.0426886,55.4926258 72.01277,55.5647574 L71.6232177,56.0511553 C71.6054199,56.0705762 71.5882459,56.0908465 71.5717507,56.1119594 C71.5535492,56.1352562 71.5356893,56.1587112 71.5181702,56.1823184 L71.5118045,56.1902667 C71.0017738,56.8430762 70.0591056,56.9588213 69.4062961,56.4487907 C68.7534867,55.93876 68.6377416,54.9960918 69.1477722,54.3432823 C69.2175257,54.2540019 69.2697223,54.1565891 69.3048724,54.0552024 L70.6245687,52.6303083 C71.1345994,51.9774989 72.0772676,51.8617538 72.7300771,52.3717844 C73.2569607,52.783431 73.3996371,53.4060518 73.1276147,53.9921292 Z M74.8356381,55.0439614 L75.1587264,54.6018458 C75.6687571,53.9490363 76.6114253,53.8332912 77.2642347,54.3433219 C77.9264475,54.8606992 78.0600691,55.8621934 77.5573587,56.5056334 C77.5071382,56.5699127 77.4660185,56.6384075 77.433809,56.7095659 L76.2253349,58.2586344 C76.1803756,58.316265 76.1427259,58.3772752 76.1122481,58.4405483 L75.6232177,59.0511553 C75.6054199,59.0705762 75.5882459,59.0908465 75.5717507,59.1119594 C75.5535492,59.1352562 75.5356893,59.1587112 75.5181702,59.1823184 L75.5118045,59.1902667 C75.0017738,59.8430762 74.0591056,59.9588213 73.4062961,59.4487907 C72.7709811,58.9524282 72.6443309,58.0463058 73.1081142,57.3963764 L74.4509821,55.7197754 C74.5343354,55.6157069 74.5935111,55.5000822 74.6292593,55.3796886 C74.7048701,55.2699314 74.7736536,55.1578626 74.8356381,55.0439614 Z M77.1081142,60.3963764 L78.4509821,58.7197754 C78.5136195,58.6415711 78.5626037,58.556841 78.598253,58.4684653 L79.2465877,57.6374048 C79.769632,56.9679386 80.6279194,56.8463881 81.2641777,57.3434876 C81.9169872,57.8535182 82.0327323,58.7961864 81.5227016,59.4489959 C81.465532,59.5221697 81.420156,59.6008062 81.3862926,59.6826162 L80.7134305,60.5506467 C80.662244,60.5940771 80.6146891,60.6433402 80.5717367,60.6983167 C80.3988674,60.9195793 80.2568077,61.1551128 80.144923,61.3997502 L79.5118045,62.1902667 C79.0017738,62.8430762 78.0591056,62.9588213 77.4062961,62.4487907 C76.7709811,61.9524282 76.6443309,61.0463058 77.1081142,60.3963764 Z M81.8951469,62.4137482 L82.4509821,61.7197754 C82.5469396,61.5999702 82.6108547,61.4648497 82.6438718,61.3247691 L83.979281,59.6020056 C84.4893116,58.9491962 85.4319798,58.8334511 86.0847893,59.3434817 C86.7375988,59.8535124 86.8533439,60.7961806 86.3225868,61.4764814 L85.6023493,62.466812 C85.5855681,62.4898862 85.5699174,62.5134374 85.5553868,62.5373997 L84.5117905,63.7766241 C84.0017598,64.4294336 83.0590916,64.5451787 82.4062821,64.035148 C81.9025887,63.6416195 81.7186272,62.9905277 81.8951469,62.4137482 Z M69.6782885,28.4639871 C67.1307553,30.6231912 65.1410824,32.8952546 63.713801,35.282764 C62.4026237,37.4760585 61.5170391,39.698694 61.0613811,41.9476865 C59.9412422,41.1088489 58.264834,39.9895213 56.0002194,38.5603623 L56.0002194,19.2387406 L69.6782885,28.4639871 Z",
    id: "Combined-Shape",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "Rectangle-22",
    fill: "#FFFFFF",
    x: "137",
    y: "37",
    width: "32",
    height: "2",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "Rectangle-22-Copy-2",
    fill: "#FFFFFF",
    transform: "translate(139.410254, 8.799038) rotate(-30.000000) translate(-139.410254, -8.799038) ",
    x: "129.410254",
    y: "7.79903811",
    width: "20",
    height: "2",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "Rectangle-22-Copy-3",
    fill: "#FFFFFF",
    transform: "translate(139.410254, 67.799038) scale(-1, 1) rotate(-30.000000) translate(-139.410254, -67.799038) ",
    x: "129.410254",
    y: "66.7990381",
    width: "20",
    height: "2",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "Rectangle-22-Copy",
    fill: "#FFFFFF",
    transform: "translate(16.000000, 38.000000) scale(-1, 1) translate(-16.000000, -38.000000) ",
    x: "0",
    y: "37",
    width: "32",
    height: "2",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "Rectangle-22-Copy-4",
    fill: "#FFFFFF",
    transform: "translate(30.000000, 8.799038) scale(-1, 1) rotate(-30.000000) translate(-30.000000, -8.799038) ",
    x: "20",
    y: "7.79903811",
    width: "20",
    height: "2",
    rx: "1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "Rectangle-22-Copy-5",
    fill: "#FFFFFF",
    transform: "translate(30.000000, 67.799038) rotate(-30.000000) translate(-30.000000, -67.799038) ",
    x: "20",
    y: "66.7990381",
    width: "20",
    height: "2",
    rx: "1"
  }))));
};
/* eslint-enable max-lines */

/***/ }),

/***/ "./src/Input/index.jsx":
/*!*****************************!*\
  !*** ./src/Input/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MaskedInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MaskedInput */ "./src/MaskedInput/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/Input/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @develop
 */

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isFocused: false
    };
    _this.root = null;

    _this.onRef = function (root) {
      _this.root = root;
    };

    _this.onFocus = function (event) {
      var onFocus = _this.props.onFocus;

      _this.setState({
        isFocused: true
      });

      if (onFocus) {
        onFocus(event);
      }
    };

    _this.onBlur = function (event) {
      var onBlur = _this.props.onBlur;

      _this.setState({
        isFocused: false
      });

      if (onBlur) {
        onBlur(event);
      }
    };

    _this.onChange = function (event) {
      _this.changeValue(event.target.value);
    };

    _this.onClick = function (event) {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick(event);
      }
    };

    _this.onKeyDown = function (event) {
      var onKeyDown = _this.props.onKeyDown;

      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    _this.onKeyUp = function (event) {
      var onKeyUp = _this.props.onKeyUp;

      if (onKeyUp) {
        onKeyUp(event);
      }
    };

    _this.onPaste = function (event) {
      var onPaste = _this.props.onPaste;

      if (onPaste) {
        onPaste(event);
      }
    };

    _this.onTouchStart = function (event) {
      var onTouchStart = _this.props.onTouchStart;

      if (onTouchStart) {
        onTouchStart(event);
      }
    };

    _this.onTouchEnd = function (event) {
      var onTouchEnd = _this.props.onTouchEnd;

      if (onTouchEnd) {
        onTouchEnd(event);
      }
    };

    _this.onTouchMove = function (event) {
      var onTouchMove = _this.props.onTouchMove;

      if (onTouchMove) {
        onTouchMove(event);
      }
    };

    _this.onTouchCancel = function (event) {
      var onTouchCancel = _this.props.onTouchCancel;

      if (onTouchCancel) {
        onTouchCancel(event);
      }
    };

    return _this;
  }

  _createClass(Input, [{
    key: "getMaskedInputInstance",
    value: function getMaskedInputInstance() {
      var mask = this.props.mask;

      if (typeof mask !== 'undefined') {
        return this.root;
      }

      return null;
    }
  }, {
    key: "changeValue",
    value: function changeValue(value) {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    }
  }, {
    key: "isMaskFilled",
    value: function isMaskFilled() {
      var mask = this.props.mask;

      if (typeof mask !== 'undefined') {
        return this.root.isFilled();
      }

      return false;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.root.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.root.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          value = _this$props.value,
          formNoValidate = _this$props.formNoValidate,
          autoComplete = _this$props.autoComplete,
          maxLength = _this$props.maxLength,
          id = _this$props.id,
          name = _this$props.name,
          tabIndex = _this$props.tabIndex,
          pattern = _this$props.pattern,
          title = _this$props.title,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled,
          status = _this$props.status,
          icon = _this$props.icon,
          iconPosition = _this$props.iconPosition,
          boundless = _this$props.boundless,
          centered = _this$props.centered,
          leftAddons = _this$props.leftAddons,
          rightAddons = _this$props.rightAddons,
          largeFont = _this$props.largeFont,
          mask = _this$props.mask,
          maskFormatCharacters = _this$props.maskFormatCharacters,
          onProcessMaskInputEvent = _this$props.onProcessMaskInputEvent,
          className = _this$props.className,
          style = _this$props.style,
          dataTestId = _this$props['data-testid'];
      var isFocused = this.state.isFocused;
      var isMaskedInput = typeof mask !== 'undefined';
      var inputProps = {
        ref: this.onRef,
        type: type,
        value: value,
        formNoValidate: formNoValidate,
        autoComplete: autoComplete ? 'on' : 'off',
        maxLength: maxLength,
        id: id,
        name: name,
        tabIndex: tabIndex,
        pattern: pattern,
        title: title,
        placeholder: placeholder,
        disabled: disabled,
        'data-testid': dataTestId,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        onPaste: this.onPaste,
        onTouchStart: this.onTouchStart,
        onTouchEnd: this.onTouchEnd,
        onTouchMove: this.onTouchMove,
        onTouchCancel: this.onTouchCancel
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], {
        focused: (!value || value.length === 0) && isFocused,
        filling: value && value.length > 0 && isFocused,
        status: status,
        disabled: disabled,
        boundless: boundless,
        className: className,
        style: style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Inner"], null, leftAddons && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Addon"], {
        leftGutter: true
      }, leftAddons), icon !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["IconWrapper"], {
        iconBefore: icon && iconPosition === 'before',
        iconAfter: icon && iconPosition === 'after'
      }, icon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["FieldWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Field"], _extends({
        as: isMaskedInput ? _MaskedInput__WEBPACK_IMPORTED_MODULE_2__["default"] : 'input',
        large: largeFont,
        centered: centered,
        iconBefore: icon && iconPosition === 'before',
        iconAfter: icon && iconPosition === 'after'
      }, inputProps, {
        /* свойства только для MaskedInput */
        mask: mask,
        formatCharacters: maskFormatCharacters,
        onProcessInputEvent: onProcessMaskInputEvent
      }))), rightAddons && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Addon"], {
        rightGutter: true
      }, rightAddons)));
    }
  }]);

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Input.propTypes = {
  /**
   * Сообщает браузеру, к какому типу относится элемент формы
   * Внимание, тип 'number' не умеет работать с масками,
   * в том числе с 'selectionStart' и 'selectionEnd'.
   * Подробнее: http://w3c.github.io/html/sec-forms.html#does-not-apply
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['hidden', 'password', 'text', 'email', 'tel', 'url', 'number', 'card', 'money']),

  /**
   * Значение элемента
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Управление автозаполнением компонента
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Максимальное число символов
   */
  maxLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Уникальный идентификатор блока
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Уникальное имя блока
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Последовательность перехода между контролами при нажатии на Tab
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Стандартное ствойство HTMLInputElement 'pattern'.
   * Может быть использовано для показа корректной клавиатуры на мобильных устройствах.
   */
  pattern: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Управление встроенной проверкой данных введённых пользователем в поле на корректность
   */
  formNoValidate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Тултип, который появляется при наведении
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Выводит подсказывающий текст
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Неактивный элемент
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Вид элемента. Позволяет показать корректность введенных данных или наоборот
   */
  status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['default', 'success', 'error']),

  /**
   * Иконка
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Расположение иконки
   */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['before', 'after']),

  /**
   * Выключает рамку
   */
  boundless: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Выравнивание значения и плейсхолдера по центру
   */
  centered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Добавление дополнительных элементов к инпуту слева
   */
  leftAddons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Добавление дополнительных элементов к инпуту справа
   */
  rightAddons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Увеличенный шрифт
   */
  largeFont: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Определяет маску для ввода значений. [Шаблон маски](https://github.com/insin/inputmask-core#pattern
   */
  mask: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Кастомные форматтеры символов маски, использует
   * формат formatCharacters из `inputmask-core`
   */
  maskFormatCharacters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    validate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),

  /**
   * Обработчик на фокус элемента
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик на потерю фокуса элеметом
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик изменения значения
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик клика по полю
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик события нажатия на клавишу клавиатуры в момент,
   * когда фокус находится на компоненте
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик события отжатия на клавишу клавиатуры в момент,
   * когда фокус находится на компоненте
   */
  onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик события вставки текста в поле
   */
  onPaste: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик события касания по полю
   */
  onTouchStart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик события прекращения касания по полю
   */
  onTouchEnd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик события перемещения при касании по полю
   */
  onTouchMove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик события прерывания касания по полю
   */
  onTouchCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик, вызываемый перед началом ввода в маскированное поле
   */
  onProcessMaskInputEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(),
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array]),
  'data-testid': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Input.defaultProps = {
  formNoValidate: false,
  value: undefined,
  autoComplete: false,
  maxLength: undefined,
  id: undefined,
  name: undefined,
  tabIndex: undefined,
  pattern: undefined,
  title: undefined,
  placeholder: undefined,
  disabled: undefined,
  status: undefined,
  type: 'text',
  icon: null,
  iconPosition: 'before',
  boundless: false,
  centered: false,
  leftAddons: null,
  rightAddons: null,
  largeFont: false,
  mask: undefined,
  maskFormatCharacters: undefined,
  onFocus: undefined,
  onBlur: undefined,
  onChange: undefined,
  onClick: undefined,
  onKeyDown: undefined,
  onKeyUp: undefined,
  onPaste: undefined,
  onTouchStart: undefined,
  onTouchEnd: undefined,
  onTouchMove: undefined,
  onTouchCancel: undefined,
  onProcessMaskInputEvent: undefined,
  style: undefined,
  className: undefined,
  'data-testid': undefined
};


/***/ }),

/***/ "./src/Input/styled.js":
/*!*****************************!*\
  !*** ./src/Input/styled.js ***!
  \*****************************/
/*! exports provided: Field, IconWrapper, Wrapper, Inner, FieldWrapper, Addon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inner", function() { return Inner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldWrapper", function() { return FieldWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addon", function() { return Addon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    padding-left: ", "px;\n    padding-right: ", "px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    flex-grow: 1;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    box-sizing: border-box;\n    display: inline-block;\n    border-radius: 2px;\n    transition:\n        box-shadow .25s ease-out,\n        border-color .2s linear,\n        background-color .2s linear,\n        color .2s linear;\n    border-style: solid;\n    border-width: ", "px;\n    border-color: ", ";\n    background-color: ", ";\n    box-shadow: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    left: ", ";\n    right: ", ";\n    margin-top: -8px;\n    width: 16px;\n    height: 16px;\n    color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    width: 100%;\n    border: 0;\n    border-radius: 2px;\n    color: ", ";\n    background-color: transparent;\n    outline: none;\n    text-align: ", ";\n    \n    ", "\n    \n    &::-webkit-input-placeholder { color: ", " }\n    &::-moz-placeholder { color: ", " }\n    &:-ms-input-placeholder { color: ", " }\n    &:-moz-placeholder { color: ", " }\n    &[disabled] {\n        color: ", ";\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        font: 400 14px \"Open Sans\", sans-serif;\n        padding: 11px ", "px 11px ", "px;\n        line-height: 16px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            font: 400 18px \"Open Sans\", sans-serif;\n            padding: 7px 12px;\n            line-height: 20px;\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




function fieldSize(props) {
  if (props.large) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject());
  }

  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), props.iconAfter ? 40 : 12, props.iconBefore ? 40 : 12);
}

var wrapperBorderColor = function wrapperBorderColor(props) {
  if (props.disabled) {
    return _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale;
  }

  switch (props.status) {
    case 'error':
      return _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Red;

    case 'success':
      return _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green;

    default:
      return props.filling ? _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue : _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale;
  }
};

var wrapperBackgroundColor = function wrapperBackgroundColor(props) {
  if (props.disabled) {
    return _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Silver;
  }

  switch (props.status) {
    case 'error':
      return _config__WEBPACK_IMPORTED_MODULE_1__["Color"].LightRed;

    case 'success':
      return _config__WEBPACK_IMPORTED_MODULE_1__["Color"].LightGreen;

    default:
      return _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White;
  }
};

var Field = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input(_templateObject3(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Coal, function (props) {
  return props.centered ? 'center' : 'left';
}, fieldSize, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray);
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject4(), function (props) {
  return props.iconBefore ? '12px' : 'auto';
}, function (props) {
  return props.iconAfter ? '12px' : 'auto';
}, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject5(), function (props) {
  return props.boundless ? 0 : 1;
}, wrapperBorderColor, wrapperBackgroundColor, function (props) {
  return props.focused && !props.boundless ? '0 2px 4px #e4edf7' : 'none';
});
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject6());
var FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject7());
var Addon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject8(), function (props) {
  return props.leftGutter ? 8 : 0;
}, function (props) {
  return props.rightGutter ? 8 : 0;
});

/***/ }),

/***/ "./src/Link/index.jsx":
/*!****************************!*\
  !*** ./src/Link/index.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Link/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * @develop
 */

var Link =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Link, _React$PureComponent);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onClick = function (e) {
      var _this$props = _this.props,
          href = _this$props.href,
          onClick = _this$props.onClick;
      if (href.length === 0) e.preventDefault();
      if (onClick) onClick(e);
    };

    return _this;
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          href = _this$props2.href,
          icon = _this$props2.icon,
          iconPosition = _this$props2.iconPosition,
          pseudo = _this$props2.pseudo,
          other = _objectWithoutProperties(_this$props2, ["children", "href", "icon", "iconPosition", "pseudo"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledLink"], _extends({
        href: href,
        pseudo: pseudo
      }, other, {
        onClick: this.onClick
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
        pseudo: pseudo
      }, icon && iconPosition === 'before' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Addon"], {
        before: true
      }, icon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, children), icon && iconPosition === 'after' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Addon"], {
        after: true
      }, icon)));
    }
  }]);

  return Link;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Link.propTypes = {
  /**
   * Текст ссылки
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /**
   * URL ссылки
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Иконка
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Позиция иконки
   */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['before', 'after']),

  /**
   * Псевдо-ссылка
   */
  pseudo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Дополнительный CSS класс
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Обработчик клика
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Link.defaultProps = {
  href: '',
  iconPosition: 'before',
  pseudo: false,
  className: '',
  icon: null,
  onClick: undefined
};


/***/ }),

/***/ "./src/Link/styled.js":
/*!****************************!*\
  !*** ./src/Link/styled.js ***!
  \****************************/
/*! exports provided: Wrapper, StyledLink, Addon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledLink", function() { return StyledLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Addon", function() { return Addon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    vertical-align: middle;\n    margin-right: ", "px;\n    margin-left: ", "px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline;\n    font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n    font-size: inherit;\n    font-weight: inherit;\n    color: ", ";\n    cursor: pointer;\n    text-decoration: none;\n    &:hover {\n        color: ", ";\n        text-decoration: ", ";\n    }\n    &:hover ", " {\n        border-bottom-width: 0;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject(), function (props) {
  return props.pseudo ? '1px dashed currentColor' : 'inherit';
});
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a(_templateObject2(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepBlue, function (props) {
  return props.pseudo ? 'none' : 'underline';
}, Wrapper);
var Addon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.attrs(function (props) {
  var rightGutter = 0;
  var leftGutter = 0;

  if (props.pseudo) {
    rightGutter = 12;
    leftGutter = 12;
  }

  if (props.pseudo) {
    rightGutter = 4;
    leftGutter = 4;
  }

  return {
    rightGutter: rightGutter,
    leftGutter: leftGutter
  };
})(_templateObject3(), function (props) {
  return props.rightGutter;
}, function (props) {
  return props.leftGutter;
});

/***/ }),

/***/ "./src/LinkButton/index.jsx":
/*!**********************************!*\
  !*** ./src/LinkButton/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/LinkButton/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Иногда ссылку надо выделить. По сути, это кнопка для вызова контекстных действий.
 * @develop
 */

var LinkButton =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(LinkButton, _React$PureComponent);

  function LinkButton() {
    _classCallCheck(this, LinkButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(LinkButton).apply(this, arguments));
  }

  _createClass(LinkButton, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["default"], this.props);
    }
  }]);

  return LinkButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

LinkButton.propTypes = {
  /**
   * Текст кнопки
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * Дополнительный CSS класс
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
LinkButton.defaultProps = {
  className: ''
};


/***/ }),

/***/ "./src/LinkButton/styled.js":
/*!**********************************!*\
  !*** ./src/LinkButton/styled.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    display: inline-block;\n    padding: 12px 24px;\n    font: 400 14px \"Open Sans\", sans-serif;\n    line-height: 16px;\n    color: ", ";\n    background-color: ", ";\n    border-radius: 2px;\n    border: 0;\n    text-decoration: none;\n    cursor: pointer;\n    transition: background-color .2s linear;\n    &:hover {\n        background-color: #e4edf7;\n        text-decoration: underline;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Zircon));

/***/ }),

/***/ "./src/Logo/Icon/index.jsx":
/*!*********************************!*\
  !*** ./src/Logo/Icon/index.jsx ***!
  \*********************************/
/*! exports provided: A24, SB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A24", function() { return A24; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SB", function() { return SB; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../SvgIcon */ "./src/SvgIcon/index.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var A24 = function A24(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    viewBox: "-180.5 1060.8 595.1 207.9"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "logo_a",
    gradientUnits: "userSpaceOnUse",
    x1: "-180.7028",
    y1: "396.3709",
    x2: "-151.9858",
    y2: "396.3709",
    gradientTransform: "matrix(5.2248 0 0 5.2248 764.6688 -929.8776)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0",
    style: {
      stopColor: '#C94071'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.2016",
    style: {
      stopColor: '#CA4474'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.4014",
    style: {
      stopColor: '#CB507E'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.6005",
    style: {
      stopColor: '#CE648F'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.7993",
    style: {
      stopColor: '#D280A7'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.9962",
    style: {
      stopColor: '#D7A3C5'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    style: {
      stopColor: '#D7A4C6'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#logo_a)",
    d: "M-43.3,1077.6c-12.2-8.4-29.6-16.8-51-16.8c-19.8,0-38.7,6.7-53.3,18.3c-10.5,8.4-18.9,18.9-24.5,31.4c-3.6,7.8-6.7,16.7-7.3,25.6c0,0.5-0.5,7.3-0.5,10c0,1.1-0.1,3.5,0,4.7c0.2,3.6,1.1,7.8,1.6,12c2.6,13.6,9.4,27.2,20.9,40.3c7.8,8.4,16.7,14.1,26.7,18.3c-12-15.6-17.2-31.9-18.3-47c0-0.5,0.5-14.1,0.5-14.7c1.1-9.4,3.6-17.8,7.3-25.6c5.8-12.5,12-23.3,26.7-32.9c16.5-10.7,31.9-16.7,50.7-16.7c13.1,0,24.1,2.7,34.6,6.9C-29.4,1091.1-38.9,1080.6-43.3,1077.6z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "logo_b",
    gradientUnits: "userSpaceOnUse",
    x1: "-141.5982",
    y1: "416.6324",
    x2: "-182.172",
    y2: "408.7457",
    gradientTransform: "matrix(5.2248 0 0 5.2248 764.6688 -929.8776)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0",
    style: {
      stopColor: '#FFF263'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.2513",
    style: {
      stopColor: '#FFF05C'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.6174",
    style: {
      stopColor: '#FFE949'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.9879",
    style: {
      stopColor: '#FFE02E'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#logo_b)",
    d: "M9.2,1254.1c-5.8-8.4-7.1-12-12.5-23.6c-67.4,0-74.2,0-74.2,0s-27.2,1.6-52.8-9.4c-10-4.2-19.4-10-26.7-18.3c-11.5-13.6-17.8-27.2-20.9-40.3c-1.1,3.6-1.8,8.6-2.1,11.5c-0.3,3.6-0.6,10.9-0.5,14.7c0.3,16.7,7.3,35,22.5,52.3c27.2,30.3,79.5,27.7,79.5,27.7s8.4,0,99.8,0C16,1263.5,12.3,1258.8,9.2,1254.1z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "logo_c",
    gradientUnits: "userSpaceOnUse",
    x1: "-136.2263",
    y1: "417.9882",
    x2: "-161.907",
    y2: "383.9086",
    gradientTransform: "matrix(5.2248 0 0 5.2248 764.6688 -929.8776)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0",
    style: {
      stopColor: '#6AADD8'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.2197",
    style: {
      stopColor: '#5FA5D4',
      stopOpacity: 0.7803
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.6067",
    style: {
      stopColor: '#4191C8',
      stopOpacity: 0.3933
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    style: {
      stopColor: '#1D78B9;stop-opacity:0'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#logo_c)",
    d: "M27.5,1213.9c-8.8-22.6-3.6-40.8-9.4-63.2c-2.1-8.9-5.2-18.6-12-28.7c-3.3-4.9-9.5-12-14.7-16.2c-6.6-5.4-13.6-10-21.4-13.6c-10.5-4.7-22-7.3-34-7.3c-19.4,0-36.6,6.3-50.7,16.7c6.3-1.6,12.5-2.1,18.9-2.1c21.4,0,41,7.5,55.7,20.6c2.1,2.1,8.2,7.7,10.6,10.6c9.5,12,14,26.2,16.2,34.6c5.2,22.5,1,39.8,9.1,62.4c3.5,9.7,7.8,17.6,13.6,25.9c12,0,26.1,0,43.4,0C40,1239.4,31.8,1224.8,27.5,1213.9z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "logo_d",
    gradientUnits: "userSpaceOnUse",
    x1: "-144.5989",
    y1: "414.8496",
    x2: "-171.3472",
    y2: "414.8496",
    gradientTransform: "matrix(5.2248 0 0 5.2248 764.6688 -929.8776)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0",
    style: {
      stopColor: '#8EBE56'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.2325",
    style: {
      stopColor: '#A2C64F'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.4788",
    style: {
      stopColor: '#B3CD49'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.8147",
    style: {
      stopColor: '#AECB4A',
      stopOpacity: 0.3556
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    style: {
      stopColor: '#A8C94C',
      stopOpacity: 0
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#logo_d)",
    d: "M-77.6,1230.6c0,0-27.2,1.6-52.8-9.4c1.6,1.6,2.6,3.6,4.2,5.2c27.2,30.3,58.4,27.3,79.5,27.7c14.1,0.2,5.8-0.5,55.9-0.5c-5.9-9-8.7-14.6-12.5-23H-77.6L-77.6,1230.6z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "logo_e",
    gradientUnits: "userSpaceOnUse",
    x1: "-180.4821",
    y1: "400.1789",
    x2: "-168.2843",
    y2: "400.1789",
    gradientTransform: "matrix(5.2248 0 0 5.2248 764.6688 -929.8776)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0",
    style: {
      stopColor: '#D58037'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    style: {
      stopColor: '#E6AA49'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#logo_e)",
    d: "M-130.9,1221.1c-12-15.6-17.8-31.8-18.3-47c0-0.5,0-3.6,0-4.7c0-3.1,0.3-7.4,0.5-10c0.6-9.4,3.6-17.8,7.3-25.6c5.8-12.5,16-24,26.7-32.9c-12.5,2.6-24.5,8.4-34,16.2c-10.5,8.4-18.9,18.9-24.5,31.4c-2.1,4.2-3.6,8.9-4.7,14.1c2.6,13.6,9.4,27.2,20.9,40.3C-150.2,1211.3-140.8,1217-130.9,1221.1z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "logo_f",
    gradientUnits: "userSpaceOnUse",
    x1: "-141.2547",
    y1: "412.7613",
    x2: "-162.6143",
    y2: "384.416",
    gradientTransform: "matrix(5.2248 0 0 5.2248 764.6688 -929.8776)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0",
    style: {
      stopColor: '#7A6BAB'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.3822",
    style: {
      stopColor: '#7B65A7'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.8897",
    style: {
      stopColor: '#7C549D'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "0.897",
    style: {
      stopColor: '#7C549D'
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: "1",
    style: {
      stopColor: '#764D99'
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    opacity: "0.85",
    fill: "url(#logo_f)",
    enableBackground: "new",
    d: "M-114.6,1101c6.3-1.6,12.5-2.1,18.9-2.1c21.4,0,40.7,7.9,55.4,20.9c6.2,5.6,11.6,11.7,14.7,16.2c4.4,6.4,10,20.3,12,28.7c5.2,22.5,1.2,41.7,10.5,65.9c7.8,0,15.6-1.1,25.1-1.1c-12.7-14.8-22-28.7-25.2-40c-4.4-15.4-3.7-41.1-9.4-63.6c-2.1-8.9-5.2-18.6-12-28.7c-1.5-2.1-4.2-6.1-5.2-6.7c-10.5-4.7-22-7.3-34-7.3C-82.8,1084.3-100.6,1090.6-114.6,1101z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M-40.9,1174.7h-6.3v-34.5c0-2.1-1.6-4.2-3.6-4.7c-0.5,0-1.1-0.5-1.6-0.5c-1.1,0-2.6,0.5-4.2,2.6l-24.5,39.7c-1.1,1.6-1.1,3.1-0.5,5.2c1.1,1.6,2.6,2.6,4.2,2.6h19.8v10.9c0,2.6,2.1,5.2,4.7,5.2c2.6,0,5.2-2.1,5.2-5.2v-10.8h6.3c2.6,0,5.2-2.1,5.2-4.7C-35.8,1176.8-38.4,1174.7-40.9,1174.7z M-57.2,1157.4v17.2h-10.9L-57.2,1157.4z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M-86.5,1190.8h-19.4c19.4-21.4,21.4-27.7,21.4-37.6c-0.5-9.4-5.2-16.2-13.6-18.3c-1.6-0.5-3.6-1.1-5.8-1.1h-0.5c-1.1,0-2.1,0-3.1,0.5c-6.7,1.1-12.5,5.2-15.2,11.5c-1.1,2.6,0,5.2,2.6,6.7c1.1,0.5,2.1,0.5,2.6,0.5c1.6-0.5,3.1-1.6,3.6-2.6c1.6-3.1,4.2-5.2,7.8-5.8c1.1,0,1.1,0,2.1,0s2.1,0,2.6,0.5c4.2,1.1,6.3,4.2,6.7,8.9c0,7.8-2.6,13.6-26.7,39.2c-1.6,1.6-1.6,3.6-1.1,5.2c1.1,2.1,2.6,3.1,4.7,3.1H-87c2.6,0,4.7-2.1,4.7-4.7C-82.3,1194.2-83.8,1190.8-86.5,1190.8z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M74.4,1193.5c-0.5,1.6-1.6,2.6-3.6,2.6c-2.1,0-3.6-1.1-3.6-3.1c0-1.1,1.1-3.1,1.1-3.6l18.6-50.3c1.1-2.6,2.6-4.7,5.2-4.7c3.1,0,4.2,2.1,5.2,4.7l18.9,50.1c0.5,1.1,1.1,2.6,1.1,3.6c0,2.1-1.6,3.1-3.6,3.1c-2.1,0-3.1-1.1-3.6-2.6l-3.6-10.9H78.1L74.4,1193.5z M92.7,1143.3L92.7,1143.3l-12,32.9h23.6L92.7,1143.3z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M144.5,1195.5h-17.2c-2.1,0-3.6-1.6-3.6-4.2v-37.1c0-2.6,1.6-4.2,3.6-4.2h16.2c7.8,0,12.5,5.8,12.5,10.9c0,4.7-2.6,8.9-6.3,10l0,0c5.2,0.5,10,5.2,10,10.9C159,1189.3,153.9,1195.5,144.5,1195.5z M142.3,1156.3h-10.9v12h10.9c3.6,0,6.3-2.6,6.3-6.3C148.1,1159,146.5,1156.3,142.3,1156.3z M143.9,1174.7h-13v14.7h12.5c4.7,0,7.8-3.1,7.8-7.3C151.7,1177.8,148.6,1174.7,143.9,1174.7z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M193.5,1166.8c0-6.3-3.6-10.5-10-10.5c-6.3,0-9.4,4.2-9.4,10.5v25.6c0,2.6-1.6,4.2-3.6,4.2c-2,0-3.6-1.6-3.6-4.2v-38.1c0-2.6,1.6-4.2,3.6-4.2c2.1,0,3.6,1.6,3.6,4.2v1.6l0,0c1.6-2.1,4.7-5.2,11.5-5.2c4.2,0,8.9,2.1,12.5,7.8c3.1-4.7,7.3-7.8,14.1-7.8c6.7,0,15.6,4.2,15.6,17.2v25.1c0,2.6-1.6,4.2-3.6,4.2c-2.1,0-3.6-1.6-3.6-4.2v-25.6c0-6.3-3.6-10.5-10-10.5c-6.3,0-9.4,4.2-9.4,10.5v25.6c0,2.6-1.6,4.2-3.6,4.2c-2.1,0-3.6-1.6-3.6-4.2L193.5,1166.8L193.5,1166.8z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M255.7,1149.6c12.5,0,19.8,10.9,19.8,23c0,12-7.3,23-19.8,23c-12.5,0-19.8-10.9-19.8-23C235.9,1161,243.2,1149.6,255.7,1149.6z M255.7,1189.3c9.4,0,12.5-8.9,12.5-16.7s-3.1-16.7-12.5-16.7s-12.5,8.9-12.5,16.7C243.2,1180.4,246.8,1189.3,255.7,1189.3z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M284,1153.8c0-2.6,1.6-4.2,3.6-4.2c2.1,0,3.6,1.6,3.6,4.2v2.1l0,0c2.1-4.2,6.3-6.3,12-6.3c12.5,0,19.4,10.9,19.4,23c0,12-7.3,23-19.4,23c-6.3,0-10-3.1-12-6.3l0,0v19.8c0,2.6-1.6,4.2-3.6,4.2c-2.1,0-3.6-1.6-3.6-4.2V1153.8L284,1153.8z M303.3,1189.3c9.4,0,12.5-8.9,12.5-16.7s-3.1-16.7-12.5-16.7s-12.5,8.9-12.5,16.7S293.9,1189.3,303.3,1189.3z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M364.4,1189.3c1.6,0,3.1,1.6,3.1,3.1c0,1.6-1.6,3.1-3.1,3.1h-29.2c-3.1,0-4.2-1.6-4.2-3.1c0-1.1,0.5-1.6,1.6-3.1l20.9-27.7c2.6-3.1,4.2-7.3,4.2-10.5c0-5.2-4.2-9.4-9.4-9.4c-7.3,0-10.9,6.3-10.9,13.6c0,2.6-1.6,3.1-3.1,3.1c-2.6,0-3.6-1.6-3.6-4.7c0-10,6.7-18.9,19.4-18.9c10,0,16.2,7.3,16.2,15.2c0,3.6-0.5,7.3-4.2,12.5l-20.3,27.2L364.4,1189.3L364.4,1189.3z"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M375.9,1179.9c-2.6,0-3.1-1.1-3.1-2.6c0-1.1,1.1-2.6,2.1-4.2l21.4-35c1.6-2.6,3.1-3.1,5.8-3.1c3.1,0,5.8,1.6,5.8,6.3v32.9h3.6c1.6,0,3.1,1.6,3.1,3.1c0,1.5-1.6,3.1-3.1,3.1h-3.6v12c0,2.6-1.6,4.2-3.6,4.2c-2.1,0-3.6-1.6-3.6-4.2v-12h-24.5v-0.5H375.9z M400,1173.6v-30.8l0,0l-17.8,30.8H400z"
  }));
};
var SB = function SB(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    viewBox: "0 0 102 30"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M 10.47 6.28 L 13.87 6.28 C 15.79 6.28 16.74 5.78 16.74 4.77 C 16.74 4.39 16.55 4.08 16.16 3.84 C 15.76 3.61 15.24 3.49 14.58 3.49 C 13.57 3.49 12.64 3.77 11.8 4.34 C 10.97 4.9 10.52 5.55 10.47 6.28 L 10.47 6.28 L 10.47 6.28 Z M 12.1 9.7 L 13.41 11.33 L 14.16 12.21 C 15.61 13.98 16.34 15.84 16.35 17.81 C 16.34 19.73 15.7 21.4 14.4 22.85 C 12.66 24.82 10.36 25.81 7.53 25.81 C 5.32 25.81 3.52 25.15 2.11 23.81 C 0.7 22.48 0 20.77 0 18.69 C 0 16.15 1.09 14.02 3.28 12.33 C 4.45 11.42 5.52 10.97 6.51 10.97 C 7.01 10.97 7.42 11.11 7.75 11.4 C 8.07 11.69 8.23 12.06 8.23 12.52 C 8.23 13.13 7.86 13.66 7.12 14.1 L 6 14.8 C 5.34 15.19 4.79 15.75 4.37 16.47 C 3.93 17.18 3.71 17.88 3.72 18.57 C 3.71 19.69 4.09 20.6 4.86 21.32 C 5.61 22.04 6.57 22.4 7.75 22.4 C 9.04 22.4 10.16 21.92 11.12 20.96 C 12.07 20.02 12.54 18.9 12.53 17.62 C 12.54 16.79 12.35 16.04 11.97 15.37 C 11.58 14.71 10.74 13.67 9.45 12.26 C 8.56 11.29 7.92 10.44 7.53 9.7 L 3.72 9.7 C 2.41 9.7 1.76 9.26 1.75 8.37 C 1.76 7.74 1.98 7.24 2.45 6.88 C 2.9 6.54 3.54 6.37 4.37 6.38 L 6.8 6.38 C 6.98 4.53 7.84 3.01 9.35 1.82 C 10.88 0.6 12.7 0 14.82 0 C 16.42 0 17.72 0.43 18.73 1.29 C 19.73 2.16 20.23 3.28 20.23 4.66 C 20.23 6.49 19.43 7.89 17.83 8.87 C 16.93 9.42 15.49 9.7 13.53 9.7 L 12.1 9.7 L 12.1 9.7 Z M 24.31 8.7 L 24.74 8.7 C 25.92 8.7 26.51 9.12 26.51 9.96 C 26.51 10.53 26.3 10.98 25.89 11.3 C 25.47 11.62 24.89 11.78 24.14 11.78 L 23.14 11.78 L 21.27 16.45 L 22.83 16.45 C 24.01 16.45 24.6 16.87 24.6 17.71 C 24.6 18.28 24.39 18.73 23.97 19.05 C 23.56 19.37 22.99 19.53 22.25 19.53 L 19.74 19.53 C 19.04 19.53 18.48 19.37 18.06 19.05 C 17.65 18.71 17.44 18.26 17.44 17.69 C 17.44 17.34 17.53 16.96 17.71 16.52 L 17.97 15.91 L 19.6 11.78 L 19.4 11.78 C 18.35 11.78 17.83 11.37 17.82 10.54 C 17.83 9.97 18.04 9.51 18.45 9.18 C 18.87 8.86 19.45 8.7 20.19 8.7 L 20.84 8.7 L 21.58 6.83 L 21.73 6.46 C 22.16 5.41 22.85 4.88 23.78 4.88 C 24.17 4.88 24.5 5.01 24.76 5.27 C 25.05 5.53 25.19 5.85 25.2 6.22 C 25.19 6.57 25.06 7.03 24.81 7.58 L 24.31 8.7 L 24.31 8.7 Z M 35.67 16.41 L 37.3 16.41 C 37.94 16.41 38.39 16.51 38.66 16.71 C 38.93 16.9 39.07 17.22 39.07 17.67 C 39.07 18.25 38.86 18.71 38.45 19.04 C 38.03 19.37 37.45 19.53 36.7 19.53 L 34.2 19.53 C 33.42 19.53 32.9 19.22 32.65 18.6 C 32.12 19.22 31.48 19.53 30.7 19.53 L 28.67 19.53 C 27.85 19.53 27.17 19.27 26.63 18.75 C 26.08 18.22 25.81 17.56 25.81 16.76 C 25.81 16.3 25.93 15.76 26.17 15.16 L 28.07 10.36 C 28.61 9.04 29.34 8.37 30.25 8.37 C 30.66 8.37 31 8.5 31.28 8.77 C 31.56 9.03 31.7 9.35 31.71 9.72 C 31.7 10.02 31.63 10.35 31.47 10.73 L 31.33 11.1 L 29.87 14.79 L 29.7 15.23 C 29.62 15.47 29.57 15.66 29.55 15.77 C 29.54 16.21 29.81 16.43 30.37 16.44 C 31.53 16.43 32.3 15.95 32.67 14.99 L 34.42 10.58 C 34.95 9.24 35.69 8.57 36.65 8.57 C 37.03 8.57 37.36 8.71 37.66 8.96 C 37.92 9.24 38.06 9.56 38.06 9.95 C 38.06 10.23 37.94 10.69 37.7 11.3 L 35.67 16.41 L 35.67 16.41 Z M 43.72 16.74 L 44.25 16.74 C 44.89 16.74 45.31 16.5 45.51 16.01 L 46.55 13.52 C 46.68 13.22 46.74 12.99 46.74 12.83 C 46.74 12.56 46.63 12.33 46.39 12.14 C 46.16 11.95 45.86 11.86 45.51 11.86 C 44.79 11.86 44.12 12.25 43.49 13.04 C 42.87 13.81 42.56 14.65 42.56 15.55 C 42.56 16.35 42.95 16.74 43.72 16.74 L 43.72 16.74 Z M 49.01 16.45 L 50.68 16.45 C 51.9 16.45 52.52 16.87 52.52 17.71 C 52.52 18.28 52.3 18.73 51.85 19.05 C 51.43 19.37 50.83 19.53 50.06 19.53 L 48.11 19.53 C 47.35 19.53 46.8 19.23 46.45 18.64 C 45.83 19.23 45.16 19.53 44.45 19.53 L 42.61 19.53 C 41.54 19.53 40.68 19.18 40.04 18.47 C 39.39 17.74 39.07 16.79 39.07 15.6 C 39.07 13.77 39.71 12.14 40.99 10.69 C 42.25 9.23 43.68 8.5 45.27 8.5 C 46.44 8.5 47.38 8.91 48.06 9.74 L 51.3 1.99 C 51.86 0.66 52.63 0 53.62 0 C 54.04 0 54.39 0.13 54.69 0.39 C 54.97 0.65 55.12 0.97 55.12 1.34 C 55.12 1.64 55.04 1.97 54.89 2.33 L 54.72 2.72 L 49.01 16.45 L 49.01 16.45 Z M 55.81 23.02 L 53.96 23.02 C 51.94 23.02 50.93 23.67 50.93 24.98 C 50.93 25.44 51.07 25.81 51.34 26.09 C 51.62 26.37 51.99 26.51 52.47 26.51 C 53.1 26.51 53.67 26.25 54.16 25.74 C 54.67 25.22 55.22 24.32 55.81 23.02 L 55.81 23.02 Z M 60.92 20.3 L 62.59 20.3 C 63.8 20.3 64.41 20.71 64.42 21.54 C 64.41 22.11 64.2 22.55 63.78 22.86 C 63.34 23.18 62.75 23.34 61.98 23.33 L 59.66 23.33 C 59.38 24.14 58.87 25.2 58.13 26.51 C 56.88 28.84 55.04 30 52.64 30 C 51.16 30 49.93 29.55 48.94 28.66 C 47.94 27.77 47.44 26.66 47.44 25.34 C 47.44 24.43 47.71 23.57 48.25 22.78 C 48.79 21.98 49.51 21.38 50.4 20.99 C 51.4 20.53 52.9 20.3 54.88 20.3 L 57.22 20.3 L 57.64 19.3 C 56.93 19.59 56.28 19.73 55.69 19.73 C 54.66 19.73 53.83 19.48 53.21 18.96 C 52.56 18.46 52.24 17.81 52.25 17 C 52.24 16.51 52.45 15.77 52.86 14.78 L 54.41 11.03 L 54.59 10.65 C 55.04 9.59 55.76 9.07 56.73 9.07 C 57.14 9.07 57.5 9.2 57.79 9.45 C 58.06 9.72 58.2 10.05 58.21 10.46 C 58.2 10.72 58.08 11.16 57.84 11.77 L 56.43 15.09 C 56.2 15.63 56.09 15.98 56.09 16.14 C 56.05 16.59 56.34 16.82 56.98 16.81 C 57.41 16.82 57.86 16.69 58.31 16.45 C 58.78 16.19 59.07 15.91 59.19 15.59 L 61.11 11.03 L 61.26 10.65 C 61.71 9.59 62.43 9.07 63.41 9.07 C 63.83 9.07 64.18 9.2 64.46 9.48 C 64.74 9.73 64.88 10.06 64.88 10.46 C 64.88 10.72 64.81 11.03 64.66 11.39 L 64.49 11.77 L 60.92 20.3 L 60.92 20.3 Z M 66.98 15.21 C 67.42 15.77 67.94 16.05 68.53 16.05 C 68.97 16.05 69.33 15.93 69.63 15.68 C 70.03 15.36 70.39 14.88 70.71 14.24 C 71.01 13.6 71.16 13.02 71.16 12.52 C 71.16 12.11 71.05 11.79 70.82 11.55 C 70.58 11.29 70.28 11.16 69.9 11.16 C 69.06 11.16 68.38 11.78 67.87 13.02 L 66.98 15.21 L 66.98 15.21 Z M 69.95 8.59 C 70.35 8.45 70.72 8.39 71.04 8.39 C 72.12 8.39 72.99 8.8 73.65 9.62 C 74.32 10.45 74.65 11.52 74.65 12.84 C 74.65 15.38 73.7 17.37 71.8 18.8 C 71.13 19.29 70.43 19.53 69.71 19.53 L 68.4 19.53 C 67.48 19.53 66.7 19.2 66.05 18.53 C 65.66 19.2 65.05 19.53 64.22 19.53 C 63.82 19.53 63.48 19.4 63.22 19.14 C 62.93 18.87 62.79 18.54 62.79 18.16 C 62.79 17.87 62.86 17.55 63 17.18 L 63.17 16.79 L 68.97 2.01 L 69.14 1.6 C 69.56 0.53 70.23 0 71.13 0 C 71.56 0 71.91 0.13 72.18 0.39 C 72.47 0.66 72.61 0.98 72.61 1.35 C 72.61 1.66 72.54 1.98 72.39 2.36 L 72.23 2.75 L 69.95 8.59 L 69.95 8.59 Z M 80 16.74 L 80.34 16.74 C 81.1 16.74 81.6 16.44 81.86 15.85 L 82.83 13.52 C 82.96 13.22 83.02 12.97 83.02 12.76 C 83.02 12.52 82.9 12.31 82.67 12.14 C 82.41 11.95 82.11 11.86 81.76 11.86 C 81.09 11.86 80.44 12.24 79.79 12.99 C 79.16 13.76 78.84 14.55 78.84 15.36 C 78.84 16.28 79.22 16.74 80 16.74 L 80 16.74 Z M 85.19 16.41 L 86.8 16.41 C 88 16.41 88.6 16.83 88.6 17.67 C 88.6 18.25 88.39 18.71 87.96 19.04 C 87.52 19.37 86.92 19.53 86.18 19.53 L 84.32 19.53 C 83.49 19.53 82.92 19.22 82.63 18.58 C 81.9 19.22 81.21 19.53 80.53 19.53 L 78.89 19.53 C 77.83 19.53 76.97 19.16 76.32 18.4 C 75.67 17.66 75.35 16.68 75.35 15.45 C 75.35 13.63 75.99 11.99 77.26 10.54 C 78.54 9.1 79.98 8.37 81.59 8.37 C 82.82 8.37 83.72 8.8 84.29 9.65 C 84.77 8.93 85.4 8.57 86.18 8.57 C 86.6 8.57 86.96 8.71 87.24 8.96 C 87.52 9.24 87.67 9.57 87.66 9.97 C 87.67 10.23 87.59 10.55 87.44 10.93 L 87.27 11.3 L 85.19 16.41 L 85.19 16.41 Z M 92.09 23.02 L 90.24 23.02 C 88.22 23.02 87.21 23.67 87.21 24.98 C 87.21 25.44 87.35 25.81 87.62 26.09 C 87.9 26.37 88.27 26.51 88.75 26.51 C 89.38 26.51 89.95 26.25 90.44 25.74 C 90.95 25.22 91.49 24.32 92.09 23.02 L 92.09 23.02 Z M 97.2 20.3 L 98.87 20.3 C 100.08 20.3 100.69 20.71 100.69 21.54 C 100.69 22.11 100.48 22.55 100.05 22.86 C 99.62 23.18 99.03 23.34 98.26 23.33 L 95.94 23.33 C 95.66 24.14 95.15 25.2 94.41 26.51 C 93.16 28.84 91.32 30 88.92 30 C 87.44 30 86.21 29.55 85.22 28.66 C 84.22 27.77 83.72 26.66 83.72 25.34 C 83.72 24.43 83.99 23.57 84.53 22.78 C 85.07 21.98 85.79 21.38 86.68 20.99 C 87.68 20.53 89.18 20.3 91.16 20.3 L 93.5 20.3 L 93.92 19.3 C 93.21 19.59 92.56 19.73 91.97 19.73 C 90.94 19.73 90.11 19.48 89.49 18.96 C 88.84 18.46 88.52 17.81 88.52 17 C 88.52 16.51 88.73 15.77 89.14 14.78 L 90.69 11.03 L 90.87 10.65 C 91.32 9.59 92.03 9.07 93.01 9.07 C 93.42 9.07 93.78 9.2 94.07 9.45 C 94.34 9.72 94.48 10.05 94.49 10.46 C 94.48 10.72 94.36 11.16 94.12 11.77 L 92.69 15.09 C 92.48 15.63 92.37 15.98 92.37 16.14 C 92.33 16.59 92.62 16.82 93.25 16.81 C 93.69 16.82 94.14 16.69 94.59 16.45 C 95.06 16.19 95.35 15.91 95.47 15.59 L 97.39 11.03 L 97.54 10.65 C 97.99 9.59 98.71 9.07 99.68 9.07 C 100.1 9.07 100.46 9.2 100.74 9.48 C 101.02 9.73 101.16 10.06 101.16 10.46 C 101.16 10.72 101.09 11.03 100.94 11.39 L 100.77 11.77 L 97.2 20.3 L 97.2 20.3 Z M 97.2 20.3"
  }));
};

/***/ }),

/***/ "./src/Logo/index.jsx":
/*!****************************!*\
  !*** ./src/Logo/index.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./src/Logo/Icon/index.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Logo =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Logo, _React$PureComponent);

  function Logo() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Logo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Logo)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.modeColor = function (mode) {
      var colors = {
        dark: '#333',
        light: '#fff',
        blue: '#4786c8'
      };
      return colors[mode];
    };

    return _this;
  }

  _createClass(Logo, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          mode = _this$props.mode,
          project = _this$props.project,
          other = _objectWithoutProperties(_this$props, ["mode", "project"]);

      var color = this.modeColor(mode);
      return project === 'author24' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["A24"], _extends({
        style: {
          color: color
        }
      }, other)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["SB"], _extends({
        style: {
          color: color
        }
      }, other));
    }
  }]);

  return Logo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Logo.propTypes = {
  mode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['light', 'dark', 'blue']),
  project: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
Logo.defaultProps = {
  mode: 'light',
  project: 'author24'
};


/***/ }),

/***/ "./src/MaskedInput/index.jsx":
/*!***********************************!*\
  !*** ./src/MaskedInput/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MaskedInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask */ "./src/MaskedInput/mask.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // В эту проверку попадают IE9 и IE10,
// которые не могут корректно работать с кареткой на событии `input`.

var IS_IE9_10 = typeof window !== 'undefined' && Boolean(window.ActiveXObject);
var IS_ANDROID = typeof window !== 'undefined' && /(android)/i.test(window.navigator.userAgent);
/*
 * Для IE11 вместо `onChange`, используем событие `onInput`, для правильной работы copy/paste
 * Issue на ошибку в React: https://github.com/facebook/react/issues/7211
 * Детектим IE11: `Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject;`
 */

var IS_IE11 = typeof window !== 'undefined' && Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject;
var operationType = {
  ADD: 0,
  DELETE: 1,
  REPLACE: 2
};

var MaskedInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MaskedInput, _React$Component);

  function MaskedInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MaskedInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MaskedInput)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.input = null;
    _this.maskPattern = undefined;
    _this.mask = undefined;
    _this.formatCharacters = undefined;
    _this.value = '';
    _this.beforeInputSelection = {
      start: 0,
      end: 0
    };
    _this.caretFixTimeout = null;

    _this.onRefInput = function (input) {
      _this.input = input;
    };

    _this.onBeforeInput = function (event) {
      var onBeforeInput = _this.props.onBeforeInput;
      _this.beforeInputSelection = {
        start: _this.input.selectionStart,
        end: _this.input.selectionEnd
      };
      if (onBeforeInput) onBeforeInput(event);
    };

    _this.onInput = function (event) {
      var _this$props = _this.props,
          onInput = _this$props.onInput,
          onChange = _this$props.onChange;
      var fixedEvent = event;

      if (!IS_IE9_10) {
        fixedEvent = _this.processInputEvent(event);
      }

      if (onInput) {
        onInput(fixedEvent);
      }

      if (IS_IE11 && onChange) {
        onChange(fixedEvent);
      }
    };

    _this.onChange = function (event) {
      var onChange = _this.props.onChange;
      var fixedEvent = event;

      if (IS_IE9_10) {
        fixedEvent = _this.processInputEvent(event);
      }

      if (!IS_IE11 && onChange) {
        onChange(fixedEvent);
      }
    };

    return _this;
  }

  _createClass(MaskedInput, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this$props2 = this.props,
          mask = _this$props2.mask,
          formatCharacters = _this$props2.formatCharacters,
          value = _this$props2.value;
      this.setMask(mask, formatCharacters);
      this.value = this.mask.format(value || '');
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props3 = this.props,
          value = _this$props3.value,
          mask = _this$props3.mask,
          formatCharacters = _this$props3.formatCharacters;
      var reformatValue = false;

      if (mask !== nextProps.mask || formatCharacters !== nextProps.formatCharacters) {
        this.setMask(nextProps.mask, nextProps.formatCharacters);
        reformatValue = true;
      }

      if (reformatValue || value !== nextProps.value) {
        this.value = this.mask.format(nextProps.value || '');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.caretFixTimeout) {
        clearTimeout(this.caretFixTimeout);
        this.caretFixTimeout = null;
      }
    }
  }, {
    key: "processInputEvent",

    /* eslint-disable */
    value: function processInputEvent(event) {
      var onProcessInputEvent = this.props.onProcessInputEvent;

      if (onProcessInputEvent) {
        onProcessInputEvent(event);
      }

      var prevSelection = this.input.selectionStart;
      var newValue = event.target.value;
      var currentValue = this.value;
      var formattedValue = this.mask.format(newValue);
      this.value = formattedValue;
      event.target.value = formattedValue;
      /*
       * Если изменение поля ввода произошло не в конце ввода,
       * то необходимо починить стандартное поведение Реакта и
       * вернуть каретку к последнему изменению.
       */

      if (prevSelection <= currentValue.length) {
        var newSelection = prevSelection; // Определяем тип операции, который был произведен над текстовым полем.

        var opType = newValue.length >= currentValue.length ? operationType.ADD : operationType.DELETE;
        /*
         * На пользовательском инпуте было выделение перед операцией,
         * значит могла быть операция или удаления или замены.
         */

        var beforeInputSelectionLength = this.beforeInputSelection.end - this.beforeInputSelection.start;

        if (beforeInputSelectionLength >= 1) {
          if (newValue.length >= currentValue.length - beforeInputSelectionLength) {
            opType = operationType.REPLACE;
          }
        }
        /*
         * Для операции доавления и замены, если мы стояли на нередактируемом символе,
         * то добаляем сдвиг до ближайшего редактируемого.
         */


        if (opType === operationType.ADD || opType === operationType.REPLACE) {
          var index = this.beforeInputSelection.start;

          while (!this.mask.isEditableIndex(index) && index < formattedValue.length) {
            index++;
          }

          newSelection += index - this.beforeInputSelection.start;
        }
        /*
         * Если вдруг попали на нередактируемый символ маски,
         * то подвигаем курсом до ближайшего редактируемого.
         */


        if (opType === operationType.ADD || opType === operationType.REPLACE) {
          while (!this.mask.isEditableIndex(newSelection) && newSelection < formattedValue.length) {
            newSelection++;
          }
        } else if (opType === operationType.DELETE) {
          while (!this.mask.isEditableIndex(newSelection - 1) && newSelection > 0) {
            newSelection--;
          }
        }

        this.setInputSelection(this.clampSelection(newSelection));
        /*
         * Если изменение поля произошло в конце ввода.
         * Android chrome имеет дефект с автоматической установкой каретки
         * при использовании клавиатуры отличной от type="text".
         */
      } else if (IS_ANDROID) {
        this.setInputSelectionByTimeout(event.target.selectionStart);
      }

      return event;
    }
    /* eslint-enable */

  }, {
    key: "clampSelection",
    value: function clampSelection(selection) {
      var _this$mask = this.mask,
          firstEditableIndex = _this$mask.firstEditableIndex,
          lastEditableIndex = _this$mask.lastEditableIndex;

      if (selection < firstEditableIndex) {
        return firstEditableIndex;
      }

      if (selection > lastEditableIndex + 1) {
        return lastEditableIndex + 1;
      }

      return selection;
    }
  }, {
    key: "setInputSelection",
    value: function setInputSelection(selection) {
      this.input.selectionStart = selection;
      this.input.selectionEnd = selection;

      if (IS_IE9_10 || IS_ANDROID) {
        this.setInputSelectionByTimeout(selection);
      }
    }
  }, {
    key: "setInputSelectionByTimeout",
    value: function setInputSelectionByTimeout(selection) {
      var _this2 = this;

      if (this.caretFixTimeout) {
        clearTimeout(this.caretFixTimeout);
        this.caretFixTimeout = null;
      }

      this.caretFixTimeout = setTimeout(function () {
        _this2.caretFixTimeout = null;
        _this2.input.selectionStart = selection;
        _this2.input.selectionEnd = selection;
      }, 0);
    }
  }, {
    key: "setMask",
    value: function setMask(newMask, formatCharacters) {
      if (this.maskPattern !== newMask || this.formatCharacters !== formatCharacters) {
        this.mask = new _mask__WEBPACK_IMPORTED_MODULE_2__["default"](newMask, formatCharacters);
        this.maskPattern = newMask;
        this.formatCharacters = formatCharacters;
      }
    }
  }, {
    key: "isFilled",
    value: function isFilled() {
      var maskLength = this.mask.length;
      var valueLength = this.value.length;
      var valueOptionalLength = this.value.length + this.mask.optionalLength;
      return valueLength === maskLength || valueOptionalLength === maskLength;
    }
  }, {
    key: "render",
    value: function render() {
      var props = _objectSpread({}, this.props);

      var maxLength = props.maxLength;
      var length = typeof maxLength === 'undefined' ? this.mask.length : maxLength;
      delete props.mask;
      delete props.formatCharacters;
      delete props.onProcessInputEvent;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, props, {
        ref: this.onRefInput,
        maxLength: length,
        value: this.value,
        onBeforeInput: this.onBeforeInput,
        onInput: this.onInput,
        onChange: this.onChange
      }));
    }
  }, {
    key: "focus",
    value: function focus() {
      this.input.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.blur();
    }
  }]);

  return MaskedInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

MaskedInput.propTypes = {
  mask: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  formatCharacters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    validate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  // eslint-disable-next-line react/forbid-prop-types
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  maxLength: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Обработчик, вызываемый перед началом ввода в поле
   */
  onProcessInputEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onBeforeInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
MaskedInput.defaultProps = {
  formatCharacters: {},
  value: undefined,
  maxLength: undefined,
  onProcessInputEvent: undefined,
  onBeforeInput: undefined,
  onInput: undefined,
  onChange: undefined
};


/***/ }),

/***/ "./src/MaskedInput/mask.js":
/*!*********************************!*\
  !*** ./src/MaskedInput/mask.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inputmask_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inputmask-core */ "inputmask-core");
/* harmony import */ var inputmask_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask_core__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // Стандартный плейсхолдер буквы равный по ширине цифровому символу.

var PLACEHOLDER_CHAR = "\u2007"; // Стандартные formatCharacters из inputmask-core.

var DIGIT_RE = /^\d$/;
var LETTER_RE = /^[A-Za-z]$/;
var ALPHANNUMERIC_RE = /^[\dA-Za-z]$/;
/**
 * @typedef {Object} CharFormatter
 * @property {Function} validate Предикат-фильтр
 * @property {Function} [transform] Действия с символом
 */

/**
 * @typedef {Object.<string, CharFormatter>} FormatCharacters
 */

/**
 * @type FormatCharacters
 */

var DEFAULT_FORMAT_CHARACTERS = {
  '*': {
    validate: function validate(char) {
      return ALPHANNUMERIC_RE.test(char);
    }
  },
  1: {
    validate: function validate(char) {
      return DIGIT_RE.test(char);
    }
  },
  a: {
    validate: function validate(char) {
      return LETTER_RE.test(char);
    }
  },
  A: {
    validate: function validate(char) {
      return LETTER_RE.test(char);
    },
    transform: function transform(char) {
      return char.toUpperCase();
    }
  },
  '#': {
    validate: function validate(char) {
      return ALPHANNUMERIC_RE.test(char);
    },
    transform: function transform(char) {
      return char.toUpperCase();
    }
  }
};
/**
 * Класс маски. Позволяет форматировать строку по заданной маске.
 *
 * @class
 * @param {String} mask Маска в формате: https://github.com/insin/inputmask-core
 * @param {FormatCharacters} [formatCharacters] Форматтеры маски в формате `inputmask-core`
 */

var Mask =
/*#__PURE__*/
function () {
  /**
   * Длина маски.
   *
   * @public
   * @type {Number}
   */

  /**
   * Индекс первого редактируемого символа.
   *
   * @public
   * @type {Number}
   */

  /**
   * Индекс последнего редактируемого символа.
   *
   * @public
   * @type {Number}
   */

  /**
   * @type {InputMask.Pattern}
   */
  function Mask(mask, formatCharacters) {
    _classCallCheck(this, Mask);

    this.length = void 0;
    this.firstEditableIndex = void 0;
    this.lastEditableIndex = void 0;
    this.pattern = void 0;
    this.pattern = new inputmask_core__WEBPACK_IMPORTED_MODULE_0___default.a.Pattern(mask.replace(/\[|\]/g, ''), _objectSpread({}, DEFAULT_FORMAT_CHARACTERS, formatCharacters), PLACEHOLDER_CHAR);
    this.length = this.pattern.length;
    this.optionalLength = mask.indexOf('[') > -1 ? mask.slice(mask.indexOf('[')).replace(/\[|\]/g, '').length : 0;
    this.firstEditableIndex = this.pattern.firstEditableIndex;
    this.lastEditableIndex = this.pattern.lastEditableIndex;
  }
  /**
   * Проверяет является ли символ в заданном индексе редактируемым.
   *
   * @param {Number} index Индекс символа.
   * @returns {Boolean}
   */


  _createClass(Mask, [{
    key: "isEditableIndex",
    value: function isEditableIndex(index) {
      return this.pattern.isEditableIndex(index);
    }
    /**
     * Форматирует значение введенное в поле ввода по маске.
     *
     * @param {String} value Неформатированное значение из поля ввода.
     * @returns {String}
     */

    /* eslint-disable max-statements */

  }, {
    key: "format",
    value: function format(value) {
      var formattedValue = '';
      var cleanValue = value.toString().replace(/\s+/g, '');
      var cleanValueLength = cleanValue.length;
      var cleanValueIndex = 0;
      var cleanValueChar;
      var patternIndex = 0;
      var patternChar;
      var patternLength = this.pattern.length;

      while (patternIndex < patternLength && cleanValueIndex < cleanValueLength) {
        if (this.pattern.isEditableIndex(patternIndex)) {
          // eslint-disable-next-line no-cond-assign
          while ((cleanValueChar = cleanValue.charAt(cleanValueIndex)) !== '') {
            if (this.pattern.isValidAtIndex(cleanValueChar, patternIndex)) {
              formattedValue += this.pattern.transform(cleanValueChar, patternIndex);
              patternIndex += 1;
              cleanValueIndex += 1;
              break;
            } else {
              cleanValueIndex += 1;
            }
          }
        } else {
          patternChar = this.pattern.pattern[patternIndex];
          formattedValue += patternChar;
          patternIndex += 1;

          if (cleanValue.charAt(cleanValueIndex) === patternChar) {
            cleanValueIndex += 1;
          }
        }
      }

      return formattedValue;
    }
    /* eslint-enable max-statements */

  }]);

  return Mask;
}();

/* harmony default export */ __webpack_exports__["default"] = (Mask);

/***/ }),

/***/ "./src/Message/index.jsx":
/*!*******************************!*\
  !*** ./src/Message/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-notification */ "rc-notification");
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./src/Icon/index.jsx");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Spinner */ "./src/Spinner/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./src/Message/styled.js");





/**
 * Глобальные сообщения.
 *
 * Показывает информационное сообщение сверху экрана.
 *
 * @param silent {Boolean} - Звук при появлении уведомления
 *
 * @draft
 */

var defaultDuration = 3;
var defaultTop;
var messageInstance;
var key = 1;
var prefixCls = 'ui-message';
var transitionName = 'move-up';

var getContainer = function getContainer() {
  return document.body;
};

var maxCount;

function getMessageInstance(callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }

  rc_notification__WEBPACK_IMPORTED_MODULE_1___default.a.newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }

    messageInstance = instance;
    callback(instance);
  });
}

function notice(content) {
  var durationValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
  var type = arguments.length > 2 ? arguments[2] : undefined;
  var onCloseFn = arguments.length > 3 ? arguments[3] : undefined;
  var icon;
  var onClose = onCloseFn;
  var duration = durationValue;

  switch (type) {
    case 'info':
      icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["StyledIcon"], {
        as: _Icon__WEBPACK_IMPORTED_MODULE_2__["Info"],
        info: true
      });
      break;

    case 'success':
      icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["StyledIcon"], {
        as: _Icon__WEBPACK_IMPORTED_MODULE_2__["Approved"],
        success: true
      });
      break;

    case 'warning':
      icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["StyledIcon"], {
        as: _Icon__WEBPACK_IMPORTED_MODULE_2__["Warning"]
      });
      break;

    case 'error':
      icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["StyledIcon"], {
        as: _Icon__WEBPACK_IMPORTED_MODULE_2__["Flash"]
      });
      break;

    case 'loading':
      icon = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["SpinnerWrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], null));
      break;

    default:
      icon = null;
  }

  if (typeof duration === 'function') {
    onClose = duration;
    duration = defaultDuration;
  } // eslint-disable-next-line no-plusplus


  var target = key++;
  getMessageInstance(function (instance) {
    instance.notice({
      key: target,
      duration: duration,
      style: {},
      content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["Notice"], {
        type: type
      }, icon, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["GlobalStyles"], null)),
      onClose: onClose
    });
  });
  return function () {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = ({
  info: function info(content, duration, onClose) {
    return notice(content, duration, 'info', onClose);
  },
  success: function success(content, duration, onClose) {
    return notice(content, duration, 'success', onClose);
  },
  error: function error(content, duration, onClose) {
    return notice(content, duration, 'error', onClose);
  },
  warning: function warning(content, duration, onClose) {
    return notice(content, duration, 'warning', onClose);
  },
  loading: function loading(content, duration, onClose) {
    return notice(content, duration, 'loading', onClose);
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
});

/***/ }),

/***/ "./src/Message/styled.js":
/*!*******************************!*\
  !*** ./src/Message/styled.js ***!
  \*******************************/
/*! exports provided: GlobalStyles, Notice, SpinnerWrapper, StyledIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return GlobalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notice", function() { return Notice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerWrapper", function() { return SpinnerWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledIcon", function() { return StyledIcon; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 16px;\n    height: 16px;\n    margin-right: 8px;\n    fill: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin-right: 16px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            a {\n                color: ", ";\n                text-decoration: underline;\n                &:hover {\n                    opacity: .8;\n                }\n            }\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    padding: 10px 16px;\n    border-radius: 2px;\n    box-shadow: 0 4px 12px rgba(0,0,0,.15);\n    font: 400 13px 'Open Sans', Helvetica, Arial, sans-serif;\n    pointer-events: all;\n    background-color: ", ";\n    color: ", ";\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    .ui-message {\n        width: 100%;\n        position: fixed;\n        z-index: 99999;\n        top: 16px;\n        left: 0;\n        pointer-events: none;\n    }\n    .ui-message-notice {\n        padding: 8px;\n        text-align: center;\n        &:first-child {\n            margin-top: -8px;\n        }\n    }\n    .ui-message-notice-content {\n        display: inline-block;\n        pointer-events: all;\n    }\n    .ui-message-notice.move-up-appear,\n    .ui-message-notice.move-up-enter,\n    .ui-message-notice.move-up-leave {\n        animation-duration: .2s;\n        animation-fill-mode: both;\n        animation-play-state: paused;\n    }\n    .ui-message-notice.move-up-appear, .ui-message-notice.move-up-enter {\n        opacity: 0;\n        animation-timing-function: cubic-bezier(.08,.82,.17,1);\n    }\n    .ui-message-notice.move-up-appear-active, .ui-message-notice.move-up-enter-active {\n        animation-name: ", ";\n        animation-play-state: running;\n    }\n    .ui-message-notice.move-up-leave {\n        animation-timing-function: cubic-bezier(.6,.04,.98,.34);\n    }\n    .ui-message-notice.move-up-leave-active {\n        animation-name: ", ";\n        animation-play-state: running;\n        pointer-events: none;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        transform-origin: 0 0;\n        transform: translateY(0);\n        opacity: 1\n    }\n    to {\n        transform-origin: 0 0;\n        transform: translateY(-100%);\n        opacity: 0\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        transform-origin: 0 0;\n        transform: translateY(-100%);\n        opacity: 0\n    }\n    to {\n        transform-origin: 0 0;\n        transform: translateY(0);\n        opacity: 1\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var antMoveUpIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var antMoveUpOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject2());
var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject3(), antMoveUpIn, antMoveUpOut);
var Notice = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs(function (props) {
  var backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White;
  var color = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Coal;
  var linkCSS = '';

  if (props.type === 'warning') {
    backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gold;
    color = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White;
  } else if (props.type === 'error') {
    backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Red;
    color = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White;
  }

  if (['warning', 'error'].indexOf(props.type) > -1) {
    linkCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White);
  }

  return {
    backgroundColor: backgroundColor,
    color: color,
    linkCSS: linkCSS
  };
})(_templateObject4(), function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.color;
}, function (props) {
  return props.linkCSS;
});
var SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject6());
var StyledIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs(function (props) {
  var fill = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White;

  if (props.info) {
    fill = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue;
  } else if (props.success) {
    fill = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green;
  }

  return {
    fill: fill
  };
})(_templateObject7(), function (props) {
  return props.fill;
});

/***/ }),

/***/ "./src/Modal/index.jsx":
/*!*****************************!*\
  !*** ./src/Modal/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_util_lib_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-util/lib/Dom/addEventListener */ "rc-util/lib/Dom/addEventListener");
/* harmony import */ var rc_util_lib_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_util_lib_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-dialog */ "rc-dialog");
/* harmony import */ var rc_dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Button */ "./src/Button/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./src/Modal/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/**
 * Модальное окно
 * @develop
 */

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.mousePosition = {};
    _this.mousePositionEventBinded = null;

    _this.onCancel = function (e) {
      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel(e);
      }
    };

    _this.onOk = function (e) {
      var onOk = _this.props.onOk;

      if (onOk) {
        onOk(e);
      }
    };

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.mousePositionEventBinded) {
        return;
      }

      rc_util_lib_Dom_addEventListener__WEBPACK_IMPORTED_MODULE_3___default()(document.documentElement, 'click', function (e) {
        _this2.mousePosition = {
          x: e.pageX,
          y: e.pageY
        };
        setTimeout(function () {
          _this2.mousePosition = null;
        }, 100);
      });
      this.mousePositionEventBinded = true;
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this$props = this.props,
          okText = _this$props.okText,
          okColor = _this$props.okColor,
          cancelText = _this$props.cancelText,
          okLoading = _this$props.okLoading;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: "gray",
        side: 40,
        onClick: this.onCancel
      }, cancelText || 'Отмена'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        color: okColor,
        side: 40,
        onClick: this.onOk,
        loading: okLoading
      }, okText || 'Ок'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          footer = _this$props2.footer,
          visible = _this$props2.visible,
          wrapClassName = _this$props2.wrapClassName,
          verticalCentered = _this$props2.verticalCentered,
          extendedContent = _this$props2.extendedContent,
          other = _objectWithoutProperties(_this$props2, ["footer", "visible", "wrapClassName", "verticalCentered", "extendedContent"]);

      var defaultFooter = this.renderFooter();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_dialog__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, other, {
        prefixCls: "ui-modal",
        transitionName: "ui-modal-zoom",
        maskTransitionName: "ui-modal-fade",
        wrapClassName: classnames__WEBPACK_IMPORTED_MODULE_2___default()(wrapClassName, {
          'ui-modal-vertical-centered': verticalCentered,
          'ui-modal-extended-content': extendedContent
        }),
        footer: typeof footer === 'undefined' ? defaultFooter : footer,
        visible: visible,
        mousePosition: this.mousePosition,
        onClose: this.onCancel
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_6__["default"], null));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Modal.propTypes = {
  /**
   * Колбек на подтверждение
   */
  onOk: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Колбек на отмену
   */
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Текст для кнопки на положительное действие
   */
  okText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Текст для кнопки на отмену
   */
  cancelText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Цвет положительной кнопки
   */
  okColor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Ширина модального окна
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),

  /**
   * Индикатор загрузки на положительном действии
   */
  okLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Видимость окна
   */
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Футер модального окна
   */
  footer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Название
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Видимость кнопки (х) для закрытия окна
   */
  closable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Отцентровано по вертикали
   */
  verticalCentered: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Убирает отступы body, footer
   */
  extendedContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Отцентровано по вертикали
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Класс для обертки
   */
  wrapClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array])
};
Modal.defaultProps = {
  okColor: 'blue',
  width: 520,
  okLoading: false,
  visible: false,
  verticalCentered: false,
  extendedContent: false,
  onOk: function onOk() {},
  onCancel: function onCancel() {},
  okText: undefined,
  cancelText: undefined,
  footer: undefined,
  title: undefined,
  closable: true,
  className: '',
  wrapClassName: ''
};


/***/ }),

/***/ "./src/Modal/styled.js":
/*!*****************************!*\
  !*** ./src/Modal/styled.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    .ui-modal {\n        position: relative;\n        width: 600px;\n        margin: 30px auto;\n        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n        background: #fff;\n        border-radius: 5px;\n    }\n    .ui-modal-mask {\n        position: fixed;\n        top: 0;\n        right: 0;\n        left: 0;\n        bottom: 0;\n        background-color: rgba(51, 51, 51, .6);\n        height: 100%;\n        z-index: 1050;\n    }\n    .ui-modal-mask-hidden {\n        display: none;\n    }\n    .ui-modal-wrap {\n        position: fixed;\n        overflow: auto;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1050;\n        -webkit-overflow-scrolling: touch;\n        outline: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .ui-modal-close {\n        position: absolute;\n        right: 8px;\n        top: 8px;\n        width: 32px;\n        height: 32px;\n        padding: 8px;\n        border: 0;\n        border-radius: 2px;\n        color: ", ";\n        background: transparent;\n        outline: none;\n        cursor: pointer;\n        text-decoration: none;\n        z-index: 1;\n        &:hover, &:active {\n            color: ", ";\n        }\n        &:active {\n            background: ", ";\n        }\n    }\n    .ui-modal-close-x {\n        position: relative;\n        display: block;\n        width: 16px;\n        height: 16px;\n        &::before, &::after {\n            content: '';\n            position: absolute;\n            display: block;\n            top: 50%;\n            left: 50%;\n            width: 2px;\n            height: 20px;\n            transform-origin: 50% 50%;\n            border-radius: 2px;\n            background: currentColor;\n        }\n        &::before {\n            transform: translate(-50%, -50%) rotate(45deg);\n        }\n        &::after {\n            transform: translate(-50%, -50%) rotate(-45deg);\n        }\n    }\n    .ui-modal-header {\n        padding: 32px 32px 0 32px;\n    }\n    .ui-modal-title {\n        font: 600 24px \"Open Sans\", Helvetica, Arial, sans-serif;\n        line-height: 32px;\n    }\n    .ui-modal-body {\n        padding: 16px 32px 32px 32px;\n        font: 400 13px \"Open Sans\", Helvetica, Arial, sans-serif;\n        line-height: 20px;\n    }\n    .ui-modal-footer {\n        padding: 0 32px 32px 32px;\n        text-align: center;\n        button + button {\n            margin-left: 32px;\n        }\n    }\n    .ui-modal-zoom {\n        z-index: auto;\n    }\n    .ui-modal-zoom-enter, .ui-modal-zoom-appear {\n        opacity: 0;\n        animation-name: ", ";\n        animation-duration: 0.15s;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n        animation-play-state: paused;\n    }\n    .ui-modal-zoom-enter-active, .ui-modal-zoom-appear-active {\n        animation-play-state: running;\n    }\n    .ui-modal-zoom-leave {\n        animation-name: ", ";\n        animation-duration: 0.15s;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);\n        animation-play-state: paused;\n    }\n    .ui-modal-zoom-leave-active {\n        animation-play-state: running;\n    }\n    .ui-modal-fade {\n        z-index: auto;\n    }\n    .ui-modal-fade-enter, .ui-modal-fade-appear {\n        opacity: 0;\n        animation-name: ", ";\n        animation-duration: 0.15s;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n        animation-play-state: paused;\n    }\n    .ui-modal-fade-enter-active, .ui-modal-fade-appear {\n        animation-play-state: running;\n    }\n    .ui-modal-fade-leave {\n        animation-name: ", ";\n        animation-duration: 0.15s;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n        animation-play-state: paused;\n    }\n    .ui-modal-fade-leave-active {\n        animation-play-state: running;\n    }\n    .ui-modal-vertical-centered {\n        text-align: center;\n        &::before {\n            content: '';\n            display: inline-block;\n            height: 100%;\n            vertical-align: middle;\n            width: 0;\n        }\n    }\n    .ui-modal-vertical-centered .ui-modal {\n        display: inline-block;\n        vertical-align: middle;\n        top: 0;\n        text-align: left;\n    }\n    .ui-modal-extended-content .ui-modal-body, .ui-modal-extended-content .ui-modal-footer {\n        padding: 0;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        transform: scale(1, 1);\n    }\n    100% {\n        opacity: 0;\n        transform: scale(0, 0);\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 0;\n        transform: scale(0, 0);\n    }\n    100% {\n        opacity: 1;\n        transform: scale(1, 1);\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var fadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var fadeOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject2());
var zoomIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject3());
var zoomOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject4());
/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject5(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale, zoomIn, zoomOut, fadeIn, fadeOut));

/***/ }),

/***/ "./src/Notification/index.jsx":
/*!************************************!*\
  !*** ./src/Notification/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-notification */ "rc-notification");
/* harmony import */ var rc_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Notification/styled.js");



/**
 * Глобальные уведомления.
 *
 * Показывает уведомление в углу экрана.
 *
 * @param placement {String} - Угол экрана в котором появляется уведомление
 *                             ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']
 * @param silent {Boolean} - Звук при появлении уведомления
 *
 * @draft
 */

var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPlacement = 'topRight';
var defaultGetContainer;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer;

  if (typeof duration !== 'undefined') {
    defaultDuration = duration;
  }

  if (typeof placement !== 'undefined') {
    defaultPlacement = placement;
  }

  if (typeof bottom !== 'undefined') {
    defaultBottom = bottom;
  }

  if (typeof top !== 'undefined') {
    defaultTop = top;
  }

  if (typeof getContainer !== 'undefined') {
    defaultGetContainer = getContainer;
  }
}

function getPlacementStyle(placement) {
  var style;

  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top: defaultTop,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: 0,
        top: defaultTop,
        bottom: 'auto'
      };
      break;

    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: defaultBottom
      };
      break;

    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: defaultBottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(prefixCls, placement, callback) {
  var cacheKey = "".concat(prefixCls, "-").concat(placement);

  if (notificationInstance[cacheKey]) {
    callback(notificationInstance[cacheKey]);
    return;
  }

  rc_notification__WEBPACK_IMPORTED_MODULE_1___default.a.newInstance({
    prefixCls: prefixCls,
    className: "".concat(prefixCls, "-").concat(placement),
    style: getPlacementStyle(placement),
    getContainer: defaultGetContainer
  }, function (notification) {
    notificationInstance[cacheKey] = notification;
    callback(notification);
  });
}

function notice(args) {
  var outerPrefixCls = args.prefixCls || 'ui-notification';
  var duration = typeof args.duration === 'undefined' ? defaultDuration : args.duration;
  var silent = args.silent || false;
  var moreFn = typeof args.moreFn === 'function' ? args.moreFn : function () {};
  var replyFn = typeof args.replayFn === 'function' ? args.replayFn : function () {};
  getNotificationInstance(outerPrefixCls, args.placement || defaultPlacement, function (notification) {
    notification.notice({
      content: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
        withIcon: 'icon' in args,
        withAvatar: 'avatar' in args,
        onClick: args.onClick
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_2__["IconWrapper"], null, args.icon), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_2__["AvatarWrapper"], null, args.avatar), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_2__["Message"], null, args.message, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_2__["Time"], null, args.time)), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], null, args.description), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_2__["More"], {
        onClick: moreFn
      }, args.more), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_2__["Reply"], {
        onClick: replyFn
      }, args.reply), !silent && // eslint-disable-next-line jsx-a11y/media-has-caption
      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("audio", {
        autoPlay: true
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("source", {
        src: "/assets/audio/positive_mid.ogg",
        type: "audio/ogg"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("source", {
        src: "/assets/audio/positive_mid.mp3",
        type: "audio/mp3"
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_styled__WEBPACK_IMPORTED_MODULE_2__["GlobalStyles"], null)),
      duration: duration,
      closable: true,
      onClose: args.onClose,
      key: args.key,
      style: args.style || {},
      className: args.className
    });
  });
}

var api = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return notificationInstance[cacheKey].removeNotice(key);
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      notificationInstance[cacheKey].destroy();
      delete notificationInstance[cacheKey];
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/Notification/styled.js":
/*!************************************!*\
  !*** ./src/Notification/styled.js ***!
  \************************************/
/*! exports provided: GlobalStyles, Wrapper, IconWrapper, AvatarWrapper, Message, Time, Description, More, Reply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return GlobalStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrapper", function() { return IconWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvatarWrapper", function() { return AvatarWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "More", function() { return More; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reply", function() { return Reply; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 30px;\n    bottom: 24px;\n    color: ", ";\n    font-size: 14px;\n    font-weight: 600;\n    text-decoration: underline;\n    cursor: pointer;\n    &:hover, &:active {\n        color: ", ";\n    }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    width: auto;\n    font-size: 14px;\n    font-weight: 600;\n    cursor: pointer;\n    &:hover, &:active {\n        color: ", ";\n    }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-bottom: 4px;\n    max-width: 100%;\n    max-height: 4.2em;\n    line-height: 1.4em;\n    font-weight: 400;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    opacity: 0.5;\n    color: #3c4858;\n    font-size: 12px;\n    margin-left: 10px;\n    font-weight: 400;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n    margin-bottom: 4px;\n    font-weight: 600;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    left: 20px;\n    top: 26px;\n    width: 40px;\n    height: 40px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    left: 20px;\n    top: 24px;\n    width: 20px;\n    height: 20px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    padding: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    .ui-notification {\n        z-index: 1010;\n        position: fixed;\n        box-sizing: border-box;\n        width: 384px;\n        max-width: calc(100vw - 32px);\n        padding: 0;\n        font: 400 14px \"Open Sans\", Helvetica, Arial, sans-serif;\n        line-height: 20px;\n        color: #3c4858;\n    }\n    .ui-notification-notice {\n        position: relative;\n        margin-bottom: 16px;\n        padding-left: 4px;\n        border-radius: 4px;\n        border-left: 4px solid ", ";\n        background: ", ";\n        box-shadow: 0 2px 24px rgba(0, 0, 0, 0.06);\n        opacity: 0.98;\n    }\n    .ui-notification-notice-close {\n        box-sizing: border-box;\n        position: absolute;\n        right: 8px;\n        top: 8px;\n        width: 32px;\n        height: 32px;\n        padding: 8px;\n        border: 0;\n        border-radius: 2px;\n        color: #d5d5d5;\n        background: transparent;\n        outline: none;\n        cursor: pointer;\n        text-decoration: none;\n        transition: background-color .12s linear;\n        &:hover, &:active {\n            color: #979797;\n            background-color: #fff;\n        }\n    }\n    .ui-notification-notice-close-x {\n        position: relative;\n        display: block;\n        width: 10px;\n        height: 10px;\n        &::before, &::after {\n            content: '';\n            position: absolute;\n            display: block;\n            top: 50%;\n            left: 50%;\n            width: 2px;\n            height: 16px;\n            transform-origin: 50% 50%;\n            border-radius: 2px;\n            background: currentColor;\n            transition: background-color .12s linear;\n        }\n        &::before {\n            transform: translate(-50%, -50%) rotate(45deg);\n        }\n        &::after {\n            transform: translate(-50%, -50%) rotate(-45deg);\n        }\n    }\n    .ui-notification-fade-effect {\n        animation-duration: .24s;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(.645,.045,.355,1)\n    }\n    .ui-notification-fade-appear, .ui-notification-fade-enter {\n        opacity: 0;\n        animation-play-state: paused\n    }\n    .ui-notification-fade-appear, .ui-notification-fade-enter, .ui-notification-notice-fade-leave {\n        animation-duration: .24s;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(.645,.045,.355,1);\n    }\n    .ui-notification-fade-appear.ui-notification-fade-appear-active {\n        animation-name: ", ";\n        animation-play-state: running;\n    }\n    .ui-notification-fade-enter.ui-notification-fade-enter-active {\n        animation-name: ", ";\n        animation-play-state: running;\n    }\n    .ui-notification-fade-leave {\n        animation-duration: .2s;\n        animation-play-state: paused;\n    }\n    .ui-notification-fade-leave.ui-notification-fade-leave-active {\n        animation-name: ", ";\n        animation-play-state: running\n    }\n    .ui-notification-topLeft, .ui-notification-bottomLeft {\n        margin: 0 0 0 24px;\n    }\n    .ui-notification-topLeft .ui-notification-fade-appear-active,\n    .ui-notification-topLeft .ui-notification-fade-enter-active,\n    .ui-notification-bottomLeft .ui-notification-fade-appear-active,\n    .ui-notification-bottomLeft .ui-notification-fade-enter-active {\n        animation-name: ", ";\n    }\n    .ui-notification-topRight, .ui-notification-bottomRight {\n        margin: 0 24px 0 0;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 1;\n        margin-bottom: 16px;\n        padding-top: 16px;\n        padding-bottom: 16px;\n        max-height: 150px\n    }\n\n    to {\n        opacity: 0;\n        margin-bottom: 0;\n        padding-top: 0;\n        padding-bottom: 0;\n        max-height: 0\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 0;\n        right: 384px\n    }\n\n    to {\n        right: 0;\n        opacity: 1\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 0;\n        left: 384px\n    }\n\n    to {\n        left: 0;\n        opacity: 1\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var notificationFadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var notificationLeftFadeIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject2());
var notificationFadeOut = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject3());
var GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject4(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White, notificationFadeIn, notificationFadeIn, notificationFadeOut, notificationLeftFadeIn);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs(function (props) {
  var left = 40;
  var right = 40;

  if (props.withIcon) {
    left = 64;
  }

  if (props.withAvatar) {
    left = 64;
    right = 60;
  }

  return {
    padding: "24px ".concat(right, "px 24px ").concat(left, "px")
  };
})(_templateObject5(), function (props) {
  return props.padding;
});
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject6());
var AvatarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject7());
var Message = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject8());
var Time = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span(_templateObject9());
var Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject10());
var More = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject11(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepBlue);
var Reply = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject12(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].DeepGreen);

/***/ }),

/***/ "./src/Popover/index.jsx":
/*!*******************************!*\
  !*** ./src/Popover/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popover; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-tooltip */ "rc-tooltip");
/* harmony import */ var rc_tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./placements */ "./src/Popover/placements.js");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./src/Popover/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * `Popover` сработает только если у детей есть
 * события `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick`.
 */

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.popover = null;

    _this.onRefPopover = function (popover) {
      _this.popover = popover;
    };

    _this.onVisibleChange = function (visible) {
      var onVisibleChange = _this.props.onVisibleChange;

      if (onVisibleChange) {
        onVisibleChange(visible);
      }
    };

    return _this;
  }

  _createClass(Popover, [{
    key: "getPopoverDOMNode",
    value: function getPopoverDOMNode() {
      return this.popover.getPopupDomNode();
    }
  }, {
    key: "getPlacements",
    value: function getPlacements() {
      var _this$props = this.props,
          arrowPointAtCenter = _this$props.arrowPointAtCenter,
          autoAdjustOverflow = _this$props.autoAdjustOverflow;
      return Object(_placements__WEBPACK_IMPORTED_MODULE_3__["default"])({
        arrowPointAtCenter: arrowPointAtCenter,
        verticalArrowShift: 8,
        autoAdjustOverflow: autoAdjustOverflow
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          color = _this$props2.color,
          raised = _this$props2.raised,
          overlayClassName = _this$props2.overlayClassName,
          destroyPopoverOnHide = _this$props2.destroyPopoverOnHide,
          other = _objectWithoutProperties(_this$props2, ["children", "color", "raised", "overlayClassName", "destroyPopoverOnHide"]);

      var className = ["ui-popover-theme-".concat(color)];
      if (raised) className.push('ui-popover-raised');
      if (overlayClassName) className.push(overlayClassName);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_tooltip__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, other, {
        getTooltipContainer: this.getPopoverContainer,
        destroyPopupOnHide: destroyPopoverOnHide,
        overlayClassName: className.join(' '),
        ref: this.onRefPopover,
        onVisibleChange: this.onVisibleChange,
        onPopupAlign: this.onPopupAlign,
        builtinPlacements: this.getPlacements()
      }), children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return Popover;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Popover.propTypes = {
  /**
   * По какому событию показывать ['click', 'hover', 'focus', 'contextMenu']
   */
  trigger: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['click', 'hover', 'focus', 'contextMenu'])),

  /**
   * Элемент на который указывает
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /**
   * Видимость по умолчанию
   */
  defaultVisible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Видимость
   */
  // eslint-disable-next-line react/require-default-props
  visible: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Расположение
   * ['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']),

  /**
   * Цвет
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['white', 'red', 'blue']),

  /**
   * Добавляет тень
   */
  raised: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Свойство от компонента
   * @link https://github.com/react-component/animate
   */
  transitionName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),

  /**
   * Изменилась видимость
   */
  onVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * После того как измениласть видимость
   */
  afterVisibleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Всплывающий контент
   */
  overlay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func]).isRequired,

  /**
   * Стили для всплывашки
   */
  overlayStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(),

  /**
   * CSS класс всплывашки
   */
  overlayClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * CSS префикс
   */
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Задержка пере показом (сек)
   */
  mouseEnterDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Задержка перед скрытием (сек)
   */
  mouseLeaveDelay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Функция возвращающая контейнер относительно которого позиционируется всплывашка.
   * По умолчанию контейнер - body
   */
  getPopoverContainer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Удаляет всплывашку из DOM после скрытия
   */
  destroyPopoverOnHide: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Настройки выранивания (будут объединены с placement конфигом)
   * @link https://github.com/yiminghe/dom-align
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape(),
  arrowPointAtCenter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoAdjustOverflow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Popover.defaultProps = {
  trigger: ['hover'],
  prefixCls: 'ui-popover',
  placement: 'top',
  color: 'white',
  raised: true,
  transitionName: 'ui-popover-animation',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  getPopoverContainer: function getPopoverContainer() {
    return document.body;
  },
  defaultVisible: false,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true,
  destroyPopoverOnHide: false,
  align: undefined,
  onVisibleChange: undefined,
  afterVisibleChange: undefined,
  overlayStyle: {},
  overlayClassName: ''
};


/***/ }),

/***/ "./src/Popover/placements.js":
/*!***********************************!*\
  !*** ./src/Popover/placements.js ***!
  \***********************************/
/*! exports provided: getOverflowOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOverflowOptions", function() { return getOverflowOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getPlacements; });
/* harmony import */ var rc_tooltip_lib_placements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-tooltip/lib/placements */ "rc-tooltip/lib/placements");
/* harmony import */ var rc_tooltip_lib_placements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_tooltip_lib_placements__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var targetOffset = [0, 0];
var offset = 4;
var defaultArrowWidth = 5;
var defaultHorizontalArrowShift = 12;
var defaultVerticalArrowShift = 12;
var defaultAutoAdjustOverflow = true;
function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }

  return _objectSpread({}, autoAdjustOverflowDisabled, autoAdjustOverflow);
}
function getPlacements() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$arrowWidth = config.arrowWidth,
      arrowWidth = _config$arrowWidth === void 0 ? defaultArrowWidth : _config$arrowWidth,
      _config$horizontalArr = config.horizontalArrowShift,
      horizontalArrowShift = _config$horizontalArr === void 0 ? defaultHorizontalArrowShift : _config$horizontalArr,
      _config$verticalArrow = config.verticalArrowShift,
      verticalArrowShift = _config$verticalArrow === void 0 ? defaultVerticalArrowShift : _config$verticalArrow,
      _config$autoAdjustOve = config.autoAdjustOverflow,
      autoAdjustOverflow = _config$autoAdjustOve === void 0 ? defaultAutoAdjustOverflow : _config$autoAdjustOve;
  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-offset, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [offset, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -offset]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, offset]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -offset]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-offset, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -offset]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [offset, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, offset]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [offset, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), offset]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-offset, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function (key) {
    placementMap[key] = config.arrowPointAtCenter ? _objectSpread({}, placementMap[key], {
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset: targetOffset
    }) : _objectSpread({}, rc_tooltip_lib_placements__WEBPACK_IMPORTED_MODULE_0__["placements"][key], {
      overflow: getOverflowOptions(autoAdjustOverflow)
    });
  });
  return placementMap;
}

/***/ }),

/***/ "./src/Popover/styled.js":
/*!*******************************!*\
  !*** ./src/Popover/styled.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    .ui-popover {\n        position: absolute;\n        z-index: 1070;\n        display: block;\n        visibility: visible;\n        font-size: 12px;\n        line-height: 1.5;\n        opacity: 1;\n    }\n    .ui-popover-arrow {\n        z-index: 1;\n    }\n    .ui-popover-inner {\n        box-sizing: border-box;\n        padding: 7px 12px;\n        min-height: 34px;\n        font: 400 13px \"Open Sans\", sans-serif;\n        text-align: left;\n        text-decoration: none;\n        border-radius: 2px;\n        text-transform: none;\n        line-height: 20px;\n        &::before {\n            content: '';\n        }\n    }\n    .ui-popover-theme-white .ui-popover-arrow {\n        ", "\n    }\n    .ui-popover-theme-white .ui-popover-inner {\n        background: ", ";\n        color: ", ";\n    }\n    .ui-popover-theme-red .ui-popover-arrow {\n        ", "\n    }\n    .ui-popover-theme-red .ui-popover-inner {\n        background: ", ";\n        color: ", ";\n    }\n    .ui-popover-theme-blue .ui-popover-arrow {\n        ", "\n    }\n    .ui-popover-theme-blue .ui-popover-inner {\n        background: ", ";\n        color: ", ";\n    }\n    .ui-popover-raised .ui-popover-inner {\n        box-shadow: 0 2px 8px rgba(51, 51, 51, 0.3);\n    }\n    .ui-popover-hidden {\n        display: none;\n    }\n    .ui-popover-placement-top,\n    .ui-popover-placement-topLeft,\n    .ui-popover-placement-topRight {\n        padding: 5px 0 9px 0;\n        ", "\n    }\n    .ui-popover-placement-top .ui-popover-arrow {\n        left: 50%;\n        bottom: 4px;\n        margin-left: -5px;\n    }\n    .ui-popover-placement-topLeft .ui-popover-arrow {\n        left: 15%;\n        bottom: 4px;\n        margin-left: -5px;\n    }\n    .ui-popover-placement-topRight .ui-popover-arrow {\n        right: 15%;\n        bottom: 4px;\n        margin-left: -5px;\n    }\n    .ui-popover-placement-right,\n    .ui-popover-placement-rightTop,\n    .ui-popover-placement-rightBottom {\n        padding: 0 5px 0 9px;\n        ", "\n    }\n    .ui-popover-placement-right .ui-popover-arrow {\n        top: 50%;\n        left: 4px;\n        margin-top: -5px;\n    }\n    .ui-popover-placement-rightTop .ui-popover-arrow {\n        top: 15%;\n        left: 4px;\n        margin-top: 0;\n    }\n    .ui-popover-placement-rightBottom .ui-popover-arrow {\n        bottom: 15%;\n        left: 4px;\n        margin-top: -5px;\n    }\n    .ui-popover-placement-bottom,\n    .ui-popover-placement-bottomLeft,\n    .ui-popover-placement-bottomRight {\n        padding: 9px 0 5px 0;\n        ", "\n    }\n    .ui-popover-placement-bottom .ui-popover-arrow {\n        left: 50%;\n        top: 4px;\n        margin-left: -5px;\n    }\n    .ui-popover-placement-bottomLeft .ui-popover-arrow {\n        left: 15%;\n        top: 4px;\n        margin-left: -5px;\n    }\n    .ui-popover-placement-bottomRight .ui-popover-arrow {\n        right: 15%;\n        top: 4px;\n        margin-left: -5px;\n    }\n    .ui-popover-placement-left,\n    .ui-popover-placement-leftTop,\n    .ui-popover-placement-leftBottom {\n        padding: 0 9px 0 5px;\n        ", "\n    }\n    .ui-popover-placement-left .ui-popover-arrow {\n        top: 50%;\n        right: 4px;\n        margin-top: -5px;\n    }\n    .ui-popover-placement-leftTop .ui-popover-arrow {\n        top: 15%;\n        right: 4px;\n        margin-top: 0;\n    }\n    .ui-popover-placement-leftBottom .ui-popover-arrow {\n        bottom: 15%;\n        right: 4px;\n        margin-top: -5px;\n    }\n    .ui-popover.ui-popover-animation-enter,\n    .ui-popover.ui-popover-animation-leave {\n        display: block;\n    }\n    .ui-popover-animation-enter,\n    .ui-popover-animation-appear,\n    .ui-popover-animation-leave {\n        opacity: 0;\n        animation-duration: 0.3s;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n        animation-play-state: paused;\n    }\n    .ui-popover-animation-enter.ui-popover-animation-enter-active,\n    .ui-popover-animation-appear.ui-popover-animation-appear-active,\n    .ui-popover-animation-leave.ui-popover-animation-leave-active {\n        animation-play-state: running;\n    }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        position: absolute;\n        display: block;\n        width: 10px;\n        height: 10px;\n        transform: rotate(45deg);\n        background: ", ";\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n        &.ui-popover-animation-enter {\n            animation-name: ", ";\n            &.ui-popover-animation-enter-active {\n                animation-name: ", ";\n            }\n        }\n        &.ui-popover-animation-appear {\n            animation-name: ", ";\n            &.ui-popover-animation-appear-active {\n                animation-name: ", ";\n            }\n        }\n        &.ui-popover-animation-leave {\n            animation-name: ", ";\n            &.ui-popover-animation-leave-active {\n                animation-name: ", ";\n            }\n        }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 1;\n        transform-origin: 50% 50%;\n        transform: translateY(0);\n    }\n    100% {\n        opacity: 0;\n        transform-origin: 50% 50%;\n        transform: translateX(10px);\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 0;\n        transform-origin: 50% 50%;\n        transform: translateX(10px);\n    }\n    100% {\n        opacity: 1;\n        transform-origin: 50% 50%;\n        transform: translateY(0);\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 1;\n        transform-origin: 50% 50%;\n        transform: translateY(0);\n    }\n    100% {\n        opacity: 0;\n        transform-origin: 50% 50%;\n        transform: translateX(-10px);\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 0;\n        transform-origin: 50% 50%;\n        transform: translateX(-10px);\n    }\n    100% {\n        opacity: 1;\n        transform-origin: 50% 50%;\n        transform: translateY(0);\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 1;\n        transform-origin: 50% 50%;\n        transform: translateY(0);\n    }\n    100% {\n        opacity: 0;\n        transform-origin: 50% 50%;\n        transform: translateY(10px);\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 0;\n        transform-origin: 50% 50%;\n        transform: translateY(10px);\n    }\n    100% {\n        opacity: 1;\n        transform-origin: 50% 50%;\n        transform: translateY(0);\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 1;\n        transform-origin: 50% 50%;\n        transform: translateY(0);\n    }\n    100% {\n        opacity: 0;\n        transform-origin: 50% 50%;\n        transform: translateY(-10px);\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 0;\n        transform-origin: 50% 50%;\n        transform: translateY(-10px);\n    }\n    100% {\n        opacity: 1;\n        transform-origin: 50% 50%;\n        transform: translateY(0);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var zoomInTop = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
var zoomOutTop = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject2());
var zoomInBottom = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject3());
var zoomOutBottom = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject4());
var zoomInLeft = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject5());
var zoomOutLeft = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject6());
var zoomInRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject7());
var zoomOutRight = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject8());

function animationMixin(animateIn, animateOut) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject9(), animateIn, animateIn, animateIn, animateIn, animateOut, animateOut);
}

function arrowBase(color) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject10(), color);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject11(), arrowBase(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].White), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Coal, arrowBase(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Red), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Red, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White, arrowBase(_config__WEBPACK_IMPORTED_MODULE_1__["Color"].Red), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White, animationMixin(zoomInTop, zoomOutTop), animationMixin(zoomInRight, zoomOutRight), animationMixin(zoomInBottom, zoomOutBottom), animationMixin(zoomInLeft, zoomOutLeft)));

/***/ }),

/***/ "./src/Radio/index.jsx":
/*!*****************************!*\
  !*** ./src/Radio/index.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Radio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Radio/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Radio =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Radio, _React$PureComponent);

  function Radio() {
    _classCallCheck(this, Radio);

    return _possibleConstructorReturn(this, _getPrototypeOf(Radio).apply(this, arguments));
  }

  _createClass(Radio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          large = _this$props.large,
          disabled = _this$props.disabled,
          isChecked = _this$props.isChecked,
          isHighlighted = _this$props.isHighlighted;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
        large: large
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["EmptyCircle"], {
        color: color,
        checked: isChecked,
        highlighted: isHighlighted,
        disabled: disabled
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Circle"], {
        color: color,
        checked: isChecked,
        highlighted: isHighlighted,
        large: large,
        disabled: disabled
      }));
    }
  }]);

  return Radio;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Radio.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['blue', 'green']),
  large: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isHighlighted: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Radio.defaultProps = {
  color: 'blue',
  large: false,
  disabled: false,
  isChecked: false,
  isHighlighted: false
};


/***/ }),

/***/ "./src/Radio/styled.js":
/*!*****************************!*\
  !*** ./src/Radio/styled.js ***!
  \*****************************/
/*! exports provided: Wrapper, EmptyCircle, Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyCircle", function() { return EmptyCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n            width: 10px;\n            height: 10px;\n            margin: -5px 0 0 -5px;\n        "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n            opacity: 1;\n            transform: scale(1);\n        "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        width: 8px;\n        height: 8px;\n        margin: -4px 0 0 -4px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        opacity: 0;\n        transform: scale(0);\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    z-index: 200;\n    position: absolute;\n    box-sizing: border-box;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    border: 1px solid ", ";\n    background-color: ", ";\n    ", ";\n    transition:\n        opacity .6s cubic-bezier(0.23, 1, 0.32, 1),\n        transform .6s cubic-bezier(0.23, 1, 0.32, 1),\n        border-color .12s linear;\n    &::before {\n        position: absolute;\n        content: '';\n        display: block;\n        top: 50%;\n        left: 50%;\n        ", ";\n        border-radius: 50%;\n        background-color: ", ";\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            opacity: 0;\n            transform: scale(0);\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        opacity: 1;\n        transform: scale(1);\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    z-index: 100;\n    position: absolute;\n    box-sizing: border-box;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    border: 1px solid ", ";\n    background-color: ", ";\n    transition:\n        opacity .6s cubic-bezier(0.23, 1, 0.32, 1),\n        transform .6s cubic-bezier(0.23, 1, 0.32, 1),\n        border-color .12s linear;\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-block;\n    top: ", ";\n    width: ", "px;\n    height: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (props) {
  return props.large ? 'auto' : '2px';
}, function (props) {
  return props.large ? 20 : 16;
}, function (props) {
  return props.large ? 20 : 16;
});
var EmptyCircle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs(function (props) {
  var backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White;
  var borderColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale;
  var animationState = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());

  if (props.disabled) {
    backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Zircon;
    borderColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale;
  } else if (props.color === 'blue' && props.highlighted) {
    borderColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue;
  } else if (props.color === 'green' && props.highlighted) {
    borderColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green;
  }

  if (props.checked) {
    animationState = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4());
  }

  return {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    animationState: animationState
  };
})(_templateObject2(), function (props) {
  return props.borderColor;
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.animationState;
});
var Circle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs(function (props) {
  var backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].White;
  var circleColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue;
  var borderColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale;
  var animationState = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6());
  var circleSize = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7());

  if (props.disabled) {
    backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Zircon;
    circleColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray;
    borderColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale;
  } else if (props.color === 'blue' && props.highlighted) {
    borderColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue;
  } else if (props.color === 'green') {
    circleColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green;

    if (props.highlighted) {
      borderColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green;
    }
  }

  if (props.checked) {
    animationState = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8());
  }

  if (props.large) {
    circleSize = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject9());
  }

  return {
    backgroundColor: backgroundColor,
    circleColor: circleColor,
    borderColor: borderColor,
    animationState: animationState,
    circleSize: circleSize
  };
})(_templateObject5(), function (props) {
  return props.borderColor;
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.animationState;
}, function (props) {
  return props.circleSize;
}, function (props) {
  return props.circleColor;
});

/***/ }),

/***/ "./src/RadioButton/index.jsx":
/*!***********************************!*\
  !*** ./src/RadioButton/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Radio */ "./src/Radio/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/RadioButton/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @develop
 */

var RadioButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioButton, _React$Component);

  function RadioButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RadioButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioButton)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isHovered: false
    };

    _this.onCheck = function () {
      var disabled = _this.props.disabled;
      if (!disabled) _this.props.onCheck(_this.props.value);
    };

    _this.onMouseEnter = function (e) {
      var _this$props = _this.props,
          onMouseEnter = _this$props.onMouseEnter,
          disabled = _this$props.disabled;
      if (disabled) return;

      _this.setState({
        isHovered: true
      });

      if (onMouseEnter) onMouseEnter(e);
    };

    _this.onMouseLeave = function (e) {
      var _this$props2 = _this.props,
          onMouseLeave = _this$props2.onMouseLeave,
          disabled = _this$props2.disabled;
      if (disabled) return;

      _this.setState({
        isHovered: false
      });

      if (onMouseLeave) onMouseLeave(e);
    };

    return _this;
  }

  _createClass(RadioButton, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          label = _this$props3.label,
          large = _this$props3.large,
          isChecked = _this$props3.isChecked,
          color = _this$props3.color,
          disabled = _this$props3.disabled,
          dataTestId = _this$props3['data-testid'];
      var isHovered = this.state.isHovered;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], {
        onClick: this.onCheck,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        disabled: disabled,
        "data-testid": dataTestId
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Radio__WEBPACK_IMPORTED_MODULE_2__["default"], {
        color: color,
        large: large,
        disabled: disabled,
        isChecked: isChecked,
        isHighlighted: isHovered
      }), label.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Label"], {
        disabled: disabled
      }, label));
    }
  }]);

  return RadioButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

RadioButton.propTypes = {
  /**
   * Значение кнопки
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /**
   * Текстовая подпись
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Цвет
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['blue', 'green']),

  /**
   * Выбран ли элемент
   */
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Увеличенный размер
   */
  large: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Неактивная
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  'data-testid': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Обработчик выбора
   */
  onCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
RadioButton.defaultProps = {
  label: '',
  isChecked: false,
  large: false,
  disabled: false,
  color: 'blue',
  'data-testid': undefined,
  onCheck: function onCheck() {},
  onMouseEnter: undefined,
  onMouseLeave: undefined
};


/***/ }),

/***/ "./src/RadioButton/styled.js":
/*!***********************************!*\
  !*** ./src/RadioButton/styled.js ***!
  \***********************************/
/*! exports provided: Label, Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    line-height: 50%;\n    white-space: nowrap;\n    pointer-events: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin-left: 12px;\n    font: 400 14px \"Open Sans\", Helvetica, Arial, sans-serif;\n    line-height: 20px;\n    vertical-align: top;\n    white-space: normal;\n    color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (props) {
  return props.disabled ? _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray : _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Coal;
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2(), function (props) {
  return props.disabled ? 'none' : 'inherit';
});

/***/ }),

/***/ "./src/RadioButtonGroup/index.jsx":
/*!****************************************!*\
  !*** ./src/RadioButtonGroup/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RadioButtonGroup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../RadioButton */ "./src/RadioButton/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/RadioButtonGroup/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @develop
 */

var RadioButtonGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RadioButtonGroup, _React$Component);

  function RadioButtonGroup() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RadioButtonGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RadioButtonGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onCheck = function (value) {
      _this.props.onCheck(value);
    };

    return _this;
  }

  _createClass(RadioButtonGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          selected = _this$props.selected,
          options = _this$props.options,
          color = _this$props.color,
          large = _this$props.large,
          disabled = _this$props.disabled,
          dataTestId = _this$props['data-testid'];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["List"], null, options.map(function (_ref) {
        var value = _ref.value,
            label = _ref.label;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Option"], {
          key: value
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RadioButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          value: value,
          label: label,
          isChecked: selected === value,
          onCheck: function onCheck() {
            return _this2.onCheck(value);
          },
          color: color,
          large: large,
          disabled: disabled,
          "data-testid": dataTestId
        }));
      }));
    }
  }]);

  return RadioButtonGroup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

RadioButtonGroup.propTypes = {
  /**
   * Выбранный элемент
   */
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),

  /**
   * Набор данных для построения списка
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })).isRequired,

  /**
   * Цвет радио кнопок
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['blue', 'green']),

  /**
   * Большие радио кнопки
   */
  large: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Неактивный список
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Обработчик выбора элемента
   * @param value - выбранный элемент
   */
  onCheck: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  'data-testid': prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
RadioButtonGroup.defaultProps = {
  selected: null,
  color: 'blue',
  large: false,
  disabled: false,
  onCheck: function onCheck() {},
  'data-testid': undefined
};


/***/ }),

/***/ "./src/RadioButtonGroup/styled.js":
/*!****************************************!*\
  !*** ./src/RadioButtonGroup/styled.js ***!
  \****************************************/
/*! exports provided: List, Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    & + & {\n        margin-top: 12px;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var List = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
var Option = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());

/***/ }),

/***/ "./src/Rating/index.jsx":
/*!******************************!*\
  !*** ./src/Rating/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./src/Icon/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/Rating/styled.js");




var ONE_HUNDRED_PERCENT = 100;
var MAX_STARS = 5;

var Rating = function Rating(props) {
  var value = props.value;
  var width = ONE_HUNDRED_PERCENT / MAX_STARS * value;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["Placeholder"], {
    width: ONE_HUNDRED_PERCENT - width
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["StarHollow"], {
    size: 16
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["StarHollow"], {
    size: 16
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["StarHollow"], {
    size: 16
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["StarHollow"], {
    size: 16
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["StarHollow"], {
    size: 16
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["StarList"], {
    width: width
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["Star"], {
    size: 16
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["Star"], {
    size: 16
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["Star"], {
    size: 16
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["Star"], {
    size: 16
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["Star"], {
    size: 16
  })));
};

Rating.propTypes = {
  /**
   * Количество звезд (от 0 до 5)
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
Rating.defaultProps = {
  value: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Rating);

/***/ }),

/***/ "./src/Rating/styled.js":
/*!******************************!*\
  !*** ./src/Rating/styled.js ***!
  \******************************/
/*! exports provided: Wrapper, Placeholder, StarList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placeholder", function() { return Placeholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarList", function() { return StarList; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    overflow: hidden;\n    display: flex;\n    flex-flow: row;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    justify-content: flex-start;\n    width: ", "%;\n    color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    overflow: hidden;\n    display: flex;\n    flex-flow: row;\n    justify-content: flex-end;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: ", "%;\n    color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-block;\n    width: 80px;\n    height: 16px;\n    line-height: 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
var Placeholder = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2(), function (props) {
  return props.width;
}, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale);
var StarList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject3(), function (props) {
  return props.width;
}, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gold);

/***/ }),

/***/ "./src/RatingNPS/index.jsx":
/*!*********************************!*\
  !*** ./src/RatingNPS/index.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RatingNPS; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/RatingNPS/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * @develop
 */

var RatingNPS =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RatingNPS, _React$Component);

  function RatingNPS() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RatingNPS);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RatingNPS)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      rateValue: _this.props.rateValue || null,
      isRated: false
    };

    _this.onClick = function (index) {
      var getValue = _this.props.getValue;
      var _this$state = _this.state,
          isRated = _this$state.isRated,
          rateValue = _this$state.rateValue;

      _this.setState({
        rateValue: index,
        isRated: rateValue === index ? !isRated : true
      });

      getValue(index);
    };

    return _this;
  }

  _createClass(RatingNPS, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          isRated = _this$state2.isRated,
          rateValue = _this$state2.rateValue;
      var _this$props = this.props,
          minGrade = _this$props.minGrade,
          maxGrade = _this$props.maxGrade,
          countOfBoxes = _this$props.countOfBoxes;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["GradeLine"], null, _toConsumableArray(Array(countOfBoxes)).map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          key: item,
          countOfBoxes: countOfBoxes,
          isRated: isRated,
          rateValue: rateValue,
          onClick: function onClick() {
            return _this2.onClick(index);
          },
          value: index,
          disabled: isRated
        }, index);
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["GrageRange"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, minGrade), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, maxGrade)));
    }
  }]);

  return RatingNPS;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

RatingNPS.propTypes = {
  /**
   * Тултип минимального значения
   */
  minGrade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Тултип максимального значения
   */
  maxGrade: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Колчество боксов
   */
  countOfBoxes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Выбранное значение
   */
  rateValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  getValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
RatingNPS.defaultProps = {
  minGrade: 'Маловероятно',
  maxGrade: 'С большой вероятностью',
  countOfBoxes: 11,
  rateValue: 0
};


/***/ }),

/***/ "./src/RatingNPS/styled.js":
/*!*********************************!*\
  !*** ./src/RatingNPS/styled.js ***!
  \*********************************/
/*! exports provided: Wrapper, GradeLine, Box, GrageRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradeLine", function() { return GradeLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrageRange", function() { return GrageRange; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 14px;\n    font-weight: 400;\n    width: 520px;\n    line-height: 26px;\n    margin-top: 8px;\n    display: -webkit-flex;\n    display: flex;\n    justify-content: space-between;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    margin-right: 8px;\n    border-radius: 4px;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 40px;\n    text-align: center;\n    background: ", ";\n    cursor: pointer;\n    outline: none;\n    transition: all .3s ease;\n     ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        background-color:  ", ";\n        border: 1px solid ", ";\n        color: ", ";\n        &:hover {\n             background: ", ";\n             border: 1px solid  ", ";\n        }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: auto;\n    display: inline-block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: block;\n    margin: 24px 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
var GradeLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());

function beforeRateBox(props) {
  var color = props.value < 9 ? Object(polished__WEBPACK_IMPORTED_MODULE_1__["lighten"])(0.22 * (1 - props.value / props.countOfBoxes), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Green) : _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Green;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), color, color, _config__WEBPACK_IMPORTED_MODULE_2__["Color"].White, _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Blue, _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Blue);
}

function afterRateBox(props) {
  var activeBox = "\n            background-color: ".concat(_config__WEBPACK_IMPORTED_MODULE_2__["Color"].Blue, ";\n            border: 1px solid  ").concat(_config__WEBPACK_IMPORTED_MODULE_2__["Color"].Blue, ";\n            color: ").concat(_config__WEBPACK_IMPORTED_MODULE_2__["Color"].White, ";\n            cursor: default;                \n            ");
  var unactiveBox = "\n            background-color: transparent;\n            border: 1px solid  ".concat(_config__WEBPACK_IMPORTED_MODULE_2__["Color"].DeepGreen, ";\n            color: ").concat(_config__WEBPACK_IMPORTED_MODULE_2__["Color"].DeepGreen, ";\n            cursor: default;\n            ");
  return props.rateValue === props.value ? activeBox : unactiveBox;
}

var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button(_templateObject4(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Green, function (props) {
  return props.isRated ? afterRateBox(props) : beforeRateBox(props);
});
var GrageRange = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject5(), _config__WEBPACK_IMPORTED_MODULE_2__["Color"].DeepGreen);

/***/ }),

/***/ "./src/Ripple/index.jsx":
/*!******************************!*\
  !*** ./src/Ripple/index.jsx ***!
  \******************************/
/*! exports provided: RIPPLE_DURATION, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIPPLE_DURATION", function() { return RIPPLE_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ripple; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Ripple/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RIPPLE_DURATION = 1500;

var Ripple =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Ripple, _React$PureComponent);

  function Ripple() {
    _classCallCheck(this, Ripple);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ripple).apply(this, arguments));
  }

  _createClass(Ripple, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["default"], this.props);
    }
  }]);

  return Ripple;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Ripple.propTypes = {
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['green', 'lightGreen', 'blue', 'lightBlue', 'gold', 'lightGold', 'red', 'lightRed', 'gray', 'pale', 'silver']).isRequired
};


/***/ }),

/***/ "./src/Ripple/styled.js":
/*!******************************!*\
  !*** ./src/Ripple/styled.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    z-index: 100;\n    position: absolute;\n    top: ", "px;\n    left: ", "px;\n    width: 0;\n    padding-bottom: 0;\n    transform: translate(-50%, -50%);\n    opacity: 0;\n    border-radius: 50%;\n    background-color: ", ";\n    animation: ", " 1.5s ease-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 1;\n    }\n    100% {\n        width: 200%;\n        padding-bottom: 200%;\n        opacity: 0;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ripple = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.attrs(function (props) {
  var backgroundColor;

  switch (props.color) {
    case 'blue':
      backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue;
      break;

    case 'green':
      backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green;
      break;

    case 'gold':
      backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gold;
      break;

    case 'red':
      backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Red;
      break;

    case 'lightBlue':
      backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].LightBlue;
      break;

    case 'lightGreen':
      backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].LightGreen;
      break;

    case 'lightGold':
      backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].LightGold;
      break;

    case 'lightRed':
      backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].LightRed;
      break;

    case 'gray':
      backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray;
      break;

    case 'pale':
      backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale;
      break;

    case 'silver':
      backgroundColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Silver;
      break;

    default:
      backgroundColor = 'transparent';
  }

  return {
    backgroundColor: backgroundColor
  };
})(_templateObject2(), function (props) {
  return props.top;
}, function (props) {
  return props.left;
}, function (props) {
  return props.backgroundColor;
}, ripple));

/***/ }),

/***/ "./src/Select/components/Option/index.jsx":
/*!************************************************!*\
  !*** ./src/Select/components/Option/index.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Option; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Select/components/Option/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Option =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Option, _React$PureComponent);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          hasCheckbox = _this$props.hasCheckbox,
          isChecked = _this$props.isChecked,
          isSelected = _this$props.isSelected,
          onSelect = _this$props.onSelect;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
        selected: isSelected,
        onClick: onSelect
      }, hasCheckbox ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["StyledCheckbox"], {
        label: label,
        isChecked: isChecked
      }) : label);
    }
  }]);

  return Option;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Option.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]).isRequired,
  hasCheckbox: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
Option.defaultProps = {
  hasCheckbox: false,
  isChecked: false,
  isSelected: false,
  onSelect: function onSelect() {}
};


/***/ }),

/***/ "./src/Select/components/Option/styled.js":
/*!************************************************!*\
  !*** ./src/Select/components/Option/styled.js ***!
  \************************************************/
/*! exports provided: Wrapper, StyledCheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledCheckbox", function() { return StyledCheckbox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Checkbox */ "./src/Checkbox/index.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./src/config.js");
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 6px 12px;\n    font: 400 14px \"Open Sans\", Helvetica, Arial, sans-serif;\n    line-height: 20px;\n    cursor: pointer;\n    background-color: ", ";\n    transition: background-color .12s linear;\n    &:hover {\n        background-color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (props) {
  return props.selected ? '#e4edf7' : _config__WEBPACK_IMPORTED_MODULE_2__["Color"].White;
}, _config__WEBPACK_IMPORTED_MODULE_2__["Color"].Zircon);
var StyledCheckbox = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Checkbox__WEBPACK_IMPORTED_MODULE_1__["default"])(_templateObject2());

/***/ }),

/***/ "./src/Select/index.jsx":
/*!******************************!*\
  !*** ./src/Select/index.jsx ***!
  \******************************/
/*! exports provided: VISIBLE_ITEMS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISIBLE_ITEMS", function() { return VISIBLE_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Select; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./src/Icon/index.jsx");
/* harmony import */ var _components_Option__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Option */ "./src/Select/components/Option/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./src/Select/styled.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/**
 * @develop
 */

var VISIBLE_ITEMS = 1;

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      searchLabel: '',
      isOpened: false
    };

    _this.onRefNode = function (node) {
      _this.node = node;
    };

    _this.onClickOuter = function (e) {
      if (_this.node && !_this.node.contains(e.target)) {
        _this.closeMenu();
      }
    };

    _this.onToggle = function () {
      var disabled = _this.props.disabled;
      var isOpened = _this.state.isOpened;
      if (disabled) return;

      _this.setState({
        isOpened: !isOpened
      });
    };

    _this.onSelect = function (_value) {
      var _this$props = _this.props,
          value = _this$props.value,
          multiple = _this$props.multiple,
          onChange = _this$props.onChange;

      if (multiple) {
        var selected = [];

        if (value === null) {
          selected = [_value];
        } else {
          var isSelected = value.indexOf(_value) >= 0;

          if (isSelected) {
            value.splice(value.indexOf(_value), 1);
          }

          selected = isSelected ? value : [].concat(_toConsumableArray(value), [_value]);
        }

        onChange(selected);
      } else {
        _this.closeMenu();

        onChange(_value);
      }
    };

    _this.onChangeSearchLabel = function (searchLabel) {
      _this.setState({
        searchLabel: searchLabel
      });
    };

    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onClickOuter);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onClickOuter);
    }
  }, {
    key: "getText",
    value: function getText() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          placeholder = _this$props2.placeholder,
          options = _this$props2.options,
          renderSelected = _this$props2.renderSelected;
      var text = placeholder;

      if (value !== null && value.length > 0) {
        if (_typeof(value) === 'object') {
          if (value.length === VISIBLE_ITEMS) {
            text = options.find(function (opt) {
              return opt.value === value[0];
            }).label;
          } else {
            text = "\u0412\u044B\u0431\u0440\u0430\u043D\u043E ".concat(value.length, " \u043F\u0443\u043D\u043A\u0442\u043E\u0432");
          }
        } else {
          var selected = options.find(function (opt) {
            return opt.value === value;
          });

          if (renderSelected) {
            text = renderSelected(selected);
          } else {
            text = selected.label;
          }
        }
      }

      return text;
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var _this$props3 = this.props,
          options = _this$props3.options,
          searchable = _this$props3.searchable;
      var searchLabel = this.state.searchLabel;

      if (searchable) {
        return options.filter(function (opt) {
          return opt.label.toLowerCase().indexOf(searchLabel.toLowerCase()) >= 0;
        });
      }

      return options;
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.setState({
        isOpened: false,
        searchLabel: ''
      });
    }
  }, {
    key: "renderOption",
    value: function renderOption(option) {
      var renderOption = this.props.renderOption;

      if (renderOption) {
        return renderOption(option);
      }

      return option.label;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          localValue = _this$props4.value,
          multiple = _this$props4.multiple,
          searchable = _this$props4.searchable,
          maxHeight = _this$props4.maxHeight,
          tabIndex = _this$props4.tabIndex,
          disabled = _this$props4.disabled,
          className = _this$props4.className,
          other = _objectWithoutProperties(_this$props4, ["value", "multiple", "searchable", "maxHeight", "tabIndex", "disabled", "className"]);

      var _this$state = this.state,
          isOpened = _this$state.isOpened,
          searchLabel = _this$state.searchLabel;
      var options = this.getOptions();
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
        disabled: disabled,
        className: className,
        ref: this.onRefNode,
        tabIndex: tabIndex
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["Field"], _extends({
        opened: isOpened,
        disabled: disabled,
        onClick: this.onToggle
      }, other), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["Text"], {
        disabled: disabled
      }, this.getText()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["Arrow"], {
        size: 16,
        opened: isOpened,
        disabled: disabled
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["OptionList"] // eslint-disable-next-line react/no-string-refs
      , {
        ref: "options",
        maxHeight: maxHeight,
        opened: isOpened
      }, searchable && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["Search"], {
        placeholder: "\u0427\u0442\u043E \u0438\u0449\u0435\u043C?",
        icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["Loop"], null),
        boundless: true,
        value: searchLabel,
        onChange: this.onChangeSearchLabel
      }), options.length > 0 ? options.map(function (_ref, index) {
        var value = _ref.value;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Option__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: value,
          label: _this2.renderOption(options[index]),
          hasCheckbox: multiple,
          isChecked: multiple && localValue !== null && localValue.indexOf(value) >= 0,
          isSelected: !multiple && localValue === value,
          onSelect: function onSelect() {
            return _this2.onSelect(value);
          }
        });
      }) // eslint-disable-next-line react/no-string-refs
      : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["Result"], {
        ref: "empty"
      }, "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")));
    }
  }]);

  return Select;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Select.propTypes = {
  /**
   * Варианты для выбора
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })).isRequired,

  /**
   * Выбранное значение или массив значений (если включен multiple)
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)]),

  /**
   * Текст заглушка
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Можно выбрать несколько значений
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Можно филтровать значения в списке
   */
  searchable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Максимальная высота выпадающего списка
   */
  maxHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Целое число, определяющее должен ли данный элемент учавствовать
   * в последовательной навигации по всей странице
   * с помощью клавиатуры, в каком порядке.
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Неактивный элемент
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Собственная отрисовка выбранного элемента
   */
  renderSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Собственная отрисовка контента для каждого элемента списка
   */
  renderOption: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * Обработчик изменения выбора
   * @param {*} value - выбранное значение или массив значений (если включен multiple)
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,

  /**
   * CSS класс
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array])
};
Select.defaultProps = {
  value: null,
  placeholder: '',
  multiple: false,
  searchable: false,
  maxHeight: 250,
  tabIndex: 0,
  disabled: false,
  className: '',
  renderSelected: undefined,
  renderOption: undefined,
  onChange: function onChange() {}
};


/***/ }),

/***/ "./src/Select/styled.js":
/*!******************************!*\
  !*** ./src/Select/styled.js ***!
  \******************************/
/*! exports provided: Wrapper, Field, Text, Arrow, OptionList, Search, Result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionList", function() { return OptionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return Result; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon */ "./src/Icon/index.jsx");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Input */ "./src/Input/index.jsx");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    padding: 6px 12px;\n    font: 400 14px \"Open Sans\", Helvetica, Arial, sans-serif;\n    line-height: 20px;\n    cursor: default;\n    color: ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    border-bottom: 1px solid ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n            opacity: 1;\n            transform: translateY(0) scale(1);\n            pointer-events: inherit;\n        "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        opacity: 0;\n        pointer-events: none;\n        transform: translateY(-14px) scale(.8);\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    overflow: auto;\n    z-index: 1000;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 44px;\n    max-height: ", "px;\n    ", ";\n    transform-origin: center top 0;\n    border: 1px solid ", ";\n    border-radius: 2px;\n    background-color: ", ";\n    box-shadow: 0 2px 4px #e4edf7;\n    transition:\n        opacity .45s cubic-bezier(0.23, 1, 0.32, 1),\n        transform .45s cubic-bezier(0.23, 1, 0.32, 1);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 12px;\n    top: 50%;\n    margin-top: -8px;\n    fill: ", ";\n    transform: rotate(", "deg);\n    transition: transform .45s cubic-bezier(0.23, 1, 0.32, 1);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n    white-space: nowrap;\n    font: 400 14px \"Open Sans\", Helvetica, Arial, sans-serif;\n    line-height: 16px;\n    color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    box-sizing: border-box;\n    padding: 11px 40px 11px 12px;\n    border: 1px solid ", ";\n    background-color: ", ";\n    border-radius: 2px;\n    line-height: 16px;\n    cursor: pointer;\n    transition: border-color .12s linear, box-shadow .12s linear;\n    &:hover {\n        border-color: ", ";\n    }\n    ", ":focus & {\n        box-shadow: 0 2px 4px #e4edf7;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    pointer-events: ", ";\n    &:focus {\n        outline: none;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (props) {
  return props.disabled ? 'none' : 'inherit';
});
var Field = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs(function (props) {
  var borderColor = _config__WEBPACK_IMPORTED_MODULE_3__["Color"].Pale;
  var backgroundColor = _config__WEBPACK_IMPORTED_MODULE_3__["Color"].White;

  if (props.opened) {
    borderColor = _config__WEBPACK_IMPORTED_MODULE_3__["Color"].Blue;
  }

  if (props.disabled) {
    backgroundColor = _config__WEBPACK_IMPORTED_MODULE_3__["Color"].Silver;
  }

  return {
    borderColor: borderColor,
    backgroundColor: backgroundColor
  };
})(_templateObject2(), function (props) {
  return props.borderColor;
}, function (props) {
  return props.backgroundColor;
}, _config__WEBPACK_IMPORTED_MODULE_3__["Color"].Blue, Wrapper);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject3(), function (props) {
  return props.disabled ? _config__WEBPACK_IMPORTED_MODULE_3__["Color"].Gray : _config__WEBPACK_IMPORTED_MODULE_3__["Color"].Coal;
});
var Arrow = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Icon__WEBPACK_IMPORTED_MODULE_1__["ArrowDown"])(_templateObject4(), function (props) {
  return props.disabled ? _config__WEBPACK_IMPORTED_MODULE_3__["Color"].Gray : _config__WEBPACK_IMPORTED_MODULE_3__["Color"].Blue;
}, function (props) {
  return props.opened ? 180 : 0;
});
var OptionList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs(function (props) {
  var animationState = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6());

  if (props.opened) {
    animationState = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7());
  }

  return {
    animationState: animationState
  };
})(_templateObject5(), function (props) {
  return props.maxHeight;
}, function (props) {
  return props.animationState;
}, _config__WEBPACK_IMPORTED_MODULE_3__["Color"].Pale, _config__WEBPACK_IMPORTED_MODULE_3__["Color"].White);
var Search = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Input__WEBPACK_IMPORTED_MODULE_2__["default"])(_templateObject8(), _config__WEBPACK_IMPORTED_MODULE_3__["Color"].Pale);
var Result = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject9(), _config__WEBPACK_IMPORTED_MODULE_3__["Color"].Gray);

/***/ }),

/***/ "./src/SocialButton/index.jsx":
/*!************************************!*\
  !*** ./src/SocialButton/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SocialButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon */ "./src/Icon/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./src/SocialButton/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






function getIcon(type) {
  switch (type) {
    case 'tw':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["TwitterHollow"], null);

    case 'gp':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["GooglePlusHollow"], null);

    case 'tg':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["TelegramHollow"], null);

    case 'wa':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["WhatsappHollow"], null);

    case 'vk':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["VkontakteHollow"], null);

    case 'ok':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["OdnoklassnikiHollow"], null);

    case 'fb':
    default:
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["FacebookHollow"], null);
  }
}

var SocialButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SocialButton, _React$Component);

  function SocialButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SocialButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SocialButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onClick = function (e) {
      var _this$props = _this.props,
          shareUrl = _this$props.shareUrl,
          windowWidth = _this$props.windowWidth,
          windowHeight = _this$props.windowHeight;
      window.open(shareUrl, '', "\n            menubar=no,\n            toolbar=no,\n            resizable=yes,\n            scrollbars=yes,\n            height=".concat(windowHeight, ",\n            width=").concat(windowWidth, "\n            "));
      e.preventDefault();
    };

    return _this;
  }

  _createClass(SocialButton, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          shareUrl = _this$props2.shareUrl,
          size = _this$props2.size;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: size,
        type: type,
        href: shareUrl,
        onClick: this.onClick
      }, getIcon(type));
    }
  }]);

  return SocialButton;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

SocialButton.propTypes = {
  /**
   * Тип иконки
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['fb', 'tw', 'gp', 'tg', 'wa', 'vk', 'ok']).isRequired,

  /**
   * Share-ссылка социальной сети
   */
  shareUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Размер иконки
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['small', 'large']),

  /**
   * Ширина создаваемого окна
   */
  windowWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,

  /**
   * Высота создаваемого окна
   */
  windowHeight: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
SocialButton.defaultProps = {
  shareUrl: '',
  size: 'large',
  windowWidth: 800,
  windowHeight: 600
};


/***/ }),

/***/ "./src/SocialButton/styled.js":
/*!************************************!*\
  !*** ./src/SocialButton/styled.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            width: 40px;\n            height: 40px;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        width: 48px;\n        height: 48px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    border-radius: 5px;\n    transition: color .12s ease-in-out;\n    overflow: hidden;\n    color: ", ";\n    ", "\n    \n    &:hover {\n        color: ", ";\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.attrs(function (props) {
  var size = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
  var color;
  var hoverColor;

  if (props.size === 'small') {
    size = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
  }

  switch (props.type) {
    case 'fb':
      color = '#5977ba';
      hoverColor = '#3a548c';
      break;

    case 'tw':
      color = '#27b3f1';
      hoverColor = '#0c88bf';
      break;

    case 'gp':
      color = '#e56042';
      hoverColor = '#c0391a';
      break;

    case 'tg':
      color = '#2ca5e0';
      hoverColor = '#1978a7';
      break;

    case 'wa':
      color = '#42c850';
      hoverColor = '#2b9336';
      break;

    case 'vk':
      color = '#6794c8';
      hoverColor = '#3c6da6';
      break;

    case 'ok':
      color = '#f18d3e';
      hoverColor = '#d3660f';
      break;

    default:
      color = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray;
      hoverColor = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Coal;
  }

  return {
    size: size,
    color: color,
    hoverColor: hoverColor
  };
})(_templateObject(), function (props) {
  return props.color;
}, function (props) {
  return props.size;
}, function (props) {
  return props.hoverColor;
}));

/***/ }),

/***/ "./src/SocialButtonGroup/index.jsx":
/*!*****************************************!*\
  !*** ./src/SocialButtonGroup/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/social */ "./src/lib/social.js");
/* harmony import */ var _SocialButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SocialButton */ "./src/SocialButton/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styled */ "./src/SocialButtonGroup/styled.js");






var SocialButtonGroup = function SocialButtonGroup(props) {
  var items = props.items,
      size = props.size,
      shareUrl = props.shareUrl;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_4__["default"], null, items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item,
      shareUrl: Object(_lib_social__WEBPACK_IMPORTED_MODULE_2__["getShareLink"])(item, shareUrl),
      size: size,
      type: item
    });
  }));
};

SocialButtonGroup.propTypes = {
  /**
   * Список типов кнопок
   */
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string).isRequired,

  /**
   *  Размер иконок
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['small', 'large']),

  /**
   * Referral-ссылка пользователя
   */
  shareUrl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
SocialButtonGroup.defaultProps = {
  size: 'large'
};
/* harmony default export */ __webpack_exports__["default"] = (SocialButtonGroup);

/***/ }),

/***/ "./src/SocialButtonGroup/styled.js":
/*!*****************************************!*\
  !*** ./src/SocialButtonGroup/styled.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject()));

/***/ }),

/***/ "./src/Spinner/index.jsx":
/*!*******************************!*\
  !*** ./src/Spinner/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled */ "./src/Spinner/styled.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Circle"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Circle"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_1__["Circle"], null));
});

/***/ }),

/***/ "./src/Spinner/styled.js":
/*!*******************************!*\
  !*** ./src/Spinner/styled.js ***!
  \*******************************/
/*! exports provided: Wrapper, Circle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: 8px;\n    height: 8px;\n    border-radius: 100%;\n    background-color: ", ";\n    opacity: 0;\n    &:nth-child(1) {\n        animation: ", " 1s ease-in-out infinite;\n    }\n    &:nth-child(2) {\n        animation: ", " 1s ease-in-out 0.33s infinite;\n    }\n    &:nth-child(3) {\n        animation: ", " 1s ease-in-out 0.66s infinite;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0%, 100%{ opacity: 0 }\n    60% { opacity: 1 }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 34px;\n    max-width: 34px;\n    min-width: 34px;\n    height: 8px;\n    max-height: 8px;\n    min-height: 8px;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
var blink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject2());
var Circle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject3(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue, blink, blink, blink);

/***/ }),

/***/ "./src/Status/index.jsx":
/*!******************************!*\
  !*** ./src/Status/index.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Status; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Status/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Status =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Status, _React$PureComponent);

  function Status() {
    _classCallCheck(this, Status);

    return _possibleConstructorReturn(this, _getPrototypeOf(Status).apply(this, arguments));
  }

  _createClass(Status, [{
    key: "render",
    value: function render() {
      var online = this.props.online;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["default"], {
        online: online
      }, online ? 'Онлайн' : 'Офлайн');
    }
  }]);

  return Status;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Status.propTypes = {
  /**
   * Онлайн
   */
  online: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Status.defaultProps = {
  online: false
};


/***/ }),

/***/ "./src/Status/styled.js":
/*!******************************!*\
  !*** ./src/Status/styled.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    color: ", ";\n    font-size: inherit;\n    &::before {\n        content: '';\n        position: relative;\n        display: inline-block;\n        top: -1px;\n        width: 8px;\n        height: 8px;\n        margin-right: 5px;\n        background: ", ";\n        border-radius: 50%;\n        vertical-align: middle;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.attrs(function (props) {
  var color = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray;
  var background = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale;

  if (props.online) {
    color = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Coal;
    background = _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Green;
  }

  return {
    color: color,
    background: background
  };
})(_templateObject(), function (props) {
  return props.color;
}, function (props) {
  return props.background;
}));

/***/ }),

/***/ "./src/SvgIcon/index.jsx":
/*!*******************************!*\
  !*** ./src/SvgIcon/index.jsx ***!
  \*******************************/
/*! exports provided: sizes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SvgIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/SvgIcon/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Обертка для любой svg иконки
 * @version 1.0.0
 */

var sizes = {
  AUTO: 'auto',
  SIZE_8: 8,
  SIZE_12: 12,
  SIZE_16: 16,
  SIZE_20: 20,
  SIZE_24: 24,
  SIZE_32: 32
};

var SvgIcon =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SvgIcon, _React$PureComponent);

  function SvgIcon() {
    _classCallCheck(this, SvgIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(SvgIcon).apply(this, arguments));
  }

  _createClass(SvgIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["children"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
        focusable: "false",
        "aria-hidden": "true"
      }, other), children);
    }
  }]);

  return SvgIcon;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

SvgIcon.propTypes = {
  /**
   * SVG разметка
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /**
   * Определяет видимую область
   * ([стандартный атрибут SVG](https://developer.mozilla.org/ru/docs/Web/SVG/Attribute/viewBox))
   */
  viewBox: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * Размер иконки
   * - auto (заполняет все пространство контейнера)
   * - 8, 12, 16, 20, 24, 32 (наиболее используемые размеры)
   *
   * Исключения задаются через CSS стили
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([sizes.AUTO, sizes.SIZE_8, sizes.SIZE_12, sizes.SIZE_16, sizes.SIZE_20, sizes.SIZE_24, sizes.SIZE_32]),

  /**
   * Кастомные стили
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape()
};
SvgIcon.defaultProps = {
  style: {},
  size: sizes.AUTO
};


/***/ }),

/***/ "./src/SvgIcon/styled.js":
/*!*******************************!*\
  !*** ./src/SvgIcon/styled.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    fill: currentColor;\n    stroke: currentColor;\n    stroke-width: 0;\n    user-select: none;\n    flex-shrink: 0;\n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        width: 100%;\n        height: 100%;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            width: ", "px;\n            height: ", "px;\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var getSize = function getSize(props) {
  if (typeof props.size === 'number') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), props.size, props.size);
  }

  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
};

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.svg(_templateObject3(), getSize));

/***/ }),

/***/ "./src/Tabs/index.jsx":
/*!****************************!*\
  !*** ./src/Tabs/index.jsx ***!
  \****************************/
/*! exports provided: default, TabPane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-tabs */ "rc-tabs");
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-tabs/lib/ScrollableInkTabBar */ "rc-tabs/lib/ScrollableInkTabBar");
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon */ "./src/Icon/index.jsx");
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled */ "./src/Tabs/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return rc_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPane"]; });

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onRefRoot = function (root) {
      _this.rootNode = root; // eslint-disable-next-line react/no-find-dom-node

      var rootDOMNode = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(_this.rootNode);

      if (rootDOMNode !== null) {
        var prevButton = rootDOMNode.querySelector('.tabs-tab-prev');
        var nextButton = rootDOMNode.querySelector('.tabs-tab-next');
        prevButton.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_6__["ArrowLeft"], {
          className: "tabs-prevIcon"
        }));
        nextButton.innerHTML = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_6__["ArrowRight"], {
          className: "tabs-nextIcon"
        }));
      }
    };

    _this.handleChange = function (activeKey) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(activeKey);
      }
    };

    return _this;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          tabPosition = _this$props.tabPosition,
          children = _this$props.children,
          tabBarStyle = _this$props.tabBarStyle,
          onTabClick = _this$props.onTabClick,
          onPrevClick = _this$props.onPrevClick,
          onNextClick = _this$props.onNextClick,
          size = _this$props.size,
          animated = _this$props.animated,
          destroyInactiveTabPane = _this$props.destroyInactiveTabPane;
      var classes = [];
      if (size === 'large') classes.push('tabs-large');
      if (!animated) classes.push('tabs-no-animation');
      if (className.length > 0) classes.push(className);

      var renderTabBar = function renderTabBar() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_5___default.a, {
          inkBarAnimated: true,
          onTabClick: onTabClick,
          onPrevClick: onPrevClick,
          onNextClick: onNextClick,
          style: tabBarStyle
        });
      };

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({}, this.props, {
        prefixCls: "tabs",
        className: classes.join(' '),
        hideAdd: true,
        tabBarPosition: tabPosition,
        destroyInactiveTabPane: destroyInactiveTabPane,
        renderTabBar: renderTabBar,
        renderTabContent: function renderTabContent() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_4__["TabContent"], {
            animated: animated,
            animatedWithMargin: true
          });
        },
        onChange: this.handleChange,
        ref: this.onRefRoot
      }), children), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Tabs.TabPane = rc_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPane"];
Tabs.propTypes = {
  /**
   * Ключ активной вкладки
   */
  activeKey: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Активная вкладка по умолчанию
   */
  defaultActiveKey: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Обработчик смены вкладки
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Обработчик клика по вкладке
   */
  onTabClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Обработчик клика на кнопку прокрутки влево
   */
  onPrevClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Обработчик клика на кнопку прокрутки вправо
   */
  onNextClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Стиль бегунка по активной вкладкой
   */
  tabBarStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape(),

  /**
   * Размер вкладок
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'large']),

  /**
   * Анимация при переключении
   */
  animated: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Стиль обертки
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape(),

  /**
   * Класс обертки
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Анигилировать неактивную вкладку при смене
   */
  destroyInactiveTabPane: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  tabPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node
};
Tabs.defaultProps = {
  activeKey: '',
  defaultActiveKey: '',
  onChange: function onChange() {},
  onTabClick: function onTabClick() {},
  onPrevClick: function onPrevClick() {},
  onNextClick: function onNextClick() {},
  tabBarStyle: {},
  size: 'default',
  style: {},
  className: '',
  animated: true,
  destroyInactiveTabPane: false,
  tabPosition: 'top',
  children: null
};



/***/ }),

/***/ "./src/Tabs/styled.js":
/*!****************************!*\
  !*** ./src/Tabs/styled.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/config.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    .tabs {\n        font: 400 13px 'Open Sans', sans-serif;\n        line-height: 1.5;\n        color: ", ";\n        box-sizing: border-box;\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        position: relative;\n        overflow: hidden;\n        zoom: 1;\n    }\n    .tabs-bar {\n        border-bottom: 1px solid #e8e8e8;\n        outline: none;\n    }\n    .tabs-nav {\n        position: relative;\n        box-sizing: border-box;\n        display: flex;\n        padding-left: 0;\n        margin: 0;\n        list-style: none;\n        transition: transform .3s cubic-bezier(.645,.045,.355,1);\n    }\n    .tabs-nav-wrap {\n        overflow: hidden;\n        margin-bottom: -1px;\n    }\n    .tabs-nav-scroll {\n        overflow: hidden;\n        white-space: nowrap;\n    }\n    .tabs-nav-container {\n        overflow: hidden;\n        font-size: 14px;\n        line-height: 1.5;\n        box-sizing: border-box;\n        position: relative;\n        white-space: nowrap;\n        margin-bottom: -1px;\n        zoom: 1;\n    }\n    .tabs-nav-container-scrolling {\n        padding-left: 32px;\n        padding-right: 32px;\n    }\n    .tabs-nav > div {\n        display: flex;\n    }\n    .tabs-tab {\n        position: relative;\n        box-sizing: border-box;\n        display: flex;\n        align-items: center;\n        height: 60px;\n        padding: 0 20px;\n        color: ", ";\n        font-weight: 600;\n        cursor: pointer;\n        text-decoration: none;\n        transition: color .3s cubic-bezier(.645,.045,.355,1);\n    }\n    .tabs-tab-active {\n        color: ", ";\n    }\n    .tabs-tab-next, .tabs-tab-prev {\n        position: absolute;\n        z-index: 2;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 0;\n        height: 100%;\n        border: 0;\n        background-color: transparent;\n        cursor: pointer;\n        text-align: center;\n        color: rgba(0,0,0,.45);\n        transition:\n                width .3s cubic-bezier(.645,.045,.355,1),\n                opacity .3s cubic-bezier(.645,.045,.355,1),\n                color .3s cubic-bezier(.645,.045,.355,1);\n        opacity: 0;\n        user-select: none;\n        pointer-events: none;\n        &:hover {\n            color: ", ";\n        }\n    }\n    .tabs-tab-prev {\n        left: 0;\n    }\n    .tabs-tab-next {\n        right: 0;\n    }\n    .tabs-tab-arrow-show {\n        opacity: 1;\n        width: 32px;\n        height: 100%;\n        pointer-events: auto;\n    }\n    .tabs-tab-btn-disabled {\n        color: ", " !important;\n        cursor: not-allowed;\n    }\n    .tabs-ink-bar {\n        z-index: 1;\n        position: absolute;\n        left: 0;\n        bottom: 1px;\n        box-sizing: border-box;\n        height: 3px;\n        background-color: ", ";\n        transform-origin: 0 0;\n    }\n    .tabs-ink-bar-animated {\n        transition:\n                transform .3s cubic-bezier(.645,.045,.355,1),\n                width .3s cubic-bezier(.645,.045,.355,1);\n    }\n    .tabs-content {\n        width: 100%;\n    }\n    .tabs-content-animated {\n        display: flex;\n        flex-direction: row;\n        will-change: margin-left;\n        transition: margin-left .3s cubic-bezier(.645,.045,.355,1);\n    }\n    .tabs-tabpane {\n        flex-shrink: 0;\n        width: 100%;\n        transition: opacity .45s;\n        opacity: 1;\n    }\n    \n    .tabs-large .tabs-tab {\n        font-size: 16px;\n    }\n    \n    .tabs-no-animation .tabs-tabpane-inactive {\n        display: none;\n    }\n    \n    .tabs-prevIcon, .tabs-nextIcon {\n        width: 16px;\n        height: 16px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject(), _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Coal, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Gray, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Coal, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Pale, _config__WEBPACK_IMPORTED_MODULE_1__["Color"].Blue));

/***/ }),

/***/ "./src/Typography/H/index.jsx":
/*!************************************!*\
  !*** ./src/Typography/H/index.jsx ***!
  \************************************/
/*! exports provided: sizes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return H; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Typography/H/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * General component description in JSDoc format. Markdown is *supported*.
 * @develop
 */

var sizes = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6
};

var H =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(H, _React$PureComponent);

  function H() {
    _classCallCheck(this, H);

    return _possibleConstructorReturn(this, _getPrototypeOf(H).apply(this, arguments));
  }

  _createClass(H, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["children"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["default"], other, children);
    }
  }]);

  return H;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

H.propTypes = {
  /**
   * Текст заголовка
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /**
   * Размер
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([sizes.ONE, sizes.TWO, sizes.THREE, sizes.FOUR, sizes.FIVE, sizes.SIX])
};
H.defaultProps = {
  size: sizes.ONE
};


/***/ }),

/***/ "./src/Typography/H/styled.js":
/*!************************************!*\
  !*** ./src/Typography/H/styled.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./src/config.js");
function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    font-family: \"Open Sans\", sans-serif;\n    color: inherit;\n    ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        font-size: 24px;\n        line-height: 32px;\n        font-weight: 600;\n        &:empty {\n            ", "\n        }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            font-size: 13px;\n            line-height: 20px;\n            font-weight: 400;\n            &:empty {\n                ", "\n            }\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            font-size: 14px;\n            line-height: 20px;\n            font-weight: 600;\n            &:empty {\n                ", "\n            }\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            font-size: 16px;\n            line-height: 24px;\n            font-weight: 600;\n            &:empty {\n                ", "\n            }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            font-size: 18px;\n            line-height: 28px;\n            font-weight: 400;\n            &:empty {\n                ", "\n            }\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            font-size: 24px;\n            line-height: 32px;\n            font-weight: 400;\n            &:empty {\n                ", "\n            }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var getSize = function getSize(props) {
  if (props.size === 2) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject(), Object(_config__WEBPACK_IMPORTED_MODULE_1__["skeleton"])('40%', '24px', 'pale'));
  }

  if (props.size === 3) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), Object(_config__WEBPACK_IMPORTED_MODULE_1__["skeleton"])('40%', '18px', 'pale'));
  }

  if (props.size === 4) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), Object(_config__WEBPACK_IMPORTED_MODULE_1__["skeleton"])('40%', '16px', 'pale'));
  }

  if (props.size === 5) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4(), Object(_config__WEBPACK_IMPORTED_MODULE_1__["skeleton"])('40%', '14px', 'pale'));
  }

  if (props.size === 6) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5(), Object(_config__WEBPACK_IMPORTED_MODULE_1__["skeleton"])('40%', '13px', 'pale'));
  }

  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6(), Object(_config__WEBPACK_IMPORTED_MODULE_1__["skeleton"])('40%', '24px', 'pale'));
};

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject7(), getSize));

/***/ }),

/***/ "./src/Typography/P/index.jsx":
/*!************************************!*\
  !*** ./src/Typography/P/index.jsx ***!
  \************************************/
/*! exports provided: sizes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return P; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Typography/P/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * General component description in JSDoc format. Markdown is *supported*.
 * @develop
 */

var sizes = {
  ONE: 1,
  TWO: 2,
  THREE: 3
};

var P =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(P, _React$PureComponent);

  function P() {
    _classCallCheck(this, P);

    return _possibleConstructorReturn(this, _getPrototypeOf(P).apply(this, arguments));
  }

  _createClass(P, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["children"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["default"], other, children);
    }
  }]);

  return P;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

P.propTypes = {
  /**
   * Контент параграфа
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,

  /**
   * Размер текста
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([sizes.ONE, sizes.TWO, sizes.THREE])
};
P.defaultProps = {
  size: sizes.ONE
};


/***/ }),

/***/ "./src/Typography/P/styled.js":
/*!************************************!*\
  !*** ./src/Typography/P/styled.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    font-family: \"Open Sans\", sans-serif;\n    word-wrap: break-word;\n    color: ", ";\n    ", "\n    \n    & + & {\n        margin-top: 12px;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        font-size: 14px;\n        line-height: 24px;\n        font-weight: 400;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            font-size: 12px;\n            line-height: 20px;\n            font-weight: 400;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            font-size: 13px;\n            line-height: 20px;\n            font-weight: 400;\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var getSize = function getSize(props) {
  if (props.size === 2) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject());
  }

  if (props.size === 3) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
  }

  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
};

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p(_templateObject4(), function (props) {
  return props.light ? '#9c9c9c' : 'inherit';
}, getSize));

/***/ }),

/***/ "./src/Typography/Small/index.jsx":
/*!****************************************!*\
  !*** ./src/Typography/Small/index.jsx ***!
  \****************************************/
/*! exports provided: sizes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Small; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./src/Typography/Small/styled.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * General component description in JSDoc format. Markdown is *supported*.
 * @develop
 */

var sizes = {
  ONE: 1,
  TWO: 2,
  THREE: 3
};

var Small =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Small, _React$PureComponent);

  function Small() {
    _classCallCheck(this, Small);

    return _possibleConstructorReturn(this, _getPrototypeOf(Small).apply(this, arguments));
  }

  _createClass(Small, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["children"]);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["default"], other, children);
    }
  }]);

  return Small;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

Small.propTypes = {
  /**
   * Текст
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * Размер текста
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([sizes.ONE, sizes.TWO, sizes.THREE])
};
Small.defaultProps = {
  size: sizes.ONE
};


/***/ }),

/***/ "./src/Typography/Small/styled.js":
/*!****************************************!*\
  !*** ./src/Typography/Small/styled.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-family: \"Open Sans\", sans-serif;\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        font-size: 12px;\n        line-height: 20px;\n        font-weight: 600;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            font-size: 10px;\n            line-height: 16px;\n            font-weight: 600;\n            text-transform: uppercase;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            font-size: 11px;\n            line-height: 16px;\n            font-weight: 600;\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var getSize = function getSize(props) {
  if (props.size === 2) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject());
  }

  if (props.size === 3) {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2());
  }

  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
};

/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.small(_templateObject4(), getSize));

/***/ }),

/***/ "./src/Typography/index.js":
/*!*********************************!*\
  !*** ./src/Typography/index.js ***!
  \*********************************/
/*! exports provided: H, P, Small */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _H__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./H */ "./src/Typography/H/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H", function() { return _H__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _P__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./P */ "./src/Typography/P/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _P__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Small__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Small */ "./src/Typography/Small/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Small", function() { return _Small__WEBPACK_IMPORTED_MODULE_2__["default"]; });








/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: Color, COLOR, FONT_FAMILY, SIZE, skeleton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR", function() { return COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_FAMILY", function() { return FONT_FAMILY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIZE", function() { return SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skeleton", function() { return skeleton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: ", ";\n    height: ", ";\n    border-radius: 2px;\n    background-image: ", ";\n    background-size: 500px;\n    animation: ", " .8s linear infinite;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            #fff,\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% { background-position: 0 0; }\n    100% { background-position: 500px 0; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Color = {
  LightRed: '#fadcdc',
  Red: '#e95454',
  DeepRed: '#e32222',
  LightGold: '#fdf3e0',
  Gold: '#f6be4e',
  DeepGold: '#f3aa19',
  LightGreen: '#ecf4e4',
  Green: '#a2c679',
  DeepGreen: '#87b552',
  LightBlue: '#bdd3eb',
  Blue: '#4786c8',
  DeepBlue: '#316aa5',
  Black: '#000000',
  Coal: '#333333',
  Gray: '#8d8d8d',
  Pale: '#e1e1e1',
  Silver: '#ececec',
  Zircon: '#f5f5f5',
  White: '#ffffff',
  Purple: '#a476c7'
};
var COLOR = Object.keys(Color).reduce(function (colors, colorName) {
  return _objectSpread({}, colors, _defineProperty({}, "".concat(colorName.charAt(0).toLowerCase()).concat(colorName.slice(1)), Color[colorName]));
}, {});
var FONT_FAMILY = {
  OpenSans: '"Open Sans", sans-serif'
};
var SIZE = {
  borderRadius: 3
};
var pending = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(_templateObject());

var getSkeletonGradient = function getSkeletonGradient(color) {
  if (color === 'zircon') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2(), Color.Zircon, Color.Zircon, Color.Zircon, Color.Zircon);
  }

  if (color === 'silver') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3(), Color.Silver, Color.Silver, Color.Zircon, Color.Silver, Color.Silver);
  }

  if (color === 'pale') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4(), Color.Pale, Color.Pale, Color.Silver, Color.Pale, Color.Pale);
  }

  if (color === 'gray') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5(), Color.Gray, Color.Gray, Color.Pale, Color.Gray, Color.Gray);
  }

  if (color === 'coal') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6(), Color.Coal, Color.Coal, Color.Gray, Color.Coal, Color.Coal);
  }

  if (color === 'blue') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject7(), Color.Blue, Color.Blue, Object(polished__WEBPACK_IMPORTED_MODULE_1__["lighten"])(0.1, Color.Blue), Color.Blue, Color.Blue);
  }

  if (color === 'green') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject8(), Color.Green, Color.Green, Object(polished__WEBPACK_IMPORTED_MODULE_1__["lighten"])(0.1, Color.Green), Color.Green, Color.Green);
  }

  if (color === 'gold') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject9(), Color.Gold, Color.Gold, Object(polished__WEBPACK_IMPORTED_MODULE_1__["lighten"])(0.1, Color.Gold), Color.Gold, Color.Gold);
  }

  if (color === 'red') {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject10(), Color.Red, Color.Red, Object(polished__WEBPACK_IMPORTED_MODULE_1__["lighten"])(0.1, Color.Red), Color.Red, Color.Red);
  }

  return '';
};

var skeleton = function skeleton(width, height, gradientColor) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject11(), width, height, getSkeletonGradient(gradientColor), pending);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  Color: Color,
  size: SIZE,
  mixin: {
    skeleton: skeleton
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Amount, formatPrice, AmountInput, Avatar, AvatarCard, Badge, Button, Calendar, Catch, Checkbox, CheckboxGroup, Collapse, SvgIcon, Icon, Input, Link, LinkButton, Logo, Message, Modal, Notification, Popover, RadioButton, RadioButtonGroup, Rating, RatingNPS, Select, Spinner, Status, Tabs, H, P, Small, SocialButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icon */ "./src/Icon/index.jsx");
/* harmony import */ var _Amount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Amount */ "./src/Amount/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Amount", function() { return _Amount__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrice", function() { return _Amount__WEBPACK_IMPORTED_MODULE_1__["format"]; });

/* harmony import */ var _AmountInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AmountInput */ "./src/AmountInput/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AmountInput", function() { return _AmountInput__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Avatar */ "./src/Avatar/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return _Avatar__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _AvatarCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AvatarCard */ "./src/AvatarCard/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AvatarCard", function() { return _AvatarCard__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Badge */ "./src/Badge/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return _Badge__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ "./src/Button/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Calendar */ "./src/Calendar/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return _Calendar__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _Catch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Catch */ "./src/Catch/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Catch", function() { return _Catch__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Checkbox */ "./src/Checkbox/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _CheckboxGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CheckboxGroup */ "./src/CheckboxGroup/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxGroup", function() { return _CheckboxGroup__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Collapse */ "./src/Collapse/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return _Collapse__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./SvgIcon */ "./src/SvgIcon/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgIcon", function() { return _SvgIcon__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Input */ "./src/Input/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Link */ "./src/Link/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _LinkButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LinkButton */ "./src/LinkButton/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LinkButton", function() { return _LinkButton__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Logo */ "./src/Logo/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return _Logo__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Message */ "./src/Message/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _Message__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Modal */ "./src/Modal/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Notification */ "./src/Notification/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return _Notification__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Popover */ "./src/Popover/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return _Popover__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./RadioButton */ "./src/RadioButton/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return _RadioButton__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _RadioButtonGroup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./RadioButtonGroup */ "./src/RadioButtonGroup/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButtonGroup", function() { return _RadioButtonGroup__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Rating */ "./src/Rating/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rating", function() { return _Rating__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _RatingNPS__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./RatingNPS */ "./src/RatingNPS/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RatingNPS", function() { return _RatingNPS__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Select */ "./src/Select/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _Select__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Spinner */ "./src/Spinner/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return _Spinner__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Status */ "./src/Status/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _Status__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Tabs */ "./src/Tabs/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return _Tabs__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Typography */ "./src/Typography/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "H", function() { return _Typography__WEBPACK_IMPORTED_MODULE_29__["H"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "P", function() { return _Typography__WEBPACK_IMPORTED_MODULE_29__["P"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Small", function() { return _Typography__WEBPACK_IMPORTED_MODULE_29__["Small"]; });

/* harmony import */ var _SocialButtonGroup__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SocialButtonGroup */ "./src/SocialButtonGroup/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialButtonGroup", function() { return _SocialButtonGroup__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/*
 * Доступные UI компоненты
 */


























var Icon = _Icon__WEBPACK_IMPORTED_MODULE_0__;




































/***/ }),

/***/ "./src/lib/currency.js":
/*!*****************************!*\
  !*** ./src/lib/currency.js ***!
  \*****************************/
/*! exports provided: CURRENCY_MAP, getCurrencySymbol, getCurrencyMeta */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENCY_MAP", function() { return CURRENCY_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencySymbol", function() { return getCurrencySymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrencyMeta", function() { return getCurrencyMeta; });
var CURRENCY_MAP = {
  ALL: "Lek",
  AFN: "\u060B",
  ARS: "$",
  AWG: "\u0192",
  AUD: "AU$",
  AZN: "\u20BC",
  BSD: "$",
  BBD: "$",
  BYR: "Br",
  BZD: "BZ$",
  BMD: "$",
  BOB: "$b",
  BAM: "KM",
  BWP: "P",
  BGN: "\u043B\u0432",
  BRL: "R$",
  BND: "$",
  KHR: "\u17DB",
  CAD: "CA$",
  KYD: "$",
  CLP: "$",
  CNY: "\xA5",
  COP: "$",
  CRC: "\u20A1",
  HRK: "kn",
  CUP: "\u20B1",
  CZK: "K\u010D",
  DKK: "kr",
  DOP: "RD$",
  XCD: "$",
  EGP: "\xA3",
  SVC: "$",
  EEK: "kr",
  EUR: "\u20AC",
  FKP: "\xA3",
  FJD: "$",
  FRF: "\u20A3",
  GHC: "\xA2",
  GIP: "\xA3",
  GTQ: "Q",
  GGP: "\xA3",
  GYD: "$",
  HNL: "L",
  HKD: "$",
  HUF: "Ft",
  ISK: "kr",
  INR: "\u20A8",
  IDR: "Rp",
  IRR: "\uFDFC",
  IMP: "\xA3",
  ILS: "\u20AA",
  JMD: "J$",
  JPY: "\xA5",
  JEP: "\xA3",
  KZT: "\u20B8",
  KGS: "KGS",
  LAK: "\u20AD",
  LVL: "Ls",
  LBP: "\xA3",
  LRD: "$",
  LTL: "Lt",
  MKD: "\u0434\u0435\u043D",
  MYR: "RM",
  MUR: "\u20A8",
  MXN: "$",
  MNT: "\u20AE",
  MZN: "MT",
  NAD: "$",
  NPR: "\u20A8",
  ANG: "\u0192",
  NZD: "$",
  NIO: "C$",
  NGN: "\u20A6",
  KPW: "\u20A9",
  NOK: "kr",
  OMR: "\uFDFC",
  PKR: "\u20A8",
  PAB: "B/.",
  PYG: "Gs",
  PEN: "S/.",
  PHP: "\u20B1",
  PLN: "z\u0142",
  QAR: "\uFDFC",
  RON: "lei",
  RUB: "\u20BD",
  SHP: "\xA3",
  SAR: "\uFDFC",
  RSD: "\u0414\u0438\u043D.",
  SCR: "\u20A8",
  SGD: "$",
  SBD: "$",
  SOS: "S",
  ZAR: "R",
  KRW: "\u20A9",
  LKR: "\u20A8",
  SEK: "kr",
  CHF: "CHF",
  SRD: "$",
  SYP: "\xA3",
  TWD: "NT$",
  THB: "\u0E3F",
  TTD: "TT$",
  TRY: "\u20A4",
  TRL: "\u20A4",
  TVD: "$",
  UAH: "\u20B4",
  GBP: "\xA3",
  USD: "$",
  UYU: "$U",
  UZS: "\u043B\u0432",
  VEF: "Bs",
  VND: "\u20AB",
  YER: "\uFDFC",
  ZWD: "Z$"
};
/**
 * Возвращает знак валюты по ISO коду.
 *
 * @param {String} currencyCode Код валюты.
 * @returns {String}
 */

function getCurrencySymbol(currencyCode) {
  return CURRENCY_MAP[currencyCode] || currencyCode;
}
/**
 * Возвращает данные для форматирования валюты по ISO коду.
 *
 * @param {String} currencyCode Код валюты.
 * @returns {*}
 */

function getCurrencyMeta(currencyCode) {
  var symbol = getCurrencySymbol(currencyCode);

  switch (currencyCode) {
    case 'RUB':
      return {
        symbol: symbol,
        minorSplitter: ',',
        majorSplitter: ' ',
        template: 'V C'
      };

    case 'EUR':
      return {
        symbol: symbol,
        minorSplitter: '.',
        majorSplitter: ',',
        template: 'V C'
      };

    default:
      return {
        symbol: symbol,
        minorSplitter: '.',
        majorSplitter: ',',
        template: 'CV'
      };
  }
}

/***/ }),

/***/ "./src/lib/getRequestAnimationFrame.js":
/*!*********************************************!*\
  !*** ./src/lib/getRequestAnimationFrame.js ***!
  \*********************************************/
/*! exports provided: default, cancelRequestAnimationFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRequestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelRequestAnimationFrame", function() { return cancelRequestAnimationFrame; });
var availablePrefixs = ['moz', 'ms', 'webkit'];
var frameDuration = 16;

function requestAnimationFramePolyfill() {
  var lastTime = 0;
  return function (callback) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, frameDuration - (currTime - lastTime));
    var id = window.setTimeout(function () {
      return callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}

function getRequestAnimationFrame() {
  if (typeof window === 'undefined') {
    return function () {};
  }

  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame.bind(window);
  }

  var prefix = availablePrefixs.filter(function (key) {
    return "".concat(key, "RequestAnimationFrame") in window;
  })[0];
  return prefix ? window["".concat(prefix, "RequestAnimationFrame")] : requestAnimationFramePolyfill();
}
function cancelRequestAnimationFrame(id) {
  if (typeof window === 'undefined') {
    return null;
  }

  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(id);
  }

  var prefix = availablePrefixs.filter(function (key) {
    return "".concat(key, "CancelAnimationFrame") in window || "".concat(key, "CancelRequestAnimationFrame") in window;
  })[0];
  return prefix ? (window["".concat(prefix, "CancelAnimationFrame")] || window["".concat(prefix, "CancelRequestAnimationFrame")]).call(this, id) : clearTimeout(id);
}

/***/ }),

/***/ "./src/lib/moment.js":
/*!***************************!*\
  !*** ./src/lib/moment.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

moment__WEBPACK_IMPORTED_MODULE_0___default.a.locale('ru');
/* harmony default export */ __webpack_exports__["default"] = (moment__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./src/lib/openAnimation.js":
/*!**********************************!*\
  !*** ./src/lib/openAnimation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-animation */ "css-animation");
/* harmony import */ var css_animation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_animation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRequestAnimationFrame */ "./src/lib/getRequestAnimationFrame.js");


var reqAnimFrame = Object(_getRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_1__["default"])();

function animate(node, show, done) {
  var height;
  var requestAnimationFrameId;
  return css_animation__WEBPACK_IMPORTED_MODULE_0___default()(node, 'ui-collapse-wrapper', {
    /* eslint-disable no-param-reassign */
    start: function start() {
      if (show) {
        height = node.offsetHeight;
        node.style.height = '0px';
        node.style.opacity = '0.0001';
      } else {
        node.style.height = "".concat(node.offsetHeight, "px");
        node.style.opacity = '1';
      }
    },
    active: function active() {
      if (requestAnimationFrameId) {
        Object(_getRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_1__["cancelRequestAnimationFrame"])(requestAnimationFrameId);
      }

      requestAnimationFrameId = reqAnimFrame(function () {
        node.style.height = "".concat(show ? height : 0, "px");
        node.style.opacity = show ? '1' : '0.0001';
      });
    },
    end: function end() {
      if (requestAnimationFrameId) {
        Object(_getRequestAnimationFrame__WEBPACK_IMPORTED_MODULE_1__["cancelRequestAnimationFrame"])(requestAnimationFrameId);
      }

      node.style.height = '';
      node.style.opacity = '';
      done();
    }
  });
}

var animation = {
  enter: function enter(node, done) {
    return animate(node, true, done);
  },
  leave: function leave(node, done) {
    return animate(node, false, done);
  },
  appear: function appear(node, done) {
    return animate(node, true, done);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (animation);

/***/ }),

/***/ "./src/lib/social.js":
/*!***************************!*\
  !*** ./src/lib/social.js ***!
  \***************************/
/*! exports provided: getShareBaseUrl, getShareLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShareBaseUrl", function() { return getShareBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShareLink", function() { return getShareLink; });
function getShareBaseUrl(type) {
  switch (type) {
    case 'fb':
      return 'https://www.facebook.com/sharer/sharer.php?u';

    case 'tw':
      return 'https://twitter.com/share?url';

    case 'wa':
      return 'https://api.whatsapp.com/send?text';

    case 'gp':
      return 'https://plus.google.com/share?url';

    case 'tg':
      return 'https://telegram.me/share/?url';

    case 'vk':
      return 'https://vk.com/share.php?url';

    case 'ok':
      return 'https://connect.ok.ru/offer?url';

    default:
      return '';
  }
}
function getShareLink(type, ref) {
  return "".concat(getShareBaseUrl(type), "=").concat(encodeURIComponent(ref));
}

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "css-animation":
/*!********************************!*\
  !*** external "css-animation" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("css-animation");

/***/ }),

/***/ "inputmask-core":
/*!*********************************!*\
  !*** external "inputmask-core" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inputmask-core");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rc-collapse":
/*!******************************!*\
  !*** external "rc-collapse" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-collapse");

/***/ }),

/***/ "rc-dialog":
/*!****************************!*\
  !*** external "rc-dialog" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-dialog");

/***/ }),

/***/ "rc-notification":
/*!**********************************!*\
  !*** external "rc-notification" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-notification");

/***/ }),

/***/ "rc-tabs":
/*!**************************!*\
  !*** external "rc-tabs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs");

/***/ }),

/***/ "rc-tabs/lib/ScrollableInkTabBar":
/*!**************************************************!*\
  !*** external "rc-tabs/lib/ScrollableInkTabBar" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/ScrollableInkTabBar");

/***/ }),

/***/ "rc-tooltip":
/*!*****************************!*\
  !*** external "rc-tooltip" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tooltip");

/***/ }),

/***/ "rc-tooltip/lib/placements":
/*!********************************************!*\
  !*** external "rc-tooltip/lib/placements" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tooltip/lib/placements");

/***/ }),

/***/ "rc-util/lib/Dom/addEventListener":
/*!***************************************************!*\
  !*** external "rc-util/lib/Dom/addEventListener" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-util/lib/Dom/addEventListener");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ })));
//# sourceMappingURL=lib.js.map