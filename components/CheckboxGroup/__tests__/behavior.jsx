import React from 'react';
import { mount } from 'enzyme';
import CheckboxGroup from '../index';
import Checkbox from '../../Checkbox';


const optionsMock = [
    {
        value: '1',
        label: 'Label 1',
    },
    {
        value: '2',
        label: 'Label 2',
    },
];
class ComponentMock extends React.Component {
    state = {
        selected: [],
    };

    onCheck = (value) => {
        const { selected } = this.state;
        this.setState({
            selected: selected.indexOf(value) >= 0
                ? selected.filter(v => v !== value)
                : [...selected, value],
        });
    };

    render() {
        const { selected } = this.state;
        return <CheckboxGroup options={optionsMock} selected={selected} onCheck={this.onCheck} />;
    }
}


describe('Поведение компонента <CheckboxGroup>', () => {
    it('Обработчик onCheck срабатывает у активного компонента', () => {
        const onCheck = jest.fn(null);
        const expectedCalls = 1;
        const checkboxGroup = mount(<CheckboxGroup options={optionsMock} onCheck={onCheck} />);
        checkboxGroup.find(Checkbox).first().simulate('click');
        expect(onCheck.mock.calls.length).toBe(expectedCalls);
    });
    it('Обработчик onCheck не срабатывает у неактивного компонента', () => {
        const onCheck = jest.fn(null);
        const expectedCalls = 0;
        const checkboxGroup = mount(
            <CheckboxGroup options={optionsMock} onCheck={onCheck} disabled />,
        );
        checkboxGroup.find(Checkbox).first().simulate('click');
        expect(onCheck.mock.calls.length).toBe(expectedCalls);
    });
    it('Стандартный алгоритм использования', () => {
        const component = mount(<ComponentMock />);
        component.find(Checkbox).first().simulate('click');
        expect(component.find(CheckboxGroup).instance().props.selected)
            .toBe(component.state().selected);
    });
});
