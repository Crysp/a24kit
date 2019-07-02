import React from 'react';
import { create } from 'react-test-renderer';
import Radio from '../index';


describe('Верстка компонента <Radio>', () => {
    it('Дефолтная', () => {
        const tree = create(<Radio />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Синего цвета', () => {
        const tree = create(<Radio color="blue" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Зеленого цвета', () => {
        const tree = create(<Radio color="green" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Увеличенный размер', () => {
        const tree = create(<Radio large />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Неактивная', () => {
        const tree = create(<Radio disabled />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Отмеченная', () => {
        const tree = create(<Radio isChecked />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Подсвеченная', () => {
        const tree = create(<Radio isHighlighted />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
