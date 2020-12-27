import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'

class App extends Component {
  render(){

  return (
    <div className="App">
      <Image url={'https://images.squarespace-cdn.com/content/51b3dc8ee4b051b96ceb10de/1545711785883-JU21MGUKCQNOTJKZFX15/new-star-wars-christmas-art-may-the-force-be-with-you-this-holiday-season-social.jpg?format=1500w&content-type=image%2Fjpeg'}/>
    </div>
  );
}
}

export default App;
