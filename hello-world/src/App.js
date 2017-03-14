import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Button } from 'reactstrap';



class Principle extends Component {

  constructor (props) {
    super(props);

    this.state = {
      quotes: this.props
    }

  }

handleClick(){
  console.log('button clicked');
  // this.setState({

  // })
}

// handleClickGrateful(){
//   console.log('button clicked');
// }

// handleClickGritty(){
//   console.log('button clicked');
// }

  render() {
    return (
      <div className="App">

        <Button
          onClick={this.handleClick.bind(this)}>{this.props.trait}
        </Button>

      </div>
    );
  }
}

var PrincipleList = (props) => (
  <div>
    <ul>

    Eat your cornflakes

    </ul>
  </div>
);

var App = (props) => (
  <div className="App">
    <div className="App-header">

      <h2>What do you want to be?</h2>
    </div>
    {props.traits.map(trait =>
      <Principle trait={trait} />
    )}

      <h2>Then repeat these three times over breakfast every day...</h2>
      <PrincipleList  />

  </div>

);

export default App;
