import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Todo extends Component {

      render() {
        return <p>{this.props.task}</p>;
      }
    }

export default Todo