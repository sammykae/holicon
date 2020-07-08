import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
