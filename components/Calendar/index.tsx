import React from 'react';
import moment from '../lib/moment';
import { ArrowLeft, ArrowRight } from '../Icon';
import Day from './Day';
import {
    Wrapper,
    Header,
    Nav,
    SwitchButton,
    Month,
    WeekDays,
    WeekDay,
    Weeks,
    DayContainer,
} from './styled';

export interface Props {
    weekOffset: number
    min: moment.Moment
    selected: moment.Moment
    dateComponent(): React.ReactElement
    onSelect(date: moment.Moment): void
}

const DAYS_IN_WEEK = 7;
const SATURDAY = 6;
/**
 * @version 1.0.0
 */
export default class Calendar extends React.Component<Props> {
    static defaultProps = {
        weekOffset: 1,
        min: moment(0),
        selected: moment().startOf('day'),
        onSelect() {},
        dateComponent: undefined,
    };

    now = moment().startOf('day');

    state = {
        dates: this.getDates(this.props.selected),
        selected: this.props.selected,
    };

    /**
     * Формирует список всех дат в выбранном месяце для отрисовки сетки календаря
     * @param selected - выбранная дата
     * @returns {*} - массив дат
     */
    getDates(selected) {
        // часть дней из прошлого месяца для заполнения сетки календаря
        const previousDates = this.getPreviousMonthDates(selected);
        // все дни выбранного месяца
        const selectedDates = this.getSelectedMonthDates(selected);
        // часть дней из следующего месяца для заполнения сетки календаря
        const nextDates = this.getNextMonthDates(selected);
        return [...previousDates, ...selectedDates, ...nextDates];
    }

    /**
     * Возвращает первый день недели
     * @param selected - выбранная дата
     * @returns {number}
     */
    getFirstDayOfWeek(selected) {
        const { weekOffset } = this.props;
        const originDay = selected.clone().startOf('month').day();
        const offset = weekOffset % SATURDAY;
        return originDay ? originDay - offset : SATURDAY + 1 - offset;
    }

    /**
     * Формирует список дат из предыдущего месяца для заполнения сетки
     * @param selected - выбранная дата
     * @returns {Array}
     */
    getPreviousMonthDates(selected) {
        // номер первого дня недели в выбранном месяце
        const firstDayOfWeek = this.getFirstDayOfWeek(selected);
        // предыдущий месяц
        const previousMonth = selected.clone().subtract(1, 'month').startOf('month');
        // количество дней в преыдущем месяце
        let daysCount = previousMonth.daysInMonth();
        const dates: any[] = [];
        for (let i = 0; i < firstDayOfWeek; i += 1) {
            dates.push(previousMonth.clone().set('date', daysCount -= 1));
        }
        dates.reverse();
        return dates;
    }

    /**
     * Формирует список дат из выбранного месяца для заполнения сетки
     * @param selected - выбранная дата
     * @returns {Array}
     */
    /* eslint class-methods-use-this: 0 */
    getSelectedMonthDates(selected) {
        const selectedMonth = selected.clone().startOf('month');
        // количество дней в выбранном месяце
        const daysCount = selectedMonth.daysInMonth();
        const dates: any[] = [];
        for (let i = 1; i <= daysCount; i += 1) {
            dates.push(selectedMonth.clone().set('date', i));
        }
        return dates;
    }

    /**
     * Формирует список дат из следующего месяца для заполнения сетки
     * @param selected - выбранная дата
     * @returns {Array}
     */
    getNextMonthDates(selected) {
        // номер первого дня недели в выбранном месяце
        const firstDayOfWeek = this.getFirstDayOfWeek(selected);
        // следующий месяц
        const nextMonth = selected.clone().add(1, 'month').startOf('month');
        // количество дней в выбранном месяце
        const daysCount = selected.daysInMonth();
        // количество полных недель в сетке
        const weeks = Math.ceil((daysCount + firstDayOfWeek) / DAYS_IN_WEEK);
        const dates: any[] = [];
        for (let i = 1; i <= (weeks * DAYS_IN_WEEK) - daysCount - firstDayOfWeek; i += 1) {
            dates.push(nextMonth.clone().set('date', i));
        }
        return dates;
    }

    onSelectPreviousMonth = () => {
        const { selected } = this.state;
        const previous = selected.clone().subtract(1, 'month');
        this.setState({
            selected: previous,
            dates: this.getDates(previous),
        });
    };

    onSelectNextMonth = () => {
        const { selected } = this.state;
        const next = selected.clone().add(1, 'month');
        this.setState({
            selected: next,
            dates: this.getDates(next),
        });
    };

    isPreviousMonthDisabled() {
        const { min } = this.props;
        const { selected } = this.state;
        return selected.clone()
            .subtract(1, 'month')
            .startOf('month')
            .isBefore(min.startOf('month'));
    }

    render() {
        const {
            weekOffset,
            min,
            dateComponent,
            onSelect,
        } = this.props;
        const { dates, selected } = this.state;
        const weekDays = [
            ...moment.weekdaysMin().slice(weekOffset),
            ...moment.weekdaysMin().slice(0, weekOffset),
        ];
        return (
            <Wrapper>
                <Header>
                    <Nav>
                        <SwitchButton
                            onClick={this.onSelectPreviousMonth}
                            disabled={this.isPreviousMonthDisabled()}
                        >
                            <ArrowLeft />
                        </SwitchButton>
                        <Month>
                            {moment.months()[selected.month()]}
                            &nbsp;
                            {selected.year()}
                        </Month>
                        <SwitchButton
                            onClick={this.onSelectNextMonth}
                        >
                            <ArrowRight />
                        </SwitchButton>
                    </Nav>
                    <WeekDays>
                        {weekDays.map(weekDay => <WeekDay key={weekDay}>{weekDay}</WeekDay>)}
                    </WeekDays>
                </Header>
                <Weeks>
                    {dates.map(date => (
                        <DayContainer key={date.toISOString()}>
                            {dateComponent ? React.createElement(dateComponent, { date }) : (
                                <Day
                                    value={date.date()}
                                    selectable={
                                        moment(date)
                                            .startOf('day')
                                            .isSameOrAfter(moment(min).startOf('day'))
                                    }
                                    onClick={() => onSelect(date)}
                                />
                            )}
                        </DayContainer>
                    ))}
                </Weeks>
            </Wrapper>
        );
    }
}
