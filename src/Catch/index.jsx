import React from 'react';
import PropTypes from 'prop-types';
import { H } from '../Typography';
import {
    Wrapper,
    Header,
    FlashIcon,
    Text,
} from './styled';


/**
 * @develop
 */
export default class Catch extends React.Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
    };

    state = {
        hasError: false,
        code: null,
    };

    componentDidCatch(error, errorInfo) {
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
