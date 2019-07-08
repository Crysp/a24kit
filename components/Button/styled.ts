import styled, { css } from 'styled-components';
import { Color } from '../config';

function filled(color: string, activeColor: string) {
    return css`
        background-color: ${color};
        &:hover, &:active {
            color: ${Color.White};
            background-color: ${activeColor};
        }
    `;
}

function hollow(color: string, activeColor: string) {
    return css`
        color: ${color};
        border: 1px solid ${color};
        background-color: transparent;
        &:hover, &:active {
            color: ${activeColor};
            border-color: ${activeColor};
        }
    `;
}

function contrast(color: string, activeColor: string) {
    return css`
        color: ${color};
        background-color: ${Color.White};
        &:hover, &:active {
            color: ${activeColor};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        }
    `;
}

function fillInfo() {
    return css`
        padding-top: 11px;
        padding-bottom: 11px;
        color: ${Color.Blue};
        border: 1px solid ${Color.Pale};
        background-color: ${Color.White};
        font-weight: 400;
        &:hover, &:active {
            color: ${Color.DeepBlue};
        }
    `;
}

function fillHollow(props: { [key: string]: any }) {
    switch (props.color) {
        case 'red':
            return hollow(Color.Red, Color.DeepRed);
        case 'gold':
            return hollow(Color.Gold, Color.DeepGold);
        case 'green':
            return hollow(Color.Green, Color.DeepGreen);
        case 'blue':
            return hollow(Color.Blue, Color.DeepBlue);
        default:
            return hollow('#c6c6c6', Color.Gray);
    }
}

function fillContrast(props: { [key: string]: any }) {
    switch (props.color) {
        case 'red':
            return contrast(Color.Red, Color.DeepRed);
        case 'gold':
            return contrast(Color.Gold, Color.DeepGold);
        case 'green':
            return contrast(Color.Green, Color.DeepGreen);
        case 'blue':
            return contrast(Color.Blue, Color.DeepBlue);
        default:
            return contrast('#c6c6c6', Color.Gray);
    }
}

function fillDefault(props: { [key: string]: any }) {
    switch (props.color) {
        case 'red':
            return filled(Color.Red, Color.DeepRed);
        case 'gold':
            return filled(Color.Gold, Color.DeepGold);
        case 'green':
            return filled(Color.Green, Color.DeepGreen);
        case 'blue':
            return filled(Color.Blue, Color.DeepBlue);
        default:
            return filled('#c6c6c6', Color.Gray);
    }
}

function fill(props: { [key: string]: any }) {
    switch (true) {
        case props.hollow:
            return fillHollow(props);
        case props.contrast:
            return fillContrast(props);
        case props.info:
            return fillInfo();
        default:
            return fillDefault(props);
    }
}

interface ButtonProps {
    side: number | string
    secondary: boolean
}

export const StyledButton = styled.button<ButtonProps>`
    overflow: hidden;
    position: relative;
    padding: 12px ${props => props.side}px;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    text-transform: ${props => (props.secondary ? 'none' : 'uppercase')};
    color: #fff;
    background-color: ${Color.Pale};
    border: 0;
    border-radius: 2px;
    cursor: pointer;
    outline: none;
    transition:
        background-color .12s linear,
        color .12s linear,
        box-shadow .2s linear,
        border-color .12s linear;
        
    ${fill}
    
    &[disabled] {
        color: ${Color.Gray};
        background-color: ${Color.Pale};
        cursor: not-allowed;
        pointer-events: none;
    }
`;

interface ButtonTextProps {
    prependIcon: boolean
    appendIcon: boolean
}

export const ButtonText = styled.span<ButtonTextProps>`
    z-index: 200;
    position: relative;
    display: inline-block;
    padding: 0 2px;
    margin-left: ${props => (props.prependIcon ? 10 : 0)}px;
    margin-right: ${props => (props.appendIcon ? 10 : 0)}px;
`;

export const IconWrapper = styled.span`
    z-index: 200;
    position: relative;
    display: inline-block;
    top: -1px;
    width: 16px;
    height: 16px;
    line-height: 16px;
    vertical-align: middle;
    & > * {
        max-width: 16px;
        max-height: 16px;
    }
`;
