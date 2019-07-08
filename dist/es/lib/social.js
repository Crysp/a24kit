"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function getShareBaseUrl(type) {
  switch (type) {
    case 'fb':
      return 'https://www.facebook.com/sharer/sharer.php?u';

    case 'tw':
      return 'https://twitter.com/share?url';

    case 'wa':
      return 'https://api.whatsapp.com/send?text';

    case 'gp':
      return 'https://plus.google.com/share?url';

    case 'tg':
      return 'https://telegram.me/share/?url';

    case 'vk':
      return 'https://vk.com/share.php?url';

    case 'ok':
      return 'https://connect.ok.ru/offer?url';

    default:
      return '';
  }
}

exports.getShareBaseUrl = getShareBaseUrl;

function getShareLink(type, ref) {
  return "".concat(getShareBaseUrl(type), "=").concat(encodeURIComponent(ref));
}

exports.getShareLink = getShareLink;