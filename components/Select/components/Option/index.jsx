import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledCheckbox } from './styled';


export default class Option extends React.PureComponent {
    static propTypes = {
        label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
        hasCheckbox: PropTypes.bool,
        isChecked: PropTypes.bool,
        isSelected: PropTypes.bool,
        onSelect: PropTypes.func,
    };

    static defaultProps = {
        hasCheckbox: false,
        isChecked: false,
        isSelected: false,
        onSelect() {},
    };

    render() {
        const {
            label,
            hasCheckbox,
            isChecked,
            isSelected,
            onSelect,
        } = this.props;
        return (
            <Wrapper selected={isSelected} onClick={onSelect}>
                {hasCheckbox ? <StyledCheckbox label={label} isChecked={isChecked} /> : label}
            </Wrapper>
        );
    }
}
