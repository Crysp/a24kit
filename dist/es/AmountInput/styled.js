"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding-right: 12px;\n    font: 400 18px \"Open Sans\", sans-serif;\n    color: ", ";\n    user-select: none;\n"]);

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

exports.default = styled_components_1.default.div(_templateObject(), config_1.Color.Gray);