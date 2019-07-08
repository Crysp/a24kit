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

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var Spinner_1 = __importDefault(require("../Spinner"));

var Ripple_1 = __importStar(require("../Ripple"));

var styled_1 = require("./styled");

var RIPPLE_COLOR_FOR_DEFAULT = {
  blue: 'blue',
  green: 'green',
  gold: 'gold',
  red: 'red',
  gray: 'gray'
};
var RIPPLE_COLOR_FOR_CONTRASTED = {
  blue: 'lightBlue',
  green: 'lightGreen',
  gold: 'lightGold',
  red: 'lightRed',
  gray: 'lightGray'
};
var RIPPLE_COLOR_FOR_INFO = 'pale';
/**
 * @develop
 */

var Button =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(Button, _react_1$default$Comp);

  function Button() {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
    _this.state = {
      ripples: []
    };
    _this.rippleCycles = [];
    _this.RID = 0;

    _this.onRippleFinish = function (_rid) {
      var ripples = _this.state.ripples;

      _this.setState({
        ripples: ripples.filter(function (_ref) {
          var rid = _ref.rid;
          return rid !== _rid;
        })
      });
    };

    _this.onClick = function (e) {
      if (_this.props.disabled) return;

      _this.initRipple(e);

      _this.props.onClick(e);
    };

    return _this;
  }

  _createClass(Button, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.rippleCycles.forEach(function (cycle) {
        return clearTimeout(cycle);
      });
      this.rippleCycles = [];
    }
  }, {
    key: "getRippleColor",
    value: function getRippleColor() {
      var _this$props = this.props,
          color = _this$props.color,
          contrast = _this$props.contrast,
          info = _this$props.info,
          disabled = _this$props.disabled;

      switch (true) {
        case disabled:
          return 'silver';

        case contrast:
          return RIPPLE_COLOR_FOR_CONTRASTED[color];

        case info:
          return RIPPLE_COLOR_FOR_INFO;

        default:
          return RIPPLE_COLOR_FOR_DEFAULT[color];
      }
    }
  }, {
    key: "useRID",
    value: function useRID() {
      this.RID += 1;
      return this.RID;
    }
  }, {
    key: "initRipple",
    value: function initRipple(e) {
      var _this2 = this;

      var _this$props2 = this.props,
          hollow = _this$props2.hollow,
          disabled = _this$props2.disabled;
      var ripples = this.state.ripples;
      if (hollow || disabled) return;
      var rid = this.useRID();
      var bounding = e.currentTarget.getBoundingClientRect();
      this.setState({
        ripples: [].concat(_toConsumableArray(ripples), [{
          rid: rid,
          top: e.clientY - bounding.top,
          left: e.clientX - bounding.left
        }])
      });
      var rippleCountdown = setTimeout(function () {
        return _this2.onRippleFinish(rid);
      }, Ripple_1.RIPPLE_DURATION);
      this.rippleCycles.push(rippleCountdown);
    }
  }, {
    key: "renderRipple",
    value: function renderRipple() {
      var ripples = this.state.ripples;
      var color = this.getRippleColor();
      return ripples.map(function (_ref2) {
        var rid = _ref2.rid,
            top = _ref2.top,
            left = _ref2.left;
        return react_1.default.createElement(Ripple_1.default, {
          key: rid,
          top: top,
          left: left,
          color: color
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          tagName = _a.tagName,
          icon = _a.icon,
          iconPosition = _a.iconPosition,
          loading = _a.loading,
          disabled = _a.disabled,
          children = _a.children,
          other = __rest(_a, ["tagName", "icon", "iconPosition", "loading", "disabled", "children"]);

      var prependIcon = icon && iconPosition === 'before';
      var appendIcon = icon && iconPosition === 'after';
      return react_1.default.createElement(styled_1.StyledButton, Object.assign({
        as: tagName,
        disabled: disabled || loading
      }, other, {
        onClick: this.onClick
      }), this.renderRipple(), prependIcon && react_1.default.createElement(styled_1.IconWrapper, null, icon), children && react_1.default.createElement(styled_1.ButtonText, {
        prependIcon: !!prependIcon,
        appendIcon: !!appendIcon
      }, loading ? react_1.default.createElement(Spinner_1.default, null) : children), appendIcon && react_1.default.createElement(styled_1.IconWrapper, null, icon));
    }
  }]);

  return Button;
}(react_1.default.Component);

Button.defaultProps = {
  tagName: 'button',
  children: '',
  className: '',
  color: 'green',
  contrast: false,
  hollow: false,
  secondary: false,
  info: false,
  disabled: false,
  icon: null,
  iconPosition: 'before',
  side: 12,
  loading: false,
  onClick: function onClick() {}
};
exports.default = Button;