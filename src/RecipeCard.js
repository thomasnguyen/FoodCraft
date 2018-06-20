import React, { Component } from 'react';


class RecipeCard extends Component {
    render(){
        return (
            <div className = "RecipeCard">
                <div className = "RecipeCard__title">
                    <div className = "RecipeCard__title__percent"> 25%</div>
                    <div className = "RecipeCard__title_title">Mushroom Casserole</div>
                    <img className = "RecipeCard__title_image" src = "https://images.101cookbooks.com/mushroom_casserole_recipe.jpg?w=325" alt = ""/>
                </div>
                <div className ="RecipeCard__description">
                Preheat oven to 350F degrees. Rub a medium-large baking dish with a bit of olive oil or butter and set aside.  
                </div>
            </div>
        );
    } 
}

export default RecipeCard;