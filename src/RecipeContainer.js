import React, { Component } from 'react';
import RecipeCard from './RecipeCard';
import helpers from './helper';
import styled from 'styled-components';

const Content = styled('div')`
	display:flex;
	flex-direction:column;
	flex:8;
	padding-bottom:100px;
`;
const Container = styled('div')`
	flex:8;
	justify-content:space-around;
	padding:20px;
	display:flex;
	flex-wrap: wrap;
	margin-bottom:100px;

`;

const MoreButton = styled('button')`
	display: ${(props) => (props.display.length ? 'display' : 'none')};
	width:100%;
    max-width: 1470px;
    margin: 0 auto;
    padding: 15px 12px;
	font-size: 16px;
	font-weight:500;
	box-sizing: border-box;
	background:rgba(0,0,0,0.3);
	border:0px;
	border-radius:5px;
	color:white;

	&:hover{
		cursor:pointer;
		background:rgba(0,0,0,0.35);

	}

	&:focus {outline:none;box-shadow:none;
		border-color:transparent;}

`;

class RecipeContainer extends Component {
	render() {
		let recipeArray = this.props.recipes.map((recipe) => (
			<RecipeCard
				title={recipe.name}
				percent={helpers.percentageCalcDisplay(recipe, this.props.searchIngredients)}
				ingredients={recipe.ingredients}
				description={recipe.description}
				image={recipe.image}
				cook_time={recipe.cookTime}
				prep_time={recipe.prepTime}
				recipe_yield={recipe.recipeYield}
				datePublished={recipe.datePublished}
				key={recipe.name + recipe.ingredients}
				handleOpen={this.props.handleOpen}
				searchIngredients={this.props.searchIngredients}
				noHover={this.props.noHover}
			/>
		));
		return (
			<Content>
				<Container>{recipeArray}</Container>
				<MoreButton display={this.props.recipes} onClick={() => this.props.loadMore()}>
					Load more...
				</MoreButton>
			</Content>
		);
	}
}

export default RecipeContainer;
