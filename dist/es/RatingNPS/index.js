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

var styled_1 = require("./styled");

var RatingNPS =
/*#__PURE__*/
function (_react_1$default$Comp) {
  _inherits(RatingNPS, _react_1$default$Comp);

  function RatingNPS() {
    var _this;

    _classCallCheck(this, RatingNPS);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RatingNPS).apply(this, arguments));
    _this.state = {
      rateValue: _this.props.rateValue || null,
      isRated: false
    };

    _this.onClick = function (index) {
      var getValue = _this.props.getValue;
      var _this$state = _this.state,
          isRated = _this$state.isRated,
          rateValue = _this$state.rateValue;

      _this.setState({
        rateValue: index,
        isRated: rateValue === index ? !isRated : true
      });

      getValue(index);
    };

    return _this;
  }

  _createClass(RatingNPS, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          isRated = _this$state2.isRated,
          rateValue = _this$state2.rateValue;
      var _this$props = this.props,
          minGrade = _this$props.minGrade,
          maxGrade = _this$props.maxGrade,
          countOfBoxes = _this$props.countOfBoxes;
      return react_1.default.createElement(styled_1.Wrapper, null, react_1.default.createElement(styled_1.GradeLine, null, _toConsumableArray(Array(countOfBoxes)).map(function (item, index) {
        return react_1.default.createElement(styled_1.Box, {
          key: item,
          countOfBoxes: countOfBoxes,
          isRated: isRated,
          rateValue: rateValue,
          onClick: function onClick() {
            return _this2.onClick(index);
          },
          value: index,
          disabled: isRated
        }, index);
      })), react_1.default.createElement(styled_1.GrageRange, null, react_1.default.createElement("span", null, minGrade), react_1.default.createElement("span", null, maxGrade)));
    }
  }]);

  return RatingNPS;
}(react_1.default.Component);

RatingNPS.defaultProps = {
  minGrade: 'Маловероятно',
  maxGrade: 'С большой вероятностью',
  countOfBoxes: 11,
  rateValue: 0
};
exports.default = RatingNPS;