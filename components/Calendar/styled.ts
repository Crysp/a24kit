import styled from 'styled-components';
import { Color } from '../config';

export const Wrapper = styled.div`
    font: 400 13px "Open Sans", sans-serif;
    color: ${Color.Coal};
`;

interface HeaderProps {
    sideGutter?: number
}

export const Header = styled.div<HeaderProps>`
    padding: 0 ${props => props.sideGutter}px;
    margin-bottom: 8px;
    background-color: ${Color.Zircon};
`;

export const Nav = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`;

export const SwitchButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 12px;
    border: 0;
    border-radius: 2px;
    background: transparent;
    outline: none;
    color: ${Color.Blue};
    cursor: pointer;
    transition: color .12s linear, background-color .12s linear;
    &:hover {
        color: ${Color.DeepBlue};
    }
    &:active {
        background: ${Color.Pale};
    }
`;

export const Month = styled.div`
    flex: 1;
    text-align: center;
    text-transform: capitalize;
`;

export const WeekDays = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

export const WeekDay = styled.div`
    box-sizing: border-box;
    width: ${100 / 7}%;
    padding: 6px;
    text-align: center;
    font: 700 10px "Open Sans", sans-serif;
    color: ${Color.Gray};
    line-height: 14px;
    text-transform: capitalize;
`;

interface WeeksProps {
    sideGutter?: number
}

export const Weeks = styled.div<WeeksProps>`
    display: flex;
    flex-flow: row wrap;
    padding: 0 ${props => props.sideGutter}px;
`;

export const DayContainer = styled.div`
    position: relative;
    box-sizing: border-box;
    width: ${100 / 7}%;
    text-align: center;
    line-height: 20px;
`;
