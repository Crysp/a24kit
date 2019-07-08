import React from 'react';
import Input, { Props as InputProps } from '../Input';
interface Props extends Omit<InputProps, 'onChange'> {
    currencyISO: string;
    numberLength: number;
    onChange(value: string, numberValue: number): void;
}
interface State {
    value: string;
}
/**
 * @develop
 */
export default class AmountInput extends React.Component<Props, State> {
    static defaultProps: {
        numberLength: number;
    };
    state: {
        value: string;
    };
    maskPattern: any;
    mask: any;
    root: React.RefObject<Input>;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    onChange: (value: any) => void;
    onProcessMaskInputEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
    getMaxLength(): number;
    getValue(): string;
    updateMaskByValue(value: any): void;
    render(): JSX.Element;
}
export {};
