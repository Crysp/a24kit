"use strict";

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    width: ", ";\n    height: ", ";\n    border-radius: 2px;\n    background-image: ", ";\n    background-size: 500px;\n    animation: ", " .8s linear infinite;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            ", ",\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["linear-gradient(\n            90deg,\n            ", ",\n            ", " 30%,\n            #fff,\n            ", " 70%,\n            ", "\n        )"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% { background-position: 0 0; }\n    100% { background-position: 500px 0; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var styled_components_1 = require("styled-components");

var polished_1 = require("polished");

exports.Color = {
  LightRed: '#fadcdc',
  Red: '#e95454',
  DeepRed: '#e32222',
  LightGold: '#fdf3e0',
  Gold: '#f6be4e',
  DeepGold: '#f3aa19',
  LightGreen: '#ecf4e4',
  Green: '#a2c679',
  DeepGreen: '#87b552',
  LightBlue: '#bdd3eb',
  Blue: '#4786c8',
  DeepBlue: '#316aa5',
  Black: '#000000',
  Coal: '#333333',
  Gray: '#8d8d8d',
  Pale: '#e1e1e1',
  Silver: '#ececec',
  Zircon: '#f5f5f5',
  White: '#ffffff',
  Purple: '#a476c7'
};
exports.COLOR = Object.keys(exports.Color).reduce(function (colors, colorName) {
  return Object.assign({}, colors, _defineProperty({}, "".concat(colorName.charAt(0).toLowerCase()).concat(colorName.slice(1)), exports.Color[colorName]));
}, {});
exports.FONT_FAMILY = {
  OpenSans: '"Open Sans", sans-serif'
};
exports.SIZE = {
  borderRadius: 3
};
var pending = styled_components_1.keyframes(_templateObject());

var getSkeletonGradient = function getSkeletonGradient(color) {
  if (color === 'zircon') {
    return styled_components_1.css(_templateObject2(), exports.Color.Zircon, exports.Color.Zircon, exports.Color.Zircon, exports.Color.Zircon);
  }

  if (color === 'silver') {
    return styled_components_1.css(_templateObject3(), exports.Color.Silver, exports.Color.Silver, exports.Color.Zircon, exports.Color.Silver, exports.Color.Silver);
  }

  if (color === 'pale') {
    return styled_components_1.css(_templateObject4(), exports.Color.Pale, exports.Color.Pale, exports.Color.Silver, exports.Color.Pale, exports.Color.Pale);
  }

  if (color === 'gray') {
    return styled_components_1.css(_templateObject5(), exports.Color.Gray, exports.Color.Gray, exports.Color.Pale, exports.Color.Gray, exports.Color.Gray);
  }

  if (color === 'coal') {
    return styled_components_1.css(_templateObject6(), exports.Color.Coal, exports.Color.Coal, exports.Color.Gray, exports.Color.Coal, exports.Color.Coal);
  }

  if (color === 'blue') {
    return styled_components_1.css(_templateObject7(), exports.Color.Blue, exports.Color.Blue, polished_1.lighten(0.1, exports.Color.Blue), exports.Color.Blue, exports.Color.Blue);
  }

  if (color === 'green') {
    return styled_components_1.css(_templateObject8(), exports.Color.Green, exports.Color.Green, polished_1.lighten(0.1, exports.Color.Green), exports.Color.Green, exports.Color.Green);
  }

  if (color === 'gold') {
    return styled_components_1.css(_templateObject9(), exports.Color.Gold, exports.Color.Gold, polished_1.lighten(0.1, exports.Color.Gold), exports.Color.Gold, exports.Color.Gold);
  }

  if (color === 'red') {
    return styled_components_1.css(_templateObject10(), exports.Color.Red, exports.Color.Red, polished_1.lighten(0.1, exports.Color.Red), exports.Color.Red, exports.Color.Red);
  }

  return '';
};

exports.skeleton = function (width, height, gradientColor) {
  return styled_components_1.css(_templateObject11(), width, height, getSkeletonGradient(gradientColor), pending);
};

exports.default = {
  Color: exports.Color,
  size: exports.SIZE,
  mixin: {
    skeleton: exports.skeleton
  }
};