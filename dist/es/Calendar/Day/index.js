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

var Day =
/** @class */
function (_super) {
  __extends(Day, _super);

  function Day() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onClick = function () {
      var _a = _this.props,
          selectable = _a.selectable,
          onClick = _a.onClick;
      if (!selectable) return;
      onClick();
    };

    return _this;
  }

  Day.prototype.render = function () {
    var value = this.props.value;
    return react_1.default.createElement(styled_1.Wrapper, {
      onClick: this.onClick
    }, react_1.default.createElement(styled_1.Text, null, value));
  };

  Day.propTypes = {
    value: prop_types_1.default.number.isRequired,
    selectable: prop_types_1.default.bool,
    onClick: prop_types_1.default.func
  };
  Day.defaultProps = {
    selectable: false,
    onClick: function onClick() {}
  };
  return Day;
}(react_1.default.PureComponent);

exports.default = Day;