import React from 'react';
export interface Props {
    children: React.ReactNode;
    color: 'blue' | 'green' | 'red' | 'gold' | 'gray';
    size: 'medium' | 'small';
    round: boolean;
    className: string;
}
export default class Badge extends React.PureComponent<Props> {
    static defaultProps: {
        color: string;
        size: string;
        round: boolean;
        className: string;
        children: null;
    };
    render(): JSX.Element;
}
