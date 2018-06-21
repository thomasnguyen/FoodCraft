import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  FilterBar from  './FilterBar';
import  RecipeContainer from  './RecipeContainer';

class App extends Component {
  constructor(props){
    super(props); 
      this.state = {
        recipes: [
          {
            "title": "Mushroom Casserole",
            "image": "https://images.101cookbooks.com/mushroom_casserole_recipe.jpg",
            "description": "regular"
          },
          {
            "title": "1 Casserole",
            "image": "https://images.101cookbooks.com/mushroom_casserole_recipe.jpg",
            "description": "regular"
          },
          {
            "title": "2 Casserole",
            "image": "https://images.101cookbooks.com/mushroom_casserole_recipe.jpg",
            "description": "regular"
          },
          {
          "title": "Mushro3om Casserole",
          "image": "https://images.101cookbooks.com/mushroom_casserole_recipe.jpg",
          "description": "regular"
        },

      ]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className = "content">
          <FilterBar />
          <RecipeContainer recipes={this.state.recipes}/>
        </div>
      </div>
    );
  }
}

export default App;
