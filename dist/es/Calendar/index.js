"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(require("react"));

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
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(Calendar, _react_1$default$Comp);

  function Calendar() {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).apply(this, arguments));
    _this.now = moment_1.default().startOf('day');
    _this.state = {
      dates: _this.getDates(_this.props.selected),
      selected: _this.props.selected
    };

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

    return _this;
  }
  /**
   * Формирует список всех дат в выбранном месяце для отрисовки сетки календаря
   * @param selected - выбранная дата
   * @returns {*} - массив дат
   */


  _createClass(Calendar, [{
    key: "getDates",
    value: function getDates(selected) {
      // часть дней из прошлого месяца для заполнения сетки календаря
      var previousDates = this.getPreviousMonthDates(selected); // все дни выбранного месяца

      var selectedDates = this.getSelectedMonthDates(selected); // часть дней из следующего месяца для заполнения сетки календаря

      var nextDates = this.getNextMonthDates(selected);
      return [].concat(_toConsumableArray(previousDates), _toConsumableArray(selectedDates), _toConsumableArray(nextDates));
    }
    /**
     * Возвращает первый день недели
     * @param selected - выбранная дата
     * @returns {number}
     */

  }, {
    key: "getFirstDayOfWeek",
    value: function getFirstDayOfWeek(selected) {
      var weekOffset = this.props.weekOffset;
      var originDay = selected.clone().startOf('month').day();
      var offset = weekOffset % SATURDAY;
      return originDay ? originDay - offset : SATURDAY + 1 - offset;
    }
    /**
     * Формирует список дат из предыдущего месяца для заполнения сетки
     * @param selected - выбранная дата
     * @returns {Array}
     */

  }, {
    key: "getPreviousMonthDates",
    value: function getPreviousMonthDates(selected) {
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
    }
    /**
     * Формирует список дат из выбранного месяца для заполнения сетки
     * @param selected - выбранная дата
     * @returns {Array}
     */

    /* eslint class-methods-use-this: 0 */

  }, {
    key: "getSelectedMonthDates",
    value: function getSelectedMonthDates(selected) {
      var selectedMonth = selected.clone().startOf('month'); // количество дней в выбранном месяце

      var daysCount = selectedMonth.daysInMonth();
      var dates = [];

      for (var i = 1; i <= daysCount; i += 1) {
        dates.push(selectedMonth.clone().set('date', i));
      }

      return dates;
    }
    /**
     * Формирует список дат из следующего месяца для заполнения сетки
     * @param selected - выбранная дата
     * @returns {Array}
     */

  }, {
    key: "getNextMonthDates",
    value: function getNextMonthDates(selected) {
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
    }
  }, {
    key: "isPreviousMonthDisabled",
    value: function isPreviousMonthDisabled() {
      var min = this.props.min;
      var selected = this.state.selected;
      return selected.clone().subtract(1, 'month').startOf('month').isBefore(min.startOf('month'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          weekOffset = _this$props.weekOffset,
          min = _this$props.min,
          dateComponent = _this$props.dateComponent,
          onSelect = _this$props.onSelect;
      var _this$state = this.state,
          dates = _this$state.dates,
          selected = _this$state.selected;
      var weekDays = [].concat(_toConsumableArray(moment_1.default.weekdaysMin().slice(weekOffset)), _toConsumableArray(moment_1.default.weekdaysMin().slice(0, weekOffset)));
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
          selectable: moment_1.default(date).startOf('day').isSameOrAfter(moment_1.default(min).startOf('day')),
          onClick: function onClick() {
            return onSelect(date);
          }
        }));
      })));
    }
  }]);

  return Calendar;
}(react_1.default.Component);

Calendar.defaultProps = {
  weekOffset: 1,
  min: moment_1.default(0),
  selected: moment_1.default().startOf('day'),
  onSelect: function onSelect() {},
  dateComponent: undefined
};
exports.default = Calendar;