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

var Icon_1 = require("../Icon");

var styled_1 = __importDefault(require("./styled"));

function getIcon(type) {
  switch (type) {
    case 'tw':
      return react_1.default.createElement(Icon_1.TwitterHollow, null);

    case 'gp':
      return react_1.default.createElement(Icon_1.GooglePlusHollow, null);

    case 'tg':
      return react_1.default.createElement(Icon_1.TelegramHollow, null);

    case 'wa':
      return react_1.default.createElement(Icon_1.WhatsappHollow, null);

    case 'vk':
      return react_1.default.createElement(Icon_1.VkontakteHollow, null);

    case 'ok':
      return react_1.default.createElement(Icon_1.OdnoklassnikiHollow, null);

    case 'fb':
    default:
      return react_1.default.createElement(Icon_1.FacebookHollow, null);
  }
}

var SocialButton =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(SocialButton, _react_1$default$Comp);

  function SocialButton() {
    var _this;

    _classCallCheck(this, SocialButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SocialButton).apply(this, arguments));

    _this.onClick = function (e) {
      var _this$props = _this.props,
          shareUrl = _this$props.shareUrl,
          windowWidth = _this$props.windowWidth,
          windowHeight = _this$props.windowHeight;
      window.open(shareUrl, '', "\n            menubar=no,\n            toolbar=no,\n            resizable=yes,\n            scrollbars=yes,\n            height=".concat(windowHeight, ",\n            width=").concat(windowWidth, "\n            "));
      e.preventDefault();
    };

    return _this;
  }

  _createClass(SocialButton, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          shareUrl = _this$props2.shareUrl,
          size = _this$props2.size;
      return react_1.default.createElement(styled_1.default, {
        size: size,
        type: type,
        href: shareUrl,
        onClick: this.onClick
      }, getIcon(type));
    }
  }]);

  return SocialButton;
}(react_1.default.Component);

SocialButton.defaultProps = {
  shareUrl: '',
  size: 'large',
  windowWidth: 800,
  windowHeight: 600
};
exports.default = SocialButton;