import React, { Component } from 'react';

import Ingredient from "./Ingredient";


class IngredientContainer extends Component {

    render(){
        let allIngredients = this.props.ingredients.map((ingredient,index) => 
            <Ingredient key = {index} 
                        color = {ingredient.color} 
                        deleteIngredient = {this.props.deleteIngredient}
                        name = {ingredient.name} />
        );
        return (
            <div>
                {allIngredients}
            </div>
        );
    }
}

export default IngredientContainer;