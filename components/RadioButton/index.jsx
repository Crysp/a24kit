import React from 'react';
import PropTypes from 'prop-types';
import Radio from '../Radio';
import { Wrapper, Label } from './styled';


/**
 * @develop
 */
export default class RadioButton extends React.Component {
    static propTypes = {
        /**
         * Значение кнопки
         */
        value: PropTypes.node.isRequired,
        /**
         * Текстовая подпись
         */
        label: PropTypes.string,
        /**
         * Цвет
         */
        color: PropTypes.oneOf(['blue', 'green']),
        /**
         * Выбран ли элемент
         */
        isChecked: PropTypes.bool,
        /**
         * Увеличенный размер
         */
        large: PropTypes.bool,
        /**
         * Неактивная
         */
        disabled: PropTypes.bool,
        'data-testid': PropTypes.string,
        /**
         * Обработчик выбора
         */
        onCheck: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
    };

    static defaultProps = {
        label: '',
        isChecked: false,
        large: false,
        disabled: false,
        color: 'blue',
        'data-testid': undefined,
        onCheck() {},
        onMouseEnter: undefined,
        onMouseLeave: undefined,
    };

    state = {
        isHovered: false,
    };

    onCheck = () => {
        const { disabled } = this.props;
        if (!disabled) this.props.onCheck(this.props.value);
    };

    onMouseEnter = (e) => {
        const { onMouseEnter, disabled } = this.props;
        if (disabled) return;
        this.setState({ isHovered: true });
        if (onMouseEnter) onMouseEnter(e);
    };

    onMouseLeave = (e) => {
        const { onMouseLeave, disabled } = this.props;
        if (disabled) return;
        this.setState({ isHovered: false });
        if (onMouseLeave) onMouseLeave(e);
    };

    render() {
        const {
            label,
            large,
            isChecked,
            color,
            disabled,
            'data-testid': dataTestId,
        } = this.props;
        const { isHovered } = this.state;
        return (
            <Wrapper
                onClick={this.onCheck}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                disabled={disabled}
                data-testid={dataTestId}
            >
                <Radio
                    color={color}
                    large={large}
                    disabled={disabled}
                    isChecked={isChecked}
                    isHighlighted={isHovered}
                />
                {label.length > 0 && <Label disabled={disabled}>{label}</Label>}
            </Wrapper>
        );
    }
}
