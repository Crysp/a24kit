```js
class ExampleModal extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            visible: false
        };
    }
    onOpen() {
        this.setState({ visible: true });
    }
    onCancel() {
        this.setState({ visible: false });
    }
    onOk() {
        this.setState({ loading: true });
        setTimeout(() => this.setState({ loading: false, visible: false }), 3000);
    }
    render() {
        return (
            <div>
                <Button onClick={this.onOpen.bind(this)}>Открыть</Button>
                <Modal
                    title="Название заголовка"
                    visible={this.state.visible}
                    onCancel={this.onCancel.bind(this)}
                    onOk={this.onOk.bind(this)}
                    okLoading={this.state.loading}
                >
                    <p>какой-то текст</p>
                    <p>какой-то текст</p>
                    <p>какой-то текст</p>
                </Modal>
            </div>
        );
    }
}
<ExampleModal/>
```

```js
const Button = require('../Button').default;
class ExampleCustomModal extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            visible: false
        };
    }
    onOpen() {
        this.setState({ visible: true });
    }
    onCancel() {
        this.setState({ visible: false });
    }
    onOk() {
        this.setState({ loading: true });
        setTimeout(() => this.setState({ loading: false, visible: false }), 3000);
    }
    render() {
        return (
            <div>
                <Button onClick={this.onOpen.bind(this)}>Открыть</Button>
                <Modal
                    title="Название заголовка"
                    visible={this.state.visible}
                    onCancel={this.onCancel.bind(this)}
                    footer={[
                        <Button
                            key="close"
                            color="red"
                            onClick={this.onCancel.bind(this)}
                        >
                            Закрыть
                        </Button>,
                        <Button
                            key="confirm"
                            color="green"
                            onClick={this.onOk.bind(this)}
                            loading={this.state.loading}
                        >
                            Готово
                        </Button>
                    ]}
                >
                    <p>какой-то текст</p>
                    <p>какой-то текст</p>
                    <p>какой-то текст</p>
                </Modal>
            </div>
        );
    }
}
<ExampleCustomModal/>
```

```js
class ExampleModal extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            visible: false
        };
    }
    onOpen() {
        this.setState({ visible: true });
    }
    onCancel() {
        this.setState({ visible: false });
    }
    render() {
        return (
            <div>
                <Button onClick={this.onOpen.bind(this)}>Вертикально отцентрировано</Button>
                <Modal
                    title="Название заголовка"
                    verticalCentered
                    visible={this.state.visible}
                    onCancel={this.onCancel.bind(this)}
                    onOk={this.onCancel.bind(this)}
                    okLoading={this.state.loading}
                >
                    <p>какой-то текст</p>
                    <p>какой-то текст</p>
                    <p>какой-то текст</p>
                </Modal>
            </div>
        );
    }
}
<ExampleModal/>
```


```js
class ExampleFooterModal extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            visible: false
        };
    }
    onOpen() {
        this.setState({ visible: true });
    }
    onCancel() {
        this.setState({ visible: false });
    }
    render() {
        return (
            <div>
                <Button onClick={this.onOpen.bind(this)}>Без кнопок</Button>
                <Modal
                    title="Название заголовка"
                    visible={this.state.visible}
                    onCancel={this.onCancel.bind(this)}
                    footer={null}
                >
                    <p>какой-то текст</p>
                    <p>какой-то текст</p>
                    <p>какой-то текст</p>
                </Modal>
            </div>
        );
    }
}
<ExampleFooterModal/>
```