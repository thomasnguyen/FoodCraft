import React, { Component } from 'react';
import  RecipeCard from  './RecipeCard';


class RecipeContainer extends Component {
    render(){
        return (
            <div className = "RecipeContainer">
                <RecipeCard />
                <RecipeCard />
                <RecipeCard />

            </div>
        );
    }
}

export default RecipeContainer;