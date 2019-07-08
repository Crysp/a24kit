import React from 'react';
import RadioButton from '../RadioButton';
import { List, Option } from './styled';

export interface Props {
    selected: string
    options: {
        value: string
        label: string
    }[]
    color: 'blue' | 'green'
    large: boolean
    disabled: boolean
    onCheck(value: string): void
    'data-testid': string
}

export default class RadioButtonGroup extends React.Component<Props> {
    static defaultProps = {
        selected: null,
        color: 'blue',
        large: false,
        disabled: false,
        onCheck() {},
        'data-testid': undefined,
    };

    onCheck = (value: string) => {
        this.props.onCheck(value);
    };

    render() {
        const {
            selected,
            options,
            color,
            large,
            disabled,
            'data-testid': dataTestId,
        } = this.props;
        return (
            <List>
                {options.map(({ value, label }) => (
                    <Option key={value}>
                        <RadioButton
                            value={value}
                            label={label}
                            isChecked={selected === value}
                            onCheck={() => this.onCheck(value)}
                            color={color}
                            large={large}
                            disabled={disabled}
                            data-testid={dataTestId}
                        />
                    </Option>
                ))}
            </List>
        );
    }
}
