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

var prop_types_1 = __importDefault(require("prop-types"));

var rc_tabs_1 = __importStar(require("rc-tabs"));

var ScrollableInkTabBar_1 = __importDefault(require("rc-tabs/lib/ScrollableInkTabBar"));

var Icon_1 = require("../Icon");

var styled_1 = __importDefault(require("./styled"));

var Tabs =
/** @class */
function (_super) {
  __extends(Tabs, _super);

  function Tabs() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

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

  Tabs.prototype.render = function () {
    var _a = this.props,
        className = _a.className,
        tabPosition = _a.tabPosition,
        children = _a.children,
        tabBarStyle = _a.tabBarStyle,
        onTabClick = _a.onTabClick,
        onPrevClick = _a.onPrevClick,
        onNextClick = _a.onNextClick,
        size = _a.size,
        animated = _a.animated,
        destroyInactiveTabPane = _a.destroyInactiveTabPane;
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

    return react_1.default.createElement(react_1.default.Fragment, null, react_1.default.createElement(rc_tabs_1.default, __assign({}, this.props, {
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
  };

  Tabs.TabPane = rc_tabs_1.TabPane;
  Tabs.propTypes = {
    /**
     * Ключ активной вкладки
     */
    activeKey: prop_types_1.default.string,

    /**
     * Активная вкладка по умолчанию
     */
    defaultActiveKey: prop_types_1.default.string,

    /**
     * Обработчик смены вкладки
     */
    onChange: prop_types_1.default.func,

    /**
     * Обработчик клика по вкладке
     */
    onTabClick: prop_types_1.default.func,

    /**
     * Обработчик клика на кнопку прокрутки влево
     */
    onPrevClick: prop_types_1.default.func,

    /**
     * Обработчик клика на кнопку прокрутки вправо
     */
    onNextClick: prop_types_1.default.func,

    /**
     * Стиль бегунка по активной вкладкой
     */
    tabBarStyle: prop_types_1.default.shape(),

    /**
     * Размер вкладок
     */
    size: prop_types_1.default.oneOf(['default', 'large']),

    /**
     * Анимация при переключении
     */
    animated: prop_types_1.default.bool,

    /**
     * Стиль обертки
     */
    style: prop_types_1.default.shape(),

    /**
     * Класс обертки
     */
    className: prop_types_1.default.string,

    /**
     * Анигилировать неактивную вкладку при смене
     */
    destroyInactiveTabPane: prop_types_1.default.bool,
    tabPosition: prop_types_1.default.string,
    children: prop_types_1.default.node
  };
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
  return Tabs;
}(react_1.default.Component);

exports.default = Tabs;

var rc_tabs_2 = require("rc-tabs");

exports.TabPane = rc_tabs_2.TabPane;