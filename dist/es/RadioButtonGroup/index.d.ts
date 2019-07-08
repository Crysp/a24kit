import React from 'react';
export interface Props {
    selected: string;
    options: {
        value: string;
        label: string;
    }[];
    color: 'blue' | 'green';
    large: boolean;
    disabled: boolean;
    onCheck(value: string): void;
    'data-testid': string;
}
export default class RadioButtonGroup extends React.Component<Props> {
    static defaultProps: {
        selected: null;
        color: string;
        large: boolean;
        disabled: boolean;
        onCheck(): void;
        'data-testid': undefined;
    };
    onCheck: (value: string) => void;
    render(): JSX.Element;
}
