import styled from 'styled-components';
import { Color } from '../config';

export default styled.button`
    box-sizing: border-box;
    display: inline-block;
    padding: 12px 24px;
    font: 400 14px "Open Sans", sans-serif;
    line-height: 16px;
    color: ${Color.Blue};
    background-color: ${Color.Zircon};
    border-radius: 2px;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    transition: background-color .2s linear;
    &:hover {
        background-color: #e4edf7;
        text-decoration: underline;
    }
`;
