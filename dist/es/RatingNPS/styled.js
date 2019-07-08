"use strict";

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 14px;\n    font-weight: 400;\n    width: 520px;\n    line-height: 26px;\n    margin-top: 8px;\n    display: -webkit-flex;\n    display: flex;\n    justify-content: space-between;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: 40px;\n    height: 40px;\n    margin-right: 8px;\n    border-radius: 4px;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 40px;\n    text-align: center;\n    background: ", ";\n    cursor: pointer;\n    outline: none;\n    transition: all .3s ease;\n     ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        background-color:  ", ";\n        border: 1px solid ", ";\n        color: ", ";\n        &:hover {\n             background: ", ";\n             border: 1px solid  ", ";\n        }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: auto;\n    display: inline-block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    display: block;\n    margin: 24px 0;\n"]);

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

var polished_1 = require("polished");

var config_1 = require("../config");

exports.Wrapper = styled_components_1.default.div(_templateObject());
exports.GradeLine = styled_components_1.default.div(_templateObject2());

function beforeRateBox(props) {
  var color = props.value < 9 ? polished_1.lighten(0.22 * (1 - props.value / props.countOfBoxes), config_1.Color.Green) : config_1.Color.Green;
  return styled_components_1.css(_templateObject3(), color, color, config_1.Color.White, config_1.Color.Blue, config_1.Color.Blue);
}

function afterRateBox(props) {
  var activeBox = "\n            background-color: ".concat(config_1.Color.Blue, ";\n            border: 1px solid  ").concat(config_1.Color.Blue, ";\n            color: ").concat(config_1.Color.White, ";\n            cursor: default;                \n            ");
  var unactiveBox = "\n            background-color: transparent;\n            border: 1px solid  ".concat(config_1.Color.DeepGreen, ";\n            color: ").concat(config_1.Color.DeepGreen, ";\n            cursor: default;\n            ");
  return props.rateValue === props.value ? activeBox : unactiveBox;
}

exports.Box = styled_components_1.default.button(_templateObject4(), config_1.Color.Green, function (props) {
  return props.isRated ? afterRateBox(props) : beforeRateBox(props);
});
exports.GrageRange = styled_components_1.default.div(_templateObject5(), config_1.Color.DeepGreen);