import React from 'react';
import RcTooltip from 'rc-tooltip';
import getPlacements from './placements';
import GlobalStyles from './styled';

export interface Props {
    trigger: 'click' | 'hover' | 'focus' | 'contextMenu'[]
    children: React.ReactNode
    defaultVisible: boolean
    visible: boolean
    placement: (
        'left' | 'right' | 'top' | 'bottom' | 'topLeft'
        | 'topRight' | 'bottomLeft' | 'bottomRight'
    )
    color: 'white' | 'red' | 'blue'
    raised: boolean
    transitionName: string | object
    onVisibleChange(visible: boolean): void
    afterVisibleChange(): void
    overlay: React.Component
    overlayStyle: object
    overlayClassName: string
    prefixCls: string
    mouseEnterDelay: number
    mouseLeaveDelay: number
    getPopoverContainer(): HTMLElement
    destroyPopoverOnHide: boolean
    align: object
    arrowPointAtCenter: boolean
    autoAdjustOverflow: boolean
}

/**
 * `Popover` сработает только если у детей есть
 * события `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick`.
 */

export default class Popover extends React.Component<Props> {
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

    popover = React.createRef<RcTooltip>();

    getPopoverDOMNode() {
        return this.popover.current.getPopupDomNode();
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
            getPopoverContainer,
            ...other
        } = this.props;
        const className = [`ui-popover-theme-${color}`];
        if (raised) className.push('ui-popover-raised');
        if (overlayClassName) className.push(overlayClassName);
        return (
            <React.Fragment>
                <RcTooltip
                    {...other}
                    getTooltipContainer={getPopoverContainer}
                    destroyPopupOnHide={destroyPopoverOnHide}
                    overlayClassName={className.join(' ')}
                    ref={this.popover}
                    onVisibleChange={this.onVisibleChange}
                    builtinPlacements={this.getPlacements()}
                >
                    {children}
                </RcTooltip>
                <GlobalStyles />
            </React.Fragment>
        );
    }
}
