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

var classnames_1 = __importDefault(require("classnames"));

var addEventListener_1 = __importDefault(require("rc-util/lib/Dom/addEventListener"));

var rc_dialog_1 = __importDefault(require("rc-dialog"));

var Button_1 = __importDefault(require("../Button"));

var styled_1 = __importDefault(require("./styled"));
/**
 * Модальное окно
 * @develop
 */


var Modal =
/** @class */
function (_super) {
  __extends(Modal, _super);

  function Modal() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.mousePosition = {};
    _this.mousePositionEventBinded = null;

    _this.onCancel = function (e) {
      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel(e);
      }
    };

    _this.onOk = function (e) {
      var onOk = _this.props.onOk;

      if (onOk) {
        onOk(e);
      }
    };

    return _this;
  }

  Modal.prototype.componentDidMount = function () {
    var _this = this;

    if (this.mousePositionEventBinded) {
      return;
    }

    addEventListener_1.default(document.documentElement, 'click', function (e) {
      _this.mousePosition = {
        x: e.pageX,
        y: e.pageY
      };
      setTimeout(function () {
        _this.mousePosition = null;
      }, 100);
    });
    this.mousePositionEventBinded = true;
  };

  Modal.prototype.renderFooter = function () {
    var _a = this.props,
        okText = _a.okText,
        okColor = _a.okColor,
        cancelText = _a.cancelText,
        okLoading = _a.okLoading;
    return react_1.default.createElement("div", null, react_1.default.createElement(Button_1.default, {
      color: "gray",
      side: 40,
      onClick: this.onCancel
    }, cancelText || 'Отмена'), react_1.default.createElement(Button_1.default, {
      color: okColor,
      side: 40,
      onClick: this.onOk,
      loading: okLoading
    }, okText || 'Ок'));
  };

  Modal.prototype.render = function () {
    var _a = this.props,
        footer = _a.footer,
        visible = _a.visible,
        wrapClassName = _a.wrapClassName,
        verticalCentered = _a.verticalCentered,
        extendedContent = _a.extendedContent,
        other = __rest(_a, ["footer", "visible", "wrapClassName", "verticalCentered", "extendedContent"]);

    var defaultFooter = this.renderFooter();
    return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(rc_dialog_1.default, __assign({}, other, {
      prefixCls: "ui-modal",
      transitionName: "ui-modal-zoom",
      maskTransitionName: "ui-modal-fade",
      wrapClassName: classnames_1.default(wrapClassName, {
        'ui-modal-vertical-centered': verticalCentered,
        'ui-modal-extended-content': extendedContent
      }),
      footer: typeof footer === 'undefined' ? defaultFooter : footer,
      visible: visible,
      mousePosition: this.mousePosition,
      onClose: this.onCancel
    })), react_1.default.createElement(styled_1.default, null));
  };

  Modal.propTypes = {
    /**
     * Колбек на подтверждение
     */
    onOk: prop_types_1.default.func,

    /**
     * Колбек на отмену
     */
    onCancel: prop_types_1.default.func,

    /**
     * Текст для кнопки на положительное действие
     */
    okText: prop_types_1.default.node,

    /**
     * Текст для кнопки на отмену
     */
    cancelText: prop_types_1.default.node,

    /**
     * Цвет положительной кнопки
     */
    okColor: prop_types_1.default.string,

    /**
     * Ширина модального окна
     */
    width: prop_types_1.default.oneOfType([prop_types_1.default.number, prop_types_1.default.string]),

    /**
     * Индикатор загрузки на положительном действии
     */
    okLoading: prop_types_1.default.bool,

    /**
     * Видимость окна
     */
    visible: prop_types_1.default.bool,

    /**
     * Футер модального окна
     */
    footer: prop_types_1.default.node,

    /**
     * Название
     */
    title: prop_types_1.default.node,

    /**
     * Видимость кнопки (х) для закрытия окна
     */
    closable: prop_types_1.default.bool,

    /**
     * Отцентровано по вертикали
     */
    verticalCentered: prop_types_1.default.bool,

    /**
     * Убирает отступы body, footer
     */
    extendedContent: prop_types_1.default.bool,

    /**
     * Отцентровано по вертикали
     */
    className: prop_types_1.default.string,

    /**
     * Класс для обертки
     */
    wrapClassName: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.array])
  };
  Modal.defaultProps = {
    okColor: 'blue',
    width: 520,
    okLoading: false,
    visible: false,
    verticalCentered: false,
    extendedContent: false,
    onOk: function onOk() {},
    onCancel: function onCancel() {},
    okText: undefined,
    cancelText: undefined,
    footer: undefined,
    title: undefined,
    closable: true,
    className: '',
    wrapClassName: ''
  };
  return Modal;
}(react_1.default.Component);

exports.default = Modal;