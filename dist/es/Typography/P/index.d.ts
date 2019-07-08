import React from 'react';
export interface Props {
    size: 1 | 2 | 3;
    light: boolean;
    children: React.ReactNode;
}
/**
 * General component description in JSDoc format. Markdown is *supported*.
 * @develop
 */
export default class P extends React.PureComponent<Props> {
    static defaultProps: {
        size: number;
        light: boolean;
    };
    render(): JSX.Element;
}
