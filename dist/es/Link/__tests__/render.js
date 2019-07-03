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
/* eslint-disable jsx-a11y/anchor-is-valid */


describe('Верстка компонента <Link>', function () {
  it('Дефолтная', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      href: "#"
    }, "Link")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Дефолтная с иконкой', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      href: "#",
      icon: react_1.default.createElement("div", null, "Icon")
    }, "Link")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Псевдоссылка', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      href: "#",
      pseudo: true
    }, "Link")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С иконкой слева', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      href: "#",
      icon: react_1.default.createElement("div", null, "Icon"),
      iconPosition: "before"
    }, "Link")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С иконкой справа', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      href: "#",
      icon: react_1.default.createElement("div", null, "Icon"),
      iconPosition: "after"
    }, "Link")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Дополнительний CSS класс', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      href: "#",
      className: "custom"
    }, "Link")).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Прокидываются неописанные свойства', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      href: "#",
      style: {
        margin: 16
      }
    }, "Link")).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
/* eslint-enable jsx-a11y/anchor-is-valid */