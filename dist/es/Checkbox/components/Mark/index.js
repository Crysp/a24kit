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

var Mark = function Mark(props) {
  var isChecked = props.isChecked,
      disabled = props.disabled,
      color = props.color,
      large = props.large;
  return react_1.default.createElement(styled_1.Wrapper, {
    disabled: disabled,
    isChecked: isChecked,
    large: large
  }, react_1.default.createElement(styled_1.CheckMarkWrapper, {
    isChecked: isChecked,
    disabled: disabled,
    color: color
  }, react_1.default.createElement(styled_1.CheckMarkIcon, {
    large: large
  })));
};

Mark.defaultProps = {
  isChecked: false,
  disabled: false,
  color: '',
  large: false
};
exports.default = Mark;