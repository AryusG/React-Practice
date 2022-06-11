import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initCount,
    };
  }
  funcIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  funcDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    console.log("Render function called");
    return (
      <div>
        <div>Count up n down: {this.state.count}</div>
        <button onClick={this.funcIncrement}>Increment</button>
        <button onClick={this.funcDecrement}>Decrement</button>
      </div>
    );
  }
}
