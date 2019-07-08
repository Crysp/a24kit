"use strict";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    z-index: 100;\n    position: absolute;\n    top: ", "px;\n    left: ", "px;\n    width: 0;\n    padding-bottom: 0;\n    transform: translate(-50%, -50%);\n    opacity: 0;\n    border-radius: 50%;\n    background-color: ", ";\n    animation: ", " 1.5s ease-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n        opacity: 1;\n    }\n    100% {\n        width: 200%;\n        padding-bottom: 200%;\n        opacity: 0;\n    }\n"]);

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

var ripple = styled_components_1.keyframes(_templateObject());

var getBackgroundColor = function getBackgroundColor(props) {
  var backgroundColor;

  switch (props.color) {
    case 'blue':
      backgroundColor = config_1.Color.Blue;
      break;

    case 'green':
      backgroundColor = config_1.Color.Green;
      break;

    case 'gold':
      backgroundColor = config_1.Color.Gold;
      break;

    case 'red':
      backgroundColor = config_1.Color.Red;
      break;

    case 'lightBlue':
      backgroundColor = config_1.Color.LightBlue;
      break;

    case 'lightGreen':
      backgroundColor = config_1.Color.LightGreen;
      break;

    case 'lightGold':
      backgroundColor = config_1.Color.LightGold;
      break;

    case 'lightRed':
      backgroundColor = config_1.Color.LightRed;
      break;

    case 'gray':
      backgroundColor = config_1.Color.Gray;
      break;

    case 'pale':
      backgroundColor = config_1.Color.Pale;
      break;

    case 'silver':
      backgroundColor = config_1.Color.Silver;
      break;

    default:
      backgroundColor = 'transparent';
  }

  return backgroundColor;
};

exports.default = styled_components_1.default.span(_templateObject2(), function (props) {
  return props.top;
}, function (props) {
  return props.left;
}, getBackgroundColor, ripple);