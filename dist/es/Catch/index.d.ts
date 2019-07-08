import React from 'react';
export interface Props {
    children: React.ReactNode;
}
interface State {
    hasError: boolean;
    code: null | string;
}
export default class Catch extends React.Component<Props, State> {
    state: {
        hasError: boolean;
        code: null;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): {} | null | undefined;
}
export {};
