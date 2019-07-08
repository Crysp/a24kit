import React, { SVGAttributes } from 'react';
import Wrapper from './styled';

export interface Props extends SVGAttributes<SVGElement> {
    children: React.ReactNode
    size?: string | number
    style?: object
}

export const sizes = {
    AUTO: 'auto',
    SIZE_8: 8,
    SIZE_12: 12,
    SIZE_16: 16,
    SIZE_20: 20,
    SIZE_24: 24,
    SIZE_32: 32,
};
export default class SvgIcon extends React.PureComponent<Props> {
    static defaultProps = {
        style: {},
        size: sizes.AUTO,
    };

    render() {
        const {
            children,
            ...other
        } = this.props;
        return (
            <Wrapper
                focusable="false"
                aria-hidden="true"
                {...other}
            >
                {children}
            </Wrapper>
        );
    }
}
