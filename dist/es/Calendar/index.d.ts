import React from 'react';
import moment from '../lib/moment';
export interface Props {
    weekOffset: number;
    min: moment.Moment;
    selected: moment.Moment;
    dateComponent(): React.ReactElement;
    onSelect(date: moment.Moment): void;
}
/**
 * @version 1.0.0
 */
export default class Calendar extends React.Component<Props> {
    static defaultProps: {
        weekOffset: number;
        min: moment.Moment;
        selected: moment.Moment;
        onSelect(): void;
        dateComponent: undefined;
    };
    now: moment.Moment;
    state: {
        dates: any[];
        selected: moment.Moment;
    };
    /**
     * Формирует список всех дат в выбранном месяце для отрисовки сетки календаря
     * @param selected - выбранная дата
     * @returns {*} - массив дат
     */
    getDates(selected: any): any[];
    /**
     * Возвращает первый день недели
     * @param selected - выбранная дата
     * @returns {number}
     */
    getFirstDayOfWeek(selected: any): number;
    /**
     * Формирует список дат из предыдущего месяца для заполнения сетки
     * @param selected - выбранная дата
     * @returns {Array}
     */
    getPreviousMonthDates(selected: any): any[];
    /**
     * Формирует список дат из выбранного месяца для заполнения сетки
     * @param selected - выбранная дата
     * @returns {Array}
     */
    getSelectedMonthDates(selected: any): any[];
    /**
     * Формирует список дат из следующего месяца для заполнения сетки
     * @param selected - выбранная дата
     * @returns {Array}
     */
    getNextMonthDates(selected: any): any[];
    onSelectPreviousMonth: () => void;
    onSelectNextMonth: () => void;
    isPreviousMonthDisabled(): boolean;
    render(): JSX.Element;
}
