"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var __1 = __importDefault(require(".."));

var Icon_1 = require("../../Icon");

var AvatarCard_1 = __importDefault(require("../../AvatarCard"));

describe('Верстка <Notification/>', function () {
  afterEach(function () {
    __1.default.destroy();
  });
  it('Дефолтная', function () {
    __1.default.open({
      message: 'Notification Title',
      duration: 0,
      key: '1'
    });

    expect(document.querySelector('.ui-notification-notice')).toMatchSnapshot();
  });
  it('С иконкой', function () {
    __1.default.open({
      icon: react_1.default.createElement(Icon_1.Mail, null),
      message: 'Notification Title',
      duration: 0,
      key: '1'
    });

    expect(document.querySelector('.ui-notification-notice')).toMatchSnapshot();
  });
  it('С аватаром', function () {
    __1.default.open({
      avatar: react_1.default.createElement(AvatarCard_1.default, {
        online: true
      }),
      message: 'Notification Title',
      duration: 0,
      key: '1'
    });

    expect(document.querySelector('.ui-notification-notice')).toMatchSnapshot();
  });
});