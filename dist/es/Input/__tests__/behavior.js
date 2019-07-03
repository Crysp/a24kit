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

var eventMock = {
  target: {
    value: ''
  }
};
describe('Поведение компонента <Input>', function () {
  it('Обработчик onFocus отработал', function () {
    var onFocus = jest.fn(null);
    var expectedCalls = 1;
    var input = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      onFocus: onFocus
    }));
    input.instance().onFocus();
    expect(input.state().isFocused).toBeTruthy();
    expect(onFocus.mock.calls.length).toBe(expectedCalls);
  });
  it('Обработчик onBlur отработал', function () {
    var onBlur = jest.fn(null);
    var expectedCalls = 1;
    var input = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      onBlur: onBlur
    }));
    input.instance().onBlur();
    expect(input.state().isFocused).toBeFalsy();
    expect(onBlur.mock.calls.length).toBe(expectedCalls);
  });
  it('Обработчик onChange отработал', function () {
    var onChange = jest.fn(null);
    var expectedCalls = 1;
    var input = enzyme_1.shallow(react_1.default.createElement(index_1.default, {
      onChange: onChange
    }));
    input.instance().onChange(eventMock);
    expect(onChange.mock.calls.length).toBe(expectedCalls);
  });
});