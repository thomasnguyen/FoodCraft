import React, { Component } from 'react';


class RecipeCard extends Component {
    render(){
        return (
            <div className = "RecipeCard">
                <div className = "RecipeCard__title">
                    <div className = "RecipeCard__title__percent">{this.props.percent}</div>
                    <div className = "RecipeCard__title_title">{this.props.title}</div>
                    <img className = "RecipeCard__title_image" src = {this.props.image} alt = ""/>
                </div>
                <div className ="RecipeCard__description">
                    <div className = "RecipeCard__info">
                        <div><i className="fas fa-utensils"></i>{`${this.props.cook_time}`}</div>
                        <div><i className="fas fa-clock"></i>{`${this.props.prep_time}`}</div>
                    </div>
                    <div className = "RecipeCard__quick-description">{this.props.description.substring(0,80) + '...'}
                    </div>
                </div>
            </div>
        );
    } 
}

export default RecipeCard;