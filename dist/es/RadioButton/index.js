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

var Radio_1 = __importDefault(require("../Radio"));

var styled_1 = require("./styled");
/**
 * @develop
 */


var RadioButton =
/** @class */
function (_super) {
  __extends(RadioButton, _super);

  function RadioButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      isHovered: false
    };

    _this.onCheck = function () {
      var disabled = _this.props.disabled;
      if (!disabled) _this.props.onCheck(_this.props.value);
    };

    _this.onMouseEnter = function (e) {
      var _a = _this.props,
          onMouseEnter = _a.onMouseEnter,
          disabled = _a.disabled;
      if (disabled) return;

      _this.setState({
        isHovered: true
      });

      if (onMouseEnter) onMouseEnter(e);
    };

    _this.onMouseLeave = function (e) {
      var _a = _this.props,
          onMouseLeave = _a.onMouseLeave,
          disabled = _a.disabled;
      if (disabled) return;

      _this.setState({
        isHovered: false
      });

      if (onMouseLeave) onMouseLeave(e);
    };

    return _this;
  }

  RadioButton.prototype.render = function () {
    var _a = this.props,
        label = _a.label,
        large = _a.large,
        isChecked = _a.isChecked,
        color = _a.color,
        disabled = _a.disabled,
        dataTestId = _a["data-testid"];
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
  };

  RadioButton.propTypes = {
    /**
     * Значение кнопки
     */
    value: prop_types_1.default.node.isRequired,

    /**
     * Текстовая подпись
     */
    label: prop_types_1.default.string,

    /**
     * Цвет
     */
    color: prop_types_1.default.oneOf(['blue', 'green']),

    /**
     * Выбран ли элемент
     */
    isChecked: prop_types_1.default.bool,

    /**
     * Увеличенный размер
     */
    large: prop_types_1.default.bool,

    /**
     * Неактивная
     */
    disabled: prop_types_1.default.bool,
    'data-testid': prop_types_1.default.string,

    /**
     * Обработчик выбора
     */
    onCheck: prop_types_1.default.func,
    onMouseEnter: prop_types_1.default.func,
    onMouseLeave: prop_types_1.default.func
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
  return RadioButton;
}(react_1.default.Component);

exports.default = RadioButton;