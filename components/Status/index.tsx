import React from 'react';
import Wrapper from './styled';

export interface StatusProps {
    online: boolean
}

export default class Status extends React.PureComponent<StatusProps> {
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
