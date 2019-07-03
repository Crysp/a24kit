import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styled';


/**
 * General component description in JSDoc format. Markdown is *supported*.
 * @develop
 */
export const sizes = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
};
export default class H extends React.PureComponent {
    static propTypes = {
        /**
         * Текст заголовка
         */
        children: PropTypes.node.isRequired,
        /**
         * Размер
         */
        size: PropTypes.oneOf([
            sizes.ONE,
            sizes.TWO,
            sizes.THREE,
            sizes.FOUR,
            sizes.FIVE,
            sizes.SIX,
        ]),
    };

    static defaultProps = {
        size: sizes.ONE,
    };

    render() {
        const { children, ...other } = this.props;
        return <Wrapper {...other}>{children}</Wrapper>;
    }
}
