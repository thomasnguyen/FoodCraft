import React, { Component } from "react";

import FilterIngredients from "./FilterIngredients";
import IngredientContainer from "./IngredientContainer";
import data_ingredient from "./openingredients.json";


class FilterBar extends Component {
	constructor(props){
		super(props);
		this.state = {
			query: " ",
			searchAuto: [],
			searchedIngredient: []
		};
	}

	getObject = (ingredient) => {
		for (var z = 0; z < data_ingredient.length; z++){
			if (data_ingredient[z].name === ingredient){
				return data_ingredient[z];
			}
		} 
	}

	addIngredient = (ingredient) => {
		let ingred = this.getObject(ingredient);
		this.setState({
			searchedIngredient: [...this.state.searchedIngredient, ingred],
			query: " ",
			searchAuto: []
		});
		this.search.value = "";
        document.getElementById("ingredient-search").focus();

	}

	deleteIngredient = (index) => {
		let array = [...this.state.searchedIngredient];
		array.splice(index,1);
		this.setState({searchedIngredient: array});
	}
	
    getInfo = () => {
		console.log("QUERY:" + this.state.query);
		let array = [];
		for (var x = 0; x < data_ingredient.length; x++){
			if ((data_ingredient[x].name.includes(this.search.value)) && (this.search.value.length > 0)  ){
				array.push(data_ingredient[x]);
			}
		}
		this.setState({searchAuto:array});

	}
	searchHandle = () => {
		console.log(this.search.value);
		this.setState({query: this.search.value, searchAuto: []});
		this.getInfo();
	}
	render() {
		return (
			<div className="FilterBar">
				<div className="Search">
					<a href="###">
						<img
							className="search-icon"
							src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
							alt=""
						/>
					</a>
					<input
					    id = "ingredient-search"
						className="SearchBar"
						type="text"
						placeholder="Search for ingredient"
						ref = {input => this.search = input}
						onChange = {this.searchHandle}

					/>
					<FilterIngredients 
									data_ingredient = {this.state.searchAuto}
									addIngredient   = {this.addIngredient} />
				</div>

				<div className="ingredients">
					<div className="ingredients__header">
						<p> Ingredients </p>
					</div>

				 
				<IngredientContainer 
					deleteIngredient = {this.deleteIngredient}
					ingredients = {this.state.searchedIngredient} />
				</div>
			</div>
		);
	}
}

export default FilterBar;
