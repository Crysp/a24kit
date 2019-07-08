"use strict";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: 8px;\n    height: 8px;\n    border-radius: 100%;\n    background-color: ", ";\n    opacity: 0;\n    &:nth-child(1) {\n        animation: ", " 1s ease-in-out infinite;\n    }\n    &:nth-child(2) {\n        animation: ", " 1s ease-in-out 0.33s infinite;\n    }\n    &:nth-child(3) {\n        animation: ", " 1s ease-in-out 0.66s infinite;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0%, 100%{ opacity: 0 }\n    60% { opacity: 1 }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    width: 34px;\n    max-width: 34px;\n    min-width: 34px;\n    height: 8px;\n    max-height: 8px;\n    min-height: 8px;\n    flex-flow: row nowrap;\n    justify-content: space-between;\n    align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

var styled_components_1 = __importStar(require("styled-components"));

var config_1 = require("../config");

exports.Wrapper = styled_components_1.default.div(_templateObject());
var blink = styled_components_1.keyframes(_templateObject2());
exports.Circle = styled_components_1.default.div(_templateObject3(), config_1.Color.Blue, blink, blink, blink);