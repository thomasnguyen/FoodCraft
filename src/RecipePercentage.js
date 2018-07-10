import React, { Component } from 'react';

import styled from 'styled-components';

const Percentage = styled('div')`
    position:absolute;
    top:15px;
    right:15px;

    /* Text */
    font-size:14px;
    line-height:30px;
    color:white;

    padding:0px 10px 0px 10px;
    border-radius:5px;
    height:30px;
    background:#8DBA26;

    display: ${(props) => (props.display === 'block' ? 'block' : 'none')};

`;

class RecipePercentage extends Component {
	render() {
		let isDisplayed;
		if (this.props.searchIngredients.length) {
			isDisplayed = 'block';
		} else {
			isDisplayed = 'none';
		}
		return <Percentage display={isDisplayed}>{this.props.children}</Percentage>;
	}
}

export default RecipePercentage;
