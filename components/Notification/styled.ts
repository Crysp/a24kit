import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Color } from '../config';

const notificationFadeIn = keyframes`
    0% {
        opacity: 0;
        left: 384px
    }

    to {
        left: 0;
        opacity: 1
    }
`;

const notificationLeftFadeIn = keyframes`
    0% {
        opacity: 0;
        right: 384px
    }

    to {
        right: 0;
        opacity: 1
    }
`;

const notificationFadeOut = keyframes`
    0% {
        opacity: 1;
        margin-bottom: 16px;
        padding-top: 16px;
        padding-bottom: 16px;
        max-height: 150px
    }

    to {
        opacity: 0;
        margin-bottom: 0;
        padding-top: 0;
        padding-bottom: 0;
        max-height: 0
    }
`;

export const GlobalStyles = createGlobalStyle`
    .ui-notification {
        z-index: 1010;
        position: fixed;
        box-sizing: border-box;
        width: 384px;
        max-width: calc(100vw - 32px);
        padding: 0;
        font: 400 14px "Open Sans", Helvetica, Arial, sans-serif;
        line-height: 20px;
        color: #3c4858;
    }
    .ui-notification-notice {
        position: relative;
        margin-bottom: 16px;
        padding-left: 4px;
        border-radius: 4px;
        border-left: 4px solid ${Color.Green};
        background: ${Color.White};
        box-shadow: 0 2px 24px rgba(0, 0, 0, 0.06);
        opacity: 0.98;
    }
    .ui-notification-notice-close {
        box-sizing: border-box;
        position: absolute;
        right: 8px;
        top: 8px;
        width: 32px;
        height: 32px;
        padding: 8px;
        border: 0;
        border-radius: 2px;
        color: #d5d5d5;
        background: transparent;
        outline: none;
        cursor: pointer;
        text-decoration: none;
        transition: background-color .12s linear;
        &:hover, &:active {
            color: #979797;
            background-color: #fff;
        }
    }
    .ui-notification-notice-close-x {
        position: relative;
        display: block;
        width: 10px;
        height: 10px;
        &::before, &::after {
            content: '';
            position: absolute;
            display: block;
            top: 50%;
            left: 50%;
            width: 2px;
            height: 16px;
            transform-origin: 50% 50%;
            border-radius: 2px;
            background: currentColor;
            transition: background-color .12s linear;
        }
        &::before {
            transform: translate(-50%, -50%) rotate(45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
    .ui-notification-fade-effect {
        animation-duration: .24s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(.645,.045,.355,1)
    }
    .ui-notification-fade-appear, .ui-notification-fade-enter {
        opacity: 0;
        animation-play-state: paused
    }
    .ui-notification-fade-appear, .ui-notification-fade-enter, .ui-notification-notice-fade-leave {
        animation-duration: .24s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(.645,.045,.355,1);
    }
    .ui-notification-fade-appear.ui-notification-fade-appear-active {
        animation-name: ${notificationFadeIn};
        animation-play-state: running;
    }
    .ui-notification-fade-enter.ui-notification-fade-enter-active {
        animation-name: ${notificationFadeIn};
        animation-play-state: running;
    }
    .ui-notification-fade-leave {
        animation-duration: .2s;
        animation-play-state: paused;
    }
    .ui-notification-fade-leave.ui-notification-fade-leave-active {
        animation-name: ${notificationFadeOut};
        animation-play-state: running
    }
    .ui-notification-topLeft, .ui-notification-bottomLeft {
        margin: 0 0 0 24px;
    }
    .ui-notification-topLeft .ui-notification-fade-appear-active,
    .ui-notification-topLeft .ui-notification-fade-enter-active,
    .ui-notification-bottomLeft .ui-notification-fade-appear-active,
    .ui-notification-bottomLeft .ui-notification-fade-enter-active {
        animation-name: ${notificationLeftFadeIn};
    }
    .ui-notification-topRight, .ui-notification-bottomRight {
        margin: 0 24px 0 0;
    }
`;

const getWrapperPadding = (props) => {
    let left = 40;
    let right = 40;
    if (props.withIcon) {
        left = 64;
    }
    if (props.withAvatar) {
        left = 64;
        right = 60;
    }
    return `24px ${right}px 24px ${left}px`;
};

interface WrapperProps {
    withIcon?: boolean
    withAvatar?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    padding: ${getWrapperPadding};
`;
export const IconWrapper = styled.div`
    position: absolute;
    left: 20px;
    top: 24px;
    width: 20px;
    height: 20px;
`;
export const AvatarWrapper = styled.div`
    position: absolute;
    left: 20px;
    top: 26px;
    width: 40px;
    height: 40px;
`;

export const Message = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    margin-bottom: 4px;
    font-weight: 600;
`;

export const Time = styled.span`
    opacity: 0.5;
    color: #3c4858;
    font-size: 12px;
    margin-left: 10px;
    font-weight: 400;
`;

export const Description = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 4px;
    max-width: 100%;
    max-height: 4.2em;
    line-height: 1.4em;
    font-weight: 400;
`;

export const More = styled.div`
    color: ${Color.Blue};
    width: auto;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    &:hover, &:active {
        color: ${Color.DeepBlue};
    }
`;

export const Reply = styled.div`
    position: absolute;
    right: 30px;
    bottom: 24px;
    color: ${Color.Green};
    font-size: 14px;
    font-weight: 600;
    text-decoration: underline;
    cursor: pointer;
    &:hover, &:active {
        color: ${Color.DeepGreen};
    }
`;
