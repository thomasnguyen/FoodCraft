import React, { Component } from 'react';
import  RecipeCard from  './RecipeCard';


class RecipeContainer extends Component {
    render(){
        let recipeArray = this.props.recipes.map((recipe) =>
            <RecipeCard title = {recipe.name}
                        percent = "25%"
                        description = {recipe.ingredients}
                        image = {recipe.image} />
        );
        return (
            
            <div className = "RecipeContainer">
                {recipeArray}
            </div>
        );
    }
}

export default RecipeContainer;