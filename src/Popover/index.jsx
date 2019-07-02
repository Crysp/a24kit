import React from 'react';
import PropTypes from 'prop-types';
import RcTooltip from 'rc-tooltip';
import getPlacements from './placements';
import GlobalStyles from './styled';

/**
 * `Popover` сработает только если у детей есть
 * события `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick`.
 */

export default class Popover extends React.Component {
    static propTypes = {
        /**
         * По какому событию показывать ['click', 'hover', 'focus', 'contextMenu']
         */
        trigger: PropTypes.arrayOf(PropTypes.oneOf(['click', 'hover', 'focus', 'contextMenu'])),
        /**
         * Элемент на который указывает
         */
        children: PropTypes.node.isRequired,
        /**
         * Видимость по умолчанию
         */
        defaultVisible: PropTypes.bool,
        /**
         * Видимость
         */
        // eslint-disable-next-line react/require-default-props
        visible: PropTypes.bool,
        /**
         * Расположение
         * ['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']
         */
        placement: PropTypes.oneOf([
            'left',
            'right',
            'top',
            'bottom',
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight',
        ]),
        /**
         * Цвет
         */
        color: PropTypes.oneOf(['white', 'red', 'blue']),
        /**
         * Добавляет тень
         */
        raised: PropTypes.bool,
        /**
         * Свойство от компонента
         * @link https://github.com/react-component/animate
         */
        transitionName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
        /**
         * Изменилась видимость
         */
        onVisibleChange: PropTypes.func,
        /**
         * После того как измениласть видимость
         */
        afterVisibleChange: PropTypes.func,
        /**
         * Всплывающий контент
         */
        overlay: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
        /**
         * Стили для всплывашки
         */
        overlayStyle: PropTypes.shape(),
        /**
         * CSS класс всплывашки
         */
        overlayClassName: PropTypes.string,
        /**
         * CSS префикс
         */
        prefixCls: PropTypes.string,
        /**
         * Задержка пере показом (сек)
         */
        mouseEnterDelay: PropTypes.number,
        /**
         * Задержка перед скрытием (сек)
         */
        mouseLeaveDelay: PropTypes.number,
        /**
         * Функция возвращающая контейнер относительно которого позиционируется всплывашка.
         * По умолчанию контейнер - body
         */
        getPopoverContainer: PropTypes.func,
        /**
         * Удаляет всплывашку из DOM после скрытия
         */
        destroyPopoverOnHide: PropTypes.bool,
        /**
         * Настройки выранивания (будут объединены с placement конфигом)
         * @link https://github.com/yiminghe/dom-align
         */
        align: PropTypes.shape(),
        arrowPointAtCenter: PropTypes.bool,
        autoAdjustOverflow: PropTypes.bool,
    };

    static defaultProps = {
        trigger: ['hover'],
        prefixCls: 'ui-popover',
        placement: 'top',
        color: 'white',
        raised: true,
        transitionName: 'ui-popover-animation',
        mouseEnterDelay: 0,
        mouseLeaveDelay: 0.1,
        getPopoverContainer: () => document.body,
        defaultVisible: false,
        arrowPointAtCenter: false,
        autoAdjustOverflow: true,
        destroyPopoverOnHide: false,
        align: undefined,
        onVisibleChange: undefined,
        afterVisibleChange: undefined,
        overlayStyle: {},
        overlayClassName: '',
    };

    popover = null;

    onRefPopover = (popover) => {
        this.popover = popover;
    };

    getPopoverDOMNode() {
        return this.popover.getPopupDomNode();
    }

    onVisibleChange = (visible) => {
        const { onVisibleChange } = this.props;
        if (onVisibleChange) {
            onVisibleChange(visible);
        }
    };

    getPlacements() {
        const { arrowPointAtCenter, autoAdjustOverflow } = this.props;
        return getPlacements({
            arrowPointAtCenter,
            verticalArrowShift: 8,
            autoAdjustOverflow,
        });
    }

    render() {
        const {
            children,
            color,
            raised,
            overlayClassName,
            destroyPopoverOnHide,
            ...other
        } = this.props;
        const className = [`ui-popover-theme-${color}`];
        if (raised) className.push('ui-popover-raised');
        if (overlayClassName) className.push(overlayClassName);
        return (
            <React.Fragment>
                <RcTooltip
                    {...other}
                    getTooltipContainer={this.getPopoverContainer}
                    destroyPopupOnHide={destroyPopoverOnHide}
                    overlayClassName={className.join(' ')}
                    ref={this.onRefPopover}
                    onVisibleChange={this.onVisibleChange}
                    onPopupAlign={this.onPopupAlign}
                    builtinPlacements={this.getPlacements()}
                >
                    {children}
                </RcTooltip>
                <GlobalStyles />
            </React.Fragment>
        );
    }
}
