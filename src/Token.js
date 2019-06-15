import React from 'react';
import './Token.css';

const Token = (props) => <circle className={`token player${props.id}`} r="15" cx={props.x} cy={props.y}></circle>

export default Token;
