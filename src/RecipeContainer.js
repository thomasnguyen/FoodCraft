import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import helpers from './helper';
import styled from '../node_modules/styled-components';

const Container = styled('div')`
	flex:8;

	padding:20px;
	display:flex;
	flex-wrap: wrap;
`;

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
		return <Container>{recipeArray}</Container>;
	}
}

export default RecipeContainer;
