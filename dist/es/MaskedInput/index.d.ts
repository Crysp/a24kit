import React from 'react';
import Mask from './mask';
interface Props {
    mask: string;
    formatCharacters: {
        validate(): void;
        transform(): void;
    };
    value: any;
    maxLength: number;
    onProcessInputEvent(event: React.ChangeEvent<HTMLInputElement>): void;
    onBeforeInput(event: React.ChangeEvent<HTMLInputElement>): void;
    onInput(event: React.ChangeEvent<HTMLInputElement>): void;
    onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
export default class MaskedInput extends React.Component<Props> {
    static defaultProps: {
        formatCharacters: {};
        value: undefined;
        maxLength: undefined;
        onProcessInputEvent: undefined;
        onBeforeInput: undefined;
        onInput: undefined;
        onChange: undefined;
    };
    input: React.RefObject<HTMLInputElement>;
    maskPattern: undefined;
    mask: Mask;
    formatCharacters: undefined;
    value: string;
    beforeInputSelection: {
        start: number | null;
        end: number | null;
    };
    caretFixTimeout: number;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    onBeforeInput: (event: any) => void;
    onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    processInputEvent(event: React.ChangeEvent<HTMLInputElement>): React.ChangeEvent<HTMLInputElement>;
    clampSelection(selection: any): any;
    setInputSelection(selection: any): void;
    setInputSelectionByTimeout(selection: any): void;
    setMask(newMask: any, formatCharacters?: any): void;
    isFilled(): boolean;
    render(): JSX.Element;
    focus(): void;
    blur(): void;
}
export {};
