import React from 'react';
import PropTypes from 'prop-types';
import { Loop } from '../Icon';
import Option from './components/Option';
import {
    Wrapper,
    Field,
    Text,
    Arrow,
    OptionList,
    Search,
    Result,
} from './styled';


/**
 * @develop
 */
export const VISIBLE_ITEMS = 1;
export default class Select extends React.Component {
    static propTypes = {
        /**
         * Варианты для выбора
         */
        options: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
        })).isRequired,
        /**
         * Выбранное значение или массив значений (если включен multiple)
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        /**
         * Текст заглушка
         */
        placeholder: PropTypes.string,
        /**
         * Можно выбрать несколько значений
         */
        multiple: PropTypes.bool,
        /**
         * Можно филтровать значения в списке
         */
        searchable: PropTypes.bool,
        /**
         * Максимальная высота выпадающего списка
         */
        maxHeight: PropTypes.number,
        /**
         * Целое число, определяющее должен ли данный элемент учавствовать
         * в последовательной навигации по всей странице
         * с помощью клавиатуры, в каком порядке.
         */
        tabIndex: PropTypes.number,
        /**
         * Неактивный элемент
         */
        disabled: PropTypes.bool,
        /**
         * Собственная отрисовка выбранного элемента
         */
        renderSelected: PropTypes.func,
        /**
         * Собственная отрисовка контента для каждого элемента списка
         */
        renderOption: PropTypes.func,
        /**
         * Обработчик изменения выбора
         * @param {*} value - выбранное значение или массив значений (если включен multiple)
         */
        onChange: PropTypes.func,
        /**
         * CSS класс
         */
        className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    };

    static defaultProps = {
        value: null,
        placeholder: '',
        multiple: false,
        searchable: false,
        maxHeight: 250,
        tabIndex: 0,
        disabled: false,
        className: '',
        renderSelected: undefined,
        renderOption: undefined,
        onChange() {},
    };

    state = {
        searchLabel: '',
        isOpened: false,
    };

    componentDidMount() {
        document.addEventListener('click', this.onClickOuter);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onClickOuter);
    }

    onRefNode = (node) => {
        this.node = node;
    };

    onClickOuter = (e) => {
        if (this.node && !this.node.contains(e.target)) {
            this.closeMenu();
        }
    };

    onToggle = () => {
        const { disabled } = this.props;
        const { isOpened } = this.state;
        if (disabled) return;
        this.setState({ isOpened: !isOpened });
    };

    onSelect = (_value) => {
        const { value, multiple, onChange } = this.props;
        if (multiple) {
            let selected = [];
            if (value === null) {
                selected = [_value];
            } else {
                const isSelected = value.indexOf(_value) >= 0;
                if (isSelected) {
                    value.splice(value.indexOf(_value), 1);
                }
                selected = isSelected ? value : [...value, _value];
            }
            onChange(selected);
        } else {
            this.closeMenu();
            onChange(_value);
        }
    };

    onChangeSearchLabel = (searchLabel) => {
        this.setState({ searchLabel });
    };

    getText() {
        const {
            value,
            placeholder,
            options,
            renderSelected,
        } = this.props;

        let text = placeholder;
        if (value !== null && value.length > 0) {
            if (typeof value === 'object') {
                if (value.length === VISIBLE_ITEMS) {
                    text = options.find(opt => opt.value === value[0]).label;
                } else {
                    text = `Выбрано ${value.length} пунктов`;
                }
            } else {
                const selected = options.find(opt => opt.value === value);
                if (renderSelected) {
                    text = renderSelected(selected);
                } else {
                    text = selected.label;
                }
            }
        }
        return text;
    }

    getOptions() {
        const { options, searchable } = this.props;
        const { searchLabel } = this.state;
        if (searchable) {
            return options.filter(opt => (
                opt.label.toLowerCase().indexOf(searchLabel.toLowerCase()) >= 0
            ));
        }
        return options;
    }

    closeMenu() {
        this.setState({ isOpened: false, searchLabel: '' });
    }

    renderOption(option) {
        const { renderOption } = this.props;
        if (renderOption) {
            return renderOption(option);
        }
        return option.label;
    }

    render() {
        const {
            value: localValue,
            multiple,
            searchable,
            maxHeight,
            tabIndex,
            disabled,
            className,
            ...other
        } = this.props;
        const { isOpened, searchLabel } = this.state;
        const options = this.getOptions();
        return (
            <Wrapper
                disabled={disabled}
                className={className}
                ref={this.onRefNode}
                tabIndex={tabIndex}
            >
                <Field
                    opened={isOpened}
                    disabled={disabled}
                    onClick={this.onToggle}
                    {...other}
                >
                    <Text disabled={disabled}>{this.getText()}</Text>
                    <Arrow
                        size={16}
                        opened={isOpened}
                        disabled={disabled}
                    />
                </Field>
                <OptionList
                    // eslint-disable-next-line react/no-string-refs
                    ref="options"
                    maxHeight={maxHeight}
                    opened={isOpened}
                >
                    {searchable && (
                        <Search
                            placeholder="Что ищем?"
                            icon={<Loop />}
                            boundless
                            value={searchLabel}
                            onChange={this.onChangeSearchLabel}
                        />
                    )}
                    {options.length > 0
                        ? options.map(({ value }, index) => (
                            <Option
                                key={value}
                                label={this.renderOption(options[index])}
                                hasCheckbox={multiple}
                                isChecked={
                                    multiple
                                    && localValue !== null
                                    && localValue.indexOf(value) >= 0
                                }
                                isSelected={!multiple && localValue === value}
                                onSelect={() => this.onSelect(value)}
                            />
                        ))
                        // eslint-disable-next-line react/no-string-refs
                        : <Result ref="empty">Не найдено</Result>}
                </OptionList>
            </Wrapper>
        );
    }
}
