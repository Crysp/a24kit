import * as React from 'react';
import Notification from 'rc-notification';
import {
    GlobalStyles,
    Wrapper,
    IconWrapper,
    AvatarWrapper,
    Message,
    Time,
    Description,
    More,
    Reply,
} from './styled';

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


const notificationInstance = {};
let defaultDuration = 4.5;
let defaultTop = 24;
let defaultBottom = 24;
let defaultPlacement = 'topRight';
let defaultGetContainer;


function setNotificationConfig(options) {
    const {
        duration,
        placement,
        bottom,
        top,
        getContainer,
    } = options;
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
    let style;
    switch (placement) {
        case 'topLeft':
            style = {
                left: 0,
                top: defaultTop,
                bottom: 'auto',
            };
            break;
        case 'topRight':
            style = {
                right: 0,
                top: defaultTop,
                bottom: 'auto',
            };
            break;
        case 'bottomLeft':
            style = {
                left: 0,
                top: 'auto',
                bottom: defaultBottom,
            };
            break;
        default:
            style = {
                right: 0,
                top: 'auto',
                bottom: defaultBottom,
            };
            break;
    }
    return style;
}

function getNotificationInstance(prefixCls, placement, callback) {
    const cacheKey = `${prefixCls}-${placement}`;
    if (notificationInstance[cacheKey]) {
        callback(notificationInstance[cacheKey]);
        return;
    }
    Notification.newInstance({
        prefixCls,
        className: `${prefixCls}-${placement}`,
        style: getPlacementStyle(placement),
        getContainer: defaultGetContainer,
    }, (notification) => {
        notificationInstance[cacheKey] = notification;
        callback(notification);
    });
}

function notice(args) {
    const outerPrefixCls = args.prefixCls || 'ui-notification';
    const duration = typeof args.duration === 'undefined' ? defaultDuration : args.duration;
    const silent = args.silent || false;
    const moreFn = typeof args.moreFn === 'function' ? args.moreFn : () => { };
    const replyFn = typeof args.replayFn === 'function' ? args.replayFn : () => { };

    getNotificationInstance(outerPrefixCls, args.placement || defaultPlacement, (notification) => {
        notification.notice({
            content: (
                <Wrapper
                    withIcon={'icon' in args}
                    withAvatar={'avatar' in args}
                    onClick={args.onClick}
                >
                    <IconWrapper>{args.icon}</IconWrapper>
                    <AvatarWrapper>{args.avatar}</AvatarWrapper>
                    <Message>
                        {args.message}
                        <Time>{args.time}</Time>
                    </Message>
                    <Description>{args.description}</Description>
                    <More onClick={moreFn}>{args.more}</More>
                    <Reply onClick={replyFn}>{args.reply}</Reply>
                    {!silent && (
                        // eslint-disable-next-line jsx-a11y/media-has-caption
                        <audio autoPlay>
                            <source src="/assets/audio/positive_mid.ogg" type="audio/ogg" />
                            <source src="/assets/audio/positive_mid.mp3" type="audio/mp3" />
                        </audio>
                    )}
                    <GlobalStyles />
                </Wrapper>
            ),
            duration,

            closable: true,
            onClose: args.onClose,
            key: args.key,
            style: args.style || {},
            className: args.className,
        });
    });
}
const api = {
    open: notice,
    close(key) {
        Object.keys(notificationInstance)
            .forEach(cacheKey => notificationInstance[cacheKey].removeNotice(key));
    },
    config: setNotificationConfig,
    destroy() {
        Object.keys(notificationInstance).forEach((cacheKey) => {
            notificationInstance[cacheKey].destroy();
            delete notificationInstance[cacheKey];
        });
    },
};
export default api;
