import { createGlobalStyle, keyframes } from 'styled-components';
import { Color } from '../config';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const zoomIn = keyframes`
    0% {
        opacity: 0;
        transform: scale(0, 0);
    }
    100% {
        opacity: 1;
        transform: scale(1, 1);
    }
`;

const zoomOut = keyframes`
    0% {
        transform: scale(1, 1);
    }
    100% {
        opacity: 0;
        transform: scale(0, 0);
    }
`;

export default createGlobalStyle`
    .ui-modal {
        position: relative;
        width: 600px;
        margin: 30px auto;
        box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
        background: #fff;
        border-radius: 5px;
    }
    .ui-modal-mask {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: rgba(51, 51, 51, .6);
        height: 100%;
        z-index: 1050;
    }
    .ui-modal-mask-hidden {
        display: none;
    }
    .ui-modal-wrap {
        position: fixed;
        overflow: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1050;
        -webkit-overflow-scrolling: touch;
        outline: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ui-modal-close {
        position: absolute;
        right: 8px;
        top: 8px;
        width: 32px;
        height: 32px;
        padding: 8px;
        border: 0;
        border-radius: 2px;
        color: ${Color.Pale};
        background: transparent;
        outline: none;
        cursor: pointer;
        text-decoration: none;
        z-index: 1;
        &:hover, &:active {
            color: ${Color.Gray};
        }
        &:active {
            background: ${Color.Pale};
        }
    }
    .ui-modal-close-x {
        position: relative;
        display: block;
        width: 16px;
        height: 16px;
        &::before, &::after {
            content: '';
            position: absolute;
            display: block;
            top: 50%;
            left: 50%;
            width: 2px;
            height: 20px;
            transform-origin: 50% 50%;
            border-radius: 2px;
            background: currentColor;
        }
        &::before {
            transform: translate(-50%, -50%) rotate(45deg);
        }
        &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
    .ui-modal-header {
        padding: 32px 32px 0 32px;
    }
    .ui-modal-title {
        font: 600 24px "Open Sans", Helvetica, Arial, sans-serif;
        line-height: 32px;
    }
    .ui-modal-body {
        padding: 16px 32px 32px 32px;
        font: 400 13px "Open Sans", Helvetica, Arial, sans-serif;
        line-height: 20px;
    }
    .ui-modal-footer {
        padding: 0 32px 32px 32px;
        text-align: center;
        button + button {
            margin-left: 32px;
        }
    }
    .ui-modal-zoom {
        z-index: auto;
    }
    .ui-modal-zoom-enter, .ui-modal-zoom-appear {
        opacity: 0;
        animation-name: ${zoomIn};
        animation-duration: 0.15s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.08, 0.82, 0.17, 1);
        animation-play-state: paused;
    }
    .ui-modal-zoom-enter-active, .ui-modal-zoom-appear-active {
        animation-play-state: running;
    }
    .ui-modal-zoom-leave {
        animation-name: ${zoomOut};
        animation-duration: 0.15s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.6, 0.04, 0.98, 0.34);
        animation-play-state: paused;
    }
    .ui-modal-zoom-leave-active {
        animation-play-state: running;
    }
    .ui-modal-fade {
        z-index: auto;
    }
    .ui-modal-fade-enter, .ui-modal-fade-appear {
        opacity: 0;
        animation-name: ${fadeIn};
        animation-duration: 0.15s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
        animation-play-state: paused;
    }
    .ui-modal-fade-enter-active, .ui-modal-fade-appear {
        animation-play-state: running;
    }
    .ui-modal-fade-leave {
        animation-name: ${fadeOut};
        animation-duration: 0.15s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);
        animation-play-state: paused;
    }
    .ui-modal-fade-leave-active {
        animation-play-state: running;
    }
    .ui-modal-vertical-centered {
        text-align: center;
        &::before {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            width: 0;
        }
    }
    .ui-modal-vertical-centered .ui-modal {
        display: inline-block;
        vertical-align: middle;
        top: 0;
        text-align: left;
    }
    .ui-modal-extended-content .ui-modal-body, .ui-modal-extended-content .ui-modal-footer {
        padding: 0;
    }
`;
