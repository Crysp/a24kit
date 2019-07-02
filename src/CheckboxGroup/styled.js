import styled from 'styled-components';

export const List = styled.div`
    position: relative;
`;

export const Option = styled.div`
    position: relative;
    & + & {
        margin-top: 12px;
    }
`;
