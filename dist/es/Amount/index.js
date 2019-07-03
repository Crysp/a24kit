"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var prop_types_1 = __importDefault(require("prop-types"));

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
  var formattedValueStr = meta.template.replace('V', majorPartFormatted + (minorPart ? "" + meta.minorSplitter + minorPart : '')).replace('C', meta.symbol);
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
/** @class */
function (_super) {
  __extends(Amount, _super);

  function Amount() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Amount.prototype.render = function () {
    var _a = this.props,
        value = _a.value,
        minority = _a.minority,
        iso = _a.iso;

    var _b = format(value, minority, iso),
        isNegative = _b.isNegative,
        amountValue = _b.amountValue;

    return react_1.default.createElement(styled_1.default, null, isNegative && MINUS_SIGN_HTML_CODE, amountValue);
  };

  Amount.propTypes = {
    /**
     * Сумма
     */
    value: prop_types_1.default.number,

    /**
     * Количество знаков после запятой
     */
    minority: prop_types_1.default.number,

    /**
     * ISO код валюты
     */
    iso: prop_types_1.default.string.isRequired
  };
  Amount.defaultProps = {
    value: 0,
    minority: 0
  };
  return Amount;
}(react_1.default.PureComponent);

exports.default = Amount;