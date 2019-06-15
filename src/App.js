import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Gameboard from './Gameboard.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Gameboard width="500" height="500" />
        </header>
      </div>
    );
  }
}

export default App;