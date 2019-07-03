import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import { Wrapper, Online } from './styled';

/**
 * @develop
 */


export default class AvatarCard extends React.PureComponent {
    static propTypes = {
        ...Avatar.propTypes,
        /**
         * Индикатор нахождения в сети
         */
        online: PropTypes.bool,
    };

    static defaultProps = {
        online: true,
    };

    render() {
        const { online } = this.props;
        return (
            <Wrapper>
                <Avatar
                    {...this.props}
                />
                {online && <Online />}
            </Wrapper>
        );
    }
}
