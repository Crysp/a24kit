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

var classnames_1 = __importDefault(require("classnames"));

var addEventListener_1 = __importDefault(require("rc-util/lib/Dom/addEventListener"));

var rc_dialog_1 = __importDefault(require("rc-dialog"));

var Button_1 = __importDefault(require("../Button"));

var styled_1 = __importDefault(require("./styled"));
/**
 * Модальное окно
 * @develop
 */


var Modal =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(Modal, _react_1$default$Comp);

  function Modal() {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
    _this.mousePosition = undefined;
    _this.mousePositionEventBinded = null;

    _this.onCancel = function (e) {
      var onCancel = _this.props.onCancel;

      if (onCancel) {
        onCancel(e);
      }
    };

    _this.onOk = function (e) {
      var onOk = _this.props.onOk;

      if (onOk) {
        onOk(e);
      }
    };

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.mousePositionEventBinded) {
        return;
      }

      addEventListener_1.default(document.documentElement, 'click', function (e) {
        _this2.mousePosition = {
          x: e.pageX,
          y: e.pageY
        };
        setTimeout(function () {
          _this2.mousePosition = undefined;
        }, 100);
      });
      this.mousePositionEventBinded = true;
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      var _this$props = this.props,
          okText = _this$props.okText,
          okColor = _this$props.okColor,
          cancelText = _this$props.cancelText,
          okLoading = _this$props.okLoading;
      return react_1.default.createElement("div", null, react_1.default.createElement(Button_1.default, {
        color: "gray",
        side: 40,
        onClick: this.onCancel
      }, cancelText || 'Отмена'), react_1.default.createElement(Button_1.default, {
        color: okColor,
        side: 40,
        onClick: this.onOk,
        loading: okLoading
      }, okText || 'Ок'));
    }
  }, {
    key: "render",
    value: function render() {
      var _a = this.props,
          footer = _a.footer,
          visible = _a.visible,
          wrapClassName = _a.wrapClassName,
          verticalCentered = _a.verticalCentered,
          extendedContent = _a.extendedContent,
          other = __rest(_a, ["footer", "visible", "wrapClassName", "verticalCentered", "extendedContent"]);

      var defaultFooter = this.renderFooter();
      return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(rc_dialog_1.default, Object.assign({}, other, {
        prefixCls: "ui-modal",
        transitionName: "ui-modal-zoom",
        maskTransitionName: "ui-modal-fade",
        wrapClassName: classnames_1.default(wrapClassName, {
          'ui-modal-vertical-centered': verticalCentered,
          'ui-modal-extended-content': extendedContent
        }),
        footer: typeof footer === 'undefined' ? defaultFooter : footer,
        visible: visible,
        mousePosition: this.mousePosition,
        onClose: this.onCancel
      })), react_1.default.createElement(styled_1.default, null));
    }
  }]);

  return Modal;
}(react_1.default.Component);

Modal.defaultProps = {
  okColor: 'blue',
  width: 520,
  okLoading: false,
  visible: false,
  verticalCentered: false,
  extendedContent: false,
  onOk: function onOk() {},
  onCancel: function onCancel() {},
  okText: undefined,
  cancelText: undefined,
  footer: undefined,
  title: undefined,
  closable: true,
  className: '',
  wrapClassName: ''
};
exports.default = Modal;