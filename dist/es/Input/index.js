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

var MaskedInput_1 = __importDefault(require("../MaskedInput"));

var styled_1 = require("./styled");
/**
 * @develop
 */


var Input =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(Input, _react_1$default$Comp);

  function Input() {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
    _this.state = {
      isFocused: false
    };
    _this.root = react_1.default.createRef();

    _this.onFocus = function (event) {
      var onFocus = _this.props.onFocus;

      _this.setState({
        isFocused: true
      });

      if (onFocus) {
        onFocus(event);
      }
    };

    _this.onBlur = function (event) {
      var onBlur = _this.props.onBlur;

      _this.setState({
        isFocused: false
      });

      if (onBlur) {
        onBlur(event);
      }
    };

    _this.onChange = function (event) {
      _this.changeValue(event.target.value);
    };

    _this.onClick = function (event) {
      var onClick = _this.props.onClick;

      if (onClick) {
        onClick(event);
      }
    };

    _this.onKeyDown = function (event) {
      var onKeyDown = _this.props.onKeyDown;

      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    _this.onKeyUp = function (event) {
      var onKeyUp = _this.props.onKeyUp;

      if (onKeyUp) {
        onKeyUp(event);
      }
    };

    _this.onPaste = function (event) {
      var onPaste = _this.props.onPaste;

      if (onPaste) {
        onPaste(event);
      }
    };

    _this.onTouchStart = function (event) {
      var onTouchStart = _this.props.onTouchStart;

      if (onTouchStart) {
        onTouchStart(event);
      }
    };

    _this.onTouchEnd = function (event) {
      var onTouchEnd = _this.props.onTouchEnd;

      if (onTouchEnd) {
        onTouchEnd(event);
      }
    };

    _this.onTouchMove = function (event) {
      var onTouchMove = _this.props.onTouchMove;

      if (onTouchMove) {
        onTouchMove(event);
      }
    };

    _this.onTouchCancel = function (event) {
      var onTouchCancel = _this.props.onTouchCancel;

      if (onTouchCancel) {
        onTouchCancel(event);
      }
    };

    return _this;
  }

  _createClass(Input, [{
    key: "getMaskedInputInstance",
    value: function getMaskedInputInstance() {
      var mask = this.props.mask;

      if (typeof mask !== 'undefined') {
        return this.root;
      }

      return null;
    }
  }, {
    key: "changeValue",
    value: function changeValue(value) {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    }
  }, {
    key: "isMaskFilled",
    value: function isMaskFilled() {
      var mask = this.props.mask;

      if (typeof mask !== 'undefined' && this.root.current.isFilled) {
        return this.root.current.isFilled();
      }

      return false;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.root.current.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.root.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          value = _this$props.value,
          formNoValidate = _this$props.formNoValidate,
          autoComplete = _this$props.autoComplete,
          maxLength = _this$props.maxLength,
          id = _this$props.id,
          name = _this$props.name,
          tabIndex = _this$props.tabIndex,
          pattern = _this$props.pattern,
          title = _this$props.title,
          placeholder = _this$props.placeholder,
          disabled = _this$props.disabled,
          status = _this$props.status,
          icon = _this$props.icon,
          iconPosition = _this$props.iconPosition,
          boundless = _this$props.boundless,
          centered = _this$props.centered,
          leftAddons = _this$props.leftAddons,
          rightAddons = _this$props.rightAddons,
          largeFont = _this$props.largeFont,
          mask = _this$props.mask,
          maskFormatCharacters = _this$props.maskFormatCharacters,
          onProcessMaskInputEvent = _this$props.onProcessMaskInputEvent,
          className = _this$props.className,
          style = _this$props.style,
          dataTestId = _this$props['data-testid'];
      var isFocused = this.state.isFocused;
      var isMaskedInput = typeof mask !== 'undefined';
      var inputProps = {
        ref: this.root,
        type: type,
        value: value,
        formNoValidate: formNoValidate,
        autoComplete: autoComplete ? 'on' : 'off',
        maxLength: maxLength,
        id: id,
        name: name,
        tabIndex: tabIndex,
        pattern: pattern,
        title: title,
        placeholder: placeholder,
        disabled: disabled,
        'data-testid': dataTestId,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        onPaste: this.onPaste,
        onTouchStart: this.onTouchStart,
        onTouchEnd: this.onTouchEnd,
        onTouchMove: this.onTouchMove,
        onTouchCancel: this.onTouchCancel
      };
      return react_1.default.createElement(styled_1.Wrapper, {
        focused: Boolean((!value || value.length === 0) && isFocused),
        filling: Boolean(value && value.length > 0 && isFocused),
        status: status,
        disabled: disabled,
        boundless: boundless,
        className: className,
        style: style
      }, react_1.default.createElement(styled_1.Inner, null, leftAddons && react_1.default.createElement(styled_1.Addon, {
        leftGutter: true
      }, leftAddons), icon !== null && react_1.default.createElement(styled_1.IconWrapper, {
        iconBefore: Boolean(icon && iconPosition === 'before'),
        iconAfter: Boolean(icon && iconPosition === 'after')
      }, icon), react_1.default.createElement(styled_1.FieldWrapper, null, react_1.default.createElement(styled_1.Field, Object.assign({
        as: isMaskedInput ? MaskedInput_1.default : 'input',
        large: largeFont,
        centered: centered,
        iconBefore: icon && iconPosition === 'before',
        iconAfter: icon && iconPosition === 'after'
      }, inputProps, {
        /* свойства только для MaskedInput */
        mask: mask,
        formatCharacters: maskFormatCharacters,
        onProcessInputEvent: onProcessMaskInputEvent
      }))), rightAddons && react_1.default.createElement(styled_1.Addon, {
        rightGutter: true
      }, rightAddons)));
    }
  }]);

  return Input;
}(react_1.default.Component);

Input.defaultProps = {
  formNoValidate: false,
  value: undefined,
  autoComplete: false,
  maxLength: undefined,
  id: undefined,
  name: undefined,
  tabIndex: undefined,
  pattern: undefined,
  title: undefined,
  placeholder: undefined,
  disabled: undefined,
  status: undefined,
  type: 'text',
  icon: null,
  iconPosition: 'before',
  boundless: false,
  centered: false,
  leftAddons: null,
  rightAddons: null,
  largeFont: false,
  mask: undefined,
  maskFormatCharacters: undefined,
  onFocus: undefined,
  onBlur: undefined,
  onChange: undefined,
  onClick: undefined,
  onKeyDown: undefined,
  onKeyUp: undefined,
  onPaste: undefined,
  onTouchStart: undefined,
  onTouchEnd: undefined,
  onTouchMove: undefined,
  onTouchCancel: undefined,
  onProcessMaskInputEvent: undefined,
  style: undefined,
  className: undefined,
  'data-testid': undefined
};
exports.default = Input;