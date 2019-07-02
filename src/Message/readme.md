### API

```js noeditor static
import { Message } from 'Components';

// content {String|ReactNode} - контент сообщения
// duration {Number} - время отображения (сек), не закрывается если параметр равен 0
// onClose {Function} - колбек на закрытие

Message.info(content[, duration, onClose]);
Message.success(content[, duration, onClose]);
Message.warning(content[, duration, onClose]);
Message.error(content[, duration, onClose]);
Message.loading(content[, duration, onClose]);
```

#### Удаление сообщения

Каждый из методов `info`, `success`, `warning`, `error` и `loading` возвращают функцию которая закрывает это же сообщение.

Поэтому можно сделать так:

```js noeditor static
import { Message } from 'Components';

const hide = Message.info('Полезная информация', 0);

setTimeout(hide, 5000);
```


**Базовое использование**
```js
const Message = require('./index.jsx').default;

<Button onClick={() => Message.info('Информационное сообщение')}>
    Обычное сообщение
</Button>
```

**Тематические сообщения**
```js
const Message = require('./index.jsx').default;

<div>
    <Button onClick={() => Message.success('Сообщение об успешной операции')} color="blue" hollow>
        Успех
    </Button>
    &nbsp;
    <Button
        onClick={() => Message.warning('Предупреждающее сообщение')}
        color="blue"
        hollow
    >
        Предупреждение
    </Button>
    &nbsp;
    <Button
        onClick={() => Message.error('Сообщение об ошибке')}
        color="blue"
        hollow
    >
        Ошибка
    </Button>
</div>
```

```js
const Message = require('./index.jsx').default;

const success = () => {
    const hide = Message.loading('Загрузка...', 0);
    setTimeout(hide, 2500);
};

<Button onClick={success} color="blue" hollow>
    Индикатор загрузки
</Button>
```