import React, { SVGAttributes } from 'react';
export interface Props extends SVGAttributes<SVGElement> {
    children: React.ReactNode;
    size?: string | number;
    style?: object;
}
export declare const sizes: {
    AUTO: string;
    SIZE_8: number;
    SIZE_12: number;
    SIZE_16: number;
    SIZE_20: number;
    SIZE_24: number;
    SIZE_32: number;
};
export default class SvgIcon extends React.PureComponent<Props> {
    static defaultProps: {
        style: {};
        size: string;
    };
    render(): JSX.Element;
}
