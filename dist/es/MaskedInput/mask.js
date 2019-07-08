"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var inputmask_core_1 = __importDefault(require("inputmask-core")); // Стандартный плейсхолдер буквы равный по ширине цифровому символу.


var PLACEHOLDER_CHAR = "\u2007"; // Стандартные formatCharacters из inputmask-core.

var DIGIT_RE = /^\d$/;
var LETTER_RE = /^[A-Za-z]$/;
var ALPHANNUMERIC_RE = /^[\dA-Za-z]$/;
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

var DEFAULT_FORMAT_CHARACTERS = {
  '*': {
    validate: function validate(char) {
      return ALPHANNUMERIC_RE.test(char);
    }
  },
  1: {
    validate: function validate(char) {
      return DIGIT_RE.test(char);
    }
  },
  a: {
    validate: function validate(char) {
      return LETTER_RE.test(char);
    }
  },
  A: {
    validate: function validate(char) {
      return LETTER_RE.test(char);
    },
    transform: function transform(char) {
      return char.toUpperCase();
    }
  },
  '#': {
    validate: function validate(char) {
      return ALPHANNUMERIC_RE.test(char);
    },
    transform: function transform(char) {
      return char.toUpperCase();
    }
  }
};
/**
 * Класс маски. Позволяет форматировать строку по заданной маске.
 *
 * @class
 * @param {String} mask Маска в формате: https://github.com/insin/inputmask-core
 * @param {FormatCharacters} [formatCharacters] Форматтеры маски в формате `inputmask-core`
 */

var Mask =
/*#__PURE__*/
function () {
  function Mask(mask, formatCharacters) {
    _classCallCheck(this, Mask);

    this.pattern = new inputmask_core_1.default.Pattern(mask.replace(/\[|\]/g, ''), Object.assign({}, DEFAULT_FORMAT_CHARACTERS, formatCharacters), PLACEHOLDER_CHAR);
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


  _createClass(Mask, [{
    key: "isEditableIndex",
    value: function isEditableIndex(index) {
      return this.pattern.isEditableIndex(index);
    }
    /**
     * Форматирует значение введенное в поле ввода по маске.
     *
     * @param {String} value Неформатированное значение из поля ввода.
     * @returns {String}
     */

    /* eslint-disable max-statements */

  }, {
    key: "format",
    value: function format(value) {
      var formattedValue = '';
      var cleanValue = value.toString().replace(/\s+/g, '');
      var cleanValueLength = cleanValue.length;
      var cleanValueIndex = 0;
      var cleanValueChar;
      var patternIndex = 0;
      var patternChar;
      var patternLength = this.pattern.length;

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
  }]);

  return Mask;
}();

exports.default = Mask;