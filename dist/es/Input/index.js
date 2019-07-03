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

var MaskedInput_1 = __importDefault(require("../MaskedInput"));

var styled_1 = require("./styled");
/**
 * @develop
 */


var Input =
/** @class */
function (_super) {
  __extends(Input, _super);

  function Input() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      isFocused: false
    };
    _this.root = null;

    _this.onRef = function (root) {
      _this.root = root;
    };

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

  Input.prototype.getMaskedInputInstance = function () {
    var mask = this.props.mask;

    if (typeof mask !== 'undefined') {
      return this.root;
    }

    return null;
  };

  Input.prototype.changeValue = function (value) {
    var onChange = this.props.onChange;

    if (onChange) {
      onChange(value);
    }
  };

  Input.prototype.isMaskFilled = function () {
    var mask = this.props.mask;

    if (typeof mask !== 'undefined') {
      return this.root.isFilled();
    }

    return false;
  };

  Input.prototype.focus = function () {
    this.root.focus();
  };

  Input.prototype.blur = function () {
    this.root.blur();
  };

  Input.prototype.render = function () {
    var _a = this.props,
        type = _a.type,
        value = _a.value,
        formNoValidate = _a.formNoValidate,
        autoComplete = _a.autoComplete,
        maxLength = _a.maxLength,
        id = _a.id,
        name = _a.name,
        tabIndex = _a.tabIndex,
        pattern = _a.pattern,
        title = _a.title,
        placeholder = _a.placeholder,
        disabled = _a.disabled,
        status = _a.status,
        icon = _a.icon,
        iconPosition = _a.iconPosition,
        boundless = _a.boundless,
        centered = _a.centered,
        leftAddons = _a.leftAddons,
        rightAddons = _a.rightAddons,
        largeFont = _a.largeFont,
        mask = _a.mask,
        maskFormatCharacters = _a.maskFormatCharacters,
        onProcessMaskInputEvent = _a.onProcessMaskInputEvent,
        className = _a.className,
        style = _a.style,
        dataTestId = _a["data-testid"];
    var isFocused = this.state.isFocused;
    var isMaskedInput = typeof mask !== 'undefined';
    var inputProps = {
      ref: this.onRef,
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
      focused: (!value || value.length === 0) && isFocused,
      filling: value && value.length > 0 && isFocused,
      status: status,
      disabled: disabled,
      boundless: boundless,
      className: className,
      style: style
    }, react_1.default.createElement(styled_1.Inner, null, leftAddons && react_1.default.createElement(styled_1.Addon, {
      leftGutter: true
    }, leftAddons), icon !== null && react_1.default.createElement(styled_1.IconWrapper, {
      iconBefore: icon && iconPosition === 'before',
      iconAfter: icon && iconPosition === 'after'
    }, icon), react_1.default.createElement(styled_1.FieldWrapper, null, react_1.default.createElement(styled_1.Field, __assign({
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
  };

  Input.propTypes = {
    /**
     * Сообщает браузеру, к какому типу относится элемент формы
     * Внимание, тип 'number' не умеет работать с масками,
     * в том числе с 'selectionStart' и 'selectionEnd'.
     * Подробнее: http://w3c.github.io/html/sec-forms.html#does-not-apply
     */
    type: prop_types_1.default.oneOf(['hidden', 'password', 'text', 'email', 'tel', 'url', 'number', 'card', 'money']),

    /**
     * Значение элемента
     */
    value: prop_types_1.default.string,

    /**
     * Управление автозаполнением компонента
     */
    autoComplete: prop_types_1.default.bool,

    /**
     * Максимальное число символов
     */
    maxLength: prop_types_1.default.number,

    /**
     * Уникальный идентификатор блока
     */
    id: prop_types_1.default.string,

    /**
     * Уникальное имя блока
     */
    name: prop_types_1.default.string,

    /**
     * Последовательность перехода между контролами при нажатии на Tab
     */
    tabIndex: prop_types_1.default.number,

    /**
     * Стандартное ствойство HTMLInputElement 'pattern'.
     * Может быть использовано для показа корректной клавиатуры на мобильных устройствах.
     */
    pattern: prop_types_1.default.string,

    /**
     * Управление встроенной проверкой данных введённых пользователем в поле на корректность
     */
    formNoValidate: prop_types_1.default.bool,

    /**
     * Тултип, который появляется при наведении
     */
    title: prop_types_1.default.string,

    /**
     * Выводит подсказывающий текст
     */
    placeholder: prop_types_1.default.string,

    /**
     * Неактивный элемент
     */
    disabled: prop_types_1.default.bool,

    /**
     * Вид элемента. Позволяет показать корректность введенных данных или наоборот
     */
    status: prop_types_1.default.oneOf(['default', 'success', 'error']),

    /**
     * Иконка
     */
    icon: prop_types_1.default.node,

    /**
     * Расположение иконки
     */
    iconPosition: prop_types_1.default.oneOf(['before', 'after']),

    /**
     * Выключает рамку
     */
    boundless: prop_types_1.default.bool,

    /**
     * Выравнивание значения и плейсхолдера по центру
     */
    centered: prop_types_1.default.bool,

    /**
     * Добавление дополнительных элементов к инпуту слева
     */
    leftAddons: prop_types_1.default.node,

    /**
     * Добавление дополнительных элементов к инпуту справа
     */
    rightAddons: prop_types_1.default.node,

    /**
     * Увеличенный шрифт
     */
    largeFont: prop_types_1.default.bool,

    /**
     * Определяет маску для ввода значений. [Шаблон маски](https://github.com/insin/inputmask-core#pattern
     */
    mask: prop_types_1.default.string,

    /**
     * Кастомные форматтеры символов маски, использует
     * формат formatCharacters из `inputmask-core`
     */
    maskFormatCharacters: prop_types_1.default.shape({
      validate: prop_types_1.default.func.isRequired,
      transform: prop_types_1.default.func
    }),

    /**
     * Обработчик на фокус элемента
     */
    onFocus: prop_types_1.default.func,

    /**
     * Обработчик на потерю фокуса элеметом
     */
    onBlur: prop_types_1.default.func,

    /**
     * Обработчик изменения значения
     */
    onChange: prop_types_1.default.func,

    /**
     * Обработчик клика по полю
     */
    onClick: prop_types_1.default.func,

    /**
     * Обработчик события нажатия на клавишу клавиатуры в момент,
     * когда фокус находится на компоненте
     */
    onKeyDown: prop_types_1.default.func,

    /**
     * Обработчик события отжатия на клавишу клавиатуры в момент,
     * когда фокус находится на компоненте
     */
    onKeyUp: prop_types_1.default.func,

    /**
     * Обработчик события вставки текста в поле
     */
    onPaste: prop_types_1.default.func,

    /**
     * Обработчик события касания по полю
     */
    onTouchStart: prop_types_1.default.func,

    /**
     * Обработчик события прекращения касания по полю
     */
    onTouchEnd: prop_types_1.default.func,

    /**
     * Обработчик события перемещения при касании по полю
     */
    onTouchMove: prop_types_1.default.func,

    /**
     * Обработчик события прерывания касания по полю
     */
    onTouchCancel: prop_types_1.default.func,

    /**
     * Обработчик, вызываемый перед началом ввода в маскированное поле
     */
    onProcessMaskInputEvent: prop_types_1.default.func,
    style: prop_types_1.default.shape(),
    className: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array]),
    'data-testid': prop_types_1.default.string
  };
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
  return Input;
}(react_1.default.Component);

exports.default = Input;