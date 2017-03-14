import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Button } from 'reactstrap';



class App extends Component {

  constructor (props) {
    super(props);

    this.state = {
      quotes: {
        compassionate: ['Remember we are each of us human, you no more (or less) than anyone else', 'It\'s easy to see the splinter in someone else\'s eye but not the log in our own', 'Be kind. For everyone you meet is fighting their own version of your battle', 'If someone you love hurts you, it might be a sign they\'re in pain and need your help', 'Wisdom, compassion and courage are the three universally recognized moral qualities of men', 'We all screw up. The idea another\'s mistakes are worse is an illusion only idiots give in to', 'Forgiveness is twice as good. It balms the souls of both parties', 'Forgiveness is a balm to the soul'],
        grateful: ['Over breakfast everyday, contemplate all you\'re thankful for', 'Write down one thing you\'re grateful for - right now', 'Send someone a text right now thanking them for being in your life', 'Don\'t compare yourself to others, moron. We\'re on incomparable paths', 'Gratitude is the soul\'s analgesic', 'Who do you love? You just got a text: They were in a terrible auto accident', 'How would it feel to lose your job?', 'What was it like when you were at rock bottom?', 'Who lifts you up when you\'re down? Call and thank them', 'There have been about 100 billion human beings who have ever lived. As far as comfort and ease of living, you are in the top one percent of the top one percent of the top one percent', 'Call your Mom' ],
        gritty: ['Pain is weakness leaving the body', 'That which does not kill you makes you stronger', 'We gather strength as we go', 'The obstacle is The Way', 'On the Plains of Hesitation lie the blackened bones of countless millions who, at the dawn of victory, sat down to rest, and in resting, died', 'Pursue what interests you', 'Just keep going', 'Quitting is for lesser souls']
      },
      thisQuote: ''
      // this.props.quotes.compassionate[0]
    }

  }

handleClickComp(){
  // var myHeaders = new Headers();
  var myInit = { method: 'GET',

               mode: 'no-cors'
};

  console.log('comp button clicked');
    fetch('http://localhost:4568/', myInit)
    .then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(data);
}).catch(function() {
  console.log("Booo");
});

    // .then(function(response){
    //   console.log('got back a response from fetch')
    //   console.log(response);
    // });
// fetch('http://localhost:4568/')

  // this.setState({
  //   thisQuote: this.state.quotes.compassionate[Math.floor(Math.random()* this.state.quotes.compassionate.length)]
  // });
};

handleClickComp(){
  console.log('button');
  this.setState({
    thisQuote: this.state.quotes.compassionate[Math.floor(Math.random()* this.state.quotes.compassionate.length)]
  });
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
          <br/>
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
          <br/>

          <h2>Then this is for you...</h2>

          <span>
          <p></p>
          <p><text>{
            <br/>
          }</text></p>
          </span>

          <PrincipleList principle={this.state.thisQuote} />
      </div>
    );
  }
}

var PrincipleList = ({principle}) => (
  <div>


    <h1>{principle}</h1>


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
