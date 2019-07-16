import React from 'react';
import { H } from '../Typography';
import {
    Wrapper,
    Header,
    FlashIcon,
    Text,
} from './styled';

export interface Props {
    children: React.ReactNode
}

interface State {
    hasError: boolean
    code: null | string
}

export default class Catch extends React.Component<Props, State> {
    state = {
        hasError: false,
        code: null,
    };

    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

    render() {
        const {
            hasError,
            code,
        } = this.state;
        const { children } = this.props;
        if (hasError) {
            return (
                <Wrapper>
                    <Header>
                        <FlashIcon />
                        <H size={4}>Что-то пошло не так...</H>
                    </Header>
                    <Text>
                        Мы уже знаем об этой проблеме. Очень скоро мы ее исправим.
                    </Text>
                    {code !== null && (
                        <Text>
                            <span>Код ошибки</span>
                            <span>: </span>
                            <b>{code}</b>
                        </Text>
                    )}
                </Wrapper>
            );
        }
        return children;
    }
}
