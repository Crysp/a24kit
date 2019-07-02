import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Input from '../index';


describe('Верстка компонента <Input>', () => {
    it('Дефолтная', () => {
        const tree = renderer.create(<Input />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Указан текст подскказки', () => {
        const tree = renderer.create(<Input placeholder="Placeholder" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Указано значение', () => {
        const tree = renderer.create(<Input value="Value" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Указано значение и поле в фокусе', () => {
        const tree = renderer.create(<Input value="Value" />);
        tree.getInstance().onFocus();
        expect(tree.toJSON()).toMatchSnapshot();
    });
    it('Неактивный', () => {
        const tree = renderer.create(<Input disabled />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Дефолтный статус', () => {
        const tree = renderer.create(<Input status="default" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Валидный статус', () => {
        const tree = renderer.create(<Input status="success" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Статус с ошибкой', () => {
        const tree = renderer.create(<Input status="error" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Без рамки', () => {
        const tree = renderer.create(<Input boundless />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Дефолтная с иконкой', () => {
        const tree = renderer.create(<Input icon={<div>Icon</div>} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С иконкой слева', () => {
        const tree = renderer.create(<Input icon={<div>Icon</div>} iconPosition="before" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С иконкой справа', () => {
        const tree = renderer.create(<Input icon={<div>Icon</div>} iconPosition="after" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Дополнительный CSS класс', () => {
        const tree = renderer.create(<Input className="custom" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Прокидываются неописанные свойства', () => {
        const tree = renderer.create(<Input style={{ margin: 16 }} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
