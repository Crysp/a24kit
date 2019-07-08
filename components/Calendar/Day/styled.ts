import styled, { css } from 'styled-components';
import { Color } from '../../config';

function fillCurrent() {
    return css`
        color: ${Color.White};
        &::before {
            position: absolute;
            z-index: 0;
            content: '';
            top: 50%;
            left: 50%;
            width: 24px;
            height: 24px;
            margin: -12px 0 0 -12px;
            background-color: ${Color.Blue};
            border-radius: 50%;
        }
    `;
}

function fillPast() {
    return css`
        color: ${Color.Gray};
    `;
}

function fillWeekEnd() {
    return css`
        color: ${Color.Gray};
    `;
}

function fill(props) {
    switch (true) {
        case props.current:
            return fillCurrent();
        case props.past:
            return fillPast();
        case props.weekEnd:
            return fillWeekEnd();
        default:
            return '';
    }
}

interface WrapperProps {
    selectable?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
    cursor: default;
    ${props => (props.selectable
        ? css`
            cursor: pointer;
            &::after {
                position: absolute;
                z-index: 100;
                content: '';
                top: 50%;
                left: 50%;
                width: 24px;
                height: 24px;
                margin: -12px 0 0 -12px;
                background-color: transparent;
                border-radius: 50%;
                transition: background-color .12s linear;
            }
            &:hover {
                color: #fff;
                &::after {
                    background-color: ${Color.DeepBlue};
                }
            }
        `
        : '')}
    
    ${fill}
`;

export const Text = styled.div`
    position: relative;
    z-index: 200;
    padding: 6px;
`;
