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

var rc_collapse_1 = __importDefault(require("rc-collapse"));

var openAnimation_1 = __importDefault(require("../lib/openAnimation"));

var CollapsePanel_1 = __importDefault(require("./components/CollapsePanel"));

var Collapse =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(Collapse, _react_1$default$Comp);

  function Collapse() {
    _classCallCheck(this, Collapse);

    return _possibleConstructorReturn(this, _getPrototypeOf(Collapse).apply(this, arguments));
  }

  _createClass(Collapse, [{
    key: "render",
    value: function render() {
      return react_1.default.createElement(rc_collapse_1.default, Object.assign({
        prefixCls: "ui-collapse",
        openAnimation: Object.assign({}, openAnimation_1.default, {
          appear: function appear() {}
        })
      }, this.props));
    }
  }]);

  return Collapse;
}(react_1.default.Component);

Collapse.defaultProps = {
  activeKey: undefined,
  defaultActiveKey: undefined,
  accordion: undefined,
  onChange: undefined,
  className: undefined
};
Collapse.Panel = CollapsePanel_1.default;
exports.default = Collapse;