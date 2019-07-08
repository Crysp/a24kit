import React from 'react';
export interface Props {
    minGrade: string;
    maxGrade: string;
    countOfBoxes: number;
    rateValue: number;
    getValue(index: number): void;
}
export default class RatingNPS extends React.Component<Props> {
    static defaultProps: {
        minGrade: string;
        maxGrade: string;
        countOfBoxes: number;
        rateValue: number;
    };
    state: {
        rateValue: number | null;
        isRated: boolean;
    };
    onClick: (index: number) => void;
    render(): JSX.Element;
}
