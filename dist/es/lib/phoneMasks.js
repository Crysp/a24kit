"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Переводит формат маски телефона который хранится в базе
 * к формату компонента Input
 * Пример:
 * 999-99-99?9 -> 111-11-11[1]
 *
 * @param sourceMask {String} - маска для адаптирования
 * @returns {String}
 */

function normalizeInputMaskFormat(sourceMask) {
  var mask = sourceMask.replace(/9/g, '1');
  return mask.replace(/(\?.*)$/g, function (_, optional) {
    return "[".concat(optional.slice(1), "]");
  });
}

exports.default = normalizeInputMaskFormat;