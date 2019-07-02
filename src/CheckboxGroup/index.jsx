import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import {
    List,
    Option,
} from './styled';


/**
 * @develop
 */
export default class CheckboxGroup extends React.PureComponent {
    static propTypes = {
        /**
         * Выбранные элементы
         */
        selected: PropTypes.arrayOf(PropTypes.string),
        /**
         * Набор данных для построения списка
         */
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.any,
            label: PropTypes.string,
        })).isRequired,
        /**
         * Цвет чекбоксов
         */
        color: PropTypes.oneOf(['blue', 'green', 'deepBlue']),
        /**
         * Большие чекбоксы
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
    };

    static defaultProps = {
        selected: [],
        color: 'blue',
        large: false,
        disabled: false,
        onCheck() {},
    };

    state = {
        selected: this.props.selected || [],
    };

    onCheck = (value) => {
        const { selected } = this.state;
        const { onCheck } = this.props;
        const index = selected.indexOf(value);
        let nextSelected = [];
        if (index >= 0) {
            nextSelected = [
                ...selected.slice(0, index),
                ...selected.slice(index + 1, selected.length),
            ];
        } else {
            nextSelected = [...selected, value];
        }
        this.setState({ selected: nextSelected });
        onCheck(nextSelected);
    };

    render() {
        const {
            selected,
            options,
            color,
            large,
            disabled,
        } = this.props;
        return (
            <List>
                {options.map(({ value, label }) => (
                    <Option key={value}>
                        <Checkbox
                            label={label}
                            isChecked={selected.indexOf(value) >= 0}
                            onCheck={() => this.onCheck(value)}
                            color={color}
                            large={large}
                            disabled={disabled}
                        />
                    </Option>
                ))}
            </List>
        );
    }
}
