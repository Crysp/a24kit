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

describe('Верстка компонента <Input>', function () {
  it('Дефолтная', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, null)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Указан текст подскказки', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      placeholder: "Placeholder"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Указано значение', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      value: "Value"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Указано значение и поле в фокусе', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      value: "Value"
    }));
    tree.getInstance().onFocus();
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it('Неактивный', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      disabled: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Дефолтный статус', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      status: "default"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Валидный статус', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      status: "success"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Статус с ошибкой', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      status: "error"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Без рамки', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      boundless: true
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Дефолтная с иконкой', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      icon: react_1.default.createElement("div", null, "Icon")
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С иконкой слева', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      icon: react_1.default.createElement("div", null, "Icon"),
      iconPosition: "before"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С иконкой справа', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      icon: react_1.default.createElement("div", null, "Icon"),
      iconPosition: "after"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Дополнительный CSS класс', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      className: "custom"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Прокидываются неописанные свойства', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      style: {
        margin: 16
      }
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});