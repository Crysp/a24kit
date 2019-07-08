import React, { MouseEvent, ReactNode } from 'react';
import Spinner from '../Spinner';
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

type ButtonProps = {
    /**
     * Тэг
     */
    tagName: keyof JSX.IntrinsicElements | React.ComponentType<any>
    /**
     * Текст кнопки
     */
    children: ReactNode
    /**
     * CSS класс для root элемента
     */
    className: string
    /**
     * Цвет
     */
    color: string
    /**
     * Изменяет отображение кнопки на контрастную
     */
    contrast: boolean
    /**
     * Изменяет отображение кнопки на прозрачную
     */
    hollow: boolean
    /**
     * Изменяет отображение кнопки на второстепенную
     */
    secondary: boolean
    /**
     * Изменяет отображение кнопки на информационную
     */
    info: boolean
    /**
     * Изменяет отображение кнопки на неактивную
     */
    disabled: boolean
    /**
     * Элемент внутри кнопки перед текстом. Обертка для него ограниченна 16х16 пикселей
     */
    icon: ReactNode
    /**
     * Элемент внутри кнопки после текста. Обертка для него ограниченна 16х16 пикселей
     */
    iconPosition: 'before' | 'after'
    /**
     * Показывает анимацию загрузки
     */
    loading: boolean
    /**
     * Отступы слева и справа
     */
    side: number | string
    /**
     * Обработчик клика
     */
    onClick(e: MouseEvent<HTMLElement>): void
};
type ButtonState = {
    ripples: {
        rid: number
        top: number
        left: number
    }[],
};

/**
 * @develop
 */
export default class Button extends React.Component<ButtonProps, ButtonState> {
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

    readonly state = {
        ripples: [],
    };

    rippleCycles: number[] = [];

    RID = 0;

    componentWillUnmount() {
        this.rippleCycles.forEach(cycle => clearTimeout(cycle));
        this.rippleCycles = [];
    }

    onRippleFinish = (_rid: number) => {
        const { ripples } = this.state;
        this.setState({ ripples: ripples.filter(({ rid }) => rid !== _rid) });
    };

    private onClick = (e: MouseEvent<HTMLElement>) => {
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

    initRipple(e: MouseEvent<HTMLElement>) {
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
                {children && (
                    <ButtonText prependIcon={!!prependIcon} appendIcon={!!appendIcon}>
                        {loading ? <Spinner /> : children}
                    </ButtonText>
                )}
                {appendIcon && <IconWrapper>{icon}</IconWrapper>}
            </StyledButton>
        );
    }
}
