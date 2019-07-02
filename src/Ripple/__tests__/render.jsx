import React from 'react';
import renderer from 'react-test-renderer';
import Ripple from '../index';


describe('Верстка компонента <Ripple>', () => {
    it('Дефолтная', () => {
        const tree = renderer.create(<Ripple left={0} top={0} color="blue" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
