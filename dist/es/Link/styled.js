"use strict";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: 16px;\n    height: 16px;\n    vertical-align: middle;\n    ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        margin-right: ", "px;\n        margin-left: ", "px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline;\n    font-family: \"Open Sans\", Helvetica, Arial, sans-serif;\n    font-size: inherit;\n    font-weight: inherit;\n    color: ", ";\n    cursor: pointer;\n    text-decoration: none;\n    &:hover {\n        color: ", ";\n        text-decoration: ", ";\n    }\n    &:hover ", " {\n        border-bottom-width: 0;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: ", ";\n"]);

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

exports.Wrapper = styled_components_1.default.span(_templateObject(), function (props) {
  return props.pseudo ? '1px dashed currentColor' : 'inherit';
});
exports.StyledLink = styled_components_1.default.a(_templateObject2(), config_1.Color.Blue, config_1.Color.DeepBlue, function (props) {
  return props.pseudo ? 'none' : 'underline';
}, exports.Wrapper);

var getGutters = function getGutters(props) {
  var rightGutter = 0;
  var leftGutter = 0;

  if (props.pseudo) {
    rightGutter = 12;
    leftGutter = 12;
  }

  if (props.pseudo) {
    rightGutter = 4;
    leftGutter = 4;
  }

  return styled_components_1.css(_templateObject3(), rightGutter, leftGutter);
};

exports.Addon = styled_components_1.default.span(_templateObject4(), getGutters);