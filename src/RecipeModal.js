import React from 'react';

import styled from '../node_modules/styled-components';
import RecipeIngredients from './RecipeIngredients';
import StatItem from './StatItem';

import variables from './variables';
import helpers from './helper';

const Title = styled('h4')`
	line-height:2.5;
	margin: 0px;
	font-weight: 500;
	text-align: center;
	font-size: 24px;
	color: #393a44;
	text-align: center;
`;
const Container = styled('div')`
		width: 70%;
		margin:auto;
    	display:flex;
		justify-content: space-between;
`;

const Exit = styled('div')`
	position: fixed;
	font-size: 30px;
	z-index: 10;
	right: 50px;
	top: 20px;
	color: rgb(203, 203, 203);

	&:hover{
		color: white;
	}
`;

const BlackOverlay = styled('div')`
	position: fixed;
	overflow-y: scroll;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
`;

const Content = styled('section')`
	position: absolute;
	background: white;
	width: 600px;
	height: auto;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Background = styled('div')`
	background: white;
	width: 100%;

	background-color: rgb(227, 227, 227);
	background-repeat: no-repeat;
	padding-bottom: 300px;
`;

const Recipe = styled('div')`
	padding: 25px;
	position: relative;
	height: auto;
	top: 250px;
	margin-bottom: 1250px;
	width: 85%;
	background: white;
	margin: auto;
	padding-bottom: 100px;
`;

const ModalDisplay = styled('div')`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	display: ${(props) => (props.display === 'true' ? 'block' : 'none')}
`;

const FullDetails = styled('button')`
	width: 510px;
	margin-top: 25px;
	height: 50px;
	background: ${variables.green};
	border: 0 solid #000;
	position: absolute;
	color: #fff;
	font-size: 16px;
	border-radius: 5px;
	outline-color: transparent;
	outline-style: none;
`;

class RecipeModal extends React.Component {
	render() {
		let imageBackground = {
			backgroundImage: `url(${this.props.recipes.image})`
		};

		return (
			<div>
				<ModalDisplay display={this.props.show.toString()}>
					<Exit onClick={this.props.handleClose}>
						<i className="fas fa-times" />
					</Exit>
					<BlackOverlay onClick={this.props.handleClose} />

					<Content>
						<Background style={imageBackground}>
							<Recipe>
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
										<FullDetails>
											{' '}
											Go to see full details <i className="fas fa-external-link-alt" />
										</FullDetails>{' '}
									</a>
								</div>
							</Recipe>
						</Background>
					</Content>
				</ModalDisplay>
			</div>
		);
	}
}
export default RecipeModal;
