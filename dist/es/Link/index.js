"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

var styled_1 = require("./styled");

var Link =
/*#__PURE__*/
function (_react_1$default$Pure) {
  _inherits(Link, _react_1$default$Pure);

  function Link() {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).apply(this, arguments));

    _this.onClick = function (e) {
      var _this$props = _this.props,
          href = _this$props.href,
          onClick = _this$props.onClick;
      if (href.length === 0) e.preventDefault();
      if (onClick) onClick(e);
    };

    return _this;
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _a = this.props,
          children = _a.children,
          href = _a.href,
          icon = _a.icon,
          iconPosition = _a.iconPosition,
          pseudo = _a.pseudo,
          other = __rest(_a, ["children", "href", "icon", "iconPosition", "pseudo"]);

      return react_1.default.createElement(styled_1.StyledLink, Object.assign({
        href: href,
        pseudo: pseudo
      }, other, {
        onClick: this.onClick
      }), react_1.default.createElement(styled_1.Wrapper, {
        pseudo: pseudo
      }, icon && iconPosition === 'before' && react_1.default.createElement(styled_1.Addon, null, icon), react_1.default.createElement("span", null, children), icon && iconPosition === 'after' && react_1.default.createElement(styled_1.Addon, null, icon)));
    }
  }]);

  return Link;
}(react_1.default.PureComponent);

Link.defaultProps = {
  href: '',
  iconPosition: 'before',
  pseudo: false,
  className: '',
  icon: null,
  onClick: undefined
};
exports.default = Link;