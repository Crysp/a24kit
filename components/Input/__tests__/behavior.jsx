import React from 'react';
import { shallow } from 'enzyme';
import Input from '../index';


const eventMock = {
    target: {
        value: '',
    },
};


describe('Поведение компонента <Input>', () => {
    it('Обработчик onFocus отработал', () => {
        const onFocus = jest.fn(null);
        const expectedCalls = 1;
        const input = shallow(<Input onFocus={onFocus} />);
        input.instance().onFocus();
        expect(input.state().isFocused).toBeTruthy();
        expect(onFocus.mock.calls.length).toBe(expectedCalls);
    });
    it('Обработчик onBlur отработал', () => {
        const onBlur = jest.fn(null);
        const expectedCalls = 1;
        const input = shallow(<Input onBlur={onBlur} />);
        input.instance().onBlur();
        expect(input.state().isFocused).toBeFalsy();
        expect(onBlur.mock.calls.length).toBe(expectedCalls);
    });
    it('Обработчик onChange отработал', () => {
        const onChange = jest.fn(null);
        const expectedCalls = 1;
        const input = shallow(<Input onChange={onChange} />);
        input.instance().onChange(eventMock);
        expect(onChange.mock.calls.length).toBe(expectedCalls);
    });
});
