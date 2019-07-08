import styled, { keyframes } from 'styled-components';
import { Color } from '../config';

interface WrapperProps {
    top: number
    left: number
    color: string
}

const ripple = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        width: 200%;
        padding-bottom: 200%;
        opacity: 0;
    }
`;

const getBackgroundColor = (props: WrapperProps) => {
    let backgroundColor;
    switch (props.color) {
        case 'blue':
            backgroundColor = Color.Blue;
            break;
        case 'green':
            backgroundColor = Color.Green;
            break;
        case 'gold':
            backgroundColor = Color.Gold;
            break;
        case 'red':
            backgroundColor = Color.Red;
            break;
        case 'lightBlue':
            backgroundColor = Color.LightBlue;
            break;
        case 'lightGreen':
            backgroundColor = Color.LightGreen;
            break;
        case 'lightGold':
            backgroundColor = Color.LightGold;
            break;
        case 'lightRed':
            backgroundColor = Color.LightRed;
            break;
        case 'gray':
            backgroundColor = Color.Gray;
            break;
        case 'pale':
            backgroundColor = Color.Pale;
            break;
        case 'silver':
            backgroundColor = Color.Silver;
            break;
        default:
            backgroundColor = 'transparent';
    }
    return backgroundColor;
};

export default styled.span<WrapperProps>`
    z-index: 100;
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    width: 0;
    padding-bottom: 0;
    transform: translate(-50%, -50%);
    opacity: 0;
    border-radius: 50%;
    background-color: ${getBackgroundColor};
    animation: ${ripple} 1.5s ease-out;
`;
