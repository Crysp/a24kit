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

var prop_types_1 = __importDefault(require("prop-types"));

var Icon_1 = require("../Icon");

var styled_1 = require("./styled");

var ONE_HUNDRED_PERCENT = 100;
var MAX_STARS = 5;

var Rating = function Rating(props) {
  var value = props.value;
  var width = ONE_HUNDRED_PERCENT / MAX_STARS * value;
  return react_1.default.createElement(styled_1.Wrapper, null, react_1.default.createElement(styled_1.Placeholder, {
    width: ONE_HUNDRED_PERCENT - width
  }, react_1.default.createElement(Icon_1.StarHollow, {
    size: 16
  }), react_1.default.createElement(Icon_1.StarHollow, {
    size: 16
  }), react_1.default.createElement(Icon_1.StarHollow, {
    size: 16
  }), react_1.default.createElement(Icon_1.StarHollow, {
    size: 16
  }), react_1.default.createElement(Icon_1.StarHollow, {
    size: 16
  })), react_1.default.createElement(styled_1.StarList, {
    width: width
  }, react_1.default.createElement(Icon_1.Star, {
    size: 16
  }), react_1.default.createElement(Icon_1.Star, {
    size: 16
  }), react_1.default.createElement(Icon_1.Star, {
    size: 16
  }), react_1.default.createElement(Icon_1.Star, {
    size: 16
  }), react_1.default.createElement(Icon_1.Star, {
    size: 16
  })));
};

Rating.propTypes = {
  /**
   * Количество звезд (от 0 до 5)
   */
  value: prop_types_1.default.number
};
Rating.defaultProps = {
  value: 0
};
exports.default = Rating;