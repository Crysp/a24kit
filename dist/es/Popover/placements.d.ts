interface Config {
    arrowWidth?: number;
    horizontalArrowShift?: number;
    verticalArrowShift?: number;
    autoAdjustOverflow?: boolean;
    arrowPointAtCenter?: boolean;
}
export declare function getOverflowOptions(autoAdjustOverflow: any): any;
export default function getPlacements(config?: Config): {
    left: {
        points: string[];
        offset: number[];
    };
    right: {
        points: string[];
        offset: number[];
    };
    top: {
        points: string[];
        offset: number[];
    };
    bottom: {
        points: string[];
        offset: number[];
    };
    topLeft: {
        points: string[];
        offset: number[];
    };
    leftTop: {
        points: string[];
        offset: number[];
    };
    topRight: {
        points: string[];
        offset: number[];
    };
    rightTop: {
        points: string[];
        offset: number[];
    };
    bottomRight: {
        points: string[];
        offset: number[];
    };
    rightBottom: {
        points: string[];
        offset: number[];
    };
    bottomLeft: {
        points: string[];
        offset: number[];
    };
    leftBottom: {
        points: string[];
        offset: number[];
    };
};
export {};
