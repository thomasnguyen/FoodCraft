import React, { Component } from 'react';

class Ingredient extends Component {
    render(){
        return (
           <div className = "FilteredIngredients_Box">
               <div> <i class="fas fa-lemon FilteredIngredients_icon"></i>Bread </div>
               <div> <i class="fas fa-lemon FilteredIngredients_icon"></i>Chicken </div>
               <div> <i class="fas fa-lemon FilteredIngredients_icon"></i>Broccoli </div>
           </div>
        );
    }
}

export default Ingredient;