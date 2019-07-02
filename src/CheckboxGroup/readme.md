```js
initialState = {
    selected: ["1","2","4"]
};
<CheckboxGroup
    selected={state.selected}
    options={[
        { value: "1", label: "Пункт 1" },
        { value: "2", label: "Пункт 2" },
        { value: "3", label: "Пункт 3" },
        { value: "4", label: "Пункт 4" },
        { value: "5", label: "Пункт 5" }
    ]}
    onCheck={selected => setState({ selected })}
/>
```