import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import RcTabs, { TabPane, TabContent } from 'rc-tabs';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import { ArrowLeft, ArrowRight } from '../Icon';
import TabsGlobalStyles from './styled';

export interface Props {
    activeKey: string
    defaultActiveKey: string
    onChange(active: string): void
    onTabClick(): void
    onPrevClick(): void
    onNextClick(): void
    tabBarStyle: object
    size: 'default' | 'large'
    animated: boolean
    style: object
    className: string
    destroyInactiveTabPane: boolean
    tabPosition: string
    children: React.ReactNode
}

export default class Tabs extends React.Component<Props> {
    static TabPane = TabPane;

    static defaultProps = {
        activeKey: '',
        defaultActiveKey: '',
        onChange() {},
        onTabClick() {},
        onPrevClick() {},
        onNextClick() {},
        tabBarStyle: {},
        size: 'default',
        style: {},
        className: '',
        animated: true,
        destroyInactiveTabPane: false,
        tabPosition: 'top',
        children: null,
    };

    rootNode = null;

    onRefRoot = (root) => {
        this.rootNode = root;
        // eslint-disable-next-line react/no-find-dom-node
        const rootDOMNode = ReactDOM.findDOMNode(this.rootNode) as Element;
        if (rootDOMNode !== null) {
            const prevButton = rootDOMNode.querySelector('.tabs-tab-prev');
            const nextButton = rootDOMNode.querySelector('.tabs-tab-next');
            prevButton!.innerHTML = ReactDOMServer.renderToString(
                <ArrowLeft className="tabs-prevIcon" />,
            );
            nextButton!.innerHTML = ReactDOMServer.renderToString(
                <ArrowRight className="tabs-nextIcon" />,
            );
        }
    };

    handleChange = (activeKey) => {
        const { onChange } = this.props;
        if (onChange) {
            onChange(activeKey);
        }
    };

    render() {
        const {
            className,
            tabPosition,
            children,
            tabBarStyle,
            onTabClick,
            onPrevClick,
            onNextClick,
            size,
            animated,
            destroyInactiveTabPane,
        } = this.props;
        const classes: string[] = [];

        if (size === 'large') classes.push('tabs-large');
        if (!animated) classes.push('tabs-no-animation');
        if (className.length > 0) classes.push(className);

        const renderTabBar = () => (
            <ScrollableInkTabBar
                inkBarAnimated
                onTabClick={onTabClick}
                onPrevClick={onPrevClick}
                onNextClick={onNextClick}
                style={tabBarStyle}
            />
        );
        return (
            <React.Fragment>
                <RcTabs
                    {...this.props}
                    prefixCls="tabs"
                    className={classes.join(' ')}
                    hideAdd
                    tabBarPosition={tabPosition}
                    destroyInactiveTabPane={destroyInactiveTabPane}
                    renderTabBar={renderTabBar}
                    renderTabContent={() => <TabContent animated={animated} animatedWithMargin />}
                    onChange={this.handleChange}
                    ref={this.onRefRoot}
                >
                    {children}
                </RcTabs>
                <TabsGlobalStyles />
            </React.Fragment>
        );
    }
}

export { TabPane } from 'rc-tabs';
