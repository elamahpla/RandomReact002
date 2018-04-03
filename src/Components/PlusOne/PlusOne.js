import React, { Component } from 'react';

class PlusOne extends Component {
  state = {
    count: 0
  }
  handleAddOne = () => {
    this.setState({count: this.state.count + 1});
  }
  resetAllHandler = () => {
    this.setState({count: 0});
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.resetAllHandler}>Reset</button>
      </div>
    );
  }
}

export default PlusOne;