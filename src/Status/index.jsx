import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styled';


export default class Status extends React.PureComponent {
    static propTypes = {
        /**
         * Онлайн
         */
        online: PropTypes.bool,
    };

    static defaultProps = {
        online: false,
    };

    render() {
        const { online } = this.props;
        return (
            <Wrapper online={online}>
                {online ? 'Онлайн' : 'Офлайн' }
            </Wrapper>
        );
    }
}
