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
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(AmountInput, _react_1$default$Comp);

  function AmountInput() {
    var _this;

    _classCallCheck(this, AmountInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AmountInput).apply(this, arguments));
    _this.state = {
      value: ''
    };
    _this.root = react_1.default.createRef();

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
      this.mask = new mask_1.default(this.maskPattern);
      this.root.current.getMaskedInputInstance().current.setMask(this.maskPattern);
    }
  }, {
    key: "render",
    value: function render() {
      var currencyISO = this.props.currencyISO;
      var currencySymbol = currency_1.getCurrencySymbol(currencyISO);
      return react_1.default.createElement(Input_1.default, Object.assign({}, this.props, {
        ref: this.root,
        maxLength: this.getMaxLength(),
        mask: this.maskPattern,
        value: this.getValue(),
        rightAddons: currencyISO && react_1.default.createElement(styled_1.default, null, currencySymbol),
        onChange: this.onChange,
        onProcessMaskInputEvent: this.onProcessMaskInputEvent
      }));
    }
  }]);

  return AmountInput;
}(react_1.default.Component);

AmountInput.defaultProps = {
  numberLength: DEFAULT_INTEGER_SIZE
};
exports.default = AmountInput;