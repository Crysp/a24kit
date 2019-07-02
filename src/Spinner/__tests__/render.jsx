import React from 'react';
import { create } from 'react-test-renderer';
import Spinner from '../index';


describe('Верстка компонента <Spinner>', () => {
    it('Дефолтная', () => {
        const tree = create(<Spinner />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
