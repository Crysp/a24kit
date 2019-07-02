import React from 'react';
import PropTypes from 'prop-types';
import Circle from './styled';


export const RIPPLE_DURATION = 1500;
export default class Ripple extends React.PureComponent {
    static propTypes = {
        top: PropTypes.number.isRequired,
        left: PropTypes.number.isRequired,
        color: PropTypes.oneOf([
            'green',
            'lightGreen',
            'blue',
            'lightBlue',
            'gold',
            'lightGold',
            'red',
            'lightRed',
            'gray',
            'pale',
            'silver',
        ]).isRequired,
    };

    render() {
        return <Circle {...this.props} />;
    }
}
