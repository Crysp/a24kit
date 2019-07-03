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

var enzyme_1 = require("enzyme");

var __1 = __importDefault(require(".."));

describe('Поведение <Message/>', function () {
  beforeEach(function () {
    jest.useFakeTimers();
  });
  afterEach(function () {
    __1.default.destroy();

    jest.useRealTimers();
  });
  it('Закрывается вручную', function () {
    var hide1 = __1.default.info('whatever', 0);

    var hide2 = __1.default.info('whatever', 0);

    expect(document.querySelectorAll('.ui-message-notice').length).toBe(2);
    hide1();
    jest.runAllTimers();
    expect(document.querySelectorAll('.ui-message-notice').length).toBe(1);
    hide2();
    jest.runAllTimers();
    expect(document.querySelectorAll('.ui-message-notice').length).toBe(0);
  });
  it('Глобальное удаление', function () {
    __1.default.info('whatever', 0);

    __1.default.info('whatever', 0);

    expect(document.querySelectorAll('.ui-message').length).toBe(1);
    expect(document.querySelectorAll('.ui-message-notice').length).toBe(2);

    __1.default.destroy();

    expect(document.querySelectorAll('.ui-message').length).toBe(0);
    expect(document.querySelectorAll('.ui-message-notice').length).toBe(0);
  });
  it('Параметр duration не обязателен когда указан onClose', function () {
    __1.default.info('whatever', function () {});
  });
  it('Используется дефолтное значение duration когда его нет в параметрах', function (done) {
    jest.useRealTimers();
    var defaultDuration = 3;
    var now = Date.now();

    __1.default.info('whatever', function () {
      // calculate the approximately duration value
      var aboutDuration = parseInt((Date.now() - now) / 1000, 10);
      expect(aboutDuration).toBe(defaultDuration);
      done();
    });
  });
  it('Удаление сообщений которые описаны в componentDidMount', function () {
    var Test =
    /** @class */
    function (_super) {
      __extends(Test, _super);

      function Test() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      Test.prototype.componentDidMount = function () {
        __1.default.loading('Action in progress1..', 0);

        __1.default.loading('Action in progress2..', 0);

        setTimeout(function () {
          return __1.default.destroy();
        }, 1000);
      };

      Test.prototype.render = function () {
        return react_1.default.createElement("div", null, "test");
      };

      return Test;
    }(react_1.default.Component);

    enzyme_1.mount(react_1.default.createElement(Test, null));
    expect(document.querySelectorAll('.ui-message-notice').length).toBe(2);
    jest.runAllTimers();
    expect(document.querySelectorAll('.ui-message-notice').length).toBe(0);
  });
});