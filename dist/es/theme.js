"use strict";

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

var styled_components_1 = require("styled-components");

var config_1 = require("./config");

var theme = {
  color: Object.keys(config_1.COLOR).reduce(function (colors, colorName) {
    var _a;

    return __assign({}, colors, (_a = {}, _a["" + colorName.charAt(0).toLowerCase() + colorName.slice(1)] = config_1.COLOR[colorName], _a));
  }, {}),
  fontFamily: config_1.FONT_FAMILY,
  size: config_1.SIZE
};

exports.ThemeProvider = function (props) {
  return react_1.default.createElement(styled_components_1.ThemeProvider, __assign({
    theme: theme
  }, props));
};

exports.ThemeProvider.propTypes = {
  children: prop_types_1.default.element.isRequired
};
exports.default = exports.ThemeProvider;