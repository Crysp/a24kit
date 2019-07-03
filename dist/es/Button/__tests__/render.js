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

require("jest-styled-components");

var index_1 = __importDefault(require("../index"));

describe('Верстка компонента <Button>', function () {
  it('Дефолтная', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, null, "Button")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Синяя', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      color: "blue"
    }, "Button")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Зеленая', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      color: "green"
    }, "Button")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Красная', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      color: "red"
    }, "Button")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Контрастная', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      contrast: true
    }, "Button")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С рамкой', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      hollow: true
    }, "Button")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Второстепенная', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      secondary: true
    }, "Button")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Информационная', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      info: true
    }, "Button")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С иконкой (позиционирование по умолчанию)', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      icon: react_1.default.createElement("div", null, "Icon")
    }, "Button")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С иконкой справа', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      icon: react_1.default.createElement("div", null, "Icon"),
      iconPosition: "after"
    }, "Button")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Дефолтная с дополнительным CSS классом', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      className: "custom"
    }, "Button")).toJSON();
    expect(tree).toMatchSnapshot();
  });
});