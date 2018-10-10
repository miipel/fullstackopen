import React from 'react';

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
        Rajaa näytettäviä:
        <input
          type='text'
          value={this.state.filter}
          onChange={this.filterChangedHandler}
        />
        <h3>Lisää uusi</h3>
        <form onSubmit={this.addPerson} >
          <div>
            nimi:
            <input
              type='text'
              value={this.state.newName}
              onChange={this.nameChangedHandler}
            />
          </div>
          <div>
            numero:
            <input
              type='number'
              value={this.state.newNumber}
              onChange={this.numberChangedHandler}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
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