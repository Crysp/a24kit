import React from 'react';
import Mark from './components/Mark';
import { Wrapper, Label } from './styled';

export interface Props {
    color: 'blue' | 'green' | 'deepBlue'
    isChecked: boolean
    label: React.ReactNode
    large: boolean
    disabled: boolean
    onCheck(): void
}

export default class Checkbox extends React.Component<Props> {
    static defaultProps = {
        color: 'blue',
        isChecked: false,
        label: '',
        large: false,
        disabled: false,
        onCheck() {},
    };

    onCheck = () => {
        const { disabled, onCheck } = this.props;
        if (disabled) return;
        onCheck();
    };

    render() {
        const {
            label,
            disabled,
            ...other
        } = this.props;
        delete other.onCheck;
        delete other.large;
        const hasLabel = (typeof label === 'string' && label.length > 0) || label;
        return (
            <Wrapper disabled={disabled} onClick={this.onCheck} {...other}>
                <Mark {...this.props} />
                {hasLabel && <Label disabled={disabled}>{label}</Label>}
            </Wrapper>
        );
    }
}
