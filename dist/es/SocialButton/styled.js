"use strict";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    border-radius: 5px;\n    transition: color .12s ease-in-out;\n    overflow: hidden;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n        ", "\n        \n        &:hover {\n            color: ", ";\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            width: 40px;\n            height: 40px;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        width: 48px;\n        height: 48px;\n    "]);

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
  var size = styled_components_1.css(_templateObject());
  var color;
  var hoverColor;

  if (props.size === 'small') {
    size = styled_components_1.css(_templateObject2());
  }

  switch (props.type) {
    case 'fb':
      color = '#5977ba';
      hoverColor = '#3a548c';
      break;

    case 'tw':
      color = '#27b3f1';
      hoverColor = '#0c88bf';
      break;

    case 'gp':
      color = '#e56042';
      hoverColor = '#c0391a';
      break;

    case 'tg':
      color = '#2ca5e0';
      hoverColor = '#1978a7';
      break;

    case 'wa':
      color = '#42c850';
      hoverColor = '#2b9336';
      break;

    case 'vk':
      color = '#6794c8';
      hoverColor = '#3c6da6';
      break;

    case 'ok':
      color = '#f18d3e';
      hoverColor = '#d3660f';
      break;

    default:
      color = config_1.Color.Gray;
      hoverColor = config_1.Color.Coal;
  }

  return styled_components_1.css(_templateObject3(), color, size, hoverColor);
};

exports.default = styled_components_1.default.a(_templateObject4());