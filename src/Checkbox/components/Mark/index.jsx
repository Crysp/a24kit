import React from 'react';
import PropTypes from 'prop-types';
import {
    Wrapper,
    CheckMarkWrapper,
    CheckMarkIcon,
} from './styled';

const Mark = (props) => {
    const {
        isChecked,
        disabled,
        color,
        large,
    } = props;
    return (
        <Wrapper
            disabled={disabled}
            isChecked={isChecked}
            large={large}
        >
            <CheckMarkWrapper
                isChecked={isChecked}
                disabled={disabled}
                color={color}
            >
                <CheckMarkIcon large={large} />
            </CheckMarkWrapper>
        </Wrapper>
    );
};

Mark.propTypes = {
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    color: PropTypes.string,
    large: PropTypes.bool,
};

Mark.defaultProps = {
    isChecked: false,
    disabled: false,
    color: '',
    large: false,
};

export default Mark;
