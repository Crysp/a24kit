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

describe('Поведение компонента <Checkbox>', function () {
  it('Обработчик onCheck срабатывает у активного компонента', function () {
    var onCheck = jest.fn(null);
    var expectedCalls = 1;
    var checkbox = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      onCheck: onCheck
    }));
    checkbox.simulate('click');
    expect(onCheck.mock.calls.length).toBe(expectedCalls);
  });
  it('Обработчик onCheck не срабатывает у неактивного компонента', function () {
    var onCheck = jest.fn(null);
    var expectedCalls = 0;
    var checkbox = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      onCheck: onCheck,
      disabled: true
    }));
    checkbox.simulate('click');
    expect(onCheck.mock.calls.length).toBe(expectedCalls);
  });
});