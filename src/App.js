import React, { Component } from 'react'
import Header from './components/Header'
import Joblist from './components/Joblist';
//import Joblistmobile from './components/Joblistmobile'
import './App.css';
class App extends Component {
  state = {

  }



  render() {


    return (
      <div className="App">
        <Header />
        <Joblist />
      </div>
    );
  }
}

export default App;
