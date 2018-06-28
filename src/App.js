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
        showModal: false,
        recipes: [
      ]
    }
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





       <Header />
        <div className = "content">
          <FilterBar />
          <RecipeContainer recipes={data}/>
        </div>

    <Modal show={true} handleClose={this.hideModal} >
        <p>Modal</p>
        <p>Data</p>
      </Modal>

      </div>
    );
  }
}

export default App;
