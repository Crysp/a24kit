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

var react_test_renderer_1 = require("react-test-renderer");

var index_1 = __importDefault(require("../index"));

var optionsMock = [{
  value: '1',
  label: 'Option 1'
}, {
  value: '2',
  label: 'Option 2'
}, {
  value: '3',
  label: 'Option 3'
}];
describe('Верстка компонента <RadioButtonGroup>', function () {
  it('Дефолтная', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      options: optionsMock
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С выбранным элементом', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      selected: optionsMock[0].value
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Синего цвета', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      color: "blue"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Зеленого цвета', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      color: "green"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Увеличенного размера', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      large: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Неактивная', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      disabled: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});