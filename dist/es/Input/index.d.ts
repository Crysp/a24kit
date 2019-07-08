import React from 'react';
import MaskedInput from '../MaskedInput';
export interface Props {
    type: string;
    value: string;
    autoComplete: boolean;
    maxLength: number;
    id: string;
    name: string;
    tabIndex: number;
    pattern: string;
    formNoValidate: boolean;
    title: string;
    placeholder: string;
    disabled: boolean;
    status: 'default' | 'success' | 'error';
    icon: React.ReactNode;
    iconPosition: 'before' | 'after';
    boundless: boolean;
    centered: boolean;
    leftAddons: React.ReactNode;
    rightAddons: React.ReactNode;
    largeFont: boolean;
    mask: string;
    maskFormatCharacters: {
        validate(): void;
        transform(): void;
    };
    onFocus(event: React.SyntheticEvent): void;
    onBlur(event: React.SyntheticEvent): void;
    onChange(value: string): void;
    onClick(event: React.SyntheticEvent): void;
    onKeyDown(event: React.SyntheticEvent): void;
    onKeyUp(event: React.SyntheticEvent): void;
    onPaste(event: React.SyntheticEvent): void;
    onTouchStart(event: React.SyntheticEvent): void;
    onTouchEnd(event: React.SyntheticEvent): void;
    onTouchMove(event: React.SyntheticEvent): void;
    onTouchCancel(event: React.SyntheticEvent): void;
    onProcessMaskInputEvent(event: React.ChangeEvent<HTMLInputElement>): void;
    style: {
        [key: string]: any;
    };
    className: string | undefined;
    'data-testid': string;
}
/**
 * @develop
 */
export default class Input extends React.Component<Props> {
    static defaultProps: {
        formNoValidate: boolean;
        value: undefined;
        autoComplete: boolean;
        maxLength: undefined;
        id: undefined;
        name: undefined;
        tabIndex: undefined;
        pattern: undefined;
        title: undefined;
        placeholder: undefined;
        disabled: undefined;
        status: undefined;
        type: string;
        icon: null;
        iconPosition: string;
        boundless: boolean;
        centered: boolean;
        leftAddons: null;
        rightAddons: null;
        largeFont: boolean;
        mask: undefined;
        maskFormatCharacters: undefined;
        onFocus: undefined;
        onBlur: undefined;
        onChange: undefined;
        onClick: undefined;
        onKeyDown: undefined;
        onKeyUp: undefined;
        onPaste: undefined;
        onTouchStart: undefined;
        onTouchEnd: undefined;
        onTouchMove: undefined;
        onTouchCancel: undefined;
        onProcessMaskInputEvent: undefined;
        style: undefined;
        className: undefined;
        'data-testid': undefined;
    };
    state: {
        isFocused: boolean;
    };
    root: React.RefObject<MaskedInput & HTMLInputElement>;
    onFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    onBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (event: React.SyntheticEvent<Element, Event>) => void;
    onKeyDown: (event: React.SyntheticEvent<Element, Event>) => void;
    onKeyUp: (event: React.SyntheticEvent<Element, Event>) => void;
    onPaste: (event: React.SyntheticEvent<Element, Event>) => void;
    onTouchStart: (event: React.SyntheticEvent<Element, Event>) => void;
    onTouchEnd: (event: React.SyntheticEvent<Element, Event>) => void;
    onTouchMove: (event: React.SyntheticEvent<Element, Event>) => void;
    onTouchCancel: (event: React.SyntheticEvent<Element, Event>) => void;
    getMaskedInputInstance(): React.RefObject<MaskedInput & HTMLInputElement> | null;
    changeValue(value: string): void;
    isMaskFilled(): boolean;
    focus(): void;
    blur(): void;
    render(): JSX.Element;
}
