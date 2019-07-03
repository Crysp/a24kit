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

describe('Верстка компонента <H>', function () {
  it('Дефолтная', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, null, "Header")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Первого уровня', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      size: 1
    }, "Header")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Второго уровня', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      size: 2
    }, "Header")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Третьего уровня', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      size: 3
    }, "Header")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Четвертого уровня', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      size: 4
    }, "Header")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Пятого уровня', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      size: 5
    }, "Header")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Шестого уровня', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      size: 6
    }, "Header")).toJSON();
    expect(tree).toMatchSnapshot();
  });
});