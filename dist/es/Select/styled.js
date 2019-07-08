"use strict";

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    padding: 6px 12px;\n    font: 400 14px \"Open Sans\", Helvetica, Arial, sans-serif;\n    line-height: 20px;\n    cursor: default;\n    color: ", ";\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    border-bottom: 1px solid ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    overflow: auto;\n    z-index: 1000;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 44px;\n    max-height: ", "px;\n    transform-origin: center top 0;\n    border: 1px solid ", ";\n    border-radius: 2px;\n    background-color: ", ";\n    box-shadow: 0 2px 4px #e4edf7;\n    transition:\n        opacity .45s cubic-bezier(0.23, 1, 0.32, 1),\n        transform .45s cubic-bezier(0.23, 1, 0.32, 1);\n    ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        opacity: 0;\n        pointer-events: none;\n        transform: translateY(-14px) scale(.8);\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n            opacity: 1;\n            transform: translateY(0) scale(1);\n            pointer-events: inherit;\n        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 12px;\n    top: 50%;\n    margin-top: -8px;\n    fill: ", ";\n    transform: rotate(", "deg);\n    transition: transform .45s cubic-bezier(0.23, 1, 0.32, 1);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n    white-space: nowrap;\n    font: 400 14px \"Open Sans\", Helvetica, Arial, sans-serif;\n    line-height: 16px;\n    color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    box-sizing: border-box;\n    padding: 11px 40px 11px 12px;\n    ", ";\n    border-radius: 2px;\n    line-height: 16px;\n    cursor: pointer;\n    transition: border-color .12s linear, box-shadow .12s linear;\n    &:hover {\n        border-color: ", ";\n    }\n    ", ":focus & {\n        box-shadow: 0 2px 4px #e4edf7;\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        border: 1px solid ", ";\n        background-color: ", ";\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    pointer-events: ", ";\n    &:focus {\n        outline: none;\n    }\n"]);

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

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var styled_components_1 = __importStar(require("styled-components"));

var Icon_1 = require("../Icon");

var Input_1 = __importDefault(require("../Input"));

var config_1 = require("../config");

exports.Wrapper = styled_components_1.default.div(_templateObject(), function (props) {
  return props.disabled ? 'none' : 'inherit';
});

var getFieldStyles = function getFieldStyles(props) {
  var borderColor = config_1.Color.Pale;
  var backgroundColor = config_1.Color.White;

  if (props.opened) {
    borderColor = config_1.Color.Blue;
  }

  if (props.disabled) {
    backgroundColor = config_1.Color.Silver;
  }

  return styled_components_1.css(_templateObject2(), borderColor, backgroundColor);
};

exports.Field = styled_components_1.default.div(_templateObject3(), getFieldStyles, config_1.Color.Blue, exports.Wrapper);
exports.Text = styled_components_1.default.div(_templateObject4(), function (props) {
  return props.disabled ? config_1.Color.Gray : config_1.Color.Coal;
});
exports.Arrow = styled_components_1.default(Icon_1.ArrowDown)(_templateObject5(), function (props) {
  return props.disabled ? config_1.Color.Gray : config_1.Color.Blue;
}, function (props) {
  return props.opened ? 180 : 0;
});

var getOptionListStyles = function getOptionListStyles(props) {
  if (props.opened) {
    return styled_components_1.css(_templateObject6());
  }

  return styled_components_1.css(_templateObject7());
};

exports.OptionList = styled_components_1.default.div(_templateObject8(), function (props) {
  return props.maxHeight;
}, config_1.Color.Pale, config_1.Color.White, getOptionListStyles);
exports.Search = styled_components_1.default(Input_1.default)(_templateObject9(), config_1.Color.Pale);
exports.Result = styled_components_1.default.div(_templateObject10(), config_1.Color.Gray);