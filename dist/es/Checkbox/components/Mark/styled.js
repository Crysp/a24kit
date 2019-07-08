"use strict";

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    fill: ", ";\n    \n    ", "\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n    height: 100%;\n    border-radius: 2px;\n    opacity: ", ";\n    transform: scale(", ");\n    transition: \n        opacity .6s cubic-bezier(0.23, 1, 0.32, 1),\n        transform .6s cubic-bezier(0.23, 1, 0.32, 1);\n    \n    ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-block;\n    box-sizing: border-box;\n    border: ", ";\n    background-color: ", ";\n    border-radius: 2px;\n    transition: border-color .12s linear, border-width .12s linear;\n    \n    ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        width: 8px;\n        height: 8px;\n        margin: -4px 0 0 -4px;\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        width: 10px;\n        height: 10px;\n        margin: -5px 0 0 -5px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        top: 2px;\n        width: 16px;\n        height: 16px;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        top: auto;\n        width: 20px;\n        height: 20px;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["background-color: ", ";"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["background-color: ", ";"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["background-color: ", ";"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["background-color: ", ";"]);

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

var Icon_1 = require("../../../Icon");

var config_1 = require("../../../config");

function fill(props) {
  if (props.disabled) {
    return styled_components_1.css(_templateObject(), config_1.Color.Gray);
  }

  switch (props.color) {
    case 'green':
      return styled_components_1.css(_templateObject2(), config_1.Color.Green);

    case 'deepBlue':
      return styled_components_1.css(_templateObject3(), config_1.Color.DeepBlue);

    default:
      return styled_components_1.css(_templateObject4(), config_1.Color.Blue);
  }
}

function largeWrapper() {
  return styled_components_1.css(_templateObject5());
}

function defaultWrapper() {
  return styled_components_1.css(_templateObject6());
}

function size(props) {
  switch (true) {
    case props.large:
      return largeWrapper();

    default:
      return defaultWrapper();
  }
}

function largeIcon() {
  return styled_components_1.css(_templateObject7());
}

function defaultIcon() {
  return styled_components_1.css(_templateObject8());
}

function iconSize(props) {
  switch (true) {
    case props.large:
      return largeIcon();

    default:
      return defaultIcon();
  }
}

exports.Wrapper = styled_components_1.default.div(_templateObject9(), function (props) {
  return props.isChecked ? 0 : "1px solid ".concat(config_1.Color.Pale);
}, function (props) {
  return props.disabled ? config_1.Color.Zircon : config_1.Color.White;
}, size);
exports.CheckMarkWrapper = styled_components_1.default.div(_templateObject10(), function (props) {
  return props.isChecked ? 1 : 0;
}, function (props) {
  return props.isChecked ? 1 : 0;
}, fill);
exports.CheckMarkIcon = styled_components_1.default(Icon_1.CheckMark)(_templateObject11(), config_1.Color.White, iconSize);