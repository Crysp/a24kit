"use strict";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 12px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 20px;\n    height: 20px;\n    margin-right: 8px;\n    fill: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding: 20px;\n    background: ", ";\n    color: ", ";\n    border-radius: 2px;\n    border: 2px solid ", ";\n    font: 400 14px 'Open Sans', sans-serif;\n"]);

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

var Icon_1 = require("../Icon");

var config_1 = require("../config");

exports.Wrapper = styled_components_1.default.div(_templateObject(), config_1.Color.White, config_1.Color.Coal, config_1.Color.Pale);
exports.Header = styled_components_1.default.div(_templateObject2());
exports.FlashIcon = styled_components_1.default(Icon_1.Flash)(_templateObject3(), config_1.Color.Red);
exports.Text = styled_components_1.default.div(_templateObject4());