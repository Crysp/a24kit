import styled, { css } from 'styled-components';
import { ArrowDown } from '../Icon';
import Input from '../Input';
import { Color } from '../config';

export const Wrapper = styled.div`
    position: relative;
    pointer-events: ${props => (props.disabled ? 'none' : 'inherit')};
    &:focus {
        outline: none;
    }
`;

export const Field = styled.div.attrs((props) => {
    let borderColor = Color.Pale;
    let backgroundColor = Color.White;
    if (props.opened) {
        borderColor = Color.Blue;
    }
    if (props.disabled) {
        backgroundColor = Color.Silver;
    }
    return {
        borderColor,
        backgroundColor,
    };
})`
    position: relative;
    box-sizing: border-box;
    padding: 11px 40px 11px 12px;
    border: 1px solid ${props => props.borderColor};
    background-color: ${props => props.backgroundColor};
    border-radius: 2px;
    line-height: 16px;
    cursor: pointer;
    transition: border-color .12s linear, box-shadow .12s linear;
    &:hover {
        border-color: ${Color.Blue};
    }
    ${Wrapper}:focus & {
        box-shadow: 0 2px 4px #e4edf7;
    }
`;

export const Text = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    white-space: nowrap;
    font: 400 14px "Open Sans", Helvetica, Arial, sans-serif;
    line-height: 16px;
    color: ${props => (props.disabled ? Color.Gray : Color.Coal)};
`;

export const Arrow = styled(ArrowDown)`
    position: absolute;
    right: 12px;
    top: 50%;
    margin-top: -8px;
    fill: ${props => (props.disabled ? Color.Gray : Color.Blue)};
    transform: rotate(${props => (props.opened ? 180 : 0)}deg);
    transition: transform .45s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const OptionList = styled.div.attrs((props) => {
    let animationState = css`
        opacity: 0;
        pointer-events: none;
        transform: translateY(-14px) scale(.8);
    `;
    if (props.opened) {
        animationState = css`
            opacity: 1;
            transform: translateY(0) scale(1);
            pointer-events: inherit;
        `;
    }
    return { animationState };
})`
    overflow: auto;
    z-index: 1000;
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    max-height: ${props => props.maxHeight}px;
    ${props => props.animationState};
    transform-origin: center top 0;
    border: 1px solid ${Color.Pale};
    border-radius: 2px;
    background-color: ${Color.White};
    box-shadow: 0 2px 4px #e4edf7;
    transition:
        opacity .45s cubic-bezier(0.23, 1, 0.32, 1),
        transform .45s cubic-bezier(0.23, 1, 0.32, 1);
`;

export const Search = styled(Input)`
    width: 100%;
    border-bottom: 1px solid ${Color.Pale};
`;

export const Result = styled.div`
    padding: 6px 12px;
    font: 400 14px "Open Sans", Helvetica, Arial, sans-serif;
    line-height: 20px;
    cursor: default;
    color: ${Color.Gray};
`;
