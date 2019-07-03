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

var styled_1 = __importDefault(require("./styled"));

var Status =
/** @class */
function (_super) {
  __extends(Status, _super);

  function Status() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Status.prototype.render = function () {
    var online = this.props.online;
    return react_1.default.createElement(styled_1.default, {
      online: online
    }, online ? 'Онлайн' : 'Офлайн');
  };

  Status.propTypes = {
    /**
     * Онлайн
     */
    online: prop_types_1.default.bool
  };
  Status.defaultProps = {
    online: false
  };
  return Status;
}(react_1.default.PureComponent);

exports.default = Status;