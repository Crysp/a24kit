import styled from 'styled-components';
import { Color } from '../config';

export const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 80px;
    height: 16px;
    line-height: 16px;
`;

interface PlaceholderProps {
    width: number
}

export const Placeholder = styled.div<PlaceholderProps>`
    position: absolute;
    overflow: hidden;
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    right: 0;
    top: 0;
    bottom: 0;
    width: ${props => props.width}%;
    color: ${Color.Pale};
`;

interface StarListProps {
    width: number
}

export const StarList = styled.div<StarListProps>`
    position: absolute;
    overflow: hidden;
    display: flex;
    flex-flow: row;
    left: 0;
    top: 0;
    bottom: 0;
    justify-content: flex-start;
    width: ${props => props.width}%;
    color: ${Color.Gold};
`;
