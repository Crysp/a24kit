"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var react_test_renderer_1 = require("react-test-renderer");

var index_1 = __importStar(require("../index"));

describe('Верстка компонента <SvgIcon>', function () {
  it('Дефолтная', function () {
    var tree = react_test_renderer_1.create(react_1.default.createElement(index_1.default, {
      viewBox: "0 0 100 100"
    }, react_1.default.createElement("rect", {
      width: "100",
      height: "100"
    }))).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Размером с родителя', function () {
    var icon = react_1.default.createElement(index_1.default, {
      viewBox: "0 0 100 100",
      size: index_1.sizes.AUTO
    }, react_1.default.createElement("rect", {
      width: "100",
      height: "100"
    }));
    var tree = react_test_renderer_1.create(icon).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Размером 8x8', function () {
    var icon = react_1.default.createElement(index_1.default, {
      viewBox: "0 0 100 100",
      size: index_1.sizes.SIZE_8
    }, react_1.default.createElement("rect", {
      width: "100",
      height: "100"
    }));
    var tree = react_test_renderer_1.create(icon).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Размером 12x12', function () {
    var icon = react_1.default.createElement(index_1.default, {
      viewBox: "0 0 100 100",
      size: index_1.sizes.SIZE_12
    }, react_1.default.createElement("rect", {
      width: "100",
      height: "100"
    }));
    var tree = react_test_renderer_1.create(icon).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Размером 16x16', function () {
    var icon = react_1.default.createElement(index_1.default, {
      viewBox: "0 0 100 100",
      size: index_1.sizes.SIZE_16
    }, react_1.default.createElement("rect", {
      width: "100",
      height: "100"
    }));
    var tree = react_test_renderer_1.create(icon).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Размером 24x24', function () {
    var icon = react_1.default.createElement(index_1.default, {
      viewBox: "0 0 100 100",
      size: index_1.sizes.SIZE_24
    }, react_1.default.createElement("rect", {
      width: "100",
      height: "100"
    }));
    var tree = react_test_renderer_1.create(icon).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Размером 32x32', function () {
    var icon = react_1.default.createElement(index_1.default, {
      viewBox: "0 0 100 100",
      size: index_1.sizes.SIZE_32
    }, react_1.default.createElement("rect", {
      width: "100",
      height: "100"
    }));
    var tree = react_test_renderer_1.create(icon).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('С дополнительным CSS классом', function () {
    var icon = react_1.default.createElement(index_1.default, {
      viewBox: "0 0 100 100",
      className: "custom"
    }, react_1.default.createElement("rect", {
      width: "100",
      height: "100"
    }));
    var tree = react_test_renderer_1.create(icon).toJSON();
    expect(tree).toMatchSnapshot();
  });
});