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

var Avatar_1 = __importDefault(require("../Avatar"));

var styled_1 = require("./styled");
/**
 * @develop
 */


var AvatarCard =
/** @class */
function (_super) {
  __extends(AvatarCard, _super);

  function AvatarCard() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  AvatarCard.prototype.render = function () {
    var online = this.props.online;
    return react_1.default.createElement(styled_1.Wrapper, null, react_1.default.createElement(Avatar_1.default, __assign({}, this.props)), online && react_1.default.createElement(styled_1.Online, null));
  };

  AvatarCard.propTypes = __assign({}, Avatar_1.default.propTypes, {
    /**
     * Индикатор нахождения в сети
     */
    online: prop_types_1.default.bool
  });
  AvatarCard.defaultProps = {
    online: true
  };
  return AvatarCard;
}(react_1.default.PureComponent);

exports.default = AvatarCard;