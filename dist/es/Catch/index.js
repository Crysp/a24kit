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

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var Typography_1 = require("../Typography");

var styled_1 = require("./styled");

var Catch =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(Catch, _react_1$default$Comp);

  function Catch() {
    var _this;

    _classCallCheck(this, Catch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Catch).apply(this, arguments));
    _this.state = {
      hasError: false,
      code: null
    };
    return _this;
  }

  _createClass(Catch, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      this.setState({
        hasError: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          hasError = _this$state.hasError,
          code = _this$state.code;
      var children = this.props.children;

      if (hasError) {
        return react_1.default.createElement(styled_1.Wrapper, null, react_1.default.createElement(styled_1.Header, null, react_1.default.createElement(styled_1.FlashIcon, null), react_1.default.createElement(Typography_1.H, {
          size: 4
        }, "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A...")), react_1.default.createElement(styled_1.Text, null, "\u041C\u044B \u0443\u0436\u0435 \u0437\u043D\u0430\u0435\u043C \u043E\u0431 \u044D\u0442\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0435. \u041E\u0447\u0435\u043D\u044C \u0441\u043A\u043E\u0440\u043E \u043C\u044B \u0435\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u043C."), code !== null && react_1.default.createElement(styled_1.Text, null, react_1.default.createElement("span", null, "\u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438"), react_1.default.createElement("span", null, ": "), react_1.default.createElement("b", null, code)));
      }

      return children;
    }
  }]);

  return Catch;
}(react_1.default.Component);

exports.default = Catch;