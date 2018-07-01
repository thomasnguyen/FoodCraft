import React, { Component } from 'react';

import Ingredient from "./Ingredient";


class IngredientContainer extends Component {

    render(){
        let allIngredients = this.props.ingredients.map((ingredient) => 
            <Ingredient key = {ingredient.name} color = {ingredient.color} name = {ingredient.name} />
        );
        return (
            <div>
                {allIngredients}
            </div>
        );
    }
}

export default IngredientContainer;