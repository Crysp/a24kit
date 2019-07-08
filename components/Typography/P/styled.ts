import styled, { css } from 'styled-components';

const getSize = (props) => {
    if (props.size === 2) {
        return css`
            font-size: 13px;
            line-height: 20px;
            font-weight: 400;
        `;
    }
    if (props.size === 3) {
        return css`
            font-size: 12px;
            line-height: 20px;
            font-weight: 400;
        `;
    }

    return css`
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
    `;
};

interface Props {
    light: boolean
}

export default styled.p<Props>`
    margin: 0;
    font-family: "Open Sans", sans-serif;
    word-wrap: break-word;
    color: ${props => (props.light ? '#9c9c9c' : 'inherit')};
    ${getSize}
    
    & + & {
        margin-top: 12px;
    }
`;
