/**
 * Переводит формат маски телефона который хранится в базе
 * к формату компонента Input
 * Пример:
 * 999-99-99?9 -> 111-11-11[1]
 *
 * @param sourceMask {String} - маска для адаптирования
 * @returns {String}
 */
export default function normalizeInputMaskFormat(sourceMask: string): string;
