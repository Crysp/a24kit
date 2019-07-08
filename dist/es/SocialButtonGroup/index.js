"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var social_1 = require("../lib/social");

var SocialButton_1 = __importDefault(require("../SocialButton"));

var styled_1 = __importDefault(require("./styled"));

var SocialButtonGroup = function SocialButtonGroup(props) {
  var items = props.items,
      size = props.size,
      shareUrl = props.shareUrl;
  return react_1.default.createElement(styled_1.default, null, items.map(function (item) {
    return react_1.default.createElement(SocialButton_1.default, {
      key: item,
      shareUrl: social_1.getShareLink(item, shareUrl),
      size: size,
      type: item
    });
  }));
};

SocialButtonGroup.defaultProps = {
  size: 'large'
};
exports.default = SocialButtonGroup;