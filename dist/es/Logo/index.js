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

var Icon_1 = require("./Icon");

var Logo =
/** @class */
function (_super) {
  __extends(Logo, _super);

  function Logo() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.modeColor = function (mode) {
      var colors = {
        dark: '#333',
        light: '#fff',
        blue: '#4786c8'
      };
      return colors[mode];
    };

    return _this;
  }

  Logo.prototype.render = function () {
    var _a = this.props,
        mode = _a.mode,
        project = _a.project,
        other = __rest(_a, ["mode", "project"]);

    var color = this.modeColor(mode);
    return project === 'author24' ? react_1.default.createElement(Icon_1.A24, __assign({
      style: {
        color: color
      }
    }, other)) : react_1.default.createElement(Icon_1.SB, __assign({
      style: {
        color: color
      }
    }, other));
  };

  Logo.propTypes = {
    mode: prop_types_1.default.oneOf(['light', 'dark', 'blue']),
    project: prop_types_1.default.string
  };
  Logo.defaultProps = {
    mode: 'light',
    project: 'author24'
  };
  return Logo;
}(react_1.default.PureComponent);

exports.default = Logo;