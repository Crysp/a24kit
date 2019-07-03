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

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

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

var styled_1 = __importDefault(require("./styled"));

exports.RIPPLE_DURATION = 1500;

var Ripple =
/** @class */
function (_super) {
  __extends(Ripple, _super);

  function Ripple() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Ripple.prototype.render = function () {
    return react_1.default.createElement(styled_1.default, __assign({}, this.props));
  };

  Ripple.propTypes = {
    top: prop_types_1.default.number.isRequired,
    left: prop_types_1.default.number.isRequired,
    color: prop_types_1.default.oneOf(['green', 'lightGreen', 'blue', 'lightBlue', 'gold', 'lightGold', 'red', 'lightRed', 'gray', 'pale', 'silver']).isRequired
  };
  return Ripple;
}(react_1.default.PureComponent);

exports.default = Ripple;