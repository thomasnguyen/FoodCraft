import React, { Component } from 'react';
import helper from './helper';


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
                    { /*
                    <div className = "RecipeCard__quick-description">{this.props.description.substring(0,85) + '...'}
                    </div>
                    */}
                </div>
            </div>
        );
    } 
}

export default RecipeCard;