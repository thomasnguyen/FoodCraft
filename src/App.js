import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
import FilterBar from "./FilterBar";
import RecipeContainer from "./RecipeContainer";
import data from "./openrecipes1.json";
import RecipeModal from "./RecipeModal";
import data_ingredient from "./openingredients.json";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalShow: false,
			recipeModalId: "",
			recipes: []
    };
    
    
  }
  
  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  escFunction = event  =>{
    if(event.keyCode === 27) {
      this.setState({ isModalShow: false });
    }
  }

	getRecipeFromCookBook(id) {
		for (var x = 0; x <= data.length; x++) {
			if (id === data[x].name) {
				return data[x];
			}
		}
	}

	showModal = id => {
		this.setState({
			recipeModalId: this.getRecipeFromCookBook(id),
			isModalShow: true
		});
	};

	hideModal = () => {
		this.setState({ isModalShow: false });
	};

	render() {
		return (
			<div className="App">
				<Header />
				<div className="content">
					<FilterBar />

					<RecipeContainer handleOpen={this.showModal} recipes={data} />
				</div>

				<RecipeModal
					recipes={this.state.recipeModalId}
					show={this.state.isModalShow}
					handleClose={this.hideModal}
				/>
			</div>
		);
	}
}

export default App;
