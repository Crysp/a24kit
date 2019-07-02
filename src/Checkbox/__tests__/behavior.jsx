import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../index';


describe('Поведение компонента <Checkbox>', () => {
    it('Обработчик onCheck срабатывает у активного компонента', () => {
        const onCheck = jest.fn(null);
        const expectedCalls = 1;
        const checkbox = shallow(<Checkbox onCheck={onCheck} />);
        checkbox.simulate('click');
        expect(onCheck.mock.calls.length).toBe(expectedCalls);
    });
    it('Обработчик onCheck не срабатывает у неактивного компонента', () => {
        const onCheck = jest.fn(null);
        const expectedCalls = 0;
        const checkbox = shallow(<Checkbox onCheck={onCheck} disabled />);
        checkbox.simulate('click');
        expect(onCheck.mock.calls.length).toBe(expectedCalls);
    });
});
