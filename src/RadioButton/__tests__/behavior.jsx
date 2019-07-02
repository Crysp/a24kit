import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from '../index';


describe('Поведение компонента <RadioButton>', () => {
    it('Обработчик выбора срабатывает и только 1 раз', () => {
        const onCheck = jest.fn(null);
        const expectedCalls = 1;
        const radioButton = shallow(<RadioButton value="0" onCheck={onCheck} />);
        radioButton.simulate('click');
        expect(onCheck.mock.calls.length).toBe(expectedCalls);
    });
    it('Обработчик выбора не срабатывает у неактивного компонента', () => {
        const onCheck = jest.fn(null);
        const expectedCalls = 0;
        const radioButton = shallow(<RadioButton value="0" onCheck={onCheck} disabled />);
        radioButton.simulate('click');
        expect(onCheck.mock.calls.length).toBe(expectedCalls);
    });
    it('Подсвечивается при наведении', () => {
        const radioButton = shallow(<RadioButton value="0" />);
        radioButton.simulate('mouseenter');
        expect(radioButton.state().isHovered).toBeTruthy();
    });
    it('Подсветка убирается когда уводишь курсор', () => {
        const radioButton = shallow(<RadioButton value="0" />);
        radioButton.simulate('mouseenter');
        expect(radioButton.state().isHovered).toBeTruthy();
        radioButton.simulate('mouseleave');
        expect(radioButton.state().isHovered).toBeFalsy();
    });
    it('Нет подсветки у неактивного компонента при наведении', () => {
        const radioButton = shallow(<RadioButton value="0" disabled />);
        radioButton.simulate('mouseenter');
        expect(radioButton.state().isHovered).toBeFalsy();
        radioButton.simulate('mouseleave');
        expect(radioButton.state().isHovered).toBeFalsy();
    });
    it('Обработчик наведения и увода курсора срабатывают и только 1 раз', () => {
        const onMouseEnter = jest.fn(null);
        const onMouseLeave = jest.fn(null);
        const expectedCalls = 1;
        const radioButton = shallow(
            <RadioButton value="0" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />,
        );
        radioButton.simulate('mouseenter');
        radioButton.simulate('mouseleave');
        expect(onMouseEnter.mock.calls.length).toBe(expectedCalls);
        expect(onMouseLeave.mock.calls.length).toBe(expectedCalls);
    });
});
