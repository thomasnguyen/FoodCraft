import React, { Component } from "react";
import Header from "./Header";
import "./App.css";
import FilterBar from "./FilterBar";
import RecipeContainer from "./RecipeContainer";
import data from "./openrecipes.json";
import RecipeModal from "./RecipeModal";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalShow: false,
			recipeModalId: "",
			recipes: data,
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
	
	handleGlobalSearch = (query) => {
		let recipes = [];
		for (var y = 0; y < data.length; y++){
			if (data[y].name.toLowerCase().includes(query)){
				recipes.push(data[y]);
			}
		}
		console.log(query);
		console.log(data);
		this.setState({recipes});
	}
	render() {
		return (
			<div className="App">
				<Header handleGlobalSearch = {this.handleGlobalSearch}/>
				<div className="content">
					<FilterBar />

					<RecipeContainer handleOpen={this.showModal} recipes={this.state.recipes} />
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
