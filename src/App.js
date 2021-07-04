import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'Mazda', year: 2017},
      {name: 'Audi', year: 2016}
    ],
    pageTitle: 'Title!'
  }

  changeTitleHandler = () => {

    const newTitle = `Title! is changed ${String.fromCharCode(Math.round(Math.random()*100))}`

    this.setState({
      pageTitle: newTitle
    })
    
  }

  render () {
    const divStyle = {
      textAlign: 'center'
    }

    const buttonStyle = {
      display: 'block',
      margin: '10px auto'
    }

    const cars = this.state.cars

    return (
      <div style={divStyle}>

        <h1>{this.state.pageTitle}</h1>

        <button style={buttonStyle} onClick = {this.changeTitleHandler}> {'Change Title!'}</button>

        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />

      </div>
    );
  }

}

export default App;
