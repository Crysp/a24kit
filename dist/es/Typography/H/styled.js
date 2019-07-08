"use strict";

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    margin: 0;\n    font-family: \"Open Sans\", sans-serif;\n    color: inherit;\n    ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        font-size: 24px;\n        line-height: 32px;\n        font-weight: 600;\n        &:empty {\n            ", "\n        }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            font-size: 13px;\n            line-height: 20px;\n            font-weight: 400;\n            &:empty {\n                ", "\n            }\n        "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            font-size: 14px;\n            line-height: 20px;\n            font-weight: 600;\n            &:empty {\n                ", "\n            }\n        "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            font-size: 16px;\n            line-height: 24px;\n            font-weight: 600;\n            &:empty {\n                ", "\n            }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            font-size: 18px;\n            line-height: 28px;\n            font-weight: 400;\n            &:empty {\n                ", "\n            }\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            font-size: 24px;\n            line-height: 32px;\n            font-weight: 400;\n            &:empty {\n                ", "\n            }\n        "]);

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

var config_1 = require("../../config");

var getSize = function getSize(props) {
  if (props.size === 2) {
    return styled_components_1.css(_templateObject(), config_1.skeleton('40%', '24px', 'pale'));
  }

  if (props.size === 3) {
    return styled_components_1.css(_templateObject2(), config_1.skeleton('40%', '18px', 'pale'));
  }

  if (props.size === 4) {
    return styled_components_1.css(_templateObject3(), config_1.skeleton('40%', '16px', 'pale'));
  }

  if (props.size === 5) {
    return styled_components_1.css(_templateObject4(), config_1.skeleton('40%', '14px', 'pale'));
  }

  if (props.size === 6) {
    return styled_components_1.css(_templateObject5(), config_1.skeleton('40%', '13px', 'pale'));
  }

  return styled_components_1.css(_templateObject6(), config_1.skeleton('40%', '24px', 'pale'));
};

exports.default = styled_components_1.default.div(_templateObject7(), getSize);