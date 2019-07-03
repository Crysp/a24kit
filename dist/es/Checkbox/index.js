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

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
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

var Mark_1 = __importDefault(require("./components/Mark"));

var styled_1 = require("./styled");
/**
 * @develop
 */


var Checkbox =
/** @class */
function (_super) {
  __extends(Checkbox, _super);

  function Checkbox() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onCheck = function () {
      var _a = _this.props,
          disabled = _a.disabled,
          onCheck = _a.onCheck;
      if (disabled) return;
      onCheck();
    };

    return _this;
  }

  Checkbox.prototype.render = function () {
    var _a = this.props,
        label = _a.label,
        disabled = _a.disabled,
        other = __rest(_a, ["label", "disabled"]);

    delete other.onCheck;
    delete other.large;
    var hasLabel = typeof label === 'string' && label.length > 0 || label;
    return react_1.default.createElement(styled_1.Wrapper, __assign({
      disabled: disabled,
      onClick: this.onCheck
    }, other), react_1.default.createElement(Mark_1.default, __assign({}, this.props)), hasLabel && react_1.default.createElement(styled_1.Label, {
      disabled: disabled
    }, label));
  };

  Checkbox.propTypes = {
    /**
     * Цвет
     */
    color: prop_types_1.default.oneOf(['blue', 'green', 'deepBlue']),

    /**
     * Выбран ли элемент
     */
    isChecked: prop_types_1.default.bool,

    /**
     * Текстовая подпись
     */
    label: prop_types_1.default.node,

    /**
     * Увеличенный размер
     */
    large: prop_types_1.default.bool,

    /**
     * Неактивный
     */
    disabled: prop_types_1.default.bool,

    /**
     * Обработчик выбора
     */
    onCheck: prop_types_1.default.func
  };
  Checkbox.defaultProps = {
    color: 'blue',
    isChecked: false,
    label: '',
    large: false,
    disabled: false,
    onCheck: function onCheck() {}
  };
  return Checkbox;
}(react_1.default.Component);

exports.default = Checkbox;