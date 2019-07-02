import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../index';


/* eslint-disable jsx-a11y/anchor-is-valid */
describe('Верстка компонента <Link>', () => {
    it('Дефолтная', () => {
        const tree = renderer.create(<Link href="#">Link</Link>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Дефолтная с иконкой', () => {
        const tree = renderer.create(<Link href="#" icon={<div>Icon</div>}>Link</Link>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Псевдоссылка', () => {
        const tree = renderer.create(<Link href="#" pseudo>Link</Link>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С иконкой слева', () => {
        const tree = renderer.create(<Link href="#" icon={<div>Icon</div>} iconPosition="before">Link</Link>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('С иконкой справа', () => {
        const tree = renderer.create(<Link href="#" icon={<div>Icon</div>} iconPosition="after">Link</Link>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Дополнительний CSS класс', () => {
        const tree = renderer.create(<Link href="#" className="custom">Link</Link>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('Прокидываются неописанные свойства', () => {
        const tree = renderer.create(<Link href="#" style={{ margin: 16 }}>Link</Link>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
/* eslint-enable jsx-a11y/anchor-is-valid */
