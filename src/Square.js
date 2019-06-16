import React from 'react';
import './Square.css';

const Square = (props) => (

  <g className="open" onClick={() => props.onClick(props.id)}>
    <rect className="square" x={props.x} y={props.y} width="45" height="45" />
    <path className="mazePassage" d={
      `M${props.x} ${props.y} m11 11
      ${props.value & 4 ? 'v23' : 'h-10 v23 h10'}
      ${props.value & 8 ? 'h23' : 'v10 h23 v-10'}
      ${props.value & 1 ? 'v-23' : 'h10 v-23 h-10'}
      ${props.value & 2 ? 'h-23' : 'v-10 h-23 v10'}
      Z`
    } />
  </g>
);


export default Square;
