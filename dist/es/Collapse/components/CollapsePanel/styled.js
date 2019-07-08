"use strict";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    .ui-collapse {\n        position: relative;\n    }\n    .ui-collapse-item {\n        position: relative;\n        \n        & + & {\n            border-top: 1px solid ", ";\n        }\n    }\n    .ui-collapse-item-active .arrow {\n        transform: rotate(-180deg);\n    }\n    .ui-collapse-header {\n        padding: 12px 16px;\n        color: ", ";\n        font: 400 13px \"Open Sans\", sans-serif;\n        line-height: 20px;\n        background: transparent;\n        cursor: pointer;\n        outline: none;\n        transition: background-color .2s linear;\n        &:hover {\n            background-color: rgba(71, 134, 200, 0.1);\n        }\n    }\n    .ui-collapse-content-inactive {\n        display: none;\n    }\n    .ui-collapse-wrapper {\n        overflow: hidden;\n    }\n    .ui-collapse-wrapper-active {\n        transition:\n                height .15s cubic-bezier(.645,.045,.355,1),\n                opacity .15s cubic-bezier(.645,.045,.355,1) !important;\n    }\n    .ui-collapse-headless {\n        display: none;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 16px;\n    height: 16px;\n    margin: 2px 12px 0 0;\n    fill: ", ";\n    transition: transform .15s cubic-bezier(.645,.045,.355,1);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-flow: row nowrap;\n"]);

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

var Icon_1 = require("../../../Icon");

var config_1 = require("../../../config");

exports.Header = styled_components_1.default.div(_templateObject());
exports.HeaderContent = styled_components_1.default.div(_templateObject2());
exports.ArrowDownIcon = styled_components_1.default(Icon_1.ArrowDown)(_templateObject3(), config_1.Color.Blue);
exports.GlobalStyles = styled_components_1.createGlobalStyle(_templateObject4(), config_1.Color.Pale, config_1.Color.Coal);