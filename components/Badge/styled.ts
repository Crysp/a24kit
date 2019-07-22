import { css } from 'styled-components';
import styled from '../ThemeProvider/styled-components';
import { Color } from '../config';

function mapColor(props) {
    switch (props.color) {
        case 'red':
            return Color.Red;
        case 'gold':
            return Color.Gold;
        case 'green':
            return Color.Green;
        case 'blue':
            return Color.Blue;
        default:
            return Color.Gray;
    }
}

function smallSize(round) {
    return css`
        padding: 3px 5px;
        font: 700 10px "Open Sans", sans-serif;
        line-height: 10px;
        border-radius: ${round ? 8 : 2}px;

        &:empty {
            width: 8px;
            height: 8px;
            padding: 0;
        }
    `;
}

function defaultSize(round) {
    return css`
        padding: 5px 10px;
        font: 600 13px "Open Sans", sans-serif;
        line-height: 14px;
        border-radius: ${round ? 12 : 2}px;

        &:empty {
            width: 12px;
            height: 12px;
            padding: 0;
        }
    `;
}

function size(props) {
    switch (props.size) {
        case 'small':
            return smallSize(props.round);
        default:
            return defaultSize(props.round);
    }
}

export default styled.span`
    display: inline-block;
    color: ${Color.White};
    border-radius: 2px;
    background-color: ${mapColor};
    ${size}
`;
