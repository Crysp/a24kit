"use strict";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    fill: currentColor;\n    stroke: currentColor;\n    stroke-width: 0;\n    user-select: none;\n    flex-shrink: 0;\n    ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        width: 100%;\n        height: 100%;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            width: ", "px;\n            height: ", "px;\n        "]);

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
  if (typeof props.size === 'number') {
    return styled_components_1.css(_templateObject(), props.size, props.size);
  }

  return styled_components_1.css(_templateObject2());
};

exports.default = styled_components_1.default.svg(_templateObject3(), getSize);