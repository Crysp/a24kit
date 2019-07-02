import React from 'react';
import PropTypes from 'prop-types';
import Mark from './components/Mark';
import { Wrapper, Label } from './styled';


/**
 * @develop
 */
export default class Checkbox extends React.Component {
    static propTypes = {
        /**
         * Цвет
         */
        color: PropTypes.oneOf(['blue', 'green', 'deepBlue']),
        /**
         * Выбран ли элемент
         */
        isChecked: PropTypes.bool,
        /**
         * Текстовая подпись
         */
        label: PropTypes.node,
        /**
         * Увеличенный размер
         */
        large: PropTypes.bool,
        /**
         * Неактивный
         */
        disabled: PropTypes.bool,
        /**
         * Обработчик выбора
         */
        onCheck: PropTypes.func,
    };

    static defaultProps = {
        color: 'blue',
        isChecked: false,
        label: '',
        large: false,
        disabled: false,
        onCheck() {},
    };

    onCheck = () => {
        const { disabled, onCheck } = this.props;
        if (disabled) return;
        onCheck();
    };

    render() {
        const {
            label,
            disabled,
            ...other
        } = this.props;
        delete other.onCheck;
        delete other.large;
        const hasLabel = (typeof label === 'string' && label.length > 0) || label;
        return (
            <Wrapper disabled={disabled} onClick={this.onCheck} {...other}>
                <Mark {...this.props} />
                {hasLabel && <Label disabled={disabled}>{label}</Label>}
            </Wrapper>
        );
    }
}
