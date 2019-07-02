import React from 'react';
import Notification from 'rc-notification';
import * as Icon from '../Icon';
import Spinner from '../Spinner';
import {
    GlobalStyles,
    Notice,
    SpinnerWrapper,
    StyledIcon,
} from './styled';

/**
 * Глобальные сообщения.
 *
 * Показывает информационное сообщение сверху экрана.
 *
 * @param silent {Boolean} - Звук при появлении уведомления
 *
 * @draft
 */

const defaultDuration = 3;
let defaultTop;
let messageInstance;
let key = 1;
const prefixCls = 'ui-message';
const transitionName = 'move-up';
const getContainer = () => document.body;
let maxCount;

function getMessageInstance(callback) {
    if (messageInstance) {
        callback(messageInstance);
        return;
    }
    Notification.newInstance({
        prefixCls,
        transitionName,
        style: { top: defaultTop },
        getContainer,
        maxCount,
    }, (instance) => {
        if (messageInstance) {
            callback(messageInstance);
            return;
        }
        messageInstance = instance;
        callback(instance);
    });
}

function notice(
    content,
    durationValue = defaultDuration,
    type,
    onCloseFn,
) {
    let icon;
    let onClose = onCloseFn;
    let duration = durationValue;
    switch (type) {
        case 'info':
            icon = <StyledIcon as={Icon.Info} info />;
            break;
        case 'success':
            icon = <StyledIcon as={Icon.Approved} success />;
            break;
        case 'warning':
            icon = <StyledIcon as={Icon.Warning} />;
            break;
        case 'error':
            icon = <StyledIcon as={Icon.Flash} />;
            break;
        case 'loading':
            icon = <SpinnerWrapper><Spinner /></SpinnerWrapper>;
            break;
        default:
            icon = null;
    }
    if (typeof duration === 'function') {
        onClose = duration;
        duration = defaultDuration;
    }

    // eslint-disable-next-line no-plusplus
    const target = key++;
    getMessageInstance((instance) => {
        instance.notice({
            key: target,
            duration,
            style: {},
            content: (
                <Notice type={type}>
                    {icon}
                    <span>{content}</span>
                    <GlobalStyles />
                </Notice>
            ),
            onClose,
        });
    });
    return () => {
        if (messageInstance) {
            messageInstance.removeNotice(target);
        }
    };
}
export default {
    info(content, duration, onClose) {
        return notice(content, duration, 'info', onClose);
    },
    success(content, duration, onClose) {
        return notice(content, duration, 'success', onClose);
    },
    error(content, duration, onClose) {
        return notice(content, duration, 'error', onClose);
    },
    warning(content, duration, onClose) {
        return notice(content, duration, 'warning', onClose);
    },
    loading(content, duration, onClose) {
        return notice(content, duration, 'loading', onClose);
    },
    destroy() {
        if (messageInstance) {
            messageInstance.destroy();
            messageInstance = null;
        }
    },
};
