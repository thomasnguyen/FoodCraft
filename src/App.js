import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  FilterBar from  './FilterBar';
import  RecipeContainer from  './RecipeContainer';
import data from './openrecipes1.json';
class App extends Component {
  constructor(props){
    super(props); 
      this.state = {
        recipes: [
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React  
          </h1>
        </header>
        <div className = "content">
          <FilterBar />
          <RecipeContainer recipes={data}/>
        </div>
      </div>
    );
  }
}

export default App;
