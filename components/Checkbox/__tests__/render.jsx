import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '../index';


describe('Верстка компонента <Checkbox>', () => {
    it('Дефолтная', () => {
        const tree = renderer.create(<Checkbox />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Синего цвета', () => {
        const tree = renderer.create(<Checkbox color="blue" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Зеленого цвета', () => {
        const tree = renderer.create(<Checkbox color="green" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Темносинего цвета', () => {
        const tree = renderer.create(<Checkbox color="deepBlue" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Ставится галочка', () => {
        const tree = renderer.create(<Checkbox isChecked />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Выводится лейбл', () => {
        const tree = renderer.create(<Checkbox label="Label" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Увеличенный', () => {
        const tree = renderer.create(<Checkbox large />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Неактивный', () => {
        const tree = renderer.create(<Checkbox disabled />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
