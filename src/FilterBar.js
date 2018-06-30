import React, { Component } from "react";

import Ingredient from "./Ingredient";
import FilterIngredients from "./FilterIngredients";

class FilterBar extends Component {
	render() {
		return (
			<div className="FilterBar">
				<div className="Search">
					<a href="###">
						<img
							className="search-icon"
							src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
							alt=""
						/>
					</a>
					<input
						className="SearchBar"
						type="text"
						placeholder="Search for ingredient"
					/>
					<FilterIngredients />
				</div>

				<div className="ingredients">
					<div className="ingredients__header">
						<p> Ingredients </p>
					</div>

					<Ingredient color="brown" tag_name="Bread" />
					<Ingredient color="blue" tag_name="Chicken" />
					<Ingredient color="green" tag_name="Broccoli" />
				</div>
			</div>
		);
	}
}

export default FilterBar;
