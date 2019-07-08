import React from 'react';
export interface Props {
    value: number;
    selectable: boolean;
    onClick(): void;
}
export default class Day extends React.PureComponent<Props> {
    static defaultProps: {
        selectable: boolean;
        onClick(): void;
    };
    onClick: () => void;
    render(): JSX.Element;
}
