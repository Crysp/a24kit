import React from 'react';
import StyledBadge from './styled';

export interface Props {
    children: React.ReactNode
    color: 'blue' | 'green' | 'red' | 'gold' | 'gray'
    size: 'medium' | 'small'
    round: boolean
    className: string
}

export default class Badge extends React.PureComponent<Props> {
    static defaultProps = {
        color: 'gray',
        size: 'medium',
        round: false,
        className: '',
        children: null,
    };

    render() {
        const {
            children,
            ...other
        } = this.props;
        return <StyledBadge {...other}>{children}</StyledBadge>;
    }
}
