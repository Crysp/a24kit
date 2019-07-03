import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import {
    COLOR,
    FONT_FAMILY,
    SIZE,
} from './config';


const theme = {
    color: Object.keys(COLOR).reduce(
        (colors, colorName) => ({
            ...colors,
            /**
             * Костыль
             * LightRed => lightRed
             */
            [`${colorName.charAt(0).toLowerCase()}${colorName.slice(1)}`]: COLOR[colorName],
        }),
        {},
    ),
    fontFamily: FONT_FAMILY,
    size: SIZE,
};

export const ThemeProvider = props => (
    <StyledThemeProvider
        theme={theme}
        {...props}
    />
);

ThemeProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ThemeProvider;
