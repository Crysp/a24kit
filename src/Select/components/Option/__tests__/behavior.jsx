import React from 'react';
import { shallow } from 'enzyme';
import Option from '../index';


describe('Поведение компонента <Select.Option>', () => {
    it('Обработчик выбора срабатывает и только 1 раз', () => {
        const onSelect = jest.fn(null);
        const expectedCalls = 1;
        const option = shallow(<Option label="Label" onSelect={onSelect} />);
        option.simulate('click');
        expect(onSelect.mock.calls.length).toBe(expectedCalls);
    });
    it('Обработчик выбора срабатывает и только 1 раз при нажатии на чекбокс', () => {
        const onSelect = jest.fn(null);
        const expectedCalls = 1;
        const option = shallow(<Option label="Label" hasCheckbox onSelect={onSelect} />);
        option.simulate('click');
        expect(onSelect.mock.calls.length).toBe(expectedCalls);
    });
});
