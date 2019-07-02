import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from '..';
import Ripple, { RIPPLE_DURATION } from '../Ripple';
import {
    StyledButton,
    ButtonText,
    IconWrapper,
} from './styled';


const RIPPLE_COLOR_FOR_DEFAULT = {
    blue: 'blue',
    green: 'green',
    gold: 'gold',
    red: 'red',
    gray: 'gray',
};
const RIPPLE_COLOR_FOR_CONTRASTED = {
    blue: 'lightBlue',
    green: 'lightGreen',
    gold: 'lightGold',
    red: 'lightRed',
    gray: 'lightGray',
};
const RIPPLE_COLOR_FOR_INFO = 'pale';
const SIDE_GUTTERS = ['12', '16', '20', '24', '28', '32', '36', '40', '44', '48'];
/**
 * @develop
 */
export default class Button extends React.Component {
    static propTypes = {
        /**
         * Тэг
         */
        tagName: PropTypes.string,
        /**
         * Текст кнопки
         */
        children: PropTypes.node,
        /**
         * CSS класс для root элемента
         */
        className: PropTypes.string,
        /**
         * Цвет
         */
        color: PropTypes.oneOf(['green', 'blue', 'red', 'gold', 'gray']),
        /**
         * Изменяет отображение кнопки на контрастную
         */
        contrast: PropTypes.bool,
        /**
         * Изменяет отображение кнопки на прозрачную
         */
        hollow: PropTypes.bool,
        /**
         * Изменяет отображение кнопки на второстепенную
         */
        secondary: PropTypes.bool,
        /**
         * Изменяет отображение кнопки на информационную
         */
        info: PropTypes.bool,
        /**
         * Изменяет отображение кнопки на неактивную
         */
        disabled: PropTypes.bool,
        /**
         * Элемент внутри кнопки перед текстом. Обертка для него ограниченна 16х16 пикселей
         */
        icon: PropTypes.node,
        /**
         * Элемент внутри кнопки после текста. Обертка для него ограниченна 16х16 пикселей
         */
        iconPosition: PropTypes.oneOf(['before', 'after']),
        /**
         * Показывает анимацию загрузки
         */
        loading: PropTypes.bool,
        /**
         * Отступы слева и справа
         */
        side: PropTypes.oneOf([
            ...SIDE_GUTTERS,
            ...SIDE_GUTTERS.map(gutter => parseInt(gutter, 10)),
        ]),
        /**
         * Обработчик клика
         */
        onClick: PropTypes.func,
    };

    static defaultProps = {
        tagName: 'button',
        children: '',
        className: '',
        color: 'green',
        contrast: false,
        hollow: false,
        secondary: false,
        info: false,
        disabled: false,
        icon: null,
        iconPosition: 'before',
        side: 12,
        loading: false,
        onClick() {},
    };

    constructor(props) {
        super(props);
        this.state = {
            ripples: [],
        };
        this.rippleCycles = [];
        this.RID = 0;
    }

    componentWillUnmount() {
        this.rippleCycles.forEach(cycle => clearTimeout(cycle));
        this.rippleCycles = [];
    }

    onRippleFinish = (_rid) => {
        const { ripples } = this.state;
        this.setState({ ripples: ripples.filter(({ rid }) => rid !== _rid) });
    };

    onClick = (e) => {
        if (this.props.disabled) return;

        this.initRipple(e);
        this.props.onClick(e);
    };

    getRippleColor() {
        const {
            color,
            contrast,
            info,
            disabled,
        } = this.props;

        switch (true) {
            case disabled:
                return 'silver';
            case contrast:
                return RIPPLE_COLOR_FOR_CONTRASTED[color];
            case info:
                return RIPPLE_COLOR_FOR_INFO;
            default:
                return RIPPLE_COLOR_FOR_DEFAULT[color];
        }
    }

    useRID() {
        this.RID += 1;
        return this.RID;
    }

    initRipple(e) {
        const { hollow, disabled } = this.props;
        const { ripples } = this.state;
        if (hollow || disabled) return;
        const rid = this.useRID();
        const bounding = e.currentTarget.getBoundingClientRect();

        this.setState({
            ripples: [
                ...ripples,
                {
                    rid,
                    top: e.clientY - bounding.top,
                    left: e.clientX - bounding.left,
                },
            ],
        });
        const rippleCountdown = setTimeout(() => this.onRippleFinish(rid), RIPPLE_DURATION);
        this.rippleCycles.push(rippleCountdown);
    }

    renderRipple() {
        const { ripples } = this.state;
        const color = this.getRippleColor();
        return ripples.map(({ rid, top, left }) => (
            <Ripple key={rid} top={top} left={left} color={color} />
        ));
    }

    render() {
        const {
            tagName,
            icon,
            iconPosition,
            loading,
            disabled,
            children,
            ...other
        } = this.props;
        const prependIcon = icon && iconPosition === 'before';
        const appendIcon = icon && iconPosition === 'after';
        return (
            <StyledButton
                as={tagName}
                disabled={disabled || loading}
                {...other}
                onClick={this.onClick}
            >
                {this.renderRipple()}
                {prependIcon && <IconWrapper>{icon}</IconWrapper>}
                {children.length > 0 && (
                    <ButtonText
                        prependIcon={prependIcon}
                        appendIcon={appendIcon}
                    >
                        {loading ? <Spinner /> : children}
                    </ButtonText>
                )}
                {appendIcon && <IconWrapper>{icon}</IconWrapper>}
            </StyledButton>
        );
    }
}
