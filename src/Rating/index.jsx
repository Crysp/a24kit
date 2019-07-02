import React from 'react';
import PropTypes from 'prop-types';
import { Star, StarHollow } from '../Icon';
import {
    Wrapper,
    Placeholder,
    StarList,
} from './styled';

const ONE_HUNDRED_PERCENT = 100;
const MAX_STARS = 5;

const Rating = (props) => {
    const { value } = props;
    const width = ONE_HUNDRED_PERCENT / MAX_STARS * value;
    return (
        <Wrapper>
            <Placeholder width={ONE_HUNDRED_PERCENT - width}>
                <StarHollow size={16} />
                <StarHollow size={16} />
                <StarHollow size={16} />
                <StarHollow size={16} />
                <StarHollow size={16} />
            </Placeholder>
            <StarList width={width}>
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
                <Star size={16} />
            </StarList>
        </Wrapper>
    );
};

Rating.propTypes = {
    /**
     * Количество звезд (от 0 до 5)
     */
    value: PropTypes.number,
};

Rating.defaultProps = {
    value: 0,
};

export default Rating;
