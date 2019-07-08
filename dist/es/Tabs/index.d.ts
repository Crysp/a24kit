import React from 'react';
export interface Props {
    activeKey: string;
    defaultActiveKey: string;
    onChange(active: string): void;
    onTabClick(): void;
    onPrevClick(): void;
    onNextClick(): void;
    tabBarStyle: object;
    size: 'default' | 'large';
    animated: boolean;
    style: object;
    className: string;
    destroyInactiveTabPane: boolean;
    tabPosition: string;
    children: React.ReactNode;
}
export default class Tabs extends React.Component<Props> {
    static TabPane: any;
    static defaultProps: {
        activeKey: string;
        defaultActiveKey: string;
        onChange(): void;
        onTabClick(): void;
        onPrevClick(): void;
        onNextClick(): void;
        tabBarStyle: {};
        size: string;
        style: {};
        className: string;
        animated: boolean;
        destroyInactiveTabPane: boolean;
        tabPosition: string;
        children: null;
    };
    rootNode: null;
    onRefRoot: (root: any) => void;
    handleChange: (activeKey: any) => void;
    render(): JSX.Element;
}
export { TabPane } from 'rc-tabs';
