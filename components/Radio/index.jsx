import React from 'react';
import PropTypes from 'prop-types';
import {
    Wrapper,
    EmptyCircle,
    Circle,
} from './styled';


export default class Radio extends React.PureComponent {
    static propTypes = {
        color: PropTypes.oneOf(['blue', 'green']),
        large: PropTypes.bool,
        disabled: PropTypes.bool,
        isChecked: PropTypes.bool,
        isHighlighted: PropTypes.bool,
    };

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
