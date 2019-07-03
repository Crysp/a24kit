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
  label: 'Label 1'
}, {
  value: '2',
  label: 'Label 2'
}, {
  value: '3',
  label: 'Label 3'
}];
describe('Верстка компонента <Select>', function () {
  it('Дефолтная', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      options: optionsMock
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С выбранным значением без множественного выбора', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      value: optionsMock[0].value
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С выбранными значениеми с множественным выбором', function () {
    var select = react_1.default.createElement(index_1.default, {
      options: optionsMock,
      value: [optionsMock[0].value, optionsMock[1].value],
      multiple: true
    });
    var tree = react_test_renderer_1.create(select).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Текст заглушка', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      placeholder: "Choose something"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Множественный выбор', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      multiple: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С полем для фильтрации вариантов', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      searchable: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Неактивный', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      disabled: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});