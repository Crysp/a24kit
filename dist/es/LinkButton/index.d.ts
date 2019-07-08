import React from 'react';
export interface Props {
    children: React.ReactNode;
    className: string;
}
/**
 * Иногда ссылку надо выделить. По сути, это кнопка для вызова контекстных действий.
 * @develop
 */
export default class LinkButton extends React.PureComponent<Props> {
    static defaultProps: {
        className: string;
    };
    render(): JSX.Element;
}
