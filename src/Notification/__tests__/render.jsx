import React from 'react';
import notification from '..';
import { Mail } from '../../Icon';
import AvatarCard from '../../AvatarCard';


describe('Верстка <Notification/>', () => {
    afterEach(() => {
        notification.destroy();
    });

    it('Дефолтная', () => {
        notification.open({
            message: 'Notification Title',
            duration: 0,
            key: '1',
        });
        expect(document.querySelector('.ui-notification-notice')).toMatchSnapshot();
    });
    it('С иконкой', () => {
        notification.open({
            icon: <Mail />,
            message: 'Notification Title',
            duration: 0,
            key: '1',
        });
        expect(document.querySelector('.ui-notification-notice')).toMatchSnapshot();
    });
    it('С аватаром', () => {
        notification.open({
            avatar: <AvatarCard online />,
            message: 'Notification Title',
            duration: 0,
            key: '1',
        });
        expect(document.querySelector('.ui-notification-notice')).toMatchSnapshot();
    });
});
