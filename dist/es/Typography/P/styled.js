"use strict";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    font-family: \"Open Sans\", sans-serif;\n    word-wrap: break-word;\n    color: ", ";\n    ", "\n    \n    & + & {\n        margin-top: 12px;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        font-size: 14px;\n        line-height: 24px;\n        font-weight: 400;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            font-size: 12px;\n            line-height: 20px;\n            font-weight: 400;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            font-size: 13px;\n            line-height: 20px;\n            font-weight: 400;\n        "]);

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

var getSize = function getSize(props) {
  if (props.size === 2) {
    return styled_components_1.css(_templateObject());
  }

  if (props.size === 3) {
    return styled_components_1.css(_templateObject2());
  }

  return styled_components_1.css(_templateObject3());
};

exports.default = styled_components_1.default.p(_templateObject4(), function (props) {
  return props.light ? '#9c9c9c' : 'inherit';
}, getSize);