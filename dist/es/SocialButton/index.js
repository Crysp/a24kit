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
/** @class */
function (_super) {
  __extends(SocialButton, _super);

  function SocialButton() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onClick = function (e) {
      var _a = _this.props,
          shareUrl = _a.shareUrl,
          windowWidth = _a.windowWidth,
          windowHeight = _a.windowHeight;
      window.open(shareUrl, '', "\n            menubar=no,\n            toolbar=no,\n            resizable=yes,\n            scrollbars=yes,\n            height=" + windowHeight + ",\n            width=" + windowWidth + "\n            ");
      e.preventDefault();
    };

    return _this;
  }

  SocialButton.prototype.render = function () {
    var _a = this.props,
        type = _a.type,
        shareUrl = _a.shareUrl,
        size = _a.size;
    return react_1.default.createElement(styled_1.default, {
      size: size,
      type: type,
      href: shareUrl,
      onClick: this.onClick
    }, getIcon(type));
  };

  SocialButton.propTypes = {
    /**
     * Тип иконки
     */
    type: prop_types_1.default.oneOf(['fb', 'tw', 'gp', 'tg', 'wa', 'vk', 'ok']).isRequired,

    /**
     * Share-ссылка социальной сети
     */
    shareUrl: prop_types_1.default.string,

    /**
     * Размер иконки
     */
    size: prop_types_1.default.oneOf(['small', 'large']),

    /**
     * Ширина создаваемого окна
     */
    windowWidth: prop_types_1.default.number,

    /**
     * Высота создаваемого окна
     */
    windowHeight: prop_types_1.default.number
  };
  SocialButton.defaultProps = {
    shareUrl: '',
    size: 'large',
    windowWidth: 800,
    windowHeight: 600
  };
  return SocialButton;
}(react_1.default.Component);

exports.default = SocialButton;