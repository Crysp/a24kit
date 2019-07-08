"use strict";

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    z-index: 200;\n    padding: 6px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            cursor: pointer;\n            &::after {\n                position: absolute;\n                z-index: 100;\n                content: '';\n                top: 50%;\n                left: 50%;\n                width: 24px;\n                height: 24px;\n                margin: -12px 0 0 -12px;\n                background-color: transparent;\n                border-radius: 50%;\n                transition: background-color .12s linear;\n            }\n            &:hover {\n                color: #fff;\n                &::after {\n                    background-color: ", ";\n                }\n            }\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    cursor: default;\n    ", "\n    \n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n        &::before {\n            position: absolute;\n            z-index: 0;\n            content: '';\n            top: 50%;\n            left: 50%;\n            width: 24px;\n            height: 24px;\n            margin: -12px 0 0 -12px;\n            background-color: ", ";\n            border-radius: 50%;\n        }\n    "]);

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

var config_1 = require("../../config");

function fillCurrent() {
  return styled_components_1.css(_templateObject(), config_1.Color.White, config_1.Color.Blue);
}

function fillPast() {
  return styled_components_1.css(_templateObject2(), config_1.Color.Gray);
}

function fillWeekEnd() {
  return styled_components_1.css(_templateObject3(), config_1.Color.Gray);
}

function fill(props) {
  switch (true) {
    case props.current:
      return fillCurrent();

    case props.past:
      return fillPast();

    case props.weekEnd:
      return fillWeekEnd();

    default:
      return '';
  }
}

exports.Wrapper = styled_components_1.default.div(_templateObject4(), function (props) {
  return props.selectable ? styled_components_1.css(_templateObject5(), config_1.Color.DeepBlue) : '';
}, fill);
exports.Text = styled_components_1.default.div(_templateObject6());