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

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

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

var mask_1 = __importDefault(require("../MaskedInput/mask"));

var Input_1 = __importDefault(require("../Input"));

var styled_1 = __importDefault(require("./styled"));

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
/** @class */
function (_super) {
  __extends(AmountInput, _super);

  function AmountInput() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

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

  AmountInput.prototype.componentWillMount = function () {
    this.updateMaskByValue(this.getValue());
  };

  AmountInput.prototype.componentWillReceiveProps = function (nextProps) {
    var value = this.props.value;

    if (value !== nextProps.value) {
      this.updateMaskByValue(nextProps.value || '');
    }
  };

  AmountInput.prototype.getMaxLength = function () {
    var numberLength = this.props.numberLength;
    return Math.floor((numberLength - 1) / INTEGER_PART_SIZE) + numberLength;
  };

  AmountInput.prototype.getValue = function () {
    var value = this.props.value;
    var localValue = this.state.value;
    return typeof value === 'undefined' ? localValue : value;
  };

  AmountInput.prototype.updateMaskByValue = function (value) {
    var numberLength = this.props.numberLength;
    var cleanValue = value.toString().replace(/[^\d,]/g, '');
    var length = Math.max(Math.min(cleanValue.length || 1, numberLength));
    this.maskPattern = splitInteger(new Array(length + 1).join('1')).reverse().join(' ');
    this.mask = new mask_1.default(this.maskPattern);

    if (this.root) {
      this.root.getMaskedInputInstance().setMask(this.maskPattern);
    }
  };

  AmountInput.prototype.render = function () {
    var currencyISO = this.props.currencyISO;
    var currencySymbol = currency_1.getCurrencySymbol(currencyISO);
    return react_1.default.createElement(Input_1.default, __assign({}, this.props, {
      ref: this.onRef,
      maxLength: this.getMaxLength(),
      mask: this.maskPattern,
      value: this.getValue(),
      rightAddons: currencyISO && react_1.default.createElement(styled_1.default, null, currencySymbol),
      onChange: this.onChange,
      onProcessMaskInputEvent: this.onProcessMaskInputEvent
    }));
  };

  AmountInput.propTypes = __assign({}, Input_1.default.propTypes, {
    /**
     * ISO код валюты
     */
    currencyISO: prop_types_1.default.string.isRequired,

    /**
     * Максимальное количество цифр во введенной сумме
     */
    numberLength: prop_types_1.default.number
  });
  AmountInput.defaultProps = {
    numberLength: DEFAULT_INTEGER_SIZE
  };
  return AmountInput;
}(react_1.default.Component);

exports.default = AmountInput;