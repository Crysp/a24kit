import styled, { css } from 'styled-components';
import { Color } from '../config';

interface Props {
    online: boolean
}

const getStyles = (props) => {
    let color = Color.Gray;
    let background = Color.Pale;
    if (props.online) {
        color = Color.Coal;
        background = Color.Green;
    }
    return css`
        color: ${color};

        &::before {
            background: ${background};
        }
    `;
};

export default styled.div<Props>`
    display: inline-block;
    font-size: inherit;
    ${getStyles};

    &::before {
        content: '';
        position: relative;
        display: inline-block;
        top: -1px;
        width: 8px;
        height: 8px;
        margin-right: 5px;
        border-radius: 50%;
        vertical-align: middle;
    }
`;
