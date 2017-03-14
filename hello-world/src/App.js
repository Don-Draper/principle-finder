import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Button } from 'reactstrap';



class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      quotes: {
        compassionate: ['compassionate 1', 'compassionate 2'],
        grateful: ['grateful 1', 'grateful 2'],
        gritty: ['gritty 1', 'gritty']
      },
      thisQuote: ''
      // this.props.quotes.compassionate[0]
    }

  }

handleClickComp(){
  console.log('comp button clicked');
    fetch('../server.js')
    .then(function(response){
      console.log(response);
    });
  // this.setState({
  //   thisQuote: this.state.quotes.compassionate[Math.floor(Math.random()* this.state.quotes.compassionate.length)]
  // });
};

handleClickGrate(){
  console.log('button');
  this.setState({
    thisQuote: this.state.quotes.grateful[Math.floor(Math.random()* this.state.quotes.grateful.length)]
  });
};

handleClickGrit(){
  console.log('button');
  this.setState({
    thisQuote: this.state.quotes.gritty[Math.floor(Math.random()* this.state.quotes.gritty.length)]
  });
};

  render() {
    return (
      <div className="App">
        <div className="App-header">

          <h2>What do you want to be?</h2>
        </div>

          <p></p>
            <Principle
              trait={'Compassionate'}
              handleClick={this.handleClickComp.bind(this)} />
          <p></p>
            <Principle
              trait={'Grateful'}
              handleClick={this.handleClickGrate.bind(this)} />
          <p></p>
            <Principle
              trait={'Gritty'}
              handleClick={this.handleClickGrit.bind(this)} />
          <p></p>

          <h2>Then repeat this three times at every meal...</h2>
          <p></p>

          <PrincipleList principle={this.state.thisQuote} />
      </div>
    );
  }
}

var PrincipleList = ({principle}) => (
  <div>


    <h3>{principle}</h3>


  </div>
);

var Principle = ({trait, handleClick}) => (
  <div className="App">

    <Button
      onClick={() => {handleClick()}}>{trait}
    </Button>

  </div>

);

export default App;
