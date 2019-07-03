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

describe('Верстка компонента <RadioButton>', function () {
  it('Дефолтная', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      value: "0"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Синего цвета', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      value: "0",
      color: "blue"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Зеленого цвета', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      value: "0",
      color: "green"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Увеличенный размер', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      value: "0",
      large: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Неактивная', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      value: "0",
      disabled: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Отмеченная', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      value: "0",
      isChecked: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С подписью', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      value: "0",
      label: "Label"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});