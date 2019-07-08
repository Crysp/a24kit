import React from 'react';
import classNames from 'classnames';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import RcDialog from 'rc-dialog';
import Button from '../Button';
import GlobalStyles from './styled';

export interface Props {
    onOk(e: React.SyntheticEvent): void
    onCancel(e: React.SyntheticEvent): void
    okText: React.ReactNode
    cancelText: React.ReactNode
    okColor: string
    width: number | undefined
    okLoading: boolean
    visible: boolean
    footer: React.ReactNode
    title: React.ReactNode
    closable: boolean
    verticalCentered: boolean
    extendedContent: boolean
    className: string
    wrapClassName: string
}

/**
 * Модальное окно
 * @develop
 */
export default class Modal extends React.Component<Props> {
    static defaultProps = {
        okColor: 'blue',
        width: 520,
        okLoading: false,
        visible: false,
        verticalCentered: false,
        extendedContent: false,
        onOk() {},
        onCancel() {},
        okText: undefined,
        cancelText: undefined,
        footer: undefined,
        title: undefined,
        closable: true,
        className: '',
        wrapClassName: '',
    };

    mousePosition: undefined | { x: number, y: number } = undefined;

    mousePositionEventBinded: boolean | null = null;

    componentDidMount() {
        if (this.mousePositionEventBinded) {
            return;
        }
        addEventListener(document.documentElement, 'click', (e) => {
            this.mousePosition = {
                x: e.pageX,
                y: e.pageY,
            };
            setTimeout(() => {
                this.mousePosition = undefined;
            }, 100);
        });
        this.mousePositionEventBinded = true;
    }

    onCancel = (e: React.SyntheticEvent) => {
        const { onCancel } = this.props;
        if (onCancel) {
            onCancel(e);
        }
    };

    onOk = (e: React.SyntheticEvent) => {
        const { onOk } = this.props;
        if (onOk) {
            onOk(e);
        }
    };

    renderFooter() {
        const {
            okText,
            okColor,
            cancelText,
            okLoading,
        } = this.props;
        return (
            <div>
                <Button
                    color="gray"
                    side={40}
                    onClick={this.onCancel}
                >
                    {cancelText || 'Отмена'}
                </Button>
                <Button
                    color={okColor}
                    side={40}
                    onClick={this.onOk}
                    loading={okLoading}
                >
                    {okText || 'Ок'}
                </Button>
            </div>
        );
    }

    render() {
        const {
            footer,
            visible,
            wrapClassName,
            verticalCentered,
            extendedContent,
            ...other
        } = this.props;
        const defaultFooter = this.renderFooter();

        return (
            <React.Fragment>
                <RcDialog
                    {...other}
                    prefixCls="ui-modal"
                    transitionName="ui-modal-zoom"
                    maskTransitionName="ui-modal-fade"
                    wrapClassName={classNames(
                        wrapClassName,
                        {
                            'ui-modal-vertical-centered': verticalCentered,
                            'ui-modal-extended-content': extendedContent,
                        },
                    )}
                    footer={typeof footer === 'undefined' ? defaultFooter : footer}
                    visible={visible}
                    mousePosition={this.mousePosition}
                    onClose={this.onCancel}
                />
                <GlobalStyles />
            </React.Fragment>
        );
    }
}
