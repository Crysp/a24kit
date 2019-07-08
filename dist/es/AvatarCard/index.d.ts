import React from 'react';
import { Props as AvatarProps } from '../Avatar';
export interface Props extends AvatarProps {
    online: boolean;
}
export default class AvatarCard extends React.PureComponent<Props> {
    static defaultProps: {
        online: boolean;
    };
    render(): JSX.Element;
}
