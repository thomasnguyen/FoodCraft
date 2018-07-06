import React, { Component } from 'react';
import helper from './helper.js';
import styled from '../node_modules/styled-components';

const Ingredient = styled('div')`
	padding-top:8px;
	padding-bottom: 8px;
	border-bottom:1px solid rgb(233, 233, 233);
`;

const RecipeIngredient = styled('div')`
	margin-top:25px;
`;
class RecipeIngredients extends Component {
	render() {
		let ingredientsSection;
		let ingredientsArray = helper.splitIngredient(this.props.ingredients);
		if (ingredientsArray !== undefined) {
			ingredientsSection = ingredientsArray.map((ingredient, index) => (
				<Ingredient key={index}> {ingredient}</Ingredient>
			));
		}
		return (
			<RecipeIngredient>
				<h3> Ingredients: </h3>
				{ingredientsSection}
			</RecipeIngredient>
		);
	}
}

export default RecipeIngredients;
