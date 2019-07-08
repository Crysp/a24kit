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

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var react_dom_1 = __importDefault(require("react-dom"));

var server_1 = __importDefault(require("react-dom/server"));

var rc_tabs_1 = __importStar(require("rc-tabs"));

var ScrollableInkTabBar_1 = __importDefault(require("rc-tabs/lib/ScrollableInkTabBar"));

var Icon_1 = require("../Icon");

var styled_1 = __importDefault(require("./styled"));

var Tabs =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(Tabs, _react_1$default$Comp);

  function Tabs() {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
    _this.rootNode = null;

    _this.onRefRoot = function (root) {
      _this.rootNode = root; // eslint-disable-next-line react/no-find-dom-node

      var rootDOMNode = react_dom_1.default.findDOMNode(_this.rootNode);

      if (rootDOMNode !== null) {
        var prevButton = rootDOMNode.querySelector('.tabs-tab-prev');
        var nextButton = rootDOMNode.querySelector('.tabs-tab-next');
        prevButton.innerHTML = server_1.default.renderToString(react_1.default.createElement(Icon_1.ArrowLeft, {
          className: "tabs-prevIcon"
        }));
        nextButton.innerHTML = server_1.default.renderToString(react_1.default.createElement(Icon_1.ArrowRight, {
          className: "tabs-nextIcon"
        }));
      }
    };

    _this.handleChange = function (activeKey) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(activeKey);
      }
    };

    return _this;
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          tabPosition = _this$props.tabPosition,
          children = _this$props.children,
          tabBarStyle = _this$props.tabBarStyle,
          onTabClick = _this$props.onTabClick,
          onPrevClick = _this$props.onPrevClick,
          onNextClick = _this$props.onNextClick,
          size = _this$props.size,
          animated = _this$props.animated,
          destroyInactiveTabPane = _this$props.destroyInactiveTabPane;
      var classes = [];
      if (size === 'large') classes.push('tabs-large');
      if (!animated) classes.push('tabs-no-animation');
      if (className.length > 0) classes.push(className);

      var renderTabBar = function renderTabBar() {
        return react_1.default.createElement(ScrollableInkTabBar_1.default, {
          inkBarAnimated: true,
          onTabClick: onTabClick,
          onPrevClick: onPrevClick,
          onNextClick: onNextClick,
          style: tabBarStyle
        });
      };

      return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(rc_tabs_1.default, Object.assign({}, this.props, {
        prefixCls: "tabs",
        className: classes.join(' '),
        hideAdd: true,
        tabBarPosition: tabPosition,
        destroyInactiveTabPane: destroyInactiveTabPane,
        renderTabBar: renderTabBar,
        renderTabContent: function renderTabContent() {
          return react_1.default.createElement(rc_tabs_1.TabContent, {
            animated: animated,
            animatedWithMargin: true
          });
        },
        onChange: this.handleChange,
        ref: this.onRefRoot
      }), children), react_1.default.createElement(styled_1.default, null));
    }
  }]);

  return Tabs;
}(react_1.default.Component);

Tabs.TabPane = rc_tabs_1.TabPane;
Tabs.defaultProps = {
  activeKey: '',
  defaultActiveKey: '',
  onChange: function onChange() {},
  onTabClick: function onTabClick() {},
  onPrevClick: function onPrevClick() {},
  onNextClick: function onNextClick() {},
  tabBarStyle: {},
  size: 'default',
  style: {},
  className: '',
  animated: true,
  destroyInactiveTabPane: false,
  tabPosition: 'top',
  children: null
};
exports.default = Tabs;

var rc_tabs_2 = require("rc-tabs");

exports.TabPane = rc_tabs_2.TabPane;