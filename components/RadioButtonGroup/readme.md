```js
class RadioButtonGroupExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '1'
        };
    }
    onCheck(selected) {
        this.setState({ selected });
    };
    render() {
        const { selected } = this.state;
        return (
            <RadioButtonGroup
                options={[
                    { value: "1", label: "Пункт 1" },
                    { value: "2", label: "Пункт 2" },
                    { value: "3", label: "Пункт 3" },
                    { value: "4", label: "Пункт 4" },
                    { value: "5", label: "Пункт 5" }
                ]}
                selected={selected}
                onCheck={this.onCheck.bind(this)}
            />
        );
    }
}

<RadioButtonGroupExample/>
```