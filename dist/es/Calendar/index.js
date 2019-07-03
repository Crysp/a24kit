"use strict";

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

var prop_types_1 = __importDefault(require("prop-types"));

var moment_1 = __importDefault(require("../lib/moment"));

var Icon_1 = require("../Icon");

var Day_1 = __importDefault(require("./Day"));

var styled_1 = require("./styled");

var DAYS_IN_WEEK = 7;
var SATURDAY = 6;
var SUNDAY = 0;
/**
 * @version 1.0.0
 */

var Calendar =
/** @class */
function (_super) {
  __extends(Calendar, _super);

  function Calendar(props) {
    var _this = _super.call(this, props) || this;

    _this.onSelectPreviousMonth = function () {
      var selected = _this.state.selected;
      var previous = selected.clone().subtract(1, 'month');

      _this.setState({
        selected: previous,
        dates: _this.getDates(previous)
      });
    };

    _this.onSelectNextMonth = function () {
      var selected = _this.state.selected;
      var next = selected.clone().add(1, 'month');

      _this.setState({
        selected: next,
        dates: _this.getDates(next)
      });
    };

    _this.now = moment_1.default().startOf('day');
    _this.state = {
      dates: _this.getDates(props.selected),
      selected: props.selected
    };
    return _this;
  }
  /**
   * Формирует список всех дат в выбранном месяце для отрисовки сетки календаря
   * @param selected - выбранная дата
   * @returns {*} - массив дат
   */


  Calendar.prototype.getDates = function (selected) {
    // часть дней из прошлого месяца для заполнения сетки календаря
    var previousDates = this.getPreviousMonthDates(selected); // все дни выбранного месяца

    var selectedDates = this.getSelectedMonthDates(selected); // часть дней из следующего месяца для заполнения сетки календаря

    var nextDates = this.getNextMonthDates(selected);
    return previousDates.concat(selectedDates, nextDates);
  };
  /**
   * Возвращает первый день недели
   * @param selected - выбранная дата
   * @returns {number}
   */


  Calendar.prototype.getFirstDayOfWeek = function (selected) {
    var weekOffset = this.props.weekOffset;
    var originDay = selected.clone().startOf('month').day();
    var offset = weekOffset % SATURDAY;
    return originDay ? originDay - offset : SATURDAY + 1 - offset;
  };
  /**
   * Формирует список дат из предыдущего месяца для заполнения сетки
   * @param selected - выбранная дата
   * @returns {Array}
   */


  Calendar.prototype.getPreviousMonthDates = function (selected) {
    // номер первого дня недели в выбранном месяце
    var firstDayOfWeek = this.getFirstDayOfWeek(selected); // предыдущий месяц

    var previousMonth = selected.clone().subtract(1, 'month').startOf('month'); // количество дней в преыдущем месяце

    var daysCount = previousMonth.daysInMonth();
    var dates = [];

    for (var i = 0; i < firstDayOfWeek; i += 1) {
      dates.push(previousMonth.clone().set('date', daysCount -= 1));
    }

    dates.reverse();
    return dates;
  };
  /**
   * Формирует список дат из выбранного месяца для заполнения сетки
   * @param selected - выбранная дата
   * @returns {Array}
   */

  /* eslint class-methods-use-this: 0 */


  Calendar.prototype.getSelectedMonthDates = function (selected) {
    var selectedMonth = selected.clone().startOf('month'); // количество дней в выбранном месяце

    var daysCount = selectedMonth.daysInMonth();
    var dates = [];

    for (var i = 1; i <= daysCount; i += 1) {
      dates.push(selectedMonth.clone().set('date', i));
    }

    return dates;
  };
  /**
   * Формирует список дат из следующего месяца для заполнения сетки
   * @param selected - выбранная дата
   * @returns {Array}
   */


  Calendar.prototype.getNextMonthDates = function (selected) {
    // номер первого дня недели в выбранном месяце
    var firstDayOfWeek = this.getFirstDayOfWeek(selected); // следующий месяц

    var nextMonth = selected.clone().add(1, 'month').startOf('month'); // количество дней в выбранном месяце

    var daysCount = selected.daysInMonth(); // количество полных недель в сетке

    var weeks = Math.ceil((daysCount + firstDayOfWeek) / DAYS_IN_WEEK);
    var dates = [];

    for (var i = 1; i <= weeks * DAYS_IN_WEEK - daysCount - firstDayOfWeek; i += 1) {
      dates.push(nextMonth.clone().set('date', i));
    }

    return dates;
  };

  Calendar.prototype.isPreviousMonthDisabled = function () {
    var min = this.props.min;
    var selected = this.state.selected;
    return selected.clone().subtract(1, 'month').startOf('month').isBefore(min.startOf('month'));
  };

  Calendar.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        weekOffset = _a.weekOffset,
        min = _a.min,
        dateComponent = _a.dateComponent,
        onSelect = _a.onSelect;
    var _b = this.state,
        dates = _b.dates,
        selected = _b.selected;
    var weekDays = moment_1.default.weekdaysMin().slice(weekOffset).concat(moment_1.default.weekdaysMin().slice(0, weekOffset));
    return react_1.default.createElement(styled_1.Wrapper, null, react_1.default.createElement(styled_1.Header, null, react_1.default.createElement(styled_1.Nav, null, react_1.default.createElement(styled_1.SwitchButton, {
      onClick: this.onSelectPreviousMonth,
      disabled: this.isPreviousMonthDisabled()
    }, react_1.default.createElement(Icon_1.ArrowLeft, null)), react_1.default.createElement(styled_1.Month, null, moment_1.default.months()[selected.month()], "\xA0", selected.year()), react_1.default.createElement(styled_1.SwitchButton, {
      onClick: this.onSelectNextMonth
    }, react_1.default.createElement(Icon_1.ArrowRight, null))), react_1.default.createElement(styled_1.WeekDays, null, weekDays.map(function (weekDay) {
      return react_1.default.createElement(styled_1.WeekDay, {
        key: weekDay
      }, weekDay);
    }))), react_1.default.createElement(styled_1.Weeks, null, dates.map(function (date) {
      return react_1.default.createElement(styled_1.DayContainer, {
        key: date.toISOString()
      }, dateComponent ? react_1.default.createElement(dateComponent, {
        date: date
      }) : react_1.default.createElement(Day_1.default, {
        value: date.date(),
        current: date.startOf('day').isSame(_this.now),
        past: date.startOf('day').isBefore(_this.now),
        weekEnd: [SATURDAY, SUNDAY].indexOf(date.day()) !== -1,
        selectable: moment_1.default(date).startOf('day').isSameOrAfter(moment_1.default(min).startOf('day')),
        onClick: function onClick() {
          return onSelect(date);
        }
      }));
    })));
  };

  Calendar.propTypes = {
    /**
     * Смещение первого дня недели
     */
    weekOffset: prop_types_1.default.number,

    /**
     * Минимальная возможная дата для выбора
     */
    min: prop_types_1.default.shape(),

    /**
     * Выбранная дата (объект moment.js)
     */
    selected: prop_types_1.default.shape(),

    /**
     * Рисует кастомную дату
     */
    dateComponent: prop_types_1.default.func,

    /**
     * Обработчик выбора даты
     */
    onSelect: prop_types_1.default.func
  };
  Calendar.defaultProps = {
    weekOffset: 1,
    min: moment_1.default(0),
    selected: moment_1.default().startOf('day'),
    onSelect: function onSelect() {},
    dateComponent: undefined
  };
  return Calendar;
}(react_1.default.Component);

exports.default = Calendar;