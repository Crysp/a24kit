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

var rc_tooltip_1 = __importDefault(require("rc-tooltip"));

var placements_1 = __importDefault(require("./placements"));

var styled_1 = __importDefault(require("./styled"));
/**
 * `Popover` сработает только если у детей есть
 * события `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick`.
 */


var Popover =
/** @class */
function (_super) {
  __extends(Popover, _super);

  function Popover() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.popover = null;

    _this.onRefPopover = function (popover) {
      _this.popover = popover;
    };

    _this.onVisibleChange = function (visible) {
      var onVisibleChange = _this.props.onVisibleChange;

      if (onVisibleChange) {
        onVisibleChange(visible);
      }
    };

    return _this;
  }

  Popover.prototype.getPopoverDOMNode = function () {
    return this.popover.getPopupDomNode();
  };

  Popover.prototype.getPlacements = function () {
    var _a = this.props,
        arrowPointAtCenter = _a.arrowPointAtCenter,
        autoAdjustOverflow = _a.autoAdjustOverflow;
    return placements_1.default({
      arrowPointAtCenter: arrowPointAtCenter,
      verticalArrowShift: 8,
      autoAdjustOverflow: autoAdjustOverflow
    });
  };

  Popover.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        color = _a.color,
        raised = _a.raised,
        overlayClassName = _a.overlayClassName,
        destroyPopoverOnHide = _a.destroyPopoverOnHide,
        other = __rest(_a, ["children", "color", "raised", "overlayClassName", "destroyPopoverOnHide"]);

    var className = ["ui-popover-theme-" + color];
    if (raised) className.push('ui-popover-raised');
    if (overlayClassName) className.push(overlayClassName);
    return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(rc_tooltip_1.default, __assign({}, other, {
      getTooltipContainer: this.getPopoverContainer,
      destroyPopupOnHide: destroyPopoverOnHide,
      overlayClassName: className.join(' '),
      ref: this.onRefPopover,
      onVisibleChange: this.onVisibleChange,
      onPopupAlign: this.onPopupAlign,
      builtinPlacements: this.getPlacements()
    }), children), react_1.default.createElement(styled_1.default, null));
  };

  Popover.propTypes = {
    /**
     * По какому событию показывать ['click', 'hover', 'focus', 'contextMenu']
     */
    trigger: prop_types_1.default.arrayOf(prop_types_1.default.oneOf(['click', 'hover', 'focus', 'contextMenu'])),

    /**
     * Элемент на который указывает
     */
    children: prop_types_1.default.node.isRequired,

    /**
     * Видимость по умолчанию
     */
    defaultVisible: prop_types_1.default.bool,

    /**
     * Видимость
     */
    // eslint-disable-next-line react/require-default-props
    visible: prop_types_1.default.bool,

    /**
     * Расположение
     * ['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']
     */
    placement: prop_types_1.default.oneOf(['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']),

    /**
     * Цвет
     */
    color: prop_types_1.default.oneOf(['white', 'red', 'blue']),

    /**
     * Добавляет тень
     */
    raised: prop_types_1.default.bool,

    /**
     * Свойство от компонента
     * @link https://github.com/react-component/animate
     */
    transitionName: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),

    /**
     * Изменилась видимость
     */
    onVisibleChange: prop_types_1.default.func,

    /**
     * После того как измениласть видимость
     */
    afterVisibleChange: prop_types_1.default.func,

    /**
     * Всплывающий контент
     */
    overlay: prop_types_1.default.oneOfType([prop_types_1.default.node, prop_types_1.default.func]).isRequired,

    /**
     * Стили для всплывашки
     */
    overlayStyle: prop_types_1.default.shape(),

    /**
     * CSS класс всплывашки
     */
    overlayClassName: prop_types_1.default.string,

    /**
     * CSS префикс
     */
    prefixCls: prop_types_1.default.string,

    /**
     * Задержка пере показом (сек)
     */
    mouseEnterDelay: prop_types_1.default.number,

    /**
     * Задержка перед скрытием (сек)
     */
    mouseLeaveDelay: prop_types_1.default.number,

    /**
     * Функция возвращающая контейнер относительно которого позиционируется всплывашка.
     * По умолчанию контейнер - body
     */
    getPopoverContainer: prop_types_1.default.func,

    /**
     * Удаляет всплывашку из DOM после скрытия
     */
    destroyPopoverOnHide: prop_types_1.default.bool,

    /**
     * Настройки выранивания (будут объединены с placement конфигом)
     * @link https://github.com/yiminghe/dom-align
     */
    align: prop_types_1.default.shape(),
    arrowPointAtCenter: prop_types_1.default.bool,
    autoAdjustOverflow: prop_types_1.default.bool
  };
  Popover.defaultProps = {
    trigger: ['hover'],
    prefixCls: 'ui-popover',
    placement: 'top',
    color: 'white',
    raised: true,
    transitionName: 'ui-popover-animation',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    getPopoverContainer: function getPopoverContainer() {
      return document.body;
    },
    defaultVisible: false,
    arrowPointAtCenter: false,
    autoAdjustOverflow: true,
    destroyPopoverOnHide: false,
    align: undefined,
    onVisibleChange: undefined,
    afterVisibleChange: undefined,
    overlayStyle: {},
    overlayClassName: ''
  };
  return Popover;
}(react_1.default.Component);

exports.default = Popover;