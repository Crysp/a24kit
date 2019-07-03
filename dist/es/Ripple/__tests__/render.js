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

describe('Верстка компонента <Ripple>', function () {
  it('Дефолтная', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, {
      left: 0,
      top: 0,
      color: "blue"
    })).toJSON();
    expect(tree).toMatchSnapshot();
  });
});