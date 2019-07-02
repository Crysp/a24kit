import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styled';


/**
 * Обертка для любой svg иконки
 * @version 1.0.0
 */
export const sizes = {
    AUTO: 'auto',
    SIZE_8: 8,
    SIZE_12: 12,
    SIZE_16: 16,
    SIZE_20: 20,
    SIZE_24: 24,
    SIZE_32: 32,
};
export default class SvgIcon extends React.PureComponent {
    static propTypes = {
        /**
         * SVG разметка
         */
        children: PropTypes.node.isRequired,
        /**
         * Определяет видимую область
         * ([стандартный атрибут SVG](https://developer.mozilla.org/ru/docs/Web/SVG/Attribute/viewBox))
         */
        viewBox: PropTypes.string.isRequired,
        /**
         * Размер иконки
         * - auto (заполняет все пространство контейнера)
         * - 8, 12, 16, 20, 24, 32 (наиболее используемые размеры)
         *
         * Исключения задаются через CSS стили
         */
        size: PropTypes.oneOf([
            sizes.AUTO,
            sizes.SIZE_8,
            sizes.SIZE_12,
            sizes.SIZE_16,
            sizes.SIZE_20,
            sizes.SIZE_24,
            sizes.SIZE_32,
        ]),
        /**
         * Кастомные стили
         */
        style: PropTypes.shape(),
    };

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
