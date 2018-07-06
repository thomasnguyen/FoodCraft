import React from 'react';

import styled from '../node_modules/styled-components';
import RecipeIngredients from './RecipeIngredients';
import StatItem from './StatItem';
import helpers from './helper';

const Title = styled('h4')`
	line-height:2;
`;
const Container = styled('div')`
		width: 70%;
		margin:auto;
    display:flex;
    justify-content: space-between;
`;

class RecipeModal extends React.Component {
	render() {
		let imageBackground = {
			backgroundImage: `url(${this.props.recipes.image})`
		};

		const showHideClassName = this.props.show ? 'modal display-block' : 'modal display-none';

		return (
			<div>
				<div className={`${showHideClassName} fadeInUp animated`}>
					<div className="modal_exit" onClick={this.props.handleClose}>
						<i className="fas fa-times" />f
					</div>
					<div className="black_screen" onClick={this.props.handleClose} />

					<section className="modal-main fadeInUp animated">
						<div className="modal_container" style={imageBackground}>
							<div className="modal_cover">
								<Title>{this.props.recipes.name} </Title>

								<Container>
									<StatItem
										icon="fa-stroopwafel"
										number={helpers.calcIngredient(this.props.recipes.ingredients)}
										measure="Ingredients"
									/>
									<StatItem
										icon="fa-utensils"
										number={helpers.formatTime(this.props.recipes.cookTime)}
										measure="Cook Time"
									/>
									<StatItem
										icon="fa-clock"
										number={helpers.formatTime(this.props.recipes.prepTime)}
										measure="Prep Time"
									/>
								</Container>

								<div>
									<RecipeIngredients ingredients={this.props.recipes.ingredients} />

									<a href={this.props.recipes.url}>
										<button className="full-details">
											{' '}
											Go to see full details <i className="fas fa-external-link-alt" />
										</button>{' '}
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}
export default RecipeModal;
