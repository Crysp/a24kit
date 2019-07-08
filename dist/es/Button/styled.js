"use strict";

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    z-index: 200;\n    position: relative;\n    display: inline-block;\n    top: -1px;\n    width: 16px;\n    height: 16px;\n    line-height: 16px;\n    vertical-align: middle;\n    & > * {\n        max-width: 16px;\n        max-height: 16px;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    z-index: 200;\n    position: relative;\n    display: inline-block;\n    padding: 0 2px;\n    margin-left: ", "px;\n    margin-right: ", "px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    overflow: hidden;\n    position: relative;\n    padding: 12px ", "px;\n    font-size: 14px;\n    line-height: 16px;\n    font-weight: 600;\n    text-transform: ", ";\n    color: #fff;\n    background-color: ", ";\n    border: 0;\n    border-radius: 2px;\n    cursor: pointer;\n    outline: none;\n    transition:\n        background-color .12s linear,\n        color .12s linear,\n        box-shadow .2s linear,\n        border-color .12s linear;\n        \n    ", "\n    \n    &[disabled] {\n        color: ", ";\n        background-color: ", ";\n        cursor: not-allowed;\n        pointer-events: none;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        padding-top: 11px;\n        padding-bottom: 11px;\n        color: ", ";\n        border: 1px solid ", ";\n        background-color: ", ";\n        font-weight: 400;\n        &:hover, &:active {\n            color: ", ";\n        }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n        background-color: ", ";\n        &:hover, &:active {\n            color: ", ";\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        color: ", ";\n        border: 1px solid ", ";\n        background-color: transparent;\n        &:hover, &:active {\n            color: ", ";\n            border-color: ", ";\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        background-color: ", ";\n        &:hover, &:active {\n            color: ", ";\n            background-color: ", ";\n        }\n    "]);

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

function filled(color, activeColor) {
  return styled_components_1.css(_templateObject(), color, config_1.Color.White, activeColor);
}

function hollow(color, activeColor) {
  return styled_components_1.css(_templateObject2(), color, color, activeColor, activeColor);
}

function contrast(color, activeColor) {
  return styled_components_1.css(_templateObject3(), color, config_1.Color.White, activeColor);
}

function fillInfo() {
  return styled_components_1.css(_templateObject4(), config_1.Color.Blue, config_1.Color.Pale, config_1.Color.White, config_1.Color.DeepBlue);
}

function fillHollow(props) {
  switch (props.color) {
    case 'red':
      return hollow(config_1.Color.Red, config_1.Color.DeepRed);

    case 'gold':
      return hollow(config_1.Color.Gold, config_1.Color.DeepGold);

    case 'green':
      return hollow(config_1.Color.Green, config_1.Color.DeepGreen);

    case 'blue':
      return hollow(config_1.Color.Blue, config_1.Color.DeepBlue);

    default:
      return hollow('#c6c6c6', config_1.Color.Gray);
  }
}

function fillContrast(props) {
  switch (props.color) {
    case 'red':
      return contrast(config_1.Color.Red, config_1.Color.DeepRed);

    case 'gold':
      return contrast(config_1.Color.Gold, config_1.Color.DeepGold);

    case 'green':
      return contrast(config_1.Color.Green, config_1.Color.DeepGreen);

    case 'blue':
      return contrast(config_1.Color.Blue, config_1.Color.DeepBlue);

    default:
      return contrast('#c6c6c6', config_1.Color.Gray);
  }
}

function fillDefault(props) {
  switch (props.color) {
    case 'red':
      return filled(config_1.Color.Red, config_1.Color.DeepRed);

    case 'gold':
      return filled(config_1.Color.Gold, config_1.Color.DeepGold);

    case 'green':
      return filled(config_1.Color.Green, config_1.Color.DeepGreen);

    case 'blue':
      return filled(config_1.Color.Blue, config_1.Color.DeepBlue);

    default:
      return filled('#c6c6c6', config_1.Color.Gray);
  }
}

function fill(props) {
  switch (true) {
    case props.hollow:
      return fillHollow(props);

    case props.contrast:
      return fillContrast(props);

    case props.info:
      return fillInfo();

    default:
      return fillDefault(props);
  }
}

exports.StyledButton = styled_components_1.default.button(_templateObject5(), function (props) {
  return props.side;
}, function (props) {
  return props.secondary ? 'none' : 'uppercase';
}, config_1.Color.Pale, fill, config_1.Color.Gray, config_1.Color.Pale);
exports.ButtonText = styled_components_1.default.span(_templateObject6(), function (props) {
  return props.prependIcon ? 10 : 0;
}, function (props) {
  return props.appendIcon ? 10 : 0;
});
exports.IconWrapper = styled_components_1.default.span(_templateObject7());