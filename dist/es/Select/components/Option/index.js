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

var Option =
/** @class */
function (_super) {
  __extends(Option, _super);

  function Option() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Option.prototype.render = function () {
    var _a = this.props,
        label = _a.label,
        hasCheckbox = _a.hasCheckbox,
        isChecked = _a.isChecked,
        isSelected = _a.isSelected,
        onSelect = _a.onSelect;
    return react_1.default.createElement(styled_1.Wrapper, {
      selected: isSelected,
      onClick: onSelect
    }, hasCheckbox ? react_1.default.createElement(styled_1.StyledCheckbox, {
      label: label,
      isChecked: isChecked
    }) : label);
  };

  Option.propTypes = {
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.node]).isRequired,
    hasCheckbox: prop_types_1.default.bool,
    isChecked: prop_types_1.default.bool,
    isSelected: prop_types_1.default.bool,
    onSelect: prop_types_1.default.func
  };
  Option.defaultProps = {
    hasCheckbox: false,
    isChecked: false,
    isSelected: false,
    onSelect: function onSelect() {}
  };
  return Option;
}(react_1.default.PureComponent);

exports.default = Option;