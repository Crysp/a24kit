import React from 'react';
import { create } from 'react-test-renderer';
import Option from '../index';


describe('Верстка компонента <Select.Option>', () => {
    it('Дефолтная', () => {
        const tree = create(<Option label="Label" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Выбранный', () => {
        const tree = create(<Option label="Label" isSelected />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С чекбоксом', () => {
        const tree = create(<Option label="Label" hasCheckbox />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С выбранным чекбоксом', () => {
        const tree = create(<Option label="Label" hasCheckbox isChecked />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
