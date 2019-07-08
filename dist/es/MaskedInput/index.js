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

var mask_1 = __importDefault(require("./mask")); // В эту проверку попадают IE9 и IE10,
// которые не могут корректно работать с кареткой на событии `input`.


var IS_IE9_10 = typeof window !== 'undefined' && Boolean(window.ActiveXObject);
var IS_ANDROID = typeof window !== 'undefined' && /(android)/i.test(window.navigator.userAgent);
/*
 * Для IE11 вместо `onChange`, используем событие `onInput`, для правильной работы copy/paste
 * Issue на ошибку в React: https://github.com/facebook/react/issues/7211
 * Детектим IE11: `Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject;`
 */

var IS_IE11 = typeof window !== 'undefined' && Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject;
var operationType = {
  ADD: 0,
  DELETE: 1,
  REPLACE: 2
};

var MaskedInput =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(MaskedInput, _react_1$default$Comp);

  function MaskedInput() {
    var _this;

    _classCallCheck(this, MaskedInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MaskedInput).apply(this, arguments));
    _this.input = react_1.default.createRef();
    _this.maskPattern = undefined;
    _this.mask = new mask_1.default(_this.props.mask, _this.props.formatCharacters);
    _this.formatCharacters = undefined;
    _this.value = '';
    _this.beforeInputSelection = {
      start: 0,
      end: 0
    };
    _this.caretFixTimeout = 0;

    _this.onBeforeInput = function (event) {
      var onBeforeInput = _this.props.onBeforeInput;
      _this.beforeInputSelection = {
        start: _this.input.current.selectionStart,
        end: _this.input.current.selectionEnd
      };
      if (onBeforeInput) onBeforeInput(event);
    };

    _this.onInput = function (event) {
      var _this$props = _this.props,
          onInput = _this$props.onInput,
          onChange = _this$props.onChange;
      var fixedEvent = event;

      if (!IS_IE9_10) {
        fixedEvent = _this.processInputEvent(event);
      }

      if (onInput) {
        onInput(fixedEvent);
      }

      if (IS_IE11 && onChange) {
        onChange(fixedEvent);
      }
    };

    _this.onChange = function (event) {
      var onChange = _this.props.onChange;
      var fixedEvent = event;

      if (IS_IE9_10) {
        fixedEvent = _this.processInputEvent(event);
      }

      if (!IS_IE11 && onChange) {
        onChange(fixedEvent);
      }
    };

    return _this;
  }

  _createClass(MaskedInput, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var value = this.props.value;
      this.value = this.mask.format(value || '');
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this$props2 = this.props,
          value = _this$props2.value,
          mask = _this$props2.mask,
          formatCharacters = _this$props2.formatCharacters;
      var reformatValue = false;

      if (mask !== nextProps.mask || formatCharacters !== nextProps.formatCharacters) {
        this.setMask(nextProps.mask, nextProps.formatCharacters);
        reformatValue = true;
      }

      if (reformatValue || value !== nextProps.value) {
        this.value = this.mask.format(nextProps.value || '');
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.caretFixTimeout) {
        clearTimeout(this.caretFixTimeout);
        this.caretFixTimeout = 0;
      }
    }
    /* eslint-disable */

  }, {
    key: "processInputEvent",
    value: function processInputEvent(event) {
      var onProcessInputEvent = this.props.onProcessInputEvent;

      if (onProcessInputEvent) {
        onProcessInputEvent(event);
      }

      var prevSelection = this.input.current.selectionStart;
      var newValue = event.target.value;
      var currentValue = this.value;
      var formattedValue = this.mask.format(newValue);
      this.value = formattedValue;
      event.target.value = formattedValue;
      /*
       * Если изменение поля ввода произошло не в конце ввода,
       * то необходимо починить стандартное поведение Реакта и
       * вернуть каретку к последнему изменению.
       */

      if (prevSelection && this.beforeInputSelection.end && this.beforeInputSelection.start) {
        if (prevSelection <= currentValue.length) {
          var newSelection = prevSelection; // Определяем тип операции, который был произведен над текстовым полем.

          var opType = newValue.length >= currentValue.length ? operationType.ADD : operationType.DELETE;
          /*
           * На пользовательском инпуте было выделение перед операцией,
           * значит могла быть операция или удаления или замены.
           */

          var beforeInputSelectionLength = this.beforeInputSelection.end - this.beforeInputSelection.start;

          if (beforeInputSelectionLength >= 1) {
            if (newValue.length >= currentValue.length - beforeInputSelectionLength) {
              opType = operationType.REPLACE;
            }
          }
          /*
           * Для операции доавления и замены, если мы стояли на нередактируемом символе,
           * то добаляем сдвиг до ближайшего редактируемого.
           */


          if (opType === operationType.ADD || opType === operationType.REPLACE) {
            var index = this.beforeInputSelection.start;

            while (!this.mask.isEditableIndex(index) && index < formattedValue.length) {
              index++;
            }

            newSelection += index - this.beforeInputSelection.start;
          }
          /*
           * Если вдруг попали на нередактируемый символ маски,
           * то подвигаем курсом до ближайшего редактируемого.
           */


          if (opType === operationType.ADD || opType === operationType.REPLACE) {
            while (!this.mask.isEditableIndex(newSelection) && newSelection < formattedValue.length) {
              newSelection++;
            }
          } else if (opType === operationType.DELETE) {
            while (!this.mask.isEditableIndex(newSelection - 1) && newSelection > 0) {
              newSelection--;
            }
          }

          this.setInputSelection(this.clampSelection(newSelection));
          /*
           * Если изменение поля произошло в конце ввода.
           * Android chrome имеет дефект с автоматической установкой каретки
           * при использовании клавиатуры отличной от type="text".
           */
        } else if (IS_ANDROID) {
          this.setInputSelectionByTimeout(event.target.selectionStart);
        }
      }

      return event;
    }
    /* eslint-enable */

  }, {
    key: "clampSelection",
    value: function clampSelection(selection) {
      var _this$mask = this.mask,
          firstEditableIndex = _this$mask.firstEditableIndex,
          lastEditableIndex = _this$mask.lastEditableIndex;

      if (selection < firstEditableIndex) {
        return firstEditableIndex;
      }

      if (selection > lastEditableIndex + 1) {
        return lastEditableIndex + 1;
      }

      return selection;
    }
  }, {
    key: "setInputSelection",
    value: function setInputSelection(selection) {
      this.input.current.selectionStart = selection;
      this.input.current.selectionEnd = selection;

      if (IS_IE9_10 || IS_ANDROID) {
        this.setInputSelectionByTimeout(selection);
      }
    }
  }, {
    key: "setInputSelectionByTimeout",
    value: function setInputSelectionByTimeout(selection) {
      var _this2 = this;

      if (this.caretFixTimeout) {
        clearTimeout(this.caretFixTimeout);
        this.caretFixTimeout = 0;
      }

      this.caretFixTimeout = setTimeout(function () {
        _this2.caretFixTimeout = 0;
        _this2.input.current.selectionStart = selection;
        _this2.input.current.selectionEnd = selection;
      }, 0);
    }
  }, {
    key: "setMask",
    value: function setMask(newMask, formatCharacters) {
      if (this.maskPattern !== newMask || this.formatCharacters !== formatCharacters) {
        this.mask = new mask_1.default(newMask, formatCharacters);
        this.maskPattern = newMask;
        this.formatCharacters = formatCharacters;
      }
    }
  }, {
    key: "isFilled",
    value: function isFilled() {
      var maskLength = this.mask.length;
      var valueLength = this.value.length;
      var valueOptionalLength = this.value.length + this.mask.optionalLength;
      return valueLength === maskLength || valueOptionalLength === maskLength;
    }
  }, {
    key: "render",
    value: function render() {
      var props = Object.assign({}, this.props);
      var maxLength = props.maxLength;
      var length = typeof maxLength === 'undefined' ? this.mask.length : maxLength;
      delete props.mask;
      delete props.formatCharacters;
      delete props.onProcessInputEvent;
      return react_1.default.createElement("input", Object.assign({}, props, {
        ref: this.input,
        maxLength: length,
        value: this.value,
        onBeforeInput: this.onBeforeInput,
        onInput: this.onInput,
        onChange: this.onChange
      }));
    }
  }, {
    key: "focus",
    value: function focus() {
      this.input.current.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.input.current.blur();
    }
  }]);

  return MaskedInput;
}(react_1.default.Component);

MaskedInput.defaultProps = {
  formatCharacters: {},
  value: undefined,
  maxLength: undefined,
  onProcessInputEvent: undefined,
  onBeforeInput: undefined,
  onInput: undefined,
  onChange: undefined
};
exports.default = MaskedInput;