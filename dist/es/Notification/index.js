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

var rc_notification_1 = __importDefault(require("rc-notification"));

var styled_1 = require("./styled");
/**
 * Глобальные уведомления.
 *
 * Показывает уведомление в углу экрана.
 *
 * @param placement {String} - Угол экрана в котором появляется уведомление
 *                             ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']
 * @param silent {Boolean} - Звук при появлении уведомления
 *
 * @draft
 */


var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPlacement = 'topRight';
var defaultGetContainer;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer;

  if (typeof duration !== 'undefined') {
    defaultDuration = duration;
  }

  if (typeof placement !== 'undefined') {
    defaultPlacement = placement;
  }

  if (typeof bottom !== 'undefined') {
    defaultBottom = bottom;
  }

  if (typeof top !== 'undefined') {
    defaultTop = top;
  }

  if (typeof getContainer !== 'undefined') {
    defaultGetContainer = getContainer;
  }
}

function getPlacementStyle(placement) {
  var style;

  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top: defaultTop,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: 0,
        top: defaultTop,
        bottom: 'auto'
      };
      break;

    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: defaultBottom
      };
      break;

    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: defaultBottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(prefixCls, placement, callback) {
  var cacheKey = "".concat(prefixCls, "-").concat(placement);

  if (notificationInstance[cacheKey]) {
    callback(notificationInstance[cacheKey]);
    return;
  }

  rc_notification_1.default.newInstance({
    prefixCls: prefixCls,
    className: "".concat(prefixCls, "-").concat(placement),
    style: getPlacementStyle(placement),
    getContainer: defaultGetContainer
  }, function (notification) {
    notificationInstance[cacheKey] = notification;
    callback(notification);
  });
}

function notice(args) {
  var outerPrefixCls = args.prefixCls || 'ui-notification';
  var duration = typeof args.duration === 'undefined' ? defaultDuration : args.duration;
  var silent = args.silent || false;
  var moreFn = typeof args.moreFn === 'function' ? args.moreFn : function () {};
  var replyFn = typeof args.replayFn === 'function' ? args.replayFn : function () {};
  getNotificationInstance(outerPrefixCls, args.placement || defaultPlacement, function (notification) {
    notification.notice({
      content: react_1.default.createElement(styled_1.Wrapper, {
        withIcon: 'icon' in args,
        withAvatar: 'avatar' in args,
        onClick: args.onClick
      }, react_1.default.createElement(styled_1.IconWrapper, null, args.icon), react_1.default.createElement(styled_1.AvatarWrapper, null, args.avatar), react_1.default.createElement(styled_1.Message, null, args.message, react_1.default.createElement(styled_1.Time, null, args.time)), react_1.default.createElement(styled_1.Description, null, args.description), react_1.default.createElement(styled_1.More, {
        onClick: moreFn
      }, args.more), react_1.default.createElement(styled_1.Reply, {
        onClick: replyFn
      }, args.reply), !silent && // eslint-disable-next-line jsx-a11y/media-has-caption
      react_1.default.createElement("audio", {
        autoPlay: true
      }, react_1.default.createElement("source", {
        src: "/assets/audio/positive_mid.ogg",
        type: "audio/ogg"
      }), react_1.default.createElement("source", {
        src: "/assets/audio/positive_mid.mp3",
        type: "audio/mp3"
      })), react_1.default.createElement(styled_1.GlobalStyles, null)),
      duration: duration,
      closable: true,
      onClose: args.onClose,
      key: args.key,
      style: args.style || {},
      className: args.className
    });
  });
}

var api = {
  open: notice,
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return notificationInstance[cacheKey].removeNotice(key);
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      notificationInstance[cacheKey].destroy();
      delete notificationInstance[cacheKey];
    });
  }
};
exports.default = api;