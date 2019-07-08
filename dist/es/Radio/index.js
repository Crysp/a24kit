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

var styled_1 = require("./styled");

var Radio =
/*#__PURE__*/
function (_react_1$default$Pure) {
  _inherits(Radio, _react_1$default$Pure);

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
      return react_1.default.createElement(styled_1.Wrapper, {
        large: large
      }, react_1.default.createElement(styled_1.EmptyCircle, {
        color: color,
        checked: isChecked,
        highlighted: isHighlighted,
        disabled: disabled
      }), react_1.default.createElement(styled_1.Circle, {
        color: color,
        checked: isChecked,
        highlighted: isHighlighted,
        large: large,
        disabled: disabled
      }));
    }
  }]);

  return Radio;
}(react_1.default.PureComponent);

Radio.defaultProps = {
  color: 'blue',
  large: false,
  disabled: false,
  isChecked: false,
  isHighlighted: false
};
exports.default = Radio;