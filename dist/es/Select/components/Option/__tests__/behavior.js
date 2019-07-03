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

describe('Поведение компонента <Select.Option>', function () {
  it('Обработчик выбора срабатывает и только 1 раз', function () {
    var onSelect = jest.fn(null);
    var expectedCalls = 1;
    var option = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      label: "Label",
      onSelect: onSelect
    }));
    option.simulate('click');
    expect(onSelect.mock.calls.length).toBe(expectedCalls);
  });
  it('Обработчик выбора срабатывает и только 1 раз при нажатии на чекбокс', function () {
    var onSelect = jest.fn(null);
    var expectedCalls = 1;
    var option = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      label: "Label",
      hasCheckbox: true,
      onSelect: onSelect
    }));
    option.simulate('click');
    expect(onSelect.mock.calls.length).toBe(expectedCalls);
  });
});