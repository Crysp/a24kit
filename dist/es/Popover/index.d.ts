import React from 'react';
export interface Props {
    trigger: 'click' | 'hover' | 'focus' | 'contextMenu'[];
    children: React.ReactNode;
    defaultVisible: boolean;
    visible: boolean;
    placement: 'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
    color: 'white' | 'red' | 'blue';
    raised: boolean;
    transitionName: string | object;
    onVisibleChange(visible: boolean): void;
    afterVisibleChange(): void;
    overlay: React.Component;
    overlayStyle: object;
    overlayClassName: string;
    prefixCls: string;
    mouseEnterDelay: number;
    mouseLeaveDelay: number;
    getPopoverContainer(): HTMLElement;
    destroyPopoverOnHide: boolean;
    align: object;
    arrowPointAtCenter: boolean;
    autoAdjustOverflow: boolean;
}
/**
 * `Popover` сработает только если у детей есть
 * события `onMouseEnter`, `onMouseLeave`, `onFocus`, `onClick`.
 */
export default class Popover extends React.Component<Props> {
    static defaultProps: {
        trigger: string[];
        prefixCls: string;
        placement: string;
        color: string;
        raised: boolean;
        transitionName: string;
        mouseEnterDelay: number;
        mouseLeaveDelay: number;
        getPopoverContainer: () => HTMLElement;
        defaultVisible: boolean;
        arrowPointAtCenter: boolean;
        autoAdjustOverflow: boolean;
        destroyPopoverOnHide: boolean;
        align: undefined;
        onVisibleChange: undefined;
        afterVisibleChange: undefined;
        overlayStyle: {};
        overlayClassName: string;
    };
    popover: React.RefObject<any>;
    getPopoverDOMNode(): any;
    onVisibleChange: (visible: any) => void;
    getPlacements(): {
        left: {
            points: string[];
            offset: number[];
        };
        right: {
            points: string[];
            offset: number[];
        };
        top: {
            points: string[];
            offset: number[];
        };
        bottom: {
            points: string[];
            offset: number[];
        };
        topLeft: {
            points: string[];
            offset: number[];
        };
        leftTop: {
            points: string[];
            offset: number[];
        };
        topRight: {
            points: string[];
            offset: number[];
        };
        rightTop: {
            points: string[];
            offset: number[];
        };
        bottomRight: {
            points: string[];
            offset: number[];
        };
        rightBottom: {
            points: string[];
            offset: number[];
        };
        bottomLeft: {
            points: string[];
            offset: number[];
        };
        leftBottom: {
            points: string[];
            offset: number[];
        };
    };
    render(): JSX.Element;
}
