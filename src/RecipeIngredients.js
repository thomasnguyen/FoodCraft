import React, { Component } from "react";
import helper from "./helper.js";

class RecipeIngredients extends Component {
	render() {
		let ingredientsSection;
		let ingredientsArray = helper.splitIngredient(this.props.ingredients);
		if (ingredientsArray !== undefined) {
			ingredientsSection = ingredientsArray.map(ingredient => (
				<div className="Ingredient"> {ingredient}</div>
			));
		}
		return (
			<div className="RecipeIngredients">
				<h3> Ingredients: </h3>
				{ingredientsSection}
			</div>
		);
	}
}

export default RecipeIngredients;
