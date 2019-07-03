import { createGlobalStyle, keyframes, css } from 'styled-components';
import { Color } from '../config';

const zoomInTop = keyframes`
    0% {
        opacity: 0;
        transform-origin: 50% 50%;
        transform: translateY(-10px);
    }
    100% {
        opacity: 1;
        transform-origin: 50% 50%;
        transform: translateY(0);
    }
`;

const zoomOutTop = keyframes`
    0% {
        opacity: 1;
        transform-origin: 50% 50%;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform-origin: 50% 50%;
        transform: translateY(-10px);
    }
`;

const zoomInBottom = keyframes`
    0% {
        opacity: 0;
        transform-origin: 50% 50%;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform-origin: 50% 50%;
        transform: translateY(0);
    }
`;

const zoomOutBottom = keyframes`
    0% {
        opacity: 1;
        transform-origin: 50% 50%;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform-origin: 50% 50%;
        transform: translateY(10px);
    }
`;

const zoomInLeft = keyframes`
    0% {
        opacity: 0;
        transform-origin: 50% 50%;
        transform: translateX(-10px);
    }
    100% {
        opacity: 1;
        transform-origin: 50% 50%;
        transform: translateY(0);
    }
`;

const zoomOutLeft = keyframes`
    0% {
        opacity: 1;
        transform-origin: 50% 50%;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform-origin: 50% 50%;
        transform: translateX(-10px);
    }
`;

const zoomInRight = keyframes`
    0% {
        opacity: 0;
        transform-origin: 50% 50%;
        transform: translateX(10px);
    }
    100% {
        opacity: 1;
        transform-origin: 50% 50%;
        transform: translateY(0);
    }
`;

const zoomOutRight = keyframes`
    0% {
        opacity: 1;
        transform-origin: 50% 50%;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform-origin: 50% 50%;
        transform: translateX(10px);
    }
`;

function animationMixin(animateIn, animateOut) {
    return css`
        &.ui-popover-animation-enter {
            animation-name: ${animateIn};
            &.ui-popover-animation-enter-active {
                animation-name: ${animateIn};
            }
        }
        &.ui-popover-animation-appear {
            animation-name: ${animateIn};
            &.ui-popover-animation-appear-active {
                animation-name: ${animateIn};
            }
        }
        &.ui-popover-animation-leave {
            animation-name: ${animateOut};
            &.ui-popover-animation-leave-active {
                animation-name: ${animateOut};
            }
        }
    `;
}

function arrowBase(color) {
    return css`
        position: absolute;
        display: block;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
        background: ${color};
    `;
}

export default createGlobalStyle`
    .ui-popover {
        position: absolute;
        z-index: 1070;
        display: block;
        visibility: visible;
        font-size: 12px;
        line-height: 1.5;
        opacity: 1;
    }
    .ui-popover-arrow {
        z-index: 1;
    }
    .ui-popover-inner {
        box-sizing: border-box;
        padding: 7px 12px;
        min-height: 34px;
        font: 400 13px "Open Sans", sans-serif;
        text-align: left;
        text-decoration: none;
        border-radius: 2px;
        text-transform: none;
        line-height: 20px;
        &::before {
            content: '';
        }
    }
    .ui-popover-theme-white .ui-popover-arrow {
        ${arrowBase(Color.White)}
    }
    .ui-popover-theme-white .ui-popover-inner {
        background: ${Color.White};
        color: ${Color.Coal};
    }
    .ui-popover-theme-red .ui-popover-arrow {
        ${arrowBase(Color.Red)}
    }
    .ui-popover-theme-red .ui-popover-inner {
        background: ${Color.Red};
        color: ${Color.White};
    }
    .ui-popover-theme-blue .ui-popover-arrow {
        ${arrowBase(Color.Red)}
    }
    .ui-popover-theme-blue .ui-popover-inner {
        background: ${Color.Blue};
        color: ${Color.White};
    }
    .ui-popover-raised .ui-popover-inner {
        box-shadow: 0 2px 8px rgba(51, 51, 51, 0.3);
    }
    .ui-popover-hidden {
        display: none;
    }
    .ui-popover-placement-top,
    .ui-popover-placement-topLeft,
    .ui-popover-placement-topRight {
        padding: 5px 0 9px 0;
        ${animationMixin(zoomInTop, zoomOutTop)}
    }
    .ui-popover-placement-top .ui-popover-arrow {
        left: 50%;
        bottom: 4px;
        margin-left: -5px;
    }
    .ui-popover-placement-topLeft .ui-popover-arrow {
        left: 15%;
        bottom: 4px;
        margin-left: -5px;
    }
    .ui-popover-placement-topRight .ui-popover-arrow {
        right: 15%;
        bottom: 4px;
        margin-left: -5px;
    }
    .ui-popover-placement-right,
    .ui-popover-placement-rightTop,
    .ui-popover-placement-rightBottom {
        padding: 0 5px 0 9px;
        ${animationMixin(zoomInRight, zoomOutRight)}
    }
    .ui-popover-placement-right .ui-popover-arrow {
        top: 50%;
        left: 4px;
        margin-top: -5px;
    }
    .ui-popover-placement-rightTop .ui-popover-arrow {
        top: 15%;
        left: 4px;
        margin-top: 0;
    }
    .ui-popover-placement-rightBottom .ui-popover-arrow {
        bottom: 15%;
        left: 4px;
        margin-top: -5px;
    }
    .ui-popover-placement-bottom,
    .ui-popover-placement-bottomLeft,
    .ui-popover-placement-bottomRight {
        padding: 9px 0 5px 0;
        ${animationMixin(zoomInBottom, zoomOutBottom)}
    }
    .ui-popover-placement-bottom .ui-popover-arrow {
        left: 50%;
        top: 4px;
        margin-left: -5px;
    }
    .ui-popover-placement-bottomLeft .ui-popover-arrow {
        left: 15%;
        top: 4px;
        margin-left: -5px;
    }
    .ui-popover-placement-bottomRight .ui-popover-arrow {
        right: 15%;
        top: 4px;
        margin-left: -5px;
    }
    .ui-popover-placement-left,
    .ui-popover-placement-leftTop,
    .ui-popover-placement-leftBottom {
        padding: 0 9px 0 5px;
        ${animationMixin(zoomInLeft, zoomOutLeft)}
    }
    .ui-popover-placement-left .ui-popover-arrow {
        top: 50%;
        right: 4px;
        margin-top: -5px;
    }
    .ui-popover-placement-leftTop .ui-popover-arrow {
        top: 15%;
        right: 4px;
        margin-top: 0;
    }
    .ui-popover-placement-leftBottom .ui-popover-arrow {
        bottom: 15%;
        right: 4px;
        margin-top: -5px;
    }
    .ui-popover.ui-popover-animation-enter,
    .ui-popover.ui-popover-animation-leave {
        display: block;
    }
    .ui-popover-animation-enter,
    .ui-popover-animation-appear,
    .ui-popover-animation-leave {
        opacity: 0;
        animation-duration: 0.3s;
        animation-fill-mode: both;
        animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
        animation-play-state: paused;
    }
    .ui-popover-animation-enter.ui-popover-animation-enter-active,
    .ui-popover-animation-appear.ui-popover-animation-appear-active,
    .ui-popover-animation-leave.ui-popover-animation-leave-active {
        animation-play-state: running;
    }
`;
