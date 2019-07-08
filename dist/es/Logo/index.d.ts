import React from 'react';
export interface Props {
    mode?: 'light' | 'dark' | 'blue';
    project?: string;
}
export default class Logo extends React.PureComponent<Props> {
    static defaultProps: {
        mode: string;
        project: string;
    };
    modeColor: (mode: any) => any;
    render(): JSX.Element;
}
