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
};
export default class Small extends React.PureComponent {
    static propTypes = {
        /**
         * Текст
         */
        children: PropTypes.string.isRequired,
        /**
         * Размер текста
         */
        size: PropTypes.oneOf([sizes.ONE, sizes.TWO, sizes.THREE]),
    };

    static defaultProps = {
        size: sizes.ONE,
    };

    render() {
        const { children, ...other } = this.props;
        return <Wrapper {...other}>{children}</Wrapper>;
    }
}
