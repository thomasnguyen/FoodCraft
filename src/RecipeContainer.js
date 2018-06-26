import React, { Component } from 'react';
import  RecipeCard from  './RecipeCard';


class RecipeContainer extends Component {
    render(){
        let recipeArray = this.props.recipes.map((recipe) =>
            <RecipeCard title        = {recipe.name}
                        percent      = "25%"
                        description  = {recipe.description}
                        image        = {recipe.image} 
                        cook_time    = {recipe.cookTime}
                        prep_time    = {recipe.prepTime}
                        recipe_yield = {recipe.recipeYield}
                        key          = {recipe.name + recipe.ingredients} />
        );
        return (
            
            <div className = "RecipeContainer">
                {recipeArray}
            </div>
        );
    }
}

export default RecipeContainer;