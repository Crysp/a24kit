import * as React from 'react';
import { tokens } from './theme';
import { ThemeProvider, createGlobalStyle } from './styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: Times New Roman, sans-serif;
    }
`;

export default class Component extends React.PureComponent<{}, {}> {
    render() {
        return (
            <ThemeProvider theme={tokens}>
                <>
                    {/* Other themed components go here */}
                    <GlobalStyle />
                </>
            </ThemeProvider>
        );
    }
}
