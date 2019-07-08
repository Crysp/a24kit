import React from 'react';
import Checkbox from '../Checkbox';
import {
    List,
    Option,
} from './styled';

export interface Props {
    selected: string[]
    options: {
        value: any
        label: string
    }[]
    color: 'blue' | 'green' | 'deepBlue'
    large: boolean
    disabled: boolean
    onCheck(selected: string[]): void
}

interface State {
    selected: string[]
}

export default class CheckboxGroup extends React.PureComponent<Props, State> {
    static defaultProps = {
        selected: [],
        color: 'blue',
        large: false,
        disabled: false,
        onCheck() {},
    };

    state = {
        selected: this.props.selected || [],
    };

    onCheck = (value) => {
        const { selected } = this.state;
        const { onCheck } = this.props;
        const index = selected.indexOf(value);
        let nextSelected: string[] = [];
        if (index >= 0) {
            nextSelected = [
                ...selected.slice(0, index),
                ...selected.slice(index + 1, selected.length),
            ];
        } else {
            nextSelected = [...selected, value];
        }
        this.setState({ selected: nextSelected });
        onCheck(nextSelected);
    };

    render() {
        const {
            selected,
            options,
            color,
            large,
            disabled,
        } = this.props;
        return (
            <List>
                {options.map(({ value, label }) => (
                    <Option key={value}>
                        <Checkbox
                            label={label}
                            isChecked={selected.indexOf(value) >= 0}
                            onCheck={() => this.onCheck(value)}
                            color={color}
                            large={large}
                            disabled={disabled}
                        />
                    </Option>
                ))}
            </List>
        );
    }
}
