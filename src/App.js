import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import fullwidth from 'fullwidth';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullwidth: ''
    };

    this.fullwidthize = this.fullwidthize.bind(this);
  }

  fullwidthize(e) {
    this.setState({fullwidth: fullwidth(e.target.value)});
  }

  render() {
    return (
      <div>
        <input onInput={this.fullwidthize} />
        <input value={this.state.fullwidth} />
      </div>
    );
  }
}

export default App;
