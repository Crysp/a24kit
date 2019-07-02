import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Badge from '../index';


describe('Верстка компонента <Badge>', () => {
    it('Дефолтная', () => {
        const tree = renderer.create(<Badge>Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Синий фон', () => {
        const tree = renderer.create(<Badge color="blue">Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Зеленый фон', () => {
        const tree = renderer.create(<Badge color="green">Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Красный фон', () => {
        const tree = renderer.create(<Badge color="red">Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Золотой фон', () => {
        const tree = renderer.create(<Badge color="gold">Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Серый фон', () => {
        const tree = renderer.create(<Badge color="gray">Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Средний размер', () => {
        const tree = renderer.create(<Badge size="medium">Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Маленький размер', () => {
        const tree = renderer.create(<Badge size="small">Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Круглые углы', () => {
        const tree = renderer.create(<Badge round>Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Дополнительный CSS класс', () => {
        const tree = renderer.create(<Badge className="custom">Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Прокидываются неописанные свойства', () => {
        const tree = renderer.create(<Badge style={{ margin: 16 }}>Badge</Badge>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
