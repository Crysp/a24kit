"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
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

var Icon_1 = require("../Icon");

var Option_1 = __importDefault(require("./components/Option"));

var styled_1 = require("./styled");
/**
 * @develop
 */


exports.VISIBLE_ITEMS = 1;

var Select =
/** @class */
function (_super) {
  __extends(Select, _super);

  function Select() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      searchLabel: '',
      isOpened: false
    };

    _this.onRefNode = function (node) {
      _this.node = node;
    };

    _this.onClickOuter = function (e) {
      if (_this.node && !_this.node.contains(e.target)) {
        _this.closeMenu();
      }
    };

    _this.onToggle = function () {
      var disabled = _this.props.disabled;
      var isOpened = _this.state.isOpened;
      if (disabled) return;

      _this.setState({
        isOpened: !isOpened
      });
    };

    _this.onSelect = function (_value) {
      var _a = _this.props,
          value = _a.value,
          multiple = _a.multiple,
          onChange = _a.onChange;

      if (multiple) {
        var selected = [];

        if (value === null) {
          selected = [_value];
        } else {
          var isSelected = value.indexOf(_value) >= 0;

          if (isSelected) {
            value.splice(value.indexOf(_value), 1);
          }

          selected = isSelected ? value : value.concat([_value]);
        }

        onChange(selected);
      } else {
        _this.closeMenu();

        onChange(_value);
      }
    };

    _this.onChangeSearchLabel = function (searchLabel) {
      _this.setState({
        searchLabel: searchLabel
      });
    };

    return _this;
  }

  Select.prototype.componentDidMount = function () {
    document.addEventListener('click', this.onClickOuter);
  };

  Select.prototype.componentWillUnmount = function () {
    document.removeEventListener('click', this.onClickOuter);
  };

  Select.prototype.getText = function () {
    var _a = this.props,
        value = _a.value,
        placeholder = _a.placeholder,
        options = _a.options,
        renderSelected = _a.renderSelected;
    var text = placeholder;

    if (value !== null && value.length > 0) {
      if (_typeof(value) === 'object') {
        if (value.length === exports.VISIBLE_ITEMS) {
          text = options.find(function (opt) {
            return opt.value === value[0];
          }).label;
        } else {
          text = "\u0412\u044B\u0431\u0440\u0430\u043D\u043E " + value.length + " \u043F\u0443\u043D\u043A\u0442\u043E\u0432";
        }
      } else {
        var selected = options.find(function (opt) {
          return opt.value === value;
        });

        if (renderSelected) {
          text = renderSelected(selected);
        } else {
          text = selected.label;
        }
      }
    }

    return text;
  };

  Select.prototype.getOptions = function () {
    var _a = this.props,
        options = _a.options,
        searchable = _a.searchable;
    var searchLabel = this.state.searchLabel;

    if (searchable) {
      return options.filter(function (opt) {
        return opt.label.toLowerCase().indexOf(searchLabel.toLowerCase()) >= 0;
      });
    }

    return options;
  };

  Select.prototype.closeMenu = function () {
    this.setState({
      isOpened: false,
      searchLabel: ''
    });
  };

  Select.prototype.renderOption = function (option) {
    var renderOption = this.props.renderOption;

    if (renderOption) {
      return renderOption(option);
    }

    return option.label;
  };

  Select.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        localValue = _a.value,
        multiple = _a.multiple,
        searchable = _a.searchable,
        maxHeight = _a.maxHeight,
        tabIndex = _a.tabIndex,
        disabled = _a.disabled,
        className = _a.className,
        other = __rest(_a, ["value", "multiple", "searchable", "maxHeight", "tabIndex", "disabled", "className"]);

    var _b = this.state,
        isOpened = _b.isOpened,
        searchLabel = _b.searchLabel;
    var options = this.getOptions();
    return react_1.default.createElement(styled_1.Wrapper, {
      disabled: disabled,
      className: className,
      ref: this.onRefNode,
      tabIndex: tabIndex
    }, react_1.default.createElement(styled_1.Field, __assign({
      opened: isOpened,
      disabled: disabled,
      onClick: this.onToggle
    }, other), react_1.default.createElement(styled_1.Text, {
      disabled: disabled
    }, this.getText()), react_1.default.createElement(styled_1.Arrow, {
      size: 16,
      opened: isOpened,
      disabled: disabled
    })), react_1.default.createElement(styled_1.OptionList // eslint-disable-next-line react/no-string-refs
    , {
      // eslint-disable-next-line react/no-string-refs
      ref: "options",
      maxHeight: maxHeight,
      opened: isOpened
    }, searchable && react_1.default.createElement(styled_1.Search, {
      placeholder: "\u0427\u0442\u043E \u0438\u0449\u0435\u043C?",
      icon: react_1.default.createElement(Icon_1.Loop, null),
      boundless: true,
      value: searchLabel,
      onChange: this.onChangeSearchLabel
    }), options.length > 0 ? options.map(function (_a, index) {
      var value = _a.value;
      return react_1.default.createElement(Option_1.default, {
        key: value,
        label: _this.renderOption(options[index]),
        hasCheckbox: multiple,
        isChecked: multiple && localValue !== null && localValue.indexOf(value) >= 0,
        isSelected: !multiple && localValue === value,
        onSelect: function onSelect() {
          return _this.onSelect(value);
        }
      });
    }) // eslint-disable-next-line react/no-string-refs
    : react_1.default.createElement(styled_1.Result, {
      ref: "empty"
    }, "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")));
  };

  Select.propTypes = {
    /**
     * Варианты для выбора
     */
    options: prop_types_1.default.arrayOf(prop_types_1.default.shape({
      value: prop_types_1.default.string,
      label: prop_types_1.default.string
    })).isRequired,

    /**
     * Выбранное значение или массив значений (если включен multiple)
     */
    value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.arrayOf(prop_types_1.default.string)]),

    /**
     * Текст заглушка
     */
    placeholder: prop_types_1.default.string,

    /**
     * Можно выбрать несколько значений
     */
    multiple: prop_types_1.default.bool,

    /**
     * Можно филтровать значения в списке
     */
    searchable: prop_types_1.default.bool,

    /**
     * Максимальная высота выпадающего списка
     */
    maxHeight: prop_types_1.default.number,

    /**
     * Целое число, определяющее должен ли данный элемент учавствовать
     * в последовательной навигации по всей странице
     * с помощью клавиатуры, в каком порядке.
     */
    tabIndex: prop_types_1.default.number,

    /**
     * Неактивный элемент
     */
    disabled: prop_types_1.default.bool,

    /**
     * Собственная отрисовка выбранного элемента
     */
    renderSelected: prop_types_1.default.func,

    /**
     * Собственная отрисовка контента для каждого элемента списка
     */
    renderOption: prop_types_1.default.func,

    /**
     * Обработчик изменения выбора
     * @param {*} value - выбранное значение или массив значений (если включен multiple)
     */
    onChange: prop_types_1.default.func,

    /**
     * CSS класс
     */
    className: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array])
  };
  Select.defaultProps = {
    value: null,
    placeholder: '',
    multiple: false,
    searchable: false,
    maxHeight: 250,
    tabIndex: 0,
    disabled: false,
    className: '',
    renderSelected: undefined,
    renderOption: undefined,
    onChange: function onChange() {}
  };
  return Select;
}(react_1.default.Component);

exports.default = Select;