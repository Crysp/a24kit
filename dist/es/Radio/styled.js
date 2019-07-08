"use strict";

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    z-index: 200;\n    position: absolute;\n    box-sizing: border-box;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    ", ";\n    transition:\n        opacity .6s cubic-bezier(0.23, 1, 0.32, 1),\n        transform .6s cubic-bezier(0.23, 1, 0.32, 1),\n        border-color .12s linear;\n    &::before {\n        position: absolute;\n        content: '';\n        display: block;\n        top: 50%;\n        left: 50%;\n        border-radius: 50%;\n    }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        border: 1px solid ", ";\n        background-color: ", ";\n        ", ";\n        &::before {\n            ", ";\n            background-color: ", ";\n        }\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n            width: 10px;\n            height: 10px;\n            margin: -5px 0 0 -5px;\n        "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n            opacity: 1;\n            transform: scale(1);\n        "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        width: 8px;\n        height: 8px;\n        margin: -4px 0 0 -4px;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        opacity: 0;\n        transform: scale(0);\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    z-index: 100;\n    position: absolute;\n    box-sizing: border-box;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    transition:\n        opacity .6s cubic-bezier(0.23, 1, 0.32, 1),\n        transform .6s cubic-bezier(0.23, 1, 0.32, 1),\n        border-color .12s linear;\n    ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        border: 1px solid ", ";\n        background-color: ", ";\n        ", "\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            opacity: 0;\n            transform: scale(0);\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        opacity: 1;\n        transform: scale(1);\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: inline-block;\n    top: ", ";\n    width: ", "px;\n    height: ", "px;\n"]);

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

exports.Wrapper = styled_components_1.default.div(_templateObject(), function (props) {
  return props.large ? 'auto' : '2px';
}, function (props) {
  return props.large ? 20 : 16;
}, function (props) {
  return props.large ? 20 : 16;
});

var getEmptyCircleStyles = function getEmptyCircleStyles(props) {
  var backgroundColor = config_1.Color.White;
  var borderColor = config_1.Color.Pale;
  var animationState = styled_components_1.css(_templateObject2());

  if (props.disabled) {
    backgroundColor = config_1.Color.Zircon;
    borderColor = config_1.Color.Pale;
  } else if (props.color === 'blue' && props.highlighted) {
    borderColor = config_1.Color.Blue;
  } else if (props.color === 'green' && props.highlighted) {
    borderColor = config_1.Color.Green;
  }

  if (props.checked) {
    animationState = styled_components_1.css(_templateObject3());
  }

  return styled_components_1.css(_templateObject4(), borderColor, backgroundColor, animationState);
};

exports.EmptyCircle = styled_components_1.default.div(_templateObject5(), getEmptyCircleStyles);

var getCircleStyles = function getCircleStyles(props) {
  var backgroundColor = config_1.Color.White;
  var circleColor = config_1.Color.Blue;
  var borderColor = config_1.Color.Pale;
  var animationState = styled_components_1.css(_templateObject6());
  var circleSize = styled_components_1.css(_templateObject7());

  if (props.disabled) {
    backgroundColor = config_1.Color.Zircon;
    circleColor = config_1.Color.Gray;
    borderColor = config_1.Color.Pale;
  } else if (props.color === 'blue' && props.highlighted) {
    borderColor = config_1.Color.Blue;
  } else if (props.color === 'green') {
    circleColor = config_1.Color.Green;

    if (props.highlighted) {
      borderColor = config_1.Color.Green;
    }
  }

  if (props.checked) {
    animationState = styled_components_1.css(_templateObject8());
  }

  if (props.large) {
    circleSize = styled_components_1.css(_templateObject9());
  }

  return styled_components_1.css(_templateObject10(), borderColor, backgroundColor, animationState, circleSize, circleColor);
};

exports.Circle = styled_components_1.default.div(_templateObject11(), getCircleStyles);