import tinycolor from 'tinycolor2';

const hueStep = 2;
const saturationStep = 16;
const saturationStep2 = 5;
const brightnessStep1 = 5;
const brightnessStep2 = 15;
const lightColorCount = 5;
const darkColorCount = 4;

interface HsvObject {
    h: number;
    s: number;
    v: number;
}

function getHue(hsv: HsvObject, i: number, light?: boolean): number {
    let hue: number;
    if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
        hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
    } else {
        hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
    }
    if (hue < 0) {
        hue += 360;
    } else if (hue >= 360) {
        hue -= 360;
    }
    return hue;
}

function getSaturation(hsv: HsvObject, i: number, light?: boolean): number {
    // grey color don't change saturation
    if (hsv.h === 0 && hsv.s === 0) {
        return hsv.s;
    }
    let saturation: number;
    if (light) {
        saturation = Math.round(hsv.s * 100) - saturationStep * i;
    } else if (i === darkColorCount) {
        saturation = Math.round(hsv.s * 100) + saturationStep;
    } else {
        saturation = Math.round(hsv.s * 100) + saturationStep2 * i;
    }

    if (saturation > 100) {
        saturation = 100;
    }

    if (light && i === lightColorCount && saturation > 10) {
        saturation = 10;
    }
    if (saturation < 6) {
        saturation = 6;
    }
    return saturation;
}

function getValue(hsv: HsvObject, i: number, light?: boolean): number {
    if (light) {
        return Math.round(hsv.v * 100) + brightnessStep1 * i;
    }
    return Math.round(hsv.v * 100) - brightnessStep2 * i;
}

export default function generate(color: string): string[] {
    const patterns = [] as string[];
    const pColor = tinycolor(color);
    for (let i = lightColorCount; i > 0; i -= 1) {
        const hsv = pColor.toHsv();
        const colorString = tinycolor({
            h: getHue(hsv, i, true),
            s: getSaturation(hsv, i, true),
            v: getValue(hsv, i, true),
        }).toHexString();
        patterns.push(colorString);
    }
    patterns.push(pColor.toHexString());
    for (let i = 1; i <= darkColorCount; i += 1) {
        const hsv = pColor.toHsv();
        const colorString = tinycolor({
            h: getHue(hsv, i),
            s: getSaturation(hsv, i),
            v: getValue(hsv, i),
        }).toHexString();
        patterns.push(colorString);
    }
    return patterns;
}
