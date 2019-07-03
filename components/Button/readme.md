Обычная кнопка
--------------
```js
<div>
    <p><Button>Кнопка</Button></p>
    <p><Button color="blue">Кнопка</Button></p>
    <p><Button color="red">Кнопка</Button></p>
</div>
```

Контрастная кнопка
------------------
```js
<div style={{padding: 20, borderRadius: 2, backgroundColor: '#4786c8', textAlign: 'center'}}>
    <Button color="blue" contrast>Контрастная</Button>
</div>
```

Прозрачная кнопка
-----------------
```js
<Button color="green" hollow>Прозрачная</Button>
```

Второстепенная кнопка
---------------------
```js
<Button color="blue" secondary>Второстепенная</Button>
```

Кнопка с иконкой
----------------
```js
const { ArrowUp } = require('../Icon');
<Button color="blue" secondary icon={<ArrowUp/>}>Скрыть</Button>
```

```js
const { ArrowRight } = require('../Icon');
<Button icon={<ArrowRight/>} iconPosition="after">Далее</Button>
```

Кнопка иконка
-------------
```js
const { Star } = require('../Icon');
<Button color="blue" icon={<Star/>}/>
```

#### Информационная кнопка
```js
<Button info secondary>Кнопка</Button>
```

#### Кнопка с иконкой
```js
const { ArrowDown } = require('../Icon');
<Button icon={<ArrowDown/>} info secondary>Подробнее</Button>
```

#### Кнопка с доп. контентом
```js
const { Chat } = require('../Icon');
const Badge = require('../Badge').default;
<Button icon={<Chat/>} info secondary>
    Открыть чат
    <Badge color="red" size="small" round style={{ marginLeft: 8 }}>7</Badge>
</Button>
```