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

var Icon_1 = require("../Icon");

var Option_1 = __importDefault(require("./components/Option"));

var styled_1 = require("./styled");

exports.VISIBLE_ITEMS = 1;

var Select =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(Select, _react_1$default$Comp);

  function Select() {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).apply(this, arguments));
    _this.state = {
      searchLabel: '',
      isOpened: false
    };
    _this.node = react_1.default.createRef();

    _this.onClickOuter = function (e) {
      if (!_this.node.current.contains(e.target)) {
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
      var _this$props = _this.props,
          value = _this$props.value,
          multiple = _this$props.multiple,
          onChange = _this$props.onChange;

      if (multiple) {
        var selected = [];

        if (value === null) {
          selected = [_value];
        } else if (value instanceof Array) {
          var isSelected = value.indexOf(_value) >= 0;

          if (isSelected) {
            value.splice(value.indexOf(_value), 1);
          }

          selected = isSelected ? value : [].concat(_toConsumableArray(value), [_value]);
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

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onClickOuter);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onClickOuter);
    }
  }, {
    key: "getText",
    value: function getText() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          placeholder = _this$props2.placeholder,
          options = _this$props2.options,
          renderSelected = _this$props2.renderSelected;
      var text = placeholder;

      if (value !== null && value.length > 0) {
        if (_typeof(value) === 'object') {
          if (value.length === exports.VISIBLE_ITEMS) {
            text = options.find(function (opt) {
              return opt.value === value[0];
            }).label;
          } else {
            text = "\u0412\u044B\u0431\u0440\u0430\u043D\u043E ".concat(value.length, " \u043F\u0443\u043D\u043A\u0442\u043E\u0432");
          }
        } else {
          var selected = options.find(function (opt) {
            return opt.value === value;
          });

          if (selected) {
            if (renderSelected) {
              text = renderSelected(selected);
            } else {
              text = selected.label;
            }
          }
        }
      }

      return text;
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      var _this$props3 = this.props,
          options = _this$props3.options,
          searchable = _this$props3.searchable;
      var searchLabel = this.state.searchLabel;

      if (searchable) {
        return options.filter(function (opt) {
          return opt.label.toLowerCase().indexOf(searchLabel.toLowerCase()) >= 0;
        });
      }

      return options;
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.setState({
        isOpened: false,
        searchLabel: ''
      });
    }
  }, {
    key: "renderOption",
    value: function renderOption(option) {
      var renderOption = this.props.renderOption;

      if (renderOption) {
        return renderOption(option);
      }

      return option.label;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _a = this.props,
          localValue = _a.value,
          multiple = _a.multiple,
          searchable = _a.searchable,
          maxHeight = _a.maxHeight,
          tabIndex = _a.tabIndex,
          disabled = _a.disabled,
          className = _a.className,
          onChange = _a.onChange,
          other = __rest(_a, ["value", "multiple", "searchable", "maxHeight", "tabIndex", "disabled", "className", "onChange"]);

      var _this$state = this.state,
          isOpened = _this$state.isOpened,
          searchLabel = _this$state.searchLabel;
      var options = this.getOptions();
      return react_1.default.createElement(styled_1.Wrapper, {
        disabled: disabled,
        className: className,
        ref: this.node,
        tabIndex: tabIndex
      }, react_1.default.createElement(styled_1.Field, Object.assign({
        opened: isOpened,
        disabled: disabled,
        onClick: this.onToggle
      }, other), react_1.default.createElement(styled_1.Text, {
        disabled: disabled
      }, this.getText()), react_1.default.createElement(styled_1.Arrow, {
        size: 16,
        opened: isOpened,
        disabled: disabled
      })), react_1.default.createElement(styled_1.OptionList, {
        maxHeight: maxHeight,
        opened: isOpened
      }, searchable && react_1.default.createElement(styled_1.Search, {
        placeholder: "\u0427\u0442\u043E \u0438\u0449\u0435\u043C?",
        icon: react_1.default.createElement(Icon_1.Loop, null),
        boundless: true,
        value: searchLabel,
        onChange: this.onChangeSearchLabel
      }), options.length > 0 ? options.map(function (_ref, index) {
        var value = _ref.value;
        return react_1.default.createElement(Option_1.default, {
          key: value,
          label: _this2.renderOption(options[index]),
          hasCheckbox: multiple,
          isChecked: multiple && localValue !== null && localValue.indexOf(value) >= 0,
          isSelected: !multiple && localValue === value,
          onSelect: function onSelect() {
            return _this2.onSelect(value);
          }
        });
      }) // eslint-disable-next-line react/no-string-refs
      : react_1.default.createElement(styled_1.Result, null, "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")));
    }
  }]);

  return Select;
}(react_1.default.Component);

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
exports.default = Select;