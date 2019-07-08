import React from 'react';
export interface Props {
    color: 'blue' | 'green';
    large: boolean;
    disabled: boolean;
    isChecked: boolean;
    isHighlighted: boolean;
}
export default class Radio extends React.PureComponent<Props> {
    static defaultProps: {
        color: string;
        large: boolean;
        disabled: boolean;
        isChecked: boolean;
        isHighlighted: boolean;
    };
    render(): JSX.Element;
}
