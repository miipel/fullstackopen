import React from 'react'

import Filter from './Filter'
import Form from './Form'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Martti Tienari', number: '040-123456' },
        { name: 'Arto Järvinen', number: '040-123456' },
        { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  nameChangedHandler = (event) => {
    this.setState({ newName: event.target.value })
  }

  numberChangedHandler = (event) => {
    this.setState({ newNumber: event.target.value })
  }

  filterChangedHandler = (event) => {
    this.setState({ filter: event.target.value })
  }

  addPerson = (event) => {
    event.preventDefault()
    if(this.state.persons.find(person => person.name === this.state.newName)) {
      alert('This name has already been added')
      return
    } else {
      const newPerson = { name: this.state.newName, number: this.state.newNumber }
      const newPersons = this.state.persons.concat(newPerson)
      this.setState({
        persons: newPersons,
        newName: '',
        newNumber: ''
      })
    }
  }

  render() {
    const nameList = this.state.filter === '' ?
      this.state.persons :
      this.state.persons.filter(person => person.name.toLowerCase().match(this.state.filter.toLowerCase()))

    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Filter 
          filterWord={this.state.filter} 
          changeHandler={this.filterChangedHandler} 
        />
        <Form 
          addNew={this.addPerson} 
          name={this.state.newName}
          nameChanged={this.nameChangedHandler}
          number={this.state.newNumber}
          numberChanged={this.numberChangedHandler}
        />
        <h3>Numerot</h3>
        <table>
          <tbody>
            {nameList.map(person =>
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.number}</td>
              </tr>)}
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td>Debug: </td>
              <td>{this.state.newName}</td>
              <td>{this.state.newNumber}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App