import React from 'react';
export interface Props {
    onOk(e: React.SyntheticEvent): void;
    onCancel(e: React.SyntheticEvent): void;
    okText: React.ReactNode;
    cancelText: React.ReactNode;
    okColor: string;
    width: number | undefined;
    okLoading: boolean;
    visible: boolean;
    footer: React.ReactNode;
    title: React.ReactNode;
    closable: boolean;
    verticalCentered: boolean;
    extendedContent: boolean;
    className: string;
    wrapClassName: string;
}
/**
 * Модальное окно
 * @develop
 */
export default class Modal extends React.Component<Props> {
    static defaultProps: {
        okColor: string;
        width: number;
        okLoading: boolean;
        visible: boolean;
        verticalCentered: boolean;
        extendedContent: boolean;
        onOk(): void;
        onCancel(): void;
        okText: undefined;
        cancelText: undefined;
        footer: undefined;
        title: undefined;
        closable: boolean;
        className: string;
        wrapClassName: string;
    };
    mousePosition: undefined | {
        x: number;
        y: number;
    };
    mousePositionEventBinded: boolean | null;
    componentDidMount(): void;
    onCancel: (e: React.SyntheticEvent<Element, Event>) => void;
    onOk: (e: React.SyntheticEvent<Element, Event>) => void;
    renderFooter(): JSX.Element;
    render(): JSX.Element;
}
