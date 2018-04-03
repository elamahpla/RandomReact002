import React, { Component } from 'react';

class MinusOne extends Component {
  state = {
    count: 0
  }
  handleMinusOne = () => {
    this.setState({count: this.state.count - 1});
  }
  resetAllHandler = () => {
    this.setState({count: 0});
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.resetAllHandler}>Reset</button>
      </div>
    );
  }
}

export default MinusOne;