import React, { Component } from 'react';
import RecipePercentage from './RecipePercentage';
import RecipeCardInfo from './RecipeCardInfo';

import styled from 'styled-components';
import variables from './variables';
import LazyLoad from 'react-lazyload';

const Card = styled('article')`
    width:300px;
    margin-left:10px;
    margin-right:10px;
    margin-bottom:20px;
    transition: all 0.2s ease-out;

    &:hover{
        cursor:pointer;
        margin-top:-5px;
        margin-bottom:5px;
        cursor: pointer;
        filter: brightness(110%);
    }

    @media (max-width: 960px){
        width:40vw;
    }
`;

const Title = styled('header')`
    position:relative;
    height:255px;

    @media (max-width: 960px){
        height:168px;
    }
`;

const Description = styled('footer')`
    color:black;
    background:white;
    height:35px;

    font-size: 14px;
    color: ${variables.mainText};
    letter-spacing: 0;
    text-align: left;

    padding:12px;


    box-shadow: 0 3px 2px 0 rgba(0,0,0,0.20);
    border-radius: 0px 0px 5px 5px;

    @media (max-width: 960px){
        height:55px;
    }
    



`;

const Name = styled('div')`
    position: absolute;
    top:190px;
    line-height:1.17;
    text-align: left;
    left:20px;
    font-size: 24px;
    color: #FFFFFF;
    text-shadow: 0 2px 4px rgba(0,0,0,1);

    @media (max-width: 960px){
        font-size:20px;
        top:12vh;
        left:2vw;
    }
`;

const Image = styled('img')`
    width:100%;
    height:255px;
    border-radius:10px 10px 0px 0px;
    object-fit: cover;


    @media (max-width: 960px){
        height:168px;
    }
    
`;

class RecipeCard extends Component {
	render() {
		return (
			<Card onClick={() => this.props.handleOpen(this.props.title)}>
				<Title>
					<RecipePercentage searchIngredients={this.props.searchIngredients}>
						{this.props.percent}
					</RecipePercentage>
					<Name>{this.props.title}</Name>
					<LazyLoad height={255} once>
						<Image src={this.props.image} alt={this.props.title} />
					</LazyLoad>
				</Title>

				<Description>
					<RecipeCardInfo
						ingredients={this.props.ingredients}
						cook_time={this.props.cook_time}
						prep_time={this.props.prep_time}
					/>
				</Description>
			</Card>
		);
	}
}

export default RecipeCard;
