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

var rc_tooltip_1 = __importDefault(require("rc-tooltip"));

var placements_1 = __importDefault(require("./placements"));

var styled_1 = __importDefault(require("./styled"));
/**
 * `Popover` сработает только если у детей есть
 * события `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick`.
 */


var Popover =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(Popover, _react_1$default$Comp);

  function Popover() {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).apply(this, arguments));
    _this.popover = react_1.default.createRef();

    _this.onVisibleChange = function (visible) {
      var onVisibleChange = _this.props.onVisibleChange;

      if (onVisibleChange) {
        onVisibleChange(visible);
      }
    };

    return _this;
  }

  _createClass(Popover, [{
    key: "getPopoverDOMNode",
    value: function getPopoverDOMNode() {
      return this.popover.current.getPopupDomNode();
    }
  }, {
    key: "getPlacements",
    value: function getPlacements() {
      var _this$props = this.props,
          arrowPointAtCenter = _this$props.arrowPointAtCenter,
          autoAdjustOverflow = _this$props.autoAdjustOverflow;
      return placements_1.default({
        arrowPointAtCenter: arrowPointAtCenter,
        verticalArrowShift: 8,
        autoAdjustOverflow: autoAdjustOverflow
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          color = _a.color,
          raised = _a.raised,
          overlayClassName = _a.overlayClassName,
          destroyPopoverOnHide = _a.destroyPopoverOnHide,
          getPopoverContainer = _a.getPopoverContainer,
          other = __rest(_a, ["children", "color", "raised", "overlayClassName", "destroyPopoverOnHide", "getPopoverContainer"]);

      var className = ["ui-popover-theme-".concat(color)];
      if (raised) className.push('ui-popover-raised');
      if (overlayClassName) className.push(overlayClassName);
      return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(rc_tooltip_1.default, Object.assign({}, other, {
        getTooltipContainer: getPopoverContainer,
        destroyPopupOnHide: destroyPopoverOnHide,
        overlayClassName: className.join(' '),
        ref: this.popover,
        onVisibleChange: this.onVisibleChange,
        builtinPlacements: this.getPlacements()
      }), children), react_1.default.createElement(styled_1.default, null));
    }
  }]);

  return Popover;
}(react_1.default.Component);

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
exports.default = Popover;