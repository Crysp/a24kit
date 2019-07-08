import styled from 'styled-components';
import { Color } from '../config';

interface WrapperProps {
    disabled: boolean
}

export const Label = styled.div<WrapperProps>`
    display: inline-block;
    margin-left: 12px;
    font: 400 14px "Open Sans", Helvetica, Arial, sans-serif;
    line-height: 20px;
    vertical-align: top;
    white-space: normal;
    color: ${props => (props.disabled ? Color.Gray : Color.Coal)};
`;

export const Wrapper = styled.div<WrapperProps>`
    display: inline-block;
    cursor: pointer;
    user-select: none;
    line-height: 50%;
    white-space: nowrap;
    pointer-events: ${props => (props.disabled ? 'none' : 'inherit')};
`;
