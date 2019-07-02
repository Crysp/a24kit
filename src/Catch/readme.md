```js
class BuggyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }
  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw new Error('I crashed!');
    }
    return <Button onClick={this.onClick}>Count {this.state.counter}</Button>;
  }
}

<Catch>
    <BuggyCounter/>
</Catch>
```