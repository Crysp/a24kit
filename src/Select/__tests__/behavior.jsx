import React from 'react';
import { mount } from 'enzyme';
import Select from '../index';
import Option from '../components/Option';


const optionsMock = [{
    value: '1',
    label: 'Label 1',
}, {
    value: '2',
    label: 'Label 2',
}, {
    value: '3',
    label: 'Label 3',
}];


describe('Поведение компонента <Select>', () => {
    it('Обработчик выбора вариант отрабатывает и только 1 раз', () => {
        const onChange = jest.fn(null);
        const expectedCalls = 1;
        const select = mount(<Select options={optionsMock} onChange={onChange} />);
        select.find(Option).first().simulate('click');
        expect(onChange.mock.calls.length).toBe(expectedCalls);
    });
    it('Обработчик выбора возвращает значение выбранного варианта без множественного выбора', () => {
        const onChange = jest.fn(null);
        const select = mount(<Select options={optionsMock} onChange={onChange} />);
        select.find(Option).first().simulate('click');
        expect(onChange.mock.calls[0][0]).toBe(optionsMock[0].value);
    });
    it('Обработчик выбора возвращает массив значений выбранных вариантов с множественного выбора', () => {
        const onChange = jest.fn(null);
        const select = mount(<Select options={optionsMock} onChange={onChange} multiple />);
        select.find(Option).at(0).simulate('click');
        expect(onChange.mock.calls[0][0]).toEqual([optionsMock[0].value]);
        select.setProps({ value: onChange.mock.calls[0][0] });
        select.find(Option).at(1).simulate('click');
        expect(onChange.mock.calls[1][0]).toEqual([optionsMock[0].value, optionsMock[1].value]);
    });
    it('Обработчик выбора возвращает массив значений с удаленным элементом при клике на выбранном варианте', () => {
        const onChange = jest.fn(null);
        const select = mount((
            <Select
                value={[optionsMock[0].value, optionsMock[1].value]}
                options={optionsMock}
                onChange={onChange}
                multiple
            />
        ));
        select.find(Option).first().simulate('click');
        expect(expect.arrayContaining(onChange.mock.calls[0][0][0]))
            .toEqual(expect.arrayContaining(optionsMock[1].value));
    });
    it('Варианты открываются и закрываются при клике на компонент', () => {
        const select = mount(<Select options={optionsMock} />);
        select
            .children()
            .children()
            .first()
            .simulate('click');
        expect(select.state().isOpened).toBeTruthy();
        select
            .children()
            .children()
            .first()
            .simulate('click');
        expect(select.state().isOpened).toBeFalsy();
    });
    it('Варианты не открываются при клике на неактивном компоненте', () => {
        const select = mount(<Select options={optionsMock} disabled />);
        select
            .children()
            .children()
            .first()
            .simulate('click');
        expect(select.state().isOpened).toBeFalsy();
    });
    it('Варианты не закрываются при клике внутри компонента', () => {
        const map = {};
        document.addEventListener = jest.fn((event, cb) => {
            map[event] = cb;
        });
        const select = mount(<Select options={optionsMock} multiple />);
        expect(map.click).toBeDefined();
        select
            .children()
            .children()
            .first()
            .simulate('click');
        expect(select.state().isOpened).toBeTruthy();
        map.click({ target: select.ref('options') });
        expect(select.state().isOpened).toBeTruthy();
    });
    it('Варианты закрываются при клике вне компонента', () => {
        const map = {};
        document.addEventListener = jest.fn((event, cb) => {
            map[event] = cb;
        });
        const select = mount(<Select options={optionsMock} />);
        expect(map.click).toBeDefined();
        select
            .children()
            .children()
            .first()
            .simulate('click');
        expect(select.state().isOpened).toBeTruthy();
        map.click({ target: null });
        expect(select.state().isOpened).toBeFalsy();
    });
    it('При удалении компонента удаляются обработчики клика вне компонента', () => {
        const mapToAdd = {};
        const mapToRemove = {};
        document.addEventListener = jest.fn((event, cb) => {
            mapToAdd[event] = cb;
        });
        document.removeEventListener = jest.fn((event, cb) => {
            mapToRemove[event] = cb;
        });
        const select = mount(<Select options={optionsMock} />);
        select.instance().componentWillUnmount();
        expect(mapToAdd.click).toBeDefined();
        expect(mapToRemove.click).toBeDefined();
    });
    it('Если выбран один пункт в множественном выборе, то отображается его название', () => {
        const select = mount((
            <Select
                options={optionsMock}
                value={[optionsMock[0].value]}
                multiple
            />
        ));
        expect(select.instance().getText()).toBe(optionsMock[0].label);
    });
    it('Если выбрано несколько пунктов в множественном выборе, то отображается их кол-во', () => {
        const value = [optionsMock[0].value, optionsMock[1].value];
        const select = mount((
            <Select
                options={optionsMock}
                value={value}
                multiple
            />
        ));
        expect(select.instance().getText())
            .toEqual(expect.stringContaining(value.length.toString()));
    });
    it('Фильтрация вариантов выбора', () => {
        const select = mount((
            <Select
                options={optionsMock}
                searchable
            />
        ));
        select.instance().onChangeSearchLabel('label 1');
        expect(select.instance().getOptions()).toEqual([optionsMock[0]]);
    });
    it('Если ничего не найдено в фильтруемом компоненте, то отображается заглушка', () => {
        const select = mount((
            <Select
                options={optionsMock}
                searchable
            />
        ));
        select.instance().onChangeSearchLabel('label 99');
        expect(select.ref('options').contains(select.ref('empty'))).toBeTruthy();
    });
});
