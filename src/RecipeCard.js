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
                    {this.props.description.substring(0,110) + '...'}
                </div>
            </div>
        );
    } 
}

export default RecipeCard;