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
        <div className={showHideClassName}>
          <section className="modal-main">
            {children}
            <button onClick={handleClose}>close</button>
          </section>
        </div>
      );
    };




    return (
      <div className="App">
        {/*<button onClick={this.showModal}> SHOW </button> */}




       <Header />
        <div className = "content">
          <FilterBar />

          <RecipeContainer handleOpen = {this.showModal} recipes={data}/>
        </div>

    <Modal show={this.state.isModalShow} handleClose={this.hideModal} >
        <p>{this.state.recipeModalId.name}
        {this.state.recipeModalId.url}</p>
    </Modal>

      </div>
    );
  }
}

export default App;
