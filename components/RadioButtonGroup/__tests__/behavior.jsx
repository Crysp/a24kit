import React from 'react';
import { mount } from 'enzyme';
import RadioButtonGroup from '../index';
import RadioButton from '../../RadioButton';


const optionsMock = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
];
class ComponentMock extends React.Component {
    state = {
        selected: [],
    };

    onCheck = (selected) => {
        this.setState({ selected });
    };

    render() {
        const { selected } = this.state;
        return (
            <RadioButtonGroup
                options={optionsMock}
                selected={selected}
                onCheck={this.onCheck}
            />
        );
    }
}


describe('Поведение компонента <RadioButtonGroup>', () => {
    it('Обработчик выбора срабатывает и только 1 раз', () => {
        const onCheck = jest.fn(null);
        const expectedCalls = 1;
        const component = <RadioButtonGroup options={optionsMock} onCheck={onCheck} />;
        const radioButtonGroup = mount(component);
        radioButtonGroup.find(RadioButton).first().simulate('click');
        expect(onCheck.mock.calls.length).toBe(expectedCalls);
    });
    it('Обработчик выбора не срабатывает у неактивного компонента', () => {
        const onCheck = jest.fn(null);
        const expectedCalls = 0;
        const component = <RadioButtonGroup options={optionsMock} onCheck={onCheck} disabled />;
        const radioButtonGroup = mount(component);
        radioButtonGroup.find(RadioButton).first().simulate('click');
        expect(onCheck.mock.calls.length).toBe(expectedCalls);
    });
    it('Стандартный алгоритм использования', () => {
        const component = mount(<ComponentMock />);
        component.find(RadioButton).first().simulate('click');
        expect(component.state().selected).toBe(optionsMock[0].value);
        expect(component.find(RadioButtonGroup).instance().props.selected)
            .toBe(component.state().selected);
    });
});
