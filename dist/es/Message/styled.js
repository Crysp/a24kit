"use strict";

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    width: 16px;\n    height: 16px;\n    margin-right: 8px;\n    fill: ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    margin-right: 16px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    padding: 10px 16px;\n    border-radius: 2px;\n    box-shadow: 0 4px 12px rgba(0,0,0,.15);\n    font: 400 13px 'Open Sans', Helvetica, Arial, sans-serif;\n    pointer-events: all;\n    ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n        color: ", ";\n        ", "\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            a {\n                color: ", ";\n                text-decoration: underline;\n                &:hover {\n                    opacity: .8;\n                }\n            }\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    .ui-message {\n        width: 100%;\n        position: fixed;\n        z-index: 99999;\n        top: 16px;\n        left: 0;\n        pointer-events: none;\n    }\n    .ui-message-notice {\n        padding: 8px;\n        text-align: center;\n        &:first-child {\n            margin-top: -8px;\n        }\n    }\n    .ui-message-notice-content {\n        display: inline-block;\n        pointer-events: all;\n    }\n    .ui-message-notice.move-up-appear,\n    .ui-message-notice.move-up-enter,\n    .ui-message-notice.move-up-leave {\n        animation-duration: .2s;\n        animation-fill-mode: both;\n        animation-play-state: paused;\n    }\n    .ui-message-notice.move-up-appear, .ui-message-notice.move-up-enter {\n        opacity: 0;\n        animation-timing-function: cubic-bezier(.08,.82,.17,1);\n    }\n    .ui-message-notice.move-up-appear-active, .ui-message-notice.move-up-enter-active {\n        animation-name: ", ";\n        animation-play-state: running;\n    }\n    .ui-message-notice.move-up-leave {\n        animation-timing-function: cubic-bezier(.6,.04,.98,.34);\n    }\n    .ui-message-notice.move-up-leave-active {\n        animation-name: ", ";\n        animation-play-state: running;\n        pointer-events: none;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        transform-origin: 0 0;\n        transform: translateY(0);\n        opacity: 1\n    }\n    to {\n        transform-origin: 0 0;\n        transform: translateY(-100%);\n        opacity: 0\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        transform-origin: 0 0;\n        transform: translateY(-100%);\n        opacity: 0\n    }\n    to {\n        transform-origin: 0 0;\n        transform: translateY(0);\n        opacity: 1\n    }\n"]);

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

var antMoveUpIn = styled_components_1.keyframes(_templateObject());
var antMoveUpOut = styled_components_1.keyframes(_templateObject2());
exports.GlobalStyles = styled_components_1.createGlobalStyle(_templateObject3(), antMoveUpIn, antMoveUpOut);

var getNoticeStyles = function getNoticeStyles(props) {
  var backgroundColor = config_1.Color.White;
  var color = config_1.Color.Coal;
  var linkCSS = styled_components_1.css(_templateObject4());

  if (props.type === 'warning') {
    backgroundColor = config_1.Color.Gold;
    color = config_1.Color.White;
  } else if (props.type === 'error') {
    backgroundColor = config_1.Color.Red;
    color = config_1.Color.White;
  }

  if (['warning', 'error'].indexOf(props.type) > -1) {
    linkCSS = styled_components_1.css(_templateObject5(), config_1.Color.White);
  }

  return styled_components_1.css(_templateObject6(), backgroundColor, color, linkCSS);
};

exports.Notice = styled_components_1.default.div(_templateObject7(), getNoticeStyles);
exports.SpinnerWrapper = styled_components_1.default.div(_templateObject8());

var getStyledIconFill = function getStyledIconFill(props) {
  var fill = config_1.Color.White;

  if (props.info) {
    fill = config_1.Color.Blue;
  } else if (props.success) {
    fill = config_1.Color.Green;
  }

  return fill;
};

exports.StyledIcon = styled_components_1.default.div(_templateObject9(), getStyledIconFill);