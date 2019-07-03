import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import RcDialog from 'rc-dialog';
import Button from '../Button';
import GlobalStyles from './styled';


/**
 * Модальное окно
 * @develop
 */
export default class Modal extends React.Component {
    static propTypes = {
        /**
         * Колбек на подтверждение
         */
        onOk: PropTypes.func,
        /**
         * Колбек на отмену
         */
        onCancel: PropTypes.func,
        /**
         * Текст для кнопки на положительное действие
         */
        okText: PropTypes.node,
        /**
         * Текст для кнопки на отмену
         */
        cancelText: PropTypes.node,
        /**
         * Цвет положительной кнопки
         */
        okColor: PropTypes.string,
        /**
         * Ширина модального окна
         */
        width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        /**
         * Индикатор загрузки на положительном действии
         */
        okLoading: PropTypes.bool,
        /**
         * Видимость окна
         */
        visible: PropTypes.bool,
        /**
         * Футер модального окна
         */
        footer: PropTypes.node,
        /**
         * Название
         */
        title: PropTypes.node,
        /**
         * Видимость кнопки (х) для закрытия окна
         */
        closable: PropTypes.bool,
        /**
         * Отцентровано по вертикали
         */
        verticalCentered: PropTypes.bool,
        /**
         * Убирает отступы body, footer
         */
        extendedContent: PropTypes.bool,
        /**
         * Отцентровано по вертикали
         */
        className: PropTypes.string,
        /**
         * Класс для обертки
         */
        wrapClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    };

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

    mousePosition = {};

    mousePositionEventBinded = null;

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
                this.mousePosition = null;
            }, 100);
        });
        this.mousePositionEventBinded = true;
    }

    onCancel = (e) => {
        const { onCancel } = this.props;
        if (onCancel) {
            onCancel(e);
        }
    };

    onOk = (e) => {
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
