import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Text } from './styled';


export default class Day extends React.PureComponent {
    static propTypes = {
        value: PropTypes.number.isRequired,
        selectable: PropTypes.bool,
        onClick: PropTypes.func,
    };

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
