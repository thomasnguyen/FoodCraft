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
            "title": "Sauteed Zucchini",
            "image": "https://www.101cookbooks.com/mt-static/images/food/sauteed_zucchini_recipe.jpg",
            "description": "regular"
          },
          {
            "title": "Pop Congee",
            "image": "https://images.101cookbooks.com/instant-pop-congee-turmeric-h.jpg",
            "description": "regular"
          },
          {
          "title": "Ponzu Pasta",
          "image": "https://www.101cookbooks.com/mt-static/images/food/weeknight-ponzu-pasta-h-4.jpg",
          "description": "regular"
        },
        {
          "title": "Pop Congee",
          "image": "https://images.101cookbooks.com/weeknight-ponzu-pasta-h.jpg?w=680&auto=format",
          "description": "regular"
        }

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
