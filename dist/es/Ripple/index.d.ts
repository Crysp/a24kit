import React from 'react';
declare type RippleProps = {
    top: number;
    left: number;
    color: 'green' | 'lightGreen' | 'blue' | 'lightBlue' | 'gold' | 'lightGold' | 'red' | 'lightRed' | 'gray' | 'pale' | 'silver';
};
export declare const RIPPLE_DURATION = 1500;
export default class Ripple extends React.PureComponent<RippleProps> {
    render(): React.ReactNode;
}
export {};
