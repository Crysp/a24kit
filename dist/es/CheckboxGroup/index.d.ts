import React from 'react';
export interface Props {
    selected: string[];
    options: {
        value: any;
        label: string;
    }[];
    color: 'blue' | 'green' | 'deepBlue';
    large: boolean;
    disabled: boolean;
    onCheck(selected: string[]): void;
}
interface State {
    selected: string[];
}
export default class CheckboxGroup extends React.PureComponent<Props, State> {
    static defaultProps: {
        selected: never[];
        color: string;
        large: boolean;
        disabled: boolean;
        onCheck(): void;
    };
    state: {
        selected: string[];
    };
    onCheck: (value: any) => void;
    render(): JSX.Element;
}
export {};
