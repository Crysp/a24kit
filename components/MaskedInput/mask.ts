import InputMask from 'inputmask-core';


// Стандартный плейсхолдер буквы равный по ширине цифровому символу.
const PLACEHOLDER_CHAR = '\u2007';

// Стандартные formatCharacters из inputmask-core.
const DIGIT_RE = /^\d$/;
const LETTER_RE = /^[A-Za-z]$/;
const ALPHANNUMERIC_RE = /^[\dA-Za-z]$/;

/**
 * @typedef {Object} CharFormatter
 * @property {Function} validate Предикат-фильтр
 * @property {Function} [transform] Действия с символом
 */

/**
 * @typedef {Object.<string, CharFormatter>} FormatCharacters
 */

/**
 * @type FormatCharacters
 */
const DEFAULT_FORMAT_CHARACTERS = {
    '*': {
        validate(char) {
            return ALPHANNUMERIC_RE.test(char);
        },
    },
    1: {
        validate(char) {
            return DIGIT_RE.test(char);
        },
    },
    a: {
        validate(char) {
            return LETTER_RE.test(char);
        },
    },
    A: {
        validate(char) {
            return LETTER_RE.test(char);
        },
        transform(char) {
            return char.toUpperCase();
        },
    },
    '#': {
        validate(char) {
            return ALPHANNUMERIC_RE.test(char);
        },
        transform(char) {
            return char.toUpperCase();
        },
    },
};

/**
 * Класс маски. Позволяет форматировать строку по заданной маске.
 *
 * @class
 * @param {String} mask Маска в формате: https://github.com/insin/inputmask-core
 * @param {FormatCharacters} [formatCharacters] Форматтеры маски в формате `inputmask-core`
 */
class Mask {
    /**
     * Длина маски.
     *
     * @public
     * @type {Number}
     */
    length;

    /**
     * Индекс первого редактируемого символа.
     *
     * @public
     * @type {Number}
     */
    firstEditableIndex;

    /**
     * Индекс последнего редактируемого символа.
     *
     * @public
     * @type {Number}
     */
    lastEditableIndex;

    /**
     * @type {InputMask.Pattern}
     */
    pattern;

    optionalLength;

    constructor(mask, formatCharacters?) {
        this.pattern = new InputMask.Pattern(
            mask.replace(/\[|\]/g, ''),
            { ...DEFAULT_FORMAT_CHARACTERS, ...formatCharacters },
            PLACEHOLDER_CHAR,
        );

        this.length = this.pattern.length;
        this.optionalLength = mask.indexOf('[') > -1 ? mask.slice(mask.indexOf('[')).replace(/\[|\]/g, '').length : 0;
        this.firstEditableIndex = this.pattern.firstEditableIndex;
        this.lastEditableIndex = this.pattern.lastEditableIndex;
    }

    /**
     * Проверяет является ли символ в заданном индексе редактируемым.
     *
     * @param {Number} index Индекс символа.
     * @returns {Boolean}
     */
    isEditableIndex(index) {
        return this.pattern.isEditableIndex(index);
    }

    /**
     * Форматирует значение введенное в поле ввода по маске.
     *
     * @param {String} value Неформатированное значение из поля ввода.
     * @returns {String}
     */
    /* eslint-disable max-statements */
    format(value) {
        let formattedValue = '';
        const cleanValue = value.toString().replace(/\s+/g, '');
        const cleanValueLength = cleanValue.length;
        let cleanValueIndex = 0;
        let cleanValueChar;
        let patternIndex = 0;
        let patternChar;
        const patternLength = this.pattern.length;
        while (patternIndex < patternLength && cleanValueIndex < cleanValueLength) {
            if (this.pattern.isEditableIndex(patternIndex)) {
                // eslint-disable-next-line no-cond-assign
                while ((cleanValueChar = cleanValue.charAt(cleanValueIndex)) !== '') {
                    if (this.pattern.isValidAtIndex(cleanValueChar, patternIndex)) {
                        formattedValue += this.pattern.transform(cleanValueChar, patternIndex);
                        patternIndex += 1;
                        cleanValueIndex += 1;
                        break;
                    } else {
                        cleanValueIndex += 1;
                    }
                }
            } else {
                patternChar = this.pattern.pattern[patternIndex];
                formattedValue += patternChar;
                patternIndex += 1;
                if (cleanValue.charAt(cleanValueIndex) === patternChar) {
                    cleanValueIndex += 1;
                }
            }
        }
        return formattedValue;
    }
    /* eslint-enable max-statements */
}

export default Mask;
