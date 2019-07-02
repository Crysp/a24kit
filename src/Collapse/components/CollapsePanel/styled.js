import styled, { createGlobalStyle } from 'styled-components';
import { ArrowDown } from '../../../Icon';
import { Color } from '../../../config';

export const Header = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

export const HeaderContent = styled.div`
    flex: 1;
`;

export const ArrowDownIcon = styled(ArrowDown)`
    width: 16px;
    height: 16px;
    margin: 2px 12px 0 0;
    fill: ${Color.Blue};
    transition: transform .15s cubic-bezier(.645,.045,.355,1);
`;

export const GlobalStyles = createGlobalStyle`
    .ui-collapse {
        position: relative;
    }
    .ui-collapse-item {
        position: relative;
        
        & + & {
            border-top: 1px solid ${Color.Pale};
        }
    }
    .ui-collapse-item-active .arrow {
        transform: rotate(-180deg);
    }
    .ui-collapse-header {
        padding: 12px 16px;
        color: ${Color.Coal};
        font: 400 13px "Open Sans", sans-serif;
        line-height: 20px;
        background: transparent;
        cursor: pointer;
        outline: none;
        transition: background-color .2s linear;
        &:hover {
            background-color: rgba(71, 134, 200, 0.1);
        }
    }
    .ui-collapse-content-inactive {
        display: none;
    }
    .ui-collapse-wrapper {
        overflow: hidden;
    }
    .ui-collapse-wrapper-active {
        transition:
                height .15s cubic-bezier(.645,.045,.355,1),
                opacity .15s cubic-bezier(.645,.045,.355,1) !important;
    }
    .ui-collapse-headless {
        display: none;
    }
`;
