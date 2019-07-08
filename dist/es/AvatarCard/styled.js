"use strict";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    top: 0;\n    right: 12px;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: max-content;\n    box-sizing: border-box;\n    overflow: hidden;\n"]);

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
/**
 * todo доделать для других размеров, когда будет дизайн
 * расположение для medium-size
 */

exports.Online = styled_components_1.default.span(_templateObject2(), config_1.Color.Green);