import styled, { css } from 'styled-components';
import { Color } from '../config';

export default styled.a.attrs((props) => {
    let size = css`
        width: 48px;
        height: 48px;
    `;
    let color;
    let hoverColor;
    if (props.size === 'small') {
        size = css`
            width: 40px;
            height: 40px;
        `;
    }
    switch (props.type) {
        case 'fb':
            color = '#5977ba';
            hoverColor = '#3a548c';
            break;
        case 'tw':
            color = '#27b3f1';
            hoverColor = '#0c88bf';
            break;
        case 'gp':
            color = '#e56042';
            hoverColor = '#c0391a';
            break;
        case 'tg':
            color = '#2ca5e0';
            hoverColor = '#1978a7';
            break;
        case 'wa':
            color = '#42c850';
            hoverColor = '#2b9336';
            break;
        case 'vk':
            color = '#6794c8';
            hoverColor = '#3c6da6';
            break;
        case 'ok':
            color = '#f18d3e';
            hoverColor = '#d3660f';
            break;
        default:
            color = Color.Gray;
            hoverColor = Color.Coal;
    }
    return {
        size,
        color,
        hoverColor,
    };
})`
    flex-shrink: 0;
    border-radius: 5px;
    transition: color .12s ease-in-out;
    overflow: hidden;
    color: ${props => props.color};
    ${props => props.size}
    
    &:hover {
        color: ${props => props.hoverColor};
    }
`;
