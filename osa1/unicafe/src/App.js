import React, { Component } from 'react';
import './App.css';

import Button from './Button'
import Statistics from './Statistics'

class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  handleGoodClick = () => {
        
  }

  handleNeutralClick = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1
    }));    
  }

  handleBadClick = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1
    }));    
  }

  handleClick = (clickIdentifier) => (event) =>{
    switch(clickIdentifier) {
      case 'good':
        this.setState((prevState) => ({
          good: prevState.good + 1
        }));
        break
      case 'neutral':
        this.setState((prevState) => ({
          neutral: prevState.neutral + 1
        }));
        break
      case 'bad':
        this.setState((prevState) => ({
          bad: prevState.bad + 1
        }));
        break
      default:
          break
    } 
  }

  render() {
    return (
      <div className="App">
        <h1>anna palautetta</h1>
        <Button handler={this.handleClick('good')} name='Hyvä' />
        <Button handler={this.handleClick('neutral')} name='Neutraali' />
        <Button handler={this.handleClick('bad')} name='Huono' />
        <Statistics data={this.state} />      
      </div>
    );
  }
}

export default App;
