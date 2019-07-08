import React from 'react';
export interface Props {
    value: number | string;
    label: string;
    color: 'blue' | 'green';
    isChecked: boolean;
    large: boolean;
    disabled: boolean;
    'data-testid': string;
    onCheck(value: number | string): void;
    onMouseEnter(e: React.SyntheticEvent): void;
    onMouseLeave(e: React.SyntheticEvent): void;
}
interface State {
    isHovered: boolean;
}
export default class RadioButton extends React.Component<Props, State> {
    static defaultProps: {
        label: string;
        isChecked: boolean;
        large: boolean;
        disabled: boolean;
        color: string;
        'data-testid': undefined;
        onCheck(): void;
        onMouseEnter: undefined;
        onMouseLeave: undefined;
    };
    state: {
        isHovered: boolean;
    };
    onCheck: () => void;
    onMouseEnter: (e: React.SyntheticEvent<Element, Event>) => void;
    onMouseLeave: (e: React.SyntheticEvent<Element, Event>) => void;
    render(): JSX.Element;
}
export {};
