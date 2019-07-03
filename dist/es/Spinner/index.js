"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var styled_1 = require("./styled");

exports.default = function () {
  return react_1.default.createElement(styled_1.Wrapper, null, react_1.default.createElement(styled_1.Circle, null), react_1.default.createElement(styled_1.Circle, null), react_1.default.createElement(styled_1.Circle, null));
};