import React from 'react';
import PropTypes from 'prop-types';
import RadioButton from '../RadioButton';
import { List, Option } from './styled';


/**
 * @develop
 */
export default class RadioButtonGroup extends React.Component {
    static propTypes = {
        /**
         * Выбранный элемент
         */
        selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * Набор данных для построения списка
         */
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.any,
            label: PropTypes.string,
        })).isRequired,
        /**
         * Цвет радио кнопок
         */
        color: PropTypes.oneOf(['blue', 'green']),
        /**
         * Большие радио кнопки
         */
        large: PropTypes.bool,
        /**
         * Неактивный список
         */
        disabled: PropTypes.bool,
        /**
         * Обработчик выбора элемента
         * @param value - выбранный элемент
         */
        onCheck: PropTypes.func,
        'data-testid': PropTypes.string,
    };

    static defaultProps = {
        selected: null,
        color: 'blue',
        large: false,
        disabled: false,
        onCheck() {},
        'data-testid': undefined,
    };

    onCheck = (value) => {
        this.props.onCheck(value);
    };

    render() {
        const {
            selected,
            options,
            color,
            large,
            disabled,
            'data-testid': dataTestId,
        } = this.props;
        return (
            <List>
                {options.map(({ value, label }) => (
                    <Option key={value}>
                        <RadioButton
                            value={value}
                            label={label}
                            isChecked={selected === value}
                            onCheck={() => this.onCheck(value)}
                            color={color}
                            large={large}
                            disabled={disabled}
                            data-testid={dataTestId}
                        />
                    </Option>
                ))}
            </List>
        );
    }
}
