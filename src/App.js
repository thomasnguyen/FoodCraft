import React, { Component } from 'react';
import Header from './Header';
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
      <div className="modal_overlay">
        <div className="modal"></div>
      </div>
       <Header />
        <div className = "content">
          <FilterBar />
          <RecipeContainer recipes={data}/>
        </div>
      </div>
    );
  }
}

export default App;
