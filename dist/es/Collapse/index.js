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

var rc_collapse_1 = __importDefault(require("rc-collapse"));

var openAnimation_1 = __importDefault(require("../lib/openAnimation"));

var CollapsePanel_1 = __importDefault(require("./components/CollapsePanel"));

var Collapse =
/** @class */
function (_super) {
  __extends(Collapse, _super);

  function Collapse() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Collapse.prototype.render = function () {
    return react_1.default.createElement(rc_collapse_1.default, __assign({
      prefixCls: "ui-collapse",
      openAnimation: __assign({}, openAnimation_1.default, {
        appear: function appear() {}
      })
    }, this.props));
  };

  Collapse.propTypes = {
    activeKey: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.arrayOf(prop_types_1.default.string)]),
    defaultActiveKey: prop_types_1.default.arrayOf(prop_types_1.default.string),
    accordion: prop_types_1.default.bool,
    onChange: prop_types_1.default.func,
    className: prop_types_1.default.string
  };
  Collapse.defaultProps = {
    activeKey: undefined,
    defaultActiveKey: undefined,
    accordion: undefined,
    onChange: undefined,
    className: undefined
  };
  Collapse.Panel = CollapsePanel_1.default;
  return Collapse;
}(react_1.default.Component);

exports.default = Collapse;