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
/** @class */
function (_super) {
  __extends(MaskedInput, _super);

  function MaskedInput() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.input = null;
    _this.maskPattern = undefined;
    _this.mask = undefined;
    _this.formatCharacters = undefined;
    _this.value = '';
    _this.beforeInputSelection = {
      start: 0,
      end: 0
    };
    _this.caretFixTimeout = null;

    _this.onRefInput = function (input) {
      _this.input = input;
    };

    _this.onBeforeInput = function (event) {
      var onBeforeInput = _this.props.onBeforeInput;
      _this.beforeInputSelection = {
        start: _this.input.selectionStart,
        end: _this.input.selectionEnd
      };
      if (onBeforeInput) onBeforeInput(event);
    };

    _this.onInput = function (event) {
      var _a = _this.props,
          onInput = _a.onInput,
          onChange = _a.onChange;
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

  MaskedInput.prototype.componentWillMount = function () {
    var _a = this.props,
        mask = _a.mask,
        formatCharacters = _a.formatCharacters,
        value = _a.value;
    this.setMask(mask, formatCharacters);
    this.value = this.mask.format(value || '');
  };

  MaskedInput.prototype.componentWillReceiveProps = function (nextProps) {
    var _a = this.props,
        value = _a.value,
        mask = _a.mask,
        formatCharacters = _a.formatCharacters;
    var reformatValue = false;

    if (mask !== nextProps.mask || formatCharacters !== nextProps.formatCharacters) {
      this.setMask(nextProps.mask, nextProps.formatCharacters);
      reformatValue = true;
    }

    if (reformatValue || value !== nextProps.value) {
      this.value = this.mask.format(nextProps.value || '');
    }
  };

  MaskedInput.prototype.componentWillUnmount = function () {
    if (this.caretFixTimeout) {
      clearTimeout(this.caretFixTimeout);
      this.caretFixTimeout = null;
    }
  };
  /* eslint-disable */


  MaskedInput.prototype.processInputEvent = function (event) {
    var onProcessInputEvent = this.props.onProcessInputEvent;

    if (onProcessInputEvent) {
      onProcessInputEvent(event);
    }

    var prevSelection = this.input.selectionStart;
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

    return event;
  };
  /* eslint-enable */


  MaskedInput.prototype.clampSelection = function (selection) {
    var _a = this.mask,
        firstEditableIndex = _a.firstEditableIndex,
        lastEditableIndex = _a.lastEditableIndex;

    if (selection < firstEditableIndex) {
      return firstEditableIndex;
    }

    if (selection > lastEditableIndex + 1) {
      return lastEditableIndex + 1;
    }

    return selection;
  };

  MaskedInput.prototype.setInputSelection = function (selection) {
    this.input.selectionStart = selection;
    this.input.selectionEnd = selection;

    if (IS_IE9_10 || IS_ANDROID) {
      this.setInputSelectionByTimeout(selection);
    }
  };

  MaskedInput.prototype.setInputSelectionByTimeout = function (selection) {
    var _this = this;

    if (this.caretFixTimeout) {
      clearTimeout(this.caretFixTimeout);
      this.caretFixTimeout = null;
    }

    this.caretFixTimeout = setTimeout(function () {
      _this.caretFixTimeout = null;
      _this.input.selectionStart = selection;
      _this.input.selectionEnd = selection;
    }, 0);
  };

  MaskedInput.prototype.setMask = function (newMask, formatCharacters) {
    if (this.maskPattern !== newMask || this.formatCharacters !== formatCharacters) {
      this.mask = new mask_1.default(newMask, formatCharacters);
      this.maskPattern = newMask;
      this.formatCharacters = formatCharacters;
    }
  };

  MaskedInput.prototype.isFilled = function () {
    var maskLength = this.mask.length;
    var valueLength = this.value.length;
    var valueOptionalLength = this.value.length + this.mask.optionalLength;
    return valueLength === maskLength || valueOptionalLength === maskLength;
  };

  MaskedInput.prototype.render = function () {
    var props = __assign({}, this.props);

    var maxLength = props.maxLength;
    var length = typeof maxLength === 'undefined' ? this.mask.length : maxLength;
    delete props.mask;
    delete props.formatCharacters;
    delete props.onProcessInputEvent;
    return react_1.default.createElement("input", __assign({}, props, {
      ref: this.onRefInput,
      maxLength: length,
      value: this.value,
      onBeforeInput: this.onBeforeInput,
      onInput: this.onInput,
      onChange: this.onChange
    }));
  };

  MaskedInput.prototype.focus = function () {
    this.input.focus();
  };

  MaskedInput.prototype.blur = function () {
    this.input.blur();
  };

  MaskedInput.propTypes = {
    mask: prop_types_1.default.string.isRequired,
    formatCharacters: prop_types_1.default.shape({
      validate: prop_types_1.default.func.isRequired,
      transform: prop_types_1.default.func
    }),
    // eslint-disable-next-line react/forbid-prop-types
    value: prop_types_1.default.any,
    maxLength: prop_types_1.default.number,

    /**
     * Обработчик, вызываемый перед началом ввода в поле
     */
    onProcessInputEvent: prop_types_1.default.func,
    onBeforeInput: prop_types_1.default.func,
    onInput: prop_types_1.default.func,
    onChange: prop_types_1.default.func
  };
  MaskedInput.defaultProps = {
    formatCharacters: {},
    value: undefined,
    maxLength: undefined,
    onProcessInputEvent: undefined,
    onBeforeInput: undefined,
    onInput: undefined,
    onChange: undefined
  };
  return MaskedInput;
}(react_1.default.Component);

exports.default = MaskedInput;