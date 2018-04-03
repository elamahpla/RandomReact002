import React, { Component } from 'react';
import PlusOne from './Components/PlusOne/PlusOne';
import MinusOne from './Components/MinusOne/MinusOne';
import VisibilityToggle from './Components/VisibilityToggle/VisibilityToggle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
          <PlusOne />
          <MinusOne /><br/><br/><hr/>
          <VisibilityToggle />
      </div>
    );
  }
}

export default App;
