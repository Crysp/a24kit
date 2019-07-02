import message from '..';


describe('Верстка <Message/>', () => {
    afterEach(() => {
        message.destroy();
    });
    it('Информационное', () => {
        message.info('Message Title');
        expect(document.querySelector('.ui-message-notice')).toMatchSnapshot();
    });
    it('Успешное', () => {
        message.success('Message Title');
        expect(document.querySelector('.ui-message-notice')).toMatchSnapshot();
    });
    it('Предупреждение', () => {
        message.warning('Message Title');
        expect(document.querySelector('.ui-message-notice')).toMatchSnapshot();
    });
    it('Ошибка', () => {
        message.error('Message Title');
        expect(document.querySelector('.ui-message-notice')).toMatchSnapshot();
    });
    it('Загрузка', () => {
        message.loading('Message Title');
        expect(document.querySelector('.ui-message-notice')).toMatchSnapshot();
    });
});
