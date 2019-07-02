import styled, { css } from 'styled-components';
import { Color } from '../config';


function fieldSize(props) {
    if (props.large) {
        return css`
            font: 400 18px "Open Sans", sans-serif;
            padding: 7px 12px;
            line-height: 20px;
        `;
    }
    return css`
        font: 400 14px "Open Sans", sans-serif;
        padding: 11px ${props.iconAfter ? 40 : 12}px 11px ${props.iconBefore ? 40 : 12}px;
        line-height: 16px;
    `;
}

const wrapperBorderColor = (props) => {
    if (props.disabled) {
        return Color.Pale;
    }

    switch (props.status) {
        case 'error':
            return Color.Red;
        case 'success':
            return Color.Green;
        default:
            return props.filling
                ? Color.Blue
                : Color.Pale;
    }
};
const wrapperBackgroundColor = (props) => {
    if (props.disabled) {
        return Color.Silver;
    }

    switch (props.status) {
        case 'error':
            return Color.LightRed;
        case 'success':
            return Color.LightGreen;
        default:
            return Color.White;
    }
};

export const Field = styled.input`
    box-sizing: border-box;
    width: 100%;
    border: 0;
    border-radius: 2px;
    color: ${Color.Coal};
    background-color: transparent;
    outline: none;
    text-align: ${props => (props.centered ? 'center' : 'left')};
    
    ${fieldSize}
    
    &::-webkit-input-placeholder { color: ${Color.Gray} }
    &::-moz-placeholder { color: ${Color.Gray} }
    &:-ms-input-placeholder { color: ${Color.Gray} }
    &:-moz-placeholder { color: ${Color.Gray} }
    &[disabled] {
        color: ${Color.Gray};
    }
`;

export const IconWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: ${props => (props.iconBefore ? '12px' : 'auto')};
    right: ${props => (props.iconAfter ? '12px' : 'auto')};
    margin-top: -8px;
    width: 16px;
    height: 16px;
    color: ${Color.Gray};
`;

export const Wrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 2px;
    transition:
        box-shadow .25s ease-out,
        border-color .2s linear,
        background-color .2s linear,
        color .2s linear;
    border-style: solid;
    border-width: ${props => (props.boundless ? 0 : 1)}px;
    border-color: ${wrapperBorderColor};
    background-color: ${wrapperBackgroundColor};
    box-shadow: ${props => (props.focused && !props.boundless ? '0 2px 4px #e4edf7' : 'none')};
`;

export const Inner = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

export const FieldWrapper = styled.div`
    flex-grow: 1;
`;

export const Addon = styled.div`
    flex-shrink: 0;
    padding-left: ${props => (props.leftGutter ? 8 : 0)}px;
    padding-right: ${props => (props.rightGutter ? 8 : 0)}px;
`;
