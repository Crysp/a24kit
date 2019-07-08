import React from 'react';
import { Wrapper, Text } from './styled';

export interface Props {
    value: number
    selectable: boolean
    onClick(): void
}

export default class Day extends React.PureComponent<Props> {
    static defaultProps = {
        selectable: false,
        onClick() {},
    };

    onClick = () => {
        const { selectable, onClick } = this.props;
        if (!selectable) return;
        onClick();
    };

    render() {
        const { value } = this.props;
        return (
            <Wrapper onClick={this.onClick}>
                <Text>{value}</Text>
            </Wrapper>
        );
    }
}
