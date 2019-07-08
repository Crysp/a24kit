import React from 'react';
import Option from './components/Option';
interface Option {
    value: string;
    label: string;
}
export interface Props {
    options: Option[];
    value: string[] | string;
    placeholder: string;
    multiple: boolean;
    searchable: boolean;
    maxHeight: number;
    tabIndex: number;
    disabled: boolean;
    renderSelected(selected: Option): string;
    renderOption(option: Option): void;
    onChange(selected: string[] | string): void;
    className: string;
}
export declare const VISIBLE_ITEMS = 1;
export default class Select extends React.Component<Props> {
    static defaultProps: {
        value: null;
        placeholder: string;
        multiple: boolean;
        searchable: boolean;
        maxHeight: number;
        tabIndex: number;
        disabled: boolean;
        className: string;
        renderSelected: undefined;
        renderOption: undefined;
        onChange(): void;
    };
    state: {
        searchLabel: string;
        isOpened: boolean;
    };
    node: React.RefObject<HTMLDivElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onClickOuter: (e: any) => void;
    onToggle: () => void;
    onSelect: (_value: string) => void;
    onChangeSearchLabel: (searchLabel: any) => void;
    getText(): string;
    getOptions(): Option[];
    closeMenu(): void;
    renderOption(option: Option): string | void;
    render(): JSX.Element;
}
export {};
