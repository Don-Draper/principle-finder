import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'reactstrap';

function handleClickCompassionate(){
  console.log('button clicked');
}

function handleClickGrateful(){
  console.log('button clicked');
}

function handleClickGritty(){
  console.log('button clicked');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          // <img src={logo} className="App-logo" alt="logo" />
          <h2>What do you want to be?</h2>
        </div>

        <Button onClick={handleClickCompassionate}>Compassionate
        </Button>

        <Button onClick={handleClickGrateful}>Grateful
        </Button>

        <Button onClick={handleClickGritty}>Gritty
        </Button>

      </div>
    );
  }
}

export default App;
