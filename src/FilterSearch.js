import React, { Component } from 'react';

import styled from 'styled-components';
import variables from './variables';

const Container = styled('div')`
	position: relative;
`;

const SearchIcon = styled('img')`
	position: absolute;
	width: 50px;
	height: 50px;
	top: -5px;
	left: -8px;
`;

const Search = styled('input')`
	background: #ffffff;
	border: 1px solid ${variables.green};
	border-radius: 10px;

	font-size: 14px;
	color: #181818;
	letter-spacing: 0;
	text-align: left;
	opacity: 0.57;

	padding: 10px;
	padding-left: 30px;

	outline-color: transparent;
	outline-style: none;

	width: calc(100% - 40px);

`;

class FilterSearch extends Component {
	searchHandle(c) {
		this.props.searchHandle(c.target.value);
	}
	render() {
		return (
			<Container>
				<a href="###">
					<SearchIcon
						className="search-icon"
						src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
						alt=""
					/>
				</a>
				<Search
					id="ingredient-search"
					type="text"
					placeholder="Search for ingredient"
					ref={(input) => (this.search = input)}
					onChange={(c) => this.searchHandle(c)}
				/>
			</Container>
		);
	}
}

export default FilterSearch;
