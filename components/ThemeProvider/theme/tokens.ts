/**
 * Do not edit directly
 * Generated on Mon, 22 Jul 2019 08:05:48 GMT
 */ 

interface paletteType {
    red: string,
    blue: string,
    green: string,
    wine: string,
    yellow: string,
    purple: string,
    gray: string,
    gayBlue: string
}

interface typographyType {
    header1: {
        family: string,
        weight: number,
        size: string,
        spacing: string,
        lineHeight: string
    },
    header2: {
        family: string,
        weight: number,
        size: string,
        spacing: string,
        lineHeight: string
    },
    header3: {
        family: string,
        weight: number,
        size: string,
        spacing: string,
        lineHeight: string
    },
    paragraph1: {
        family: string,
        weight: number,
        size: string,
        spacing: string,
        lineHeight: string
    },
    paragraph2: {
        family: string,
        weight: number,
        size: string,
        spacing: string,
        lineHeight: string
    }
}

interface spacersType {
    xs: string,
    s: string,
    m: string,
    l: string,
    xl: string,
    xxl: string
}

interface shadowsType {
    depth1: string,
    depth2: string,
    depth3: string,
    depthInset: string
}

interface gradientType {
    space: string,
    sunrise: string,
    freshCitrus: string
}

interface Tokens {
    palette: paletteType
    typography: typographyType
    spacers: spacersType
    shadows: shadowsType
    gradient: gradientType
}

const palette: paletteType = {
    red: "rgba(255, 0, 45, 1.00)",
    blue: "rgba(0, 150, 255, 1.00)",
    green: "rgba(43, 255, 0, 1.00)",
    wine: "rgba(107, 5, 66, 1.00)",
    yellow: "rgba(255, 230, 0, 1.00)",
    purple: "rgba(219, 0, 255, 1.00)",
    gray: "rgba(72, 72, 72, 1.00)",
    gayBlue: "rgba(25, 244, 205, 1.00)"
};

const typography: typographyType = {
    header1: {
        family: "OpenSans, OpenSans-Bold",
        weight: 700,
        size: "44px",
        spacing: "normal",
        lineHeight: "52px"
    },
    header2: {
        family: "OpenSans, OpenSans-Bold",
        weight: 700,
        size: "32px",
        spacing: "normal",
        lineHeight: "38px"
    },
    header3: {
        family: "OpenSans, OpenSans-SemiBold",
        weight: 600,
        size: "24px",
        spacing: "normal",
        lineHeight: "28px"
    },
    paragraph1: {
        family: "OpenSans, OpenSans-Regular",
        weight: 400,
        size: "16px",
        spacing: "normal",
        lineHeight: "19px"
    },
    paragraph2: {
        family: "OpenSans, OpenSans-Regular",
        weight: 400,
        size: "14px",
        spacing: "normal",
        lineHeight: "16px"
    }
};

const spacers: spacersType = {
    xs: "8px",
    s: "16px",
    m: "24px",
    l: "32px",
    xl: "48px",
    xxl: "64px"
};

const shadows: shadowsType = {
    depth1: "0px 2px 16px rgba(0, 0, 0, 0.25)",
    depth2: "0px 4px 32px rgba(0, 0, 0, 0.25)",
    depth3: "0px 16px 48px rgba(0, 0, 0, 0.25)",
    depthInset: "inset 0px 2px 4px rgba(0, 0, 0, 0.04)"
};

const gradient: gradientType = {
    space: "linear-gradient(180deg, rgba(11, 190, 229, 1.00) 0%, rgba(120, 11, 229, 1.00) 100%)",
    sunrise: "linear-gradient(225deg, rgba(255, 168, 0, 1.00) 0%, rgba(229, 11, 64, 1.00) 100%)",
    freshCitrus: "linear-gradient(225deg, rgba(255, 176, 118, 1.00) 0%, rgba(222, 249, 146, 1.00) 100%)"
};

const tokens: Tokens = {
    palette,
    typography,
    spacers,
    shadows,
    gradient
};

export { tokens, Tokens };