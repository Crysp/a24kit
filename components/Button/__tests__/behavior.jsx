import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Button from '../index';
import { RIPPLE_DURATION } from '../../Ripple';


const eventMock = {
    pageY: 0,
    pageX: 0,
    currentTarget: {
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
            };
        },
    },
};


describe('Поведение <Button>', () => {
    it('Обработчик onClick (1 клик => 1 вызов)', () => {
        const onClick = jest.fn(null);
        const expectedCalls = 1;
        const button = shallow(<Button onClick={onClick}>Button</Button>);
        button.simulate('click', eventMock);
        expect(onClick.mock.calls.length).toBe(expectedCalls);
    });
    it('Появляется анимация при клике', () => {
        const expectedRipples = 1;
        const button = shallow(<Button>Button</Button>);
        button.instance().onClick(eventMock);
        expect(button.state().ripples.length).toBe(expectedRipples);
    });
    it('Пропадает анимация после проигрывания', (done) => {
        jest.useFakeTimers();
        const expectedRipples = 0;
        const button = shallow(<Button>Button</Button>);
        button.instance().onClick(eventMock);
        setTimeout(() => {
            expect(button.state().ripples.length).toBe(expectedRipples);
            done();
        }, RIPPLE_DURATION);
        jest.runAllTimers();
    });
    it('Таймеры анимации очищаются при удалении компонента из DOM', () => {
        const expectedRipples = 0;
        const button = shallow(<Button>Button</Button>);
        button.instance().onClick(eventMock);
        button.instance().componentWillUnmount();
        expect(button.instance().rippleCycles.length).toBe(expectedRipples);
    });
    it('Кнопка с рамкой не имеет индикатора нажатия', () => {
        const expectedRipples = 0;
        const button = shallow(<Button hollow>Button</Button>);
        button.instance().onClick(eventMock);
        expect(button.state().ripples.length).toBe(expectedRipples);
    });
    it('Неактивная кнопка не имеет индикатора нажатия', () => {
        const expectedRipples = 0;
        const button = shallow(<Button disabled>Button</Button>);
        button.instance().onClick(eventMock);
        expect(button.state().ripples.length).toBe(expectedRipples);
    });
    it('У синей кнопки синий индикатор нажатия', () => {
        const button = shallow(<Button color="blue">Button</Button>);
        button.instance().onClick(eventMock);
        expect(button.instance().getRippleColor()).toBe('blue');
    });
    it('У зеленой кнопки зеленый индикатор нажатия', () => {
        const button = shallow(<Button color="green">Button</Button>);
        button.instance().onClick(eventMock);
        expect(button.instance().getRippleColor()).toBe('green');
    });
    it('У красной кнопки красный индикатор нажатия', () => {
        const button = shallow(<Button color="red">Button</Button>);
        button.instance().onClick(eventMock);
        expect(button.instance().getRippleColor()).toBe('red');
    });
    it('У синей контрастной кнопки светлосиний индикатор нажатия', () => {
        const button = shallow(<Button color="blue" contrast>Button</Button>);
        button.instance().onClick(eventMock);
        expect(button.instance().getRippleColor()).toBe('lightBlue');
    });
    it('У зеленой контрастной кнопки светлозеленый индикатор нажатия', () => {
        const button = shallow(<Button color="green" contrast>Button</Button>);
        button.instance().onClick(eventMock);
        expect(button.instance().getRippleColor()).toBe('lightGreen');
    });
    it('У красной контрастной кнопки светлокрасный индикатор нажатия', () => {
        const button = shallow(<Button color="red" contrast>Button</Button>);
        button.instance().onClick(eventMock);
        expect(button.instance().getRippleColor()).toBe('lightRed');
    });
    it('У информационной кнопки серый индикатор нажатия', () => {
        const button = shallow(<Button info>Button</Button>);
        button.instance().onClick(eventMock);
        expect(button.instance().getRippleColor()).toBe('pale');
    });
});
