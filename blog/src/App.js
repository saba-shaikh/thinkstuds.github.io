import React, { Component } from 'react';
import logo from './assets/images/ThinkStuds@2x.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" height="70" width="70" />
          <span className="App-title">
            <span className="App-title-first-letter">T</span>hink studs
          </span>
        </header>
      </div>
    );
  }
}

export default App;
