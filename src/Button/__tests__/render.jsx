import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from '../index';


describe('Верстка компонента <Button>', () => {
    it('Дефолтная', () => {
        const tree = renderer.create(<Button>Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Синяя', () => {
        const tree = renderer.create(<Button color="blue">Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Зеленая', () => {
        const tree = renderer.create(<Button color="green">Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Красная', () => {
        const tree = renderer.create(<Button color="red">Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Контрастная', () => {
        const tree = renderer.create(<Button contrast>Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С рамкой', () => {
        const tree = renderer.create(<Button hollow>Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Второстепенная', () => {
        const tree = renderer.create(<Button secondary>Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Информационная', () => {
        const tree = renderer.create(<Button info>Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С иконкой (позиционирование по умолчанию)', () => {
        const tree = renderer.create(<Button icon={<div>Icon</div>}>Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С иконкой справа', () => {
        const tree = renderer.create(
            <Button icon={<div>Icon</div>} iconPosition="after">Button</Button>,
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Дефолтная с дополнительным CSS классом', () => {
        const tree = renderer.create(<Button className="custom">Button</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
