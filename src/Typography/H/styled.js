import styled, { css } from 'styled-components';
import { skeleton } from '../../config';

const getSize = (props) => {
    if (props.size === 2) {
        return css`
            font-size: 24px;
            line-height: 32px;
            font-weight: 400;
            &:empty {
                ${skeleton('40%', '24px', 'pale')}
            }
        `;
    }
    if (props.size === 3) {
        return css`
            font-size: 18px;
            line-height: 28px;
            font-weight: 400;
            &:empty {
                ${skeleton('40%', '18px', 'pale')}
            }
        `;
    }
    if (props.size === 4) {
        return css`
            font-size: 16px;
            line-height: 24px;
            font-weight: 600;
            &:empty {
                ${skeleton('40%', '16px', 'pale')}
            }
        `;
    }
    if (props.size === 5) {
        return css`
            font-size: 14px;
            line-height: 20px;
            font-weight: 600;
            &:empty {
                ${skeleton('40%', '14px', 'pale')}
            }
        `;
    }
    if (props.size === 6) {
        return css`
            font-size: 13px;
            line-height: 20px;
            font-weight: 400;
            &:empty {
                ${skeleton('40%', '13px', 'pale')}
            }
        `;
    }
    return css`
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
        &:empty {
            ${skeleton('40%', '24px', 'pale')}
        }
    `;
};

export default styled.div`
    margin: 0;
    font-family: "Open Sans", sans-serif;
    color: inherit;
    ${getSize}
`;
