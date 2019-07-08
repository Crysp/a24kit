"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CURRENCY_MAP = {
  ALL: "Lek",
  AFN: "\u060B",
  ARS: "$",
  AWG: "\u0192",
  AUD: "AU$",
  AZN: "\u20BC",
  BSD: "$",
  BBD: "$",
  BYR: "Br",
  BZD: "BZ$",
  BMD: "$",
  BOB: "$b",
  BAM: "KM",
  BWP: "P",
  BGN: "\u043B\u0432",
  BRL: "R$",
  BND: "$",
  KHR: "\u17DB",
  CAD: "CA$",
  KYD: "$",
  CLP: "$",
  CNY: "\xA5",
  COP: "$",
  CRC: "\u20A1",
  HRK: "kn",
  CUP: "\u20B1",
  CZK: "K\u010D",
  DKK: "kr",
  DOP: "RD$",
  XCD: "$",
  EGP: "\xA3",
  SVC: "$",
  EEK: "kr",
  EUR: "\u20AC",
  FKP: "\xA3",
  FJD: "$",
  FRF: "\u20A3",
  GHC: "\xA2",
  GIP: "\xA3",
  GTQ: "Q",
  GGP: "\xA3",
  GYD: "$",
  HNL: "L",
  HKD: "$",
  HUF: "Ft",
  ISK: "kr",
  INR: "\u20A8",
  IDR: "Rp",
  IRR: "\uFDFC",
  IMP: "\xA3",
  ILS: "\u20AA",
  JMD: "J$",
  JPY: "\xA5",
  JEP: "\xA3",
  KZT: "\u20B8",
  KGS: "KGS",
  LAK: "\u20AD",
  LVL: "Ls",
  LBP: "\xA3",
  LRD: "$",
  LTL: "Lt",
  MKD: "\u0434\u0435\u043D",
  MYR: "RM",
  MUR: "\u20A8",
  MXN: "$",
  MNT: "\u20AE",
  MZN: "MT",
  NAD: "$",
  NPR: "\u20A8",
  ANG: "\u0192",
  NZD: "$",
  NIO: "C$",
  NGN: "\u20A6",
  KPW: "\u20A9",
  NOK: "kr",
  OMR: "\uFDFC",
  PKR: "\u20A8",
  PAB: "B/.",
  PYG: "Gs",
  PEN: "S/.",
  PHP: "\u20B1",
  PLN: "z\u0142",
  QAR: "\uFDFC",
  RON: "lei",
  RUB: "\u20BD",
  SHP: "\xA3",
  SAR: "\uFDFC",
  RSD: "\u0414\u0438\u043D.",
  SCR: "\u20A8",
  SGD: "$",
  SBD: "$",
  SOS: "S",
  ZAR: "R",
  KRW: "\u20A9",
  LKR: "\u20A8",
  SEK: "kr",
  CHF: "CHF",
  SRD: "$",
  SYP: "\xA3",
  TWD: "NT$",
  THB: "\u0E3F",
  TTD: "TT$",
  TRY: "\u20A4",
  TRL: "\u20A4",
  TVD: "$",
  UAH: "\u20B4",
  GBP: "\xA3",
  USD: "$",
  UYU: "$U",
  UZS: "\u043B\u0432",
  VEF: "Bs",
  VND: "\u20AB",
  YER: "\uFDFC",
  ZWD: "Z$"
};
/**
 * Возвращает знак валюты по ISO коду.
 *
 * @param {String} currencyCode Код валюты.
 * @returns {String}
 */

function getCurrencySymbol(currencyCode) {
  return exports.CURRENCY_MAP[currencyCode] || currencyCode;
}

exports.getCurrencySymbol = getCurrencySymbol;
/**
 * Возвращает данные для форматирования валюты по ISO коду.
 *
 * @param {String} currencyCode Код валюты.
 * @returns {*}
 */

function getCurrencyMeta(currencyCode) {
  var symbol = getCurrencySymbol(currencyCode);

  switch (currencyCode) {
    case 'RUB':
      return {
        symbol: symbol,
        minorSplitter: ',',
        majorSplitter: ' ',
        template: 'V C'
      };

    case 'EUR':
      return {
        symbol: symbol,
        minorSplitter: '.',
        majorSplitter: ',',
        template: 'V C'
      };

    default:
      return {
        symbol: symbol,
        minorSplitter: '.',
        majorSplitter: ',',
        template: 'CV'
      };
  }
}

exports.getCurrencyMeta = getCurrencyMeta;