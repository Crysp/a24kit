```js
function callback(key) {
  console.log(key);
}

<Tabs defaultActiveKey="tab1" onChange={callback}>
    <Tabs.TabPane tab="Tab 1" key="tab1">Content of Tab Pane 1</Tabs.TabPane>
    <Tabs.TabPane tab="Tab 2" key="tab2">Content of Tab Pane 2</Tabs.TabPane>
    <Tabs.TabPane tab="Tab 3" key="tab3">Content of Tab Pane 3</Tabs.TabPane>
</Tabs>
```

```js
<Tabs defaultActiveKey="1" style={{ height: 220 }}>
    <Tabs.TabPane tab="Tab 1" key="1">Content of tab 1</Tabs.TabPane>
    <Tabs.TabPane tab="Tab 2" key="2">Content of tab 2</Tabs.TabPane>
    <Tabs.TabPane tab="Tab 3" key="3">Content of tab 3</Tabs.TabPane>
    <Tabs.TabPane tab="Tab 4" key="4">Content of tab 4</Tabs.TabPane>
    <Tabs.TabPane tab="Tab 5" key="5">Content of tab 5</Tabs.TabPane>
    <Tabs.TabPane tab="Tab 6" key="6">Content of tab 6</Tabs.TabPane>
    <Tabs.TabPane tab="Tab 7" key="7">Content of tab 7</Tabs.TabPane>
    <Tabs.TabPane tab="Tab 8" key="8">Content of tab 8</Tabs.TabPane>
    <Tabs.TabPane tab="Tab 9" key="9">Content of tab 9</Tabs.TabPane>
    <Tabs.TabPane tab="Tab 10" key="10">Content of tab 10</Tabs.TabPane>
    <Tabs.TabPane tab="Tab 11" key="11">Content of tab 11</Tabs.TabPane>
</Tabs>
```

```js
<Tabs defaultActiveKey="main" size="large">
    <Tabs.TabPane key="main" tab="Главная"/>
    <Tabs.TabPane key="auction" tab="Аукцион заказов"/>
    <Tabs.TabPane key="orders" tab="Мои заказы"/>
    <Tabs.TabPane key="balance" tab="Баланс"/>
    <Tabs.TabPane key="profile" tab="Профиль"/>
</Tabs>
```

#### Контроллируемые вкладки
```js
class TabsControlledExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKey: 'a'
        };
    }
    onChange(activeKey) { this.setState({ activeKey }) }
    render() {
        const { activeKey } = this.state;
        return (
            <Tabs onChange={this.onChange.bind(this)} activeKey={activeKey}>
                <Tabs.TabPane key="a" tab="Tab A">
                    <div style={{ padding: 24 }}>
                        <H>Controllable Tab A</H>
                        <P>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id velit aliquet,
                            scelerisque enim non, ullamcorper leo. Cras ultricies, nisl vel sollicitudin scelerisque, dui
                            metus aliquet lacus, a luctus arcu risus ut dui. Proin mollis eros ac dictum lobortis. Vivamus
                            feugiat posuere cursus. Integer efficitur feugiat dolor, non ultrices est sodales non. Nullam
                            sodales gravida nisi, sit amet facilisis libero sagittis a. Nulla laoreet auctor mi, vestibulum
                            egestas velit pulvinar eget. Proin iaculis nunc ante, id dictum sem tincidunt eget. Integer
                            congue leo vitae purus rhoncus placerat.
                        </P>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane key="b" tab="Tab B">
                    <div style={{ padding: 24 }}>
                        <H>Controllable Tab B</H>
                        <P>
                            Aliquam volutpat pretium lorem id dapibus. Donec magna elit, lobortis nec maximus eget,
                            bibendum ac arcu. Pellentesque sit amet enim iaculis, sagittis arcu eget, porta eros. In
                            ultricies, metus sit amet pulvinar tristique, libero dui maximus enim, vitae maximus risus
                            ex eu erat. Aenean non odio tortor. Quisque non faucibus lectus. Phasellus rutrum scelerisque
                            elit nec tempor. Praesent imperdiet condimentum sollicitudin. Aliquam luctus tincidunt
                            volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae felis eu
                            velit cursus condimentum.
                        </P>
                    </div>
                </Tabs.TabPane>
                <Tabs.TabPane key="c" tab="Tab C">
                    <div style={{ padding: 24 }}>
                        <H>Controllable Tab C</H>
                        <P>
                            Nunc vel rutrum eros, vitae faucibus elit. Praesent et imperdiet orci. Nam sed viverra purus.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis
                            sodales erat in consequat pellentesque. Etiam cursus sit amet massa sit amet venenatis. Nulla
                            dictum, ante a eleifend suscipit, augue odio placerat eros, rhoncus tincidunt quam dolor a enim.
                            Quisque sit amet risus laoreet, aliquet ex at, lacinia urna. Mauris pellentesque nibh non luctus
                            consectetur. Curabitur tincidunt, eros quis pretium posuere, arcu nulla aliquet nibh, et
                            facilisis lorem ante ac leo. Aliquam eleifend metus eu scelerisque rutrum. Etiam nec sagittis
                            risus. In feugiat lorem et est ultricies, non pharetra risus laoreet. Orci varius natoque
                            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </P>
                    </div>
                </Tabs.TabPane>
            </Tabs>
        )
    }
}

<TabsControlledExample/>
```