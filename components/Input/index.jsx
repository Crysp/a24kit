import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from '../MaskedInput';
import {
    Field,
    IconWrapper,
    Wrapper,
    Inner,
    FieldWrapper,
    Addon,
} from './styled';


/**
 * @develop
 */
export default class Input extends React.Component {
    static propTypes = {
        /**
         * Сообщает браузеру, к какому типу относится элемент формы
         * Внимание, тип 'number' не умеет работать с масками,
         * в том числе с 'selectionStart' и 'selectionEnd'.
         * Подробнее: http://w3c.github.io/html/sec-forms.html#does-not-apply
         */
        type: PropTypes.oneOf([
            'hidden',
            'password',
            'text',
            'email',
            'tel',
            'url',
            'number',
            'card',
            'money',
        ]),
        /**
         * Значение элемента
         */
        value: PropTypes.string,
        /**
         * Управление автозаполнением компонента
         */
        autoComplete: PropTypes.bool,
        /**
         * Максимальное число символов
         */
        maxLength: PropTypes.number,
        /**
         * Уникальный идентификатор блока
         */
        id: PropTypes.string,
        /**
         * Уникальное имя блока
         */
        name: PropTypes.string,
        /**
         * Последовательность перехода между контролами при нажатии на Tab
         */
        tabIndex: PropTypes.number,
        /**
         * Стандартное ствойство HTMLInputElement 'pattern'.
         * Может быть использовано для показа корректной клавиатуры на мобильных устройствах.
         */
        pattern: PropTypes.string,
        /**
         * Управление встроенной проверкой данных введённых пользователем в поле на корректность
         */
        formNoValidate: PropTypes.bool,
        /**
         * Тултип, который появляется при наведении
         */
        title: PropTypes.string,
        /**
         * Выводит подсказывающий текст
         */
        placeholder: PropTypes.string,
        /**
         * Неактивный элемент
         */
        disabled: PropTypes.bool,
        /**
         * Вид элемента. Позволяет показать корректность введенных данных или наоборот
         */
        status: PropTypes.oneOf(['default', 'success', 'error']),
        /**
         * Иконка
         */
        icon: PropTypes.node,
        /**
         * Расположение иконки
         */
        iconPosition: PropTypes.oneOf(['before', 'after']),
        /**
         * Выключает рамку
         */
        boundless: PropTypes.bool,
        /**
         * Выравнивание значения и плейсхолдера по центру
         */
        centered: PropTypes.bool,
        /**
         * Добавление дополнительных элементов к инпуту слева
         */
        leftAddons: PropTypes.node,
        /**
         * Добавление дополнительных элементов к инпуту справа
         */
        rightAddons: PropTypes.node,
        /**
         * Увеличенный шрифт
         */
        largeFont: PropTypes.bool,
        /**
         * Определяет маску для ввода значений. [Шаблон маски](https://github.com/insin/inputmask-core#pattern
         */
        mask: PropTypes.string,
        /**
         * Кастомные форматтеры символов маски, использует
         * формат formatCharacters из `inputmask-core`
         */
        maskFormatCharacters: PropTypes.shape({
            validate: PropTypes.func.isRequired,
            transform: PropTypes.func,
        }),
        /**
         * Обработчик на фокус элемента
         */
        onFocus: PropTypes.func,
        /**
         * Обработчик на потерю фокуса элеметом
         */
        onBlur: PropTypes.func,
        /**
         * Обработчик изменения значения
         */
        onChange: PropTypes.func,
        /**
         * Обработчик клика по полю
         */
        onClick: PropTypes.func,
        /**
         * Обработчик события нажатия на клавишу клавиатуры в момент,
         * когда фокус находится на компоненте
         */
        onKeyDown: PropTypes.func,
        /**
         * Обработчик события отжатия на клавишу клавиатуры в момент,
         * когда фокус находится на компоненте
         */
        onKeyUp: PropTypes.func,
        /**
         * Обработчик события вставки текста в поле
         */
        onPaste: PropTypes.func,
        /**
         * Обработчик события касания по полю
         */
        onTouchStart: PropTypes.func,
        /**
         * Обработчик события прекращения касания по полю
         */
        onTouchEnd: PropTypes.func,
        /**
         * Обработчик события перемещения при касании по полю
         */
        onTouchMove: PropTypes.func,
        /**
         * Обработчик события прерывания касания по полю
         */
        onTouchCancel: PropTypes.func,
        /**
         * Обработчик, вызываемый перед началом ввода в маскированное поле
         */
        onProcessMaskInputEvent: PropTypes.func,
        style: PropTypes.shape(),
        className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        'data-testid': PropTypes.string,
    };

    static defaultProps = {
        formNoValidate: false,
        value: undefined,
        autoComplete: false,
        maxLength: undefined,
        id: undefined,
        name: undefined,
        tabIndex: undefined,
        pattern: undefined,
        title: undefined,
        placeholder: undefined,
        disabled: undefined,
        status: undefined,
        type: 'text',
        icon: null,
        iconPosition: 'before',
        boundless: false,
        centered: false,
        leftAddons: null,
        rightAddons: null,
        largeFont: false,
        mask: undefined,
        maskFormatCharacters: undefined,
        onFocus: undefined,
        onBlur: undefined,
        onChange: undefined,
        onClick: undefined,
        onKeyDown: undefined,
        onKeyUp: undefined,
        onPaste: undefined,
        onTouchStart: undefined,
        onTouchEnd: undefined,
        onTouchMove: undefined,
        onTouchCancel: undefined,
        onProcessMaskInputEvent: undefined,
        style: undefined,
        className: undefined,
        'data-testid': undefined,
    };

