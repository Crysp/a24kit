"use strict";

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

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var Checkbox_1 = __importDefault(require("../Checkbox"));

var styled_1 = require("./styled");

var CheckboxGroup =
/*#__PURE__*/
function (_react_1$default$Pure) {
  _inherits(CheckboxGroup, _react_1$default$Pure);

  function CheckboxGroup() {
    var _this;

    _classCallCheck(this, CheckboxGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckboxGroup).apply(this, arguments));
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
      return react_1.default.createElement(styled_1.List, null, options.map(function (_ref) {
        var value = _ref.value,
            label = _ref.label;
        return react_1.default.createElement(styled_1.Option, {
          key: value
        }, react_1.default.createElement(Checkbox_1.default, {
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
}(react_1.default.PureComponent);

CheckboxGroup.defaultProps = {
  selected: [],
  color: 'blue',
  large: false,
  disabled: false,
  onCheck: function onCheck() {}
};
exports.default = CheckboxGroup;