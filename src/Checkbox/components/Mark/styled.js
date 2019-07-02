import styled, { css } from 'styled-components';
import { CheckMark } from '../../../Icon';
import { Color } from '../../../config';

function fill(props) {
    if (props.disabled) {
        return css`background-color: ${Color.Gray};`;
    }
    switch (props.color) {
        case 'green':
            return css`background-color: ${Color.Green};`;
        case 'deepBlue':
            return css`background-color: ${Color.DeepBlue};`;
        default:
            return css`background-color: ${Color.Blue};`;
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

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    border: ${props => (props.isChecked ? 0 : `1px solid ${Color.Pale}`)};
    background-color: ${props => (props.disabled ? Color.Zircon : Color.White)};
    border-radius: 2px;
    transition: border-color .12s linear, border-width .12s linear;
    
    ${size}
`;

export const CheckMarkWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    opacity: ${props => (props.isChecked ? 1 : 0)};
    transform: scale(${props => (props.isChecked ? 1 : 0)});
    transition: 
        opacity .6s cubic-bezier(0.23, 1, 0.32, 1),
        transform .6s cubic-bezier(0.23, 1, 0.32, 1);
    
    ${fill}
`;

export const CheckMarkIcon = styled(CheckMark)`
    position: absolute;
    top: 50%;
    left: 50%;
    fill: ${Color.White};
    
    ${iconSize}
`;
