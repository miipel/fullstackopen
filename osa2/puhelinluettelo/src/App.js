import React from 'react';

import Filter from './Filter';
import Form from './Form';
import numberService from './services/numbers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    };
  }

  componentDidMount() {
    numberService.getAll().then(response => {
      this.setState({ persons: response.data });
    });
  }

  componentDidUpdate () {
    numberService.getAll().then(response => {
      this.setState({ persons: response.data });
    });
  }

  nameChangedHandler = event => {
    this.setState({ newName: event.target.value });
  };

  numberChangedHandler = event => {
    this.setState({ newNumber: event.target.value });
  };

  numberRemovedHandler = (id, name) => {
    const confirmRemoval = window.confirm('poistetaanko ' + name);
    console.log(confirmRemoval);
    numberService.remove(id);
  };

  filterChangedHandler = event => {
    this.setState({ filter: event.target.value });
  };

  addPerson = event => {
    event.preventDefault();
    if (this.state.persons.find(person => person.name === this.state.newName)) {
      alert('This name has already been added');
      return;
    } else {
      const newPerson = {
        name: this.state.newName,
        number: this.state.newNumber
      };
      const newPersons = this.state.persons.concat(newPerson);
      this.setState({
        persons: newPersons,
        newName: '',
        newNumber: ''
      });
      numberService.create(newPerson);
    }
  };

  render() {
    const nameList =
      this.state.filter === ''
        ? this.state.persons
        : this.state.persons.filter(person =>
            person.name.toLowerCase().match(this.state.filter.toLowerCase())
          );

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
            {nameList.map(person => (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.number}</td>
                <td>
                  <button
                    onClick={() =>
                      this.numberRemovedHandler(person.id, person.name)
                    }
                  >
                    poista
                  </button>
                </td>
              </tr>
            ))}
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
    );
  }
}

export default App;
