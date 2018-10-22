import React from 'react';

import Filter from './Filter';
import Form from './Form';
import Notification from './Notification';
import numberService from './services/numbers';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      message: null
    };
  }

  componentDidMount() {
    numberService.getAll().then(response => {
      this.setState({ persons: response });
    });
  }

  nameChangedHandler = event => {
    this.setState({ newName: event.target.value });
  };

  numberChangedHandler = event => {
    this.setState({ newNumber: event.target.value });
  };

  personRemovedHandler = person => {
    const confirmRemoval = window.confirm('poistetaanko ' + person.name);
    confirmRemoval === true
      ? numberService.remove(person.id).then(res => {
          let tmp = this.state.persons;
          const index = tmp.indexOf(person);
          tmp.splice(index, 1);
          this.setState({ persons: tmp });
          this.setState({ message: 'numero poistettu onnistuneesti' });
          setTimeout(() => {
            this.setState({ message: null });
          }, 2000);
        })
      : console.log('No removal');
  };

  filterChangedHandler = event => {
    this.setState({ filter: event.target.value });
  };

  createNewPerson = message => {
    const newPerson = {
      name: this.state.newName,
      number: this.state.newNumber
    };
    numberService.create(newPerson).then(newPerson => {
      const newPersons = this.state.persons.concat(newPerson);
      this.setState({
        persons: newPersons,
        newName: '',
        newNumber: ''
      });
      this.setState({
        message: message
      });
      setTimeout(() => {
        this.setState({ message: null });
      }, 2000);
    });
  };

  addPerson = event => {
    event.preventDefault();
    const newPerson = this.state.persons.find(
      person => person.name === this.state.newName
    );
    if (newPerson) {
      const confirmUpdate = window.confirm(
        this.state.newName +
          ' on jo luettelossa, korvataanko vanha numero uudella?'
      );
      const modified = {
        name: newPerson.name,
        number: this.state.newNumber,
        id: newPerson.id
      };
      confirmUpdate === true
        ? numberService
            .update(modified.id, modified)
            .then(response => {
              let tmp = this.state.persons;
              const index = tmp.indexOf(newPerson);
              tmp.splice(index, 1);
              tmp = tmp.concat(response);
              this.setState({ persons: tmp });
              this.setState({ message: 'numero muutettu onnistuneesti' });
              setTimeout(() => {
                this.setState({ message: null });
              }, 2000);
            })
            .catch(error => {
              this.createNewPerson(
                'Virhe lisättäessä, henkilöä ei löytynyt. Lisättiin uusi henkilö.'
              )
              const updated = this.state.notes.filter(person => person.id !== modified.id)
              console.log(updated)
              this.setState({persons: updated})
            })
        : console.log(newPerson);
    } else {
      this.createNewPerson('numero lisätty onnistuneesti')
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
        <Notification message={this.state.message} />
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
                  <button onClick={() => this.personRemovedHandler(person)}>
                    poista
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
