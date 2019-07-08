import React from 'react';
import Circle from './styled';

type RippleProps = {
    top: number
    left: number
    color: 'green' | 'lightGreen' | 'blue' | 'lightBlue' | 'gold' | 'lightGold' | 'red' | 'lightRed' | 'gray' | 'pale' | 'silver'
};

export const RIPPLE_DURATION = 1500;
export default class Ripple extends React.PureComponent<RippleProps> {
    render(): React.ReactNode {
        return <Circle {...this.props} />;
    }
}
