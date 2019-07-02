import React from 'react';
import { mount } from 'enzyme';
import message from '..';


describe('Поведение <Message/>', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    afterEach(() => {
        message.destroy();
        jest.useRealTimers();
    });
    it('Закрывается вручную', () => {
        const hide1 = message.info('whatever', 0);
        const hide2 = message.info('whatever', 0);
        expect(document.querySelectorAll('.ui-message-notice').length).toBe(2);
        hide1();
        jest.runAllTimers();
        expect(document.querySelectorAll('.ui-message-notice').length).toBe(1);
        hide2();
        jest.runAllTimers();
        expect(document.querySelectorAll('.ui-message-notice').length).toBe(0);
    });
    it('Глобальное удаление', () => {
        message.info('whatever', 0);
        message.info('whatever', 0);
        expect(document.querySelectorAll('.ui-message').length).toBe(1);
        expect(document.querySelectorAll('.ui-message-notice').length).toBe(2);
        message.destroy();
        expect(document.querySelectorAll('.ui-message').length).toBe(0);
        expect(document.querySelectorAll('.ui-message-notice').length).toBe(0);
    });
    it('Параметр duration не обязателен когда указан onClose', () => {
        message.info('whatever', () => {});
    });
    it('Используется дефолтное значение duration когда его нет в параметрах', (done) => {
        jest.useRealTimers();
        const defaultDuration = 3;
        const now = Date.now();
        message.info('whatever', () => {
            // calculate the approximately duration value
            const aboutDuration = parseInt((Date.now() - now) / 1000, 10);
            expect(aboutDuration).toBe(defaultDuration);
            done();
        });
    });
    it('Удаление сообщений которые описаны в componentDidMount', () => {
        class Test extends React.Component {
            componentDidMount() {
                message.loading('Action in progress1..', 0);
                message.loading('Action in progress2..', 0);
                setTimeout(() => message.destroy(), 1000);
            }

            render() {
                return <div>test</div>;
            }
        }
        mount(<Test />);
        expect(document.querySelectorAll('.ui-message-notice').length).toBe(2);
        jest.runAllTimers();
        expect(document.querySelectorAll('.ui-message-notice').length).toBe(0);
    });
});
