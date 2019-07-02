import React from 'react';
import PropTypes from 'prop-types';
import Mask from './mask';


// В эту проверку попадают IE9 и IE10,
// которые не могут корректно работать с кареткой на событии `input`.
const IS_IE9_10 = typeof window !== 'undefined' && Boolean(window.ActiveXObject);

const IS_ANDROID = typeof window !== 'undefined' && /(android)/i.test(window.navigator.userAgent);

/*
 * Для IE11 вместо `onChange`, используем событие `onInput`, для правильной работы copy/paste
 * Issue на ошибку в React: https://github.com/facebook/react/issues/7211
 * Детектим IE11: `Object.hasOwnProperty.call(window, 'ActiveXObject') && !window.ActiveXObject;`
 */
const IS_IE11 = typeof window !== 'undefined'
    && Object.hasOwnProperty.call(window, 'ActiveXObject')
    && !window.ActiveXObject;


const operationType = {
    ADD: 0,
    DELETE: 1,
    REPLACE: 2,
};
export default class MaskedInput extends React.Component {
    static propTypes = {
        mask: PropTypes.string.isRequired,
        formatCharacters: PropTypes.shape({
            validate: PropTypes.func.isRequired,
            transform: PropTypes.func,
        }),
        // eslint-disable-next-line react/forbid-prop-types
        value: PropTypes.any,
        maxLength: PropTypes.number,
        /**
         * Обработчик, вызываемый перед началом ввода в поле
         */
        onProcessInputEvent: PropTypes.func,
        onBeforeInput: PropTypes.func,
        onInput: PropTypes.func,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        formatCharacters: {},
        value: undefined,
        maxLength: undefined,
        onProcessInputEvent: undefined,
        onBeforeInput: undefined,
        onInput: undefined,
        onChange: undefined,
    };

    input = null;

    maskPattern = undefined;

    mask = undefined;

    formatCharacters = undefined;

    value = '';

    beforeInputSelection = {
        start: 0,
        end: 0,
    };

    caretFixTimeout = null;

    componentWillMount() {
        const { mask, formatCharacters, value } = this.props;
        this.setMask(mask, formatCharacters);
        this.value = this.mask.format(value || '');
    }

    componentWillReceiveProps(nextProps) {
        const { value, mask, formatCharacters } = this.props;
        let reformatValue = false;
        if (mask !== nextProps.mask || formatCharacters !== nextProps.formatCharacters) {
            this.setMask(nextProps.mask, nextProps.formatCharacters);
            reformatValue = true;
        }
        if (reformatValue || value !== nextProps.value) {
            this.value = this.mask.format(nextProps.value || '');
        }
    }

    componentWillUnmount() {
        if (this.caretFixTimeout) {
            clearTimeout(this.caretFixTimeout);
            this.caretFixTimeout = null;
        }
    }

    onRefInput = (input) => {
        this.input = input;
    };

    onBeforeInput = (event) => {
        const { onBeforeInput } = this.props;
        this.beforeInputSelection = {
            start: this.input.selectionStart,
            end: this.input.selectionEnd,
        };
        if (onBeforeInput) onBeforeInput(event);
    };

    onInput = (event) => {
        const { onInput, onChange } = this.props;
        let fixedEvent = event;
        if (!IS_IE9_10) {
            fixedEvent = this.processInputEvent(event);
        }
        if (onInput) {
            onInput(fixedEvent);
        }
        if (IS_IE11 && onChange) {
            onChange(fixedEvent);
        }
    };

    onChange = (event) => {
        const { onChange } = this.props;
        let fixedEvent = event;
        if (IS_IE9_10) {
            fixedEvent = this.processInputEvent(event);
        }
        if (!IS_IE11 && onChange) {
            onChange(fixedEvent);
        }
    };

