import React, { Component } from "react";
import helper from "./helper.js";

class RecipeContainer extends Component {
	render() {
		return (
			<div className="RecipeCard__info">
				<div className="quick_stats">
					<div className="quick_stats__number">
						<i className="fas fa-stroopwafel" />
						<span className="time">
							{helper.calcIngredient(this.props.ingredients)}{" "}
						</span>
					</div>
					<div className="quick_stats__title">Ingredients</div>
				</div>
				<div className="quick_stats">
					<div className="quick_stats__number">
						<i className="fas fa-utensils" />
						<span className="time">
							{`${helper.formatTime(this.props.cookTime)}`}{" "}
						</span>
					</div>
					<div className="quick_stats__title">Cook Time</div>
				</div>
				<div className="quick_stats">
					<div className="quick_stats__number">
						<i className="fas fa-clock" />
						<span className="time">
							{`${helper.formatTime(this.props.prepTime)}`}{" "}
						</span>
					</div>
					<div className="quick_stats__title">Prep Time</div>
				</div>
			</div>
		);
	}
}

export default RecipeContainer;
