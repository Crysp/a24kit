import React from 'react';
import renderer from 'react-test-renderer';
import P from '../index';


describe('Верстка компонента <P>', () => {
    it('Дефолтная', () => {
        const tree = renderer.create(<P>Paragraph</P>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Первого уровня', () => {
        const tree = renderer.create(<P size={1}>Paragraph</P>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Второго уровня', () => {
        const tree = renderer.create(<P size={2}>Paragraph</P>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Третьего уровня', () => {
        const tree = renderer.create(<P size={3}>Paragraph</P>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
