import styled, { css } from 'styled-components';
import { CheckMark } from '../../../Icon';
import { Color } from '../../../config';

function fill(props) {
    if (props.disabled) {
        return `background-color: ${Color.Gray};`;
    }
    switch (props.color) {
        case 'green':
            return `background-color: ${Color.Green};`;
        case 'deepBlue':
            return `background-color: ${Color.DeepBlue};`;
        default:
            return `background-color: ${Color.Blue};`;
    }
}

function largeWrapper() {
    return css`
        top: auto;
        width: 20px;
        height: 20px;
    `;
}

function defaultWrapper() {
    return css`
        top: 2px;
        width: 16px;
        height: 16px;
    `;
}

function size(props) {
    switch (true) {
        case props.large:
            return largeWrapper();
        default:
            return defaultWrapper();
    }
}

function largeIcon() {
    return css`
        width: 10px;
        height: 10px;
        margin: -5px 0 0 -5px;
    `;
}

function defaultIcon() {
    return css`
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
    `;
}

function iconSize(props) {
    switch (true) {
        case props.large:
            return largeIcon();
        default:
            return defaultIcon();
    }
}

interface WrapperProps {
    isChecked: boolean
    disabled: boolean
    large: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    border: ${props => (props.isChecked ? 0 : `1px solid ${Color.Pale}`)};
    background-color: ${props => (props.disabled ? Color.Zircon : Color.White)};
    border-radius: 2px;
    transition: border-color 0.12s linear, border-width 0.12s linear;
    ${size}
`;

interface CheckMarkWrapperProps {
    isChecked: boolean
    disabled: boolean
    color: string
}

export const CheckMarkWrapper = styled.div<CheckMarkWrapperProps>`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    opacity: ${props => (props.isChecked ? 1 : 0)};
    transform: scale(${props => (props.isChecked ? 1 : 0)});
    transition:
        opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1),
        transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    ${fill}
`;

interface CheckMarkIconProps {
    large: boolean
}

export const CheckMarkIcon = styled(CheckMark)<CheckMarkIconProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    fill: ${Color.White};
    ${iconSize}
`;
