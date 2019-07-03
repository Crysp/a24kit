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

var RadioButton_1 = __importDefault(require("../RadioButton"));

var styled_1 = require("./styled");
/**
 * @develop
 */


var RadioButtonGroup =
/** @class */
function (_super) {
  __extends(RadioButtonGroup, _super);

  function RadioButtonGroup() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onCheck = function (value) {
      _this.props.onCheck(value);
    };

    return _this;
  }

  RadioButtonGroup.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        selected = _a.selected,
        options = _a.options,
        color = _a.color,
        large = _a.large,
        disabled = _a.disabled,
        dataTestId = _a["data-testid"];
    return react_1.default.createElement(styled_1.List, null, options.map(function (_a) {
      var value = _a.value,
          label = _a.label;
      return react_1.default.createElement(styled_1.Option, {
        key: value
      }, react_1.default.createElement(RadioButton_1.default, {
        value: value,
        label: label,
        isChecked: selected === value,
        onCheck: function onCheck() {
          return _this.onCheck(value);
        },
        color: color,
        large: large,
        disabled: disabled,
        "data-testid": dataTestId
      }));
    }));
  };

  RadioButtonGroup.propTypes = {
    /**
     * Выбранный элемент
     */
    selected: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),

    /**
     * Набор данных для построения списка
     */
    options: prop_types_1.default.arrayOf(prop_types_1.default.shape({
      value: prop_types_1.default.any,
      label: prop_types_1.default.string
    })).isRequired,

    /**
     * Цвет радио кнопок
     */
    color: prop_types_1.default.oneOf(['blue', 'green']),

    /**
     * Большие радио кнопки
     */
    large: prop_types_1.default.bool,

    /**
     * Неактивный список
     */
    disabled: prop_types_1.default.bool,

    /**
     * Обработчик выбора элемента
     * @param value - выбранный элемент
     */
    onCheck: prop_types_1.default.func,
    'data-testid': prop_types_1.default.string
  };
  RadioButtonGroup.defaultProps = {
    selected: null,
    color: 'blue',
    large: false,
    disabled: false,
    onCheck: function onCheck() {},
    'data-testid': undefined
  };
  return RadioButtonGroup;
}(react_1.default.Component);

exports.default = RadioButtonGroup;