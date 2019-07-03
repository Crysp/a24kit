import styled from 'styled-components';
import { Color } from '../config';

export default styled.div.attrs((props) => {
    let color = Color.Gray;
    let background = Color.Pale;
    if (props.online) {
        color = Color.Coal;
        background = Color.Green;
    }
    return {
        color,
        background,
    };
})`
    display: inline-block;
    color: ${props => props.color};
    font-size: inherit;
    &::before {
        content: '';
        position: relative;
        display: inline-block;
        top: -1px;
        width: 8px;
        height: 8px;
        margin-right: 5px;
        background: ${props => props.background};
        border-radius: 50%;
        vertical-align: middle;
    }
`;
