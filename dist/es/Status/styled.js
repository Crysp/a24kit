"use strict";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    font-size: inherit;\n    ", ";\n    &::before {\n        content: '';\n        position: relative;\n        display: inline-block;\n        top: -1px;\n        width: 8px;\n        height: 8px;\n        margin-right: 5px;\n        border-radius: 50%;\n        vertical-align: middle;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n        &::before {\n            background: ", ";\n        }\n    "]);

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

var getStyles = function getStyles(props) {
  var color = config_1.Color.Gray;
  var background = config_1.Color.Pale;

  if (props.online) {
    color = config_1.Color.Coal;
    background = config_1.Color.Green;
  }

  return styled_components_1.css(_templateObject(), color, background);
};

exports.default = styled_components_1.default.div(_templateObject2(), getStyles);