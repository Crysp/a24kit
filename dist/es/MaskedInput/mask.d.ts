/**
 * Класс маски. Позволяет форматировать строку по заданной маске.
 *
 * @class
 * @param {String} mask Маска в формате: https://github.com/insin/inputmask-core
 * @param {FormatCharacters} [formatCharacters] Форматтеры маски в формате `inputmask-core`
 */
declare class Mask {
    /**
     * Длина маски.
     *
     * @public
     * @type {Number}
     */
    length: any;
    /**
     * Индекс первого редактируемого символа.
     *
     * @public
     * @type {Number}
     */
    firstEditableIndex: any;
    /**
     * Индекс последнего редактируемого символа.
     *
     * @public
     * @type {Number}
     */
    lastEditableIndex: any;
    /**
     * @type {InputMask.Pattern}
     */
    pattern: any;
    optionalLength: any;
    constructor(mask: any, formatCharacters?: any);
    /**
     * Проверяет является ли символ в заданном индексе редактируемым.
     *
     * @param {Number} index Индекс символа.
     * @returns {Boolean}
     */
    isEditableIndex(index: any): any;
    /**
     * Форматирует значение введенное в поле ввода по маске.
     *
     * @param {String} value Неформатированное значение из поля ввода.
     * @returns {String}
     */
    format(value: any): string;
}
export default Mask;
