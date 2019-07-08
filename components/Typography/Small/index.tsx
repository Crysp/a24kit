import React from 'react';
import Wrapper from './styled';

export interface Props {
    size: 1 | 2 | 3
    children: React.ReactNode
}

/**
 * General component description in JSDoc format. Markdown is *supported*.
 * @develop
 */
export default class Small extends React.PureComponent<Props> {
    static defaultProps = {
        size: 1,
    };

    render() {
        const { children, ...other } = this.props;
        return <Wrapper {...other}>{children}</Wrapper>;
    }
}
