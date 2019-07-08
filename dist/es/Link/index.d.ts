import React from 'react';
export interface Props {
    children: React.ReactNode;
    href: string;
    icon: React.ReactNode;
    iconPosition: 'before' | 'after';
    pseudo: boolean;
    className: string;
    onClick(event: React.SyntheticEvent): void;
}
export default class Link extends React.PureComponent<Props> {
    static defaultProps: {
        href: string;
        iconPosition: string;
        pseudo: boolean;
        className: string;
        icon: null;
        onClick: undefined;
    };
    onClick: (e: React.SyntheticEvent<Element, Event>) => void;
    render(): JSX.Element;
}
