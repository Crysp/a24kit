"use strict";

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    flex-shrink: 0;\n    padding-left: ", "px;\n    padding-right: ", "px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    flex-grow: 1;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    box-sizing: border-box;\n    display: inline-block;\n    border-radius: 2px;\n    transition:\n        box-shadow .25s ease-out,\n        border-color .2s linear,\n        background-color .2s linear,\n        color .2s linear;\n    border-style: solid;\n    border-width: ", "px;\n    border-color: ", ";\n    background-color: ", ";\n    box-shadow: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    left: ", ";\n    right: ", ";\n    margin-top: -8px;\n    width: 16px;\n    height: 16px;\n    color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    width: 100%;\n    border: 0;\n    border-radius: 2px;\n    color: ", ";\n    background-color: transparent;\n    outline: none;\n    text-align: ", ";\n    \n    ", "\n    \n    &::-webkit-input-placeholder { color: ", " }\n    &::-moz-placeholder { color: ", " }\n    &:-ms-input-placeholder { color: ", " }\n    &:-moz-placeholder { color: ", " }\n    &[disabled] {\n        color: ", ";\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        font: 400 14px \"Open Sans\", sans-serif;\n        padding: 11px ", "px 11px ", "px;\n        line-height: 16px;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            font: 400 18px \"Open Sans\", sans-serif;\n            padding: 7px 12px;\n            line-height: 20px;\n        "]);

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

function fieldSize(props) {
  if (props.large) {
    return styled_components_1.css(_templateObject());
  }

  return styled_components_1.css(_templateObject2(), props.iconAfter ? 40 : 12, props.iconBefore ? 40 : 12);
}

var wrapperBorderColor = function wrapperBorderColor(props) {
  if (props.disabled) {
    return config_1.Color.Pale;
  }

  switch (props.status) {
    case 'error':
      return config_1.Color.Red;

    case 'success':
      return config_1.Color.Green;

    default:
      return props.filling ? config_1.Color.Blue : config_1.Color.Pale;
  }
};

var wrapperBackgroundColor = function wrapperBackgroundColor(props) {
  if (props.disabled) {
    return config_1.Color.Silver;
  }

  switch (props.status) {
    case 'error':
      return config_1.Color.LightRed;

    case 'success':
      return config_1.Color.LightGreen;

    default:
      return config_1.Color.White;
  }
};

exports.Field = styled_components_1.default.input(_templateObject3(), config_1.Color.Coal, function (props) {
  return props.centered ? 'center' : 'left';
}, fieldSize, config_1.Color.Gray, config_1.Color.Gray, config_1.Color.Gray, config_1.Color.Gray, config_1.Color.Gray);
exports.IconWrapper = styled_components_1.default.div(_templateObject4(), function (props) {
  return props.iconBefore ? '12px' : 'auto';
}, function (props) {
  return props.iconAfter ? '12px' : 'auto';
}, config_1.Color.Gray);
exports.Wrapper = styled_components_1.default.div(_templateObject5(), function (props) {
  return props.boundless ? 0 : 1;
}, wrapperBorderColor, wrapperBackgroundColor, function (props) {
  return props.focused && !props.boundless ? '0 2px 4px #e4edf7' : 'none';
});
exports.Inner = styled_components_1.default.div(_templateObject6());
exports.FieldWrapper = styled_components_1.default.div(_templateObject7());
exports.Addon = styled_components_1.default.div(_templateObject8(), function (props) {
  return props.leftGutter ? 8 : 0;
}, function (props) {
  return props.rightGutter ? 8 : 0;
});