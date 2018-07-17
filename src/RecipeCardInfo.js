import React, { Component } from 'react';
import helper from './helper';
import StatItem from './StatItem';

import styled from 'styled-components';

// RecipeCard__info
const Container = styled('div')`
    display:flex;
	justify-content: space-between;
	
	@media (max-width: 960px){
        flex-direction:column;
    }
`;

class RecipeCardInfo extends Component {
	render() {
		return (
			<Container>
				<StatItem
					icon="fa-stroopwafel"
					number={helper.calcIngredient(this.props.ingredients)}
					measure="Ingredients"
				/>
				<StatItem
					icon="fa-utensils"
					number={`${helper.formatTime(this.props.cook_time)}`}
					measure="Cook Time"
				/>
				<StatItem icon="fa-clock" number={`${helper.formatTime(this.props.prep_time)}`} measure="Prep Time" />
			</Container>
		);
	}
}

export default RecipeCardInfo;
