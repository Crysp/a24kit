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

var styled_1 = __importDefault(require("./styled"));
/**
 * Обертка для любой svg иконки
 * @version 1.0.0
 */


exports.sizes = {
  AUTO: 'auto',
  SIZE_8: 8,
  SIZE_12: 12,
  SIZE_16: 16,
  SIZE_20: 20,
  SIZE_24: 24,
  SIZE_32: 32
};

var SvgIcon =
/** @class */
function (_super) {
  __extends(SvgIcon, _super);

  function SvgIcon() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  SvgIcon.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        other = __rest(_a, ["children"]);

    return react_1.default.createElement(styled_1.default, __assign({
      focusable: "false",
      "aria-hidden": "true"
    }, other), children);
  };

  SvgIcon.propTypes = {
    /**
     * SVG разметка
     */
    children: prop_types_1.default.node.isRequired,

    /**
     * Определяет видимую область
     * ([стандартный атрибут SVG](https://developer.mozilla.org/ru/docs/Web/SVG/Attribute/viewBox))
     */
    viewBox: prop_types_1.default.string.isRequired,

    /**
     * Размер иконки
     * - auto (заполняет все пространство контейнера)
     * - 8, 12, 16, 20, 24, 32 (наиболее используемые размеры)
     *
     * Исключения задаются через CSS стили
     */
    size: prop_types_1.default.oneOf([exports.sizes.AUTO, exports.sizes.SIZE_8, exports.sizes.SIZE_12, exports.sizes.SIZE_16, exports.sizes.SIZE_20, exports.sizes.SIZE_24, exports.sizes.SIZE_32]),

    /**
     * Кастомные стили
     */
    style: prop_types_1.default.shape()
  };
  SvgIcon.defaultProps = {
    style: {},
    size: exports.sizes.AUTO
  };
  return SvgIcon;
}(react_1.default.PureComponent);

exports.default = SvgIcon;