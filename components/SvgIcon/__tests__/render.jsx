import React from 'react';
import { create } from 'react-test-renderer';
import SvgIcon, { sizes } from '../index';


describe('Верстка компонента <SvgIcon>', () => {
    it('Дефолтная', () => {
        const tree = create(<SvgIcon viewBox="0 0 100 100"><rect width="100" height="100" /></SvgIcon>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Размером с родителя', () => {
        const icon = <SvgIcon viewBox="0 0 100 100" size={sizes.AUTO}><rect width="100" height="100" /></SvgIcon>;
        const tree = create(icon).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Размером 8x8', () => {
        const icon = <SvgIcon viewBox="0 0 100 100" size={sizes.SIZE_8}><rect width="100" height="100" /></SvgIcon>;
        const tree = create(icon).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Размером 12x12', () => {
        const icon = <SvgIcon viewBox="0 0 100 100" size={sizes.SIZE_12}><rect width="100" height="100" /></SvgIcon>;
        const tree = create(icon).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Размером 16x16', () => {
        const icon = <SvgIcon viewBox="0 0 100 100" size={sizes.SIZE_16}><rect width="100" height="100" /></SvgIcon>;
        const tree = create(icon).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Размером 24x24', () => {
        const icon = <SvgIcon viewBox="0 0 100 100" size={sizes.SIZE_24}><rect width="100" height="100" /></SvgIcon>;
        const tree = create(icon).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Размером 32x32', () => {
        const icon = <SvgIcon viewBox="0 0 100 100" size={sizes.SIZE_32}><rect width="100" height="100" /></SvgIcon>;
        const tree = create(icon).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С дополнительным CSS классом', () => {
        const icon = <SvgIcon viewBox="0 0 100 100" className="custom"><rect width="100" height="100" /></SvgIcon>;
        const tree = create(icon).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
