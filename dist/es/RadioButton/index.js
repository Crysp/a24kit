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

var Radio_1 = __importDefault(require("../Radio"));

var styled_1 = require("./styled");

var RadioButton =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(RadioButton, _react_1$default$Comp);

  function RadioButton() {
    var _this;

    _classCallCheck(this, RadioButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioButton).apply(this, arguments));
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
      return react_1.default.createElement(styled_1.Wrapper, {
        onClick: this.onCheck,
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        disabled: disabled,
        "data-testid": dataTestId
      }, react_1.default.createElement(Radio_1.default, {
        color: color,
        large: large,
        disabled: disabled,
        isChecked: isChecked,
        isHighlighted: isHovered
      }), label.length > 0 && react_1.default.createElement(styled_1.Label, {
        disabled: disabled
      }, label));
    }
  }]);

  return RadioButton;
}(react_1.default.Component);

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
exports.default = RadioButton;