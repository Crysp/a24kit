export declare const CURRENCY_MAP: {
    [key: string]: string;
};
/**
 * Возвращает знак валюты по ISO коду.
 *
 * @param {String} currencyCode Код валюты.
 * @returns {String}
 */
export declare function getCurrencySymbol(currencyCode: string): string;
/**
 * Возвращает данные для форматирования валюты по ISO коду.
 *
 * @param {String} currencyCode Код валюты.
 * @returns {*}
 */
export declare function getCurrencyMeta(currencyCode: string): {
    symbol: string;
    minorSplitter: string;
    majorSplitter: string;
    template: string;
};
