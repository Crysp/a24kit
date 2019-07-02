import React from 'react';
import { create } from 'react-test-renderer';
import Select from '../index';


const optionsMock = [{
    value: '1',
    label: 'Label 1',
}, {
    value: '2',
    label: 'Label 2',
}, {
    value: '3',
    label: 'Label 3',
}];


describe('Верстка компонента <Select>', () => {
    it('Дефолтная', () => {
        const tree = create(<Select options={optionsMock} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С выбранным значением без множественного выбора', () => {
        const tree = create(<Select options={optionsMock} value={optionsMock[0].value} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С выбранными значениеми с множественным выбором', () => {
        const select = (
            <Select
                options={optionsMock}
                value={[optionsMock[0].value, optionsMock[1].value]}
                multiple
            />
        );
        const tree = create(select).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Текст заглушка', () => {
        const tree = create(<Select options={optionsMock} placeholder="Choose something" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Множественный выбор', () => {
        const tree = create(<Select options={optionsMock} multiple />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С полем для фильтрации вариантов', () => {
        const tree = create(<Select options={optionsMock} searchable />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Неактивный', () => {
        const tree = create(<Select options={optionsMock} disabled />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
