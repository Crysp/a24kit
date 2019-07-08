import React from 'react';
import RcCollapse from 'rc-collapse';
import animation from '../../../lib/openAnimation';
import {
    Header,
    HeaderContent,
    ArrowDownIcon,
    GlobalStyles,
} from './styled';

export interface Props {
    key: string
    header: React.ReactNode
    disabled: boolean
    className: string
    style: any
    showArrow: boolean
    arrowRightPosition: boolean
    forceRender: boolean
}

const CollapsePanel: React.FunctionComponent<Props> = (props) => {
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
