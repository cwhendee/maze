import React from 'react';
import './Square.css';

const Square = (props) => <rect className="open square" x={props.x} y={props.y} width="45" height="45" onClick={() => props.onClick(props.id)}></rect>


export default Square;
