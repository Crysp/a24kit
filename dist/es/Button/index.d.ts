import React, { MouseEvent, ReactNode } from 'react';
declare type ButtonProps = {
    /**
     * Тэг
     */
    tagName: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    /**
     * Текст кнопки
     */
    children: ReactNode;
    /**
     * CSS класс для root элемента
     */
    className: string;
    /**
     * Цвет
     */
    color: string;
    /**
     * Изменяет отображение кнопки на контрастную
     */
    contrast: boolean;
    /**
     * Изменяет отображение кнопки на прозрачную
     */
    hollow: boolean;
    /**
     * Изменяет отображение кнопки на второстепенную
     */
    secondary: boolean;
    /**
     * Изменяет отображение кнопки на информационную
     */
    info: boolean;
    /**
     * Изменяет отображение кнопки на неактивную
     */
    disabled: boolean;
    /**
     * Элемент внутри кнопки перед текстом. Обертка для него ограниченна 16х16 пикселей
     */
    icon: ReactNode;
    /**
     * Элемент внутри кнопки после текста. Обертка для него ограниченна 16х16 пикселей
     */
    iconPosition: 'before' | 'after';
    /**
     * Показывает анимацию загрузки
     */
    loading: boolean;
    /**
     * Отступы слева и справа
     */
    side: number | string;
    /**
     * Обработчик клика
     */
    onClick(e: MouseEvent<HTMLElement>): void;
};
declare type ButtonState = {
    ripples: {
        rid: number;
        top: number;
        left: number;
    }[];
};
/**
 * @develop
 */
export default class Button extends React.Component<ButtonProps, ButtonState> {
    static defaultProps: {
        tagName: string;
        children: string;
        className: string;
        color: string;
        contrast: boolean;
        hollow: boolean;
        secondary: boolean;
        info: boolean;
        disabled: boolean;
        icon: null;
        iconPosition: string;
        side: number;
        loading: boolean;
        onClick(): void;
    };
    readonly state: {
        ripples: never[];
    };
    rippleCycles: number[];
    RID: number;
    componentWillUnmount(): void;
    onRippleFinish: (_rid: number) => void;
    private onClick;
    getRippleColor(): any;
    useRID(): number;
    initRipple(e: MouseEvent<HTMLElement>): void;
    renderRipple(): JSX.Element[];
    render(): JSX.Element;
}
export {};
