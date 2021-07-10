import React from 'react';
import Radium from 'radium'
import './Car.css';
// eslint-disable-next-line import/no-anonymous-default-export

const Car = (props) => {

  const style = {    
    border:' 2px solid #aaa',
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
    ':hover': {
      border:'5px solid black',
      borderRadius: '10px',
      boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer'
    }
  }

  const inputClasses = ['input']

  props.name !== '' ?
    inputClasses.push('green')
  : inputClasses.push('red')


  if(props.name.length > 4) {inputClasses.push('bold')}

  return(
      <div className = "car" style={style}>
      <h3>{props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      <
        input type = "text" 
        onChange = {props.onChangeName} 
        value = {props.name}
        className = {inputClasses.join(' ')}
      />
      { <button onClick = {props.onDelete}>{'Delete this car'}</button> }
    </div>
  )
}

export default Radium(Car)
