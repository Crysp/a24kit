import { createGlobalStyle } from 'styled-components';
import { Color } from '../config';

export default createGlobalStyle`
    .tabs {
        font: 400 13px 'Open Sans', sans-serif;
        line-height: 1.5;
        color: ${Color.Coal};
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
        position: relative;
        overflow: hidden;
        zoom: 1;
    }

    .tabs-bar {
        border-bottom: 1px solid #e8e8e8;
        outline: none;
    }

    .tabs-nav {
        position: relative;
        box-sizing: border-box;
        display: flex;
        padding-left: 0;
        margin: 0;
        list-style: none;
        transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .tabs-nav-wrap {
        overflow: hidden;
        margin-bottom: -1px;
    }

    .tabs-nav-scroll {
        overflow: hidden;
        white-space: nowrap;
    }

    .tabs-nav-container {
        overflow: hidden;
        font-size: 14px;
        line-height: 1.5;
        box-sizing: border-box;
        position: relative;
        white-space: nowrap;
        margin-bottom: -1px;
        zoom: 1;
    }

    .tabs-nav-container-scrolling {
        padding-left: 32px;
        padding-right: 32px;
    }

    .tabs-nav > div {
        display: flex;
    }

    .tabs-tab {
        position: relative;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: 60px;
        padding: 0 20px;
        color: ${Color.Gray};
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        transition: color 0.3s cubic-bezier(0.645, 0.045, 9.355, 1);
    }

    .tabs-tab-active {
        color: ${Color.Coal};
    }

    .tabs-tab-prev {
        left: 0;
    }

    .tabs-tab-next {
        right: 0;
    }

    .tabs-tab-next,
    .tabs-tab-prev {
        position: absolute;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 0;
        height: 100%;
        border: 0;
        background-color: transparent;
        cursor: pointer;
        text-align: center;
        color: rgba(0, 0, 0, 0.45);
        transition:
            width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
            opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
            color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        opacity: 0;
        user-select: none;
        pointer-events: none;

        &:hover {
            color: ${Color.Blue};
        }
    }

    .tabs-tab-arrow-show {
        opacity: 1;
        width: 32px;
        height: 100%;
        pointer-events: auto;
    }

    .tabs-tab-btn-disabled {
        color: ${Color.Pale} !important;
        cursor: not-allowed;
    }

    .tabs-ink-bar {
        z-index: 1;
        position: absolute;
        left: 0;
        bottom: 1px;
        box-sizing: border-box;
        height: 3px;
        background-color: ${Color.Blue};
        transform-origin: 0 0;
    }

    .tabs-ink-bar-animated {
        transition:
            transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
            width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .tabs-content {
        width: 100%;
    }

    .tabs-content-animated {
        display: flex;
        flex-direction: row;
        will-change: margin-left;
        transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    .tabs-tabpane {
        flex-shrink: 0;
        width: 100%;
        transition: opacity 0.45s;
        opacity: 1;
    }

    .tabs-large .tabs-tab {
        font-size: 16px;
    }

    .tabs-no-animation .tabs-tabpane-inactive {
        display: none;
    }

    .tabs-prevIcon,
    .tabs-nextIcon {
        width: 16px;
        height: 16px;
    }
`;
