import React from 'react';
import { create } from 'react-test-renderer';
import RadioButton from '../index';


describe('Верстка компонента <RadioButton>', () => {
    it('Дефолтная', () => {
        const tree = create(<RadioButton value="0" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Синего цвета', () => {
        const tree = create(<RadioButton value="0" color="blue" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Зеленого цвета', () => {
        const tree = create(<RadioButton value="0" color="green" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Увеличенный размер', () => {
        const tree = create(<RadioButton value="0" large />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Неактивная', () => {
        const tree = create(<RadioButton value="0" disabled />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Отмеченная', () => {
        const tree = create(<RadioButton value="0" isChecked />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С подписью', () => {
        const tree = create(<RadioButton value="0" label="Label" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
