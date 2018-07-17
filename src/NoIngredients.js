import React, { Component } from 'react';

import styled from '../node_modules/styled-components';
import variables from './variables';

const Container = styled('div')`
	width:100%;
	border: 2px dashed ${variables.lightText};
	margin-top:15px;
	text-align:center;
	padding:50px 0px 50px 0px;
	display: ${(props) => (props.isDisplayed === true ? 'block' : 'none')};
`;

class NoIngredients extends Component {
	render() {
		return (
			<Container isDisplayed={this.props.isDisplayed}>
				You have not entered any ingredients. Please use the above searchbar to add.
			</Container>
		);
	}
}

export default NoIngredients;
