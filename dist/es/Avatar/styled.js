"use strict";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    border-radius: ", ";\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        width: 40px;\n        height: 40px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        width: 32px;\n        height: 32px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        width: 176px;\n        height: 176px;\n        background: url(", ");\n    "]);

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
/* eslint-disable max-len */


var largePlaceholder = 'data:image/png;base64,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';
/* eslint-enable max-len */

function largeSize() {
  return styled_components_1.css(_templateObject(), largePlaceholder);
}

function smallSize() {
  return styled_components_1.css(_templateObject2());
}

function defaultSize() {
  return styled_components_1.css(_templateObject3());
}

function size(props) {
  switch (props.size) {
    case 'large':
      return largeSize();

    case 'small':
      return smallSize();

    default:
      return defaultSize();
  }
}

exports.default = styled_components_1.default.img(_templateObject4(), function (props) {
  return props.round ? '50%' : '0';
}, size);