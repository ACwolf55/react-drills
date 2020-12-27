import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super ()

    this.state = {
      lukeSkywalker: ""
    }
  }
componentDidMount(){
  axios.get("https://swapi.dev/api/people/1/").then(res => {
    this.setState({ lukeSkywalker: res.data})
  })
}

render() {
  return (
    <div className="App">
    <h1> Name: {this.state.lukeSkywalker.name}</h1>
    <h1> Birth Year: {this.state.lukeSkywalker.birth_year}</h1>
    <h1> Height: {this.state.lukeSkywalker.height}cm</h1>
    <h1> Gender: {this.state.lukeSkywalker.gender}</h1>
    </div>
  );
  }

}


export default App;