    state = {
        isFocused: false,
    };

    root = null;

    onRef = (root) => {
        this.root = root;
    };

    onFocus = (event) => {
        const { onFocus } = this.props;
        this.setState({ isFocused: true });
        if (onFocus) {
            onFocus(event);
        }
    };

    onBlur = (event) => {
        const { onBlur } = this.props;
        this.setState({ isFocused: false });
        if (onBlur) {
            onBlur(event);
        }
    };

    onChange = (event) => {
        this.changeValue(event.target.value);
    };

    onClick = (event) => {
        const { onClick } = this.props;
        if (onClick) {
            onClick(event);
        }
    };

    onKeyDown = (event) => {
        const { onKeyDown } = this.props;
        if (onKeyDown) {
            onKeyDown(event);
        }
    };

    onKeyUp = (event) => {
        const { onKeyUp } = this.props;
        if (onKeyUp) {
            onKeyUp(event);
        }
    };

    onPaste = (event) => {
        const { onPaste } = this.props;
        if (onPaste) {
            onPaste(event);
        }
    };

    onTouchStart = (event) => {
        const { onTouchStart } = this.props;
        if (onTouchStart) {
            onTouchStart(event);
        }
    };

    onTouchEnd = (event) => {
        const { onTouchEnd } = this.props;
        if (onTouchEnd) {
            onTouchEnd(event);
        }
    };

    onTouchMove = (event) => {
        const { onTouchMove } = this.props;
        if (onTouchMove) {
            onTouchMove(event);
        }
    };

    onTouchCancel = (event) => {
        const { onTouchCancel } = this.props;
        if (onTouchCancel) {
            onTouchCancel(event);
        }
    };

    getMaskedInputInstance() {
        const { mask } = this.props;
        if (typeof mask !== 'undefined') {
            return this.root;
        }
        return null;
    }

    changeValue(value) {
        const { onChange } = this.props;
        if (onChange) {
            onChange(value);
        }
    }

    isMaskFilled() {
        const { mask } = this.props;
        if (typeof mask !== 'undefined') {
            return this.root.isFilled();
        }
        return false;
    }

    focus() {
        this.root.focus();
    }

    blur() {
        this.root.blur();
    }

    render() {
        const {
            type,
            value,
            formNoValidate,
            autoComplete,
            maxLength,
            id,
            name,
            tabIndex,
            pattern,
            title,
            placeholder,
            disabled,
            status,
            icon,
            iconPosition,
            boundless,
            centered,
            leftAddons,
            rightAddons,
            largeFont,
            mask,
            maskFormatCharacters,
            onProcessMaskInputEvent,
            className,
            style,
            'data-testid': dataTestId,
        } = this.props;
        const { isFocused } = this.state;
        const isMaskedInput = typeof mask !== 'undefined';
        const inputProps = {
            ref: this.onRef,
            type,
            value,
            formNoValidate,
            autoComplete: autoComplete ? 'on' : 'off',
            maxLength,
            id,
            name,
            tabIndex,
            pattern,
            title,
            placeholder,
            disabled,
            'data-testid': dataTestId,
            onChange: this.onChange,
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onClick: this.onClick,
            onKeyDown: this.onKeyDown,
            onKeyUp: this.onKeyUp,
            onPaste: this.onPaste,
            onTouchStart: this.onTouchStart,
            onTouchEnd: this.onTouchEnd,
            onTouchMove: this.onTouchMove,
            onTouchCancel: this.onTouchCancel,
        };

        return (
            <Wrapper
                focused={(!value || value.length === 0) && isFocused}
                filling={value && value.length > 0 && isFocused}
                status={status}
                disabled={disabled}
                boundless={boundless}
                className={className}
                style={style}
            >
                <Inner>
                    {leftAddons && (
                        <Addon leftGutter>{leftAddons}</Addon>
                    )}
                    {icon !== null && (
                        <IconWrapper
                            iconBefore={icon && iconPosition === 'before'}
                            iconAfter={icon && iconPosition === 'after'}
                        >
                            {icon}
                        </IconWrapper>
                    )}
                    <FieldWrapper>
                        <Field
                            as={isMaskedInput ? MaskedInput : 'input'}
                            large={largeFont}
                            centered={centered}
                            iconBefore={icon && iconPosition === 'before'}
                            iconAfter={icon && iconPosition === 'after'}
                            {...inputProps}
                            /* свойства только для MaskedInput */
                            mask={mask}
                            formatCharacters={maskFormatCharacters}
                            onProcessInputEvent={onProcessMaskInputEvent}
                        />
                    </FieldWrapper>
                    {rightAddons && (
                        <Addon rightGutter>{rightAddons}</Addon>
                    )}
                </Inner>
            </Wrapper>
        );
    }
}
