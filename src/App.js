import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import  FilterBar from  './FilterBar';
import  RecipeContainer from  './RecipeContainer';
import data from './openrecipes1.json';
import helper from './helper.js';
import RecipeStats from './RecipeStats.js';






class App extends Component {
  constructor(props){
    super(props); 
      this.state = {
        isModalShow: false,
        recipeModalId: "",
        recipes: [
      ]
    }
  }

  getRecipeFromCookBook(id){
    for (var x = 0; x <= data.length; x++){
      if (id === data[x].name){
        return data[x];
      }
    }
  }

  showModal = (id) => {
    this.setState({ recipeModalId: this.getRecipeFromCookBook(id), isModalShow: true});
  }
  
  hideModal = () => {
    this.setState({isModalShow: false});
  }



  render() {
    const Modal = ({ handleClose, show, children }) => {
      const showHideClassName = show ? "modal display-block" : "modal display-none";
    
      return (
        <div className={showHideClassName} >
        <div className = "black_screen" onClick={handleClose}> f</div>
          <section className="modal-main">
            {children}
          </section>
        </div>
      );
    };



    return (
      <div className="App">
       <Header />
        <div className = "content">
          <FilterBar />

          <RecipeContainer handleOpen = {this.showModal} recipes={data}/>
        </div>

    <Modal show={this.state.isModalShow} handleClose={this.hideModal} >
        <div className = "modal_container"> 
        
          <div className = "modal_cover">
              <h4>{this.state.recipeModalId.name} </h4>
 
            <RecipeStats  ingredients = {this.state.recipeModalId.ingredients} 
                          cookTime = {this.state.recipeModalId.cookTime} 
                          prepTime = {this.state.recipeModalId.prepTime} />

          <div>
            {this.state.recipeModalId.ingredients}
          </div>
          </div>
        
        </div>

    </Modal>

      </div>
    );
  }
}

export default App;
