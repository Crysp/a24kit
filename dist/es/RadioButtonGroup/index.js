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

var RadioButton_1 = __importDefault(require("../RadioButton"));

var styled_1 = require("./styled");

var RadioButtonGroup =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(RadioButtonGroup, _react_1$default$Comp);

  function RadioButtonGroup() {
    var _this;

    _classCallCheck(this, RadioButtonGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioButtonGroup).apply(this, arguments));

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
      return react_1.default.createElement(styled_1.List, null, options.map(function (_ref) {
        var value = _ref.value,
            label = _ref.label;
        return react_1.default.createElement(styled_1.Option, {
          key: value
        }, react_1.default.createElement(RadioButton_1.default, {
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
}(react_1.default.Component);

RadioButtonGroup.defaultProps = {
  selected: null,
  color: 'blue',
  large: false,
  disabled: false,
  onCheck: function onCheck() {},
  'data-testid': undefined
};
exports.default = RadioButtonGroup;