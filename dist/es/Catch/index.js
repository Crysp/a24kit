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

var Typography_1 = require("../Typography");

var styled_1 = require("./styled");
/**
 * @develop
 */


var Catch =
/** @class */
function (_super) {
  __extends(Catch, _super);

  function Catch() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      hasError: false,
      code: null
    };
    return _this;
  }

  Catch.prototype.componentDidCatch = function (error, errorInfo) {
    this.setState({
      hasError: true
    });
  };

  Catch.prototype.render = function () {
    var _a = this.state,
        hasError = _a.hasError,
        code = _a.code;
    var children = this.props.children;

    if (hasError) {
      return react_1.default.createElement(styled_1.Wrapper, null, react_1.default.createElement(styled_1.Header, null, react_1.default.createElement(styled_1.FlashIcon, null), react_1.default.createElement(Typography_1.H, {
        size: 4
      }, "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A...")), react_1.default.createElement(styled_1.Text, null, "\u041C\u044B \u0443\u0436\u0435 \u0437\u043D\u0430\u0435\u043C \u043E\u0431 \u044D\u0442\u043E\u0439 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0435. \u041E\u0447\u0435\u043D\u044C \u0441\u043A\u043E\u0440\u043E \u043C\u044B \u0435\u0435 \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u043C."), code !== null && react_1.default.createElement(styled_1.Text, null, react_1.default.createElement("span", null, "\u041A\u043E\u0434 \u043E\u0448\u0438\u0431\u043A\u0438"), react_1.default.createElement("span", null, ": "), react_1.default.createElement("b", null, code)));
    }

    return children;
  };

  Catch.propTypes = {
    children: prop_types_1.default.node.isRequired
  };
  return Catch;
}(react_1.default.Component);

exports.default = Catch;