"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var placements_1 = require("rc-tooltip/lib/placements");

var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var targetOffset = [0, 0];
var offset = 4;
var defaultArrowWidth = 5;
var defaultHorizontalArrowShift = 12;
var defaultVerticalArrowShift = 12;
var defaultAutoAdjustOverflow = true;

function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }

  return Object.assign({}, autoAdjustOverflowDisabled, autoAdjustOverflow);
}

exports.getOverflowOptions = getOverflowOptions;

function getPlacements() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$arrowWidth = config.arrowWidth,
      arrowWidth = _config$arrowWidth === void 0 ? defaultArrowWidth : _config$arrowWidth,
      _config$horizontalArr = config.horizontalArrowShift,
      horizontalArrowShift = _config$horizontalArr === void 0 ? defaultHorizontalArrowShift : _config$horizontalArr,
      _config$verticalArrow = config.verticalArrowShift,
      verticalArrowShift = _config$verticalArrow === void 0 ? defaultVerticalArrowShift : _config$verticalArrow,
      _config$autoAdjustOve = config.autoAdjustOverflow,
      autoAdjustOverflow = _config$autoAdjustOve === void 0 ? defaultAutoAdjustOverflow : _config$autoAdjustOve;
  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-offset, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [offset, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -offset]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, offset]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -offset]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-offset, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -offset]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [offset, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, offset]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [offset, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), offset]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-offset, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function (key) {
    placementMap[key] = config.arrowPointAtCenter ? Object.assign({}, placementMap[key], {
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset: targetOffset
    }) : Object.assign({}, placements_1.placements[key], {
      overflow: getOverflowOptions(autoAdjustOverflow)
    });
  });
  return placementMap;
}

exports.default = getPlacements;