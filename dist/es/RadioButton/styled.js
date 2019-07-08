"use strict";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    line-height: 50%;\n    white-space: nowrap;\n    pointer-events: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin-left: 12px;\n    font: 400 14px \"Open Sans\", Helvetica, Arial, sans-serif;\n    line-height: 20px;\n    vertical-align: top;\n    white-space: normal;\n    color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var styled_components_1 = __importDefault(require("styled-components"));

var config_1 = require("../config");

exports.Label = styled_components_1.default.div(_templateObject(), function (props) {
  return props.disabled ? config_1.Color.Gray : config_1.Color.Coal;
});
exports.Wrapper = styled_components_1.default.div(_templateObject2(), function (props) {
  return props.disabled ? 'none' : 'inherit';
});