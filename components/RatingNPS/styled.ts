import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { Color } from '../config';

export const Wrapper = styled.div`
    position: relative;
    display: block;
    margin: 24px 0;
`;

export const GradeLine = styled.div`
    width: auto;
    display: inline-block;
`;

function beforeRateBox(props) {
    const color = (props.value < 9)
        ? lighten(0.22 * (1 - (props.value / props.countOfBoxes)), Color.Green)
        : Color.Green;
    return css`
        background-color:  ${color};
        border: 1px solid ${color};
        color: ${Color.White};
        &:hover {
             background: ${Color.Blue};
             border: 1px solid  ${Color.Blue};
        }`;
}

function afterRateBox(props) {
    const activeBox = `
            background-color: ${Color.Blue};
            border: 1px solid  ${Color.Blue};
            color: ${Color.White};
            cursor: default;                
            `;
    const unactiveBox = `
            background-color: transparent;
            border: 1px solid  ${Color.DeepGreen};
            color: ${Color.DeepGreen};
            cursor: default;
            `;
    return (props.rateValue === props.value) ? activeBox : unactiveBox;
}

interface BoxProps {
    isRated: boolean
    countOfBoxes: number
    rateValue: number | null
}

export const Box = styled.button<BoxProps>`
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 8px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 400;
    line-height: 40px;
    text-align: center;
    background: ${Color.Green};
    cursor: pointer;
    outline: none;
    transition: all .3s ease;
     ${props => (props.isRated ? afterRateBox(props) : beforeRateBox(props))};
`;

export const GrageRange = styled.div`
    color: ${Color.DeepGreen};
    font-size: 14px;
    font-weight: 400;
    width: 520px;
    line-height: 26px;
    margin-top: 8px;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
`;
