import styled, { css } from 'styled-components';

const getSize = (props) => {
    if (props.size === 2) {
        return css`
            font-size: 11px;
            line-height: 16px;
            font-weight: 600;
        `;
    }
    if (props.size === 3) {
        return css`
            font-size: 10px;
            line-height: 16px;
            font-weight: 600;
            text-transform: uppercase;
        `;
    }

    return css`
        font-size: 12px;
        line-height: 20px;
        font-weight: 600;
    `;
};

export default styled.small`
    font-family: "Open Sans", sans-serif;
    ${getSize}
`;
