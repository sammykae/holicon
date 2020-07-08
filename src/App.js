import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchBox from './components/Search/SearchBox';
import Body from './components/Body/Body';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       search:''
    }
  }
  

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

  inputChange=(event)=>{
    this.setState({
      search:event.target.value
    })
  }

  render() {
    
    return (
      <div className="App">
        <SearchBox inputChange={this.inputChange}/>
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;
