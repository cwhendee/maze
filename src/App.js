import React from 'react';
import './App.css';
import Gameboard from './Gameboard.js';
import PlayerList from './PlayerList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNames: ['Player 1', 'Player 2', 'Player 3', 'Player 4'],
      currentPlayer: 1
    };
  }
  
  // End the current turn and begin turn for the next player
  endTurn = () => {
    this.setState((state, props) => ({currentPlayer: state.currentPlayer % state.playerNames.length + 1}));
  }
  
  render() {
    return (
      <div id="Container">
        <h1>Creatures &amp; Corridors</h1>
        <Gameboard width="450" height="450" numPlayers={this.state.playerNames.length} currentPlayer={this.state.currentPlayer} endTurn={this.endTurn} />
        <PlayerList names={this.state.playerNames} currentPlayer={this.state.currentPlayer} />
      </div>
    );
  }
}

export default App;