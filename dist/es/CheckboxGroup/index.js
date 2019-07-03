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

var Checkbox_1 = __importDefault(require("../Checkbox"));

var styled_1 = require("./styled");
/**
 * @develop
 */


var CheckboxGroup =
/** @class */
function (_super) {
  __extends(CheckboxGroup, _super);

  function CheckboxGroup() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      selected: _this.props.selected || []
    };

    _this.onCheck = function (value) {
      var selected = _this.state.selected;
      var onCheck = _this.props.onCheck;
      var index = selected.indexOf(value);
      var nextSelected = [];

      if (index >= 0) {
        nextSelected = selected.slice(0, index).concat(selected.slice(index + 1, selected.length));
      } else {
        nextSelected = selected.concat([value]);
      }

      _this.setState({
        selected: nextSelected
      });

      onCheck(nextSelected);
    };

    return _this;
  }

  CheckboxGroup.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        selected = _a.selected,
        options = _a.options,
        color = _a.color,
        large = _a.large,
        disabled = _a.disabled;
    return react_1.default.createElement(styled_1.List, null, options.map(function (_a) {
      var value = _a.value,
          label = _a.label;
      return react_1.default.createElement(styled_1.Option, {
        key: value
      }, react_1.default.createElement(Checkbox_1.default, {
        label: label,
        isChecked: selected.indexOf(value) >= 0,
        onCheck: function onCheck() {
          return _this.onCheck(value);
        },
        color: color,
        large: large,
        disabled: disabled
      }));
    }));
  };

  CheckboxGroup.propTypes = {
    /**
     * Выбранные элементы
     */
    selected: prop_types_1.default.arrayOf(prop_types_1.default.string),

    /**
     * Набор данных для построения списка
     */
    options: prop_types_1.default.arrayOf(prop_types_1.default.shape({
      value: prop_types_1.default.any,
      label: prop_types_1.default.string
    })).isRequired,

    /**
     * Цвет чекбоксов
     */
    color: prop_types_1.default.oneOf(['blue', 'green', 'deepBlue']),

    /**
     * Большие чекбоксы
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
    onCheck: prop_types_1.default.func
  };
  CheckboxGroup.defaultProps = {
    selected: [],
    color: 'blue',
    large: false,
    disabled: false,
    onCheck: function onCheck() {}
  };
  return CheckboxGroup;
}(react_1.default.PureComponent);

exports.default = CheckboxGroup;