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

var enzyme_1 = require("enzyme");

var index_1 = __importDefault(require("../index"));

var ModalTester =
/** @class */
function (_super) {
  __extends(ModalTester, _super);

  function ModalTester(props) {
    var _this = _super.call(this, props) || this;

    _this.saveContainer = function (container) {
      _this.container = container;
    };

    _this.getContainer = function () {
      return _this.container;
    };

    _this.state = {
      visible: false
    };
    return _this;
  }

  ModalTester.prototype.componentDidMount = function () {
    this.setState({
      visible: true
    });
  };

  ModalTester.prototype.render = function () {
    var visible = this.state.visible;
    return react_1.default.createElement("div", null, react_1.default.createElement("div", {
      ref: this.saveContainer
    }), react_1.default.createElement(index_1.default, __assign({}, this.props, {
      visible: visible,
      getContainer: this.getContainer
    }), "Here is content of Modal"));
  };

  return ModalTester;
}(react_1.default.Component);

describe('Верстка <Modal/>', function () {
  it('Дефолтная', function () {
    var modal = enzyme_1.mount(react_1.default.createElement(ModalTester, null));
    expect(modal.render()).toMatchSnapshot();
  });
  it('Без кнопок в футере', function () {
    var modal = enzyme_1.mount(react_1.default.createElement(ModalTester, {
      footer: null
    }));
    expect(modal.render()).toMatchSnapshot();
  });
  it('Без отступов в контентной области', function () {
    var modal = enzyme_1.mount(react_1.default.createElement(ModalTester, {
      extendedContent: true
    }));
    expect(modal.render()).toMatchSnapshot();
  });
});