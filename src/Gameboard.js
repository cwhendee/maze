import React from 'react';
import './Gameboard.css';

import Token from './Token.js';
import Square from './Square.js';

class Gameboard extends React.Component {
  // Generate a random maze configuration to start the game

  constructor(props) {
    super(props);
    this.initialize(this.props.numPlayers);
  }

  maze = [];
  tokens = [];

  initialize(numPlayers) {
    // Generate a 9 by 9 array to represent the maze
    let id = 0;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.maze.push({id:id, x: i*50, y:j*50, value:0})
        id++;
      }
    }

    // Create the tokens for each player at their default starting position
    for (let p = 0; p < numPlayers; p++) {
      this.tokens.push({id:p+1, x:p%2 * 400 + 22, y:Math.floor(p/2) * 400 + 22});
    }
  }

  // Shift a row or column in the maze by the specified number of squares
  shiftRow() {

  }

  // Mark each square in the maze as passable if it can be reached by the position of the current player, specified by x and y
  findValidPath(x, y) {

  }

  // If a player clicks on a valid square, move their token to that position and end their turn
  onClick = (id) => {

    let clickedSquare = this.maze.find((e) => { return e.id === id});
    let playerToken = this.tokens.find((e) => { return e.id === this.props.currentPlayer });

    if (playerToken && clickedSquare) {
      playerToken.x = clickedSquare.x + 22;
      playerToken.y = clickedSquare.y + 22;
    }

    this.props.endTurn();
  };

  render() {
    return (
      <div id="Gameboard">
        <svg className="maze" width={this.props.width} height={this.props.height}>
          {this.maze.map(s => <Square key={s.id} {...s} onClick={this.onClick}/>)}
          {this.tokens.map(t => <Token key={t.id} {...t} />)}
        </svg>
      </div>
    );
  }

}

export default Gameboard;
