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

var index_1 = __importDefault(require("../index"));

describe('Поведение компонента <RadioButton>', function () {
  it('Обработчик выбора срабатывает и только 1 раз', function () {
    var onCheck = jest.fn(null);
    var expectedCalls = 1;
    var radioButton = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      value: "0",
      onCheck: onCheck
    }));
    radioButton.simulate('click');
    expect(onCheck.mock.calls.length).toBe(expectedCalls);
  });
  it('Обработчик выбора не срабатывает у неактивного компонента', function () {
    var onCheck = jest.fn(null);
    var expectedCalls = 0;
    var radioButton = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      value: "0",
      onCheck: onCheck,
      disabled: true
    }));
    radioButton.simulate('click');
    expect(onCheck.mock.calls.length).toBe(expectedCalls);
  });
  it('Подсвечивается при наведении', function () {
    var radioButton = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      value: "0"
    }));
    radioButton.simulate('mouseenter');
    expect(radioButton.state().isHovered).toBeTruthy();
  });
  it('Подсветка убирается когда уводишь курсор', function () {
    var radioButton = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      value: "0"
    }));
    radioButton.simulate('mouseenter');
    expect(radioButton.state().isHovered).toBeTruthy();
    radioButton.simulate('mouseleave');
    expect(radioButton.state().isHovered).toBeFalsy();
  });
  it('Нет подсветки у неактивного компонента при наведении', function () {
    var radioButton = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      value: "0",
      disabled: true
    }));
    radioButton.simulate('mouseenter');
    expect(radioButton.state().isHovered).toBeFalsy();
    radioButton.simulate('mouseleave');
    expect(radioButton.state().isHovered).toBeFalsy();
  });
  it('Обработчик наведения и увода курсора срабатывают и только 1 раз', function () {
    var onMouseEnter = jest.fn(null);
    var onMouseLeave = jest.fn(null);
    var expectedCalls = 1;
    var radioButton = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      value: "0",
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave
    }));
    radioButton.simulate('mouseenter');
    radioButton.simulate('mouseleave');
    expect(onMouseEnter.mock.calls.length).toBe(expectedCalls);
    expect(onMouseLeave.mock.calls.length).toBe(expectedCalls);
  });
});