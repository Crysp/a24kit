import React from 'react';
import {
    StyledLink,
    Wrapper,
    Addon,
} from './styled';

export interface Props {
    children: React.ReactNode
    href: string
    icon: React.ReactNode
    iconPosition: 'before' | 'after'
    pseudo: boolean
    className: string
    onClick(event: React.SyntheticEvent): void
}

export default class Link extends React.PureComponent<Props> {
    static defaultProps = {
        href: '',
        iconPosition: 'before',
        pseudo: false,
        className: '',
        icon: null,
        onClick: undefined,
    };

    onClick = (e: React.SyntheticEvent) => {
        const { href, onClick } = this.props;
        if (href.length === 0) e.preventDefault();
        if (onClick) onClick(e);
    };

    render() {
        const {
            children,
            href,
            icon,
            iconPosition,
            pseudo,
            ...other
        } = this.props;
        return (
            <StyledLink
                href={href}
                pseudo={pseudo}
                {...other}
                onClick={this.onClick}
            >
                <Wrapper pseudo={pseudo}>
                    {icon && iconPosition === 'before' && <Addon>{icon}</Addon>}
                    <span>{children}</span>
                    {icon && iconPosition === 'after' && <Addon>{icon}</Addon>}
                </Wrapper>
            </StyledLink>
        );
    }
}
