"use strict";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    color: ", ";\n    border-radius: 2px;\n    background-color: ", ";\n    \n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        padding: 5px 10px;\n        font: 600 13px \"Open Sans\", sans-serif;\n        line-height: 14px;\n        border-radius: ", "px;\n        &:empty {\n            width: 12px;\n            height: 12px;\n            padding: 0;\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        padding: 3px 5px;\n        font: 700 10px \"Open Sans\", sans-serif;\n        line-height: 10px;\n        border-radius: ", "px;\n        &:empty {\n            width: 8px;\n            height: 8px;\n            padding: 0;\n        }\n    "]);

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

function mapColor(props) {
  switch (props.color) {
    case 'red':
      return config_1.Color.Red;

    case 'gold':
      return config_1.Color.Gold;

    case 'green':
      return config_1.Color.Green;

    case 'blue':
      return config_1.Color.Blue;

    default:
      return config_1.Color.Gray;
  }
}

function smallSize(round) {
  return styled_components_1.css(_templateObject(), round ? 8 : 2);
}

function defaultSize(round) {
  return styled_components_1.css(_templateObject2(), round ? 12 : 2);
}

function size(props) {
  switch (props.size) {
    case 'small':
      return smallSize(props.round);

    default:
      return defaultSize(props.round);
  }
}

exports.default = styled_components_1.default.span(_templateObject3(), config_1.Color.White, mapColor, size);