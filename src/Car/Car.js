import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <div className = "car">
    <h3>{props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    <p>Random number: {Math.round(Math.random()*100)}</p>
    <button onClick = {props.onChangeTitle}>{'Change Title Again!!'}</button>
  </div>
)
