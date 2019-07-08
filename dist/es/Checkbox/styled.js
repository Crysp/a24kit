"use strict";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin-left: 12px;\n    font: 400 14px \"Open Sans\", sans-serif;\n    line-height: 20px;\n    vertical-align: top;\n    white-space: normal;\n    color: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    cursor: pointer;\n    user-select: none;\n    line-height: 50%;\n    white-space: nowrap;\n    pointer-events: ", ";\n    \n    &:hover ", " {\n        ", "\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["border-color: ", ";"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["border-color: ", ";"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["border-color: ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["border-color: ", ";"]);

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

var styled_1 = require("./components/Mark/styled");

var config_1 = require("../config");

function borderColor(props) {
  if (props.disabled) {
    return styled_components_1.css(_templateObject(), config_1.Color.Pale);
  }

  switch (props.color) {
    case 'green':
      return styled_components_1.css(_templateObject2(), config_1.Color.Green);

    case 'deepBlue':
      return styled_components_1.css(_templateObject3(), config_1.Color.DeepBlue);

    default:
      return styled_components_1.css(_templateObject4(), config_1.Color.Blue);
  }
}

exports.Wrapper = styled_components_1.default.div(_templateObject5(), function (props) {
  return props.disabled ? 'none' : 'inherit';
}, styled_1.Wrapper, borderColor);
exports.Label = styled_components_1.default.div(_templateObject6(), function (props) {
  return props.disabled ? config_1.Color.Gray : 'inherit';
});