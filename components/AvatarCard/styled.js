import styled from 'styled-components';
import { Color } from '../config';

export const Wrapper = styled.div`
    width: max-content;
    box-sizing: border-box;
    overflow: hidden;
`;

/**
 * todo доделать для других размеров, когда будет дизайн
 * расположение для medium-size
 */
export const Online = styled.span`
    position: relative;
    display: inline-block;
    vertical-align: top;
    top: 0;
    right: 12px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${Color.Green};
`;
