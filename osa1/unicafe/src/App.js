import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
  }

  handleGoodClick = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1
    }));    
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

  render() {
    return (
      <div className="App">
        <h1>anna palautetta</h1>
        <button onClick={this.handleGoodClick}>Hyvä</button>
        <button onClick={this.handleNeutralClick}>Neutraali</button>
        <button onClick={this.handleBadClick}>Huono</button>
        <h1>statistiikka</h1>
        <br />
        <p>hyvä {this.state.good}</p>
        <p>neutraali {this.state.neutral}</p>
        <p>huono {this.state.bad}</p>
      </div>
    );
  }
}

export default App;
