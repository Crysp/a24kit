import { css, keyframes } from 'styled-components';
import { lighten } from 'polished';

export const Color = {
    LightRed: '#fadcdc',
    Red: '#e95454',
    DeepRed: '#e32222',
    LightGold: '#fdf3e0',
    Gold: '#f6be4e',
    DeepGold: '#f3aa19',
    LightGreen: '#ecf4e4',
    Green: '#a2c679',
    DeepGreen: '#87b552',
    LightBlue: '#bdd3eb',
    Blue: '#4786c8',
    DeepBlue: '#316aa5',
    Black: '#000000',
    Coal: '#333333',
    Gray: '#8d8d8d',
    Pale: '#e1e1e1',
    Silver: '#ececec',
    Zircon: '#f5f5f5',
    White: '#ffffff',
    Purple: '#a476c7',
};

export const COLOR = Object.keys(Color)
    .reduce(
        (
            colors,
            colorName,
        ) => ({
            ...colors,
            [`${colorName.charAt(0).toLowerCase()}${colorName.slice(1)}`]: Color[colorName],
        }),
        {},
    );
export const FONT_FAMILY = {
    OpenSans: '"Open Sans", sans-serif',
};
export const SIZE = {
    borderRadius: 3,
};

const pending = keyframes`
    0% { background-position: 0 0; }
    100% { background-position: 500px 0; }
`;

const getSkeletonGradient = (color) => {
    if (color === 'zircon') {
        return css`linear-gradient(
            90deg,
            ${Color.Zircon},
            ${Color.Zircon} 30%,
            #fff,
            ${Color.Zircon} 70%,
            ${Color.Zircon}
        )`;
    }

    if (color === 'silver') {
        return css`linear-gradient(
            90deg,
            ${Color.Silver},
            ${Color.Silver} 30%,
            ${Color.Zircon},
            ${Color.Silver} 70%,
            ${Color.Silver}
        )`;
    }

    if (color === 'pale') {
        return css`linear-gradient(
            90deg,
            ${Color.Pale},
            ${Color.Pale} 30%,
            ${Color.Silver},
            ${Color.Pale} 70%,
            ${Color.Pale}
        )`;
    }

    if (color === 'gray') {
        return css`linear-gradient(
            90deg,
            ${Color.Gray},
            ${Color.Gray} 30%,
            ${Color.Pale},
            ${Color.Gray} 70%,
            ${Color.Gray}
        )`;
    }

    if (color === 'coal') {
        return css`linear-gradient(
            90deg,
            ${Color.Coal},
            ${Color.Coal} 30%,
            ${Color.Gray},
            ${Color.Coal} 70%,
            ${Color.Coal}
        )`;
    }

    if (color === 'blue') {
        return css`linear-gradient(
            90deg,
            ${Color.Blue},
            ${Color.Blue} 30%,
            ${lighten(0.1, Color.Blue)},
            ${Color.Blue} 70%,
            ${Color.Blue}
        )`;
    }

    if (color === 'green') {
        return css`linear-gradient(
            90deg,
            ${Color.Green},
            ${Color.Green} 30%,
            ${lighten(0.1, Color.Green)},
            ${Color.Green} 70%,
            ${Color.Green}
        )`;
    }

    if (color === 'gold') {
        return css`linear-gradient(
            90deg,
            ${Color.Gold},
            ${Color.Gold} 30%,
            ${lighten(0.1, Color.Gold)},
            ${Color.Gold} 70%,
            ${Color.Gold}
        )`;
    }

    if (color === 'red') {
        return css`linear-gradient(
            90deg,
            ${Color.Red},
            ${Color.Red} 30%,
            ${lighten(0.1, Color.Red)},
            ${Color.Red} 70%,
            ${Color.Red}
        )`;
    }

    return '';
};

export const skeleton = (width, height, gradientColor) => css`
    display: inline-block;
    width: ${width};
    height: ${height};
    border-radius: 2px;
    background-image: ${getSkeletonGradient(gradientColor)};
    background-size: 500px;
    animation: ${pending} .8s linear infinite;
`;

export default {
    Color,
    size: SIZE,
    mixin: {
        skeleton,
    },
};
