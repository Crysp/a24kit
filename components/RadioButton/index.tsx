import React from 'react';
import Radio from '../Radio';
import { Wrapper, Label } from './styled';

export interface Props {
    value: number | string
    label: string
    color: 'blue' | 'green'
    isChecked: boolean
    large: boolean
    disabled: boolean,
    'data-testid': string,
    onCheck(value: number | string): void
    onMouseEnter(e: React.SyntheticEvent): void
    onMouseLeave(e: React.SyntheticEvent): void
}

interface State {
    isHovered: boolean
}

export default class RadioButton extends React.Component<Props, State> {
    static defaultProps = {
        label: '',
        isChecked: false,
        large: false,
        disabled: false,
        color: 'blue',
        'data-testid': undefined,
        onCheck() {},
        onMouseEnter: undefined,
        onMouseLeave: undefined,
    };

    state = {
        isHovered: false,
    };

    onCheck = () => {
        const { disabled } = this.props;
        if (!disabled) this.props.onCheck(this.props.value);
    };

    onMouseEnter = (e: React.SyntheticEvent) => {
        const { onMouseEnter, disabled } = this.props;
        if (disabled) return;
        this.setState({ isHovered: true });
        if (onMouseEnter) onMouseEnter(e);
    };

    onMouseLeave = (e: React.SyntheticEvent) => {
        const { onMouseLeave, disabled } = this.props;
        if (disabled) return;
        this.setState({ isHovered: false });
        if (onMouseLeave) onMouseLeave(e);
    };

    render() {
        const {
            label,
            large,
            isChecked,
            color,
            disabled,
            'data-testid': dataTestId,
        } = this.props;
        const { isHovered } = this.state;
        return (
            <Wrapper
                onClick={this.onCheck}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                disabled={disabled}
                data-testid={dataTestId}
            >
                <Radio
                    color={color}
                    large={large}
                    disabled={disabled}
                    isChecked={isChecked}
                    isHighlighted={isHovered}
                />
                {label.length > 0 && <Label disabled={disabled}>{label}</Label>}
            </Wrapper>
        );
    }
}
