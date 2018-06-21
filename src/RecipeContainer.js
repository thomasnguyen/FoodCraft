import React, { Component } from 'react';
import  RecipeCard from  './RecipeCard';


class RecipeContainer extends Component {
    render(){
        let recipeArray = this.props.recipes.map((recipe) =>
            <RecipeCard title = {recipe.title}
                        percent = "25%"
                        description = "sdf"
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