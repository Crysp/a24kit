import React from 'react';
import { create } from 'react-test-renderer';
import RadioButtonGroup from '../index';


const optionsMock = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
];


describe('Верстка компонента <RadioButtonGroup>', () => {
    it('Дефолтная', () => {
        const tree = create(<RadioButtonGroup options={optionsMock} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С выбранным элементом', () => {
        const tree = create(
            <RadioButtonGroup options={optionsMock} selected={optionsMock[0].value} />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Синего цвета', () => {
        const tree = create(<RadioButtonGroup options={optionsMock} color="blue" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Зеленого цвета', () => {
        const tree = create(<RadioButtonGroup options={optionsMock} color="green" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Увеличенного размера', () => {
        const tree = create(<RadioButtonGroup options={optionsMock} large />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Неактивная', () => {
        const tree = create(<RadioButtonGroup options={optionsMock} disabled />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
