import React, {Component} from 'react';

class Gameboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Gameboard" width="{props.width}" height="{props.height}">
        <h1>Creatures &amp; Corridors</h1>
      </div>
    );
  }
}

export default Gameboard;
