import React from 'react';
import PropTypes from 'prop-types';
import StyledBadge from './styled';


/**
 * @develop
 */
export default class Badge extends React.PureComponent {
    static propTypes = {
        /**
         * Подпись бейджа
         */
        children: PropTypes.node,
        /**
         * Цвет фона
         */
        color: PropTypes.oneOf(['blue', 'green', 'red', 'gold', 'gray']),
        /**
         * Размер
         */
        size: PropTypes.oneOf(['medium', 'small']),
        /**
         * Круглые углы
         */
        round: PropTypes.bool,
        /**
         * Дополнительный CSS класс
         */
        className: PropTypes.string,
    };

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
