import React, { Component } from 'react';
import helper from './helper.js';
import styled from '../node_modules/styled-components';
import FilterBar from './FilterBar.js';

const Wrapper = styled('div')`
	width:100%;
	height:54px;
	background:rgba(255,255,255,1);
	border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const FilterButton = styled('button')`
	padding:18px 25px;
	font-size:15px;
	border:0px solid;
	background:rgba(0,0,0,0.05);
	height:100;
	float:right;
	outline:none;
	&:hover{
		cursor:pointer;
		background:rgba(0,0,0,.1)
	}

`;

class MobileFilter extends Component {
	render() {
		return (
			<Wrapper>
				<FilterButton>
					{' '}
					<i class="fas fa-filter" /> Apply Filters
				</FilterButton>
			</Wrapper>
		);
	}
}

export default MobileFilter;
