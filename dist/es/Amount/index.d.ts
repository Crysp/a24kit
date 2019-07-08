import React from 'react';
export declare function format(value: number, minority: number, iso: string): {
    majorPart: string;
    minorPart: string;
    amountValue: string;
    isNegative: boolean;
    currencySymbol: string;
};
interface AmountProps {
    iso: string;
    value: 0;
    minority: 0;
}
/**
 * Форматирование числа в валюту
 *
 * @develop
 * @version 1.0.0
 */
export default class Amount extends React.Component<AmountProps> {
    static defaultProps: {
        value: number;
        minority: number;
    };
    render(): JSX.Element;
}
export {};
