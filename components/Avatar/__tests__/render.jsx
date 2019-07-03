import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Avatar from '../index';


describe('Верстка компонента <Avatar>', () => {
    it('Дефолтная без изображения', () => {
        const tree = renderer.create(<Avatar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Дефолтная с изображением', () => {
        const tree = renderer.create(<Avatar src="#" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Закругленная', () => {
        const tree = renderer.create(<Avatar round />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Дефолтная с дополнительным CSS классом', () => {
        const tree = renderer.create(<Avatar className="custom" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Дефолтная маленького размера', () => {
        const tree = renderer.create(<Avatar size="small" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Дефолтная большого размера', () => {
        const tree = renderer.create(<Avatar size="large" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
