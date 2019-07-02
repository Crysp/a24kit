import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Catch from '../index';

// eslint-disable-next-line react/prop-types
function Buggy({ hasError = false }) {
    if (hasError) {
        throw new Error('Bug');
    }
    return <div>Полезный контент</div>;
}


describe('Компонент <Catch/>', () => {
    const consoleError = console.error;
    beforeEach(() => {
        console.error = () => {};
    });
    it('Дефолтный', () => {
        const tree = renderer.create(<Catch><Buggy /></Catch>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С ошибкой', () => {
        const tree = renderer.create(<Catch><Buggy hasError /></Catch>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С кодом ошибки', () => {
        const catchComponent = renderer.create(<Catch><Buggy hasError /></Catch>);
        catchComponent.getInstance().setState({ code: 'awesomeErrorCode' });
        expect(catchComponent.toJSON()).toMatchSnapshot();
    });
    afterEach(() => {
        console.error = consoleError;
    });
});
