import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      filterString: '',
      foods: ['cheeseburger','sushi','apples','rice','cereal']
    }
  }

  handleChange(filter) {
    this.setState({ filterString: filter})
  }

  render (){
    let foodDisplay = this.state.foods
    .filter((el,index)=> {
      return el.includes(this.state.filterString)
    })
    .map((el,index)=> {
      return <h2 key={index}> {el} </h2>
    })

    return(
    <div className="App">
      <input onChange={e => this.handleChange(e.target.value)} type ='text'/>
      {foodDisplay}
    </div>
  );
}
}
export default App;
