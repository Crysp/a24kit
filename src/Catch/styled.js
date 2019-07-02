import styled from 'styled-components';
import { Flash } from '../Icon';
import { Color } from '../config';

export const Wrapper = styled.div`
    padding: 20px;
    background: ${Color.White};
    color: ${Color.Coal};
    border-radius: 2px;
    border: 2px solid ${Color.Pale};
    font: 400 14px 'Open Sans', sans-serif;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
`;

export const FlashIcon = styled(Flash)`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    fill: ${Color.Red};
`;

export const Text = styled.div`
    margin-top: 12px;
`;
