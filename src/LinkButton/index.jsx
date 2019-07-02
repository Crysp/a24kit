import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled';


/**
 * Иногда ссылку надо выделить. По сути, это кнопка для вызова контекстных действий.
 * @develop
 */
export default class LinkButton extends React.PureComponent {
    static propTypes = {
        /**
         * Текст кнопки
         */
        children: PropTypes.string.isRequired,
        /**
         * Дополнительный CSS класс
         */
        className: PropTypes.string,
    };

    static defaultProps = {
        className: '',
    };

    render() {
        return <StyledButton {...this.props} />;
    }
}
