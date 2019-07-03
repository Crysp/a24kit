```js
class SelectExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    onChange(value) {
        this.setState({ value });
    }
    render() {
        const { value } = this.state;
        const options = [
            { value: "1", label: "Пункт 1" },
            { value: "2", label: "Пункт 2" },
            { value: "3", label: "Пункт 3" },
            { value: "4", label: "Пункт 4" },
            { value: "5", label: "Пункт 5" },
            { value: "6", label: "Пункт 6" },
            { value: "7", label: "Пункт 7" },
            { value: "8", label: "Пункт 8" },
            { value: "9", label: "Пункт 9" },
            { value: "10", label: "Пункт 10" }
        ];
        return (
            <div style={{ width: 250 }}>
                <Select
                    placeholder="Выбери что-нибудь"
                    value={value}
                    options={options}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        )
    }
}

<SelectExample/>
```

#### Неактивный элемент
```js
<div style={{ width: 250 }}>
    <Select
        placeholder="Выбери что-нибудь"
        disabled
        options={[
            { value: "1", label: "Пункт 1" },
            { value: "2", label: "Пункт 2" },
            { value: "3", label: "Пункт 3" },
            { value: "4", label: "Пункт 4" },
            { value: "5", label: "Пункт 5" },
            { value: "6", label: "Пункт 6" },
            { value: "7", label: "Пункт 7" },
            { value: "8", label: "Пункт 8" },
            { value: "9", label: "Пункт 9" },
            { value: "10", label: "Пункт 10" },
        ]}
    />
</div>
```

#### Множественный выбор
```js
class SelectMultipleExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        };
    }
    onChange(value) {
        this.setState({ value });
    }
    render() {
        const { value } = this.state;
        const options = [
            { value: "1", label: "Пункт 1" },
            { value: "2", label: "Пункт 2" },
            { value: "3", label: "Пункт 3" },
            { value: "4", label: "Пункт 4" },
            { value: "5", label: "Пункт 5" },
            { value: "6", label: "Пункт 6" },
            { value: "7", label: "Пункт 7" },
            { value: "8", label: "Пункт 8" },
            { value: "9", label: "Пункт 9" },
            { value: "10", label: "Пункт 10" }
        ];
        return (
            <div style={{ width: 250 }}>
                <Select
                    placeholder="Выбери что-нибудь"
                    multiple
                    options={options}
                    value={value}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        )
    }
}

<SelectMultipleExample/>
```

#### Выбор с поиском
```js
class SelectSearchableExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        };
    }
    onChange(value) {
        this.setState({ value });
    }
    render() {
        const { value } = this.state;
        const options = [
            { value: "1", label: "Пункт 1" },
            { value: "2", label: "Пункт 2" },
            { value: "3", label: "Пункт 3" },
            { value: "4", label: "Пункт 4" },
            { value: "5", label: "Пункт 5" },
            { value: "6", label: "Пункт 6" },
            { value: "7", label: "Пункт 7" },
            { value: "8", label: "Пункт 8" },
            { value: "9", label: "Пункт 9" },
            { value: "10", label: "Пункт 10" }
        ];
        return (
            <div style={{ width: 250 }}>
                <Select
                    placeholder="Выбери что-нибудь"
                    searchable
                    options={options}
                    value={value}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        )
    }
}

<SelectSearchableExample/>
```

#### Множественный выбор с поиском
```js
class SelectMultipleSearchableExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: []
        };
    }
    onChange(value) {
        this.setState({ value });
    }
    render() {
        const { value } = this.state;
        const options = [
            { value: "1", label: "Пункт 1" },
            { value: "2", label: "Пункт 2" },
            { value: "3", label: "Пункт 3" },
            { value: "4", label: "Пункт 4" },
            { value: "5", label: "Пункт 5" },
            { value: "6", label: "Пункт 6" },
            { value: "7", label: "Пункт 7" },
            { value: "8", label: "Пункт 8" },
            { value: "9", label: "Пункт 9" },
            { value: "10", label: "Пункт 10" }
        ];
        return (
            <div style={{ width: 250 }}>
                <Select
                    placeholder="Выбери что-нибудь"
                    multiple
                    searchable
                    options={options}
                    value={value}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        )
    }
}

<SelectMultipleSearchableExample/>
```