    /* eslint-disable */
    processInputEvent(event) {
        const { onProcessInputEvent } = this.props;
        if (onProcessInputEvent) {
            onProcessInputEvent(event);
        }
        const prevSelection = this.input.selectionStart;
        const newValue = event.target.value;
        const currentValue = this.value;
        const formattedValue = this.mask.format(newValue);
        this.value = formattedValue;
        event.target.value = formattedValue;
        /*
         * Если изменение поля ввода произошло не в конце ввода,
         * то необходимо починить стандартное поведение Реакта и
         * вернуть каретку к последнему изменению.
         */
        if (prevSelection <= currentValue.length) {
            let newSelection = prevSelection;
            // Определяем тип операции, который был произведен над текстовым полем.
            let opType = newValue.length >= currentValue.length
                ? operationType.ADD
                : operationType.DELETE;
            /*
             * На пользовательском инпуте было выделение перед операцией,
             * значит могла быть операция или удаления или замены.
             */
            const beforeInputSelectionLength = this.beforeInputSelection.end - this.beforeInputSelection.start;
            if (beforeInputSelectionLength >= 1) {
                if (newValue.length >= currentValue.length - beforeInputSelectionLength) {
                    opType = operationType.REPLACE;
                }
            }
            /*
             * Для операции доавления и замены, если мы стояли на нередактируемом символе,
             * то добаляем сдвиг до ближайшего редактируемого.
             */
            if (opType === operationType.ADD || opType === operationType.REPLACE) {
                let index = this.beforeInputSelection.start;
                while (!this.mask.isEditableIndex(index) && index < formattedValue.length) {
                    index++;
                }
                newSelection += (index - this.beforeInputSelection.start);
            }
            /*
             * Если вдруг попали на нередактируемый символ маски,
             * то подвигаем курсом до ближайшего редактируемого.
             */
            if (opType === operationType.ADD || opType === operationType.REPLACE) {
                while (!this.mask.isEditableIndex(newSelection) && newSelection < formattedValue.length) {
                    newSelection++;
                }
            } else if (opType === operationType.DELETE) {
                while (!this.mask.isEditableIndex(newSelection - 1) && newSelection > 0) {
                    newSelection--;
                }
            }
            this.setInputSelection(this.clampSelection(newSelection));
        /*
         * Если изменение поля произошло в конце ввода.
         * Android chrome имеет дефект с автоматической установкой каретки
         * при использовании клавиатуры отличной от type="text".
         */
        } else if (IS_ANDROID) {
            this.setInputSelectionByTimeout(event.target.selectionStart);
        }
        return event;
    }
    /* eslint-enable */

    clampSelection(selection) {
        const { firstEditableIndex, lastEditableIndex } = this.mask;
        if (selection < firstEditableIndex) {
            return firstEditableIndex;
        }
        if (selection > lastEditableIndex + 1) {
            return lastEditableIndex + 1;
        }
        return selection;
    }

    setInputSelection(selection) {
        this.input.selectionStart = selection;
        this.input.selectionEnd = selection;
        if (IS_IE9_10 || IS_ANDROID) {
            this.setInputSelectionByTimeout(selection);
        }
    }

    setInputSelectionByTimeout(selection) {
        if (this.caretFixTimeout) {
            clearTimeout(this.caretFixTimeout);
            this.caretFixTimeout = null;
        }
        this.caretFixTimeout = setTimeout(() => {
            this.caretFixTimeout = null;
            this.input.selectionStart = selection;
            this.input.selectionEnd = selection;
        }, 0);
    }

    setMask(newMask, formatCharacters) {
        if (this.maskPattern !== newMask || this.formatCharacters !== formatCharacters) {
            this.mask = new Mask(newMask, formatCharacters);
            this.maskPattern = newMask;
            this.formatCharacters = formatCharacters;
        }
    }

    isFilled() {
        const maskLength = this.mask.length;
        const valueLength = this.value.length;
        const valueOptionalLength = this.value.length + this.mask.optionalLength;
        return valueLength === maskLength || valueOptionalLength === maskLength;
    }

    render() {
        const props = { ...this.props };
        const { maxLength } = props;
        const length = typeof maxLength === 'undefined' ? this.mask.length : maxLength;
        delete props.mask;
        delete props.formatCharacters;
        delete props.onProcessInputEvent;

        return (
            <input
                {...props}
                ref={this.onRefInput}
                maxLength={length}
                value={this.value}
                onBeforeInput={this.onBeforeInput}
                onInput={this.onInput}
                onChange={this.onChange}
            />
        );
    }

    focus() {
        this.input.focus();
    }

    blur() {
        this.input.blur();
    }
}
