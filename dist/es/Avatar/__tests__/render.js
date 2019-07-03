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

describe('Верстка компонента <Avatar>', function () {
  it('Дефолтная без изображения', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, null)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Дефолтная с изображением', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      src: "#"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Закругленная', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      round: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Дефолтная с дополнительным CSS классом', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      className: "custom"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Дефолтная маленького размера', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      size: "small"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Дефолтная большого размера', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      size: "large"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});