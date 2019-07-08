import React from 'react';
import {
    Wrapper,
    GradeLine,
    GrageRange,
    Box,
} from './styled';

export interface Props {
    minGrade: string
    maxGrade: string
    countOfBoxes: number
    rateValue: number
    getValue(index: number): void
}

export default class RatingNPS extends React.Component<Props> {
    static defaultProps = {
        minGrade: 'Маловероятно',
        maxGrade: 'С большой вероятностью',
        countOfBoxes: 11,
        rateValue: 0,
    };

    state = {
        rateValue: this.props.rateValue || null,
        isRated: false,
    };

    onClick = (index: number) => {
        const { getValue } = this.props;
        const {
            isRated,
            rateValue,
        } = this.state;
        this.setState({
            rateValue: index,
            isRated: rateValue === index ? !isRated : true,
        });
        getValue(index);
    };

    render() {
        const { isRated, rateValue } = this.state;
        const { minGrade, maxGrade, countOfBoxes } = this.props;

        return (
            <Wrapper>
                <GradeLine>
                    {[...Array(countOfBoxes)].map((item, index) => (
                        <Box
                            key={item}
                            countOfBoxes={countOfBoxes}
                            isRated={isRated}
                            rateValue={rateValue}
                            onClick={() => this.onClick(index)}
                            value={index}
                            disabled={isRated}
                        >
                            {index}
                        </Box>
                    ))}
                </GradeLine>
                <GrageRange>
                    <span>{minGrade}</span>
                    <span>{maxGrade}</span>
                </GrageRange>
            </Wrapper>
        );
    }
}
