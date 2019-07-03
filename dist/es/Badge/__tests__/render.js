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

describe('Верстка компонента <Badge>', function () {
  it('Дефолтная', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, null, "Badge")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Синий фон', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      color: "blue"
    }, "Badge")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Зеленый фон', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      color: "green"
    }, "Badge")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Красный фон', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      color: "red"
    }, "Badge")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Золотой фон', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      color: "gold"
    }, "Badge")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Серый фон', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      color: "gray"
    }, "Badge")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Средний размер', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      size: "medium"
    }, "Badge")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Маленький размер', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      size: "small"
    }, "Badge")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Круглые углы', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      round: true
    }, "Badge")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Дополнительный CSS класс', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      className: "custom"
    }, "Badge")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Прокидываются неописанные свойства', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      style: {
        margin: 16
      }
    }, "Badge")).toJSON();
    expect(tree).toMatchSnapshot();
  });
});