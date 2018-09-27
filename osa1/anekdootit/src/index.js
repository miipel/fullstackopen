import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: [0, 0, 0, 0, 0]
    }
  }

  handleNextClick = () => {
    this.setState({
      selected:  Math.floor((Math.random() * 5) + 0)
    })
  }

  handleVoteClick = () => {
    const current = this.state.selected
    const tmp = {...this.state.votes}
    tmp[current] += 1
    this.setState({
      votes: tmp
    })
  }

  indexOfMaxVotes = () => {
    const votesArray = this.state.votes
    let max = votesArray[0]
    let maxIndex = 0

    for (let element in votesArray) {
      if (votesArray[element] > max) {
        maxIndex = element
        max = votesArray[element]
      }
    }

    return maxIndex
  }

  render() {
    const mostVotes = this.indexOfMaxVotes()
    console.log(mostVotes)

    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <p>Has {this.state.votes[this.state.selected]} votes</p>
        <br />
        <button onClick={this.handleVoteClick} >Vote</button>
        <button onClick={this.handleNextClick} >Next</button>
        <br />
        <h3>anecdote with most votes:</h3>
        {this.props.anecdotes[mostVotes]}
        <br/>
        {this.state.votes[mostVotes]}
      </div>
      
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
