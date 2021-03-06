import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    searchCriteria: '',
    countries: [],
    currentlyActive: 0
  };

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      this.setState({ countries: response.data });
    });
  }

  searchCriteriaChangedHandler = event => {
    this.setState({ searchCriteria: event.target.value });
  };

  countryClicked = countryCode => {
    console.log(countryCode)
    const newCountries = this.state.countries;
    const filtered = newCountries.filter(
      country => country.numericCode === countryCode
    );
    this.setState({ countries: filtered })
  };

  render() {
    const countries =
      this.state.searchCriteria === ''
        ? this.state.countries
        : this.state.countries.filter(country =>
            country.name
              .toLowerCase()
              .match(this.state.searchCriteria.toLowerCase())
          );

    const filteredCountries =
      countries.length > 10
        ? 'too many matches, specify another filter'
        : countries.length === 1
          ? countries.map(country => (
              <div key={country.numericCode}>
                <h1>
                  {country.name}, {country.nativeName}
                </h1>
                <p>capital: {country.capital}</p>
                <p>population: {country.population}</p>
                <img
                  src={country.flag}
                  alt={country.cioc}
                  height="200px"
                  width="300px"
                />
              </div>
            ))
          : countries.map(country => (
              <div
                key={country.numericCode}
                onClick={() => this.countryClicked(country.numericCode)}
              >
                <p>{country.name}</p>
              </div>
            ));

    return (
      <div className="App">
        find countries:
        <input
          value={this.state.searchCriteria}
          onChange={this.searchCriteriaChangedHandler}
        />
        <br />
        {filteredCountries}
      </div>
    );
  }
}

export default App;
