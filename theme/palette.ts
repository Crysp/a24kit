import generate from './generatePalette';

export interface PalettesProps {
    [key: string]: string[] & { primary?: string };
}

const presetPrimaryColors: {
    [key: string]: string;
} = {
    red: '#e95454',
    gold: '#f6be4e',
    green: '#a2c679',
    blue: '#4786c8',
    purple: '#a476c7',
    gray: '#333333',
};

const presetPalettes: PalettesProps = {};

Object.keys(presetPrimaryColors).forEach((key): void => {
    presetPalettes[key] = generate(presetPrimaryColors[key]);
    presetPalettes[key].primary = presetPalettes[key][6];
});

const red = presetPalettes.red;
const gold = presetPalettes.gold;
const green = presetPalettes.green;
const blue = presetPalettes.blue;
const purple = presetPalettes.purple;
const gray = presetPalettes.gray;

export default {
    red,
    gold,
    green,
    blue,
    purple,
    gray,
}
