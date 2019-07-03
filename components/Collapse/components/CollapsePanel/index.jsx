import React from 'react';
import PropTypes from 'prop-types';
import RcCollapse from 'rc-collapse';
import animation from '../../../lib/openAnimation';
import {
    Header,
    HeaderContent,
    ArrowDownIcon,
    GlobalStyles,
} from './styled';

const CollapsePanel = (props) => {
    const {
        header,
        showArrow,
        arrowRightPosition,
        ...other
    } = props;
    const headless = typeof header === 'undefined';
    return (
        <React.Fragment>
            <RcCollapse.Panel
                prefixCls="ui-collapse"
                openAnimation={{
                    ...animation,
                    appear() {},
                }}
                {...other}
                headerClass={headless ? 'ui-collapse-headless' : ''}
                header={(
                    <Header>
                        {showArrow && !arrowRightPosition && <ArrowDownIcon />}
                        <HeaderContent>{header}</HeaderContent>
                        {showArrow && arrowRightPosition && <ArrowDownIcon />}
                    </Header>
                )}
                showArrow={false}
            />
            <GlobalStyles />
        </React.Fragment>
    );
};

CollapsePanel.propTypes = {
    key: PropTypes.string,
    header: PropTypes.node,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.shape(),
    showArrow: PropTypes.bool,
    arrowRightPosition: PropTypes.bool,
    forceRender: PropTypes.bool,
};

CollapsePanel.defaultProps = {
    key: undefined,
    header: undefined,
    disabled: undefined,
    className: undefined,
    style: undefined,
    showArrow: true,
    arrowRightPosition: false,
    forceRender: undefined,
};

export default CollapsePanel;
