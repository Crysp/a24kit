import styled, { css } from 'styled-components';
import { Color } from '../config';

interface WrapperProps {
    pseudo: boolean
}

export const Wrapper = styled.span<WrapperProps>`
    border-bottom: ${props => (props.pseudo ? '1px dashed currentColor' : 'inherit')};
`;

interface StyledLinkProps {
    pseudo: boolean
}

export const StyledLink = styled.a<StyledLinkProps>`
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

const getGutters = (props) => {
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
    return css`
        margin-right: ${rightGutter}px;
        margin-left: ${leftGutter}px;
    `;
};

export const Addon = styled.span`
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    ${getGutters}
`;
