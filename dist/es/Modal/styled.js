"use strict";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    .ui-modal {\n        position: relative;\n        width: 600px;\n        margin: 30px auto;\n        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);\n        background: #fff;\n        border-radius: 5px;\n    }\n    .ui-modal-mask {\n        position: fixed;\n        top: 0;\n        right: 0;\n        left: 0;\n        bottom: 0;\n        background-color: rgba(51, 51, 51, .6);\n        height: 100%;\n        z-index: 1050;\n    }\n    .ui-modal-mask-hidden {\n        display: none;\n    }\n    .ui-modal-wrap {\n        position: fixed;\n        overflow: auto;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1050;\n        -webkit-overflow-scrolling: touch;\n        outline: 0;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .ui-modal-close {\n        position: absolute;\n        right: 8px;\n        top: 8px;\n        width: 32px;\n        height: 32px;\n        padding: 8px;\n        border: 0;\n        border-radius: 2px;\n        color: ", ";\n        background: transparent;\n        outline: none;\n        cursor: pointer;\n        text-decoration: none;\n        z-index: 1;\n        &:hover, &:active {\n            color: ", ";\n        }\n        &:active {\n            background: ", ";\n        }\n    }\n    .ui-modal-close-x {\n        position: relative;\n        display: block;\n        width: 16px;\n        height: 16px;\n        &::before, &::after {\n            content: '';\n            position: absolute;\n            display: block;\n            top: 50%;\n            left: 50%;\n            width: 2px;\n            height: 20px;\n            transform-origin: 50% 50%;\n            border-radius: 2px;\n            background: currentColor;\n        }\n        &::before {\n            transform: translate(-50%, -50%) rotate(45deg);\n        }\n        &::after {\n            transform: translate(-50%, -50%) rotate(-45deg);\n        }\n    }\n    .ui-modal-header {\n        padding: 32px 32px 0 32px;\n    }\n    .ui-modal-title {\n        font: 600 24px \"Open Sans\", Helvetica, Arial, sans-serif;\n        line-height: 32px;\n    }\n    .ui-modal-body {\n        padding: 16px 32px 32px 32px;\n        font: 400 13px \"Open Sans\", Helvetica, Arial, sans-serif;\n        line-height: 20px;\n    }\n    .ui-modal-footer {\n        padding: 0 32px 32px 32px;\n        text-align: center;\n        button + button {\n            margin-left: 32px;\n        }\n    }\n    .ui-modal-zoom {\n        z-index: auto;\n    }\n    .ui-modal-zoom-enter, .ui-modal-zoom-appear {\n        opacity: 0;\n        animation-name: ", ";\n        animation-duration: 0.15s;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);\n        animation-play-state: paused;\n    }\n    .ui-modal-zoom-enter-active, .ui-modal-zoom-appear-active {\n        animation-play-state: running;\n    }\n    .ui-modal-zoom-leave {\n        animation-name: ", ";\n        animation-duration: 0.15s;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);\n        animation-play-state: paused;\n    }\n    .ui-modal-zoom-leave-active {\n        animation-play-state: running;\n    }\n    .ui-modal-fade {\n        z-index: auto;\n    }\n    .ui-modal-fade-enter, .ui-modal-fade-appear {\n        opacity: 0;\n        animation-name: ", ";\n        animation-duration: 0.15s;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n        animation-play-state: paused;\n    }\n    .ui-modal-fade-enter-active, .ui-modal-fade-appear {\n        animation-play-state: running;\n    }\n    .ui-modal-fade-leave {\n        animation-name: ", ";\n        animation-duration: 0.15s;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n        animation-play-state: paused;\n    }\n    .ui-modal-fade-leave-active {\n        animation-play-state: running;\n    }\n    .ui-modal-vertical-centered {\n        text-align: center;\n        &::before {\n            content: '';\n            display: inline-block;\n            height: 100%;\n            vertical-align: middle;\n            width: 0;\n        }\n    }\n    .ui-modal-vertical-centered .ui-modal {\n        display: inline-block;\n        vertical-align: middle;\n        top: 0;\n        text-align: left;\n    }\n    .ui-modal-extended-content .ui-modal-body, .ui-modal-extended-content .ui-modal-footer {\n        padding: 0;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        transform: scale(1, 1);\n    }\n    100% {\n        opacity: 0;\n        transform: scale(0, 0);\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 0;\n        transform: scale(0, 0);\n    }\n    100% {\n        opacity: 1;\n        transform: scale(1, 1);\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 0;\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var styled_components_1 = require("styled-components");

var config_1 = require("../config");

var fadeIn = styled_components_1.keyframes(_templateObject());
var fadeOut = styled_components_1.keyframes(_templateObject2());
var zoomIn = styled_components_1.keyframes(_templateObject3());
var zoomOut = styled_components_1.keyframes(_templateObject4());
exports.default = styled_components_1.createGlobalStyle(_templateObject5(), config_1.Color.Pale, config_1.Color.Gray, config_1.Color.Pale, zoomIn, zoomOut, fadeIn, fadeOut);