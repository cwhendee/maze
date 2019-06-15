import React from 'react';
import './PlayerList.css';

class PlayerList extends React.Component {

  render() {
    return (
      <ul id="PlayerList">
        {this.props.names.map((n, i) => <li key={i+1} className={`player${i+1} ${this.props.currentPlayer === i+1 ? 'active' : ''}`} >{n}</li>)}
      </ul>
    );
  }
}

export default PlayerList;
