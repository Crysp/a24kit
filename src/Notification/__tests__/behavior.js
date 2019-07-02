import notification from '..';


describe('Компонент <Notification/>', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });
    afterAll(() => {
        jest.useRealTimers();
    });
    afterEach(() => {
        notification.destroy();
    });
    it('Закрывается программно', () => {
        const openedNotices = 2;
        notification.open({
            message: 'Notification Title',
            duration: 0,
            key: '1',
        });
        notification.open({
            message: 'Notification Title',
            duration: 0,
            key: '2',
        });
        expect(document.querySelectorAll('.ui-notification-notice').length).toBe(openedNotices);
        notification.close('1');
        jest.runAllTimers();
        expect(document.querySelectorAll('.ui-notification-notice').length).toBe(1);
        notification.close('2');
        jest.runAllTimers();
        expect(document.querySelectorAll('.ui-notification-notice').length).toBe(0);
    });
    it('Глобально удаляются все уведомления', () => {
        const openedNotices = 2;
        notification.open({
            message: 'Notification Title',
            duration: 0,
        });
        notification.open({
            message: 'Notification Title',
            duration: 0,
        });
        expect(document.querySelectorAll('.ui-notification').length).toBe(1);
        expect(document.querySelectorAll('.ui-notification-notice').length).toBe(openedNotices);
        notification.destroy();
        expect(document.querySelectorAll('.ui-notification').length).toBe(0);
        expect(document.querySelectorAll('.ui-notification-notice').length).toBe(0);
    });
    it('Проигрывается звук', () => {
        notification.open({
            message: 'Notification Title',
            duration: 0,
        });
        expect(document.querySelectorAll('audio').length).toBe(1);
        notification.destroy();
    });
    it('Тихое уведомление', () => {
        notification.open({
            message: 'Notification Title',
            duration: 0,
            silent: true,
        });
        expect(document.querySelectorAll('audio').length).toBe(0);
        notification.destroy();
    });
});
