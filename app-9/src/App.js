import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Link} from 'react-router-dom'
import router from './Router'

class App extends Component {
  render(){  
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to='/'> Home </Link>
          <Link to ='/signup'> Sign up </Link>
          <Link to ='/details'> Details </Link>
        </ul>
      </nav>
      {router}
    </div>
  );
}
}

export default App

