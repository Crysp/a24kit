import React from 'react';
import renderer from 'react-test-renderer';
import H from '../index';


describe('Верстка компонента <H>', () => {
    it('Дефолтная', () => {
        const tree = renderer.create(<H>Header</H>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Первого уровня', () => {
        const tree = renderer.create(<H size={1}>Header</H>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Второго уровня', () => {
        const tree = renderer.create(<H size={2}>Header</H>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Третьего уровня', () => {
        const tree = renderer.create(<H size={3}>Header</H>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Четвертого уровня', () => {
        const tree = renderer.create(<H size={4}>Header</H>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Пятого уровня', () => {
        const tree = renderer.create(<H size={5}>Header</H>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Шестого уровня', () => {
        const tree = renderer.create(<H size={6}>Header</H>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
