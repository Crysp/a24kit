import React from 'react';
import renderer from 'react-test-renderer';
import CheckboxGroup from '../index';


const optionsMock = [
    {
        value: '1',
        label: 'Label 1',
    },
    {
        value: '2',
        label: 'Label 2',
    },
];


describe('Верстка компонента <CheckboxGroup>', () => {
    it('Дефолтная', () => {
        const tree = renderer.create(<CheckboxGroup options={optionsMock} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Синие чекбоксы', () => {
        const tree = renderer.create(<CheckboxGroup options={optionsMock} color="blue" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Зеленые чекбоксы', () => {
        const tree = renderer.create(
            <CheckboxGroup options={optionsMock} color="green" />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Темносиние чекбоксы', () => {
        const tree = renderer.create(
            <CheckboxGroup options={optionsMock} color="deepBlue" />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Увеличенные чекбоксы', () => {
        const tree = renderer.create(<CheckboxGroup options={optionsMock} large />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Отмечаются выбранные', () => {
        const tree = renderer.create(
            <CheckboxGroup options={optionsMock} selected={['1']} />,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Неактивные чекбоксы', () => {
        const tree = renderer.create(<CheckboxGroup options={optionsMock} disabled />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
