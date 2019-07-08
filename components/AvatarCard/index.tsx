import React from 'react';
import Avatar, { Props as AvatarProps } from '../Avatar';
import { Wrapper, Online } from './styled';

export interface Props extends AvatarProps {
    online: boolean
}

export default class AvatarCard extends React.PureComponent<Props> {
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
