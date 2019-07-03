"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

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

var styled_1 = require("./styled");

var Radio =
/** @class */
function (_super) {
  __extends(Radio, _super);

  function Radio() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Radio.prototype.render = function () {
    var _a = this.props,
        color = _a.color,
        large = _a.large,
        disabled = _a.disabled,
        isChecked = _a.isChecked,
        isHighlighted = _a.isHighlighted;
    return react_1.default.createElement(styled_1.Wrapper, {
      large: large
    }, react_1.default.createElement(styled_1.EmptyCircle, {
      color: color,
      checked: isChecked,
      highlighted: isHighlighted,
      disabled: disabled
    }), react_1.default.createElement(styled_1.Circle, {
      color: color,
      checked: isChecked,
      highlighted: isHighlighted,
      large: large,
      disabled: disabled
    }));
  };

  Radio.propTypes = {
    color: prop_types_1.default.oneOf(['blue', 'green']),
    large: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    isChecked: prop_types_1.default.bool,
    isHighlighted: prop_types_1.default.bool
  };
  Radio.defaultProps = {
    color: 'blue',
    large: false,
    disabled: false,
    isChecked: false,
    isHighlighted: false
  };
  return Radio;
}(react_1.default.PureComponent);

exports.default = Radio;