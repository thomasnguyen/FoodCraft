import React, { Component } from 'react';

import FilterIngredients from './FilterIngredients';
import IngredientContainer from './IngredientContainer';
import data_ingredient from './openingredients.json';
import styled from '../node_modules/styled-components';
import NoIngredients from './NoIngredients';
import FilterSearch from './FilterSearch';
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

const MobileWrapper = styled('div')`
	display:none;
	@media (max-width: 960px){
		display:block;
	}
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

	&:hover{
		cursor:pointer;
		opacity:.8;
	}
`;

const Select = styled('select')`
	margin-top:10px;
	padding:10px;
	font-size:14px;
	height:35px;
	border: 1px solid ${variables.lightText};
	outline:none;
`;

const FilteredContainer = styled('div')`
	width:240px;
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
		document.getElementById('ingredient-search').value = '';
		document.getElementById('ingredient-search').focus();
	};

	deleteIngredient = (index) => {
		let array = [ ...this.props.searchIngredients ];
		array.splice(index, 1);
		this.props.deleteIngredient(array);
	};

	getInfo = (query) => {
		let array = [];
		for (var x = 0; x < data_ingredient.length; x++) {
			if (data_ingredient[x].name.includes(query) && query.length > 0) {
				array.push(data_ingredient[x]);
			}
		}
		this.setState({ searchAuto: array });
	};
	searchHandle = (value) => {
		this.setState({ query: value, searchAuto: [] });
		this.getInfo(value);
	};
	render() {
		return (
			<Wrapper>
				<MobileWrapper>
					<MobileFilter searchHandle={this.searchHandle} />
				</MobileWrapper>
				<SideBar>
					<FilteredContainer>
						<FilterSearch searchHandle={this.searchHandle} />
						{/*<SearchBar
							id="ingredient-search"
							type="text"
							placeholder="Search for ingredient"
							innerRef={(input) => (this.search = input)}
							onChange={this.searchHandle}
						/> */}
						<FilterIngredients data_ingredient={this.state.searchAuto} addIngredient={this.addIngredient} />
					</FilteredContainer>

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
							<OtherFiltersItems onClick={this.props.filterFastPrep}>
								Less than 1 hour prep
							</OtherFiltersItems>
							<OtherFiltersItems onClick={this.props.filterFastCook}>
								Less than 1 hour cooking time
							</OtherFiltersItems>
							<OtherFiltersItems onClick={this.props.filterLess10}>
								Less than 10 ingredients
							</OtherFiltersItems>
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
