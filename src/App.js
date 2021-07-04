import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  render () {
    const divStyle = {
      textAlign: 'center'
    }
    return (
      <div style={divStyle}>
        <h1>Hello World!</h1>
        <Car name={'Mazda'} year={2017}>
          <p>collor</p>
        </Car>
        <Car name={'Audi'} year={2010} />
      </div>
    );
  }

}

export default App;
