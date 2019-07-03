"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var enzyme_1 = require("enzyme");

var index_1 = __importDefault(require("../index"));

var Checkbox_1 = __importDefault(require("../../Checkbox"));

var optionsMock = [{
  value: '1',
  label: 'Label 1'
}, {
  value: '2',
  label: 'Label 2'
}];

var ComponentMock =
/** @class */
function (_super) {
  __extends(ComponentMock, _super);

  function ComponentMock() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      selected: []
    };

    _this.onCheck = function (value) {
      var selected = _this.state.selected;

      _this.setState({
        selected: selected.indexOf(value) >= 0 ? selected.filter(function (v) {
          return v !== value;
        }) : selected.concat([value])
      });
    };

    return _this;
  }

  ComponentMock.prototype.render = function () {
    var selected = this.state.selected;
    return react_1.default.createElement(index_1.default, {
      options: optionsMock,
      selected: selected,
      onCheck: this.onCheck
    });
  };

  return ComponentMock;
}(react_1.default.Component);

describe('Поведение компонента <CheckboxGroup>', function () {
  it('Обработчик onCheck срабатывает у активного компонента', function () {
    var onCheck = jest.fn(null);
    var expectedCalls = 1;
    var checkboxGroup = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      onCheck: onCheck
    }));
    checkboxGroup.find(Checkbox_1.default).first().simulate('click');
    expect(onCheck.mock.calls.length).toBe(expectedCalls);
  });
  it('Обработчик onCheck не срабатывает у неактивного компонента', function () {
    var onCheck = jest.fn(null);
    var expectedCalls = 0;
    var checkboxGroup = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      onCheck: onCheck,
      disabled: true
    }));
    checkboxGroup.find(Checkbox_1.default).first().simulate('click');
    expect(onCheck.mock.calls.length).toBe(expectedCalls);
  });
  it('Стандартный алгоритм использования', function () {
    var component = enzyme_1.mount(react_1.default.createElement(ComponentMock, null));
    component.find(Checkbox_1.default).first().simulate('click');
    expect(component.find(index_1.default).instance().props.selected).toBe(component.state().selected);
  });
});