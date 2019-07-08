"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    return Object.assign({}, colors, _defineProperty({}, "".concat(colorName.charAt(0).toLowerCase()).concat(colorName.slice(1)), config_1.COLOR[colorName]));
  }, {}),
  fontFamily: config_1.FONT_FAMILY,
  size: config_1.SIZE
};

exports.ThemeProvider = function (props) {
  return react_1.default.createElement(styled_components_1.ThemeProvider, Object.assign({
    theme: theme
  }, props));
};

exports.ThemeProvider.propTypes = {
  children: prop_types_1.default.element.isRequired
};
exports.default = exports.ThemeProvider;