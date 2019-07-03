```js
<Link>Ссылка</Link>
```

#### Ссылка с иконкой
```js
const { Chat } = require('../Icon');
<Link icon={<Chat/>}>Ссылка с иконкой</Link>
```

#### Псевдо-ссылка
```js
const { ArrowDown } = require('../Icon');
<div>
    <p><Link pseudo>Псевдо-ссылка</Link></p>
    <p><Link icon={<ArrowDown/>} pseudo>Псевдо-ссылка с иконкой</Link></p>
</div>
```