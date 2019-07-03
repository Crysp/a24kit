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
/** @class */
function (_super) {
  __extends(Button, _super);

  function Button() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      ripples: []
    };
    _this.rippleCycles = [];
    _this.RID = 0;

    _this.onRippleFinish = function (_rid) {
      var ripples = _this.state.ripples;

      _this.setState({
        ripples: ripples.filter(function (_a) {
          var rid = _a.rid;
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

  Button.prototype.componentWillUnmount = function () {
    this.rippleCycles.forEach(function (cycle) {
      return clearTimeout(cycle);
    });
    this.rippleCycles = [];
  };

  Button.prototype.getRippleColor = function () {
    var _a = this.props,
        color = _a.color,
        contrast = _a.contrast,
        info = _a.info,
        disabled = _a.disabled;

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
  };

  Button.prototype.useRID = function () {
    this.RID += 1;
    return this.RID;
  };

  Button.prototype.initRipple = function (e) {
    var _this = this;

    var _a = this.props,
        hollow = _a.hollow,
        disabled = _a.disabled;
    var ripples = this.state.ripples;
    if (hollow || disabled) return;
    var rid = this.useRID();
    var bounding = e.currentTarget.getBoundingClientRect();
    this.setState({
      ripples: ripples.concat([{
        rid: rid,
        top: e.clientY - bounding.top,
        left: e.clientX - bounding.left
      }])
    });
    var rippleCountdown = setTimeout(function () {
      return _this.onRippleFinish(rid);
    }, Ripple_1.RIPPLE_DURATION);
    this.rippleCycles.push(rippleCountdown);
  };

  Button.prototype.renderRipple = function () {
    var ripples = this.state.ripples;
    var color = this.getRippleColor();
    return ripples.map(function (_a) {
      var rid = _a.rid,
          top = _a.top,
          left = _a.left;
      return react_1.default.createElement(Ripple_1.default, {
        key: rid,
        top: top,
        left: left,
        color: color
      });
    });
  };

  Button.prototype.render = function () {
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
    return react_1.default.createElement(styled_1.StyledButton, __assign({
      as: tagName,
      disabled: disabled || loading
    }, other, {
      onClick: this.onClick
    }), this.renderRipple(), prependIcon && react_1.default.createElement(styled_1.IconWrapper, null, icon), children && react_1.default.createElement(styled_1.ButtonText, {
      prependIcon: prependIcon,
      appendIcon: appendIcon
    }, loading ? react_1.default.createElement(Spinner_1.default, null) : children), appendIcon && react_1.default.createElement(styled_1.IconWrapper, null, icon));
  };

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
  return Button;
}(react_1.default.Component);

exports.default = Button;