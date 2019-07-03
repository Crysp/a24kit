import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import RcTabs, { TabPane, TabContent } from 'rc-tabs';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import { ArrowLeft, ArrowRight } from '../Icon';
import TabsGlobalStyles from './styled';

export default class Tabs extends React.Component {
    static TabPane = TabPane;

    static propTypes = {
        /**
         * Ключ активной вкладки
         */
        activeKey: PropTypes.string,
        /**
         * Активная вкладка по умолчанию
         */
        defaultActiveKey: PropTypes.string,
        /**
         * Обработчик смены вкладки
         */
        onChange: PropTypes.func,
        /**
         * Обработчик клика по вкладке
         */
        onTabClick: PropTypes.func,
        /**
         * Обработчик клика на кнопку прокрутки влево
         */
        onPrevClick: PropTypes.func,
        /**
         * Обработчик клика на кнопку прокрутки вправо
         */
        onNextClick: PropTypes.func,
        /**
         * Стиль бегунка по активной вкладкой
         */
        tabBarStyle: PropTypes.shape(),
        /**
         * Размер вкладок
         */
        size: PropTypes.oneOf([
            'default',
            'large',
        ]),
        /**
         * Анимация при переключении
         */
        animated: PropTypes.bool,
        /**
         * Стиль обертки
         */
        style: PropTypes.shape(),
        /**
         * Класс обертки
         */
        className: PropTypes.string,
        /**
         * Анигилировать неактивную вкладку при смене
         */
        destroyInactiveTabPane: PropTypes.bool,
        tabPosition: PropTypes.string,
        children: PropTypes.node,
    };

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

    onRefRoot = (root) => {
        this.rootNode = root;
        // eslint-disable-next-line react/no-find-dom-node
        const rootDOMNode = ReactDOM.findDOMNode(this.rootNode);
        if (rootDOMNode !== null) {
            const prevButton = rootDOMNode.querySelector('.tabs-tab-prev');
            const nextButton = rootDOMNode.querySelector('.tabs-tab-next');
            prevButton.innerHTML = ReactDOMServer.renderToString(
                <ArrowLeft className="tabs-prevIcon" />,
            );
            nextButton.innerHTML = ReactDOMServer.renderToString(
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
        const classes = [];

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
