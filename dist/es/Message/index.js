"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var rc_notification_1 = __importDefault(require("rc-notification"));

var Icon = __importStar(require("../Icon"));

var Spinner_1 = __importDefault(require("../Spinner"));

var styled_1 = require("./styled");
/**
 * Глобальные сообщения.
 *
 * Показывает информационное сообщение сверху экрана.
 *
 * @param silent {Boolean} - Звук при появлении уведомления
 *
 * @draft
 */


var defaultDuration = 3;
var defaultTop;
var messageInstance;
var key = 1;
var prefixCls = 'ui-message';
var transitionName = 'move-up';

var getContainer = function getContainer() {
  return document.body;
};

var maxCount;

function getMessageInstance(callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }

  rc_notification_1.default.newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }

    messageInstance = instance;
    callback(instance);
  });
}

function notice(content) {
  var durationValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
  var type = arguments.length > 2 ? arguments[2] : undefined;
  var onCloseFn = arguments.length > 3 ? arguments[3] : undefined;
  var icon;
  var onClose = onCloseFn;
  var duration = durationValue;

  switch (type) {
    case 'info':
      icon = react_1.default.createElement(styled_1.StyledIcon, {
        as: Icon.Info,
        info: true
      });
      break;

    case 'success':
      icon = react_1.default.createElement(styled_1.StyledIcon, {
        as: Icon.Approved,
        success: true
      });
      break;

    case 'warning':
      icon = react_1.default.createElement(styled_1.StyledIcon, {
        as: Icon.Warning
      });
      break;

    case 'error':
      icon = react_1.default.createElement(styled_1.StyledIcon, {
        as: Icon.Flash
      });
      break;

    case 'loading':
      icon = react_1.default.createElement(styled_1.SpinnerWrapper, null, react_1.default.createElement(Spinner_1.default, null));
      break;

    default:
      icon = null;
  }

  if (typeof duration === 'function') {
    onClose = duration;
    duration = defaultDuration;
  } // eslint-disable-next-line no-plusplus


  var target = key++;
  getMessageInstance(function (instance) {
    instance.notice({
      key: target,
      duration: duration,
      style: {},
      content: react_1.default.createElement(styled_1.Notice, {
        type: type
      }, icon, react_1.default.createElement("span", null, content), react_1.default.createElement(styled_1.GlobalStyles, null)),
      onClose: onClose
    });
  });
  return function () {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };
}

exports.default = {
  info: function info(content, duration, onClose) {
    return notice(content, duration, 'info', onClose);
  },
  success: function success(content, duration, onClose) {
    return notice(content, duration, 'success', onClose);
  },
  error: function error(content, duration, onClose) {
    return notice(content, duration, 'error', onClose);
  },
  warning: function warning(content, duration, onClose) {
    return notice(content, duration, 'warning', onClose);
  },
  loading: function loading(content, duration, onClose) {
    return notice(content, duration, 'loading', onClose);
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};