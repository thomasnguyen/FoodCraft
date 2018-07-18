import React, { Component } from 'react';
import styled from '../node_modules/styled-components';

const Wrapper = styled('div')`
	width:100%;
	background:rgba(255,255,255,1);
	border-bottom: 1px solid rgba(0,0,0,0.1);
	display:flex;
	flex-direction: column;
`;

const FilterButton = styled('button')`
	padding:18px 25px;
	font-size:15px;
	border:0px solid;
	background:rgba(0,0,0,0.05);
	height:100;
	outline:none;
	&:hover{
		cursor:pointer;
		background:rgba(0,0,0,.1)
	}

`;

const FilterWrapper = styled('div')`
	height:100px;
	width:100%;
	background:black;
	display:none;

`;

class MobileFilter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterShow: false
		};
	}
	render() {
		return (
			<Wrapper>
				<FilterButton>
					<i className="fas fa-filter" /> Apply Filters
				</FilterButton>
				<div className="sdf">sdf</div>
				<FilterWrapper />
			</Wrapper>
		);
	}
}

export default MobileFilter;
