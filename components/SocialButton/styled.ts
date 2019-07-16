import styled from 'styled-components';

interface Props {
    size: string
}

export default styled.a<Props>`
    flex-shrink: 0;
    border-radius: 5px;
    transition: color .12s ease-in-out;
    overflow: hidden;
`;
