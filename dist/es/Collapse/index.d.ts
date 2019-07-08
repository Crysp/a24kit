import React from 'react';
export interface Props {
    activeKey: string | string[];
    defaultActiveKey: string[];
    accordion: boolean;
    onChange(): void;
    className: string;
}
export default class Collapse extends React.Component<Props> {
    static defaultProps: {
        activeKey: undefined;
        defaultActiveKey: undefined;
        accordion: undefined;
        onChange: undefined;
        className: undefined;
    };
    static Panel: React.FunctionComponent<import("./components/CollapsePanel").Props>;
    render(): JSX.Element;
}
