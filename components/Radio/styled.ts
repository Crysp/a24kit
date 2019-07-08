import styled, { css } from 'styled-components';
import { Color } from '../config';
import React from "react";

interface WrapperProps {
    large?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    position: relative;
    display: inline-block;
    top: ${props => (props.large ? 'auto' : '2px')};
    width: ${props => (props.large ? 20 : 16)}px;
    height: ${props => (props.large ? 20 : 16)}px;
`;

const getEmptyCircleStyles = (props) => {
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
    return css`
        border: 1px solid ${borderColor};
        background-color: ${backgroundColor};
        ${animationState}
    `;
};

interface EmptyCircleProps {
    color: string
    checked: boolean
    highlighted: boolean
    disabled: boolean
}

export const EmptyCircle = styled.div<EmptyCircleProps>`
    z-index: 100;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition:
        opacity .6s cubic-bezier(0.23, 1, 0.32, 1),
        transform .6s cubic-bezier(0.23, 1, 0.32, 1),
        border-color .12s linear;
    ${getEmptyCircleStyles}
`;

const getCircleStyles = (props) => {
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
    return css`
        border: 1px solid ${borderColor};
        background-color: ${backgroundColor};
        ${animationState};
        &::before {
            ${circleSize};
            background-color: ${circleColor};
        }
    `;
};

interface CircleProps extends EmptyCircleProps {
    large: boolean
}

export const Circle = styled.div<CircleProps>`
    z-index: 200;
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    ${getCircleStyles};
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
        border-radius: 50%;
    }
`;
