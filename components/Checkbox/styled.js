import styled, { css } from 'styled-components';
import { Wrapper as MarkWrapper } from './components/Mark/styled';
import { Color } from '../config';


function borderColor(props) {
    if (props.disabled) {
        return css`border-color: ${Color.Pale};`;
    }
    switch (props.color) {
        case 'green':
            return css`border-color: ${Color.Green};`;
        case 'deepBlue':
            return css`border-color: ${Color.DeepBlue};`;
        default:
            return css`border-color: ${Color.Blue};`;
    }
}

export const Wrapper = styled.div`
    display: inline-block;
    cursor: pointer;
    user-select: none;
    line-height: 50%;
    white-space: nowrap;
    pointer-events: ${props => (props.disabled ? 'none' : 'inherit')};
    
    &:hover ${MarkWrapper} {
        ${borderColor}
    }
`;

export const Label = styled.div`
    display: inline-block;
    margin-left: 12px;
    font: 400 14px "Open Sans", sans-serif;
    line-height: 20px;
    vertical-align: top;
    white-space: normal;
    color: ${props => (props.disabled ? Color.Gray : 'inherit')};
`;
