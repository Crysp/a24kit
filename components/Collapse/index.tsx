import React from 'react';
import RcCollapse from 'rc-collapse';
import animation from '../lib/openAnimation';
import CollapsePanel from './components/CollapsePanel';

export interface Props {
    activeKey: string | string[]
    defaultActiveKey: string[]
    accordion: boolean
    onChange(): void
    className: string
}

export default class Collapse extends React.Component<Props> {
    static defaultProps = {
        activeKey: undefined,
        defaultActiveKey: undefined,
        accordion: undefined,
        onChange: undefined,
        className: undefined,
    };

    static Panel = CollapsePanel;

    render() {
        return (
            <RcCollapse
                prefixCls="ui-collapse"
                openAnimation={{
                    ...animation,
                    appear() {},
                }}
                {...this.props}
            />
        );
    }
}
