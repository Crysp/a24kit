import styled, { css } from 'styled-components';
import { Color } from '../config';

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    top: ${props => (props.large ? 'auto' : '2px')};
    width: ${props => (props.large ? 20 : 16)}px;
    height: ${props => (props.large ? 20 : 16)}px;
`;

export const EmptyCircle = styled.div.attrs((props) => {
    let backgroundColor = Color.White;
    let borderColor = Color.Pale;
    let animationState = css`
        opacity: 1;
        transform: scale(1);
    `;
    if (props.disabled) {
        backgroundColor = Color.Zircon;
        borderColor = Color.Pale;
    } else if (props.color === 'blue' && props.highlighted) {
        borderColor = Color.Blue;
    } else if (props.color === 'green' && props.highlighted) {
        borderColor = Color.Green;
    }
    if (props.checked) {
        animationState = css`
            opacity: 0;
            transform: scale(0);
        `;
    }
    return {
        backgroundColor,
        borderColor,
        animationState,
    };
})`
    z-index: 100;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid ${props => props.borderColor};
    background-color: ${props => props.backgroundColor};
    transition:
        opacity .6s cubic-bezier(0.23, 1, 0.32, 1),
        transform .6s cubic-bezier(0.23, 1, 0.32, 1),
        border-color .12s linear;
    ${props => props.animationState}
`;

export const Circle = styled.div.attrs((props) => {
    let backgroundColor = Color.White;
    let circleColor = Color.Blue;
    let borderColor = Color.Pale;
    let animationState = css`
        opacity: 0;
        transform: scale(0);
    `;
    let circleSize = css`
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
    `;
    if (props.disabled) {
        backgroundColor = Color.Zircon;
        circleColor = Color.Gray;
        borderColor = Color.Pale;
    } else if (props.color === 'blue' && props.highlighted) {
        borderColor = Color.Blue;
    } else if (props.color === 'green') {
        circleColor = Color.Green;
        if (props.highlighted) {
            borderColor = Color.Green;
        }
    }
    if (props.checked) {
        animationState = css`
            opacity: 1;
            transform: scale(1);
        `;
    }
    if (props.large) {
        circleSize = css`
            width: 10px;
            height: 10px;
            margin: -5px 0 0 -5px;
        `;
    }
    return {
        backgroundColor,
        circleColor,
        borderColor,
        animationState,
        circleSize,
    };
})`
    z-index: 200;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid ${props => props.borderColor};
    background-color: ${props => props.backgroundColor};
    ${props => props.animationState};
    transition:
        opacity .6s cubic-bezier(0.23, 1, 0.32, 1),
        transform .6s cubic-bezier(0.23, 1, 0.32, 1),
        border-color .12s linear;
    &::before {
        position: absolute;
        content: '';
        display: block;
        top: 50%;
        left: 50%;
        ${props => props.circleSize};
        border-radius: 50%;
        background-color: ${props => props.circleColor};
    }
`;
