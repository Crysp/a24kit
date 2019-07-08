"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    display: inline-block;\n    padding: 12px 24px;\n    font: 400 14px \"Open Sans\", sans-serif;\n    line-height: 16px;\n    color: ", ";\n    background-color: ", ";\n    border-radius: 2px;\n    border: 0;\n    text-decoration: none;\n    cursor: pointer;\n    transition: background-color .2s linear;\n    &:hover {\n        background-color: #e4edf7;\n        text-decoration: underline;\n    }\n"]);

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

exports.default = styled_components_1.default.button(_templateObject(), config_1.Color.Blue, config_1.Color.Zircon);