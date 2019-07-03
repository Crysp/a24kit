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

var enzyme_1 = require("enzyme");

require("jest-styled-components");

var index_1 = __importDefault(require("../index"));

var Ripple_1 = require("../../Ripple");

var eventMock = {
  pageY: 0,
  pageX: 0,
  currentTarget: {
    getBoundingClientRect: function getBoundingClientRect() {
      return {
        top: 0,
        left: 0
      };
    }
  }
};
describe('Поведение <Button>', function () {
  it('Обработчик onClick (1 клик => 1 вызов)', function () {
    var onClick = jest.fn(null);
    var expectedCalls = 1;
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      onClick: onClick
    }, "Button"));
    button.simulate('click', eventMock);
    expect(onClick.mock.calls.length).toBe(expectedCalls);
  });
  it('Появляется анимация при клике', function () {
    var expectedRipples = 1;
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, null, "Button"));
    button.instance().onClick(eventMock);
    expect(button.state().ripples.length).toBe(expectedRipples);
  });
  it('Пропадает анимация после проигрывания', function (done) {
    jest.useFakeTimers();
    var expectedRipples = 0;
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, null, "Button"));
    button.instance().onClick(eventMock);
    setTimeout(function () {
      expect(button.state().ripples.length).toBe(expectedRipples);
      done();
    }, Ripple_1.RIPPLE_DURATION);
    jest.runAllTimers();
  });
  it('Таймеры анимации очищаются при удалении компонента из DOM', function () {
    var expectedRipples = 0;
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, null, "Button"));
    button.instance().onClick(eventMock);
    button.instance().componentWillUnmount();
    expect(button.instance().rippleCycles.length).toBe(expectedRipples);
  });
  it('Кнопка с рамкой не имеет индикатора нажатия', function () {
    var expectedRipples = 0;
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      hollow: true
    }, "Button"));
    button.instance().onClick(eventMock);
    expect(button.state().ripples.length).toBe(expectedRipples);
  });
  it('Неактивная кнопка не имеет индикатора нажатия', function () {
    var expectedRipples = 0;
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      disabled: true
    }, "Button"));
    button.instance().onClick(eventMock);
    expect(button.state().ripples.length).toBe(expectedRipples);
  });
  it('У синей кнопки синий индикатор нажатия', function () {
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      color: "blue"
    }, "Button"));
    button.instance().onClick(eventMock);
    expect(button.instance().getRippleColor()).toBe('blue');
  });
  it('У зеленой кнопки зеленый индикатор нажатия', function () {
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      color: "green"
    }, "Button"));
    button.instance().onClick(eventMock);
    expect(button.instance().getRippleColor()).toBe('green');
  });
  it('У красной кнопки красный индикатор нажатия', function () {
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      color: "red"
    }, "Button"));
    button.instance().onClick(eventMock);
    expect(button.instance().getRippleColor()).toBe('red');
  });
  it('У синей контрастной кнопки светлосиний индикатор нажатия', function () {
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      color: "blue",
      contrast: true
    }, "Button"));
    button.instance().onClick(eventMock);
    expect(button.instance().getRippleColor()).toBe('lightBlue');
  });
  it('У зеленой контрастной кнопки светлозеленый индикатор нажатия', function () {
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      color: "green",
      contrast: true
    }, "Button"));
    button.instance().onClick(eventMock);
    expect(button.instance().getRippleColor()).toBe('lightGreen');
  });
  it('У красной контрастной кнопки светлокрасный индикатор нажатия', function () {
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      color: "red",
      contrast: true
    }, "Button"));
    button.instance().onClick(eventMock);
    expect(button.instance().getRippleColor()).toBe('lightRed');
  });
  it('У информационной кнопки серый индикатор нажатия', function () {
    var button = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      info: true
    }, "Button"));
    button.instance().onClick(eventMock);
    expect(button.instance().getRippleColor()).toBe('pale');
  });
});