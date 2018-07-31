import React, { Component } from 'react';
import styled from '../node_modules/styled-components';

const Container = styled('div')`
    width: 240px;
    background: white;
    display: flex;
    flex-direction: column;
    position: absolute;
`;

const Icon = styled('i')`
    margin-right: 10px;
    color: gray;
`;

const InsertButton = styled('span')`
    background:white;
    padding:3px;
    float:right;
    color:gray;
    border-radius:5px;
    font-size:12px;
    display:none;
`;

const Ingredient = styled('div')`
    padding: 8px;
    border: 1px solid #e1e4e8;
    border-bottom: 0px solid white;
    font-size: 16px;
    color: #1b1f23;
    text-transform: capitalize;

    &:last-of-type{
        border: 1px solid #e1e4e8;
    }

    &:hover{
        background:#8DBA26;
        color:white;
        cursor:pointer;
    }

    &:hover ${Icon}{
        color:white;
    }

    &:hover ${InsertButton}{
        display:block;
    }
`;

class FilterIngredients extends Component {
	render() {
		let searchResults = this.props.data_ingredient.map((ingredient) => (
			<Ingredient onClick={() => this.props.addIngredient(ingredient.name)} key={ingredient.name}>
				{' '}
				<Icon className="fas fa-lemon" />
				{ingredient.name}
				<InsertButton>
					<i className="fa fa-arrow-left" aria-hidden="true" /> Add
				</InsertButton>
			</Ingredient>
		));

		return <Container>{searchResults}</Container>;
	}
}

export default FilterIngredients;
