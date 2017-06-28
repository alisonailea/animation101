import React, { Component } from 'react';
import Button from 'lucid-ui/Button';
import bgImg from './1.jpg';
import '../node_modules/lucid-ui/dist/index.css';
import './Base.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={bgImg} className='Background-image' alt="an image of blured lines connecting buildings across a city"/>
        <div className='App-content'>
          <div className="App-header">
            <h2>Animation 101</h2>
          </div>
          <div className="App-animations">
            <Button className='Button'>Animate!</Button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

