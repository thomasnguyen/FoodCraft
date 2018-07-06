import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import helpers from './helper';

class RecipeContainer extends Component {
	render() {
		let recipeArray = this.props.recipes.map((recipe) => (
			<RecipeCard
				title={recipe.name}
				percent={helpers.randomizer()}
				ingredients={recipe.ingredients}
				description={recipe.description}
				image={recipe.image}
				cook_time={recipe.cookTime}
				prep_time={recipe.prepTime}
				recipe_yield={recipe.recipeYield}
				key={recipe.name + recipe.ingredients}
				handleOpen={this.props.handleOpen}
			/>
		));
		return <div className="RecipeContainer">{recipeArray}</div>;
	}
}

export default RecipeContainer;
