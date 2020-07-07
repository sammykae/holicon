import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount(){
    this.getHolidays()
    this.getCountries()
  }

  getHolidays = () => {
    const currentYear = 2020
    const country = "US"
    fetch(`https://calendarific.com/api/v2/holidays?&api_key=${process.env.REACT_APP_KEY}&country=${country}&year=${currentYear}`).then(e=>{
        return e.json()
        .then(e=>{
            console.log(e)
        })
    })
  }

  /////// 
  getCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/all`).then(e=>{
        return e.json()
        .then(e=>{
            console.log(e)
        })
    })
  }

  render() {
    return (
      <div className="App">
      <h1>here we go</h1>
      <p>open the console</p>
    </div>
    );
  }
}

export default App;
