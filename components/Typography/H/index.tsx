import React from 'react';
import Wrapper from './styled';

export interface Props {
    size: 1 | 2 | 3 | 4 | 5 | 6
    children: React.ReactNode
}

/**
 * General component description in JSDoc format. Markdown is *supported*.
 * @develop
 */
export default class H extends React.PureComponent<Props> {
    static defaultProps = {
        size: 1,
    };

    render() {
        const { children, ...other } = this.props;
        return <Wrapper {...other}>{children}</Wrapper>;
    }
}
