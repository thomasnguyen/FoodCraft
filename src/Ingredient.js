import React, { Component } from 'react';
import styled from '../node_modules/styled-components';

const Colors = {
	blue: {
		background: '#c0d4ff',
		color: 'rgb(39, 89, 208)'
	},

	brown: {
		background: '#eac097',
		color: '#843d2f'
	},

	green: {
		background: '#bfe5ce',
		color: '#248441'
	}
};

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

    background: ${(props) => Colors[props.color].background};
    color: ${(props) => Colors[props.color].color};
`;

const Title = styled('div')``;

class Ingredient extends Component {
	render() {
		return (
			<Tag color={this.props.color}>
				<Title> {this.props.name} </Title>
				<Title>
					{' '}
					<i onClick={() => this.props.deleteIngredient(this.props.key)} className="fas fa-times" />
				</Title>
			</Tag>
		);
	}
}

export default Ingredient;
