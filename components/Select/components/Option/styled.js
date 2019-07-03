import styled from 'styled-components';
import Checkbox from '../../../Checkbox';
import { Color } from '../../../config';

export const Wrapper = styled.div`
    padding: 6px 12px;
    font: 400 14px "Open Sans", Helvetica, Arial, sans-serif;
    line-height: 20px;
    cursor: pointer;
    background-color: ${props => (props.selected ? '#e4edf7' : Color.White)};
    transition: background-color .12s linear;
    &:hover {
        background-color: ${Color.Zircon};
    }
`;

export const StyledCheckbox = styled(Checkbox)`
    width: 100%;
`;
