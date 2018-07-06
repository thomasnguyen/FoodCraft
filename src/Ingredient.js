import React, { Component } from 'react';
import styled from '../node_modules/styled-components';

const Tag = styled('div')`

    border-radius: 10px;
    /* Chicken: */
    font-size: 12px;
    letter-spacing: 0;
    text-align: left;
    padding: 10px;
    font-weight: 500;

    margin-bottom: 10px;

    display: flex;
    justify-content: space-between;

`;

const Title = styled('div')``;

class Ingredient extends Component {
	render() {
		return (
			<div className={`ingredient__tag ${this.props.color}`}>
				<Title> {this.props.name} </Title>
				<Title>
					{' '}
					<i onClick={() => this.props.deleteIngredient(this.props.key)} className="fas fa-times" />
				</Title>
			</div>
		);
	}
}

export default Ingredient;
