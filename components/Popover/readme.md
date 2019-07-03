```js
<Popover
    overlay="Полезная информация"
    getPopoverContainer={() => document.getElementsByTagName('main')[0]}
    placement="top"
>
    <span>Подсказка будет показана при наведении курсора</span>
</Popover>
```

```js
const Button = require('../Button').default;
<div>
    <Popover
        overlay="Полезная информация"
        getPopoverContainer={() => document.getElementsByTagName('main')[0]}
        placement="topLeft"
    >
        <Button secondary>Выравнивание по краю</Button>
    </Popover>
    <div style={{ marginTop: 20 }}>
        <Popover
            overlay="Полезная информация"
            getPopoverContainer={() => document.getElementsByTagName('main')[0]}
            placement="topLeft"
            arrowPointAtCenter
        >
            <Button secondary>Стрелка указывает на центр</Button>
        </Popover>
    </div>
</div>
```

```js
const Input = require('../Input').default;
<Popover
    overlay="Ошибка"
    visible
    color="red"
    raised={false}
    getPopoverContainer={() => document.getElementsByTagName('main')[0]}
>
    <Input placeholder="Поле с ошибкой"/>
</Popover>
```