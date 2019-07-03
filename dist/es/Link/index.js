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

var styled_1 = require("./styled");
/**
 * @develop
 */


var Link =
/** @class */
function (_super) {
  __extends(Link, _super);

  function Link() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onClick = function (e) {
      var _a = _this.props,
          href = _a.href,
          onClick = _a.onClick;
      if (href.length === 0) e.preventDefault();
      if (onClick) onClick(e);
    };

    return _this;
  }

  Link.prototype.render = function () {
    var _a = this.props,
        children = _a.children,
        href = _a.href,
        icon = _a.icon,
        iconPosition = _a.iconPosition,
        pseudo = _a.pseudo,
        other = __rest(_a, ["children", "href", "icon", "iconPosition", "pseudo"]);

    return react_1.default.createElement(styled_1.StyledLink, __assign({
      href: href,
      pseudo: pseudo
    }, other, {
      onClick: this.onClick
    }), react_1.default.createElement(styled_1.Wrapper, {
      pseudo: pseudo
    }, icon && iconPosition === 'before' && react_1.default.createElement(styled_1.Addon, {
      before: true
    }, icon), react_1.default.createElement("span", null, children), icon && iconPosition === 'after' && react_1.default.createElement(styled_1.Addon, {
      after: true
    }, icon)));
  };

  Link.propTypes = {
    /**
     * Текст ссылки
     */
    children: prop_types_1.default.node.isRequired,

    /**
     * URL ссылки
     */
    href: prop_types_1.default.string,

    /**
     * Иконка
     */
    icon: prop_types_1.default.node,

    /**
     * Позиция иконки
     */
    iconPosition: prop_types_1.default.oneOf(['before', 'after']),

    /**
     * Псевдо-ссылка
     */
    pseudo: prop_types_1.default.bool,

    /**
     * Дополнительный CSS класс
     */
    className: prop_types_1.default.string,

    /**
     * Обработчик клика
     */
    onClick: prop_types_1.default.func
  };
  Link.defaultProps = {
    href: '',
    iconPosition: 'before',
    pseudo: false,
    className: '',
    icon: null,
    onClick: undefined
  };
  return Link;
}(react_1.default.PureComponent);

exports.default = Link;