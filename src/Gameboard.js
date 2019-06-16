import React from 'react';
import './Gameboard.css';

import Token from './Token.js';
import Square from './Square.js';

class Gameboard extends React.Component {
  // Generate a random maze configuration to start the game

  constructor(props) {
    super(props);
    this.state = {
      maze: this.randomizeMaze(),
      tokens: this.placePlayerTokens(this.props.numPlayers)
    };
  }

  randomizeMaze() {
    // Add static tiles: the 4 corners and the center of the maze
    let maze = [{id: 0, x:0, y:0, value: 6}, {id: 1, x:8*50, y:0, value: 3}, {id: 2, x:8*50, y:8*50, value: 9}, {id: 3, x:0, y:8*50, value: 12}, {id: 4, x: 4*50, y: 4*50, value: 0}];
    
    let shuffle = (array) => { return array.sort(() => Math.random() - 0.5)};
    
    // Generate list of randomized tiles to be placed into the maze
    let tiles = [
      3, 3, 3, 3, 3, 3, 3,
      6, 6, 6, 6, 6, 6, 6,
      9, 9, 9, 9, 9, 9, 9,
      12, 12, 12, 12, 12, 12, 12,
      1, 1, 1, 1, 1, 1, 1, 1,
      2, 2, 2, 2, 2, 2, 2, 2,
      4, 4, 4, 4, 4, 4, 4, 4,
      8, 8, 8, 8, 8, 8, 8, 8,
      5, 5, 5, 5, 5, 5, 5, 5,
      10, 10, 10, 10, 10, 10, 10, 10
    ];
    
    tiles = shuffle(tiles);

    // Generate a 9 by 9 array to represent the maze
    let id = 5;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        // Place a tile at the current position if there isn't already one there
        if (!maze.some(m => { return m.x === i*50 && m.y === j*50})) {
          maze.push({id:id, x: i*50, y:j*50, value: tiles.pop()});
          id++;
        }
      }
    }

    return maze;
  }

  placePlayerTokens(numPlayers) {
    let tokens = [{id: 1, x: 22, y: 22}, {id: 2, x: 422, y: 22}, {id: 3, x: 22, y: 422}, {id: 4, x: 422, y: 422}];
    return tokens.slice(0, numPlayers);
  }

  // Shift a row or column in the maze by the specified number of squares
  shiftRow() {

  }

  // Mark each square in the maze as passable if it can be reached by the position of the current player, specified by x and y
  findValidPath(x, y) {

  }

  // If a player clicks on a valid square, move their token to that position and end their turn
  onClick = (id) => {

    let clickedSquare = this.state.maze.find((e) => { return e.id === id});
    let playerToken = this.state.tokens.find((e) => { return e.id === this.props.currentPlayer });

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
          {this.state.maze.map(s => <Square key={s.id} {...s} onClick={this.onClick}/>)}
          {this.state.tokens.map(t => <Token key={t.id} {...t} />)}
        </svg>
      </div>
    );
  }

}

export default Gameboard;
