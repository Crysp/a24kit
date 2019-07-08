import styled, { css } from 'styled-components';

const getSize = (props) => {
    if (typeof props.size === 'number') {
        return css`
            width: ${props.size}px;
            height: ${props.size}px;
        `;
    }
    return css`
        width: 100%;
        height: 100%;
    `;
};

export default styled.svg`
    display: inline-block;
    fill: currentColor;
    stroke: currentColor;
    stroke-width: 0;
    user-select: none;
    flex-shrink: 0;
    ${getSize}
`;
