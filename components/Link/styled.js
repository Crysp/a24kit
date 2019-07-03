import styled from 'styled-components';
import { Color } from '../config';

export const Wrapper = styled.span`
    border-bottom: ${props => (props.pseudo ? '1px dashed currentColor' : 'inherit')};
`;

export const StyledLink = styled.a`
    position: relative;
    display: inline;
    font-family: "Open Sans", Helvetica, Arial, sans-serif;
    font-size: inherit;
    font-weight: inherit;
    color: ${Color.Blue};
    cursor: pointer;
    text-decoration: none;
    &:hover {
        color: ${Color.DeepBlue};
        text-decoration: ${props => (props.pseudo ? 'none' : 'underline')};
    }
    &:hover ${Wrapper} {
        border-bottom-width: 0;
    }
`;

export const Addon = styled.span.attrs((props) => {
    let rightGutter = 0;
    let leftGutter = 0;
    if (props.pseudo) {
        rightGutter = 12;
        leftGutter = 12;
    }
    if (props.pseudo) {
        rightGutter = 4;
        leftGutter = 4;
    }
    return {
        rightGutter,
        leftGutter,
    };
})`
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin-right: ${props => props.rightGutter}px;
    margin-left: ${props => props.leftGutter}px;
`;
