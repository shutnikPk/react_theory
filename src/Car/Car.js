import React from 'react';

// function Car(props) {
//     return (
//         <div className = "car">
//         <h3>{props.name}</h3>
//         <p>Year: <strong>{props.year}</strong></p>
//         <p>Best price!!!</p>
//       </div>
//     )
// }

// const car = (props)=>{
//     return (
//         <div className = "car">
//         <h3>{props.name}</h3>
//         <p>Year: <strong>{props.year}</strong></p>
//         <p>Best price!!!</p>
//       </div>
//     )
// }

const car = (props)=>(
        <div className = "car">
        <h3>{props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <p>Best price!!!</p>
      </div>
    )
    
export default car;