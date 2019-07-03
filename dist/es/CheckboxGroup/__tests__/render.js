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

var react_test_renderer_1 = __importDefault(require("react-test-renderer"));

var index_1 = __importDefault(require("../index"));

var optionsMock = [{
  value: '1',
  label: 'Label 1'
}, {
  value: '2',
  label: 'Label 2'
}];
describe('Верстка компонента <CheckboxGroup>', function () {
  it('Дефолтная', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      options: optionsMock
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Синие чекбоксы', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      color: "blue"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Зеленые чекбоксы', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      color: "green"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Темносиние чекбоксы', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      color: "deepBlue"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Увеличенные чекбоксы', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      large: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Отмечаются выбранные', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      selected: ['1']
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Неактивные чекбоксы', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      disabled: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});