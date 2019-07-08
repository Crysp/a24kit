import React from 'react';
export interface Props {
    src: string;
    size: 'large' | 'medium' | 'small';
    round: boolean;
    className: string;
    style: {};
}
/**
 * Avatar
 *
 * @description Компонент автарки
 *
 * @param {string} src Ссылка на картинку
 * @param {'large' | 'medium' | 'small'} size Размер
 * @param {boolean} round Круглая
 * @param {string} className Имя класса
 * @param {object} style Инлайн стиль
 */
export default class Avatar extends React.PureComponent<Props> {
    static defaultProps: {
        src: string;
        size: string;
        round: boolean;
        className: string;
        style: {};
    };
    render(): JSX.Element;
}
