import { placements as rcPlacements } from 'rc-tooltip/lib/placements';

const autoAdjustOverflowEnabled = {
    adjustX: 1,
    adjustY: 1,
};
const autoAdjustOverflowDisabled = {
    adjustX: 0,
    adjustY: 0,
};
const targetOffset = [0, 0];
const offset = 4;
const defaultArrowWidth = 5;
const defaultHorizontalArrowShift = 12;
const defaultVerticalArrowShift = 12;
const defaultAutoAdjustOverflow = true;

export function getOverflowOptions(autoAdjustOverflow) {
    if (typeof autoAdjustOverflow === 'boolean') {
        return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
    }
    return {
        ...autoAdjustOverflowDisabled,
        ...autoAdjustOverflow,
    };
}

export default function getPlacements(config = {}) {
    const {
        arrowWidth = defaultArrowWidth,
        horizontalArrowShift = defaultHorizontalArrowShift,
        verticalArrowShift = defaultVerticalArrowShift,
        autoAdjustOverflow = defaultAutoAdjustOverflow,
    } = config;
    const placementMap = {
        left: {
            points: ['cr', 'cl'],
            offset: [-offset, 0],
        },
        right: {
            points: ['cl', 'cr'],
            offset: [offset, 0],
        },
        top: {
            points: ['bc', 'tc'],
            offset: [0, -offset],
        },
        bottom: {
            points: ['tc', 'bc'],
            offset: [0, offset],
        },
        topLeft: {
            points: ['bl', 'tc'],
            offset: [-(horizontalArrowShift + arrowWidth), -offset],
        },
        leftTop: {
            points: ['tr', 'cl'],
            offset: [-offset, -(verticalArrowShift + arrowWidth)],
        },
        topRight: {
            points: ['br', 'tc'],
            offset: [horizontalArrowShift + arrowWidth, -offset],
        },
        rightTop: {
            points: ['tl', 'cr'],
            offset: [offset, -(verticalArrowShift + arrowWidth)],
        },
        bottomRight: {
            points: ['tr', 'bc'],
            offset: [horizontalArrowShift + arrowWidth, offset],
        },
        rightBottom: {
            points: ['bl', 'cr'],
            offset: [offset, verticalArrowShift + arrowWidth],
        },
        bottomLeft: {
            points: ['tl', 'bc'],
            offset: [-(horizontalArrowShift + arrowWidth), offset],
        },
        leftBottom: {
            points: ['br', 'cl'],
            offset: [-offset, verticalArrowShift + arrowWidth],
        },
    };
    Object.keys(placementMap).forEach((key) => {
        placementMap[key] = config.arrowPointAtCenter ? {
            ...placementMap[key],
            overflow: getOverflowOptions(autoAdjustOverflow),
            targetOffset,
        } : {
            ...rcPlacements[key],
            overflow: getOverflowOptions(autoAdjustOverflow),
        };
    });
    return placementMap;
}
