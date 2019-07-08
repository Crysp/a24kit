"use strict";

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    box-sizing: border-box;\n    width: ", "%;\n    text-align: center;\n    line-height: 20px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-flow: row wrap;\n    padding: 0 ", "px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    width: ", "%;\n    padding: 6px;\n    text-align: center;\n    font: 700 10px \"Open Sans\", sans-serif;\n    color: ", ";\n    line-height: 14px;\n    text-transform: capitalize;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-flow: row wrap;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n    text-align: center;\n    text-transform: capitalize;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 40px;\n    height: 40px;\n    padding: 12px;\n    border: 0;\n    border-radius: 2px;\n    background: transparent;\n    outline: none;\n    color: ", ";\n    cursor: pointer;\n    transition: color .12s linear, background-color .12s linear;\n    &:hover {\n        color: ", ";\n    }\n    &:active {\n        background: ", ";\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    padding: 0 ", "px;\n    margin-bottom: 8px;\n    background-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    font: 400 13px \"Open Sans\", sans-serif;\n    color: ", ";\n"]);

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

exports.Wrapper = styled_components_1.default.div(_templateObject(), config_1.Color.Coal);
exports.Header = styled_components_1.default.div(_templateObject2(), function (props) {
  return props.sideGutter;
}, config_1.Color.Zircon);
exports.Nav = styled_components_1.default.div(_templateObject3());
exports.SwitchButton = styled_components_1.default.button(_templateObject4(), config_1.Color.Blue, config_1.Color.DeepBlue, config_1.Color.Pale);
exports.Month = styled_components_1.default.div(_templateObject5());
exports.WeekDays = styled_components_1.default.div(_templateObject6());
exports.WeekDay = styled_components_1.default.div(_templateObject7(), 100 / 7, config_1.Color.Gray);
exports.Weeks = styled_components_1.default.div(_templateObject8(), function (props) {
  return props.sideGutter;
});
exports.DayContainer = styled_components_1.default.div(_templateObject9(), 100 / 7);