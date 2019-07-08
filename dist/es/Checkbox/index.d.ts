import React from 'react';
export interface Props {
    color: 'blue' | 'green' | 'deepBlue';
    isChecked: boolean;
    label: React.ReactNode;
    large: boolean;
    disabled: boolean;
    onCheck(): void;
}
export default class Checkbox extends React.Component<Props> {
    static defaultProps: {
        color: string;
        isChecked: boolean;
        label: string;
        large: boolean;
        disabled: boolean;
        onCheck(): void;
    };
    onCheck: () => void;
    render(): JSX.Element;
}
