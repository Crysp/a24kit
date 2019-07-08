import React from 'react';
import Wrapper from './styled';

export interface Props {
    size: 1 | 2 | 3
    light: boolean
    children: React.ReactNode
}

/**
 * General component description in JSDoc format. Markdown is *supported*.
 * @develop
 */
export default class P extends React.PureComponent<Props> {
    static defaultProps = {
        size: 1,
        light: false,
    };

    render() {
        const { children, ...other } = this.props;
        return <Wrapper {...other}>{children}</Wrapper>;
    }
}
