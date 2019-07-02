import React from 'react';
import renderer from 'react-test-renderer';
import Small from '../index';


describe('Верстка компонента <Small>', () => {
    it('Дефолтная', () => {
        const tree = renderer.create(<Small>Small text</Small>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Первого уровня', () => {
        const tree = renderer.create(<Small size={1}>Small text</Small>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Второго уровня', () => {
        const tree = renderer.create(<Small size={2}>Small text</Small>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Третьего уровня', () => {
        const tree = renderer.create(<Small size={3}>Small text</Small>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
