import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import helpers from './helper';
import styled from 'styled-components';

const Content = styled('div')`
	display:flex;
	flex-direction:column;
	flex:8;
`;
const Container = styled('div')`
	flex:8;
	justify-content:space-between;
	padding:20px;
	display:flex;
	flex-wrap: wrap;
`;

const MoreButton = styled('button')`
	width:100%;
	padding: 15px 12px;
	background:gray;
	margin:auto;
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
		return (
			<Content>
				<Container>{recipeArray}</Container>
				<MoreButton> lol </MoreButton>
			</Content>
		);
	}
}

export default RecipeContainer;
