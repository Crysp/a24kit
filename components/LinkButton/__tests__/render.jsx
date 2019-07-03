import React from 'react';
import renderer from 'react-test-renderer';
import LinkButton from '../index';


describe('Верстка компонента <LinkButton>', () => {
    it('Дефолтная', () => {
        const tree = renderer.create(<LinkButton>Link button</LinkButton>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Дефолтная с дополнительным CSS классом', () => {
        const tree = renderer.create(<LinkButton className="custom">Link button</LinkButton>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
