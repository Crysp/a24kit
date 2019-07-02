import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import AvatarCard from '../index';


describe('Верстка компонента <AvatarCard>', () => {
    it('Дефолтная', () => {
        const tree = renderer.create(<AvatarCard />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
