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

var enzyme_1 = require("enzyme");

var index_1 = __importDefault(require("../index"));

var Option_1 = __importDefault(require("../components/Option"));

var optionsMock = [{
  value: '1',
  label: 'Label 1'
}, {
  value: '2',
  label: 'Label 2'
}, {
  value: '3',
  label: 'Label 3'
}];
describe('Поведение компонента <Select>', function () {
  it('Обработчик выбора вариант отрабатывает и только 1 раз', function () {
    var onChange = jest.fn(null);
    var expectedCalls = 1;
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      onChange: onChange
    }));
    select.find(Option_1.default).first().simulate('click');
    expect(onChange.mock.calls.length).toBe(expectedCalls);
  });
  it('Обработчик выбора возвращает значение выбранного варианта без множественного выбора', function () {
    var onChange = jest.fn(null);
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      onChange: onChange
    }));
    select.find(Option_1.default).first().simulate('click');
    expect(onChange.mock.calls[0][0]).toBe(optionsMock[0].value);
  });
  it('Обработчик выбора возвращает массив значений выбранных вариантов с множественного выбора', function () {
    var onChange = jest.fn(null);
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      onChange: onChange,
      multiple: true
    }));
    select.find(Option_1.default).at(0).simulate('click');
    expect(onChange.mock.calls[0][0]).toEqual([optionsMock[0].value]);
    select.setProps({
      value: onChange.mock.calls[0][0]
    });
    select.find(Option_1.default).at(1).simulate('click');
    expect(onChange.mock.calls[1][0]).toEqual([optionsMock[0].value, optionsMock[1].value]);
  });
  it('Обработчик выбора возвращает массив значений с удаленным элементом при клике на выбранном варианте', function () {
    var onChange = jest.fn(null);
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      value: [optionsMock[0].value, optionsMock[1].value],
      options: optionsMock,
      onChange: onChange,
      multiple: true
    }));
    select.find(Option_1.default).first().simulate('click');
    expect(expect.arrayContaining(onChange.mock.calls[0][0][0])).toEqual(expect.arrayContaining(optionsMock[1].value));
  });
  it('Варианты открываются и закрываются при клике на компонент', function () {
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock
    }));
    select.children().children().first().simulate('click');
    expect(select.state().isOpened).toBeTruthy();
    select.children().children().first().simulate('click');
    expect(select.state().isOpened).toBeFalsy();
  });
  it('Варианты не открываются при клике на неактивном компоненте', function () {
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      disabled: true
    }));
    select.children().children().first().simulate('click');
    expect(select.state().isOpened).toBeFalsy();
  });
  it('Варианты не закрываются при клике внутри компонента', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      multiple: true
    }));
    expect(map.click).toBeDefined();
    select.children().children().first().simulate('click');
    expect(select.state().isOpened).toBeTruthy();
    map.click({
      target: select.ref('options')
    });
    expect(select.state().isOpened).toBeTruthy();
  });
  it('Варианты закрываются при клике вне компонента', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock
    }));
    expect(map.click).toBeDefined();
    select.children().children().first().simulate('click');
    expect(select.state().isOpened).toBeTruthy();
    map.click({
      target: null
    });
    expect(select.state().isOpened).toBeFalsy();
  });
  it('При удалении компонента удаляются обработчики клика вне компонента', function () {
    var mapToAdd = {};
    var mapToRemove = {};
    document.addEventListener = jest.fn(function (event, cb) {
      mapToAdd[event] = cb;
    });
    document.removeEventListener = jest.fn(function (event, cb) {
      mapToRemove[event] = cb;
    });
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock
    }));
    select.instance().componentWillUnmount();
    expect(mapToAdd.click).toBeDefined();
    expect(mapToRemove.click).toBeDefined();
  });
  it('Если выбран один пункт в множественном выборе, то отображается его название', function () {
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      value: [optionsMock[0].value],
      multiple: true
    }));
    expect(select.instance().getText()).toBe(optionsMock[0].label);
  });
  it('Если выбрано несколько пунктов в множественном выборе, то отображается их кол-во', function () {
    var value = [optionsMock[0].value, optionsMock[1].value];
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      value: value,
      multiple: true
    }));
    expect(select.instance().getText()).toEqual(expect.stringContaining(value.length.toString()));
  });
  it('Фильтрация вариантов выбора', function () {
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      searchable: true
    }));
    select.instance().onChangeSearchLabel('label 1');
    expect(select.instance().getOptions()).toEqual([optionsMock[0]]);
  });
  it('Если ничего не найдено в фильтруемом компоненте, то отображается заглушка', function () {
    var select = enzyme_1.mount(react_1.default.createElement(index_1.default, {
      options: optionsMock,
      searchable: true
    }));
    select.instance().onChangeSearchLabel('label 99');
    expect(select.ref('options').contains(select.ref('empty'))).toBeTruthy();
  });
});