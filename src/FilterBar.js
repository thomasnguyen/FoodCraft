import React, { Component } from 'react';

import FilterIngredients from './FilterIngredients';
import IngredientContainer from './IngredientContainer';
import data_ingredient from './openingredients.json';
import styled from '../node_modules/styled-components';
import NoIngredients from './NoIngredients';
import variables from './variables';

import MobileFilter from './MobileFilter';

const Wrapper = styled('div')`
`;

const SideBar = styled('div')`
	width: 240px;
	padding: 20px;

	@media (max-width: 960px){
		display:none;
	}
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

const MobileWrapper = styled('div')`
	display:none;
	@media (max-width: 960px){
		display:block;
	}
`;

const SearchIcon = styled('img')`
	position: absolute;
	width: 50px;
	height: 50px;
	top: -5px;
	left: -8px;
`;

const OtherFilters = styled('div')`
	display:flex;
	flex-direction:column;
`;

const OtherFiltersItems = styled('div')`
	display:flex;
	flex-direction:row;
	justify-content:space-between;

	font-size:16px;
	color: ${variables.darkText};
	font-weight:700;
	line-height:1.5;
`;

const Select = styled('select')`
	margin-top:10px;
	padding:10px;
	font-size:14px;
	height:35px;
	border: 1px solid ${variables.lightText};
	outline:none;
`;

class FilterBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			query: ' ',
			searchAuto: []
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
		this.props.addIngredient(ingred);
		this.setState({
			query: ' ',
			searchAuto: []
		});
		this.search.value = '';
		document.getElementById('ingredient-search').focus();
	};

	deleteIngredient = (index) => {
		console.log(this.props.searchIngredients);
		let array = [ ...this.props.searchIngredients ];
		array.splice(index, 1);
		this.props.deleteIngredient(array);
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
			<Wrapper>
				<MobileWrapper>
					<MobileFilter />
				</MobileWrapper>
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
						<NoIngredients isDisplayed={Number(this.props.searchIngredients.length) <= 0}>
							You have not entered any ingredients. Please use the above searchbar to add.
						</NoIngredients>
						<IngredientContainer
							deleteIngredient={this.deleteIngredient}
							ingredients={this.props.searchIngredients}
						/>
					</div>
					<div>
						<Header>
							<p> Other Filters </p>
						</Header>
						<OtherFilters>
							<OtherFiltersItems>Less than 1 hour prep</OtherFiltersItems>
							<OtherFiltersItems>Less than 1 hour cooking time</OtherFiltersItems>
							<OtherFiltersItems>Less than 10 ingredients</OtherFiltersItems>
							<Select>
								<option>Sort by Match </option>
								<option>Sort by Alphabetical Order </option>
								<option>Sort by Prep Time </option>
								<option>Sort by Cook Time </option>
								<option>Sort by # of Ingredients </option>
							</Select>
						</OtherFilters>
					</div>
				</SideBar>
			</Wrapper>
		);
	}
}

export default FilterBar;
