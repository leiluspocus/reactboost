import React, { Component } from 'react';
import logo from './logo.svg';
import Quote from './Quote';
import './App.css';
import TopHeader from './TopHeader';



class App extends Component {
  render() {
    return (
      <div className="App">
        <TopHeader />
        <Quote />
      </div>
    );
  }
}
 
export default App;
