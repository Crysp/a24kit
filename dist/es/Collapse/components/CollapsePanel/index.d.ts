import React from 'react';
export interface Props {
    key: string;
    header: React.ReactNode;
    disabled: boolean;
    className: string;
    style: any;
    showArrow: boolean;
    arrowRightPosition: boolean;
    forceRender: boolean;
}
declare const CollapsePanel: React.FunctionComponent<Props>;
export default CollapsePanel;
