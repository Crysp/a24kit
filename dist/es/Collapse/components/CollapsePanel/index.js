"use strict";

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

var rc_collapse_1 = __importDefault(require("rc-collapse"));

var openAnimation_1 = __importDefault(require("../../../lib/openAnimation"));

var styled_1 = require("./styled");

var CollapsePanel = function CollapsePanel(props) {
  var header = props.header,
      showArrow = props.showArrow,
      arrowRightPosition = props.arrowRightPosition,
      other = __rest(props, ["header", "showArrow", "arrowRightPosition"]);

  var headless = typeof header === 'undefined';
  return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(rc_collapse_1.default.Panel, Object.assign({
    prefixCls: "ui-collapse",
    openAnimation: Object.assign({}, openAnimation_1.default, {
      appear: function appear() {}
    })
  }, other, {
    headerClass: headless ? 'ui-collapse-headless' : '',
    header: react_1.default.createElement(styled_1.Header, null, showArrow && !arrowRightPosition && react_1.default.createElement(styled_1.ArrowDownIcon, null), react_1.default.createElement(styled_1.HeaderContent, null, header), showArrow && arrowRightPosition && react_1.default.createElement(styled_1.ArrowDownIcon, null)),
    showArrow: false
  })), react_1.default.createElement(styled_1.GlobalStyles, null));
};

CollapsePanel.defaultProps = {
  key: undefined,
  header: undefined,
  disabled: undefined,
  className: undefined,
  style: undefined,
  showArrow: true,
  arrowRightPosition: false,
  forceRender: undefined
};
exports.default = CollapsePanel;