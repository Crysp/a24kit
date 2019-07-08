import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import { Color } from '../config';

const antMoveUpIn = keyframes`
    0% {
        transform-origin: 0 0;
        transform: translateY(-100%);
        opacity: 0
    }
    to {
        transform-origin: 0 0;
        transform: translateY(0);
        opacity: 1
    }
`;

const antMoveUpOut = keyframes`
    0% {
        transform-origin: 0 0;
        transform: translateY(0);
        opacity: 1
    }
    to {
        transform-origin: 0 0;
        transform: translateY(-100%);
        opacity: 0
    }
`;

export const GlobalStyles = createGlobalStyle`
    .ui-message {
        width: 100%;
        position: fixed;
        z-index: 99999;
        top: 16px;
        left: 0;
        pointer-events: none;
    }
    .ui-message-notice {
        padding: 8px;
        text-align: center;
        &:first-child {
            margin-top: -8px;
        }
    }
    .ui-message-notice-content {
        display: inline-block;
        pointer-events: all;
    }
    .ui-message-notice.move-up-appear,
    .ui-message-notice.move-up-enter,
    .ui-message-notice.move-up-leave {
        animation-duration: .2s;
        animation-fill-mode: both;
        animation-play-state: paused;
    }
    .ui-message-notice.move-up-appear, .ui-message-notice.move-up-enter {
        opacity: 0;
        animation-timing-function: cubic-bezier(.08,.82,.17,1);
    }
    .ui-message-notice.move-up-appear-active, .ui-message-notice.move-up-enter-active {
        animation-name: ${antMoveUpIn};
        animation-play-state: running;
    }
    .ui-message-notice.move-up-leave {
        animation-timing-function: cubic-bezier(.6,.04,.98,.34);
    }
    .ui-message-notice.move-up-leave-active {
        animation-name: ${antMoveUpOut};
        animation-play-state: running;
        pointer-events: none;
    }
`;

const getNoticeStyles = (props) => {
    let backgroundColor = Color.White;
    let color = Color.Coal;
    let linkCSS = css``;
    if (props.type === 'warning') {
        backgroundColor = Color.Gold;
        color = Color.White;
    } else if (props.type === 'error') {
        backgroundColor = Color.Red;
        color = Color.White;
    }
    if (['warning', 'error'].indexOf(props.type) > -1) {
        linkCSS = css`
            a {
                color: ${Color.White};
                text-decoration: underline;
                &:hover {
                    opacity: .8;
                }
            }
        `;
    }
    return css`
        background-color: ${backgroundColor};
        color: ${color};
        ${linkCSS}
    `;
};

interface NoticeProps {
    type: string
}

export const Notice = styled.div<NoticeProps>`
    display: flex;
    align-items: center;
    padding: 10px 16px;
    border-radius: 2px;
    box-shadow: 0 4px 12px rgba(0,0,0,.15);
    font: 400 13px 'Open Sans', Helvetica, Arial, sans-serif;
    pointer-events: all;
    ${getNoticeStyles}
`;

export const SpinnerWrapper = styled.div`
    display: inline-block;
    margin-right: 16px;
`;

interface StyledIconProps {
    info?: boolean
    success?: boolean
}

const getStyledIconFill = (props) => {
    let fill = Color.White;
    if (props.info) {
        fill = Color.Blue;
    } else if (props.success) {
        fill = Color.Green;
    }
    return fill;
};


export const StyledIcon = styled.div<StyledIconProps>`
    width: 16px;
    height: 16px;
    margin-right: 8px;
    fill: ${getStyledIconFill};
`;
