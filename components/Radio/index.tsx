import React from 'react';
import {
    Wrapper,
    EmptyCircle,
    Circle,
} from './styled';

export interface Props {
    color: 'blue' | 'green'
    large: boolean
    disabled: boolean
    isChecked: boolean
    isHighlighted: boolean
}

export default class Radio extends React.PureComponent<Props> {
    static defaultProps = {
        color: 'blue',
        large: false,
        disabled: false,
        isChecked: false,
        isHighlighted: false,
    };

    render() {
        const {
            color,
            large,
            disabled,
            isChecked,
            isHighlighted,
        } = this.props;
        return (
            <Wrapper large={large}>
                <EmptyCircle
                    color={color}
                    checked={isChecked}
                    highlighted={isHighlighted}
                    disabled={disabled}
                />
                <Circle
                    color={color}
                    checked={isChecked}
                    highlighted={isHighlighted}
                    large={large}
                    disabled={disabled}
                />
            </Wrapper>
        );
    }
}
