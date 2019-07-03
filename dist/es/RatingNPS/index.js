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

var styled_1 = require("./styled");
/**
 * @develop
 */


var RatingNPS =
/** @class */
function (_super) {
  __extends(RatingNPS, _super);

  function RatingNPS() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = {
      rateValue: _this.props.rateValue || null,
      isRated: false
    };

    _this.onClick = function (index) {
      var getValue = _this.props.getValue;
      var _a = _this.state,
          isRated = _a.isRated,
          rateValue = _a.rateValue;

      _this.setState({
        rateValue: index,
        isRated: rateValue === index ? !isRated : true
      });

      getValue(index);
    };

    return _this;
  }

  RatingNPS.prototype.render = function () {
    var _this = this;

    var _a = this.state,
        isRated = _a.isRated,
        rateValue = _a.rateValue;
    var _b = this.props,
        minGrade = _b.minGrade,
        maxGrade = _b.maxGrade,
        countOfBoxes = _b.countOfBoxes;
    return react_1.default.createElement(styled_1.Wrapper, null, react_1.default.createElement(styled_1.GradeLine, null, Array(countOfBoxes).slice().map(function (item, index) {
      return react_1.default.createElement(styled_1.Box, {
        key: item,
        countOfBoxes: countOfBoxes,
        isRated: isRated,
        rateValue: rateValue,
        onClick: function onClick() {
          return _this.onClick(index);
        },
        value: index,
        disabled: isRated
      }, index);
    })), react_1.default.createElement(styled_1.GrageRange, null, react_1.default.createElement("span", null, minGrade), react_1.default.createElement("span", null, maxGrade)));
  };

  RatingNPS.propTypes = {
    /**
     * Тултип минимального значения
     */
    minGrade: prop_types_1.default.string,

    /**
     * Тултип максимального значения
     */
    maxGrade: prop_types_1.default.string,

    /**
     * Колчество боксов
     */
    countOfBoxes: prop_types_1.default.number,

    /**
     * Выбранное значение
     */
    rateValue: prop_types_1.default.number,
    getValue: prop_types_1.default.func.isRequired
  };
  RatingNPS.defaultProps = {
    minGrade: 'Маловероятно',
    maxGrade: 'С большой вероятностью',
    countOfBoxes: 11,
    rateValue: 0
  };
  return RatingNPS;
}(react_1.default.Component);

exports.default = RatingNPS;