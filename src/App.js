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

  handleInput = (e) => {
    this.setState({
      pageTitle: e.target.value
    })
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })    
  }

  render () {
    const divStyle = {
      textAlign: 'center'
    }

    const InputStyle = {
      display: 'block',
      margin: '10px auto'
    }

    const cars = this.state.cars

    return (
      <div style={divStyle}>

        <h1>{this.state.pageTitle}</h1>

        <div style={InputStyle}>
          <input type="tex" 
            onChange = {this.handleInput.bind(this)}>

          </input>

          <button
          onClick = {this.changeTitleHandler.bind(this,'changed')}> 
            {'Change Title!'}
          </button>
        </div>

        <Car 
          name={cars[0].name} 
          year={cars[0].year} 
          onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />

        <Car 
          name={cars[1].name} 
          year={cars[1].year} 
          onChangeTitle={()=>this.changeTitleHandler(cars[1].name)}
        />

      </div>
    );
  }

}

export default App;
