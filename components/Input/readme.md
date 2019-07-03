```js
initialState = {
    value: ''
};
<Input value={state.value} placeholder="Текст подсказки" onChange={value => setState({ value })}/>
```

#### Поле с корректными данными
```js
<Input value="Правильный текст" status="success"/>
```

#### Поле с ошибкой
```js
<Input value="Ошибка" status="error"/>
```

#### Неактивное поле
```js
<Input value="Текст поля" disabled/>
```

#### Поле с иконкой
```js
const { Loop } = require('../Icon');
<Input placeholder="Что ищем?" icon={<Loop/>}/>
```

#### Поле без рамки
```js
<Input placeholder="Текст сообщения" boundless/>
```

#### Поле с маской
```
initialState = {
    value: ''
};
<Input mask="1111 1111 1111 1111" value={state.value} onChange={value => setState({ value })}/>
```