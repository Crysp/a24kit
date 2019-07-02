**Базовое использование**
```js
const notification = require('./index.jsx').default;
<Button
    onClick={() => {
        notification.open({
            message: 'Notification Title',
            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
        });
    }}
>
    Открыть уведомление
</Button>
```

**С иконкой**
```js
const Mail = require('../Icon/index.jsx').Mail;
const notification = require('./index.jsx').default;
<Button
    onClick={() => {
        notification.open({
            placement: 'bottomLeft',
            icon: <Mail/>,
            message: 'Кто-то написал',
            time: '12:19',
            description: 'Очень важное сообщение',
            more: 'More detailed',
            reply: 'Reply',
            moreFn: () => console.log('please more'),
            replyFn: () => console.log('please reply')
        });
    }}
>
    Новое сообщение
</Button>
```

**С аватаром**
```js
const notification = require('./index.jsx').default;
<Button
    onClick={() => {
        notification.open({
            placement: 'bottomLeft',
            avatar: <AvatarCard online={true} round/>,
            message: 'Кто-то написал',
            time: '12:19',
            description: 'Очень важное сообщение',
            more: 'More detailed',
            reply: 'Reply',
            moreFn: () => console.log('please more'),
            replyFn: () => console.log('please reply')
        });
    }}
>
    Новое сообщение
</Button>
```