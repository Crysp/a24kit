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

var index_1 = __importDefault(require("../index")); // eslint-disable-next-line react/prop-types


function Buggy(_a) {
  var _b = _a.hasError,
      hasError = _b === void 0 ? false : _b;

  if (hasError) {
    throw new Error('Bug');
  }

  return react_1.default.createElement("div", null, "\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442");
}

describe('Компонент <Catch/>', function () {
  var consoleError = console.error;
  beforeEach(function () {
    console.error = function () {};
  });
  it('Дефолтный', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, null, react_1.default.createElement(Buggy, null))).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С ошибкой', function () {
    var tree = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, null, react_1.default.createElement(Buggy, {
      hasError: true
    }))).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С кодом ошибки', function () {
    var catchComponent = react_test_renderer_1.default.create(react_1.default.createElement(index_1.default, null, react_1.default.createElement(Buggy, {
      hasError: true
    })));
    catchComponent.getInstance().setState({
      code: 'awesomeErrorCode'
    });
    expect(catchComponent.toJSON()).toMatchSnapshot();
  });
  afterEach(function () {
    console.error = consoleError;
  });
});