import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledLink,
    Wrapper,
    Addon,
} from './styled';


/**
 * @develop
 */
export default class Link extends React.PureComponent {
    static propTypes = {
        /**
         * Текст ссылки
         */
        children: PropTypes.node.isRequired,
        /**
         * URL ссылки
         */
        href: PropTypes.string,
        /**
         * Иконка
         */
        icon: PropTypes.node,
        /**
         * Позиция иконки
         */
        iconPosition: PropTypes.oneOf(['before', 'after']),
        /**
         * Псевдо-ссылка
         */
        pseudo: PropTypes.bool,
        /**
         * Дополнительный CSS класс
         */
        className: PropTypes.string,
        /**
         * Обработчик клика
         */
        onClick: PropTypes.func,
    };

    static defaultProps = {
        href: '',
        iconPosition: 'before',
        pseudo: false,
        className: '',
        icon: null,
        onClick: undefined,
    };

    onClick = (e) => {
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
                    {icon && iconPosition === 'before' && <Addon before>{icon}</Addon>}
                    <span>{children}</span>
                    {icon && iconPosition === 'after' && <Addon after>{icon}</Addon>}
                </Wrapper>
            </StyledLink>
        );
    }
}
