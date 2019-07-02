```js
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu odio nisl. Sed venenatis feugiat orci, vel imperdiet massa volutpat at. Nunc at aliquam arcu, vel hendrerit libero. Quisque lobortis nunc ut orci eleifend, eget mattis enim cursus. Proin gravida varius mi id cursus. Nam aliquet urna sit amet gravida semper. Morbi sed eleifend lectus, a malesuada velit. Integer euismod aliquet risus ac porttitor.';
<Collapse defaultActiveKey={['1']}>
    <Collapse.Panel header="This is panel header 1" key="1">
        {text}
    </Collapse.Panel>
    <Collapse.Panel header="This is panel header 2" key="2">
        {text}
    </Collapse.Panel>
    <Collapse.Panel header="This is panel header 3" key="3">
        {text}
    </Collapse.Panel>
</Collapse>
```