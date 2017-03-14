import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from 'reactstrap';



class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      quotes: 'this one'
    }

  }

handleClickCompassionate(){
  console.log('button clicked');
}

handleClickGrateful(){
  console.log('button clicked');
}

handleClickGritty(){
  console.log('button clicked');
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          // <img src={logo} className="App-logo" alt="logo" />
          <h2>What do you want to be?</h2>
        </div>

        <Button onClick={this.handleClickCompassionate}>Compassionate
        </Button>

        <Button onClick={this.handleClickGrateful}>Grateful
        </Button>

        <Button onClick={this.handleClickGritty}>Gritty
        </Button>

      </div>
    );
  }
}

export default App;
