import React, { Component } from 'react';
import styled from '../node_modules/styled-components';

const Container = styled('div')`
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    position: absolute;
`;

const Ingredient = styled('div')`
    padding: 8px;
    border: 1px solid #e1e4e8;
    border-bottom: 0px solid white;
    font-size: 14px;
    color: #1b1f23;

    &:last-of-type{
        border: 1px solid #e1e4e8;
    }
`;

const Icon = styled('i')`
    margin-right: 10px;
    color: gray;
`;

class FilterIngredients extends Component {
	render() {
		let searchResults = this.props.data_ingredient.map((ingredient) => (
			<Ingredient onClick={() => this.props.addIngredient(ingredient.name)} key={ingredient.name}>
				{' '}
				<Icon className="fas fa-lemon" />
				{ingredient.name}{' '}
			</Ingredient>
		));

		return <Container>{searchResults}</Container>;
	}
}

export default FilterIngredients;
