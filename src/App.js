import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      {name: 'Mazda', year: 2017},
      {name: 'Audi', year: 2016}
    ],
    pageTitle: 'Title!',
    showCars: true
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })

  }

  onChangeNameHandler = (name, index) => {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({
      cars: cars
    })
  }

  onDeleteHandler = (index) => {
    let cars = [...this.state.cars]
    cars[index] = null
    cars = cars.filter(car => car!==null)
    this.setState({cars})
  }

  render () {
    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>

        <h1>{this.state.pageTitle}</h1>

        <div className='InputStyle'>
          <button
          onClick = {this.toggleCarsHandler}> 
            {'Toggle Cars'}
          </button>
        </div>

        {this.state.showCars
          ? this.state.cars.map((car, index)=>{
            return (
              <Car 
                key={index}
                name={car.name} 
                year={car.year}
                onDelete = {()=>this.onDeleteHandler(index)}
                onChangeName = { event => this.onChangeNameHandler(event.target.value, index)}
              />
            )
          })
          : null
        }
      </div>
    );
  }

}

export default App;
