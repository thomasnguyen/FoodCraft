import React, { Component } from 'react';
import helper from './helper';

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

`;

class RecipePercentage extends Component {
	render() {
		return <Percentage>{this.props.children}</Percentage>;
	}
}

export default RecipePercentage;
