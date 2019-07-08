"use strict";

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    overflow: hidden;\n    display: flex;\n    flex-flow: row;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    justify-content: flex-start;\n    width: ", "%;\n    color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    overflow: hidden;\n    display: flex;\n    flex-flow: row;\n    justify-content: flex-end;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: ", "%;\n    color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-block;\n    width: 80px;\n    height: 16px;\n    line-height: 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var styled_components_1 = __importDefault(require("styled-components"));

var config_1 = require("../config");

exports.Wrapper = styled_components_1.default.div(_templateObject());
exports.Placeholder = styled_components_1.default.div(_templateObject2(), function (props) {
  return props.width;
}, config_1.Color.Pale);
exports.StarList = styled_components_1.default.div(_templateObject3(), function (props) {
  return props.width;
}, config_1.Color.Gold);