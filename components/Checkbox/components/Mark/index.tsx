import React from 'react';
import {
    Wrapper,
    CheckMarkWrapper,
    CheckMarkIcon,
} from './styled';

export interface Props {
    isChecked: boolean
    disabled: boolean
    color: string
    large: boolean
}

const Mark: React.FunctionComponent<Props> = (props) => {
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

Mark.defaultProps = {
    isChecked: false,
    disabled: false,
    color: '',
    large: false,
};

export default Mark;
