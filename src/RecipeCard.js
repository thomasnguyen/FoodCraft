import React, { Component } from 'react';
import helper from './helper';

import styled from 'styled-components';

const Card = styled('article')`
    width:300px;
    margin: 10px;
    transition: all 0.2s ease-out;
`;

const Title = styled('header')`
    position:relative;
    height:225px;
`;




class RecipeCard extends Component {
    render(){
        return (

            <Card  onClick = {() => this.props.handleOpen(this.props.title)}>
                <Title>
                    <div className = "RecipeCard__title__percent">{this.props.percent}</div>
                    <div className = "RecipeCard__title_title">{this.props.title}</div>
                    <img className = "RecipeCard__title_image" src = {this.props.image} alt = ""/>
                </Title>

                <div className ="RecipeCard__description">
                    <div className = "RecipeCard__info">
                        <div className = "quick_stats">
                            <div className = "quick_stats__number">
                                <i className="fas fa-stroopwafel"></i> 
                                <span className="time">{helper.calcIngredient(this.props.ingredients)}  </span>
                            </div>
                            <div className="quick_stats__title">Ingredients</div>
                        </div>
                        <div className = "quick_stats">
                            <div className = "quick_stats__number">
                                <i className="fas fa-utensils"></i>
                                <span className="time">{`${helper.formatTime(this.props.cook_time)}`} </span>
                            </div>
                            <div className="quick_stats__title">Cook Time</div>
                        </div>
                        <div className = "quick_stats">
                            <div className = "quick_stats__number">
                                <i className="fas fa-clock"></i> 
                                <span className="time">{`${helper.formatTime(this.props.prep_time)}`}  </span>
                            </div>
                            <div className="quick_stats__title">Prep Time</div>
                        </div>
                    </div>
                </div>
            </Card>
        );
    } 
}


export default RecipeCard;