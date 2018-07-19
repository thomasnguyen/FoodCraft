import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import FilterBar from './FilterBar';
import RecipeContainer from './RecipeContainer';
import data from './openrecipes.json';
import RecipeModal from './RecipeModal';
import styled from '../node_modules/styled-components';
import helpers from './helper';

const Content = styled('div')`
	width:100%;
	display:flex;
	flex-direction:row;

	@media (max-width: 960px){
		flex-direction:column;
	}
`;

const SearchQuery = styled('div')`
	color:gray;
	padding-top:50px;
	font-size:20px;
	width:100%;
	text-align:center;
	display: ${(props) => (props.display.length ? 'none' : 'display')};
`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalShow: false,
			recipeModalId: '',
			recipes: data,
			showItems: 12,
			query: '',
			searchIngredients: []
		};
	}

	componentDidMount() {
		let shorten = data.slice(0, this.state.showItems);
		this.setState({ recipes: shorten });
		document.addEventListener('keydown', this.escFunction, false);
	}

	escFunction = (event) => {
		if (event.keyCode === 27) {
			this.setState({ isModalShow: false });
		}
	};

	getRecipeFromCookBook(id) {
		for (var x = 0; x <= data.length; x++) {
			if (id === data[x].name) {
				return data[x];
			}
		}
	}

	showModal = (id) => {
		this.setState({
			recipeModalId: this.getRecipeFromCookBook(id),
			isModalShow: true
		});

		// give body noscroll class
		let body = document.body;
		body.classList.add('noscroll');
	};

	hideModal = () => {
		this.setState({ isModalShow: false });
		let body = document.body;
		body.classList.remove('noscroll');
	};

	handleGlobalSearch = (query) => {
		let recipes = [];
		for (var y = 0; y < data.length; y++) {
			if (data[y].name.toLowerCase().includes(query)) {
				recipes.push(data[y]);
			}
		}
		this.setState({ recipes, query });
	};

	updateData = () => {
		console.log(this.state.showItems);
		let shorten = data.slice(0, this.state.showItems);
		this.setState({ recipes: shorten });
	};

	loadMore = () => {
		let newLimit = this.state.showItems + 18;
		this.setState({ showItems: newLimit });
		let shorten = data.slice(0, newLimit);
		this.setState({ recipes: shorten });
	};

	addIngredient = (ingredient) => {
		this.setState(
			{
				searchIngredients: [ ...this.state.searchIngredients, ingredient ]
			},
			function() {
				this.setState({
					recipes: helpers.sortArray(this.state.recipes, this.state.searchIngredients)
				});
			}
		);
	};

	deleteIngredient = (array) => {
		this.setState({
			searchIngredients: array
		});
	};
	render() {
		return (
			<div className="App">
				<Header handleGlobalSearch={this.handleGlobalSearch} />
				<Content>
					<FilterBar
						addIngredient={this.addIngredient}
						deleteIngredient={this.deleteIngredient}
						searchIngredients={this.state.searchIngredients}
					/>
					<SearchQuery display={this.state.recipes}>No results match {this.state.query}</SearchQuery>
					<RecipeContainer
						searchIngredients={this.state.searchIngredients}
						handleOpen={this.showModal}
						loadMore={this.loadMore}
						recipes={this.state.recipes}
					/>
				</Content>

				<RecipeModal
					recipes={this.state.recipeModalId}
					show={this.state.isModalShow}
					handleClose={this.hideModal}
				/>
			</div>
		);
	}
}

export default App;
