"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var currency_1 = require("../lib/currency");

var styled_1 = __importDefault(require("./styled"));

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
  var meta = currency_1.getCurrencyMeta(iso);
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

exports.format = format;
/**
 * Форматирование числа в валюту
 *
 * @develop
 * @version 1.0.0
 */

var Amount =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(Amount, _react_1$default$Comp);

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

      return react_1.default.createElement(styled_1.default, null, isNegative && MINUS_SIGN_HTML_CODE, amountValue);
    }
  }]);

  return Amount;
}(react_1.default.Component);

Amount.defaultProps = {
  value: 0,
  minority: 0
};
exports.default = Amount;