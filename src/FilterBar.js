import React, { Component } from 'react';

import FilterIngredients from './FilterIngredients';
import IngredientContainer from './IngredientContainer';
import data_ingredient from './openingredients.json';
import styled from '../node_modules/styled-components';

const SideBar = styled('div')`
	width: 240px;
	padding: 20px;
`;

const SearchContainer = styled('div')`
	position: relative;
`;
const Header = styled('div')`
	text-align: left;
	/* Ingredients: */
	font-size: 16px;
	color: #181818;
	letter-spacing: 0;
	text-align: left;
	line-height: 10px;
	margin-top: 35px;
	border-bottom: 2px solid #979797;
	margin-bottom: 10px;
`;

const SearchBar = styled('input')`
	background: #ffffff;
	border: 1px solid #8dba26;
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

const SearchIcon = styled('img')`
	position: absolute;
	width: 50px;
	height: 50px;
	top: -5px;
	left: -8px;
`;
class FilterBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ' ',
			searchAuto: [],
			searchedIngredient: []
		};
	}

	getObject = (ingredient) => {
		for (var z = 0; z < data_ingredient.length; z++) {
			if (data_ingredient[z].name === ingredient) {
				return data_ingredient[z];
			}
		}
	};

	addIngredient = (ingredient) => {
		let ingred = this.getObject(ingredient);
		this.setState({
			searchedIngredient: [ ...this.state.searchedIngredient, ingred ],
			query: ' ',
			searchAuto: []
		});
		this.search.value = '';
		document.getElementById('ingredient-search').focus();
	};

	deleteIngredient = (index) => {
		let array = [ ...this.state.searchedIngredient ];
		array.splice(index, 1);
		this.setState({ searchedIngredient: array });
	};

	getInfo = () => {
		let array = [];
		for (var x = 0; x < data_ingredient.length; x++) {
			if (data_ingredient[x].name.includes(this.search.value) && this.search.value.length > 0) {
				array.push(data_ingredient[x]);
			}
		}
		this.setState({ searchAuto: array });
	};
	searchHandle = () => {
		console.log(this.search.value);
		this.setState({ query: this.search.value, searchAuto: [] });
		this.getInfo();
	};
	render() {
		return (
			<SideBar>
				<SearchContainer>
					<a href="###">
						<SearchIcon
							className="search-icon"
							src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
							alt=""
						/>
					</a>
					<SearchBar
						id="ingredient-search"
						type="text"
						placeholder="Search for ingredient"
						innerRef={(input) => (this.search = input)}
						onChange={this.searchHandle}
					/>
					<FilterIngredients data_ingredient={this.state.searchAuto} addIngredient={this.addIngredient} />
				</SearchContainer>

				<div>
					<Header>
						<p> Ingredients </p>
					</Header>

					<IngredientContainer
						deleteIngredient={this.deleteIngredient}
						ingredients={this.state.searchedIngredient}
					/>
				</div>
			</SideBar>
		);
	}
}

export default FilterBar;
