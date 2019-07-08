import React from 'react';
export interface StatusProps {
    online: boolean;
}
export default class Status extends React.PureComponent<StatusProps> {
    static defaultProps: {
        online: boolean;
    };
    render(): JSX.Element;
}
