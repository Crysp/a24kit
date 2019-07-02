import styled, { keyframes } from 'styled-components';
import { Color } from '../config';

export const Wrapper = styled.div`
    display: flex;
    width: 34px;
    max-width: 34px;
    min-width: 34px;
    height: 8px;
    max-height: 8px;
    min-height: 8px;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`;

const blink = keyframes`
    0%, 100%{ opacity: 0 }
    60% { opacity: 1 }
`;

export const Circle = styled.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: ${Color.Blue};
    opacity: 0;
    &:nth-child(1) {
        animation: ${blink} 1s ease-in-out infinite;
    }
    &:nth-child(2) {
        animation: ${blink} 1s ease-in-out 0.33s infinite;
    }
    &:nth-child(3) {
        animation: ${blink} 1s ease-in-out 0.66s infinite;
    }
`;
