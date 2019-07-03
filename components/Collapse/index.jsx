import React from 'react';
import PropTypes from 'prop-types';
import RcCollapse from 'rc-collapse';
import animation from '../lib/openAnimation';
import CollapsePanel from './components/CollapsePanel';


export default class Collapse extends React.Component {
    static propTypes = {
        activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
        defaultActiveKey: PropTypes.arrayOf(PropTypes.string),
        accordion: PropTypes.bool,
        onChange: PropTypes.func,
        className: PropTypes.string,
    };

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
